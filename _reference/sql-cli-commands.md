---
title: [TQL reference]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
TQL is the ThoughtSpot language for entering SQL commands. This reference lists TQL commands you can use to do things like creating a schema or verifying a data load.

## TQL commands

You can use TQL either [through the ThoughtSpot application's web interface]({{ site.baseurl }}/admin/loading/upload-sql-script.html#) or the [command line interface]({{ site.baseurl }}/reference/sql-cli-commands.html#) in the Linux shell.

{% include note.html content="Worksheets and pinboards in ThoughtSpot are dependent upon the data in the underlying tables. Use caution when modifying tables directly. If you change or remove a schema on which those objects rely, the objects could become invalid." %}

You can use TQL to view and modify schemas and data in tables. Remember to add a semicolon after each command. Commands are not case sensitive but are capitalized here for readability.

When referring to objects using fully qualified object names, the syntax is:

```
"database"."schema"."table"
```

As a best practice, you should enclose object names (database, schema, table, and column) in double quotes, and column values in single quotes.

## Basic commands

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>help</code>
         </td>
         <td>Displays command help.</td>
         <td>
            <code>TQL&gt; help</code>
         </td>
      </tr>
   </tbody>
</table>

## View schemas and data

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>SHOW DATABASES</code>
         </td>
         <td>Lists all available databases.</td>
         <td>
            <code>TQL&gt; SHOW DATABASES;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>USE &lt;<var>database</var>&gt;</code>
         </td>
         <td>Switches the context to the specified database. This is required if queries
            do not use fully qualified names (database.schema.table) for specifying
            tables.
         </td>
         <td>
            <code>TQL&gt; USE "fruit_database";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SHOW SCHEMAS</code>
         </td>
         <td>Lists all schemas within the current database.</td>
         <td>
            <code>TQL&gt; SHOW SCHEMAS;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SHOW TABLES</code>
         </td>
         <td>Lists all tables within the current database by schema.</td>
         <td>
            <code>TQL&gt; SHOW TABLES;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SHOW TABLE &lt;<var>table</var>&gt;</code>
         </td>
         <td>Lists all the columns for a table.</td>
         <td>
            <code>TQL&gt; SHOW TABLE
     "locations";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SCRIPT SERVER</code>
         </td>
         <td>Generates the TQL schema for all tables in all databases on the
            server.
         </td>
         <td>
            <code>TQL&gt; SCRIPT SERVER;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SCRIPT DATABASE
   &lt;<var>database</var>&gt;</code>
         </td>
         <td>Generates the TQL schema for all tables in a database.</td>
         <td>
            <code>TQL&gt; SCRIPT DATABASE
     "fruit_database";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SCRIPT TABLE &lt;<var>table</var>&gt;</code>
         </td>
         <td>Generates the TQL schema for a table.</td>
         <td>
            <code>TQL&gt; SCRIPT TABLE
     "vendor";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>SELECT
   &lt;<var>cols_or_expr</var>&gt;
   FROM &lt;<var>table_list</var>&gt;
   [WHERE &lt;<var>predicates</var>&gt;]
   [GROUP BY &lt;<var>expr</var>&gt;]
   [ORDER BY &lt;<var>expr</var>&gt;]</code>
         </td>
         <td>
            Shows specified set of table data.
            <p>If you do not specify the TOP number of
               rows to select, the top 50 rows will be returned by default. The number of rows
               to return can be set using the <span class="ph">TQL</span> command line flag:
            </p>
            <p><code>--query_results</code></p>
            <p><code>_apply_top_row_count</code></p>
            <p>You can use the following aggregation functions:</p>
            <ul>
               <li>sum</li>
               <li>count</li>
               <li>count distinct</li>
               <li>stddev</li>
               <li>avg</li>
               <li>variance</li>
               <li>min</li>
               <li>max </li>
            </ul>
            <div>
               You can use the following date functions:
               <ul>
                  <li>absyear</li>
                  <li>absmonth</li>
                  <li>absday</li>
                  <li>absquarter</li>
                  <li>date</li>
                  <li>time</li>
               </ul>
            </div>
         </td>
         <td>
          <code>TQL&gt; SELECT
     TOP 10 "quantity"
     FROM "sales_fact";

TQL&gt; SELECT COUNT(*)
     FROM "vendor";

TQL&gt; SELECT "vendor",
     SUM("quantity")
     FROM "sales_fact"
     GROUP BY "vendor";

TQL&gt; SELECT "vendor",
     SUM("amount")
     FROM "vendor",
     "sales_fact"
     WHERE
     "sales_fact"."vendorid"
     = "vendor"."vendorid"
     AND "amount" &gt; 100
     GROUP BY "vendor"
     ORDER BY "amount" DESC;

TQL&gt; SELECT "vendor",
     SUM("quantity")
     FROM "sales_fact"
     GROUP BY "vendor"
     LIMIT 10;</code>
         </td>
      </tr>
   </tbody>
</table>

## Schema creation

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>CREATE DATABASE
   &lt;<var>database</var>&gt;</code>
         </td>
         <td>Creates a database.</td>
         <td>
            <code>TQL&gt; CREATE DATABASE
     "fruit_database";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>CREATE SCHEMA
   &lt;<var>schema</var>&gt;</code>
         </td>
         <td>Creates a schema within the current database.</td>
         <td>
            <code>TQL&gt; CREATE SCHEMA
     "fruit_schema";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>CREATE TABLE &lt;<var>table</var>&gt;
   (&lt;<var>column_definitions</var>&gt;
   [&lt;<var>constraints</var>&gt;])
   [PARTITION BY HASH
   (&lt;<var>number</var>&gt;)
   [KEY ("&lt;<var>column</var>&gt;")]])</code>
         </td>
         <td>
            Creates a table with the specified column definitions and constraints.
            <p>Use
               PARTITION BY HASH to shard a table across all nodes. If no KEY is specified, the
               table will be randomly sharded.
            </p>
            <p>Note that you can specify relationship
               constraints (FOREIGN KEY or RELATIONSHIP) in the CREATE TABLE statement. But it
               is recommended to define these using ALTER TABLE statements at the end of your
               TQL script, after creating your tables. This works better in scripts, because it
               guarantees that tables are created before they are referenced in the constraint
               definitions.
            </p>
         </td>
         <td>
            <code>TQL&gt; CREATE TABLE "vendor"
     ("vendorid" int,
     "name" varchar(255));

TQL&gt; CREATE TABLE "sales_fact"
     ("saleid" int,
     "locationid" int,
     "vendorid" int,
     "quantity" int,
     "sale_amount" double,
     "fruitid" int,
     CONSTRAINT
     PRIMARY KEY("saleid"))
     PARTITION BY HASH(96)
     KEY ("saleid");</code>
         </td>
      </tr>
   </tbody>
</table>

## Schema modification

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>DROP DATABASE
   &lt;<var>database</var>&gt;</code>
         </td>
         <td>Drops a database and all of its schemas and tables.</td>
         <td>
            <code>TQL&gt; DROP DATABASE
     "fruit_database";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>DROP SCHEMA
   &lt;<var>schema</var>&gt;</code>
         </td>
         <td>Drops a schema within the current database, and drops all of the tables in
            the schema.
         </td>
         <td>
            <code>TQL&gt; DROP SCHEMA
     "fruit_schema";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>DROP TABLE &lt;<var>table</var>&gt;</code>
         </td>
         <td>Drops a table.</td>
         <td>
            <code>TQL&gt; DROP TABLE "location";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   ADD|DROP|RENAME
   COLUMN &lt;<var>column</var>&gt;</code>
         </td>
         <td>
            Alters a table to add, drop, or rename a column.
            <p>When you add a column to
               an existing table, you must provide a default value to use for existing
               rows.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE "cart"
     ADD COLUMN
     "nickname" varchar(255)
     DEFAULT 'no nickname';

TQL&gt; ALTER TABLE "cart"
     DROP COLUMN "nickname";

TQL&gt; ALTER TABLE "cart"
     RENAME COLUMN "nickname"
     TO "shortname";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>TRUNCATE TABLE
   &lt;<var>table</var>&gt;</code>
         </td>
         <td>
            Removes all data from a table, but preserves its metadata, including all
            GUIDs, relationships, etc. This can be used to force a new schema for a table
            without losing the metadata.
            <p>However, this operation removes all existing data
               from the table and must be used with caution. You must reload the data following
               a TRUNCATE, or all dependent objects (worksheets and pinboards) in <span class="ph">ThoughtSpot</span> will become invalid.
            </p>
         </td>
         <td>
            <code>TQL&gt; TRUNCATE TABLE
     "location";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   DROP CONSTRAINT
   PRIMARY KEY;</code>
         </td>
         <td>
            Drops the primary key from a table.
            <p>Note that if you then add a new
               primary key, the same upsert behavior will be applied as with adding any primary
               key. This can result in data deletion, so make sure you understand how the
               upsert will affect your data ahead of time.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE "sales"
     DROP CONSTRAINT
     PRIMARY KEY;

TQL&gt; ALTER TABLE "sales"
     ADD CONSTRAINT
     PRIMARY KEY ("PO_number");</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   DROP CONSTRAINT [FOREIGN KEY|
   RELATIONSHIP]
   &lt;<var>name</var>&gt;;</code>
         </td>
         <td>Drops the named foreign key or relationship between two tables.</td>
         <td>
            <code>TQL&gt; ALTER TABLE
     "sales_fact"
     DROP CONSTRAINT FOREIGN KEY
     "FK_PO_number";

TQL&gt; ALTER TABLE "fruit_dim"
     DROP RELATIONSHIP "REL_dates";</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   DROP [CONSTRAINT
   FOREIGN KEY
   [&lt;<var>table_name</var>&gt;]
   | RELATIONSHIP [WITH
   &lt;<var>table_name</var>&gt;];</code>
         </td>
         <td>
            You must use this syntax when dropping relationships between tables created
            before ThoughtSpot version 3.2. This is because relationships could not be named
            in older versions.
            <div>
               Drops the foreign key or relationship between two tables
               where you cannot reference it by relationship name. If the relationship was
               created without a name, use:
               <ul class="ul" id="reference_cbc_fx4_j4__ul_qzq_wyn_cv">
                  <li>the name of the referenced table, for a foreign key.</li>
                  <li>the name of the related table, for a relationship.</li>
               </ul>
            </div>
            <p>If you drop a foreign key without specifying the referenced table,
               all foreign keys from the table you are altering will be dropped.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE "shipments"
     DROP CONSTRAINT
     FOREIGN KEY "orders";

TQL&gt; ALTER TABLE "wholesale_buys"
     DROP RELATIONSHIP
     WITH "retail_sales";

/*   Drops all relationships
     that have wholesale_buys
     as a source.
*/

TQL&gt; ALTER TABLE "wholesale_buys"
     DROP RELATIONSHIP;

/*   Drops all foreign keys
     from wholesale_buys.
*/

TQL&gt; ALTER TABLE "wholesale_buys"
     DROP CONSTRAINT
     FOREIGN KEY;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   [SET DIMENSION |
   SET FACT
   [PARTITION BY HASH
   [(&lt;<var>shards</var>&gt;)]
   [KEY(&lt;<var>column</var>&gt;)]]]</code>
         </td>
         <td>
            <div>
               Changes the partitioning on a table by doing one of:
               <ul class="ul" id="reference_cbc_fx4_j4__ul_egx_4jg_wv">
                  <li>re-sharding a sharded table</li>
                  <li>changing a replicated table to a sharded table</li>
                  <li>changing a sharded table to a replicated (unsharded) table</li>
               </ul>
               <p>By default, ThoughtSpot does not shard dimension tables.</p>
            </div>
            <p>To change the partitioning on a table, or to change a dimension table to a
               sharded table, use ALTER TABLE...SET FACT PARTITION BY HASH...;
            </p>
            <p>To make a sharded table into a dimension table (replicated on every node),  use
               <code>ALTER TABLE...SET DIMENSION;</code> command.  
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE
     "sales_fact"
     SET FACT
     PARTITION BY HASH (96)
     KEY ("PO_number");

TQL&gt; ALTER TABLE "fruit_dim"
     SET DIMENSION;</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>ALTER TABLE &lt;<var>table</var>&gt;
   MODIFY COLUMN &lt;<var>column</var>&gt;
   &lt;<var>new_data_type</var>&gt;;</code>
         </td>
         <td>
            <p>Changes the data type of a column. This can have implications on sharding and
               primary key behavior. See <a class="xref" href="/admin/loading/about-data-type-conversion.html#concept_u2t_clg_wv" title="You can convert the data in a column from one data type to another by issuing a TQL command. There are some details you should be aware of when doing a data type conversion.">About data type conversion</a>.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE fact100
     MODIFY COLUMN product_id int;</code>
         </td>
      </tr>
   </tbody>
</table>

## Modify Schema

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>INSERT INTO
   &lt;<var>table</var>&gt;
   VALUES ...</code>
         </td>
         <td>Inserts values into a table. Only use this for testing. Do not use INSERT on
            a production system.
         </td>
         <td>
            <code>TQL&gt; INSERT INTO "vendor"
     VALUES ('helen rose',
     'jacob norse',
     'eileen ruff',
     'manny gates');</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>UPDATE &lt;<var>table</var>&gt;
   ... SET ...
   [WHERE ...]</code>
         </td>
         <td>Updates rows in a table that match optionally provided predicates. Predicates
            have the form column = value connected by the AND keyword. Sets the column values
            to the specified values.
         </td>
         <td>
            <code>TQL&gt; UPDATE "location"
     SET "borough" =
     'staten island',
     "city" = 'new york'
     WHERE "borough" =
     'staten isl'
     AND city = 'NY';</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>DELETE FROM
   &lt;<var>table</var>&gt; [WHERE...]</code>
         </td>
         <td>Deletes rows from a table that match optionally provided predicates.
            Predicates have the form column = value connected by the AND keyword.
         </td>
         <td>
            <code>TQL&gt; DELETE FROM "vendor"
     WHERE
     "name" = 'Joey Smith'
     AND
     "vendorid" = '19463';</code>
         </td>
      </tr>
   </tbody>
</table>

## Constraints and relationships

Constraints and relationships in ThoughtSpot are used to define the relationships between tables (i.e. how they can be joined). However, constraints are not enforced, as they would be in a transactional database. You can define the following constraints when creating a table with CREATE TABLE, or add them to an existing table using the ADD CONSTRAINT syntax:

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>PRIMARY KEY</td>
         <td>
            Designates a unique, non-null value as the primary key for a table. This can
            be one column or a combination of columns.
            <p>If values are not unique, an upsert
               will be performed if a row includes a primary key that is already present in the
               data.
            </p>
         </td>
         <td>
            <code>CREATE TABLE "schools" (
     "schoolID" varchar(15),
     "schoolName" varchar(255),
     "schoolCity" varchar(55),
     "schoolState" varchar(55),
     "schoolNick" varchar(55),
     CONSTRAINT
     PRIMARY KEY ("schoolID")
     ) ;

TQL&gt; ALTER TABLE "cart"
     ADD CONSTRAINT
     PRIMARY KEY ("cart_id");

TQL&gt; ALTER TABLE "cart"
     DROP CONSTRAINT
     PRIMARY KEY "cart_id";</code>
         </td>
      </tr>
      <tr>
         <td>FOREIGN KEY</td>
         <td>
            Defines a relationship where the value(s) in the table are used to join to a
            second table. Uses an equality operator. The foreign key must match the primary
            key of the table that is referenced in number, column type, and order of
            columns.
            <p>When creating a foreign key, give it a name. You can reference the
               foreign key name later, if you want to remove it.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE "batting"
     ADD CONSTRAINT "FK_player"
     FOREIGN KEY ("playerID")
     REFERENCES "players" ("playerID");

TQL&gt; ALTER TABLE "batting"
     ADD CONSTRAINT "FK_lg_team"
     FOREIGN KEY ("lgID" ,"teamID")
     REFERENCES "teams"
     ("lgID" ,"teamID");

TQL&gt; ALTER TABLE "shipment"
     ADD CONSTRAINT
     "FK_PO_vendor"
     FOREIGN KEY ("po_number",
     "vendor")
     REFERENCES "orders"
     ("po_number", "vendor");

TQL&gt; ALTER TABLE "shipment"
     DROP CONSTRAINT "FK_PO_vendor";</code>
         </td>
      </tr>
      <tr>
         <td>RELATIONSHIP</td>
         <td>
            Defines a relationship where the value(s) in the table can be used to join to
            a second table, using an equality condition (required) and one or more range
            conditions (optional). These conditions act like a WHERE clause when the two
            tables are joined. They are applied using AND logic, such that all conditions must
            be met for a row to be included.
            <p>You may add multiple relationships between
               tables.
            </p>
            <p>When creating a relationship, give it a name. You can reference
               the relationship name later, if you want to remove it.
            </p>
         </td>
         <td>
            <code>TQL&gt; ALTER TABLE "wholesale_buys"
     ADD RELATIONSHIP "REL_fruit"
     WITH "retail_sales"
     AS "wholesale_buys"."fruit"
     = "retail_sales"."fruit"
     AND
     ("wholesale_buys"."date_order"
     &lt; "retail_sales"."date_sold"
     AND
     "retail_sales"."date_sold" &lt;
     "wholesale_buys"."expire_date");

TQL&gt; ALTER TABLE "wholesale_buys"
     DROP RELATIONSHIP "REL_fruit";</code>
         </td>
      </tr>
   </tbody>
</table>

## Flags

The `--query_results_apply_top_row_count <number>` flag can be used with TQL to limit the number of result rows returned by a query. For example:

`$ tql --query_results_apply_top_row_count 100`

## Data types

ThoughtSpot supports a simplified list of data types:

<table style="font-size:90%;" cellpadding="4" cellspacing="0" summary="" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%">
      <col style="width:45%">
      <col style="width:30%">
   </colgroup>
   <thead >
      <tr>
         <th>Syntax</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Character</td>
         <td>
            <ul class="ul" id="reference_cbc_fx4_j4__d109e35">
               <li>VARCHAR(<em class="ph i">n</em>)</li>
            </ul>
         </td>
         <td>Specify the maximum number of characters, as in VARCHAR(255). The size limit is 1GB for
            VARCHAR values.
         </td>
      </tr>
      <tr>
         <td>Floating point</td>
         <td>
            <ul class="ul" id="reference_cbc_fx4_j4__d109e47">
               <li>DOUBLE</li>
               <li>FLOAT</li>
            </ul>
         </td>
         <td>DOUBLE is recommended.</td>
      </tr>
      <tr>
         <td>Boolean</td>
         <td>
            <ul class="ul" id="reference_cbc_fx4_j4__d109e58">
               <li>BOOL</li>
            </ul>
         </td>
         <td>Can be <code class="ph codeph">true</code> or <code class="ph codeph">false</code>.</td>
      </tr>
      <tr>
         <td>Integer</td>
         <td>
            <ul class="ul" id="reference_cbc_fx4_j4__d109e73">
               <li>INT</li>
               <li>BIGINT</li>
            </ul>
         </td>
         <td>
            INT holds 32 bits.
            <p>BIGINT holds 64 bits.</p>
         </td>
      </tr>
      <tr>
         <td>Date or time</td>
         <td>
            <ul class="ul" id="reference_cbc_fx4_j4__d109e86">
               <li>DATE</li>
               <li>DATETIME</li>
               <li>TIMESTAMP</li>
               <li>TIME</li>
            </ul>
         </td>
         <td>
            DATETIME, TIMESTAMP, and TIME are stored at the granularity of seconds.
            <p>TIMESTAMP is
               identical to DATETIME, but is included for syntax
               compatibility.
            </p>
         </td>
      </tr>
   </tbody>
</table>
