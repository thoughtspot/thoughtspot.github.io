---
title: [Scatter charts]

last_updated: 8/12/2020
summary: "The scatter chart is useful for finding correlations or outliers in your data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Scatter charts display your data as a collection of points, which can either be evenly or unevenly distributed. Each point is plotted based on its own axes values. This helps you determine if there is a relationship between your searched columns.

In this chart, there is a correlation between `total sales` and `total cost`:

![Scatter chart example]({{ site.baseurl }}/images/scatter_chart_example.png "Scatter chart example")

Note that this chart type allows you to both **slice** and [slice with color]({{ site.baseurl }}/end-user/search/drag-and-drop.html#slice-with-color). The **slice** option only appears for scatter and [bubble charts]({{ site.baseurl }}/end-user/search/about-bubble-charts.html). It allows you to break up data based on a specific column in your data; in this case, `department`. If you hover over a data point, you can see what department it represents: 

![Scatter chart - slice]({{ site.baseurl }}/images/scatter-chart-slice.png "Scatter chart - slice")

Your search needs at least one attribute and one measure to be represented as a scatter chart.
