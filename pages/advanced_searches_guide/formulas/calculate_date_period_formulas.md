---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Calculate date formulas

Calculating date formulas is useful when you want to compare data from different date periods.

Here are some examples of using date formulas:

## Example 1

The following example shows you how to create formulas that you can use to compare data from this week to last week.

1.  The formula for this week is week ( today () ) - week (date).
2.  The formula for last week is diff_days ( week ( today ) ) , week ( date ) ).

## Example 2

The following example shows you how to calculate the percent increase from the last date period to this period in terms of revenue.

1.  Create the formula, this week revenue = sum ( if ( this week ) then revenue else 0 ).
2.  Then create the formula, last week revenue = sum ( if (last week ) then revenue else 0 ).
3.  Now you can use [nested formulas](../../complex_searches/about_nested_formulas.html#) to calculate the percent increase by creating a parent formula, percent increase = ( ( last week revenue - this week revenue) / last week revenue ) \* 100.

**Parent topic:** [About date formulas](../../../admin/advanced_searches_guide/formulas/about_date_formulas.html)

