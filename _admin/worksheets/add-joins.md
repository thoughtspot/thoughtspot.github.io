---
title: [Join a worksheet to another data source]

last_updated: 7/27/2021
summary: "Learn how to define joins between a worksheet and a table or view."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Joining a worksheet to a table or view creates a relationship that allows them to be searched together. Choose a column to join on that both data sources contain (e.g. employee ID or product key). This process creates a [generic join]({{ site.baseurl }}/admin/loading/constraints.html) between the worksheet and the  table or view on the column you specify. 

See this matrix for information about which joins you can create, and what permissions these joins require.

{% include content/joins-matrix.md %}

{% include note.html content="Defining a generic relationship in the UI rather than using a primary key/ foreign key join through TQL has no impact on performance. However, when creating relationships in the UI, you must ensure that you create it in the right direction: many to one. To create many-to-many joins, or to create joins using >, <, >=, or <=, use TQL." %}

You must have either the **Can administer ThoughtSpot** privilege or the **Can manage data** privilege to create a join relationship. If you're not an administrator, you also need edit permissions on the table, view, or worksheet.

When creating a join between the columns in two data sources, the columns being linked must have the same data type, with the same meaning. That is, they must represent the same data.

To create a relationship through the Web interface:

1. To find your worksheet, click **Data** in the top menu, and choose **Worksheets**.

2. Click the name of your worksheet.

3. Click the **Joins** tab. The list showing existing joins within the worksheet appears.

4. To view the joins between the worksheet and other data sources, click **Joins within worksheets** and choose **Joins between worksheets**.

   ![]({{ site.baseurl }}/images/joins-within-worksheet.png "Add join between worksheet")

5. Click the **+ Add Join** button on the upper right side of the screen.

   ![]({{ site.baseurl }}/images/worksheet-add-join.png "Add join")

6. In the **Add Join** dialog, choose the destination table or view for the other end of the join.

   ![]({{ site.baseurl }}/images/worksheet-join-dialog.png "Select destination table")

7. Choose the matching columns under each table. These columns must use the same data type. [Optional] You can select multiple columns for the same join. To add another pair of matching columns to the join definition, click **+ Add columns**.

8. Click **Create join**.

9. Repeat these steps until all the joins you want to make have been created.

After creating the join, you may change its name and description by clicking the edit icon. If you want to change the data source or column being joined, you must delete the join and create a new one.

## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
