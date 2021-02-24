---
title: [Delete a relationship]
last_updated: 2/24/2021
summary: "You can delete a relationship between tables through the ThoughtSpot application or TQL."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You must have either the [**Can administer ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to delete a relationship. If you're not an administrator, you also need edit permissions on the table, view, or worksheet.

If you created a relationship (join or link) between tables using the Web interface, you can also delete it from the Web interface. But if the relationship was created using TQL, you must also use TQL to delete it.

[To delete a relationship using TQL]({{ site.baseurl }}/admin/loading/change-schema.html), use an `ALTER TABLE...DROP CONSTRAINT...` or `ALTER TABLE...DROP RELATIONSHIP...` statement.

{ include content/joins-delete.md %}


## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
