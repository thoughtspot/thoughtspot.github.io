---
title: [Modify a connection]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can modify a connection and its tables after you created a new Embrace database connection.

## Edit a connection

You can modify the loaded tables by adding or removing columns that have been selected during creating a new connection. This makes it easier to include new source columns in an existing database connection. In addition, you can also add more tables while editing a database connection.

To edit a connection:

1. Log in to ThoughtSpot from a browser.
2. Click **Data** on the top navigation bar.
3. Click the **Connections** tab at the top of the page.
4. Select the connection type of interest on Connections list page.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

5. Click **Edit connection** on the upper right hand side of the page.

    ![]({{ site.baseurl }}/images/edit-connection.png "edit Sources tab")

6. Expand the database table dropdown, and choose the tables and select the columns you wish to add or remove.

7. Click **Update** to reflect the connection details.

     ![]({{ site.baseurl }}/images/connection-update.png "Edit connection dialog box")

## Edit a table
ThoughtSpot checks for dependencies whenever you try to remove a table in a connection. A list of dependent objects is shown, and you can click them to delete them or remove the dependency. Then you’ll be able to remove the table or worksheet.

To delete a table:
1. Log in to ThoughtSpot from a browser.
2. Click **Data** on the top navigation bar.
3. Click the **Connections** tab at the top of the page.
4. Select the connection type of interest on Connections list page.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

5. Find the table you want to remove in the list, and check the box next to its name.
6. Click the **Delete** icon.

    ![]({{ site.baseurl }}/images/delete-table.png "delete a connection table")

    {% include note.html content="If you are attempting to delete a table with dependent objects, the operation will be blocked. You will see a warning, with a list of dependent objects with links." %}

7. Click the link for an object to modify or delete it.

   When all its dependencies are removed, you will be able to delete the table.

   ![]({{ site.baseurl }}/images/delete-warning.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, pinboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

## Delete a connection
A connection is not tied to a task, and can therefore be called in multiple data visualizations. So in order to delete a connection, you must first delete all of the sources and tasks that use that connection. Once the connection is not used in data sources, you will be able to delete it.

To delete a connection:
1. Log in to ThoughtSpot from a browser.
2. Click **Data** on the top navigation bar.
3. Click the **Connections** tab at the top of the page.
4. Find the connection you want to remove in the list, and check the box next to its name.
5. Click the **Delete** icon.

   ![]({{ site.baseurl }}/images/delete-a-connection.png "delete a connection type")

   {% include note.html content="If you are attempting to delete a connection with dependent objects, the operation will be blocked. You will see a warning, with a list of dependent objects with links." %}
6. Click the link for an object to modify or delete it.

    ![]({{ site.baseurl }}/images/connection-delete-warning.png "warning connection type")

7. When all its dependencies are removed, you will be able to delete the connection. Click **Delete** to confirm.
    ![]({{ site.baseurl }}/images/final-delete.png "delete connection type")
