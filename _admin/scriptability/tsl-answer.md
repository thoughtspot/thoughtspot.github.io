---
title: [Answer TSL specification]
last_updated: 7/20/2020
summary: "Use ThoughtSpot Scripting Language to modify an Answer in a flat-file format. Then you can migrate the object to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Scriptability for Answers and Pinboards is in <span class="label label-beta">Beta</span>. To enable Scriptable Answers and Pinboards, contact ThoughtSpot Support.

To work with Scriptable Answers in ThoughtSpot, you can download Answers to a flat file in `TSL`, ThoughtSpot's Scripting Language, modify it, and subsequently upload this file either to the same cluster, or to a different cluster. To learn how to export, change, and update Answers, see [Migrate or restore Answers]({{ site.baseurl }}/admin/scriptability/scriptability-answer.html).

{% include content/tml-note.md %}

{: id="syntax-answers"}
##  Syntax of the Answer TSL file

The `TSL` file for Scriptable Answers has a specific syntax.

See the [Parameters](#parameters) section for details about the keywords used in this example.

You may not see each of these parameters in your own TSL files, depending on whether each variable is explicitly defined. For example, if you did not define any conditional formatting, the `conditional_formatting` variable does not appear. You can add that variable in the TSL file to specify conditional formatting.

<pre>
<a href="#answer">answer</a>:
  <a href="#name">name</a>: &lt;<em>answer_name</em>&gt;
  <a href="#description">description</a>:
    This is a multi-line description of the answer
    Description line 2
  <a href="#tables">tables</a>:
  - <a href="#id">id</a>: &lt;<em>table_id</em>&gt;
    <a href="#name">name</a>: &lt;<em>table_name_1</em>&gt;
    <a href="#fqn">fqn</a> : &lt;<em>optional_GUID_of_table_name_1</em>&gt;
  <a href="#joins">joins</a>:
  - <a href="#name">name</a>: &lt;<em>join_name_1</em>&gt;
    <a href="#source">source</a>: &lt;<em>source_table_name</em>&gt;
    <a href="#destination">destination</a>: &lt;<em>destination_table_name</em>&gt;
    <a href="#type">type</a>: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    <a href="#on">on</a>: &lt;<em>on_string</em>&gt;
    <a href="#is_one_to_one">is_one_to_one</a>: [ false | true ]
  - <em>...</em>
  <a href="#table_paths">table_paths</a>:
  - <a href="#id">id</a>: &lt;<em>table_path_name_1</em>&gt;
    <a href="#table">table</a>: &lt;<em>table_name_1</em>&gt;
    <a href="#join_path">join_path</a>:
    - {}
  <a href="#formulas">formulas</a>:
  - <a href="#id">id</a>: &lt;<em>formula_id_1</em>&gt;
    <a href="#name">name</a>: &lt;<em>formula_name_1</em>&gt;
    <a href="#expr">expr</a>: &lt;<em>formula_definition_1</em>&gt;
    <a href="#properties">properties</a>: &lt;<em>formula_properties_1</em>&gt;
      <a href="#column_type">column_type</a>: [ MEASURE | ATTRIBUTE ]
      <a href="#data_type">data_type</a>: [ Boolean | Text | Date | Datetime | Time
      | Numeric | Decimal ]
      <a href="#aggregation">aggregation</a>: [ SUM | COUNT | AVERAGE | MAX | MIN |
                     COUNT_DISTINCT | NONE | STD_DEVIATION | VARIANCE]       
  - <a href="#id">id</a>: &lt;<em>formula_id_2</em>&gt;
    <a href="#name">name</a>: &lt;<em>formula_name_2</em>&gt;
    <a href="#expr">expr</a>: &lt;<em>formula_definition_2</em>&gt;
    <a href="#properties">properties</a>: &lt;<em>formula_properties_2</em>&gt;
  - <a href="#id">id</a>: &lt;<em>formula_id_3</em>&gt;
    <a href="#name">name</a>: &lt;<em>formula_name_3</em>&gt;
    <a href="#expr">expr</a>: &lt;<em>formula_definition_3</em>&gt;
    <a href="#properties">properties</a>: &lt;<em>formula_properties_3</em>&gt;  
  <a href="#search_query">search_query</a>: &lt;<em>search_query_string</em>&gt;
  <a href="#answer_columns">answer_columns</a>:
  - <a href="#id">id</a>: &lt;<em>column_id_1</em>&gt;
    <a href="#name">name</a>: &lt;<em>column_name_1</em>&gt;
    <a href="#custom_name">custom_name</a>: &lt;<em>custom_name_1</em>&gt;
  - <a href="#name">name</a>: &lt;<em>column_name_2</em>&gt;
  <a href="#table">table</a>:
    <a href="#table_columns">table_columns</a>:
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_1</em>&gt;
      <a href="#conditional_formatting">conditional_formatting</a>:
      - <a href="#range">range</a>:
        <a href="#min">min</a>: &lt;<em>conditional_formatting_minimum</em>&gt;
        <a href="#max">max</a>: &lt;<em>conditional_formatting_maximum</em>&gt;
      - <a href="#rule">rule</a>: &lt;<em>conditional_formatting_rule_1</em>&gt;
          <a href="#range">range</a>:
            <a href="#min">min</a>: &lt;<em>conditional_formatting_minimum</em>&gt;
            <a href="#max">max</a>: &lt;<em>conditional_formatting_maximum</em>&gt;
          <a href="#color">color</a>: &lt;<em>color_string</em>&gt;
          <a href="#plotAsBand">plotAsBand</a>: [ true | false ]
      - <a href="#rule">rule</a>: &lt;<em>conditional_formatting_rule_2</em>&gt; <!--
      <a href="#wrap_column_text">wrap_column_text</a>: [ true | false ]
      <a href="#column_width">column_width</a>: &lt;<em>column_width</em>&gt; not in v1-->
      <a href="#show_headline">show_headline</a>: [ true | false ]
      <a href="#headline_aggregation">headline_aggregation</a>: &lt;<em>headline_aggregation_string</em>&gt;
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_2</em>&gt;
    <a href="#ordered_column_ids">ordered_column_ids</a>:
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_1</em>&gt;
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_2</em>&gt; <!--
    <a href="#show_grid_summary">show_grid_summary</a>: [ true | false ]
    <a href="#show_table_footer">show_table_footer</a>: [ true | false ]
    <a href="#wrap_table_header">wrap_table_header</a>: [ true | false ] not in v1-->
    <a href="#client_state">client_state</a>: &lt;<em>client_state_string</em>&gt;
  <a href="#chart">chart</a>:
    <a href="#type">type</a>: &lt;<em>chart_type</em>&gt;
    <a href="#chart_columns">chart_columns</a>: &lt;<em>chart_column_1</em>&gt;
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_1</em>&gt;
      <a href="#conditional_formatting">conditional_formatting</a>:
      - <a href="#rule">rule</a>: &lt;<em>conditional_formatting_rule_1</em>&gt;
          <a href="#range">range</a>:
            <a href="#min">min</a>: &lt;<em>conditional_formatting_minimum</em>&gt;
            <a href="#max">max</a>: &lt;<em>conditional_formatting_maximum</em>&gt;
          <a href="#color">color</a>: &lt;<em>color_string</em>&gt;
          <a href="#plotAsBand">plotAsBand</a>: [ true | false ]
      - <a href="#rule">rule</a>: &lt;<em>conditional_formatting_rule_2</em>&gt; <!--
      <a href="#show_data_labels">show_data_labels</a>: [ true | false ] not in v1-->
    - <a href="#column_id">column_id</a>: &lt;<em>column_id_2</em>&gt;
    <a href="#axis_configs">axis_configs</a>: &lt;<em>axis_config_1</em>&gt;
    - x:
      - <a href="#column_id">column_id</a>: &lt;<em>column_id_x_axis</em>&gt;
    - y:
      - <a href="#column_id">column_id</a>: &lt;<em>column_id_y_axis</em>&gt;
      <a href="#color">color</a>:
      - <a href="#column_id">column_id</a>: &lt;<em>column_id_color</em>&gt;
    <a href="#axis_configs">axis_configs</a>: &lt;<em>axis_config_2</em>&gt;
    <a href="#locked">locked</a>: [ true | false ]
    <a href="#client_state">client_state</a>: &lt;<em>client_state_string</em>&gt;
  <a href="#display_mode">display_mode</a>: [ CHART_MODE | TABLE_MODE ]
</pre>

{: id="parameters"}
## Parameters of the Answer TSL file
<dl>

<dlentry id="aggregation">
  <dt>aggregation</dt>
  <dd>The aggregation of the output for a formula within an Answer.<br>
    Aggregation options depend on the data type.<br>
    Possible values: <code>SUM</code>, <code>COUNT</code>, <code>AVERAGE</code>, <code>MAX</code>, <code>MIN</code>, <code>COUNT_DISTINCT</code>, <code>NONE</code>, <code>STD_DEVIATION</code>, and <code>VARIANCE</code><br>
    Default: <code>SUM</code><br>
  </dd>
</dlentry>

<dlentry id="answer">
<dt>answer</dt>
<dd>Top-level container for all object definitions within an Answer.</dd>
</dlentry>

<dlentry id="answer_columns">
<dt>answer_columns</dt>
<dd>A list of columns generated by the search query.</dd>
</dlentry>

<dlentry id="axis_configs">
<dt>axis_configs</dt>
<dd>Specifies the columns for each axis on a chart. If you are displaying a column chart with a line chart overlaying it, for example, you would need to specify more than one <code>axis_config</code>.</dd>
</dlentry>

<dlentry id="chart">
  <dt>chart</dt>
  <dd>Contains configuration for the Answer, if it displays in chart format.
  </dd>
</dlentry>

<dlentry id="chart_columns">
  <dt>chart_columns</dt>
  <dd>A list of columns in the chart.
  </dd>
</dlentry>  

<dlentry id="client_state">
  <dt>client_state</dt>
  <dd>A JSON string with more advanced chart and table configuration.</dd>
</dlentry>

<dlentry id="color">
<dt>color</dt>
<dd>Color to use for conditional formatting or for the columns of an Answer in chart form, in the form of a HEX value.</dd>
</dlentry>

<dlentry id="column_id">
  <dt>column_id</dt>
  <dd>Specifies the way the column appears in the query. For example, if you sorted by <code>Quarter</code> in your search, from the <code>Commit Date</code> column, the <code>column_id</code> of the column is <code>Quarter(Commit Date)</code>. Refer to <a href="{{ site.baseurl }}/app-integrate/reference/search-data-api.html#components">Components of a Search Query</a> to understand syntax.</dd>
</dlentry>

<dlentry id="column_type">
  <dt>column_type</dt>
  <dd>The type of data the column represents. For a formula in an Answer, the <code>column_type</code> refers to the output of the formula. <br>
  Possible values: <code>MEASURE</code> or <code>ATTRIBUTE</code><br>
  The default depends on the <a href="#data_type">data_type</a>. If the data type is <code>Numeric</code> or <code>Decimal</code>, the formula output’s <code>column_type</code> defaults to <code>Measure</code>. If the data type is <code>Boolean</code>, <code>Text</code>, <code>Date</code>, <code>Datetime</code>, or <code>Time</code>, the formula output’s <code>column_type</code> defaults to <code>Attribute</code>.</dd>
</dlentry>

<!--<dlentry id="column_width">
  <dt>column_width</dt>
  <dd>The width of the table column.</dd>
</dlentry> not in v1-->

<dlentry id="conditional_formatting">
  <dt>conditional_formatting</dt>
  <dd>Conditional formatting for the chart or table of an Answer.</dd>
</dlentry>

<dlentry id="custom_name">
  <dt>custom_name</dt>
  <dd>Optional display name for a column.</dd>
</dlentry>

<dlentry id="data_type">
  <dt>data_type</dt>
  <dd>The data type of the formula output. If the data type is <code>Numeric</code> or <code>Decimal</code>, the formula output’s <code>column_type</code> defaults to <code>Measure</code>. If the data type is <code>Boolean</code>, <code>Text</code>, <code>Date</code>, <code>Datetime</code>, or <code>Time</code>, the formula output’s <code>column_type</code> defaults to <code>Attribute</code>.
The possible data types are <code>Boolean</code>, <code>Text</code>, <code>Date</code>, <code>Datetime</code>, <code>Time</code>, <code>Numeric</code>, and <code>Decimal</code>.
</dd>
</dlentry>

<dlentry id="description">
  <dt>description</dt>
  <dd>The text that describes an object: a <code>worksheet</code>, a <code>worksheet_column</code>, <code>answer</code>, <code>pinboard</code>, and so on.</dd>
</dlentry>

<dlentry id="destination">
  <dt>destination</dt>
  <dd>Name of destination table or view of the join</dd>
</dlentry>

<dlentry id="display_mode">
  <dt>display_mode</dt>
  <dd>Determines whether the Answer displays as a chart or a table. Specify either <code>CHART_MODE</code> or <code>TABLE_MODE</code>.</dd>
</dlentry>

<dlentry id="expr">
  <dt>expr</dt>
  <dd>The definition of the formula</dd>
</dlentry>

<dlentry id="formulas">
  <dt>formulas</dt>
  <dd>The list of formulas in the Answer.<br>
  Each formula is identified by <code>name</code>, the <code>expr</code> (expression), and an optional <code>id</code> attribute.</dd>
</dlentry>

<dlentry id="fqn">
<dt>fqn</dt>
<dd>The table's GUID. You can find this string of letters and numbers at the end of the URL for that table. For example, in https://&lt;company&gt;.thoughtspot.com/#/data/tables/34226aaa-4bcf-4d6b-9045-24cb1e9437cb, the GUID is 34226aaa-4bcf-4d6b-9045-24cb1e9437cb.</dd>
</dlentry>

<dlentry id="headline_aggregation">
  <dt>headline_aggregation</dt>
  <dd>Specifies the type of headline aggregation. Can be <code>COUNT</code>, <code>COUNT_DISTINCT</code>, <code>SUM</code>, <code>MIN</code>, <code>MAX</code>, <code>AVERAGE</code>, or <code>TABLE_AGGR</code>.</dd>
</dlentry>

<dlentry id="id">
  <dt>id</dt>
  <dd>Specifies the id of an object, such as <code>table_paths</code>, <code>formula</code>. Also specifies the way the column appears in the query. For example, if you sorted by <code>Quarter</code> in your search, from the <code>Commit Date</code> column, the <code>id</code> of the column is <code>Quarter(Commit Date)</code>. Refer to <a href="{{ site.baseurl }}/app-integrate/reference/search-data-api.html#components">Components of a Search Query</a> to understand syntax.<br> For formulas within Answers, <code>id</code> refers to the display name of the formula. If you do not give your formula a name, it appears as 'Untitled Formula'.</dd>
</dlentry>

<dlentry id="is_one_to_one">
  <dt>is_one_to_one</dt>
  <dd>Specifies the cardinality of the join<br>
  Possible values: <code>true</code>, <code>false</code><br>
  Default: <code>false</code></dd>
</dlentry>

<dlentry id="join_path">
  <dt>join_path</dt>
  <dd>Specification of a composite join as a list of distinct <code>join</code> attributes<br>
  These <code>join</code> attributes list relevant joins, previously defined in the <code>joins</code>, by name.<br>
  Default: <code>{}</code>
  </dd>
</dlentry>

<dlentry id="join_progressive">
  <dt>join_progressive</dt>
  <dd>Specifies when to apply joins on a worksheet<br>
  Possible values: <code>true</code> when joins are applied only for tables whose columns are included in the search, and <code>false</code> for all possible joins<br>
  Default: <code>true</code><br>
  See <a href="../worksheets/progressive-joins.html">How the worksheet join rule works</a></dd>
</dlentry>

<dlentry id="joins">
  <dt>joins</dt>
  <dd>List of joins between tables and views, used by the data source, if it is a Worksheet.<br>
  Each join is identified by <code>name</code>, and the additional attributes of <code>source</code>, <code>destination</code>, <code>type</code>, and <code>is_one_to_one.</code>
  </dd>
</dlentry>

<dlentry id="layout">
  <dt>layout</dt>
  <dd>Specifies the Pinboard layout, in the order that a <code>visualization_id</code> is listed.</dd>
</dlentry>

<dlentry id="locked">
  <dt>locked</dt>
  <dd>The 'automatically select my chart' option in the UI. If set to <code>true</code>, the chart type does not change, even when you add items to the query.</dd>
</dlentry>

<dlentry id="max">
<dt>max</dt>
<dd>Maximum value for conditional formatting.</dd>
</dlentry>

<dlentry id="min">
<dt>min</dt>
<dd>Minimum value for conditional formatting.</dd>
</dlentry>

<dlentry id="name">
  <dt>name</dt>
  <dd>The name of an object. Applies to <code>worksheet</code>, <code>table</code>,<code>join</code>, <code>formula</code>, <code>answer</code>, <code>pinboard</code> and so on.<br>
  For Answers, <code>name</code> refers to how the column appears in the query. For example, if you sorted by <code>Quarter</code> in your search, from the <code>Commit Date</code> column, the <code>name</code> of the column is <code>Quarter(Commit Date)</code>. Refer to <a href="{{ site.baseurl }}/app-integrate/reference/search-data-api.html#components">Components of a Search Query</a> to understand syntax.</dd>
</dlentry>

<dlentry id="on">
  <dt>on</dt>
  <dd>The keys that your tables are joined on.</dd>
</dlentry>

<dlentry id="ordered_column_ids">
  <dt>ordered_column_ids</dt>
  <dd>A list of columns, in the order they appear in the table.</dd>
</dlentry>

<dlentry id="properties">
  <dt>properties</dt>
  <dd>The properties of the output for a formula within an Answer.<br>
  For Answers, each formula's output can have the following properties, depending on its definition: <code>column_type</code> and <code>aggregation</code>. </dd>
</dlentry>

<dlentry id="plotAsBand">
<dt>plotAsBand</dt>
<dd>Specifies whether to plot the chart conditional formatting like a band on the Visualization. This is the 'fill chart' option in the UI.</dd>
</dlentry>

<dlentry id="range">
<dt>range</dt>
<dd>Range for the conditional formatting to apply to, with a specified <code>min</code> and <code>max</code>.</dd>
</dlentry>

<dlentry id="rule">
<dt>rule</dt>
<dd>A conditional formatting rule.</dd>
</dlentry>

<dlentry id="search_query">
  <dt>search_query</dt>
  <dd>A string that represents the fully disambiguated search query. Refer to <a href="{{ site.baseurl }}/app-integrate/reference/search-data-api.html#components">Components of a Search Query</a> to understand syntax.</dd>
</dlentry>

<!--<dlentry id="show_data_labels">
  <dt>show_data_labels</dt>
  <dd>Whether or not to show the data labels. <code>true</code> shows the labels.</dd>
</dlentry> not in v1 -->

<dlentry id="show_headline">
  <dt>show_headline</dt>
  <dd>Determines whether to show the headline for this column. <code>true</code> shows the headline.</dd>
</dlentry>

<!--<dlentry id="show_grid_summary">
  <dt>show_grid_summary</dt>
  <dd>Whether or not to show the grid summary. <code>true</code> shows the summary.</dd>
</dlentry> not in v1-->

<!--<dlentry id="show_table_footer">
  <dt>show_table_footer</dt>
  <dd>Whether or not to show the table footer. <code>true</code> shows the summary.</dd>
</dlentry> not in v1 -->

<dlentry id="source">
  <dt>source</dt>
  <dd>Name of source table or view of the join</dd>
</dlentry>

<dlentry id="table">
  <dt>table</dt>
  <dd>Specific table, used in defining higher-level objects, such as table paths.<br>
  Defined as <code>name</code> within <code>tables</code> definition. <br> This parameter can also refer to the configuration for the Answer, if it displays in table format.
  </dd>
</dlentry>

<dlentry id="table_columns">
  <dt>table_columns</dt>
  <dd>The columns in an Answer that is being displayed in table format.
  </dd>
</dlentry>

<dlentry id="table_paths">
  <dt>table_paths</dt>
  <dd>The list of table paths<br>
  Each table path is identified by the <code>id</code>, and additional attributes of <code>table</code> and <code>join_path</code>.</dd>
</dlentry>

<dlentry id="tables">
  <dt>tables</dt>
  <dd>List of tables used by the Answer.<br> Each table is identified by <code>name</code>.</dd>
</dlentry>

<dlentry id="type">
  <dt>type</dt>
  <dd>This refers to both the join type and the chart type.<br>
  Possible values for the join type: <code>LEFT_OUTER</code> for left outer join, <code>RIGHT_OUTER</code> for right outer join, <code>INNER</code> for inner join, <code>OUTER</code> for full outer join<br>
  Default: <code>INNER</code><br>
  Possible values for the chart type: <code>COLUMN</code>, <code>BAR</code>, <code>LINE</code>, <code>PIE</code>, <code>SCATTER</code>, <code>BUBBLE</code>, <code>STACKED_COLUMN</code>, <code>AREA</code>, <code>PARETO</code>, <code>COLUMN</code>, <code>GEO_AREA</code>, <code>GEO_BUBBLE</code>, <code>GEO_HEATMAP</code>, <code>GEO_EARTH_BAR</code>, <code>GEO_EARTH_AREA</code>, <code>GEO_EARTH_GRAPH</code>, <code>GEO_EARTH_BUBBLE</code>, <code>GEO_EARTH_HEATMAP</code>, <code>WATERFALL</code>, <code>TREEMAP</code>, <code>HEATMAP</code>, <code>STACKED_AREA</code>, <code>LINE_COLUMN</code>, <code>FUNNEL</code>, <code>LINE_STACKED_COLUMN</code>, <code>PIVOT_TABLE</code>, <code>SANKEY</code>, <code>GRID_TABLE</code>, <code>SPIDER_WEB</code>, <code>WHISKER_SCATTER</code>, <code>STACKED_BAR</code>, or <code>CANDLESTICK</code>.
  </dd>
</dlentry>

<!--<dlentry id="wrap_column_text">
  <dt>wrap_column_text</dt>
  <dd>Determines whether to wrap or clip the column text in an Answer being displayed as  a table. <code>true</code> wraps the text, <code>false</code> clips it.</dd>
</dlentry> not in v1 -->

<!--<dlentry id="wrap_table_header">
  <dt>wrap_table_header</dt>
  <dd>Determines whether to wrap or clip the table header. <code>true</code> wraps the table header.</dd>
</dlentry> not in v1-->

</dl>

{: id="limitations"}
## Limitations of working with TSL files

There are certain limitations to the changes you can apply by editing an Answer through TSL.

* Formulas and columns can either have a new name, or a new expression. You cannot change both, unless migrating or updating the Answer two times.

* It is not possible to reverse the join direction in the TSL script.

* You cannot create Scriptable representations of R- or Python-powered visualizations.

## Related Information
- [Migrate or restore Answers]({{ site.baseurl }}/admin/scriptability/scriptability-answer.html)
