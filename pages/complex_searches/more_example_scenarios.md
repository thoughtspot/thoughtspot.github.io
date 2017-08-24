---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Worksheet from a search example scenarios

Here are three common examples of when you would need to use aggregated worksheets.

## Example 1

Our first example involves creating an aggregated worksheet with a default filter.

Say you want to create a worksheet that only shows data for a particular US state. In your search, enter “customer state = texas”. Then click **Actions**, and select **Save as worksheet**. Give your worksheet a name, then click **Save** to create your worksheet.

Now you have a worksheet that only contains data that pertains to Texas. You can share this worksheet with others to search across. Another popular example of this concept includes creating a worksheet with only active employee data.

## Example 2

Our second example involves joining two aggregated worksheets.

Say you want to plot the revenue of the top five states over time. Search for revenue, store state, and top 5. Save this answer as an aggregated worksheet called "Top 5 states". Then start another search with the tokens revenue, store state, and date. Save this answer as an aggregated worksheet called "Total monthly purchases".

Now you want to join these two worksheets. Navigate to the **Data** tab and make a relationship between the two worksheets, involving store state.

To start a new search, select your two aggregated worksheets as data sources, selecting the appropriate columns: store state from Top 5 States, and date and total sales from Total Monthly Purchases. You will only see data for the top five revenue states.

## Example 3

Our third example involves creating a search to find customers who bought product A, but did not buy product B. This example can also be done using [conditional formulas](../advanced_searches_guide/formulas/conditional_sum.html#).

First, you would have to perform searches for total sales by customer for both A and B, and create aggregated worksheets for both. Then join these two aggregated worksheets back in an outer join looking for conditions where the A and B join values are null.

This approach can become clunky, but depending on the requirement, can also be easily implemented.

**Parent topic:** [About worksheets from searches](../../pages/complex_searches/about_query_on_query.html)

