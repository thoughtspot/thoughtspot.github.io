---
title: [Delete a table with dependent objects from a Databricks connection]
last_updated: 11/04/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If you attempt to delete a table with dependent objects, the operation is blocked. A *Cannot delete* window appears, with a list of links to dependent objects.

In the *Cannot delete* window, click the link for each object to modify or delete it.

![]({{ site.baseurl }}/images/embrace-delete-table-depend.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, Liveboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

When all dependencies are removed, you can delete the table. See [Delete a table from a Databricks connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks-delete-table.html)
