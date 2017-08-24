---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About cumulative formulas

Cumulative formulas are aggregate formulas that allow you to calculate the average, max, min, or sum or your data over time, optionally grouped by an attribute (like region or department).

Each of the cumulative formulas accepts a measure and one or more attributes. And each returns the aggregate of the measure accumulated by the attribute(s) in the order specified. Although we usually talk about cumulative formulas over time, you could use them over any other sequential data.

The cumulative formulas include:

|Function|Description|Examples|
|--------|-----------|--------|
|cumulative_average|Takes a measure and one or more attributes. Returns the average of the measure, accumulated by the attribute(s) in the order specified.| -   `cumulative_average (revenue, order date, state)`

 |
|cumulative_max|Takes a measure and one or more attributes. Returns the maximum of the measure, accumulated by the attribute(s) in the order specified.| -   `cumulative_max (revenue, state)`

 |
|cumulative_min|Takes a measure and one or more attributes. Returns the minimum of the measure, accumulated by the attribute(s) in the order specified.| -   `cumulative_min (revenue, campaign)`

 |
|cumulative_sum|Takes a measure and one or more attributes. Returns the sum of the measure, accumulated by the attribute(s) in the order specified.| -   `cumulative_sum (revenue, order date)`

 |

-   **[Calculate the cumulative sum](../../pages/complex_searches/search_using_the_cumulative_function.html)**  
You can use the cumulative function in a search to measure from the start of your data to the current point.

**Parent topic:** [About aggregate formulas](../../pages/complex_searches/aggregation_formulas.html)

