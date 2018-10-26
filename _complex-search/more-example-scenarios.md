---
title: [View example scenarios]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Here are three common examples of when you would need to use a view.

## Example 1

The first example involves creating a view with a default filter. Say you want to create a view that only shows data for a particular US state. In your search, enter `customer state = texas`. Then click **Actions**, and select **Save as view**. Give your view a name, then click **Save** to create it.

Now you have a view that only contains data that pertains to Texas. You can share this vies with others. Another popular example of this concept includes creating a worksheet with only active employee data.

## Example 2

The second example involves joining two views. Say you want to plot the revenue of the top five states over time. Search for `revenue`, `store state`, and `top 5`. Save this answer a view called `Top 5 states`. Then start another search with the tokens `revenue`, store `state`, and `date`. Save this answer as a view called `Total monthly purchases`.

Now join these two views, so they can be searched together. Navigate to the **DATA** tab and make a relationship between the two views, on the store state column.

To start a new search, select your two views as data sources, selecting the appropriate columns: store `state` from `Top 5 State`s, and `date` and `total sales` from `Total monthly Purchases`. You will only see data for the top five revenue states.

## Example 3

The third example involves creating a search to find customers who bought product A, but did not buy product B. This example can also be done using [conditional formulas]({{ site.baseurl }}/advanced-search/formulas/conditional-sum.html#).

First, you would have to perform searches for total sales by customer for both A and B, and create views for both. Then join these two views back in an outer join looking for conditions where the A and B join values are null.
