---
title: [Sync data through Snowflake connection]
last_updated: 6/22/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Snowflake database, you can create automatic data updates, to seamlessly refresh your data.

{% include content/dataflow/sync-for-databases.md %}

4. Specify the sync properties for Snowflake:

   <details>
     <summary>See the <strong>Connection-specific sync properties</strong> screen</summary>
     <p><img src="../../images/dataflow-set-sync-properties-snowflake.png" alt="Connection-specific sync properties" /></p></details>

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-data-extraction-mode)<br/>Specify the extraction type.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-column-delimiter)<br/>Specify the column delimiter character.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-enclosing-character)<br/>Specify if text column data is in quotes, and if <br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Escape unclosed field]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-escape-unclosed-field)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.
   * [Field optionally enclosed by]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-field-optionally-enclosed-by)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.
   * [Null If]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-null-if)<br/>Specify the string literal that indicates NULL value in the extracted data. During data loading, column values that match this string loaded as NULL in the target.
   * [Stage location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-stage-location)<br/>Specify a temporary staging server Snowflake has to use while DataFlow extracts data.
   * [Max file size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-max-file-size)<br/>Specify the maximum size of each file in the stage location, in bytes.
   * [Parallel threads]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-parallel-threads)<br/>Specify the number of parallel threads to unload data.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-fetch-size)<br/>Specify the number of rows fetched into memory at the same time. If the value is 0, system fetches all rows at the same time.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-ts-load-options)<br/>Specify the parameters passed with the <code>tsload</code> command, in addition to the commands already included by the application.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#sync-properties) for details, defaults, and examples.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
