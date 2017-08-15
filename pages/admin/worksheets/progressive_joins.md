---
title: [ How the worksheet join rule works]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Use the worksheet join rule to specify when to apply joins when a search is done on a worksheet. You can either apply joins progressively, as each search term is added (recommended), or apply all joins to every search.

Often, a worksheet includes several dimension tables and a fact table. With progressive joins, if your search only includes terms from the fact table, you'll see all of the rows that satisfy your search. But as you add terms from dimension tables, the total number of rows shown may be reduced, as the joins to each dimension table are applied.

It works like this:

-   If you choose **Apply joins progressively (recommended for most cases)**, joins are only applied for tables whose columns are included in the search.
-   If you choose **Apply all joins**, all possible joins are applied, regardless of which tables are included in the search.

When using **Apply joins progressively**, the number of rows in a search using the worksheet depends on which tables are part of the search. The worksheet acts like a materialized view. This means that it contains the results of a defined query in the form of a table. So if a particular dimension table is left out of the search, its joins are not applied.

-   **[About the worksheet join rule with Rule-Based Row Level Security](../../admin/worksheets/joins_and_RLS_rule_based.html)**  
When working with worksheets and row level security, you need to understand how joins are applied. This is especially important if your schema includes any chasm traps.
-   **[About the worksheet join rule with Legacy Row Level Security](../../admin/worksheets/joins_and_row_level_security.html)**  
When working with worksheets and Legacy Row Level Security, you need to understand how joins are applied. This section gives some examples to explain the interaction between these two concepts.
-   **[About aggregated worksheet and table joins](../../admin/poc_features/about_aggregated_ws_and_table_joins.html)**  
You have the ability to join an aggregated worksheet with a table.

**Parent topic:** [Create a new worksheet](../../admin/worksheets/worksheet_create.html)
