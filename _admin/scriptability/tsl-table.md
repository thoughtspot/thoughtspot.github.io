---
title: [Table TSL specification]
last_updated: 10/16/2020
summary: "Use ThoughtSpot Scripting Language to modify a table in a flat-file format. Then you can migrate the object to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To work with Scriptable tables in ThoughtSpot, you can download tables to a flat file in `TSL`, ThoughtSpot's Scripting Language, modify it, and subsequently upload this file either to the same cluster, or to a different cluster. To learn how to export, change, and update tables, see [Migrate or restore tables]({{ site.baseurl }}/admin/scriptability/scriptability-table.html).

{: id="syntax-tables"}
##  Syntax of the Table TSL file

The `TSL` file for Scriptable Tables has a specific syntax.

See the [Parameters](#parameters) section for details about the keywords used in this example.

You may not see each of these parameters in your own TSL files, depending on whether each variable is explicitly defined. For example, if you did not define an `index_priority` for your Table, the `index_priority` parameter does not appear. You can add that variable to the TSL file to specify an index priority for the Table.

<pre>
<a href="#table">table</a>:
  <a href="#name">name</a>: &lt;<em>table_name</em>&gt;
  <a href="#db">db</a>: &lt;<em>database_name</em>&gt;
  <a href="#schema">schema</a>: &lt;<em>schema_name</em>&gt;
  <a href="#db_table">db_table</a>: &lt;<em>database_table_name</em>&gt;
  <a href="#connection">connection</a>:
    <a href="#name">name</a>: &lt;<em>connection_name</em>&gt;
    <a href="#type">type</a>: &lt;<em>connection_type</em>&gt;
  <a href="#columns">columns</a>:
  - <a href="#name">name</a>: &lt;<em>column_name_1</em>&gt;
    <a href="#db_column_name">db_column_name</a>: &lt;<em>database_column_name</em>&gt;
    <a href="#is_primary_key">is_primary_key</a>: [true | false]
    <a href="#is_foreign_key">is_foreign_key</a>: [true | false]
    <a href="#data_type">data_type</a>: [ BOOL | VARCHAR | DOUBLE | FLOAT | INT32 | INT64 | DATE | TIME ]
    <a href="#properties">properties</a>:
      <a href="#column_type">column_type</a>: [ MEASURE | ATTRIBUTE ]
      <a href="#aggregation">aggregation</a>: [ SUM | COUNT | AVERAGE | MAX | MIN |
                     COUNT_DISTINCT | NONE | STD_DEVIATION | VARIANCE]
      <a href="#index_type">index_type</a>: [ DONT_INDEX | DEFAULT | PREFIX_ONLY |
                    PREFIX_AND_SUBSTRING | PREFIX_AND_WORD_SUBSTRING ]
      <a href="#index_priority">index_priority</a>: &lt;<em>index_priority</em>&gt;
      <a href="#synonyms">synonyms</a> :
             &lt;<em>synonym_1</em>&gt;
             &lt;<em>synonym_2</em>&gt;
      <a href="#is_attribution_dimension">is_attribution_dimension</a> : [true | false]
      <a href="#is_additive">is_additive</a> : [ true | false ]
      <a href="#calendar">calendar</a> : [ default | calendar_name ]
      <a href="#format_pattern">format_pattern</a> : &lt;<em>format_pattern_string</em>&gt;
      <a href="#currency_type">currency_type</a> :
        is_browser : true
          OR
        column : &lt;<em>column_name</em>&gt;
          OR
        iso_code : &lt;<em>valid_ISO_code</em>&gt;
      <a href="#is_hidden">is_hidden</a>: [ true | false ]
      <a href="#geo_config">geo_config</a> :
        latitude : true
          OR
        longitude : true
          OR
        country : true
          OR
        region_name:
        - country : &lt;<em>name_supported_country</em>&gt;
        - region_name : &lt;<em>region_name_in_UI</em>&gt;
      <a href="#spotiq_preference">spotiq_preference</a>: &lt;<em>spotiq_preference_string</em>&gt;
      <a href="#search_iq_preferred">search_iq_preferred</a>: [ true | false ]
  - <a href="#name">name</a>: &lt;<em>column_name_2</em>&gt;
  - <a href="#name">name</a>: &lt;<em>column_name_n</em>&gt;
<a href="#guid">guid</a>: &lt;<em>table_guid</em>&gt;
</pre>

{: id="parameters"}
## Parameters of the table TSL file
<dl>

  <dlentry id="aggregation">
    <dt>aggregation</dt>
    <dd>The default aggregation of the Worksheet, View, or Table column, or the aggregation of the output for a formula.<br>
      Aggregation options depend on the data type.<br>
      Possible values: <code>SUM</code>, <code>COUNT</code>, <code>AVERAGE</code>, <code>MAX</code>, <code>MIN</code>, <code>COUNT_DISTINCT</code>, <code>NONE</code>, <code>STD_DEVIATION</code>, and <code>VARIANCE</code><br>
      Default: <code>SUM</code><br>
    </dd>
  </dlentry>

  <dlentry id="calendar">
    <dt>calendar</dt>
    <dd>Specifies the calendar used by a date column<br>
    Can be the Gregorian calendar (<code>default</code>), a fiscal calendar, or any custom calendar.<br>
    See <a href="../setup/set-custom-calendar.html">Set up a custom calendar</a></dd>
  </dlentry>

  <dlentry id="columns">
    <dt>columns</dt>
    <dd>The columns in the table.</dd>
  </dlentry>

  <dlentry id="column_type">
    <dt>column_type</dt>
    <dd>The type of data the column represents. For a formula, the <code>column_type</code> refers to the output of the formula. <br>
    Possible values: <code>MEASURE</code> or <code>ATTRIBUTE</code><br>
    For Worksheets, the default is: <code>MEASURE</code> <br>
    For formulas, the default depends on the <a href="#data_type">data_type</a>. If the data type is <code>INT</code> or <code>BIGINT</code>, the formula output’s <code>column_type</code> defaults to <code>Measure</code>. If the data type is <code>BOOL</code>, <code>VARCHAR</code>, <code>DOUBLE</code>, <code>FLOAT</code>, <code>DATE</code>, <code>DATETIME</code>, or <code>TIME</code>, the formula output’s <code>column_type</code> defaults to <code>Attribute</code>.</dd>
  </dlentry>

  <dlentry id="connection">
    <dt>connection</dt>
    <dd>A way to identify the external data warehouse connection that the table resides in.</dd>
  </dlentry>

  <dlentry id="currency_type">
    <dt>currency_type</dt>
    <dd>The source of currency type<br>
    One of:<br>
    <ul>
      <li><code>is_browser : true</code> infer the currency data from the locale of your browser</li>
      <li><code>column : &lt;<em>column_name</em>&gt;</code> extracts the currency information from a specified column</li>
      <li><code>iso_code : &lt;<em>valid_ISO_code</em>&gt;</code> applies currency based on the ISO code; see <a href="https://www.iso.org/iso-4217-currency-codes.html">ISO 4217 Currency Codes</a></li>
    </ul>
    See <a href="../data-modeling/set-format-pattern-numbers.html#set-currency-type">Set currency type</a></dd>
  </dlentry>

  <dlentry id="data_type">
    <dt>data_type</dt>
    <dd>The data type of the formula output or column. If the data type is <code>INT</code> or <code>BIGINT</code>, the formula output’s <code>column_type</code> defaults to <code>Measure</code>. If the data type is <code>BOOL</code>, <code>VARCHAR</code>, <code>DOUBLE</code>, <code>FLOAT</code>, <code>DATE</code>, <code>DATETIME</code>, or <code>TIME</code>, the formula output’s <code>column_type</code> defaults to <code>Attribute</code>.
	The possible data types are <code>Boolean</code>, <code>Text</code>, <code>Date</code>, <code>Datetime</code>, <code>Time</code>, <code>Numeric</code>, and <code>Decimal</code>.
</dd>
  </dlentry>

  <dlentry id="db">
    <dt>db</dt>
    <dd>The database that a table resides in. Note that this is not the same as the data warehouse (Falcon, Amazon Redshift, or Snowflake, for example).</dd>
  </dlentry>

  <dlentry id="db_column_name">
    <dt>db_column_name</dt>
    <dd>The name of the column in the database. Note that this database is not the same as the data warehouse (Falcon, Amazon Redshift, or Snowflake, for example).</dd>
  </dlentry>

  <dlentry id="db_table">
    <dt>db_table</dt>
    <dd>The name of the table in the database. Note that this database is not the same as the data warehouse (Falcon, Amazon Redshift, or Snowflake, for example).</dd>
  </dlentry>

  <dlentry id="format_pattern">
    <dt>format_pattern</dt>
    <dd>The format pattern string that controls the display of a number, date, or currency column<br>
    See <a href="../data-modeling/set-format-pattern-numbers.html">Set number, date, and currency formats</a></dd>
  </dlentry>

  <dlentry id="geo_config">
    <dt>geo_config</dt>
    <dd>Specifies the geographic information of a column<br>
    One of:<br>
    <ul>
      <li><code>latitude : true</code> for columns that specify the latitude</li>
      <li><code>longitude : true</code> for columns that specify the longitude</li>
      <li><code>country : true</code> for columns that specify the country</li>
      <li><code>region_name</code> for specifying a region in a country<br>
          Uses two paired parameters:<br>
           - <code>country: &lt;<em>country_name</em>&gt;</code><br>
           - <code>region_name: &lt;<em>region_name_in_UI</em>&gt;</code>, which can be State, Postal Code, District, and so on.</li>
    </ul>  
    See <a href="../data-modeling/model-geo-data.html">Add a geographical data setting</a></dd>
  </dlentry>

  <dlentry id="guid">
  <dt>guid</dt>
  <dd>The GUID for the Answer, Pinboard, Table, Worksheet, or View. You can find this string of letters and numbers at the end of the URL for an object.</dd>
  </dlentry>

  <dlentry id="index_priority">
    <dt>index_priority</dt>
    <dd>A value (1-10) that determines where to rank a column’s name and values in the search suggestions<br>
    ThoughtSpot prioritizes columns with higher values.<br>
    See <a href="../data-modeling/change-index.html#change-a-columns-suggestion-priority">Change a column’s suggestion priority</a>.</dd>
  </dlentry>

  <dlentry id="index_type">
    <dt>index_type</dt>
    <dd>The indexing option of the Worksheet, View, or table column<br>
    Possible values: <code>DONT_INDEX</code>, <code>DEFAULT</code> (see <a href="../data-modeling/change-index.html#understand-the-default-indexing-behavior">Understand the default indexing behavior</a>), <code>PREFIX_ONLY</code>, <code>PREFIX_AND_SUBSTRING</code>, and <code>PREFIX_AND_WORD_SUBSTRING</code><br>
    Default: <code>DEFAULT</code><br>
    See <a href="../data-modeling/change-index.html#index-type">Index Type Values</a></dd>
  </dlentry>

  <dlentry id="is_additive">
    <dt>is_additive</dt>
    <dd>Controls extended aggregate options for attribute columns<br>
      For attribute columns that have a numeric data type (<code>FLOAT</code>, <code>DOUBLE</code>, or <code>INTEGER</code>) or a date data type (<code>DATE</code>, <code>DATETIME</code>, <code>TIMESTAMP</code>, or <code>TIME</code>)<br>
      Possible values: <code>true</code> or <code>false</code><br>
      Default: <code>true</code><br>
      See <a href="../data-modeling/change-aggreg-additive.html#making-an-attribute-column-additive">Making an ATTRIBUTE column ADDITIVE</a></dd>
  </dlentry>

  <dlentry id="is_attribution_dimension">
    <dt>is_attribution_dimension</dt>
    <dd>Controls if the column is an attribution dimension<br>
      Used in managing chasm traps.<br>
      Possible values: <code>true</code> by default, <code>false</code> to designate a column as not producing meaningful attributions across a chasm trap<br>
      Default: <code>true</code><br>
      See <a href="../data-modeling/attributable-dimension.html">Change the attribution dimension</a></dd>
  </dlentry>

  <dlentry id="is_hidden">
    <dt>is_hidden</dt>
    <dd>The visibility of the column<br>
    Possible values: <code>true</code> to hide the column, <code>false</code> not to hide the column<br>
    Default: <code>false</code><br>
    See <a href="../data-modeling/change-visibility-synonym.html#hide-a-column">Hide a column</a></dd>
  </dlentry>

  <dlentry id="is_primary_key">
    <dt>is_primary_key</dt>
    <dd>Determines if the table column is the primary key. Can be <code>true</code> or <code>false</code>.</dd>
  </dlentry>

  <dlentry id="is_foreign_key">
    <dt>is_foreign_key</dt>
    <dd>Determines if the table column is the foreign key. Can be <code>true</code> or <code>false</code>.</dd>
  </dlentry>

  <dlentry id="name">
    <dt>name</dt>
    <dd>The name of an object. Applies to <code>worksheet</code>, <code>table</code>,<code>join</code>, <code>formula</code>, <code>answer</code>, <code>pinboard</code>, <code>view</code>, <code>table</code>, <code>connection</code> and so on.<br>
    For Answers, <code>name</code> refers to how the column appears in the query. For example, if you sorted by <code>Quarter</code> in your search, from the <code>Commit Date</code> column, the <code>name</code> of the column is <code>Quarter(Commit Date)</code>. Refer to <a href="{{ site.baseurl }}/app-integrate/reference/search-data-api.html#components">Components of a Search Query</a> to understand syntax.</dd>
  </dlentry>

  <dlentry id="properties">
    <dt>properties</dt>
    <dd>The list of properties of a Worksheet, Table, or View column, a Worksheet or View itself, or the properties of the output for a formula within an Answer, Worksheet, or View.<br>

    For Worksheets, Views, and Tables, each column can have the following properties, depending on its definition: <code>column_type</code>, <code>aggregation</code>, <code>index_type</code>, <code>is_hidden</code>, <code>index_priority</code>, <code>synonyms</code>, <code>is_attribution_dimension</code>, <code>is_additive</code>, <code>calendar</code>, <code>format_pattern</code>, <code>currency_type</code>, <code>geo_config</code>, <code>spotiq_preference</code>, and <code>search_iq_preferred</code>.<br>

    Worksheets and Views themselves can have the following properties that affect query generation: <code>is_bypass_rls</code>, and <code>join_progressive</code>.<br>

    For Answers, each formula's output can have the following properties, depending on its definition: <code>column_type</code> and <code>aggregation</code>. </dd>
  </dlentry>

  <dlentry id="schema">
    <dt>schema</dt>
    <dd>The schema that the table is a part of.</dd>
  </dlentry>

<!--  <dlentry id="search_iq_preferred">
    <dt>search_iq_preferred</dt>
    <dd>Specifies whether this column can be used for SearchIQ queries.</a>.</dd>
  </dlentry>
  -->

  <dlentry id="spotiq_preference">
    <dt>spotiq_preference</dt>
    <dd>Specifies whether to include a column in SpotIQ analysis. Specify <code>EXCLUDE</code>, or this property defaults to include the column in SpotIQ Analysis.<br>
    Refer to <a href="{{ site.baseurl }}/admin/data-modeling/spotiq-data-model-preferences.html">Set columns to exlude from SpotIQ analyses</a>.</dd>
  </dlentry>

  <dlentry id="synonyms">
    <dt>synonyms</dt>
    <dd>Alternate names for the column, used in search<br>
    See <a href="../data-modeling/change-visibility-synonym.html#create-synonyms-for-a-column">Create synonyms for a column</a></dd>
  </dlentry>

  <dlentry id="table">
    <dt>table</dt>
    <dd>Top-level container for all object definitions within the Table.<br>
    Specific table, used in defining higher-level objects, such as table paths.<br>
    Defined as <code>name</code> within <code>tables</code> definition. <br> For Answers, this parameter contains configuration for the Answer, if it displays in table format.
    </dd>
  </dlentry>

  <dlentry id="type">
    <dt>type</dt>
    <dd>For Worksheets and Views, this is the join type.<br>
    Possible values: <code>LEFT_OUTER</code> for left outer join, <code>RIGHT_OUTER</code> for right outer join, <code>INNER</code> for inner join, <code>OUTER</code> for full outer join<br>
    Default: <code>INNER</code><br>
    For Tables, this is the Embrace connection type.<br>
    Possible values: <code>Snowflake</code> or <code>Amazon Redshift</code>.<br>
    For Answers, this is the chart type<br>
    Possible values: <code>COLUMN</code>, <code>BAR</code>, <code>LINE</code>, <code>PIE</code>, <code>SCATTER</code>, <code>BUBBLE</code>, <code>STACKED_COLUMN</code>, <code>AREA</code>, <code>PARETO</code>, <code>COLUMN</code>, <code>GEO_AREA</code>, <code>GEO_BUBBLE</code>, <code>GEO_HEATMAP</code>, <code>GEO_EARTH_BAR</code>, <code>GEO_EARTH_AREA</code>, <code>GEO_EARTH_GRAPH</code>, <code>GEO_EARTH_BUBBLE</code>, <code>GEO_EARTH_HEATMAP</code>, <code>WATERFALL</code>, <code>TREEMAP</code>, <code>HEATMAP</code>, <code>STACKED_AREA</code>, <code>LINE_COLUMN</code>, <code>FUNNEL</code>, <code>LINE_STACKED_COLUMN</code>, <code>PIVOT_TABLE</code>, <code>SANKEY</code>, <code>GRID_TABLE</code>, <code>SPIDER_WEB</code>, <code>WHISKER_SCATTER</code>, <code>STACKED_BAR</code>, or <code>CANDLESTICK</code>.
    </dd>
  </dlentry>

</dl>

{: id="limitations"}
## Limitations of working with TSL files

There are certain limitations to the changes you can apply by editing a Worksheet, Answer, Table, View, or Pinboard through TSL.

* Formulas and columns can either have a new name, or a new expression. You cannot change both, unless migrating or updating the worksheet two times.

* It is not possible to reverse the join direction in the TSL script.

* You cannot create new tables using Scriptability. You can only update existing tables.

* You can only change logical tables using Scriptability. You cannot change the physical version of the table that exists in a database. When you change the `column_name`, for example, the name changes in the application, but not in the physical table in the database.

* You cannot import manually compressed .zip files. You can only import .zip files that you exported from ThoughtSpot: either an object and its associated data sources, or multiple objects of the same type that you exported from the object list page.

## Related Information
- [Migrate or restore tables]({{ site.baseurl }}/admin/scriptability/scriptability-table.html)
