---
title: [Delete a relationship]
last_updated: 11/19/2020
summary: "You can delete a relationship between tables through the ThoughtSpot application or TQL."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You must have either the [**Can administer ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to delete a relationship. If you're not an administrator, you also need edit permissions on the table, view, or worksheet.

If you created a relationship (join or link) between tables using the Web interface, you can also delete it from the Web interface. But if the relationship was created using TQL, you must also use TQL to delete it.

[To delete a relationship using TQL]({{ site.baseurl }}/admin/loading/change-schema.html), use an `ALTER TABLE...DROP CONSTRAINT...` or `ALTER TABLE...DROP RELATIONSHIP...` statement.

To delete a relationship from the Web interface:

1. Click **Data** on the top navigation bar.

2. Click the name of the data source you from which you want to remove the relationship.

3. Click **Joins**.

   The list of existing joins appears.

   In a worksheet, you must click **Joins within this worksheet** and choose **Joins from this worksheet**.

4. Find the relationship you want to delete, and click the delete icon.

5.  Repeat these steps until all the joins you want to remove have been deleted.

## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
