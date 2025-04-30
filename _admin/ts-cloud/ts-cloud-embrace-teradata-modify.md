---
title: [Modify a Teradata connection]
last_updated: 12/21/2020
summary: Learn how to modify a Teradata connection and its tables.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can modify a Teradata connection in the following ways:
- Edit a connection: to add or remove tables and columns
- Remap a connection: to map a table or column to a different table or column
- Remove a column
- Delete a table
- Delete a connection

## Editing a Teradata connection

You can edit a Teradata connection to add tables and columns.

To edit a Teradata connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Click the name of the connection you want to edit.

4. Click **Edit connection** at the upper-right-hand side of the page.

   ![Edit connection]({{ site.baseurl }}/images/teradata-editconnection.png "Edit connection")

   By default, the Select tables page appears. You have the option, though, to change the connection name and update the connection details, by clicking the appropriate option at the top of the screen, making any changes needed and clicking **Continue** to go to the next page.

   ![]({{ site.baseurl }}/images/edit_connection_btns.png)

6. Expand the database table drop-down menu (if needed), and select the tables and columns you want to add.

   ![Select tables and columns]({{ site.baseurl }}/images/teradata-edittables.png "Select tables and columns")
   <!--![]({{ site.baseurl }}/images/connection-update.png "Edit connection dialog box") -->

7. Click **Update**, and then click **Confirm** to save the updated connection detail.

To remove a table from a connection, you must delete it from the connection details page. For more information, see [Deleting a table]({{ site.baseurl }}/data-integrate/embrace/embrace-teradata-modify.html#deleting-a-table-from-a-Teradata-connection).

## Remapping a Teradata connection

Modify the connection parameters by editing the source mapping <code>yaml</code> file that was created when you added the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a Teradata connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Click the name of the connection you want to remap.

4. Click the More icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Remapping** on the upper-right-hand side of the page.
   ![Remap a connection]({{ site.baseurl }}/images/teradata-remapping.png "Remap a connection")

5. Click **Download** to download the source mapping file.

   !["Download the source mapping file"]({{ site.baseurl }}/images/teradata-downloadyaml.png "Download the source mapping file")

6. Edit the file, as required, and save it.
  <!-- ![Edit the yaml file]({{ site.baseurl }}/images/gbq-yaml.png "Edit the yaml file") -->

7. On the Remapping page, click **Browse your files**, and upload your edited mapping file to update the mapping of your connection.

## Removing a column from a Teradata connection

You can edit a Teradata connection to remove a column.

To remove a column from Teradata connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Click the name of the connection that contains the column you want to remove.

4. Click **Edit connection** at the upper-right-hand side of the page.

5. In the Select tables page, click the Selected tab.

6. Click the name of the table that contains the column you want to remove.

   !["Select table that contains the column"]({{ site.baseurl }}/images/teradata-select-table-for-col-removal.png "Select table that contains the column")

7. In the list of columns at the right, uncheck the column you want to remove.

8. Click **Update**.

   The Update connection message appears, summarizing the changes that will be made to the connection.

9. Confirm your changes, by clicking **Confirm**.   

## Deleting a table from a Teradata connection
ThoughtSpot checks for dependencies whenever you try to remove a table in a connection. ThoughtSpot shows a list of dependent objects, and you can click them to delete them or remove the dependency. Then you can remove the table.

You can edit a Teradata connection to delete tables.

To delete a table from a Teradata connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Click the name of the connection that contains the table you want to delete.

4. Find the table you want to delete in the list, and check the box next to its name.

5. Click **Delete**, and then click **Delete** again to confirm.   

### Deleting a table with dependent objects

- In the *Cannot delete* window, click the link for each object to modify or delete it.

  When all dependencies are removed, you can delete the table.

  ![]({{ site.baseurl }}/images/embrace-delete-table-depend.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, pinboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

## Deleting a Teradata connection
A connection can be used in multiple data sources or visualizations. Because of this, you must delete all of the sources and tasks that use that connection, before you can delete the connection.

To delete a Teradata connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab.

3. Check the box next to the connection you want to delete.

4. Click **Delete**, and then click **Delete** again to confirm.

   If you attempt to delete a connection with dependent objects, the operation is blocked, and a "Cannot delete" warning appears with a list of dependent objects with links.

   ![]({{ site.baseurl }}/images/embrace-delete-table-depend.png "warning connection type")

5. If the "Cannot delete" warning appears, click the link for each object to delete it, and then click **Ok**. Otherwise, go to the next step.

6. When all its dependencies are removed, delete the connection by clicking **Delete**, and then click **Delete** again to confirm.
