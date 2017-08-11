---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# TQL reference

TQL is the ThoughtSpot language for entering SQL commands. This reference lists TQL commands you can use to do things like creating a schema or verifying a data load.

## TQL commands

You can use TQL either [through the ThoughtSpot application's web interface](../loading/upload_sql_script.html#) or the [command line interface](../loading/sql_cli.html#) in the Linux shell.

Note that the worksheets and pinboards in ThoughtSpot are dependent upon the data in the underlying tables. Use caution when modifying tables directly. If you change or remove a schema on which those objects rely, the objects could become invalid.

You can use TQL to view and modify schemas and data in tables. Remember to add a semicolon after each command. Commands are not case sensitive but are capitalized here for readability.

When referring to objects using fully qualified object names, the syntax is:

```
"database"."schema"."table"
```

As a best practice, you should enclose object names \(database, schema, table, and column\) in double quotes, and column values in single quotes.

|Syntax|Description|Examples|
|------|-----------|--------|
|```
help
```

|Displays command help.| ```
TQL> help
```

 |

|Syntax|Description|Examples|
|------|-----------|--------|
| ```
SHOW DATABASES
```

 |Lists all available databases.| ```
TQL> SHOW DATABASES;
```

 |
| ```
USE <database>
```

 |Switches the context to the specified database. This is required if queries do not use fully qualified names \(database.schema.table\) for specifying tables.| ```
TQL> USE "fruit_database";
```

 |
| ```
SHOW SCHEMAS
```

 |Lists all schemas within the current database.| ```
TQL> SHOW SCHEMAS;
```

 |
| ```
SHOW TABLES
```

 |Lists all tables within the current database by schema.| ```
TQL> SHOW TABLES;
```

 |
| ```
SHOW TABLE <table>
```

 |Lists all the columns for a table.| ```
TQL> SHOW TABLE 
     "locations";
```

 |
| ```
SHOW VIEWS
```

 |Lists all views within the current database by schema.| ```
TQL> SHOW VIEWS;
```

 |
| ```
SCRIPT SERVER
```

 |Generates the TQL schema for all tables in all databases on the server.| ```
TQL> SCRIPT SERVER;
```

 |
| ```
SCRIPT DATABASE 
   <database>
```

 |Generates the TQL schema for all tables in a database.| ```
TQL> SCRIPT DATABASE 
     "fruit_database";
```

 |
| ```
SCRIPT TABLE <table>
```

 |Generates the TQL schema for a table.| ```
TQL> SCRIPT TABLE 
     "vendor";
```

 |
| ```
SELECT 
   <cols\_or\_expr> 
   FROM <table\_list> 
   [WHERE <predicates>]
   [GROUP BY <expr>] 
   [ORDER BY <expr>]
```

 |Shows specified set of table data. If you do not specify the TOP number of rows to select, the top 50 rows will be returned by default. The number of rows to return can be set using the TQL command line flag:

`--query_results`

`_apply_top_row_count`

You can use the following aggregation functions:

-   sum
-   count
-   count distinct
-   stddev
-   avg
-   variance
-   min
-   max

You can use the following date functions:

-   absyear
-   absmonth
-   absday
-   absquarter
-   date
-   time

| ```LINE_BREAK
TQL> SELECT 
     TOP 10 "quantity" 
     FROM "sales_fact";

TQL> SELECT COUNT(*)
     FROM "vendor";

TQL> SELECT "vendor", 
     SUM("quantity") 
     FROM "sales_fact"
     GROUP BY "vendor";

TQL> SELECT "vendor", 
     SUM("amount")
     FROM "vendor", 
     "sales_fact"
     WHERE 
     "sales_fact"."vendorid" 
     = "vendor"."vendorid" 
     AND "amount" > 100
     GROUP BY "vendor"
     ORDER BY "amount" DESC;

TQL> SELECT "vendor", 
     SUM("quantity") 
     FROM "sales_fact" 
     GROUP BY "vendor"
     LIMIT 10;
```

 |

|Syntax|Description|Examples|
|------|-----------|--------|
| ```
CREATE DATABASE 
   <database>
```

 |Creates a database.| ```
TQL> CREATE DATABASE 
     "fruit_database";
```

 |
| ```
CREATE SCHEMA 
   <schema>
```

 |Creates a schema within the current database.| ```
TQL> CREATE SCHEMA 
     "fruit_schema";
```

 |
| ```
CREATE TABLE <table>
   (<column\_definitions>
   [<constraints>])
   [PARTITION BY HASH 
   (<number>)
   [KEY ("<column>")]])
```

 |Creates a table with the specified column definitions and constraints.Use PARTITION BY HASH to shard a table across all nodes. If no KEY is specified, the table will be randomly sharded.

Note that you can specify relationship constraints \(FOREIGN KEY or RELATIONSHIP\) in the CREATE TABLE statement. But it is recommended to define these using ALTER TABLE statements at the end of your TQL script, after creating your tables. This works better in scripts, because it guarantees that tables are created before they are referenced in the constraint definitions.

| ```
TQL> CREATE TABLE "vendor"
     ("vendorid" int, 
     "name" varchar(255)); 

TQL> CREATE TABLE "sales_fact"
     ("saleid" int, 
     "locationid" int, 
     "vendorid" int, 
     "quantity" int, 
     "sale_amount" double, 
     "fruitid" int,
     CONSTRAINT 
     PRIMARY KEY("saleid"))
     PARTITION BY HASH(96) 
     KEY ("saleid");
```

 |

|Syntax|Description|Examples|
|------|-----------|--------|
| ```
DROP DATABASE 
   <database>
```

 |Drops a database and all of its schemas and tables.| ```
TQL> DROP DATABASE 
     "fruit_database";
```

 |
| ```
DROP SCHEMA 
   <schema>
```

 |Drops a schema within the current database, and drops all of the tables in the schema.| ```
TQL> DROP SCHEMA 
     "fruit_schema";
```

 |
| ```
DROP TABLE <table>
```

 |Drops a table.| ```
TQL> DROP TABLE "location";
```

 |
| ```
ALTER TABLE <table> 
   ADD|DROP|RENAME 
   COLUMN <column>
```

 |Alters a table to add, drop, or rename a column. When you add a column to an existing table, you must provide a default value to use for existing rows.

| ```
TQL> ALTER TABLE "cart" 
     ADD COLUMN 
     "nickname" varchar(255) 
     DEFAULT 'no nickname';

TQL> ALTER TABLE "cart" 
     DROP COLUMN "nickname";

TQL> ALTER TABLE "cart"
     RENAME COLUMN "nickname" 
     TO "shortname";
```

 |
| ```
TRUNCATE TABLE 
   <table>
```

 |Removes all data from a table, but preserves its metadata, including all GUIDs, relationships, etc. This can be used to force a new schema for a table without losing the metadata. However, this operation removes all existing data from the table and must be used with caution. You must reload the data following a TRUNCATE, or all dependent objects \(worksheets and pinboards\) in ThoughtSpot will become invalid.

| ```
TQL> TRUNCATE TABLE 
     "location";
```

 |
| ```
ALTER TABLE <table>
   DROP CONSTRAINT
   PRIMARY KEY;
```

 |Drops the primary key from a table. Note that if you then add a new primary key, the same upsert behavior will be applied as with adding any primary key. This can result in data deletion, so make sure you understand how the upsert will affect your data ahead of time.

| ```
TQL> ALTER TABLE "sales"
     DROP CONSTRAINT 
     PRIMARY KEY;

TQL> ALTER TABLE "sales"
     ADD CONSTRAINT
     PRIMARY KEY ("PO_number");
```

 |
| ```
ALTER TABLE <table>
   DROP [FOREIGN KEY|
   RELATIONSHIP]
   <name>;
```

 |Drops the named foreign key or relationship between two tables.| ```
TQL> ALTER TABLE 
     "sales_fact" 
     DROP FOREIGN KEY
     "FK_PO_number";

TQL> ALTER TABLE "fruit_dim"
     DROP RELATIONSHIP "REL_dates";
```

 |
| ```
ALTER TABLE <table>
   DROP [CONSTRAINT 
   FOREIGN KEY
   [<table\_name>]
   | RELATIONSHIP [WITH
   <table\_name>];
```

 |You must use this syntax when dropping relationships between tables created before ThoughtSpot version 3.2. This is because relationships could not be named in older versions.Drops the foreign key or relationship between two tables where you cannot reference it by relationship name. If the relationship was created without a name, use:

-   the name of the referenced table, for a foreign key.
-   the name of the related table, for a relationship.

If you drop a foreign key without specifying the referenced table, all foreign keys from the table you are altering will be dropped.

| ```
TQL> ALTER TABLE "shipments" 
     DROP CONSTRAINT 
     FOREIGN KEY "orders";

TQL> ALTER TABLE "wholesale_buys" 
     DROP RELATIONSHIP 
     WITH "retail_sales";

/*   Drops all relationships 
     that have wholesale_buys 
     as a source.
*/

TQL> ALTER TABLE "wholesale_buys" 
     DROP RELATIONSHIP;

/*   Drops all foreign keys 
     from wholesale_buys.
*/

TQL> ALTER TABLE "wholesale_buys" 
     DROP CONSTRAINT
     FOREIGN KEY;
```

 |
| ```
ALTER TABLE <table>
   [SET DIMENSION | 
   SET FACT 
   [PARTITION BY HASH 
   [(<shards>)]
   [KEY(<column>)]]]
```

 | Changes the partitioning on a table by doing one of:

-   re-sharding a sharded table.
-   changing a replicated table to a sharded table.
-   changing a sharded table to a replicated table.

 To change the partitioning on a table, or to change a dimension table to a sharded table, use ALTER TABLE...SET FACT PARTITION BY HASH...;

 To make a sharded table into a dimension table \(replicated on every node\), use ALTER TABLE...SET DIMENSION;

 | ```
TQL> ALTER TABLE 
     "sales_fact" 
     SET FACT
     PARTITION BY HASH (96) 
     KEY ("PO_number");

TQL> ALTER TABLE "fruit_dim"
     SET DIMENSION;
```

 |
| ```
ALTER TABLE <table>
   MODIFY COLUMN <column>
   <new\_data\_type>;
```

 | Changes the data type of a column. This can have implications on sharding and primary key behavior. See [About data type conversion](../loading/about_data_type_conversion.html#).

 | ```
TQL> ALTER TABLE fact100
     MODIFY COLUMN product_id int;
```

 |

|Syntax|Description|Examples|
|------|-----------|--------|
| ```
INSERT INTO 
   <table> 
   VALUES ...
```

 |Inserts values into a table. Only use this for testing. Do not use INSERT on a production system.| ```
TQL> INSERT INTO "vendor"
     VALUES 'helen rose',
     'jacob norse',
     'eileen ruff',
     'manny gates';
```

 |
| ```
UPDATE <table> 
   ... SET ...
   [WHERE ...]
```

 |Updates rows in a table that match optionally provided predicates. Predicates have the form column = value connected by the AND keyword. Sets the column values to the specified values.| ```
TQL> UPDATE "location"
     SET "borough" = 
     'staten island', 
     "city" = 'new york'
     WHERE "borough" = 
     'staten isl' 
     AND city = 'NY';
```

 |
| ```
DELETE FROM 
   <table> [WHERE...]
```

 |Deletes rows from a table that match optionally provided predicates. Predicates have the form column = value connected by the AND keyword.| ```
TQL> DELETE FROM "vendor" 
     WHERE 
     "name" = 'Joey Smith' 
     AND 
     "vendorid" = '19463';
```

 |

## Constraints and relationships

Constraints and relationships in ThoughtSpot are used to define the relationships between tables \(i.e. how they can be joined\). However, constraints are not enforced, as they would be in a transactional database. You can define the following constraints when creating a table with CREATE TABLE, or add them to an existing table using the ADD CONSTRAINT syntax:

|Constraint|Description|Example|
|----------|-----------|-------|
|PRIMARY KEY|Designates a unique, non-null value as the primary key for a table. This can be one column or a combination of columns.If values are not unique, an upsert will be performed if a row includes a primary key that is already present in the data.

| ```
CREATE TABLE "schools" (
     "schoolID" varchar(15),
     "schoolName" varchar(255),
     "schoolCity" varchar(55),
     "schoolState" varchar(55),
     "schoolNick" varchar(55),
     CONSTRAINT 
     PRIMARY KEY ("schoolID")
     ) ;

TQL> ALTER TABLE "cart"
     ADD CONSTRAINT 
     PRIMARY KEY ("cart_id");

TQL> ALTER TABLE "cart"
     DROP CONSTRAINT 
     PRIMARY KEY "cart_id";
```

 |
|FOREIGN KEY|Defines a relationship where the value\(s\) in the table are used to join to a second table. Uses an equality operator. The foreign key must match the primary key of the table that is referenced in number, column type, and order of columns.When creating a foreign key, give it a name. You can reference the foreign key name later, if you want to remove it.

| ```
TQL> ALTER TABLE "batting" 
     ADD CONSTRAINT "FK_player"
     FOREIGN KEY ("playerID") 
     REFERENCES "players" ("playerID");

TQL> ALTER TABLE "batting" 
     ADD CONSTRAINT "FK_lg_team"
     FOREIGN KEY ("lgID" ,"teamID") 
     REFERENCES "teams" 
     ("lgID" ,"teamID");

TQL> ALTER TABLE "shipment" 
     ADD CONSTRAINT 
     "FK_PO_vendor"
     FOREIGN KEY ("po_number", 
     "vendor")
     REFERENCES "orders" 
     ("po_number", "vendor");

TQL> ALTER TABLE "shipment" 
     DROP CONSTRAINT "FK_PO_vendor";
```

 |
|RELATIONSHIP|Defines a relationship where the value\(s\) in the table can be used to join to a second table, using an equality condition \(required\) and one or more range conditions \(optional\). These conditions act like a WHERE clause when the two tables are joined. They are applied using AND logic, such that all conditions must be met for a row to be included.You may add multiple relationships between tables.

When creating a relationship, give it a name. You can reference the relationship name later, if you want to remove it.

| ```
TQL> ALTER TABLE "wholesale_buys" 
     ADD RELATIONSHIP "REL_fruit"
     WITH "retail_sales"
     AS "wholesale_buys"."fruit" 
     = "retail_sales"."fruit" 
     AND 
     ("wholesale_buys"."date_order"
     < "retail_sales"."date_sold" 
     AND
     "retail_sales"."date_sold" <
     "wholesale_buys"."expire_date");

TQL> ALTER TABLE "wholesale_buys" 
     DROP RELATIONSHIP "REL_fruit";
```

 |

## Flags

The following flag can be used with TQL:

`--query_results_apply_top_row_count <number>` 

limits to the number of result rows returned by a query.

Example: `$ tql --query_results_apply_top_row_count 100`

## Data types

ThoughtSpot supports a simplified list of data types:

|Kind of data|Supported data types|Details|
|------------|--------------------|-------|
|Character|-   VARCHAR\(*n*\)

|Specify the maximum number of characters, as in VARCHAR\(255\). The size limit is 1GB for VARCHAR values.|
|Floating point|-   DOUBLE
-   FLOAT

|DOUBLE is recommended.|
|Boolean|-   BOOL

|Can be `true` or `false`.|
|Integer|-   INT
-   BIGINT

|INT holds 32 bits.BIGINT holds 64 bits.

|
|Date or time|-   DATE
-   DATETIME
-   TIMESTAMP
-   TIME

|DATETIME, TIMESTAMP, and TIME are stored at the granularity of seconds. TIMESTAMP is identical to DATETIME, but is included for syntax compatibility.

|

**Parent topic:** [Reference](../../admin/reference/intro_reference.html)

