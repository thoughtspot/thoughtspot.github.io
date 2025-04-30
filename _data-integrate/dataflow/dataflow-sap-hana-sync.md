---
title: [Sync data through an SAP HANA connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an SAP HANA database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for SAP HANA:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary><p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p>
   </details>

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-sap-hana-sync.png "Enter connection details")-->

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-sync-column-delimiter)<br/>Specify the delimeter to use as the  column delimeter for the extracted data<br/>Mandatory field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This character escapes the text qualifier character in the source data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-sync-fetch-size)<br/>Specify the number of rows at a time to fetch and process in memory. If you specify zero, the system extracts all rows at once.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
