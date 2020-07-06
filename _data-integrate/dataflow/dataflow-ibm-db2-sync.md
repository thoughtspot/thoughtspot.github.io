---
title: [Sync data through an IBM Db2 connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an IBM Db2 database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for IBM Db2:

   ![Enter sync details]({{ site.baseurl }}/images/dataflow-set-sync-properties-draft.png "Enter sync details")

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-ibm-db2-sync.png "Enter connection details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-data-extraction-mode)<br/>Specify the extraction type.<br/>Mandatory field.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-null-value)<br/>Specifies the string literal that should indicate the null value in the extracted data. During the data load the column value matching this string will be loaded as null in the target.<br/>Optional field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-enclosing character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.<br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Optional field.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-fetch-size)<br/>Specify the number of rows to be fetched at a time and processed in memory. If the value specified is zero then, all rows are extracted at once.<br/>Mandatory field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-ts-load-options)<br/>Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code><br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.

See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#sync-properties).
