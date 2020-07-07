---
title: [Sync data through an SAP Adaptive Server Enterprise connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an SAP Adaptive Server Enterprise database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for SAP Adaptive Server Enterprise:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary><p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p>
   </details>

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-sap-adaptive-server-enterprise-sync.png "Enter connection details")-->

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-fetch-size)<br/>Specify the number of rows at a time to fetch and process in memory. If you specify zero, the system extracts all rows at once.<br/>Mandatory field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.<br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This character escapes the text qualifier character in the source data.<br/>Optional field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-ts-load-options)<br/>Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code><br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.

See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#sync-properties).
