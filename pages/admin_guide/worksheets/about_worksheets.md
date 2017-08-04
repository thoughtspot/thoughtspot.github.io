---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Simplify searching with worksheets

After modeling the data, create worksheets to make searching easier. A worksheet groups multiple related tables together in a logical way.

Worksheets are flat tables created by joining columns from a set of one or more tables or imported datasets. You might use a worksheet for these reasons:

-   To pre-join multiple tables together.
-   To give a user or group access to only part of the underlying data.
-   To include a derived column using a formula.
-   To rename columns to make the data easier to search.
-   To build in a specific filter or aggregation.

Users are often unfamiliar with tables and how they are related to one another. For example, a sales executive might need to search for information about retail sales. The required data could be contained in several tables \(sales, customers, products, stores, etc.\), with foreign key relationships between them. An administrator who is familiar with the data model can create a retail sales worksheet, that combines all of the related fact and dimension tables into a single, easy-to-use view, and share it with the sales executive. This provides access to the data without requiring an understanding of how it is structured.

You will typically create one worksheet for each set of fact and dimension tables. For example, you may have a sales fact table and an inventory fact table. Each of these fact tables shares common dimensions like date, region, and store. In this scenario, you would create two worksheets: sales and inventory. The following diagram depicts the workflow for creating the sales worksheet.

![](../../images/workflow_create_worksheet.png)

The process for creating a worksheet is:

1.  Decide which tables to use for the worksheet.
2.  [Create a new worksheet](worksheet_create.html#).
3.  [Add sources \(tables\) to the worksheet](worksheet_add_tables.html#).
4.  Choose the [inclusion rule](about_inclusion_rule.html#) to apply.
5.  Choose the [worksheet join rule](progressive_joins.html#).
6.  Select the columns to include.
7.  [Create formulas](create_formula.html#), if needed.
8.  Save the worksheet.
9.  [Share the worksheet with groups or users](../data_security/share_worksheets.html#).

    An alternative way to create a worksheet is to do a search and save it as a worksheet. See the ThoughtSpot User Guide for details on how to do this.


