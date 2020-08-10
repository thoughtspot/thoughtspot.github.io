---
title: [Connect to Snowflake from ThoughtSpot Cloud]
last_updated: 1/29/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Snowflake database in ThoughtSpot Cloud, and proceed to perform a live queries to create Answers and Pinboards.

{: id="add-connection"}
## Add a Snowflake connection

To connect to Snowflake:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

     ![]({{ site.baseurl }}/images/new-connection.png "New db connect")

3. Create a name for your connection, a description (optional), then select the Snowflake connection type, and click **Continue**.

     ![Add a Snowflake connection]({{ site.baseurl }}/images/embrace-snowflake-connection-type-ts-cloud.png "Add a Snowflake connection")

4. Enter the connection details for your Snowflake data source.

    ![Enter connection details]({{ site.baseurl }}/images/snowflake-connectiondetails.png "Enter connection details")

    Refer to the [Snowflake connection reference](#connection-reference) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you need to set up your connection to Snowflake, by doing the following:
- Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
- Enter your key and value information.
- To add more keys and values, click the plus sign (+), and enter them.

    {% include note.html content="Any key-value pairs that you enter must be defined in your Snowflake data source. Key-value pairs are case-sensitive." %}

6. Click **Continue**.   

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

    ![Select tables and columns for your connection]({{ site.baseurl }}/images/snowflake-selecttables.png "Select tables and columns for your connection")

   Once the connection is added, you can search your Snowflake database right away by clicking **Search now**.

   ![The "Connection created" screen]({{ site.baseurl }}/images/snowflake-connectioncreated.png "The "Connection created" screen")


   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

You can modify an Embrace Snowflake connection in the following ways:
- <a href="#edit-connection">Edit a connection</a>: to add or remove tables and columns
- <a href="#remap-connection">Remap a connection</a>: to map a table or column to a different table or column
- <a href="#delete-table">Delete a table</a>
- <a href="#delete-table-dependencies">Delete a table with dependent objects</a>

You can also <a href="#delete-connection">delete a connection</a>.

{: id="edit-connection"}
## Edit a Snowflake connection

You can edit a Snowflake connection to add tables and columns.

To edit a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to edit.

   ![]({{ site.baseurl }}/images/select-connection.png "select Connection")

4. Click **Edit connection** at the upper-right-hand side of the page.

   ![Edit connection]({{ site.baseurl }}/images/snowflake-editconnection.png "Edit connection")

5. On the Choose connection type page, change the connection name or description (if needed), and then click **Continue**.  

6. On the Snowflake connection details page, make any changes needed, and then click **Continue**.

7. Expand the database table drop-down menu, and select the tables and columns you want to add.

    ![Select tables and columns]({{ site.baseurl }}/images/redshift-edittables.png "Select tables and columns")
   <!-- ![]({{ site.baseurl }}/images/connection-update.png "Edit connection dialog box") -->

8. Click **Update**, and then click **Confirm** to save the updated connection detail.

To remove a table from a connection, delete it from the connection details page. For more information, see [Delete a table](#delete-table).

{: id="remap-connection"}
## Remap a Snowflake connection

Modify the connection parameters by editing the source mapping <code>yaml</code> file that was created when you added the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to remap.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click the More Info icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Remapping** on the upper-right-hand side of the page.

    ![Remap a connection]({{ site.baseurl }}/images/snowflake-remapping.png "Remap a connection")

5. Click **Download** to download the source mapping file.

    !["Download the source mapping file"]({{ site.baseurl }}/images/snowflake-downloadyaml.png "Download the source mapping file")

6. Edit the file, as required, and save it.

    ![]({{ site.baseurl }}/images/embrace-yaml.png "Edit yaml")

7. Finally, click **Browse your files**, and upload your edited mapping file to update the mapping of your connection.

{: id="delete-table"}
## Delete a table
ThoughtSpot checks for dependencies whenever you try to remove a table in a connection. ThoughtSpot shows a list of dependent objects, and you can click them to delete them or remove the dependency. Then you can remove the table.

To delete a table:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection that contains the table you want to delete.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Find the table you want to delete in the list, and check the box next to its name.

5. Click **Delete**, and then click **Delete** again to confirm.

    ![Delete a connection table]({{ site.baseurl }}/images/snowflake-deletetable.png "Delete a connection table")

    If you attempt to delete a table with dependent objects, the operation is blocked. A *Cannot delete* window appears, with a list of links to dependent objects. See [Deleting a table with dependent objects](#delete-table-dependencies)

{: id="delete-table-dependencies"}
## Delete a table with dependent objects

- In the *Cannot delete* window, click the link for each object to modify or delete it.

   When all dependencies are removed, you can delete the table.

   ![]({{ site.baseurl }}/images/delete-warning.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, pinboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

{: id="delete-connection"}
## Delete a Snowflake connection
A connection can be used in multiple data sources or visualizations. Because of this, you must delete all of the sources and tasks that use that connection, before you can delete the connection.

To delete a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Check the box next to the connection you want to delete.

4. Click **Delete**, and then click **Delete** again to confirm.

   ![]({{ site.baseurl }}/images/delete-a-connection.png "delete a connection type")

   If you attempt to delete a connection with dependent objects, the operation is blocked, and a "Cannot delete" warning appears with a list of dependent objects with links.

   ![]({{ site.baseurl }}/images/connection-delete-warning.png "warning connection type")

5. If the "Cannot delete" warning appears, click the link for each object to delete it, and then click **Ok**. Otherwise, go to the next step.

6. When all its dependencies are removed, delete the connection by clicking **Delete**, and then click again **Delete** to confirm.

{: id="best-practices"}
## Best practices

After connecting to Snowflake through ThoughtSpot Embrace, you may notice that some things don’t work as you expect. Here are helpful pointers on data modeling: best practices for improving the user experience by making small changes to the Snowflake schema in Snowflake, to optimize it for ThoughtSpot.

{: id="change-json"}
### Change JSON to a relational schema in Snowflake

ThoughtSpot works with relational data, where data must be in the form of a table, with rows and columns. Relational data is commonly stored as comma separated values, in CSV format, or in tables in a database.

The Snowflake warehouse uses more flexible requirements for storing data, such as the `VARIANT` data type to store JSON. However, the user experience when searching directly on JSON data in ThoughtSpot is not as good as searching over relational data.

For example, if you connect to the Snowflake Free Trail sample WEATHER dataset, and search it in ThoughtSpot, the `DAILY_14_TOTAL` table features JSON data.

![JSON data in Snowflake]({{ site.baseurl }}/images/snowflake-jsondata.png "JSON data in Snowflake")

To make this data searchable in ThoughtSpot, you must first create a view in Snowflake, which effectively makes the JSON data into relational (table) data. You can then search this data in ThoughtSpot, and generate chart and table results from your searches. This process is called “schema on read”.

{: id="view-snowflake"}
### Create a view in Snowflake

To create a view from a Snowflake table that contains JSON, follow these steps:

1. Log in to your Snowflake instance.

2. If necessary, change your role so you can issue `CREATE VIEW` DDL statement in the target schema. See [CREATE VIEW](https://docs.snowflake.net/manuals/sql-reference/sql/create-view.html) in Snowflake.

    ![Switch roles in Snowflake]({{ site.baseurl }}/images/snowflake-switch-role.png "Switch roles in Snowflake")

3. Click **Worksheets**.

    ![Switch to Worksheets in Snowflake]({{ site.baseurl }}/images/snowflake-worksheets.png "Switch to Worksheets in Snowflake")

4. Issue the `CREATE VIEW` statement.

   See [CREATE VIEW Syntax](https://docs.snowflake.net/manuals/sql-reference/sql/create-view.html#syntax).

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

6. In ThoughtSpot Embrace, add a connection to Snowflake, specifically to the view you created.

   See [Connect to Snowflake through Embrace](#connect-snowflake).


When you subsequently search in ThoughtSpot against the Snowflake view, you can easily create charts and graphs, as expected.

![Visualization on Snowflake view]({{ site.baseurl }}/images/snowflake-view-visualization.png "Visualization on Snowflake view")

{: id="add-join"}
### Add joins between tables

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

   For in-depth information from Snowflake, see [CREATE or ALTER TABLE … CONSTRAINT](https://docs.snowflake.net/manuals/sql-reference/sql/create-table-constraint.html).

2. Alternatively, if you don't have the necessary permissions, you can create these relationships in ThoughtSpot.

   See [Join a table or view to another data source]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html) and [Constraints]({{ site.baseurl }}/admin/loading/constraints.html).

{: id="join-snowflake"}
### Create joins in Snowflake

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
### Examples

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



{: id="connection-reference"}
## Connection reference for Snowflake

Learn about the fields used to create a Snowflake connection using ThoughtSpot Embrace. You need specific information to establish a seamless and secure connection.

<dl>
  <dlentry id="connection-name">
    <dt>Connection name</dt>
    <dd>Enter a new Snowflake connection name.<br/>Mandatory field.</dd></dlentry>
  <dlentry id="connection-description">
      <dt>Connection description</dt>
      <dd>Provide a short description of the connection.<br/>Optional field.</dd></dlentry>
  <dlentry id="account-name">
      <dt>Account name</dt>
      <dd>Enter the account name associated with the Snowflake connection.<br/>Mandatory field.</dd>
      <dd>The account name is part of the URL that you use to access the Snowflake UI. It is the portion of the URL before <strong>snowflakecomputing.com</strong>.</dd>
      <dd id="example"><strong><em>Example</em></strong>: If your URL is <strong>https://abcd.xyz.efg.snowflakecomputing.com</strong>, your account name is <strong>abcd.xyz.efg</strong>.</dd>
      <dd id="guidelines"><p>If you cannot find your <strong>Full account name</strong> in Snowflake, see the following examples for determining your account based on the account name, cloud platform, and region. Assume that the <strong>account name</strong> is <em>xy12345</em>.</p>
      <table>
      <tbody>
      <tr>
      <th>Cloud platform</th>
      <th>Region</th>
      <th>Full account name</th>
      </tr>
      <tr>
      <th rowspan="8">AWS</th>
      <td>US East (N. Virginia)</td>
      <td>xy12345.us-east-1</td>
      </tr>
      <tr>
      <td>US East (Ohio)</td>
      <td>xy12345.us-east-2.aws</td>
      </tr>
      <tr>
      <td>US West (Oregon)</td>
      <td>xy12345</td>
      </tr>
      <tr>
      <td>Canada (Central)</td>
      <td>xy12345.ca-central-1.aws</td>
      </tr>
      <tr>
      <td>EU (Ireland)</td>
      <td>xy12345.eu-west-1</td>
      </tr>
      <tr>
      <td>EU (Frankfurt)</td>
      <td>xy12345.eu-central-1</td>
      </tr>
      <tr>
      <td>Asia Pacific (Singapore)</td>
      <td>xy12345.ap-southeast-1</td>
      </tr>
      <tr>
      <td>Asia Pacific (Sydney)</td>
      <td>xy12345.ap-sowtheast-2</td>
      </tr>
      <tr>
      <th>GCP - <em>Preview</em></th>
      <td>us-central1 (Iowa)</td>
      <td>xy12345.us-central1.gcp</td>
      </tr>
      <tr>
      <th rowspan="6">Azure</th>
      <td>East US 2</td>
      <td>xy12345.east-us-2.azure</td>
      </tr>
      <tr>
      <td>US Gov Virginia</td>
      <td>xy12345.us-gov-virginia.azure</td>
      </tr>
      <tr>
      <td>Canada Central</td>
      <td>xy12345.canada-central.azure</td>
      </tr>
      <tr>
      <td>West Europe</td>
      <td>xy12345.west-europe.azure</td>
      </tr>
      <tr>
      <td>Australia East</td>
      <td>xy12345.australia-east.azure</td>
      </tr>
      <tr>
      <td>Southeast Asia</td>
      <td>xy12345.southeast-asia.azure</td>
      </tr>
      </tbody>
      </table>
      </dd>
      </dlentry>
    <dlentry id="user">
      <dt>User</dt>
      <dd>Enter the Snowflake account username.<br/>Mandatory field.</dd></dlentry>  
    <dlentry id="password">
      <dt>Password</dt>
      <dd>Enter the Snowflake account password.<br/>Mandatory field.</dd></dlentry>
    <dlentry id="role">
      <dt>Role</dt>
      <dd>Specify the privilege of the user.<br/>Mandatory field.</dd></dlentry>
    <dlentry id="warehouse">
      <dt>Warehouse</dt>
      <dd>Specify the warehouse associated with the connection.<br/>Mandatory field.</dd></dlentry>  
    <dlentry id="database">
      <dt>Database</dt>
      <dd>Specify the database associated with the account.<br/>Optional field.</dd></dlentry>  
  <dlentry id="schema">
      <dt>Schema</dt>
      <dd>Specify the schema associated with the database.<br/>Optional field.</dd></dlentry>
</dl>
