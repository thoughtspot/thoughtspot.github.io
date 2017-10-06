---
title: [Simplify search with worksheets]
tags:
keywords: tbd
last_updated: tbd
summary: "Worksheets are flat tables created by joining columns from a set of one or more tables or imported datasets. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After modeling the data, create worksheets to make searching easier. For example, a sales executive might need to search for information about retail sales. The required data could be contained in several tables (sales, customers, products, stores, etc.), with foreign key relationships between them. An administrator who is familiar with the data model can create a retail sales worksheet, that combines all of the related fact and dimension tables into a single, easy-to-use view, and share it with the sales executive. This provides access to the data without requiring an understanding of how it is structured.

## Guidelines for worksheets

Users are often unfamiliar with tables and how they are related to one another. A worksheet groups multiple related tables together in a logical way.  You might use a worksheet for these reasons:

-   To pre-join multiple tables together.
-   To give a user or group access to only part of the underlying data.
-   To include a derived column using a formula.
-   To rename columns to make the data easier to search.
-   To build in a specific filter or aggregation.


Typically, you create one worksheet for each set of fact and dimension tables. For example, you may have a sales fact table and an inventory fact table. Each of these fact tables shares common dimensions like date, region, and store. In this scenario, you would create two worksheets: sales and inventory. The following diagram depicts the workflow for creating the sales worksheet.

![]({{ site.baseurl }}/images/workflow_create_worksheet.png)

The process for creating a worksheet is:

1.  Decide which tables to use for the worksheet.
2.  Create a new worksheet.
3.  Add sources (tables) to the worksheet.
4.  Choose the [inclusion rule](about_inclusion_rule.html#) to apply.
5.  Choose the [worksheet join rule](progressive_joins.html#).
6.  Select the columns to include.
7.  Optionally [create formulas](create_formula.html#).
8.  Save the worksheet.
9.  [Share the worksheet with groups or users](../data_security/share_worksheets.html#).

An alternative way to create a worksheet is to do a search and save it as a worksheet. See the [ThoughtSpot User Guide](/end-user/end_user_introduction/introduction.html#) for details on how to do this.

## Create a worksheet

Create a worksheet to make the data easy for users to search. This process includes adding a new worksheet, after which you will choose the data sources to include in it.

To create a new worksheet:

1. Click on **DATA**, on the top navigation bar.

     ![]({{ site.baseurl }}/images/data_icon.png "Data")

2. Click the **Actions** icon from the upper right side of the screen, and select **Create worksheet**.

    ![]({{ site.baseurl }}/images/worksheet_create_icon.png)


## Add sources and columns to a worksheet

After creating a worksheet, you need to add the sources that contain the data. Sources is another name for tables. The sources you choose are typically related to one another by foreign keys.

To add the sources to the worksheet:

1.  Click on the **Choose Sources** link.

    ![]({{ site.baseurl }}/images/worksheet_add_sources_link.png)

2. Check the box next to each of the sources you want to include in the worksheet.

    Note that the list of sources only shows the tables on which you have view privileges.

    ![]({{ site.baseurl }}/images/worksheet_choose_sources_from_2.5.png)

3. If you want to see what the data inside the sources looks like, click **Explore all data**.
4. Choose the [inclusion rule](about_inclusion_rule.html#).
5. Choose the [worksheet join rule](progressive_joins.html#).
6. Click **Done** to save your changes.
7. Expand the table names under **Columns** to select the columns to add to the worksheet.

    1. To add all of the columns from a table, click on the table name and click **+ Add Columns**.
    2. To add a single column, double click on its name.
    3. To add multiple columns, Ctl+click on each column you want to add and click **+ Add Columns**.
    Note that once you add a column, non-related tables (i.e. those without a primary/foreign key relationship) become hidden. If you are working with two tables that should be related, but are not, you can [add a relationship between them](../data_modeling/about_relationships.html#).

8. Click on the worksheet title to name it, and then **Save** it.
9. Click on each column name to give it a more user-friendly name for searching. You can tab through the list of columns to rename them quickly.
10.  If you want to add a prefix to the name of several columns, select them, click the **Add Prefix** button, and type in the prefix.

     ![]({{ site.baseurl }}/images/worksheet_add_col_prefix.png "Add a prefix to column names")

11. Click **Actions** and select **Save**.

    ![]({{ site.baseurl }}/images/action_save_worksheet.png "Save a worksheet")

12.  [Share your worksheet](../data_security/share_worksheets.html#), if you want other people to be able to use it.

## Where to go next

-   **[How the inclusion rule works](/admin/worksheets/about_inclusion_rule.html)**  
Use the inclusion rule to specify which data to include in a worksheet where two or more tables are joined. If you are familiar with SQL, you might think of it as a JOIN condition.
-   **[How the worksheet join rule works](/admin/worksheets/progressive_joins.html)**  
Use the worksheet join rule to specify when to apply joins when a search is done on a worksheet. You can either apply joins progressively, as each search term is added (recommended), or apply all joins to every search.
