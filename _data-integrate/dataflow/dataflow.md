---
title: [DataFlow]
last_updated: 13/06/2020
toc: true
summary: "With DataFlow, you can move data into ThoughtSpot from most databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company maintains large sources of data externally, you can use ThoughtSpot DataFlow to easily ingest just the relevant information, and then query that data and use ThoughtSpot's analysis and visualization features. And after you configure scheduled refresh, your analysis visuals are always current.

DataFlow supports the movement of data from the following external databases:
- 


## How it works


## Key benefits
- Set up and deploy ThoughtSpot faster by ingesting data from external databases.
- Move data into ThoughtSpot quickly and efficiently.
- Schedule regular data refresh that fits the needs of your business.
- Connect to multiple external databases.

## Limitations


### Feature availability in DataFlow

<!--The following matrix compares the features that are available in our internal high-performance database, Falcon, and the ones available in Embrace:

<table>
<tbody>
<tr>
<th>Feature Name</th>
<th>Falcon</th>
<th>Embrace</th>
</tr>
<tr>
<td>Simple Search and Complex searches:<br />Versus, Inline Subquerying, Growth</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Search Suggestions for column names and values</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Headlines that summarize tables</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>All chart types and configurations</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Spot IQ: Instant insights, Did you know?,<br>Pinboard insights, Analyze</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
<tr>
<td>Monitor</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
<tr>
<td>Table and Column remapping through Scriptability</td>
<td>&cross;</td>
<td>&check;</td>
</tr>
<tr>
<td>Custom calendar</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
<tr>
<td>Materialized view</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
</tbody>
</table> -->

### Function availability in DataFlow

<!--The following matrix compares the specific function support across the different databases of Embrace. Functions not listed here have full support.

<table>
<thead>
<tr>
<th>Function</th>
<th>Snowflake</th>
<th>Amazon<br />Redshift</th>
<th>Google<br />BigQuery</th>
<th>Azure<br />Synapse</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>SOUNDS_LIKE</code></td>
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
</tr>
<tr>
<td><code>EDIT_DISTANCE_WITH_CAP</code></td>
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
</tr>
<tr>
<td><code>COUNT_NOT_NULL</code></td>
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
</tr>
<tr>
<td><code>EDIT_DISTANCE</code></td>
<td>&check;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>MEDIAN</code></td>
<td>&check;</td>
<td>&check;</td>
<td>&cross;</td>
<td>&check;</td>
</tr>
<tr>
<td><code>PERCENTILE</code></td>
<td>&check;</td>
<td>&check;</td>
<td>&cross;</td>
<td>&check;</td>
</tr>
</tbody>
</table>
-->

### Data type availability and conversion in DataFlow

<!--The following matrix captures the specific data type support limitations across the different databases of Embrace. Data types not listed here have full support.

<table>
  <thead>
    <tr>
      <th>Data Type<br></th>
      <th>Snowflake<br></th>
      <th>Amazon<br>Redshift</th>
      <th>Google<br>BigQuery</th>
      <th>Azure<br>Synapse</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>BINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>VARBINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>TIMESTAMPTZ</code></td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>GEOMETRY</code></td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>BYTES</code></td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>DATETIMEOFFSET</code></td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
  </tbody>
</table>-->

### Other specific exceptions

<!--The following list captures the specific limitations across the different databases of Embrace. Databases not listed here have full support.

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
  <dlentry>
    <dt>Google BigQuery</dt>
    <dd>
      <dl>
        <dlentry>
          <dt>Join support</dt>
          <dd>Google BigQuery does not support PK-FK joins. Therefore, when using Embrace, you must create joins explicitly in ThoughtSpot.</dd></dlentry>
        <dlentry>
          <dt>Partitioned tables</dt>
          <dd>When running a query on a partitioned table with the <strong>Require partition filter option</strong> enabled, you must specify the <code>WHERE</code> clause. Without a <code>WHERE</code> clause specified, queries generate an error.<br>
          To ensure that the query on such tables honors the partition condition, you must create a worksheet filter in ThoughtSpot.</dd></dlentry></dl>
      </dd>    
   </dlentry>
   <dlentry>
     <dt>Azure Synapse</dt>
     <dd>Azure Synapse supports up to 10 <code>IF THEN ELSE</code> statements in a single query.</dd></dlentry>
   <dlentry>
     <dd>Azure Synapse does not support foreign keys, so no PK-FK joins can be defined in Synapse.</dd></dlentry>
     </dl>     -->


## Next steps

<!---   **[Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)**  
Create the connection between ThoughtSpot and tables in an external Snowflake database.
-   **[Add a Redshift connection]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-add.html)**  
Create the connection between ThoughtSpot and tables in an external Amazon RedShift database.
-   **[Add a BigQuery connection]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-add.html)**  
Create the connection between ThoughtSpot and tables in an external Google BigQuery database.
-   **[Add a Synapse connection]({{ site.baseurl }}/data-integrate/embrace/embrace-synapse-add.html)**  
Create the connection between ThoughtSpot and tables in an external Azure Synapse database.
-->