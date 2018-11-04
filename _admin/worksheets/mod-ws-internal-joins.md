---
title: [Modify joins between worksheet tables]
keywords: worksheet view join relationship
last_updated: 11/2/2018
summary: "Learn how to change the join type between the tables in a worksheet"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When you create a worksheet, you select a [join rule]({{ site.baseurl }}/admin/worksheets/progressive-joins.html) and an [inclusion rule]({{ site.baseurl }}/admin/worksheets/about-inclusion-rule.html). These two rules work together to define how the tables that make up the worksheet are joined, and how those joins behave when searching on the worksheet.

Beginning in ThoughtSpot version 5.0, you can now define different types of joins for each join between tables in a worksheet. Be default, each of these individual table joins inherits its type from the worksheet join rule. But you can override this at the individual join level.

You must have either the **Can administer ThoughtSpot** privilege or the **Can manage data** privilege to modify joins within worksheets.

To modify the join types within a worksheet:

1. To find your worksheet, click **Data** in the top menu, and choose **Worksheets**.
2. Click on the name of your worksheet.
3. Click **Schema**. You will see the list showing existing joins within the worksheet.
4. To view the joins within the worksheet, make sure **Joins within worksheets** is chosen.

   ![]({{ site.baseurl }}/images/worksheet-join-chooser.png "Joins within a worksheet")

** Content needs to be replaced below this mark **










5. Click the **+ Add Join** button on the upper right side of the screen.

   ![]({{ site.baseurl }}/images/ws-add-join.png "Add join")

6. Use the **Map source to destination** dialog to choose the destination table, view, or worksheet you want to join to.

   ![]({{ site.baseurl }}/images/add-ws-join.png "Select destination table")

7. Choose the columns you want to join on from the worksheet (source) and destination data source. Click **Next**.

   ![]({{ site.baseurl }}/images/add-ws-join-select-cols.png "Select columns to join on")

8. Give your join a name and description and click **ADD JOIN**.

9.  Repeat these steps until all the joins you want to make have been created.

After creating the join, you may change its name and description by clicking the edit icon. If you want to change the data source or column being joined, you'll need to delete the join and create a new one.

## Related Information

-   [Inclusion rule]({{ site.baseurl }}/admin/worksheets/about-inclusion-rule.html)
