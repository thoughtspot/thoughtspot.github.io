---
title: [Sync data through a Salesforce connection]
last_updated: 7/13/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Salesforce database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-salesforce.md %}

4. Specify the sync properties for Salesforce:

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#dataflow-salesforce-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#dataflow-salesforce-sync-enclosing-character)<br/>Specify if the text columns in the source data must be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#dataflow-salesforce-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#dataflow-salesforce-sync-fetch-size)<br/>Specify the number of rows fetched into memory at the same time. If the value is 0, system fetches all rows at the same time.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#dataflow-salesforce-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-salesforce-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
