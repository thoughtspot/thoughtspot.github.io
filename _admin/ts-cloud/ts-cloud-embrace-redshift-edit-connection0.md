---
title: [Edit a Redshift connection]
last_updated: 8/11/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can edit a Redshift connection to add tables and columns.

To edit a connection, follow these steps:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to edit.

   ![]({{ site.baseurl }}/images/select-connection.png "select Connection")

4. Click **Edit connection** at the upper-right-hand side of the page.

   ![Edit connection]({{ site.baseurl }}/images/edit-connection.png "Edit connection")

5. On the Choose connection type page, change the connection name or description (if needed), and then click **Continue**.  

6. On the Redshift connection details page, make any changes needed, and then click **Continue**.

7. Expand the database table drop-down menu, and select the tables and columns you want to add.

    ![Select tables and columns]({{ site.baseurl }}/images/redshift-edittables.png "Select tables and columns")

8. Click **Update**, and then click **Confirm** to save the updated connection detail.

To remove a table from a connection, delete it from the connection details page. For more information, see:
- [Delete a table]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table.html)
- [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-delete-table-dependencies.html)

To change the mapping of tables and columns, see [Remap an Amazon Redshift connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-remap-connection.html)

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift-connection-reference.html) for details of connection parameters.
