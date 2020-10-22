---
title: [Sync data through HDFS connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an lahdfs file system, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enable archive on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-enable-archive-on-success)<br/>Specify if data needs to be archived once it is succeeded<br/>Optional field.
   * [Delete on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-delete-on-success)<br/>Specify if data needs to be deleted after execution is successful<br/>Optional field.
   * [Compression]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-compression)<br/>Specify this if the file is compressed and what kind of compressed file it is<br/>Mandatory field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-null-value)<br/>Specify the string literal that represents NULL values in data. During the data load, the column value that matches this string loads as NULL into ThoughtSpot.
   * [Date style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-date-style)<br/>Specifies how to interpret the date format<br/>Optional field.
   * [Date delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-date-delimiter)<br/>Specifies the separator used in the date format ( only default delimiter is supported).
   * [Time style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-time-style)<br/>Specifies the format of the time portion in the data.
   * [Time delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-time-delimiter)<br/>Specifies the character used as separate the time components. (Only default delimiter is supported)<br/>Optional field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
