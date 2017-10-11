---
title: [Chasm traps]
tags: [Modeling_Mult_Join_Path]
keywords: "chasm trap,many-to-one,joins"
last_updated: tbd
summary: "A chasm trap occurs when two many-to-one joins converge on a single table."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
In a complex schema, you may have a fact table with no relationship to another fact table, except that each contains a foreign key to a shared dimension table. This is known as a chasm trap, and ThoughtSpot can handle it!

## Understand how chasm traps occur

A chasm trap in a data schema can introduce problems of over counting if you join the two fact tables through their shared dimension table. This diagram shows a typical complex schema with several tables that are related over a chasm trap:

 ![]({{ site.baseurl }}/images/chasm-trap_complex.png "Complex schema with chasm traps")

Examples of use cases where a chasm trap could occur are:

-   Attribution analysis comparing campaign data with purchase data, where all they have in common is that both contain a customer identifier which is a foreign key to a customer dimension table.
-   Cost of sales analysis when the wholesale orders data is only related to the retail sales data through a shared products dimension table.

In many databases, joining tables across a chasm trap creates a Cartesian product, such that each row from the first fact table is joined to each row from the second table. This produces over counting when computing counts and aggregates. But ThoughtSpot protects you from this kind of over counting.

There are still just a few things to look out for when using a schema that contains chasm traps:

-   The tables need to be joined to the dimension table via an equi-join (i.e. a primary key/foreign key relationship). They cannot be joined using a range of values.
-   Review the column setting called [Attribution Dimension](/admin/data-modeling/attributable-dimension.html#). You may need to change this setting if some of the columns in the shared dimension table should not be used for attribution when combining fact tables.
-   Tables that will be joined across a chasm trap do not need to be co-sharded. They will be joined appropriately automatically in the most efficient way.

## Chasm trap limitations

If your database schema contains any chasm traps, you may encounter these limitations.

### Operations

The following limitations on chasm trap schemas will produce a red bar error in the ThoughtSpot application:

-   **Show underlying data** does not work for chasm trap searches, whether the search is on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-   When using the ThoughtSpot APIs, you cannot pass filter values via the URL if the relevant searches occur on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-  Use[Rule-Based Row Level Security](/admin/data-security/new_row-level-security.html#).

### Behavior

The following behavior is different for chasm traps than for schemas that do not contain a chasm trap:

-   There are no headlines (single facts based on the data) shown when a search contains a worksheet containing a chasm trap or base tables that are related over a chasm trap.
-   Join information in **What am I Looking At?** does not appear for searches on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-   There are cases when attempting to configure certain charts on chasm trap worksheets or tables will not work. If this happens, you will see the error **Your search needs to have unique y-axis values for each series of data shown on the x-axis**. The workaround is to remove all columns from the search, except for those used in your chart.

###  Workarounds

In some cases, there is a workaround of saving an answer as a worksheet (Aggregated Worksheet). See the ThoughtSpot User Guide for details on how to do this. If you save a chasm trap search as a worksheet, it becomes a materialized view of the answer. Effectively, it is then just a regular table (no chasm trap). As such, most of the issues above will not affect searches on the saved worksheet.
