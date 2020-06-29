---
title: [Sync data through Snowflake connection]
last_updated: 6/22/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After using ThoughtSpot DataFlow to establish a connection to a Snowflake database, you can create automatic data updates, to seamlessly refresh your data.

To sync your data, perform these tasks:

## Select table
{% include content/dataflow/select-table.md %}

## Specify sync schedule
{% include content/dataflow/schedule.md %}

## Map tables

{% include content/dataflow/map-tables.md %}

## Map columns

{% include content/dataflow/map-columns.md %}

## Set sync properties

### Basic sync properties

{% include content/dataflow/sync-properties.md %}

### Scripting for sync

{% include content/dataflow/sync-scripts.md %}

### Connector-specific sync properties

{% include content/dataflow/sync-conn-Properties.md %}

4. Specify the sync properties for Snowflake:

   ![Sync properties for Snowflake]({{ site.baseurl }}/images/dataflow-set-sync-properties-snowflake.png "Sync properties for Snowflake")

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-data-extraction-mode)<br/>Specify the extraction type.<br/>Mandatory field.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
   * [Enclosing character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-enclosing-character)<br/>Specify if text column data is in quotes, and if <br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-escape-character)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Optional field.
   * [Escape unclosed field]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-escape-unclosed-field)<br/>Specify this if the text qualifier is mentioned. This should be the character which escapes the text qualifier character in the source data.<br/>Optional field.
   * [Field optionally enclosed by]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-field-optionally-enclosed-by)<br/>Specify if the text columns in the source data needs to be enclosed in quotes.<br/>Optional field.
   * [Null If]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-null-if)<br/>Specify the string literal that indicates NULL value in the extracted data. During data loading, column values that match this string loaded as NULL in the target.<br/>Optional field.
   * [Stage location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-stage-location)<br/>Specify a temporary staging server Snowflake has to use while DataFlow extracts data.<br/>Mandatory field.
   * [Max file size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-max-file-size)<br/>Specify the maximum size of each file in the stage location, in bytes.<br/>Mandatory field.
   * [Parallel threads]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-parallel-threads)<br/>Specify the number of parallel threads to unload data.<br/>Mandatory field.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-fetch-size)<br/>Specify the number of rows fetched into memory at the same time. If the value is 0, system fetches all rows at the same time.<br/>Mandatory field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-sync-ts-load-options)<br/>Specify additional parameters passed with the <code>tsload</code> command. The format for these parameters is:<br/><code>--&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/>Optional field.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.


See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#sync-properties).
