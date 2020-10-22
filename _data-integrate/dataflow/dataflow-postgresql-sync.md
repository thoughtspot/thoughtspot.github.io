---
title: [Sync data through a PostgreSQL connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a PostgreSQL database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for PostgreSQL:

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-postgresql-sync.png "Enter connection details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-null-value)<br/>Specifies the string literal that should indicate the null value in the extracted data. During the data load the column value matching this string will be loaded as null in the target.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-escape-character)<br/>Specify the escape character if using a text qualifier in the source data.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#dataflow-postgresql-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
