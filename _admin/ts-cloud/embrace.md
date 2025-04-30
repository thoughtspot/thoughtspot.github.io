---
title: [About Embrace in ThoughtSpot Cloud]
last_updated: 1/25/2021
summary: "Using Embrace, you can perform live queries on external databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If your company stores source data externally in data warehouses, you can use ThoughtSpot Embrace to directly query that data and use ThoughtSpot's analysis and visualization features.

On ThoughtSpot Cloud, Embrace supports the following external databases:
- [Snowflake]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake.html)
- [Amazon Redshift]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift.html)
- [Google BigQuery]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq.html)
- [Azure Synapse]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-synapse.html)

{% include note.html content="Oracle Autonomous Data Warehouse is in beta and disabled by default. To enable this feature, contact ThoughtSpot Support." %}

## How it works

- Create a connection to the external database
- Choose from each table the columns that you want to explore in your live query.
- Primary key and foreign key relationships are imported along with the primary and foreign key tables.
- If there are any joins in the tables of your connection, Embrace imports these joins.
- After your connection is complete, it becomes a **linked** data source in ThoughtSpot, so you can query the external database directly.
- It’s also easy to apply transformations, and filter the data.

## Key benefits
- Set up and deploy ThoughtSpot faster by connecting directly to the external database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in the external database.
- Save significant time and money by avoiding ETL pipelines.
- Connect to multiple external databases.

## Limitations

{% include important.html content="Embrace does not support joins across connections." %}

## Feature availability in Embrace on ThoughtSpot Cloud

Here are the major features that are not currently available in Embrace:

- Spot IQ: Instant insights, Did you know?, Pinboard insights, Analyze
- Monitor
- Custom calendar
- Materialized views

## Function availability in Embrace on ThoughtSpot Cloud

The following matrix compares the specific function support across the different databases of Embrace in ThoughtSpot Cloud. Functions not listed here have full support.

<table>
<thead>
<tr>
<th>Function</th>
<th>Snowflake</th>
<th>Amazon<br />Redshift</th>
<th>Google<br />BigQuery</th>
<th>Azure<br />Synapse</th>
<th>Oracle<br />Autonomous Data Warehouse</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>SOUNDS_LIKE</code></td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>STRING_ MATCH_SCORE</code></td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>EDIT_DISTANCE_WITH_CAP</code></td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>APPROX_SET_CARDINALITY</code></td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>COUNT_NOT_NULL</code></td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>SPELLS_LIKE</code></td>
<td>&check;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>EDIT_DISTANCE</code></td>
<td>&check;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
</tbody>
</table>

## Data type availability in Embrace on ThoughtSpot Cloud

The following matrix captures the specific data type support limitations across the different databases of Embrace. Data types not listed here have full support.

<table>
  <thead>
    <tr>
      <th>Data Type<br></th>
      <th>Snowflake<br></th>
      <th>Amazon<br>Redshift</th>
      <th>Google<br>BigQuery</th>
      <th>Azure<br>Synapse</th>
      <th>Oracle<br />Autonomous Data Warehouse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>BINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>VARBINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>TIMESTAMPTZ</code></td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>GEOMETRY</code></td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
  </tbody>
</table>

## Additional specific exceptions

The following list captures the specific limitations across the different databases of Embrace. Databases not listed here have full support.

<dl>
  <dlentry>
    <dt>General: all databases</dt>
    <dd>
      <dl>
        <dlentry>
          <dt>Sample values</dt>
          <dd>Embrace does not internationalize sample values in tables.</dd></dlentry>
        <dlentry>
           <dt>Delayed UI rendering</dt>
           <dd>For connections with a very large number of tables (on the order of 1000's of tables), UI rendering may take a very long time. These connections may time out.</dd></dlentry>
        <dlentry>
          <dt>Deleting columns</dt>
          <dd>After specifying a connection, columns cannot be deleted from the table. Editing a connection makes it possible to add additional columns, but not to remove them.</dd></dlentry>
      </dl>
    </dd>
  </dlentry>
     </dl>     


## Next steps

-   **[Add a Snowflake connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Snowflake database.
-   **[Add a Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Amazon RedShift database.
-   **[Add a Google BigQuery connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Google BigQuery database.
-   **[Add an Azure Synapse connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-synapse-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Azure Synapse database.
-   **[Add an Oracle Autonomous Data Warehouse connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-add-connection.html)**  
Create the connection between ThoughtSpot and tables in an external Oracle Autonomous Data Warehouse database.
