---
title: [Additional chart options]
keywords: tbd
last_updated: tbd
summary: "On charts, you can configure data labels, grid lines, regression lines, legends, values for x or y axis, and lock or unlock."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Some charts have additional options under **Chart Styles** and **Configuration Options** that are
covered in each chart type topic.

## Show data labels

To show data labels:

1. While viewing your search or answer as a chart, click **Edit chart styles** on the right.

    ![]({{ site.baseurl }}/images/edit_chart_styles.png "Edit chart configuration icon")


2. Select **Show Data Labels**.

     ![]({{ site.baseurl }}/images/show_data_labels.png "Toggle on Show Data Labels")

## Show data markers

To show data markers:

1. While viewing your search or answer as a chart, click **Edit chart styles** on the right.

2. Select **Show Data Labels**.

     ![]({{ site.baseurl }}/images/show_data_markers.png "Toggle on Show Data Markers")


## Add regression line

{% include note.html content="To add a regression line, you need a search with only one attribute and one measure. Otherwise, this option will show as disabled; i.e., greyed out on the styles panel. As soon as you modify the search to contain a single measure and attribute, the regression line option will be clickable."%}

1. While viewing your answer as a chart, click **Edit chart styles**.
2. Select **Show regression line**.

  You can show regression lines on most types of charts (bar, stacked bar, line,
  bubble, and so on). In the examples below, `sales` is the measure and `department` is
  the attribute.

  ![]({{ site.baseurl }}/images/regression-line.png)
  ![]({{ site.baseurl }}/images/regression-line-with-line-chart.png)

## Display gridlines

Charts with X and Y axis can display gridlines. To display them:

1. Choose **Edit chart styles**.
2. Select one or both of the gridline options.

     ![]({{ site.baseurl }}/images/chart-gridline.png)

## Configure columns for X and Y axis

You can specify which fields to show on the X axis and Y axis of a chart.

1. Click **Edit chart configuration** on the right.

2. Click into the X or Y axis field and select the column used in the search that you want on a particular axis.

  ![]({{ site.baseurl }}/images/chart_x-y-axis.png "Configure x and y axis")

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
