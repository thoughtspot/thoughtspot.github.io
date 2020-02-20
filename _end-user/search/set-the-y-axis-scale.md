---
title: [Set the y-axis range]

last_updated: tbd
summary: "On charts, you can manually configure the y-axis range to be different from the search default. You can have multiple measures on the y-axis of many charts."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can manually set the y-axis range by clicking **edit** from the y-axis label drop-down.

## Setting the y-axis range

To set the y-axis range:

1. While viewing your answer as a chart, click the dropdown menu icon ![]({{ site.baseurl }}/images/icon-caret-right-20px.png){: .inline} next to the y-axis label you want to change.

2. Click **edit**.

    ![Click edit]({{ site.baseurl }}/images/chartconfig-edityaxis.png "Click edit")

2. Under **Min** and **Max**, set the y-axis range by specifying start and end values.

    In this example, the original chart shows **sales** values by **department**
    from 0 to over $5M. We can enter a y-axis range of `2500000` to `5000000` to
    show only sales between $2.5M and $5M.

    The chart reorganizes itself to reflect the new y-axis range.

    ![Set the y-axis range]({{ site.baseurl }}/images/chartconfig-minmax.png "Set the y-axis range")

    To change the range for **gross profit margin**, click the dropdown menu icon next to the **gross profit margin** axis label.

![Change the axis range gif]({{ site.baseurl }}/images/chart-config-axis-range.gif "Change the axis range gif")    

## Create charts with multiple measures on the y-axis

You can have multiple measures on the y-axis of most (but not all) chart types.
You can configure this in the **chart configuration** panel, by dragging and dropping measures out of the **not visualized** section. To learn more, see these topics:

* [Configure columns for X and Y axis]({{ site.baseurl }}/end-user/search/show-data-labels.html#stack-multiple-measures-on-the-y-axis)

* [Charts with multiple measures on the y-axis]({{ site.baseurl }}/end-user/search/about-charts.html#charts-with-multiple-measures-on-the-y-axis)
