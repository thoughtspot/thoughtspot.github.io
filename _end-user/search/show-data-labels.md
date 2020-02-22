---
title: [Additional chart options]

last_updated: 2/21/2020
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

![Show data markers]({{ site.baseurl }}/images/chart-config-data-markers.gif "Show data markers")

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

{: id="not-visualized"}
## Stack multiple columns on the X and Y axes

You can specify which fields to show on the X axis and Y axis of a chart. When you first run a search, some measures or attributes may not be visualized. You can add them to the other measures or attributes on the axes of a chart by dragging these columns from the **not visualized** section to the correct axis.

You can only add attributes to the X axis, and measures to the Y axis. If you cannot add a column to a specific axis, the option to do so does not appear to you when you attempt to drag and drop the column. Attributes appear blue in the search bar and in the **Customize** menu, while measures appear green.

{% include note.html content="The X and Y axes on a bar chart work in a different way than other charts. In bar charts, attributes are on the Y axis, and measures are on the X axis." %}

You can also drop attributes and measures to the **not visualized** section. This removes them from the visualization, but not from your search.

1. Click the **chart configuration** icon ![]({{ site.baseurl }}/images/icon-gear-20px.png){: .inline} on the top right.

2. Drag and drop a measure or attribute from the **not visualized** section to the correct axis, or from an axis to the **not visualized** section.

   ![Configure x and y axis]({{ site.baseurl }}/images/chart-config-not-visualized.gif "Configure x and y axis")

In some cases, the y-axis labels appear on either side of the chart (left and right) instead of stacked on the same side, depending on the parameters of the analysis. Refer to  [change the position of the axis]({{ site.baseurl }}/end-user/search/chart-axes-options.html#position) and [change the grouping]({{ site.baseurl }}/end-user/search/chart-axes-options.html#grouping).

For a list of chart types to which this applies, see [Charts with multiple measures on the y-axis]({{ site.baseurl }}/end-user/search/about-charts.html#charts-with-multiple-measures-on-the-y-axis).

## Hide and show values

Clicking on a legend item hides it from the chart, but does not delete it from your search. The legend appears when you have more than one column on an axis, or when you **slice with color**.

![Click a sliced value to hide or show it]({{ site.baseurl }}/images/chart-config-hide-sliced-value.gif "Click a sliced value to hide or show it")

Refer to [hide and show values]({{ site.baseurl }}/end-user/search/hide-and-show-values.html).

## Disable auto-selection of chart types

You can prevent ThoughtSpot from recommending other chart
options or configurations. For example, if you want to view an Answer as a line chart, you can lock that
display and stop ThoughtSpot from recommending an alternative visualization, such as a funnel or pie chart. A lock persists as you make changes to the columns in your Answer, and persists if you save the Answer and come back to it later.

To disable auto-selection of chart types:

1. Pick the chart type you want to use for your visualization.

2. Click the **change visualization** icon ![]({{ site.baseurl }}/images/icon-chart-type-20px.png) at the top right.

3. In the bottom right corner, turn off **auto-select my chart**.

    ![Turn off auto-selection of chart type]({{ site.baseurl }}/images/chart-config-autoselect.png "Turn off auto-selection of chart type")
