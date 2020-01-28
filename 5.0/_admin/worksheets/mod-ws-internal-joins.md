---
title: [Modify joins within a worksheet]
keywords: worksheet view join relationship
last_updated: 11/2/2018
summary: "Learn how to change the join type between the tables within a worksheet"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When you create a worksheet, you select a [join rule]({{ site.baseurl }}/admin/worksheets/progressive-joins.html). The join rule works together with the joins defined within the worksheet determine how the tables that make up the worksheet are joined, and how those joins behave when searching on the worksheet.

Beginning in ThoughtSpot version 5.0, you aren't limited to just one join rule for the entire worksheet. You can define different types of joins for each join between tables in a worksheet. Be default, each of these individual table joins uses an inner join. But you can override this at the individual join level.

You must have either the **Can administer ThoughtSpot** privilege or the **Can manage data** privilege to modify joins within worksheets.

To modify the join types within a worksheet:

1. To find your worksheet, click **Data** in the top menu, and choose **Worksheets**.

2. Click on the name of your worksheet.

3. Click **Schema**. You will see the list showing existing joins within the worksheet. The joins shown here include all the joins between the underlying tables, whether [created using TQL]({{ site.baseurl }}/admin/loading/constraints.html) or [in the browser]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html).

   If you don't see the joins within the worksheet, make sure **Joins within worksheets** is chosen.

   ![]({{ site.baseurl }}/images/worksheet-join-chooser.png "Joins within a worksheet")

4. Find the join you want to modify and click the **Edit** icon. Note that the fact table is always the left table, and it is shown on the left side.

   ![]({{ site.baseurl }}/images/ws-join-edit-icon.png "Edit worksheet join")

5. Select the join type to use for this relationship in the worksheet and click **Save**.

   ![]({{ site.baseurl }}/images/worksheet-internal-join-type.png "Select join type")

Now these two tables will be joined using the type you selected, in the context of this worksheet.

## Related Information

-   [Join rule]({{ site.baseurl }}/admin/worksheets/progressive-joins.html)
-   [Create joins using TQL]({{ site.baseurl }}/admin/loading/constraints.html)
-   [Create join relationships in the browser]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html)
