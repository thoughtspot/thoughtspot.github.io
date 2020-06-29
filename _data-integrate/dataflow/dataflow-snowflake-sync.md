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

## Set Sync Properties

{% include content/dataflow/sync-properties.md %}

### Scripting for sync

{% include content/dataflow/sync-scripts.md %}

## Specify the Sync connector properties:

   <!--![Enter sync details]({{ site.baseurl }}/images/dataflow-azure-snowflake-sync.png "Enter sync details")-->

   * [Data extraction mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-data-extraction-mode)<br/>Specify the extraction type.<br/>Mandatory field.
   * [Column delimiter]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-column-delimiter)<br/>Specify the column delimiter character.<br/>Mandatory field.
   * [Null value]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-null-value)<br/>Specify the string literal that represents NULL on the source. When loading data, the system replaces this with NULL.<br/>Optional field.
   * [Text qualifier]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-text-qualifier)<br/>Specify if text columns in the source data are enclosed in quotes; if yes, single quotes or double quoates.<br/>Optional field.
   * [Escape character]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-escape-character)<br/>Specify this character to escpate text qualifiers in source data.<br/>Optional field.
   * [Fetch size]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-fetch-size)<br/>Specify the number of rows fetched into memory at the same time. If the value is 0, system fetches all rows at the same time.<br/>Mandatory field.
   * [TS load options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#dataflow-azure-synapse-sync-ts-load-options)<br/>Specify additional parameters passed with the <code>tsload</code> command. The format for these parameters is:<br/><code>--&lt;param_1_name&gt; &lt;optional_param_1_value&gt;</code><br/>Optional field.

   See [Sync properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-azure-synapse-reference.html#sync-properties).
