---
title: [Sync data through Apache Parquet connection]
last_updated: 09/14/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an Apache Parquet file system, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specify escape characer if data uses text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specifies the string literal indicates the null value for a column. During the data load, the column value matching this string will be loaded as null in the target.
   * [Date style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specifies how to interpret the date format
   * [Date delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specifies the separator used in the date format.
   * [Time style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specifies the format of the time portion in the data.
   * [Time delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specifies the character used as separate the time components.
   * [Skip trailer rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Skip trailer row while processing the data
   * [Reader encoder]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specify the encoding format of the source system.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#)<br/>Specify additional parameters passed with the <code>tsload</code> command. The format for these parameters is:<br/><code>--&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code>
   * [Boolean representation]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#dataflow-apache-parquet-sync-boolean-representation)<br/>Specifies the representation of data in the boolean field

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-apache-parquet-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
