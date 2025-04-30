---
title: [Sync data through a Netezza connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Netezza database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Netezza:

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-netezza-sync.png "Enter connection details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [Socket buffer size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-socket-buffer-size)<br/>Specifies the chunk size at which to read the data from the source, expressed in bytes<br/>Optional field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#dataflow-netezza-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-netezza-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
