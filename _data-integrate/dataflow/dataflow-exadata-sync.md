---
title: [Sync data through an Exadata connection]
last_updated: 3/22/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to an Exadata database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Exadata:

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Null Value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-null-value)<br/>Specifies the string literal that should indicate the null value in the extracted data. During the data load the column value matching this string will be loaded as null in the target.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Max ignored rows]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-max-ignored-rows)<br/>Abort the transaction after encountering 'n' ignored rows
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-fetch-size)<br/>Specify the number of rows to be fetched at a time and processed in memory. If the value specified is zero then, all rows are extracted at once.
   * [File Type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-file-type)<br/>Specify type of the file
   * [LF String]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-lf-string)<br/>Specifies if the data has new line characters or not, so that these new line characters can be identified separately.
   * [Compression]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-compression)<br/>Specify this if the file is compressed
   * [Encryption]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-encryption)<br/>Specify if the data needs to be encrypted
   * [Date Style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-date-style)<br/>Specifies how to interpret the date format
   * [Date Delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-date-delimiter)<br/>Specifies the separator used in the date format.
   * [Time Style]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-time-style)<br/>Specifies the format of the time portion in the data.
   * [Time Delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#dataflow-exadata-sync-time-delimiter)<br/>Specifies the character used as separate the time components.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
