---
title: [Sharding]
tags:
keywords: sharding,partitioning,distribution,dimension,split,table,shard,partition,performance
last_updated: tbd
summary: "Sharding partitions very large tables into smaller, faster, more easily managed parts called data shards."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot has two different ways to store tables. Tables can be replicated
meaning each table is stored in its entirety on each node. Alternatively, a
table can be sharded. Sharding your tables impacts the total amount of memory
used by the table as well as its performance.  ThoughtSpot recommend _sharding_
whenever possible.

Sharding divides a single table into multiple tables that have the same schema
but different sets of data. Sharding is a type partitioning and is sometimes
called _Horizontal partitioning_. The term sharding is particular to situations
where data is distributed not only across tables but across nodes in a system.

For example, you might shard a large table of sales data. So, you could divide a
single sales table into shards each of which contains only the data falling
within a single year. These shards are then distributed across several nodes.
Requests for sales data are dispersed both by the year and the location of the
shard in the node cluster. No single table or node is overloaded and so
performance of a query and of the system load are both improved.

To optimize ThoughtSpot performance, you should _shard_ very large fact tables.
If you have a large dimension table, you might choose to shard it along with the
fact table it is joined with. Sharding both the fact and dimension table is
known as _co-sharding_.

## How to choose a shard key

When you shard a large table, you must select a _shard key_ from the table. This
key exists in every shard. You can use any data type that is valid for use as
index columns as shard key. Choosing a shard key plays an important role in the
number of shards and the size of any single shard.

A shard key should contain a value that has a good distribution (roughly
the number of rows with each value in that column). This value is typically the
primary key, but it can be any single column or a set of columns. For example:

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

Notice the shard key contains the `saleid` value ths is also contained
in the primary key. When creating a shard key use these guidelines.

* Include one or more values of the original table's primary key in the shard key.

  This prevents scenarios where the data with the same primary key ends up in
  different shards and/or nodes because the shard key changed.

* If you expect to join two tables that are both sharded, make sure both tables
use the same shard key.

  This guidelines ensures better join performance.  So, for example, if you have two tables
  and the primary keys are:

  `PRIMARY KEY("saleid,vendorid")` on A
  `PRIMARY KEY("saleid,custerid")` on B

   You should use `saleid` for your shared key when you shard both table A and B.

* Choose a shard key so that the data is distributed well across the keys.  

  For example, suppose the table you want to shard has a primary key made up of
  `saleid`,`custid`,and `locationid`.  If you have 10K sales but 400 locations,
  and 2000 customers, you would not want to use the `locationid` in your shard
  key if 5k sales were concentrated in just 2 locations. The result would be
  data in fewer shards and degrading of your performance. Instead, your shard
  key may be `custid`,and `locationid`.

* Choose a shard key that results in a wide variety of keys.  

  For example, suppose the table you want to shard has a primary key made up of
  `saleid`,`productid`,and `locationid`.  Suppose the table has  10K sales, 40
  locations, and 200 products. If the sales are evenly distributed across
  locations you would not want to use the `locationid` in your shard key.
  Instead, `saleid` and `productid` would be the better choice as it results in
  a wider variety of keys.

Finally, it is possible to simply use the primary key as a shard key.


## How to shard

To specify the number of shards, add `PARTITION BY HASH ( )` to your `CREATE
TABLE` statement.

```
TQL> CREATE TABLE ...
...PARTITION BY HASH (96) KEY ("customer_id");
```

The `HASH` parameter determines the number of shards and the `KEY` parameter the
sharding key. The recommended number of shards depends upon the number of nodes
in your cluster:

|Number of Nodes|Number of Shards|
|---------------|----------------|
|3|96|
|4-12|128|
|13-24|256|
|25-36|384|
|37-48|512|
|49-60|640|
|61-72|768|

If you omit the `PARTION BY HASH` statement or if the `HASH` value is 1 (one), the
table is unsharded. This also means the table physically exists in its entirety
on each node.

If you want to use the primary key for sharding, specify that the table
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

The system does not use primary keys as sharding keys by default. If you specify
the `PARTION BY HASH` statement with a `HASH` greater than 1 (one) _but omit the
`KEY` parameter_ ThoughtSpot shards the table randomly. This is not recommended;
avoid this by always ensuring you specify the `KEY` parameter with a HASH
greater than 1 (one).


## Sharded dimension tables

By default, ThoughtSpot does not shard dimension tables. In a typical schema,
you'd have a sharded fact table with foreign keys to small dimension tables.
These small dimension tables are replicated in their entirety and distributed on
every node. This works best where dimension tables under 50MB in size.

If you have a large dimension table, replicating it and distributing it can
impact the performance of your ThoughtSpot System. In this case, you want to
shard the dimension tables and distribute it the same way as the fact table it
joins to.

When sharding  both a fact and its dimension table (known as co-sharding) keep
in mind the guidance for creating a shard key. Only shard dimension tables if
the dimension table is large (over 50MB) and the join between the fact and
dimension tables use the same columns. Specifically, the tables must:

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

You can also join two sharded fact tables with different shard keys, this is
know as _non co-sharded_ tables. It may take a while to join two tables sharded
on different keys since a lot of data redistribution is required. Therefore,
ThoughtSpot recommends that you use a common shard key for two fact tables.

You are not limited by the column connection or relationship type.
