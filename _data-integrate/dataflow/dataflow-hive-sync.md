---
title: [Sync data through a Hive connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Hive database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Hive:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p></details>

   <!--![Enter sync details]({{ site.baseurl }}/images/dataflow-hive-sync.png "Enter sync details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-sync-data-extraction-mode)<br/>Specify the extraction type.<br/>Mandatory field.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-sync-null-value)<br/>Specifies the string literal that should indicate the null value in the extracted data. During the data load the column value matching this string will be loaded as null in the target.<br/>Mandatory field. For Hadoop Extract only.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.<br/>Mandatory field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Mandatory field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-sync-ts-load-options)<br/>Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code><br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.

See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-aurora-reference.html#sync-properties).
