---
title: [High cardinality charts and tables]
last_updated: 6/10/2020
summary: "ThoughtSpot's charts and tables can support many data values, and you can easily understand how much of the data your chart or table displays."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## High cardinality for tables

ThoughtSpot tables are no longer limited to 1000 rows. Now, you can see exactly how many rows your table displays. Here, the table has 2318 rows:

![High cardinality table example]({{ site.baseurl }}/images/cardinality-table-rows.png "High cardinality table example")

## High cardinality for charts

ThoughtSpot charts contain several new features. When your chart has many data values, you see a horizontal scroll bar at the bottom. If you want to see the whole chart at one time, you can select the **fit to screen** button at the top right corner.

![High cardinality chart example]({{ site.baseurl }}/images/cardinality-chart-options.png "High cardinality chart example")

When you **fit to screen**, you see the whole chart. You can easily return to the zoomed-in view, by clicking the **enable scrollbar** button.

![Fit to screen or enable scrollbar]({{ site.baseurl }}/images/cardinality-fit-to-screen.png "Fit to screen or enable scrollbar")

If you attempt to [slice with color]({{ site.baseurl }}/end-user/search/drag-and-drop.html#slice-with-color) using a column that has more than the recommended number of values, ThoughtSpot tells you to filter to reduce the number of values, or allows you to **render all**, if the number of values is under 250.

![Render all, or filter to reduce number of values]({{ site.baseurl }}/images/cardinality-render-all.png "Render all or filter to reduce number of values")

If you attempt to **slice with color** using a column that has too many values, ThoughtSpot tells you to filter to reduce the number of values:

![Filter to reduce number of values]({{ site.baseurl }}/images/cardinality-filter.png "Filter to reduce number of values")

ThoughtSpot also warns you if your search contains too many data points, so that you can filter your search.
