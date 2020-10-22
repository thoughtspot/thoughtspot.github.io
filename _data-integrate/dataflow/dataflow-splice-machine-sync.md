---
title: [Sync data through a Splice Machine connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Splice Machine database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Splice Machine:

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-splice-machine-sync.png "Enter connection details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-fetch-size)<br/>Specify the number of rows at a time to fetch and process in memory. If you specify zero, the system extracts all rows at once.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#dataflow-splice-machine-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-splice-machine-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
