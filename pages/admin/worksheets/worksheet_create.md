---
title: [Create a new worksheet]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Create a worksheet to make the data easy for users to search. This process includes adding a new worksheet, after which you will choose the data sources to include in it.

To create a new worksheet:

1.   Click on **Data**, on the top navigation bar.

     ![](../../shared/conrefs/../../images/data_icon.png "Data")

2.   Click the **Actions** icon from the upper right side of the screen, and select **Create worksheet**.

    ![](../../shared/conrefs/../../images/worksheet_create_icon.png)


-   **[Add sources and columns to a worksheet](../../admin/worksheets/worksheet_add_tables.html)**  
After creating a worksheet, you need to add the sources that contain the data. Sources is another name for tables. The sources you choose are typically related to one another by foreign keys.
-   **[How the inclusion rule works](../../admin/worksheets/about_inclusion_rule.html)**  
Use the inclusion rule to specify which data to include in a worksheet where two or more tables are joined. If you are familiar with SQL, you might think of it as a JOIN condition.
-   **[How the worksheet join rule works](../../admin/worksheets/progressive_joins.html)**  
Use the worksheet join rule to specify when to apply joins when a search is done on a worksheet. You can either apply joins progressively, as each search term is added (recommended), or apply all joins to every search.
-   **[About formulas in worksheets](../../admin/worksheets/about_formulas.html)**  
You can define formulas and use them to create derived columns in worksheets. You create formulas by combining standard functions and operators, column names, and constant values.

**Parent topic:** [Simplify searching with worksheets](../../admin/worksheets/about_worksheets.html)
