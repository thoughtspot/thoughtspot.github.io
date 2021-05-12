---
title: [Delete a table from a Snowflake connection]
last_updated: 8/11/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Whenever you try to remove a table in a connection, ThoughtSpot checks for dependencies and shows a list of dependent objects. You can click the listed objects to delete them or remove the dependency. Then you can remove the table.

To delete a table from a Snowflake connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Click the name of the connection that contains the table you want to delete.

4. Find the table you want to delete in the list, and check the box next to its name.

5. Click **Delete**, and then click **Delete** again to confirm.

If you attempt to delete a table with dependent objects, the operation is blocked. A *Cannot delete* window appears, with a list of links to dependent objects. See [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-delete-table-dependencies.html)

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-connection-reference.html) for details of connection parameters.
