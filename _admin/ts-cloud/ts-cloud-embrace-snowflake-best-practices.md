---
title: [Best Practices for Snowflake connections]
last_updated: 8/11/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After connecting to Snowflake, you may notice that some things don’t work as you expect. Here are helpful pointers on data modeling: best practices for improving the user experience by making small changes to the Snowflake schema in Snowflake, to optimize it for ThoughtSpot.

## Keep default collation settings

Collation settings in Snowflake compare strings based on their UTF-8 character representations. For the best query performance, ThoughtSpot recommends using the default setting of `en-cs` (case-sensitive).

For more information, see <a href="https://docs.snowflake.com/en/sql-reference/collation.html" target="_blank">Collation Support</a> in the Snowflake documentation.

{: id="change-json"}
## Change JSON to a relational schema in Snowflake

ThoughtSpot works with relational data, where data must be in the form of a table, with rows and columns. Relational data is commonly stored as comma separated values, in CSV format, or in tables in a database.

The Snowflake warehouse uses more flexible requirements for storing data, such as the `VARIANT` data type to store JSON. However, the user experience when searching directly on JSON data in ThoughtSpot is not as good as searching over relational data.

For example, if you connect to the Snowflake Free Trail sample WEATHER dataset, and search it in ThoughtSpot, the `DAILY_14_TOTAL` table features JSON data.

![JSON data in Snowflake]({{ site.baseurl }}/images/snowflake-jsondata.png "JSON data in Snowflake")

To make this data searchable in ThoughtSpot, you must first create a view in Snowflake, which effectively makes the JSON data into relational (table) data. You can then search this data in ThoughtSpot, and generate chart and table results from your searches. This process is called “schema on read”.

{: id="view-snowflake"}
## Create a view in Snowflake

To create a view from a Snowflake table that contains JSON, follow these steps:

1. Log in to your Snowflake instance.

2. If necessary, change your role so you can issue `CREATE VIEW` DDL statement in the target schema. See <a href="https://docs.snowflake.net/manuals/sql-reference/sql/create-view.html" target="_blank"><code>CREATE VIEW</code></a> in Snowflake documentation.

    ![Switch roles in Snowflake]({{ site.baseurl }}/images/snowflake-switch-role.png "Switch roles in Snowflake")

3. Click **Worksheets**.

    ![Switch to Worksheets in Snowflake]({{ site.baseurl }}/images/snowflake-worksheets.png "Switch to Worksheets in Snowflake")

4. Issue the `CREATE VIEW` statement.

   See <a href="https://docs.snowflake.net/manuals/sql-reference/sql/create-view.html#syntax" target="_blank"><code>CREATE VIEW Syntax</code></a>.

   The following example uses the sample `WEATHER` data from the **Snowflake Free Trial** sample data:

   ```
CREATE <strong>json_weather_data_view</strong> as
SELECT
  v:time::timestamp as observation_time,
  v:city.id::int as city_id,
  v:city.name::string as city_name,
  v:city.country::string as country,
  v:city.coord.lat::float as city_lat,
  v:city.coord.lon::float as city_lon,
  v:clouds.all::int as clouds,
  (v:main.temp::float)-273.15 as temp_avg,
  (v:main.temp_min::float)-273.15 as temp_min,
  (v:main.temp_max::float)-273.15 as temp_max,
  v:weather[0].main::string as weather,
  v:weather[0].description::string as weather_desc,
  v:weather[0].icon::string as weather_icon,
  v:wind.deg::float as wind_dir,
  v:wind.speed::float as wind_speed
FROM json_weather_data
WHERE city_id = 5128638;
   ```

5. Query the new view in Snowflake.

   The following example demonstrates how you can query the view <code><strong>json_weather_data_view</strong></code> created in the previous step:

   ```
   SELECT * FROM json_weather_data_view
WHERE date_trunc('month',observation_time) = '2018-01-01'
LIMIT 20;
   ```

6. In ThoughtSpot, add a connection to Snowflake, specifically to the view you created.

   See [Add a Snowflake connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-add-connection.html).


When you subsequently search in ThoughtSpot against the Snowflake view, you can easily create charts and graphs, as expected.

![Visualization on Snowflake view]({{ site.baseurl }}/images/snowflake-view-visualization.png "Visualization on Snowflake view")

{: id="add-join"}
## Add joins between tables

To search more than one table at the same time in ThoughtSpot, you must define joins between these tables by specifying the  columns that contain matching data across two tables. These columns represent the 'primary key' and 'foreign key' of the join.

In Snowflake, you can query the schema to get a list of its existing foreign key constraints with referenced constraints.

To determine which foreign keys already exist in your Snowflake schema, issue the following `SELECT ... AS` statement:

```
select
  fk_tco.table_schema as foreign_schema,
  fk_tco.table_name as foreign_table,
  fk_tco.constraint_name as foreign_constraint,
  '>-' as rel,
  pk_tco.table_schema as referenced_schema,
  pk_tco.table_name as referenced_table,
  pk_tco.constraint_name as referenced_constraint
from
  information_schema.referential_constraints rco
join
  information_schema.table_constraints fk_tco
  on fk_tco.constraint_name = rco.constraint_name
  and fk_tco.constraint_schema = rco.constraint_schema
join
  information_schema.table_constraints pk_tco
  on pk_tco.constraint_name = rco.unique_constraint_name
  and pk_tco.constraint_schema = rco.unique_constraint_schema
order by
  fk_tco.table_schema,
  fk_tco.table_name;

```

The system returns the results of this query as a table that represents all foreign keys in the database, ordered by schema name and by name of the foreign table. The table has the following columns:

<dl>
<dt>foreign_schema</dt>
<dd>The name of the foreign schema</dd>
<dt>foreign_table</dt>
<dd>The name of the foreign table</dd>
<dt>foreign_constraint</dt>
<dd>The name of the foreign key constraint</dd>
<dt>rel</dt>
<dd>The relationship symbol that indicates the direction of the join</dd>
<dt>referenced_schema</dt>
<dd>The name of the referenced schema</dd>
<dt>referenced_schema</dt>
<dd>The name of the referenced schema</dd>
<dt>referenced_schema</dt>
<dd>The name of the referenced schema</dd>
</dl>

To search multi-table Snowflake data in ThoughtSpot, you must explicitly create joins.

There are two ways to do this:

1. ThoughtSpot recommends that you add the necessary foreign key constraints by creating a join in Snowflake. We demonstrate how you can do in [Create joins in Snowflake](#join-snowflake).

   For in-depth information from Snowflake, see <a href="https://docs.snowflake.net/manuals/sql-reference/sql/create-table-constraint.html" target="_blank"><code>CREATE or ALTER TABLE … CONSTRAINT</code></a>.

2. Alternatively, if you don't have the necessary permissions, you can create these relationships in ThoughtSpot.

   See [Join a table or view to another data source]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html) and [Constraints]({{ site.baseurl }}/admin/loading/constraints.html).

{: id="join-snowflake"}
## Create joins in Snowflake

To add a foreign key constraint in Snowflake, you must issue the following `ALTER TABLE` statement:

<pre>
ALTER TABLE &lt;table_name&gt; ADD { outoflineUniquePK | outoflineFK }
</pre>

<dl>
  <dlentry>
    <dt>outoflineUniquePK</dt>
    <dd>The primary key in the relationship, with the following definition:<br>
    <pre>outoflineUniquePK ::=
  [ CONSTRAINT &lt;constraint_name&gt;> ]
  { UNIQUE | PRIMARY KEY } ( &lt;col_name&gt;> [ , &lt;col_name&gt; , ... ] )
  [ [ NOT ] ENFORCED ]
  [ [ NOT ] DEFERRABLE ]
  [ INITIALLY { DEFERRED | IMMEDIATE } ]
  [ ENABLE | DISABLE ]
  [ VALIDATE | NOVALIDATE ]
  [ RELY | NORELY ]</pre>
    </dd>  
  </dlentry>
  <dlentry>
    <dt>outoflineFK</dt>
    <dd>The foreign key in the relationship, with the following definition:<br>
      <pre>outoflineFK :=
    [ CONSTRAINT &lt;constraint_name&gt; ]
    FOREIGN KEY ( &lt;col_namev [ , &lt;col_name&gt; , ... ] )
    REFERENCES &lt;ref_table_name&gt; [ ( &lt;ref_col_name&gt; [ , &lt;ref_col_name&gt; , ... ] ) ]
    [ MATCH { FULL | SIMPLE | PARTIAL } ]
    [ ON [ UPDATE { CASCADE | SET NULL | SET DEFAULT | RESTRICT | NO ACTION } ]
         [ DELETE { CASCADE | SET NULL | SET DEFAULT | RESTRICT | NO ACTION } ] ]
    [ [ NOT ] ENFORCED ]
    [ [ NOT ] DEFERRABLE ]
    [ INITIALLY { DEFERRED | IMMEDIATE } ]
    [ ENABLE | DISABLE ]
    [ VALIDATE | NOVALIDATE ]
    [ RELY | NORELY ]</pre>
    </dd>  
  </dlentry>
</dl>

{: id="examples"}
## Examples

{: id="add-fk-snowflake"}
**Example 1: adding a foreign key in Snowflake**

For example, you can add a foreign key to Retail Sales schema in Snowflake by running the following `ALTER TABLE` statement. Also, contrast it with [Example 2](#add-fk-thoughtspot):

```
ALTER TABLE "HO_RETAIL"."PUBLIC"."HO_Retail_Sales_Fact"
  ADD FOREIGN KEY ("Date_Key" )
  REFERENCES "HO_RETAIL"."PUBLIC"."HO_Date_Dimension"
  MATCH FULL
  ON UPDATE NO ACTION
  ON DELETE NO ACTION;
```

{: id="add-fk-thoughtspot"}
**Example 2: adding a foreign key in ThoughtSpot**

To add the foreign key in ThoughtSpot (an alternative to the process outlined in [Example 1](#add-fk-snowflake)), you can issue the following TQL `ALTER TABLE` statement:

<pre>
TQL&gt; ALTER TABLE "HO_Retail_Sales_Fact"
   ADD CONSTRAINT FOREIGN KEY ("Date_Key")
   REFERENCES "HO_Date_Dimension" ("Date_Key");
</pre>
