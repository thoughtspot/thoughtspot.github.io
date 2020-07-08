---
title: [Sync data through Amazon S3 connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an Amazon S3 file system, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p></details>

   * [File name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-file-name)<br/>Specify the name of the file.<br/>Mandatory field.
   * [Enable archive on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-enable-archive-on-success)<br/>Specify if must archive file after operation succeeds.<br/>Optional field.
   * [Delete file on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-delete-file-on-success)<br/>Specify if must delete file after operation succeeds.<br/>Optional field.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
   * [Skip header rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-skip-header-rows)<br/>Skip the specified number of header rows when loading data.<br/>Optional field.
   * [Compression]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-compression)<br/>Specify if the file has compression, and type of compresssion.<br/>Mandatory field.
   * [Row delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-row-delimiter)<br/>Specify the end of the row character in the extracted data.<br/>Optional field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-enclosing-character)<br/>Specify if text columns in the source data use enclosing quotation marks, and their type.<br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Optional field.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-null-value)<br/>Specifies the string literal indicates the null value for a column. During the data load, the column value matching this string will be loaded as null in the target.<br/>Optional field.
   * [Date style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-date-style)<br/>Specifies how to interpret the date format.<br/>Optional field.
   * [Date delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-date-delimiter)<br/>Specifies the separator used in the date format.<br/>Optional field.
   * [Time style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-time-style)<br/>Specifies the format of the time portion in the data.<br/>Optional field.
   * [Time delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-time-delimiter)<br/>Specifies the character used as separate the time components.<br/>Optional field.
   * [Skip trailer rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-skip-trailer-rows)<br/>Skip the number of trailer rows specified while loading the data.<br/>Optional field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#dataflow-amazon-s3-sync-ts-load-options)<br/>Specifies the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application. The format for these parameters is:<br/><code> --&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/><code> --&lt;param_2_name&gt; &lt;optional_param_2_value&gt;</code><br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.


See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-amazon-s3-reference.html#sync-properties).
