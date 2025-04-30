---
title: [About cumulative formulas]
keywords: tbd
last_updated: tbd
summary: "Cumulative formulas are aggregate formulas."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Cumulative formulas that allow you to calculate the average, max, min, or sum or
your data over time. Although we usually talk about cumulative formulas over
time, you can use them over any other sequential data. Each of the cumulative
formulas accepts a measure and one or more optional grouping by an attribute
(like region or department):

```
formula (measure, [attribute, attribute, ...])
```

Only the measure value is required. If you supply both a measure and attributes,
the formula returns the aggregate of the measure accumulated by the attribute(s)
in the order specified. You should experiment with only a measure and then with
an attribute to see which output best meets your use case.


The cumulative formulas are:

|Function|Description|
|--------|-----------|
|cumulative_average|Takes a measure and one or more attributes. Returns the average of the measure, accumulated by the attribute(s) in the order specified. For example: `cumulative_average (revenue, order date, state)`|
|cumulative_max|Takes a measure and one or more attributes. Returns the maximum of the measure, accumulated by the attribute(s) in the order specified. For example: `cumulative_max (revenue, state)`|
|cumulative_min|Takes a measure and one or more attributes. Returns the minimum of the measure, accumulated by the attribute(s) in the order specified. or example: `cumulative_min (revenue, campaign)`|
|cumulative_sum|Takes a measure and one or more attributes. Returns the sum of the measure, accumulated by the attribute(s) in the order specified. For example:  `cumulative_sum (revenue, order date)`|
