---
title: [About date formulas]
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Date formulas are useful when you want to compare data collected between two date periods. Date formulas allow you to apply date related functions to your formulas. The date functions include:

{% include content/date-func.md %}

## Calculate date formulas

Calculating date formulas is useful when you want to compare data from different date periods. Here are some examples of using date formulas:

### Example 1

The following example shows you how to create formulas that you can use to compare data from this week to last week.

- The formula for this week is: `week ( today () ) - week (date)`
- The formula for last week is: `diff_days ( week ( today ) ) , week ( date ) )`

### Example 2

The following example shows you how to calculate the percent increase from the last date period to this period in terms of revenue.

1. Create the formula: `this week revenue = sum ( if ( this week ) then revenue else 0 )`
2. Then create the formula: `last week revenue = sum ( if (last week ) then revenue else 0 )`
3. Use [nested formulas]({{ site.baseurl }}/complex-search/about-nested-formulas.html#) to calculate the percent increase by creating a parent formula: `percent increase = ( ( last week revenue - this week revenue) / last week revenue ) \* 100`
