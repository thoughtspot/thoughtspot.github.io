---
title: [Add sources and columns to a worksheet]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
After creating a worksheet, you need to add the sources that contain the data. Sources is another name for tables. The sources you choose are typically related to one another by foreign keys.

To add the sources to the worksheet:

1.  Click on the **Choose Sources** link.

    ![](../../shared/conrefs/../../images/worksheet_add_sources_link.png)

2.   Check the box next to each of the sources you want to include in the worksheet.

    Note that the list of sources only shows the tables on which you have view privileges.

    ![](../../images/worksheet_choose_sources_from_2.5.png)

3.   If you want to see what the data inside the sources looks like, click **Explore all data**.
4.   Choose the [inclusion rule](about_inclusion_rule.html#).
5.   Choose the [worksheet join rule](progressive_joins.html#).
6.   Click **Done** to save your changes.
7.   Expand the table names under **Columns** to select the columns to add to the worksheet.

    1.   To add all of the columns from a table, click on the table name and click **+ Add Columns**.
    2.   To add a single column, double click on its name.
    3.   To add multiple columns, Ctl+click on each column you want to add and click **+ Add Columns**.
    Note that once you add a column, non-related tables \(i.e. those without a primary/foreign key relationship\) become hidden. If you are working with two tables that should be related, but are not, you can [add a relationship between them](../data_modeling/about_relationships.html#).

8.   Click on the worksheet title to name it, and then **Save** it.
9.   Click on each column name to give it a more user-friendly name for searching. You can tab through the list of columns to rename them quickly.
10.  If you want to add a prefix to the name of several columns, select them, click the **Add Prefix** button, and type in the prefix.

     ![](../../images/worksheet_add_col_prefix.png "Add a prefix to column names")

11. Click **Actions** and select **Save**.

    ![](../../shared/conrefs/../../images/action_save_worksheet.png "Save a worksheet")

12.  [Share your worksheet](../data_security/share_worksheets.html#), if you want other people to be able to use it.

**Parent topic:** [Create a new worksheet](../../admin/worksheets/worksheet_create.html)
