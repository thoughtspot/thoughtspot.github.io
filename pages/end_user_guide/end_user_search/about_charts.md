---
title: [Understand charts]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---


Charts display your search answer in a visual way.

Your search needs at least [one attribute and one measure](about_attributes_and_measures.html#) to be presented as a chart. When you choose to display your answer as a chart, ThoughtSpot will assign it the best fit chart type.

**Note:** Colors are maintained across searches within a session. For example, when doing a search on revenue by state, each state will keep its color assigned to it even if you change the search or chart type.

You can choose from a large number of chart types in ThoughtSpot. Each chart type provides you with a different visualization for your answer.
-   **[Change the chart](../../../pages/end_user_guide/end_user_search/change_the_chart.html)**  
You can adjust the axes, labels, and view of the chart.

## About chart types

You can choose from a large number of chart types in ThoughtSpot. Each chart type provides you with a different visualization for your answer.

You can change the chart type of your answer by clicking **Change Visualization**.

 ![](/pages/images/chart_type_icons.png "ThoughtSpot chart types")

**Note:** Some chart types may be unavailable for you to select depending on the columns of your search. For example, if your search does not contain at least one geographical column then you will not be able to select any of the geo chart types. Unavailable chart types are grayed out. Hovering over one will tell you what columns are needed before you can choose it.

-   **[Column charts](../../../pages/end_user_guide/end_user_search/about_column_charts.html)**  
The column chart is one of ThoughtSpot's simplest, yet most versatile chart type. More often than not, the column chart will be chosen as your default chart type.
-   **[Bar charts](../../../pages/end_user_guide/end_user_search/about_bar_charts.html)**  
The bar chart is very similar to the column chart. The only difference is that it is oriented the other way.
-   **[Line charts](../../../pages/end_user_guide/end_user_search/about_line_charts.html)**  
Like the column chart, the line chart is one of ThoughtSpot's simplest, yet most versatile chart type. More often than not the line chart will be chosen as your default chart type.
-   **[Pie charts](../../../pages/end_user_guide/end_user_search/about_pie_charts.html)**  
The pie chart is a classic chart type that displays your search in a circle. The pie chart ThoughtSpot shows is in the shape of a doughnut.
-   **[Area charts](../../../pages/end_user_guide/end_user_search/about_area_charts.html)**  
The area chart is based on the line chart, but has filled in regions.
-   **[Scatter charts](../../../pages/end_user_guide/end_user_search/about_scatter_charts.html)**  
The scatter chart is useful for finding correlations or outliers in your data.
-   **[Bubble charts](../../../pages/end_user_guide/end_user_search/about_bubble_charts.html)**  
The bubble chart displays three dimensions of data with each containing a set of values.
-   **[Pareto charts](../../../pages/end_user_guide/end_user_search/about_pareto_charts.html)**  
The pareto chart is a type of chart that contains both columns and a special type of line chart.
-   **[Waterfall charts](../../../pages/end_user_guide/end_user_search/about_waterfall_charts.html)**  
The waterfall chart is used to show how an initial value is affected by a series of intermediate positive or negative values.
-   **[Treemap charts](../../../pages/end_user_guide/end_user_search/about_treemap_charts.html)**  
The treemap chart displays hierarchical data as a set of nested rectangles.
-   **[Heatmap charts](../../../pages/end_user_guide/end_user_search/about_heatmap_charts.html)**  
The heatmap chart displays individual data values in a matrix following a color scale.
-   **[Line column charts](../../../pages/end_user_guide/end_user_search/about_line_column_charts.html)**  
The line column chart combines the column and line charts.
-   **[Funnel charts](../../../pages/end_user_guide/end_user_search/about_funnel_charts.html)**  
The funnel chart shows a process with progressively decreasing proportions amounting to 100 percent in total.
-   **[About geo charts](../../../pages/end_user_guide/end_user_search/about_geo_charts.html)**  
There are three geo charts that let you visualize geographical data in ThoughtSpot.
-   **[About pivot tables](../../../admin/complex_searches/about_pivoting_a_table.html)**  
Pivot tables in ThoughtSpot use the well known drag-and-drop interface. Creating a pivot table enables exploring alternate visualization of data in a wide table. The basic idea is that some data is easier to consume when laid out horizontally, while others, vertically.
