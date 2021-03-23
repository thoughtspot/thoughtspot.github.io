---
title: [Sync data through a MemSQL connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a MemSQL database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for MemSQL

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#dataflow-memsql-conn-column-delimiter)<br/>Specify the column delimiter character.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#dataflow-memsql-conn-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#dataflow-memsql-conn-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#dataflow-memsql-conn-ts-load-options)<br/>Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code>
   * [Max ignored rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#dataflow-memsql-conn-max-ignored-rows)<br/>Abort the transaction after encountering 'n' ignored rows

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
