---
title: [Sharding]
last_updated: 3/4/2020
summary: "Sharding partitions very large tables into smaller, faster, more easily managed parts called data shards."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot tables can be replicated or sharded. Replicated tables exist in
their entirety, as the complete data set, on each node. Sharded tables consist of a
single data set, divided into multiple tables, or *shards*. The shards have
identical schemas, but different sets of data.

## When to use sharding

By default, ThoughtSpot replicates tables. To shard tables, you must add the `PARTITION BY HASH ( )` clause to your `CREATE TABLE` statement.

Sharding your tables impacts the total amount of memory used by the table, as
well as its performance.

For example, you might shard a large table of sales data. You could divide a
single sales table into shards that each contain only the data for a single year. The system then distributes these shards across several nodes.
Requests for sales data are dispersed both by the year and the location of the
shard in the node cluster. No single table or node is overloaded, improving both query performance and system load.

To optimize ThoughtSpot performance, you should _shard_ very large fact tables
whenever possible. If you have a large dimension table, you might choose to
shard it along with the fact table it is joined with. Sharding both the fact and
dimension table is known as _co-sharding_.

### Table sizes and sharding recommendations

|---------------           | ----------------             |
| Number of rows per shard | 5-10 million                 |
| Maximum                  | 10 million rows per shard    |   
| Maximum number of shards | ~ 80% of CPU cores           |   

### Example

|---------------           | ----------------               |
| Number of rows in table  | 1.1 billion                    |
| CPUS in cluster          | 256                            |   
| HASH (128)               | ~50% of total CPUs             |
| Rows per shard           | 8.6 million                    |

## How to shard

Sharding is a type of partitioning. It is sometimes called _Horizontal
partitioning_. The term _sharding_ is particular to situations where data is
distributed not only among tables, but also across nodes in the system. To create a sharded table, add the `PARTITION BY HASH ( )` clause to your `CREATE TABLE` statement.

```
TQL> CREATE TABLE
...
PARTITION BY HASH (96) KEY ("customer_id");
```

Note the following parameters, specifed above as `96` and `"customer_id"`:
<dl>
  <dlentry><dt>HASH</dt><dd>Determines the number of shards.</dd></dlentry>
  <dlentry><dt>KEY</dt><dd>Specifies how to assign data into the shards (sharding key).</dd></dlentry>
</dl>

The recommended number of shards depends on the number of nodes
in the cluster:

|Number of Nodes|Number of Shards|
|---------------|----------------|
|1 | 32  |
|2   | 64  |
|3|96|
|4-12|128|
|13-24|256|
|25-36|384|
|37-48|512|
|49-60|640|
|61-72|768|

If you omit the `PARTITION BY HASH` statement or if the `HASH` parameter is 1
(one), the table is unsharded. The table is replicated instead, and physically exists in
its entirety on each node.

If you want to use a table's primary key as the sharding key, specify that the table
is to be partitioned by `HASH` on the primary key, as in this example:

```
TQL> CREATE TABLE "supplier" (
  "s_suppkey" BIGINT,
  "s_name" VARCHAR(255),
  "s_address" VARCHAR(255),
  "s_city" VARCHAR(255),
  "s_phone" VARCHAR(255),
  CONSTRAINT PRIMARY KEY ("s_suppkey")
  )  PARTITION BY HASH (96) KEY ("s_suppkey");
```

## How to choose a sharding key

{% include tip.html content="We recommended that you always specify the `KEY` parameter when `HASH` is greater than 1. If you omit the `KEY` parameter in your `CREATE TABLE` statement, ThoughtSpot shards the table randomly." %}

ThoughtSpot does not have a default sharding key.

- If the table has no primary key, the sharding is unconstrained. You can choose ***any*** subset of columns that is valid for use as the primary key as the sharding key. If you do not specify the sharding key, ThoughtSpot implements random sharding.

- If the table has a primary key, you must specify the `KEY` parameter of the `PARTITION BY HASH` statement. This sharding key ***must*** be a subset of the primary key.

***DO***
```
...
CONSTRAINT PRIMARY KEY("saleid,vendorid”))
PARTITION BY HASH(n) KEY ("saleid");
```
```
...
CONSTRAINT PRIMARY KEY("saleid,vendorid”))
PARTITION BY HASH(n) KEY ("vendorid");
```
In the above examples, the table has a primary key. The `KEY` parameters specified, `saleid` and `vendorid`, are subsets of the primary key.

In the below example, the table has a primary key. The `KEY` parameter specified, `locationid`, is *not* a subset of the primary key, and therefore cannot be used as the sharding key.

***AVOID***
```
...
CONSTRAINT PRIMARY KEY("saleid,vendorid”))
PARTITION BY HASH(n) KEY ("locationid");
```

When you shard a large table, you select a _shard key_ from the table. This key
exists in every shard. Choosing a shard key plays an important role in
the number of shards and the size of any single shard.

## Best practices for choosing a shard key
Here is a full `CREATE TABLE` statement.

```
CREATE TABLE "sales_fact"
  ("saleid" int,
  "locationid" int,
  "vendorid" int,
  "quantity" int,
  "sale_amount" double,
  "fruitid" int,
  CONSTRAINT
PRIMARY KEY("saleid,vendorid"))
PARTITION BY HASH(96)
KEY ("saleid");
```

The shard key is a subset of the primary key. However, that is not the only guideline to follow when choosing a shard key.

1. If the table has a primary key, the sharding key ***must*** be a subset of the primary key.

    If the sharding key is ***not*** a subset of the primary key, and the sharding key changes, data with the same primary key may reside in different nodes. This impacts ThoughtSpot's performance.

2. Choose a sharding key that distributes data well across keys.

    For example, suppose the table you want to shard has a primary key made up of
    `saleid`,`custid`,and `locationid`. The table has 10K sales, 400 locations,
    and 2000 customers. If 5K sales are in just two locations, you should not use `locationid` as your sharding key. If you use `locationid` as your sharding key, you have data in fewer shards, which impacts performance. Instead, you should use `custid` or `locationid`.

3. Choose a sharding key that results in a wide variety of keys.

    For example, suppose the table you want to shard has a primary key made up of
    `saleid`,`productid`,and `locationid`. The table has 10K sales, 40
    locations, and 200 products. Even if the sales are evenly distributed across
    locations, you should not use `locationid` in your sharding key, because there are only 40 possible keys. Instead, use `saleid` or `productid` for more variety.

4. If you plan to join two or more tables that are both sharded, both tables must use the same shard key.

    This guideline ensures better join performance. For example, if you have two tables
    and the primary keys are:

    `PRIMARY KEY("saleid,vendorid")` on A<br>
    `PRIMARY KEY("saleid,custerid")` on B

    Use `saleid` as the sharding key when you shard both tables.

As mentioned in the previous section, it is possible to simply use the primary
key as a sharding key. You should not use a sharding key that is not a subset of the
primary key. If you use a sharding key that is not a subset of the primary key, it is
possible to get two versions of a record if the sharding key for a record changes,
but the primary key doesn't. In the absence of
a unique sharding key, the system create a secondary record rather than doing a SQL
MERGE (`upsert`).

## Sharded dimension tables

 In a typical schema,
you'd have a sharded fact table, with foreign keys to small dimension tables.
ThoughtSpot replicates these small dimension tables in their entirety and distributes them on every node. This works best if your dimension tables are under 50MB in size.

If you have a large dimension table, replicating it and distributing it can
impact the performance of your ThoughtSpot system. In this case, you want to
shard the dimension tables *and* the fact table.

When sharding both a fact table and its dimension table(s), (known as co-sharding) keep
in mind the guidance for creating a shard key. Only shard dimension tables if
the dimension table is large (over 50MB), and the join between the fact and
dimension tables uses the same columns. Specifically, the tables must:

-   be related by a primary key and foreign key
-   be sharded on the same primary key/foreign key
-   have the same number of regions (or shards)

If these requirements are met, ThoughtSpot automatically co-shards the tables
for you. Co-sharded tables are always joined on the sharding key. Data skew can
develop if a very large proportion of the rows have the same sharding key.

This example shows the `CREATE TABLE` statements that meet the criteria for
sharding both a fact table and its dimension table:

```
TQL> CREATE TABLE products_dim (
  "id" int,
  "prod_name" varchar(30),
  "prod_desc" varchar(100),
  PRIMARY KEY ("id")
)
PARTITION BY HASH (96) KEY ("id")
;

TQL> CREATE TABLE retail_fact (
  "trans_id" int,
  "product_id" int,
  "amount" double,
  FOREIGN KEY ("product_id") REFERENCES products_dim ("id")
)
PARTITION BY HASH (96) KEY ("product_id")
;
```

If a dimension table is joined to multiple fact tables, all of the fact tables
must be sharded in the same way as the dimension table. Self-joins are not
supported.

## Joining two sharded fact tables

You can also join two sharded fact tables with different shard keys. This is
known as _non co-sharded_ tables. It may take a while to join two tables sharded
on different keys, since ThoughtSpot has to redistribute your data. Therefore,
ThoughtSpot recommends that you use a common shard key for two fact tables.

You are not limited by the column connection or relationship type.
