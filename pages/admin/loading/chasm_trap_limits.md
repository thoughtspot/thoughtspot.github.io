---
title: [Chasm trap limitations]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
If your database schema contains any chasm traps, you may encounter these limitations.

## Operations that produce an error for chasm traps

The following limitations on chasm trap schemas will produce a red bar error in the ThoughtSpot application:

-   **Show underlying data** does not work for chasm trap searches, whether the search is on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-   When using the ThoughtSpot APIs, you cannot pass filter values via the URL if the relevant searches occur on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-   [Legacy Row Level Security](../data_security/about_legacy_row_security.html#) does not work with chasm trap schemas. The newer [Rule-Based Row Level Security](../data_security/new_row_level_security.html#) must be used.

## Behavior that is different for chasm traps

The following behavior is different for chasm traps than for schemas that do not contain a chasm trap:

-   There are no headlines (single facts based on the data) shown when a search contains a worksheet containing a chasm trap or base tables that are related over a chasm trap.
-   Join information in **What am I Looking At?** does not appear for searches on a worksheet containing a chasm trap or on base tables that are related over a chasm trap.
-   There are cases when attempting to configure certain charts on chasm trap worksheets or tables will not work. If this happens, you will see the error **Your search needs to have unique y-axis values for each series of data shown on the x-axis**. The workaround is to remove all columns from the search, except for those used in your chart.

## Workarounds

In some cases, there is a workaround of saving an answer as a worksheet (Aggregated Worksheet). See the ThoughtSpot User Guide for details on how to do this. If you save a chasm trap search as a worksheet, it becomes a materialized view of the answer. Effectively, it is then just a regular table (no chasm trap). As such, most of the issues above will not affect searches on the saved worksheet.

**Parent topic:** [Plan the schema](../../admin/loading/plan_schema.html)
