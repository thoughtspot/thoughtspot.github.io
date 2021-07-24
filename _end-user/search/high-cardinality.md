---
title: [Charts that display a very large number of data values]
last_updated: 7/23/2021
summary: "ThoughtSpot's charts can support many data values, and you can easily understand how much of the data your chart displays."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

<!--
## High cardinality tables

ThoughtSpot tables are no longer limited to 1000 rows. Now, you can see exactly how many rows your table displays. The new default maximum number of rows is 20,000. You can configure this maximum, up to 35,000. To configure the maximum number of rows on a table, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

Here, the table has 2318 rows:

![High cardinality table example]({{ site.baseurl }}/images/cardinality-table-rows.png "High cardinality table example")
-->

## High cardinality charts

ThoughtSpot charts contain several new features. You are no longer limited to 1000 data points. When your chart has a very large number of data values, you see a horizontal scroll bar at the bottom. The new default maximum number of data points is 20,000. You can configure this maximum, up to 35,000. To configure the maximum number of data points on a chart, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). 

![High cardinality chart with scroll bar]({{ site.baseurl }}/images/cardinality-chart-scroll-bar.png "High cardinality chart with scroll bar")

If you want to see the whole chart at one time, you can select the **fit to screen** option. To **fit to screen**, click the **edit chart configuration** ![]({{ site.baseurl }}/images/icon-gear-10px.png){: .inline} icon, and select the **Settings** menu. Select **fit to screen**.

![High cardinality chart example - fit to screen]({{ site.baseurl }}/images/cardinality-chart-options.png "High cardinality chart example - fit to screen")

When you **fit to screen**, you see the whole chart. You can easily return to the zoomed-in view, by unselecting the **fit to screen** option.

Note that when you enable **fit to screen**, the **all labels** option is grayed out. You cannot turn on all labels when you **fit to screen**, unless the visualization does not have enough data points to require a scroll bar, and thus defaults to **fit to screen** mode.

You can now have more than 40 legend items in your chart. You can [slice with color]({{ site.baseurl }}/end-user/search/drag-and-drop.html#slice-with-color) using a column that has up to 250 values.

If you attempt to **slice with color** using a column that has more than 250 values, ThoughtSpot does not display the chart. You receive this error message, telling you to filter to reduce the number of values:

![Filter to reduce number of values]({{ site.baseurl }}/images/cardinality-filter.png "Filter to reduce number of values")

ThoughtSpot also warns you if your search contains too many data points, so that you can filter your search.
