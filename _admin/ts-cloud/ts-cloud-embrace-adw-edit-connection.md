---
title: [Edit an ADW connection for ThoughtSpot Cloud]
last_updated: 1/20/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can edit a ADW connection to add tables and columns.

To edit a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to edit.

   ![]({{ site.baseurl }}/images/select-connection.png "select Connection")

4. Click **Edit connection** at the upper-right-hand side of the page.

   ![Edit connection]({{ site.baseurl }}/images/adw-editconnection.png "Edit connection")

5. On the Choose connection type page, change the connection name or description (if needed), and then click **Continue**.  

6. On the ADW connection details page, make any changes needed, and then click **Continue**.

7. Expand the database table drop-down menu, and select the tables and columns you want to add.

    ![Select tables and columns]({{ site.baseurl }}/images/redshift-edittables.png "Select tables and columns")

8. Click **Update**, and then click **Confirm** to save the updated connection detail.

To remove a table from a connection, delete it from the connection details page. For more information, see: [Delete a ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-delete-connection.html).

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-connection-reference.html) for details of connection parameters.

We also recommend that you review [Best Practices for ADW connections]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-best-practices.html)
