---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Chasm traps

In a complex schema, you may have a fact table with no relationship to another fact table, except that each contains a foreign key to a shared dimension table. This is known as a chasm trap, and ThoughtSpot can handle it!

A chasm trap in a data schema can introduce problems of over counting if you join the two fact tables through their shared dimension table. This diagram shows a typical complex schema with several tables that are related over a chasm trap:

 ![](../../images/chasm_trap_complex.png "Complex schema with chasm traps") 

Examples of use cases where a chasm trap could occur are:

-   Attribution analysis comparing campaign data with purchase data, where all they have in common is that both contain a customer identifier which is a foreign key to a customer dimension table.
-   Cost of sales analysis when the wholesale orders data is only related to the retail sales data through a shared products dimension table.

In many databases, joining tables across a chasm trap creates a Cartesian product, such that each row from the first fact table is joined to each row from the second table. This produces over counting when computing counts and aggregates. But ThoughtSpot protects you from this kind of over counting.

There are still just a few things to look out for when using a schema that contains chasm traps:

-   The tables need to be joined to the dimension table via an equi-join \(i.e. a primary key/foreign key relationship\). They cannot be joined using a range of values.
-   Review the column setting called [Attribution Dimension](../data_modeling/attributable_dimension.html#). You may need to change this setting if some of the columns in the shared dimension table should not be used for attribution when combining fact tables.
-   Tables that will be joined across a chasm trap do not need to be co-sharded. They will be joined appropriately automatically in the most efficient way.

