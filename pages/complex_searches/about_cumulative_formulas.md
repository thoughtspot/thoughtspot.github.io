---
title: [About cumulative formulas]
tags:
keywords: tbd
last_updated: tbd
summary: "Cumulative formulas are aggregate formulas."
sidebar: mydoc_sidebar
---
Cumulative formulas that allow you to calculate the average, max, min, or sum or your data over time, optionally grouped by an attribute (like region or department).

Each of the cumulative formulas accepts a measure and one or more attributes. And each returns the aggregate of the measure accumulated by the attribute(s) in the order specified. Although we usually talk about cumulative formulas over time, you could use them over any other sequential data.

The cumulative formulas include:

|Function|Description|
|--------|-----------|
|cumulative_average|Takes a measure and one or more attributes. Returns the average of the measure, accumulated by the attribute(s) in the order specified. For example: `cumulative_average (revenue, order date, state)`|
|cumulative_max|Takes a measure and one or more attributes. Returns the maximum of the measure, accumulated by the attribute(s) in the order specified. For example: `cumulative_max (revenue, state)`|
|cumulative_min|Takes a measure and one or more attributes. Returns the minimum of the measure, accumulated by the attribute(s) in the order specified. or example: `cumulative_min (revenue, campaign)`|
|cumulative_sum|Takes a measure and one or more attributes. Returns the sum of the measure, accumulated by the attribute(s) in the order specified. For example:  `cumulative_sum (revenue, order date)`|
