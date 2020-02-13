---
title: [Embrace overview]
last_updated: 10/21/2019
toc: true
summary: "Using Embrace, you can perform live queries on external databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company stores source data externally in data warehouses, you can use ThoughtSpot Embrace to directly query that data and use ThoughtSpot's analysis and visualization features, without moving the data into ThoughtSpot.

Embrace supports the following external databases:
- Snowflake
- Amazon Redshift
- Google BigQuery
- Microsoft Azure Synapse

To enable Embrace, contact ThoughtSpot support.

## How it works
You create a connection to the external database, choosing the columns from each table that you want to explore in your live query. Primary key and foreign key relationships are imported along with the primary and foreign key tables. If there are any joins in the tables of your connection, they are also imported. After your connection is complete, it becomes a **linked** data source in ThoughtSpot that allows you to query the external database directly. It’s easy to apply transformations and filter the data also.

## Key benefits
- Set up and deploy ThoughtSpot faster by connecting directly to the external database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in the external database.
- Save significant time and money by avoiding ETL pipelines.
- Connect to multiple external databases.

## Limitations

### Feature availability in Embrace

The following matrix compares the features that are available in our internal high-performance database, Falcon, and the ones available in Embrace:

| Feature Name | Falcon | Embrace |
| --- | --- | --- |
| Simple Search and Complex searches:<br>Versus, Inline Subquerying, Growth | &check; | &check;  |
| Search Suggestions for column names & column values | &check;  | &check;  |
| Headlines at the bottom that summarize tables | &check;  | &check;  |
| All chart types and configurations | &check;  | &check;  |
| Spot IQ - Instant insights, Did you know?, Pinboard insights, Analyze | &check;  | &cross; |
| Monitor | &check;  | &cross;  |
| Table & Column Remapping through Scriptability | &cross; | &check; |
| Custom Calendar | &check; | &cross; |
| Materialized View | &check;  |  &cross; |

### Function availability in Embrace

The following matrix compares the specific function support across the different databases of Embrace. Functions not listed here have full support.

| Function<br> | Snowflake<br> | Amazon<br>Redshift | Google<br>BigQuery | Azure<br>Synapse |
| --- | --- | --- | --- | --- |
| `SOUNDS_LIKE`| &cross; | &cross; | &cross; | &cross; |
| `STRING_ MATCH_SCORE`| &cross; | &cross; | &cross; | &cross; |
| `EDIT_DISTANCE_WITH_CAP`| &cross; | &cross; | &cross; | &cross; |
| `APPROX_SET_CARDINALITY`| &cross; | &cross; | &cross; | &cross; |
| `COUNT_NOT_NULL`| &cross; | &cross; | &cross; | &cross; |
| `SPELLS_LIKE` | &check; | &cross; | &cross; | &cross; |
| `EDIT_DISTANCE` | &check; | &cross; | &cross; | &cross; |
| `MEDIAN` | &check; | &check; | &cross; | &check; |
| `PERCENTILE` | &check; | &check; | &cross; | &check; |  

### Data type availability in Embrace

The following matrix captures the specific data type support limitations across the different databases of Embrace. Data types not listed here have full support.

| Data Type<br> | Snowflake<br> | Amazon<br>Redshift | Google<br>BigQuery | Azure<br>Synapse |
| --- | --- | --- | --- | --- |
| `BINARY`| &cross; | &check; | &check; | &cross; |
| `VARBINARY` | &cross; | &check; | &check; | &cross; |
| `TIMESTAMPTZ`| &check; | &cross; | &check; | &check; |
| `GEOMETRY`| &check; | &cross; | &check; | &check; |
| `BYTES` | &check; | &check; | &cross; | &check; |
| `DATETIMEOFFSET`| &check; | &check; | &check; | &cross; |

### Additional specific exceptions

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
  <dlentry>
    <dt>Google BigQuery</dt>
    <dd>
      <dl>
        <dlentry>
          <dt>Join support</dt>
          <dd>Google BigQuery does not support PK-FK joins. Therefore, when using Embrace, you must create joins explicitly in ThoughtSpot.</dd></dlentry>
        <dlentry>
          <dt>Partitioned tables</dt>
          <dd>When running a query on a partitioned table with <strong>Require partition filter option</strong> enabled, you must specify the <code>WHERE</code> clause. Omitting the `WHERE` clause throws an error.<br>
          To ensure that the query on such tables honors the partition condition, you must create a worksheet filter in ThoughtSpot.</dd></dlentry></dl>
      </dd>    
   </dlentry>
   <dlentry>
     <dt>Azure Synapse</dt>
     <dd>Azure Synapse supports at most 10 <code>IF THEN ELSE</code> statements in a single query.</dd></dlentry>
</dl>     


## Next steps

-   **[Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)**  
Create the connection between ThoughtSpot and tables in an external Snowflake database.
-   **[Add a Redshift connection]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-add.html)**  
Create the connection between ThoughtSpot and tables in an external BigQuery database.
-   **[Add a BigQuery connection]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-add.html)**  
Create the connection between ThoughtSpot and tables in an external Synapse database.
-   **[Add a Synapse connection]({{ site.baseurl }}/data-integrate/embrace/embrace-synapse-add.html)**  
Create the connection between ThoughtSpot and tables in an external Redshift database.
