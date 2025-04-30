---
title: [Sync data through a Presto connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Presto database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Presto:


   <details>
      <summary>See the <strong>Connection-specific sync properties</strong> screen</summary><p><img src="../../images/dataflow-set-sync-properties-draft.png" alt="Enter sync details" /></p>
   </details>

   <!--![Enter connection details]({{ site.baseurl }}/images/dataflow-presto-sync.png "Enter connection details")-->

   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#dataflow-presto-sync-column-delimiter)<br/>Specifies the column delimiter character.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#dataflow-presto-sync-null-value)<br/>Specifies the string literal that indicates the null value in the extracted data. During the data load, the column value matching this string loads as null in the target.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#dataflow-presto-sync-enclosing-character)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#dataflow-presto-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#dataflow-presto-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-presto-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
