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

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-fetch-size)<br/>Specify the number of rows at a time to fetch and process in memory. If you specify zero, the system extracts all rows at once.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
