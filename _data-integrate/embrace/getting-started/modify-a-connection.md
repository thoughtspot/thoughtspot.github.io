---
title: [Modify a connection]
last_updated:
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can modify a connection in the following ways:
- Edit a connection: to add or remove tables and columns
- Remap a connection: to map a table or column to a different table or column
- Delete a table
- Delete a connection

## Editing a connection

You can edit a connection to add tables and columns.

To edit a connection:

1. Click **Data** in the top navigation bar.
2. Click the **Connections** tab at the top of the page.
3. Select the connection type of interest on Connections list page.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click **Edit Connection** at the upper-right-hand side of the page.

   ![]({{ site.baseurl }}/images/edit-connection.png "edit Sources tab")

5. Expand the database table drop-down menu, and select the tables and columns you want to add.

   ![]({{ site.baseurl }}/images/connection-update.png "Edit connection dialog box")

6. Click **Update** to reflect the connection details.

To remove a table from a connection, delete it from the connection details page. For more information, see [Delete a table]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html#delete-a-table).

## Remapping a connection

Modify the connection parameters by editing the source mapping<code> yaml </code>file that was created when you adding the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a connection:

1. Click **Data** in the top navigation bar.
2. Click the **Connections** tab at the top of the page.
3. Select the connection type of interest on Connections list page.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click ellipses icon **...** and **Remapping** on the upper-right-hand side of the page.

    ![]({{ site.baseurl }}/images/embrace-remapping.png "remap a connection")

5. Click **Download** to download the source mapping file.

    ![]({{ site.baseurl }}/images/embrace-remapping-download.png "remap connection")

6. Edit and update the file as required.

    ![]({{ site.baseurl }}/images/embrace-yaml.png "Edit yaml")

7. Finally, upload the mapping file to reflect the new mapping in the existing connection.

## Deleting a table
ThoughtSpot checks for dependencies whenever you try to remove a table in a connection. A list of dependent objects is shown, and you can click them to delete them or remove the dependency. Then you’ll be able to remove the table.

To delete a table:
1. Click **Data** in the top navigation bar.
2. Click the **Connections** tab at the top of the page.
3. Select the connection type of interest.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Find the table you want to remove in the list, and check the box next to its name.
5. Click **Delete**.

    ![]({{ site.baseurl }}/images/delete-table.png "delete a connection table")

    {% include note.html content="If you attempt to delete a table with dependent objects, the operation is blocked. A warning appears, with a list of links to dependent objects." %}

6. Click the link for each object to modify or delete it.

   When all dependencies are removed, you can delete the table.

   ![]({{ site.baseurl }}/images/delete-warning.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, pinboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

## Deleting a connection
A connection can be used in multiple data sources or visualizations. Because of this, you must delete all of the sources and tasks that use that connection, before you can delete the connection.

To delete a connection:
1. Click **Data** in the top navigation bar.
2. Click the **Connections** tab at the top of the page.
3. Check the box next to the connection you want to delete.
4. Click **Delete**.

   ![]({{ site.baseurl }}/images/delete-a-connection.png "delete a connection type")

   If you attempt to delete a connection with dependent objects, the operation is blocked, and a "Cannot delete" warning appears with a list of dependent objects with links.

   ![]({{ site.baseurl }}/images/connection-delete-warning.png "warning connection type")

5. If the "Cannot delete" warning appears, click the link for each object to delete it, and then click **Ok**. Otherwise, go to the next step.

6. When all its dependencies are removed, delete the connection by clicking **Delete**.
    ![]({{ site.baseurl }}/images/final-delete.png "delete connection type")
