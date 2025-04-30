---
title: [Sync data through Splunk connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Splunk file system, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Max ignored rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-sync-max-ignored-rows)<br/>Abort the transaction after encountering 'n' ignored rows
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#dataflow-splunk-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
