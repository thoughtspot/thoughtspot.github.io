---
title: ["Manage suggestion indexing"]
last_updated: 4/9/2021
summary: "ThoughtSpot dynamically indexes Search bar suggestions for column names and values."
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---
When a user searches in the **Search** bar, ThoughtSpot supplies the user with
suggestions for column names and their column values. The **COLUMN NAME**
and any **SYNONYMS** appear in **Search** suggestions. For tables and Views, a column's **INDEX TYPE** controls whether and how ThoughtSpot suggests column values. For Worksheets, the **SUGGEST VALUES IN SEARCH** section for a column determines whether ThoughtSpot suggests column values.

Additionally, ThoughtSpot uses a column's **INDEX PRIORITY** value to determine where
to rank a column's name and values in the search suggestions. These values
impact the dynamically calculated _usage based ranking (UBR)_,

## Example of Search suggestion behavior

The following example illustrates how searching for `promotion_last_name t` causes
the system to suggest several ways of completing the `t` in the search:

![]({{ site.baseurl }}/images/index-type.png "Suggestions")

The system is suggesting the synonym `type` (callout A) for a column in the
`Promotion` table.  It is also suggesting a value of `theil` (callout B) for the
`Promotion_Last Name` column. If you look in the **Data > Tables** page, you can
see that there is a `type` synonym for the `Promotion_Type` column which is using
default indexing.

![]({{ site.baseurl }}/images/index-row.png "Table Row")

Managing search suggestions through **INDEX TYPE** and **INDEX PRIORITY** is
important. Properly configured suggestions can decrease "noise" in the
suggestion list. Increasing the visibility of important columns is helpful
for new or intermittent ThoughtSpot users.

## Understand the default indexing behavior for tables and Views

ThoughtSpot has a system default **INDEX TYPE** behavior for search suggestions for table and View values.
This system default is configured on your cluster and applies to all tables. You can override this default behavior on a per-column basis.

![Table and View search indexing]({{ site.baseurl }}/images/table-search-indexing.png "Table and View search indexing")

The system behavior when the **INDEX TYPE** is **DEFAULT** is as follows:

- With two exceptions, the system indexes all columns using their **COLUMN NAME**
value. The exceptions are columns with **COLUMN TYPE** of `MEASURE` and columns
with **DATA TYPE** of `DATE`.

- Columns that contain data values with large amount of free-form strings, that is,
a length is greater than 50 words, are indexed as `PREFIX_ONLY` by default.

  {% include warning.html content="If a column has a very large free text
  values, ThoughtSpot recommends you keep `DEFAULT` or set `DONT_INDEX`. Other
  settings indexing on these values may generate confusing suggestions." %}

- Short strings (like a `firstname` column) are indexed using
`PREFIX_AND_SUBSTRING` by default, which indexes both prefix and substrings.

- If a column is using has a _cardinality_ &ndash; the number of unique column values &ndash;  greater
  than 10 million, it is not indexed.

If a column's **INDEX TYPE** is _not_ **DEFAULT** and the column's cardinality is
greater than 30 million, ThoughtSpot does not index the column.

### High cardinality and performance

A column's cardinality can impact indexing. If you have a column with a very
high cardinality and a very high number of rows, indexing these values can
impact your ThoughtSpot performance. ThoughtSpot Support recommends you turn off
indexing of primary key columns on extremely large tables (> 10 million rows) in
your cluster.

High cardinality is relative to other considerations. In some cases, columns
with fewer than 10 million rows but with columns containing long strings can
cause performance problems with memory. If you have concerns or questions, your
ThoughtSpot Customer Success Engineer can help you determine appropriate
cardinality thresholds for your ThoughtSpot installation.

### Configure your own cluster defaults

If you need to, you can work with ThoughtSpot Support or your Customer Success
Engineer to configure new cluster defaults.

## Understand the indexing behavior for Worksheets
For Worksheets, you can only choose whether or not to index the column. You cannot choose an index type. When viewing a Worksheet, toggle the **SUGGEST VALUES IN SEARCH** option on or off.

![Worksheet search indexing]({{ site.baseurl }}/images/worksheet-search-indexing.png "Worksheet search indexing")

## Override the system default on a column

You can change a column's **INDEX TYPE** in the **Data > Tables > Columns** page
or in the **Index** value in the modeling file.  

The values you can set for **INDEX TYPE** are:

<table id="index-type">
<colgroup>
    <col style="width:30%">
    <col style="width:70%">
 </colgroup>
  <tbody>
  <tr>
    <th>Index type</th>
    <th>Description</th>
  </tr>
    <tr>
      <td><code class="highlighter-rouge">DEFAULT</code></td>
      <td>The default behavior applies to all <code class="highlighter-rouge">ATTRIBUTE</code> columns that are not <code class="highlighter-rouge">DATE</code> types. <code class="highlighter-rouge">PREFIX_AND_SUBSTRING</code> for short values and <code class="highlighter-rouge">PREFIX_ONLY</code> for long values and free-form text.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">DONT_INDEX</code></td>
      <td>Prevents indexing on the column values. The column doesn’t appear in search suggestions.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">PREFIX_AND_SUBSTRING</code></td>
      <td>Allows full indexing such that prefix and sub-string search both work for the column values.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">PREFIX_AND_WORD_SUBSTRING</code></td>
      <td>Allows indexing such that only prefix search works for each word of a multi-word string, for the column values.</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">PREFIX_ONLY</code></td>
      <td>Allows indexing such that only prefix search works for the column values.</td>
    </tr>
  </tbody>
</table>

Consider a column in which there are four values `ThoughtSpot`, `Thought`,
`Spot` and `Thought Spot`. If you search for `sp`, depending on the setting for
indexing, the column value search result suggestions will vary:

|Index field value|Search bar suggestions|
|---------------------|----------------------|
|`DEFAULT`|`ThoughtSpot`, `Spot` and `Thought Spot`|
|`DONT_INDEX`|No suggestions.|
|`PREFIX_AND_SUBSTRING`|`ThoughtSpot`, `Spot` and `Thought Spot`|
|`PREFIX_ONLY`|`Spot`|
|`PREFIX_AND_WORD_SUBSTRING`|`Spot` and `Thought Spot`|

To change a value in the application UI:

1. Open a worksheet or table from the **Data** page.
2. Find the column whose index type you want to modify.
3. Set its **INDEX TYPE**.
4. Save your changes.

If you are using the model file, locate the **Index** cell, and enter the **INDEX TYPE** you
want to use.

## Change a column's suggestion priority

A column's **INDEX PRIORITY** determines the order or rank in which it and its
values appear in the search dropdown.

![]({{ site.baseurl }}/images/priority-effect.png)

By default, the **INDEX PRIORITY** value is set to `1` for all columns. You can
push a column up in the order (increase the rank) by increasing its **INDEX
PRIORITY** value. A higher value (like `2`) will cause the corresponding column
and its values to appear higher up in the search dropdown than columns with
lower value (like `1`).

![]({{ site.baseurl }}/images/set-priority.png)

You should only use numbers between 1-10 in the **INDEX PRIORITY** field.Use a
value between `8-10` for important columns to improve their search ranking. Use
`1-3` for low priority columns.  

 To change a value in the application UI:

1. Open a worksheet or table from the **Data** page.
2. Find the column whose index type you want to modify.
3. Change the **INDEX PRIORITY** to a number between 1 and 10.
4. Save your changes.

If you are using the model file, locate the **Index** cell, and enter the
priority you want to use.

## Related information  

- [Model the data for searching]({{ site.baseurl }}/admin/data-modeling/about-data-modeling-intro.html)
- [Usage based rankings (UBR)]({{ site.baseurl}}/end-user/search/recent-searches.html#usage-based-ranking).
