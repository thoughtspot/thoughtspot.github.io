---
title: [Embrace overview]
last_updated: 06/18/2020
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
- Teradata
- SAP HANA <span class="label label-beta">Beta</span>

To enable Embrace, contact ThoughtSpot support.

## How it works
You create a connection to the external database, choosing the columns from each table that you want to explore in your live query. Primary key and foreign key relationships are imported along with the primary and foreign key tables. If there are any joins in the tables of your connection, they are also imported. After your connection is complete, it becomes a **linked** data source in ThoughtSpot that allows you to query the external database directly. It’s easy to apply transformations and filter the data also.

## Key benefits
- Set up and deploy ThoughtSpot faster by connecting directly to the external database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in the external database.
- Save significant time and money by avoiding ETL pipelines.
- Connect to multiple external databases.

## Recommended instance types

The following sections contain the supported and recommended instance types for ThoughtSpot Embrace deployments in AWS, Azure, and GCP. When setting up your cluster, use the information here to select an instance type, configure the number of instances required for the storage you need, and add data volumes to your cluster.

### AWS
#### VMs with EBS-only persistent storage

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM EBS volume | Required boot volume capacity |
| --- | --- | --- |--- | --- |
| Up to 1B rows| r5.4xlarge, r4.4xlarge | 16/122, 16/128 | 2X 400 GB | 200 GB for each node |
| Up to 4B rows | r5.8xlarge | 32/244, 32/256 | 2X 400 GB | 200 GB for each node |
| 4B+ rows | r5.16xlarge | 64/488, 64/512 | 2x 1 TB | 200 GB for each node |

#### VMs with EBS and S3 persistent storage

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM EBS volume | Required boot volume capacity |
| --- | --- | --- |--- | --- |
| Up to 1B rows| r5.4xlarge, r4.4xlarge | 16/122, 16/128 | 1x 500 GB | 200 GB for each node |
| Up to 4B rows | r5.8xlarge | 32/244, 32/256 | 1x 500 GB | 200 GB for each node |
| 4B+ rows | r5.16xlarge | 64/488, 64/512 | 1x 500 GB | 200 GB for each node |

{% include note.html content="The S3 bucket size is approximately equal to the size of the user data." %}

### Azure

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM <br>Premium SSD Managed Disk volume | Required root volume capacity |
| --- | --- | --- |--- | --- |
| Up to 1B rows | E16s_v3 | 16/128 | 2X 400 GB | 200 GB for each node |
| Up to 4B rows | E32s_v3 | 32/256 | 2X 400 GB | 200 GB for each node |
| 4B+ rows | E64s_v3 | 64/432 | 2x1 TB | 200 GB for each node |

### GCP
#### VMs with Persistent Disk-only storage

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM <br>Zonal Persistent SSD Disk volume | Required boot volume capacity |
| --- | --- | --- |--- | --- |
| Up to 1B rows | n1-highmem-16 | 16/122 | 2X 400 GB | 200 GB for each node |
| Up to 4B rows | n1-highmem-32 | 32/208 | 2X 400 GB | 200 GB for each node |
| 4B+ rows | n1-highmem-64 | 64/416 | 2x 1 TB | 200 GB for each node |

#### VMs with Persistent Disk and Google Cloud storage

| Per VM user data capacity | Instance type | CPU/RAM | Recommended per-VM <br>Zonal Persistent SSD Disk volume | Required boot volume capacity |
| --- | --- | --- |--- | --- |
| Up to 1B rows | n1-highmem-16 | 16/122 | 1X 500 GB | 200 GB for each node |
| Up to 4B rows | n1-highmem-32 | 32/208 | 1X 500 GB | 200 GB for each node |
| 4B+ rows | n1-highmem-64 | 64/416 | 1X 500 GB | 200 GB for each node |

## Limitations

### Feature availability in Embrace

The following matrix compares the features that are available in our internal high-performance database, Falcon, and the ones available in Embrace:

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
<td>Spot IQ: Analyze</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Spot IQ: Instant insights, Did you know?,<br>Pinboard insights</td>
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
</table>

### Function availability in Embrace

The following matrix compares the specific function support across the different databases of Embrace. Functions not listed here have full support.

<table>
<thead>
<tr>
<th>Function</th>
<th>Snowflake</th>
<th>Amazon<br />Redshift</th>
<th>Google<br />BigQuery</th>
<th>Azure<br />Synapse</th>
<th>Teradata</th>
<th>SAP<br />HANA</th>
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
<td>&cross;</td>
</tr>
<tr>
<td><code>STRING_ MATCH_SCORE</code></td>
<td>&cross;</td>
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
<td>&cross;</td>
</tr>
<tr>
<td><code>APPROX_SET_CARDINALITY</code></td>
<td>&cross;</td>
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
<td>&cross;</td>
</tr>
<tr>
<td><code>SPELLS_LIKE</code></td>
<td>&check;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>EDIT_DISTANCE</code></td>
<td>&check;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&cross;</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
<tr>
<td><code>MEDIAN</code></td>
<td>&check;</td>
<td>&check;</td>
<td>&cross;</td>
<td>&check;</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td><code>PERCENTILE</code></td>
<td>&check;</td>
<td>&check;</td>
<td>&cross;</td>
<td>&check;</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
</tbody>
</table>

### Data type availability in Embrace

The following matrix captures the specific data type support limitations across the different databases of Embrace. Data types not listed here have full support.

<table>
  <thead>
    <tr>
      <th>Data Type<br></th>
      <th>Snowflake<br></th>
      <th>Amazon<br>Redshift</th>
      <th>Google<br>BigQuery</th>
      <th>Azure<br>Synapse</th>
      <th>Teradata</th>
      <th>SAP<br>HANA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>BINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
    </tr>
    <tr>
      <td><code>VARBINARY</code></td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>GEOMETRY</code></td>
      <td>&check;</td>
      <td>&cross;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
    </tr>
    <tr>
      <td><code>BYTES</code></td>
      <td>&check;</td>
      <td>&check;</td>
      <td>&cross;</td>
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
      <td>&check;</td>
      <td>&check;</td>
    </tr>
  </tbody>
</table>

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
  <dlentry>
     <dt>Teradata</dt>
     <dd>Teradata does not support the function: <code>AGGREGATE_DISTINCT</code>.</dd>
     <dd>Teradata does not support the following data types: <code>JSON, INTERVAL, VARBYTE, BLOB, CLOB, PERIOD, XML, GEOSPATIAL</code>.</dd></dlentry>

  <dlentry>
      <dt>SAP HANA</dt>
      <dd>SAP HANA does not support the following functions: <code>PERCENTILE, AGGREGATE_DISTINCT, SPELLS_LIKE, EDIT_DISTANCE</code>.</dd>
      <dd>SAP HANA does not support the following data types: <code>BLOB, CLOB, NCLOB, TEXT, POINT</code>.</dd>
      <dd>SAP HANA does not support calculation views with mandatory input parameters. If you need to use calculation views in ThoughtSpot, you must remove the mandatory parameter requirement.</dd></dlentry>       
</dl>

## Next steps

-   **[Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)**  
Create the connection between ThoughtSpot and tables in a Snowflake database.
-   **[Add a Redshift connection]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-add.html)**  
Create the connection between ThoughtSpot and tables in an Amazon RedShift database.
-   **[Add a BigQuery connection]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-add.html)**  
Create the connection between ThoughtSpot and tables in a Google BigQuery database.
-   **[Add a Synapse connection]({{ site.baseurl }}/data-integrate/embrace/embrace-synapse-add.html)**  
Create the connection between ThoughtSpot and tables in an Azure Synapse database.
-   **[Add a Teradata connection]({{ site.baseurl }}/data-integrate/embrace/embrace-teradata-add.html)**  
Create the connection between ThoughtSpot and tables in a Teradata database.
-   **[Add an SAP HANA connection]({{ site.baseurl }}/data-integrate/embrace/embrace-hana-add.html)**  
Create the connection between ThoughtSpot and tables in an SAP HANA database.
