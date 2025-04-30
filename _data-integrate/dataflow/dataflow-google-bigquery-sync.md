---
title: [Sync data through a Google BigQuery connection]
last_updated: 7/03/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Google BigQuery database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Google BigQuery:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p></details>

   <!--![Enter sync details]({{ site.baseurl }}/images/dataflow-google-bigquery-sync.png "Enter sync details")-->

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-escape-character)<br/>Specify this character to escape text qualifiers in source data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-fetch-size)<br/>Specify the number of rows to fetch at one time, and proces in memory. Tofeth all rows, specify 0 rows.
   * [Allow large resultset]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-allow-large-resultset)<br/>If enabled, allows query results that are larger in size.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#dataflow-google-bigquery-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-google-bigquery-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
