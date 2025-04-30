---
title: [Pinboard TSL specification]
last_updated: 7/20/2020
summary: "Use ThoughtSpot Scripting Language to modify a Pinboard in a flat-file format. Then you can migrate the object to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Scriptability for Answers and Pinboards is in <span class="label label-beta">Beta</span>. To enable Scriptable Answers and Pinboards, contact ThoughtSpot Support.

To work with Scriptable Pinboards in ThoughtSpot, you can download Pinboards to a flat file in `TSL`, ThoughtSpot's Scripting Language, modify it, and subsequently upload this file either to the same cluster, or to a different cluster. To learn how to export, change, and update Pinboards, see [Migrate or restore Pinboards]({{ site.baseurl }}/admin/scriptability/scriptability-pinboard.html).

{% include content/tml-note.md %}

{: id="syntax-pinboards"}
##  Syntax of the Pinboard TSL file

The `TSL` file for Scriptable Pinboards has a specific syntax.

See the [Parameters](#parameters) section for details about the keywords used in this example.

You may not see each of these parameters in your own TSL files, depending on whether each variable is explicitly defined. For example, if you do not have any filters on your Pinboard, the `filters` parameter does not appear. You can add that variable to the TSL file to specify filters for your Pinboard.

<pre>
<a href="#pinboard">pinboard</a>:
  <a href="#name">name</a>: &lt;<em>pinboard_name</em>&gt;
  <a href="#description">description</a>:
    This is a multi-line description of the pinboard
    Description line 2
  <a href="#visualizations">visualizations</a>:
  - <a href="#answer">answer</a>:
    This section includes all the Answer specification for a visualization, from <code>name</code> to <code>display_mode</code>, in the <a href="{{ site.baseurl }}/admin/scriptability/tsl-answer.html#syntax-answers">Answer syntax</a> section of TSL Answer Specification.
    <a href="#id">id</a>: &lt;<em>viz_id_1</em>&gt;
  - <a href="#answer">answer</a>:
    This section includes all the Answer specification for a second visualization. In this case, the visualization is a headline.
    <a href="#id">id</a>: &lt;<em>viz_id_2</em>&gt;
    <a href="#display_headline_column">display_headline_column</a>: &lt;<em>headline_column</em>&gt;    
  <a href="#filters">filters</a>:
  - <a href="#column">column</a>: &lt;<em>filtered_column_name_1</em>&gt;
    <a href="#oper">oper</a>: &lt;<em>filter_operator</em>&gt;
    <a href="#values">values</a>: &lt;<em>filtered_values</em>&gt;
    - value 1
    - value 2
  - <a href="#column">column</a>: &lt;<em>filtered_column_name_2</em>&gt;
  <a href="#layout">layout</a>:
    tiles:
    - <a href="#visualization_id">visualization_id</a>: &lt;<em>visualization_id_1</em>&gt;
      <a href="#size">size</a>: &lt;<em>viz_id_1_size</em>&gt;
    - <a href="#visualization_id">visualization_id</a>: &lt;<em>visualization_id_2</em>&gt;
</pre>

{: id="parameters"}
## Parameters of the Pinboard TSL file
<dl>

<dlentry id="answer">
<dt>answer</dt>
<dd>This section includes all the Answer specification for a visualization, from <code>name</code> to <code>display_mode</code>, in the <a href="{{ site.baseurl }}/admin/scriptability/tsl-answer.html#syntax-answers">Answer syntax</a> section of TSL Answer Specification.</dd>
</dlentry>

<dlentry id="column">
  <dt>column</dt>
  <dd>The id of the column being filtered on.</dd>
</dlentry>

<dlentry id="description">
  <dt>description</dt>
  <dd>The text that describes an object: a <code>worksheet</code>, a <code>worksheet_column</code>, <code>answer</code>, <code>pinboard</code>, and so on.</dd>
</dlentry>

<dlentry id="display_headline_column">
  <dt>display_headline_column</dt>
  <dd>If the visualization is a headline, this parameter specifies the column the headline comes from.</dd>
</dlentry>

<dlentry id="filters">
  <dt>filters</dt>
  <dd>Contains specifications for Pinboard and Worksheet filters.</dd>
</dlentry>

<dlentry id="id">
  <dt>id</dt>
  <dd>Specifies the id of an object, such as an <code>answer</code>, in a Pinboard.</dd>
</dlentry>

<dlentry id="layout">
  <dt>layout</dt>
  <dd>Specifies the Pinboard layout, in the order that a <code>visualization_id</code> is listed.</dd>
</dlentry>

<dlentry id="name">
  <dt>name</dt>
  <dd>The name of an object. Applies to <code>worksheet</code>, <code>table</code>,<code>join</code>, <code>formula</code>, <code>answer</code>, <code>pinboard</code> and so on.</dd>
</dlentry>

<dlentry id="oper">
  <dt>oper</dt>
  <dd>The operator of the Pinboard or Worksheet filter. Accepted operators are <code>"in"</code>, <code>"not in"</code>, <code>"between"</code>, <code>=<</code>, <code>!=</code>, <code><=</code>, <code>>=</code>, <code>></code>, or <code><</code>.</dd>
</dlentry>

<dlentry id="pinboard">
<dt>pinboard</dt>
<dd>Top-level container for all object definitions within the Pinboard.</dd>
</dlentry>

<dlentry id="size">
  <dt>size</dt>
  <dd>The size of a visualization in a Pinboard. The options are <code>EXTRA_SMALL</code>, <code>SMALL</code>, <code>MEDIUM</code>, <code>LARGE</code>, <code>LARGE_SMALL</code>, <code>MEDIUM_SMALL</code>, and <code>EXTRA_LARGE</code>.
  </dd>
</dlentry>

<dlentry id="values">
  <dt>values</dt>
  <dd>The values being filtered (excluded or included) in a Pinboard or Worksheet.
  </dd>
</dlentry>  

<dlentry id="visualizations">
  <dt>visualizations</dt>
  <dd>The visualizations in a Pinboard: tables, charts, and headlines.
  </dd>
</dlentry>

<dlentry id="visualization_id">
  <dt>visualization_id</dt>
  <dd>The id of a visualization. Used to specify the Pinboard's <a href="#layout">layout</a>.
  </dd>
</dlentry>

</dl>

{: id="limitations"}
## Limitations of working with TSL files

There are certain limitations to the changes you can apply by editing a Pinboard through TSL.

* Formulas and columns can either have a new name, or a new expression. You cannot change both, unless migrating or updating the Pinboard two times.

* It is not possible to reverse the join direction in the TSL script.

* You cannot create Scriptable representations of R- or Python-powered visualizations.

## Related Information
- [Migrate or restore Pinboards]({{ site.baseurl }}/admin/scriptability/scriptability-pinboard.html)
