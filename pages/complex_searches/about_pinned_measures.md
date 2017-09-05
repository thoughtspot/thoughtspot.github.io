---
title: [About grouping formulas]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
---
What if you want to aggregate a value by a specific attribute (for example, show revenue by product)? This is known as a grouped aggregation, but some people call it a pinned measure or level-based measure.

You can do this for any aggregation using the grouping formulas. Each of the grouping formulas accepts a measure and one or more attributes. And each returns the aggregate of the measure grouped by the attribute(s).

The grouping formulas include:

|Function|Description|Examples|
|--------|-----------|--------|
|group_average|Takes a measure and one or more attributes. Returns the average of the measure grouped by the attribute(s).| -   `group_average (revenue, customer region)`|
|group_count|Takes a measure and one or more attributes. Returns the count of the measure grouped by the attribute(s).|  `group_count (revenue, customer region)`|
|group_max|Takes a measure and one or more attributes. Returns the maximum of the measure grouped by the attribute(s).|  `group_max (revenue, customer region)`|
|group_min|Takes a measure and one or more attributes. Returns the minimum of the measure grouped by the attribute(s).|  `group_min (revenue, customer region)`|
|group_stddev|Takes a measure and one or more attributes. Returns the standard deviation of the measure grouped by the attribute(s).|  `group_stddev (revenue, customer region)`|
|group_sum|Takes a measure and one or more attributes. Returns the sum of the measure grouped by the attribute(s).|  `group_sum (revenue, customer region)`|
|group_unique_count|Takes a column name and one or more attributes. Returns the number of unique values in a column, grouped by the attribute(s).|  `group_unique_count ( product, supplier)`|
|group_variance|Takes a measure and one or more attributes. Returns the variance of the measure grouped by the attribute(s).|  `group_variance (revenue, customer region)`|
