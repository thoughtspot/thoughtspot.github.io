---
title: [Pivot table]
tags: [limitations]
keywords: tbd
last_updated: tbd
summary: "A pivot table is a chart type."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Creating a pivot table enables exploring alternate visualization of data in a
wide table. The basic idea is that some data is easier to consume when laid out
horizontally, while others, vertically. Pivot tables are a chart time table that
use a drag-and-drop interface.  

 ![]({{ site.baseurl }}/images/pivot_chart_example.png "Pivot table chart type")

Choose **Pivot Table** under Select Chart Type to view your search as a pivot
table. Add rows, measures, and columns to the search bar and restructure your
table by moving these values under **Configure Chart** or by dragging and
dropping them.

 ![]({{ site.baseurl }}/images/pivot_table_rows_measures_columns.png "Chart axes: rows, measures, columns")

 When you pin a pivot table to a pinboard, it will retain your expansion settings.

## Configuring your pivot table

Click a column or row to expand it. Additionally, you can expand or collapse all
by right clicking the arrow on the top left of a cell.

![]({{ site.baseurl }}/images/pivot_table_expand_collapse_all.png "Expand or collapse all option")


You can show **% Row Grand Total** and, **% of Column Grand Total**, or **% of
Grand Total** on pivot tables. Grand  totals aggregate data of the entire pivot
grid. They show values summarized across all available data.

![]({{ site.baseurl }}/images/pivot-grand-total.png)

You only see 100% value when grand total rows is enabled. This is because when
it is disabled, the rows and columns they have no parental total column and the
percentage cannot be calculated. All intermediate total (columns or rows)
display the percentage values calculated with respect to their parent. For each
inner summary (column or row) the parental total values are assumed to be 100%
internally.

To see the total column make sure you also have **Pivot Summaries** checked.

![]({{ site.baseurl }}/images/pivot-summaries.png)

For row headers, you can switch between the default view and a more compact
(tree) layout:

![]({{ site.baseurl }}/images/pivot_table_rows_measures_columns.png)

From the header menu users, change the type of total shown for an aggregated
measure:

![]({{ site.baseurl }}/images/pivot-table-agg-totals.png )


Toggle on the **Heatmap mode** found under **Configuration Options** to add
color coordination to your data.

![]({{ site.baseurl }}/images/pivot_table_heatmap_mode.png "Heatmap mode enabled")


## Pivot table limitations

The pivot table chart type has these limitations:

- Only the first 10,000 data values are used. If you would like to increase this limit, please contact ThoughtSpot Support.
- Pivot table is not available if the dataset contains more than 100,000 rows.
- Cardinality is not configurable.
- Show underlying data menu is unavailable.
- Conditional formatting is not functional.
