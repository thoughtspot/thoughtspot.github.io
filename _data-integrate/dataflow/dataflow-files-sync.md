---
title: [Sync data through Snowflake connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Snowflake database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p></details>

     * [File name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-file-name)<br/>Specify name of the file.<br/>Mandatory field.
     * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
     * [Enable archive on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-enable-archive-on-success)<br/>Specify if system is to archive file after successful sync.<br/>Optional field.
     * [Delete file on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-delete-file-on-success)<br/>Specify if system to delete file after successful sync.<br/>Optional field.
     * [Compression]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-compression)<br/>Specify if file uses complression, and compression type.<br/>Optional field.
     * [Skip header rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-skip-header-rows)<br/>Specify the number of header rows to skip when loading data.<br/>Optional field.
     * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.<br/>Optional field.
     * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-escape-character)<br/>Specify escape characer if data uses text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Optional field. Specify if the text columns in the source data needs to be enclosed in quotes.
     * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-null-value)<br/>Specifies the string literal indicates the null value for a column. During the data load, the column value matching this string will be loaded as null in the target.<br/>Optional field.
     * [Date style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#dataflow-files-sync-date-style)<br/>Specifies how to interpret the date format<br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.


See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-files-reference.html#sync-properties).
