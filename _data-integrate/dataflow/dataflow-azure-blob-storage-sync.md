---
title: [Sync data through Azure Blob Storage connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an Azure Blob Storage file system, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-file-systems.md %}

4. Specify the sync properties for files:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p></details>

     * [File name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-file-name)<br/>Specify name of the file<br/>Mandatory field.
     * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-column-delimiter)<br/>Specifies the delimiter between the columns in the source file<br/>Mandatory field.
     * [Enable archive on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-enable-archive-on-success)<br/>Specify if file needs to be archived once it is succeeded<br/>Optional field.
     * [Delete on success]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-delete-on-success)<br/>Specify if file needs to be deleted after execution is successful<br/>Optional field.
     * [Compression]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-compression)<br/>Specify this if the file is compressed and what kind of compressed file it is<br/>Mandatory field.
     * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-enclosing-character)<br/>Specify if the text columns in the source data is enclosed in quotes.
     * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
     * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-null-value)<br/>Specifies the string literal indicates the null value for a column. During the data load, the column value matching this string will be loaded as null in the target.
     * [Date style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-date-style)<br/>Specifies how to interpret the date format<br/>Optional field.
     * [Date delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-date-delimiter)<br/>Specifies the separator used in the date format.
     * [Time style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-time-style)<br/>Specifies the format of the time portion in the data.
     * [Time delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-time-delimiter)<br/>Specifies the character used as separate the time components.
     * [Skip trailer rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-skip-trailer-rows)<br/>Skip the number of trailer rows specified while loading the data<br/>Optional field.
     * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.
     * [Boolean representation]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#dataflow-azure-blob-storage-sync-boolean-representation)<br/>Specifies the representation of data in the boolean field.

     See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-blob-storage-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
