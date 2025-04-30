---
title: [Apply conditional formatting]
last_updated: 11/5/2021
summary: "Apply conditional formatting to add visual cues for values in your data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

You can apply conditional formatting to tables or charts to highlight values in the data. This makes values above, below, or within a particular threshold stand out.

{% include note.html content="Certain elements of table configuration are part of the new answer experience. The new answer experience is in Beta and off by default, but the option to turn it on or off individually is on by default. These elements include conditional and number formatting for table summaries, improved conditional formatting for attributes and measures in table cells, conditional formatting for measures in pivot tables, content density, and theme (outline, row, or zebra). If the new Answer experience is off, you do not see these capabilities. You can turn it on or off individually from the <strong>Experience manager</strong> panel in your profile. If that option is not available, contact your administrator." %}

## Understand conditional formatting

Many companies create Liveboards with key metrics they want to track in daily or weekly staff meetings. Using conditional formatting, they can see at a glance how they are performing relative to these metrics.

You can add visual cues for KPIs (Key Performance Indicators) or threshold metrics to charts and tables, to easily show where you are falling short or exceeding targets. These visual cues are called conditional formatting, which applies color formatting to your search result. For tables, you can add conditional formatting to set the background color of cells in a table based on the values they contain. For charts, you can add conditional formatting to show the threshold(s) you defined, and the data that falls within them will be shown using the same color.

{: id="table"}
## Apply conditional formatting to a table

You can apply conditional formatting to both table cells and column summaries. You can specify a background color, font color, and/ or font style: bold, italics, underlined, or strikethrough. You can create conditional formatting rules for both measures and attributes. For pivot tables, you can only create conditional formatting rules for measures. Pivot tables follow the same conditional formatting rules as tables, even though they fall under ThoughtSpot's chart category.

{% include note.html content="You can only apply conditional formatting to numbers and strings. For example, you can apply conditional formatting to a <code>month of year</code> column, with values such as <code>January</code>, but not to date column where dates are in the format <code>1 Jan 2021</code>. For pivot tables, you can only apply conditional formatting to measure, not attributes." %}

If you create multiple conditional formatting rules for one measure or attribute, the first rule you create overrides the others, if there is a conflict. To change which rule overrides the others, simply drag and drop the rule to the top of the list of conditional formatting rules.

In the example below, the **christmas** table cell falls under both the `is christmas` rule, and the `not winter` rule. Currently, the `not winter` rule overrides the `is christmas` rule, so the **christmas** table cell does not have red text and a green background.

![Drag and drop the rule you would like to override other rules]({{ site.baseurl }}/images/conditional-formatting-override.png "Drag and drop the rule you would like to override other rules")

To create a conditional formatting rule:

1. Click the **edit table configuration** icon ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} to the upper right of your table. The **Edit table** panel appears, on the **Configure** menu.

2. Select the measure or attribute you would like to add a conditional formatting rule for.

3. The **Edit** panel for that column appears. Under **Conditional formatting**, click **+ Add rule**. If you would like to add conditional formatting for a column summary, select **Summary** under the column name, and click **+ Add rule**.

    {% include note.html content="When you create a rule for a column, it does not automatically apply to the column summary. You must create a separate rule for the column summary." %}

    ![Conditional formatting -- add rule]({{ site.baseurl }}/images/table-config-conditional-formatting.png "Conditional formatting -- add rule")

4. Select an operator. The valid options for attributes are `is`, `not`, `contains`, `does not contain`, `starts with`, `ends with`, `empty`, and `not empty`. The valid options for measures are `less than`, `greater than`, `less than or equal to`, `greater than or equal to`, `equal to`, `not equal to`, `between`, `empty`, and `not empty`.

5. Specify the column value(s) that the formatting should affect.

6. Choose a background color, font color, and/or font style: bold, italics, underlined, or strikethrough.

    In this example, if the `selling season` is (=) `christmas`, the background color for the table cell is green, and the font color is red.

    ![Conditional formatting example]({{ site.baseurl }}/images/table-config-conditional-formatting-rule.png "Conditional formatting example")

7. Click **Save**. The system applies the rule to the column or column summary.

8. You can edit an existing rule from the **Edit** panel for the column by clicking on the rule.

8. You can delete a conditional formatting rule from the **Edit** panel for the column. Select the **delete** icon that appears when you hover over a rule.

    ![Delete a conditional formatting rule]({{ site.baseurl }}/images/table-config-conditional-formatting-delete.png "Delete a conditional formatting rule")

{% include note.html content="If you change to a chart type, you must apply conditional formatting again. Conditional formatting is tied to the specific visualization." %}

{: id="conditional-formatting-chart"}
## Apply conditional formatting to a chart

{% include content/conditional-formatting-chart.md %}
