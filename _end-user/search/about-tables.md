---
title: [Results that are tables]
last_updated: 10/26/2020
toc: true
summary: "Tables display your answer in a format similar to an Excel spreadsheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include note.html content="Certain elements of table configuration are part of the new Answer experience. These elements include conditional and number formatting for table summaries, improved conditional formatting for attributes and measures in table cells, content density, and theme (outline, row, or zebra). If the new Answer experience is off, you do not see these capabilities. You can turn the new Answer experience on or off individually from the <strong>Experience manager</strong> panel in your profile." %}

In the table view, your search identifies attributes and/or columns, and presents them as a table. ThoughtSpot aggregates the results based on the level of aggregation that you specify in the search. For example, if you only type `revenue`, you see the total sum of revenue as a single number. If you include the keyword `monthly`, the results are broken down by month. From the column header, you can rename the column, or sort or filter the column. You can rearrange the column order of your table by dragging and dropping the columns, either from the table itself or from the **Edit table: Configure** menu. You can also change the column widths.

## Rearrange column order

You can rearrange the column order of your table after adding all of your search terms.

To rearrange the column order:

1. While viewing your answer as a table, click the column header you would like to move.
2. Drag it across to its new position.

You can also rearrange the column order from the **Edit table: Configure** menu. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline}. Drag and drop the attribute or measure that you would like to move to a new position. The order of columns in the **Configure** menu reflects the column order of the table.

![Drag and drop gif]({{ site.baseurl }}/images/table-config-drag-drop.gif "Drag and drop gif")

## Resize column widths

You can resize the column widths of your table after adding all of your search
terms. Any adjustments you make to the column widths of your table are saved
when you pin the table to a pinboard. To resize the column widths:

1. While viewing your answer as a table, hover over a column border in the column header row.
2. Click and drag the border to create your preferred column width.

{: id="clip-wrap-text"}
## Clip or wrap text
You can clip or wrap long text in a table cell, or on a table header. You can configure clipped or wrapped text [for the entire table](#clip-entire-table), or [for each column individually](#clip-one-column).

When you clip long text, the table cells show only the beginning of the text. The rest appears if you increase the column width.

When you wrap long text, the table shows all the text in its cells by increasing the number of lines in the cells.

{: id="clip-entire-table"}
To clip or wrap text for the entire table, click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline}. Select **Settings**. Under **text wrapping**, choose **wrap** or **clip**.

![Wrap or clip long text]({{ site.baseurl }}/images/table-config-text.gif "Wrap or clip long text")

{: id="clip-one-column"}
To clip or wrap text for each column individually, hover over the column name and click the **more options menu** icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline}. Select **text wrapping,** and choose wrap or clip.

![Clip or wrap an individual column]({{ site.baseurl }}/images/table-config-clip-individual-column.png "Clip or wrap an individual column")

{: id="number-formatting"}
## Number formatting
You can format the numbers in any table column based on a measure, or in any column summary. This functionality allows you to change the **category** (number, percentage, or currency), **units** (auto, none, thousand, million, billion, or trillion), or method of writing **negative values** (-1234, 1234-, or (1234)).

{% include note.html content="When you change the formatting for a column, you do not change the formatting for its column summary. You must separately change the number formatting for column summaries." %}

To change the number formatting:

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select the column you want to format the values of, or the column whose column summary you would like to format.

    ![Select a measure]({{ site.baseurl }}/images/table-config-edit.png "Select a measure")

    The **Edit** panel for that column appears. Select **Summary** to format the column summary.

    You can also reach the **Edit** panel from the **more** icon that appears when you hover over a column name:

    ![Click number formatting]({{ site.baseurl }}/images/table-config-number-formatting-from-column.png "Click number fomatting")

    On the table, the column that you are editing is highlighted in a blue box.

    ![The edit panel]({{ site.baseurl }}/images/table-config-edit-panel-new.png "The edit panel")

3. Under **number formatting**, you can edit the category, units, or method of writing negative values. Click the dropdown menus to select new values.

4. Specify a **category**: *number*, *percentage*, or *currency*. If you select **currency**, you can select the type of currency: USD, AUD, EUR, and so on. If you do not pick a category, ThoughtSpot automatically picks the best category for your data.

5. Specify **units**: Select *none* to see your data down to two decimal points, for example, or select *millions* to see labels rounded to the millions. If you do not specify units, ThoughtSpot automatically picks the best units for your data.

    Depending on the unit, you can also specify the number of decimal places, and remove or include the thousand separator.

    ![Unit, decimal places, thousand separator]({{ site.baseurl }}/images/table-config-unit.png "Unit, decimal places, thousand separator")

6. Specify the method for writing **negative values**: -1234, 1234-, or (1234). The default is -1234.

![Number formatting gif]({{ site.baseurl }}/images/table-config-number-formatting.gif "Number formatting gif")

{: id="conditional-formatting"}
## Conditional formatting
You can perform conditional formatting on both measures and attributes, within table cells and in the table summaries.

Refer to [Apply conditional formatting]({{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#table).

Note that certain elements of conditional formatting are part of the new Answer experience. These elements include conditional formatting for table summaries and improved conditional formatting for attributes and measures in table cells. The new Answer experience is on by default; you can toggle it on or off from the **Experience manager** in your profile.

## Sort columns

You can sort a table by column values by clicking on the column title. If you
hold down the SHIFT key, you can sort on multiple column titles at a time. This is especially useful for date columns. For example, if you search for `sales` by `week` and by `quarter`,  and just sort the `quarterly` column, the weeks are not in order:

![Sort - quarterly]({{ site.baseurl }}/images/sort-one-column.png "Sort - quarterly")

If you press SHIFT and then click on the `weekly` column header, the weeks are in order, by quarter:

![Sort - weekly]({{ site.baseurl }}/images/sort-two-columns.png "Sort - weekly")

You can achieve this from the search bar, as well, by adding `sort by date quarterly` and `sort by date weekly`.

{% include tip.html content="This same functionality is available on tables you
see elsewhere in ThoughtSpot. For example, a table in the **Data** page is also
sortable in this manner."%}

## Table footer
Tables automatically have footers that tell you the number of rows the table has. You can enable or disable this footer from the **Settings** menu.

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select **Settings**.

3. Select **table footer** to enable or disable it.

    ![Enable or disable table footer]({{ site.baseurl }}/images/table-config-footer.png "Enable or disable table footer")

## Content density
You can view more table rows at a time by changing the content density. You can change the content density from the **Settings** menu.

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select **Settings**.

3. Under **Content density**, select **regular** or **compact**.

    ![Table content density]({{ site.baseurl }}/images/table-content-density.png "Table content density")

## Table theme
You can change the table theme from the default (outline) to **row** or **zebra**. You can change the table theme from the **Settings** menu. **Row** removes the lines between columns, and **zebra** changes the color of every other row.

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select **Settings**.

3. Under **Table theme**, select **outline**, **row**, or **zebra**.

    ![Table theme]({{ site.baseurl }}/images/table-theme.png "Table theme")

## Column summaries

For columns with numeric information, you can turn on **column summaries** that display column totals. These summaries are visible by default. You can perform number and conditional formatting on column summaries, just like you can for column values.

### Enable or disable column summaries

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select **Settings**.

3. Select **column summary** to enable or disable column summaries for the entire table. You can also enable or disable individual column summaries, from the **Summary** section in a column's **Edit** ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} panel.

    ![Enable or disable all column summaries]({{ site.baseurl }}/images/table-config-summary-global.png "Enable or disable all column summaries")

    ![Enable or disable individual column summaries]({{ site.baseurl }}/images/table-config-summary-individual.png "Enable or disable individual column summaries")

### Pin column summaries
You can pin column summaries to any Pinboard. Select the pin icon that appears when you hover over a summary.

### Column summary aggregation
You can modify how you would like a column summary value to be displayed by clicking the dropdown on a summary and selecting a different type of aggregation. This **aggregation** menu is also available from the **Summary** section in a column's **Edit** ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} panel. For measures, the available aggregations are `total`, `average`, `standard deviation`, `variance`, `min`, and
`max`. For attributes, the available aggregations are `unique count` and `total count`.

### Table aggregate summary

 The Table Aggregate summary appears when you use an aggregate function either through a formula or a search bar query, such as average of a measure. It recalculates the function for the entire table. In such cases, the Table Aggregate summary appears by default, instead of the “Avg” option, which does a second level of aggregation on top of the existing aggregation.

 In the following example, the table aggregate is a result of the Average Revenue formula `sum ( revenue ) / count ( ship mode )` which divides the total profit of each ship mode by the sum total count for that ship mode. ThoughtSpot recalculates that function for the entire table, taking the sum total profits of all ship modes and dividing it by the sum total count of all ship modes. Here, that results in a table aggregate average profit of 3.61M. The `average` summary option, by comparison, sums the average revenue for all ship modes and divides it by the number of ship modes (8), providing a less accurate average.

![Table aggregate summary]({{ site.baseurl }}/images/table-aggregate-summary.png "Table aggregate summary")
