---
title: [Connect to Amazon Redshift from ThoughtSpot Cloud]
last_updated: 8/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an Amazon Redshift database in ThoughtSpot Cloud, and proceed to perform a live queries to create Answers and Pinboards.

{: id="add-connection"}
## Add an Amazon RedShift connection

To connect to Amazon Redshift:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

    ![Click "+ Add connection"]({{ site.baseurl }}/images/redshift-addconnection.png "Click "+ add connection"")
     <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->
3. Create a name for your connection, a description (optional), then select the Redshift connection type, and click **Continue**.

    ![Choose connection type]({{ site.baseurl }}/images/embrace-redshift-connection-type-ts-cloud.png "Choose connection type")
     <!-- ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type") -->
4. Enter the connection details for your Redshift data source.

    ![Enter connection details]({{ site.baseurl }}/images/redshift-connectiondetails.png "Enter connection details")
     <!-- ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type") -->

     Refer to the [Redshift connection reference](#connection-reference) for more information on each of the specific attributes you must enter for your connection.

5. (Optional) Provide additional key-value pairs that you need to set up your connection to Redshift, by doing the following:
- Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
- Enter your key and value information.
- To add more keys and values, click the plus sign (+), and enter them.

    {% include note.html content="Any key-value pairs that you enter must be defined in your Redshift data source. Key-value pairs are case-sensitive." %}

6. Click **Continue**.   

7. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

     ![Select tables and columns]({{ site.baseurl }}/images/snowflake-selecttables.png "Select tables and columns")

   Once the connection is added, you can search your Redshift database right away by clicking **Search now**.

   ![The "connection created" screen]({{ site.baseurl }}/images/redshift-connectioncreated.png "The "connection created" screen")

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly.

You can modify an Embrace Redshift connection in the following ways:
- <a href="#edit-connection">Edit a connection</a>: to add or remove tables and columns
- <a href="#remap-connection">Remap a connection</a>: to map a table or column to a different table or column
- <a href="#delete-table">Delete a table</a>
- <a href="#delete-table-dependencies">Delete a table with dependent objects</a>

You can also <a href="#delete-connection">delete a connection</a>.

{: id="edit-connection"}
## Edit an Amazon Redshift connection

You can edit a Redshift connection to add tables and columns.

To edit a connection:

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

To remove a table from a connection, delete it from the connection details page. For more information, see [Deleting a table]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-modify.html#delete-table).

{: id="remap-connection"}
## Remap an Amazon Redshift connection

Modify the connection parameters by editing the source mapping <code>yaml</code> file that was created when you added the connection. For example, you can remap the existing table or column to a different table or column in an existing database connection. ThoughtSpot recommends that you check the dependencies before and after you remap a table or column in a connection to ensure they display as intended.

To remap a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection you want to remap.

   ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Click the More Info icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Remapping** on the upper-right-hand side of the page.

    ![Remap a connection]({{ site.baseurl }}/images/redshift-remapping.png "Remap a connection")

5. Click **Download** to download the source mapping file.

    !["Download the source mapping file"]({{ site.baseurl }}/images/embrace-remapping-download.png "Download the source mapping file")

6. Edit the file, as required, and save it.

    ![Edit the yaml file]({{ site.baseurl }}/images/redshift-yaml.png "Edit the yaml file")

7. Finally, click **Browse your files**, and upload your edited mapping file to update the mapping of your connection.

{: id="delete-table"}
## Delete a table from an Amazon Redshift connection
ThoughtSpot checks for dependencies whenever you try to remove a table in a connection. ThoughtSpot shows a list of dependent objects, and you can click them to delete them or remove the dependency. Then you can remove the table.

To delete a table:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the connection that contains the table you want to delete.

    ![]({{ site.baseurl }}/images/select-connection.png "Select a connection type")

4. Find the table you want to delete in the list, and check the box next to its name.

5. Click **Delete**, and then click **Delete** again to confirm.

    ![Delete a connection table]({{ site.baseurl }}/images/redshift-deletetable.png "Delete a connection table")

    If you attempt to delete a table with dependent objects, the operation is blocked. A *Cannot delete* window appears, with a list of links to dependent objects. See [Deleting a table with dependent objects]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-modify.html#delete-table-dependencies)

{: id="delete-table-dependencies"}
## Delete a table with dependent objects

- In the *Cannot delete* window, click the link for each object to modify or delete it.

   When all dependencies are removed, you can delete the table.

   ![]({{ site.baseurl }}/images/redshift-demoremapping.png "Dependent objects warning")

You can also click the name of a table and then click the linked objects to see a list of dependent objects with links. The list shows the names of the dependent objects (worksheets, pinboards or answers), and the columns they use from that table. You can use this information to determine the impact of changing the structure of the data source or to see how widely used it is. Click a dependent object to modify or delete it.

{: id="delete-connection"}
## Delete an Amazon Redshift connection
A connection can be used in multiple data sources or visualizations. Because of this, you must delete all of the sources and tasks that use that connection, before you can delete the connection.

To delete a connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Check the box next to the connection you want to delete.

4. Click **Delete**, and then click **Delete** again to confirm.

   ![]({{ site.baseurl }}/images/delete-a-connection.png "delete a connection type")

   If you attempt to delete a connection with dependent objects, the operation is blocked, and a "Cannot delete" warning appears with a list of dependent objects with links.

   ![]({{ site.baseurl }}/images/connection-delete-warning.png "warning connection type")

5. If the "Cannot delete" warning appears, click the link for each object to delete it, and then click **Ok**. Otherwise, go to the next step.

6. When all its dependencies are removed, delete the connection by clicking **Delete**, and then click again **Delete** to confirm.

{: id="connection-reference"}
## Connection reference for Amazon Redshift

Learn about the fields used to create an Amazon Redshift connection using ThoughtSpot Embrace. You need specific information to establish a seamless and secure connection.

 <dl>
   <dlentry id="connection-name">
     <dt>Connection name</dt>
     <dd>Enter a name for your Redshift connection.<br/>Mandatory field.</dd></dlentry>
   <dlentry id="connection-description">
     <dt>Connection description</dt>
     <dd>Provide a short description of the connection.<br/>Optional field.</dd></dlentry>
   <dlentry id="host">
     <dt>Host</dt>
     <dd>Enter the host name associated with the database.<br/>Mandatory field.</dd>
   </dlentry>
   <dlentry id="port">
     <dt>Port</dt>
     <dd>Enter the port number associated with the database.<br/>Mandatory field.</dd>
   </dlentry>
   <dlentry id="user">
     <dt>User</dt>
     <dd>Enter the Redshift account username.<br/>Mandatory field.</dd>
   </dlentry>
   <dlentry id="password">
     <dt>Password</dt>
     <dd>Enter the Redshift account password.<br/>Mandatory field.</dd>
   </dlentry>
   <dlentry id="database">
     <dt>Database</dt>
     <dd>Specify the database associated with the account.<br/>Mandatory field.</dd>
   </dlentry>    
 </dl>
