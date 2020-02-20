---
title: [Additional chart options]

last_updated: tbd
summary: "On charts, you can configure data labels, grid lines, regression lines, legends, values for x or y axis, and lock or unlock."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Some charts have additional options under **Chart Configuration** that are covered in each chart type topic.

## Show detail labels

You can show detail labels for [every measure](#labels-all) in your chart, or configure labels [separately for each measure](#labels-one).

{: id="labels-all"}
### Configure all detail labels

1. While viewing your search or answer as a chart, click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Select **Settings** on the bottom right.

     ![Click settings]({{ site.baseurl }}/images/chartconfig-zoom-settings.png "Click settings")

3. Check the **all labels** box.

    ![Check the all labels box]({{ site.baseurl }}/images/chartconfig-labels-all.png "Check the all labels box")

    To further configure the labels, by showing unrounded numbers for example, [configure labels individually](#labels-one).

{: id="labels-one"}
### Configure labels for one measure

1. While viewing your search or answer as a chart, click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Click on the measure you want to add labels to.

    ![Select a measure]({{ site.baseurl }}/images/chartconfig-reordervalues.png "Select a measure")

3. Check the **data labels** box.<br>
    Note that only the **total sales** data has labels.

    ![Check the data labels box]({{ site.baseurl }}/images/chartconfig-datalabels.png "Check the data labels box")

4. You can specify a **category**, like *number*, *percentage*, or *currency*. Otherwise, ThoughtSpot automatically picks the best category for your data.

    ![Specify a label category]({{ site.baseurl }}/images/chartconfig-labelcategory.png "Specify a label category")

5. When you specify a category, you can also specify **units**. Select *none* to see your data down to two decimal points, for example, or select *millions* to see labels rounded to the millions.

    You can also specify the number of places after the decimal you want to see.

    ![Decimal specifications]({{ site.baseurl }}/images/chartconfig-decimals.png "Decimal specifications")

## Show data markers

For some charts, like line charts, you can show data markers. To show data markers:

1. While viewing your search or answer as a chart, click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Click **Settings** at the bottom of the **Customize** menu.

2. Select **Data Markers**.

   ![Select data markers]({{ site.baseurl }}/images/chartconfig-datamarkers.png "Select data markers")

## Add regression line

{% include note.html content="To add a regression line, you need a search with only one attribute and one measure. Otherwise, this option will show as disabled; i.e., greyed out on the styles panel. As soon as you modify the search to contain a single measure and attribute, the regression line option will be clickable."%}

1. While viewing your answer as a chart, click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Click **Settings** at the bottom of the **Customize** menu.

2. Select **Regression line**.

  You can show regression lines on most types of charts (bar, stacked bar, line,
  bubble, and so on). In the following examples, `sales` is the measure and `department` is
  the attribute.

  ![]({{ site.baseurl }}/images/chartconfig-regression1.png)
  ![]({{ site.baseurl }}/images/chartconfig-regression2.png)

## Display gridlines

Charts with X and Y axes can display gridlines. To display them:

1. While viewing your answer as a chart, click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Click **Settings** at the bottom of the **Customize** menu.

2. Select one or both of the gridline options.

     ![Select x- or y-axis gridlines]({{ site.baseurl }}/images/chartconfig-gridlines.png "Select x- or y-axis gridlines")

## Configure columns for X and Y axis

You can specify which fields to show on the X axis and Y axis of a chart. For example, when you first run a search, some measures or attributes may not be visualized. You can add them to the chart.

1. Click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Drag and drop a measure or attribute from the **not visualized** section to the correct axis, or from an axis to the **not visualized** section.

   ![Configure x and y axis]({{ site.baseurl }}/images/chart-config-not-visualized.gif "Configure x and y axis")

## Stack multiple measures on the y-axis

You can have multiple measures on the y-axis of most (but not all) chart types, as follows:

1. Create a chart.
2. Click **Edit chart configuration** on the right.
3. Click into the **Y-Axis** field and start typing the name of a measure used in the search.
4. Select the measure you want.

    The chart updates to show multiple measures on the Y-Axis.

    ![]({{ site.baseurl }}/images/stacked_column_chart_multi_y_axis-annotated.png "Stacked column chart example: "Show multiple measures on Y-Axis")

    * If your original chart had a legend, you will get a message stating _"When
    there are multiple columns on the y-axis, you cannot add a legend.
    `<Measure>` is already in use."_ If so, remove the legend and the chart will
    update to show multiple measures on the y-axis.

    * In some cases, the y-axis measures will show one on either side of the chart (left and right) instead of stacked on the same side, depending on the parameters of the analysis.

    * For a list of chart types to which this applies, see [Charts with multiple measures on the y-axis]({{ site.baseurl }}/end-user/search/about-charts.html#charts-with-multiple-measures-on-the-y-axis).

## Add columns to a chart legend

You can add to or edit the legend from the chart configuration panel.

1. Click **Edit chart configuration** on the right.

2. Click into the legend field to add one or more columns used in the search.

    ![]({{ site.baseurl }}/images/legend_add_fields.png "Add fields to a legend")

    Your changes are saved automatically.

3. View the updated chart.

   ![]({{ site.baseurl }}/images/legend_on_chart.png "Legend on chart")


## Lock the chart

You can use the lock icon to prevent ThoughtSpot from recommending other chart
options or configurations. For example, you want a line chart, you can lock that
display and stop TS from recommending an alternative visualization such as a
funnel/pie/column and so forth. A lock applies for all subsequent answers that
have the same column set.

![]({{ site.baseurl }}/images/chart_lock.png "Lock chart")

## Related information

[Change chart colors]({{ site.baseurl }}/end-user/search/change-chart-colors.html)  
