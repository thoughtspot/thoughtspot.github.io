---
title: [Understand charts]
keywords: tbd
last_updated: tbd
summary: "Charts display your search answer in a visual way."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your search needs at least [one attribute and one measure](about-attributes-and-measures.html#) to be presented as a chart. When you choose to display your answer as a chart, ThoughtSpot will assign it the best fit chart type.

{% include note.html content="Colors are maintained across searches within a session. For example, when doing a search on revenue by state, each state will keep its color assigned to it even if you change the search or chart type." %}

You can choose from a large number of chart types in ThoughtSpot. Each chart type provides you with a different visualization for your answer.

You can also [adjust the axes, labels, and view of the chart]({{ site.baseurl }}/end-user/search/change-the-chart.html).

## About chart types

You can choose from a large number of chart types in ThoughtSpot. Each chart type provides you with a different visualization for your answer.

To change the chart type of your answer:

1. Click **Change visualization** to get a palette of charts, maps, pivot table, and so on (scroll down to see more.)

   ![]({{ site.baseurl }}/images/chart_type_icons_change_viz.png "ThoughtSpot chart types")

2. Click a different chart or visualization type.

   ![]({{ site.baseurl }}/images/chart_type_icons.png "ThoughtSpot chart types")

**Note:** Some chart types may be unavailable for you to select depending on the columns in your search. For example, if your search does not contain at least one geographical column then you will not be able to select any of the geo chart types. Unavailable chart types are grayed out. Hovering over one will tell you what columns are needed before you can choose it.

-   **[Column charts]({{ site.baseurl }}/end-user/search/about-column-charts.html)**  
The column chart is one of ThoughtSpot's simplest, yet most versatile chart type. More often than not, the column chart will be chosen as your default chart type.
-   **[Bar charts]({{ site.baseurl }}/end-user/search/about-bar-charts.html)**  
The bar chart is very similar to the column chart. The only difference is that it is oriented the other way.
-   **[Line charts]({{ site.baseurl }}/end-user/search/about-line-charts.html)**  
Like the column chart, the line chart is one of ThoughtSpot's simplest, yet most versatile chart type. More often than not the line chart will be chosen as your default chart type.
-   **[Pie charts]({{ site.baseurl }}/end-user/search/pie-charts.html)**  
The pie chart is a classic chart type that displays your search in a circle. The pie chart ThoughtSpot shows is in the shape of a doughnut.
-   **[Area charts]({{ site.baseurl }}/end-user/search/area-charts.html)**  
The area chart is based on the line chart, but has filled in regions.
-   **[Scatter charts]({{ site.baseurl }}/end-user/search/about-scatter-charts.html)**  
The scatter chart is useful for finding correlations or outliers in your data.
-   **[Bubble charts]({{ site.baseurl }}/end-user/search/about-bubble-charts.html)**  
The bubble chart displays three dimensions of data with each containing a set of values.
-   **[Pareto charts]({{ site.baseurl }}/end-user/search/about-pareto-charts.html)**  
The pareto chart is a type of chart that contains both columns and a special type of line chart.
-   **[Waterfall charts]({{ site.baseurl }}/end-user/search/about-waterfall-charts.html)**  
The waterfall chart is used to show how an initial value is affected by a series of intermediate positive or negative values.
-   **[Treemap charts]({{ site.baseurl }}/end-user/search/about-treemap-charts.html)**  
The treemap chart displays hierarchical data as a set of nested rectangles.
-   **[Heatmap charts]({{ site.baseurl }}/end-user/search/about-geo-charts.html#heatmap-charts)**  
The heatmap chart displays individual data values in a matrix following a color scale.
-   **[Line column charts]({{ site.baseurl }}/end-user/search/line-column-charts.html)**  
The line column chart combines the column and line charts.
-   **[Funnel charts]({{ site.baseurl }}/end-user/search/about-funnel-charts.html)**  
The funnel chart shows a process with progressively decreasing proportions amounting to 100 percent in total.
-   **[About geo charts]({{ site.baseurl }}/end-user/search/about-geo-charts.html)**  
There are three geo charts that let you visualize geographical data in ThoughtSpot.
-   **[About sankey charts]({{ site.baseurl }}/end-user/search/about-sankey-charts.html)**  
Sankey charts show a flow from one set of values to another, usually with visual emphasis (brighter colors or larger bandwidths) for comparison of the values (e.g., top cities in terms of sales might be emphasized).
-   **[About pivot tables]({{ site.baseurl }}/complex-search/about-pivoting-a-table.html)**  
Pivot tables in ThoughtSpot use the well known drag-and-drop interface. Creating a pivot table enables exploring alternate visualization of data in a wide table. The basic idea is that some data is easier to consume when laid out horizontally, while others, vertically.

### Charts with multiple measures on the y-axis

You can have multiple measures on the y-axis of many charts, which is a great additional way of presenting information in a chart.

![]({{ site.baseurl }}/images/stacked_column_chart_multi_y_axis.png "Stacked column chart example: "Show multiple measures on Y-Axis")

Example of multiple measures on the y-axis of a stacked column chart.

Charts which support multiple measures on the y-axis:
* Column
* Stacked Column
* Bar
* Stacked Bar
* Line
* Area
* Stacked Area
* Waterfall
* Line Column
* Line Stacked Column
