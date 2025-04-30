---
title: [Delete a relationship]
last_updated: 11/05/2021
summary: "You can delete a relationship between tables through the ThoughtSpot application."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

You must have either the [**Can administrator ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to delete a relationship. If you're not an administrator, you also need edit permissions on the table, view, or worksheet.

## To delete a relationship from the Web interface:

1. Click **Data** on the top navigation bar.

2. Find the origin table, worksheet or view of the join you want to delete through browsing, Search, or selecting the appropriate Tag(s).

3. Click the name of the data source from which you want to remove the relationship.

4. Click **Joins**. You will see the list showing existing joins. If you want to delete an external join from a worksheet, you must click **Joins within this worksheet** and choose **Joins from this worksheet**.

     ![]({{ site.baseurl }}/images/table-delete-join.png "Delete a relationship")

5. Click the **Delete icon** to the right of the join name. The **Confirm delete** window appears.

6. Click **Delete**

{% include note.html content="If existing answers or Liveboards depend on the join you are deleting, you will see the **Cannot delete** window listing all dependents of the join. You must delete all dependents before you can delete the join." %}

  ![]({{ site.baseurl }}/images/cannot-delete-join-dialog.png "Unable to delete join due to dependents")

## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
