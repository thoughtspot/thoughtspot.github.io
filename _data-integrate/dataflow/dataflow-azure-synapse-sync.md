---
title: [Sync data through Azure Synapse connection]
last_updated: 6/17/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an Azure Synapse database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Azure Synapse:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p>
   </details>

   <!--![Enter sync details]({{ site.baseurl }}/images/dataflow-azure-synapse-sync.png "Enter sync details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-null-value)<br/>Specify the string literal that represents NULL on the source. When loading data, the system replaces this with NULL. Available only when <strong>Data extraction mode</strong> is <em>BCP</em>.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-enclosing-character)<br/>Specify if text columns in the source data are enclosed in quotes; if yes, single quotes or double quoates.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-escape-character)<br/>Specify this character to escape text qualifiers in source data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-fetch-size)<br/>Specify the number of rows fetched into memory at the same time. If the value is 0, system fetches all rows at the same time. Available only when <strong>Data extraction mode</strong> is <em>JDBC</em>.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
