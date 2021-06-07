---
title: [Add a Databricks connection]
last_updated: 6/7/2022
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To connect to Databricks:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

     <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->

3. Create a name for your connection, a description (optional), then select the ADW connection type, and click **Continue**.

     ![Add a Databricks connection]({{ site.baseurl }}/images/embrace-adw-connection-type-ts-cloud.png "Add an ADW connection")

4. (Optional) Provide additional key-value pairs that you need to set up your connection to ADW, by doing the following:

   - Click the **Advanced Config** menu to reveal the **Key** and **Value** fields.
   - Enter your key and value information.
   - To add more keys and values, click the plus sign (+), and enter them.

     {% include note.html content="Any key-value pairs that you enter must be defined in your ADW data source. Key-value pairs are case-sensitive." %}

5. Click **Continue**.   

6. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

   ![Select tables and columns for your connection]({{ site.baseurl }}/images/adw-selecttables.png "Select tables and columns for your connection")

   A message appears indicating the number of tables and columns that will be added to your connection.

8. Click **Confirm**.

After you add the connection, you can search your ADW database by clicking **Search now**.

![The "Connection created" screen]({{ site.baseurl }}/images/adw-connectioncreated.png "The "Connection created" screen")

Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

You can modify an ADW connection in the following ways:

- [Add an ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-add-connection.html)
- [Edit an ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-edit-connection.html)
- [Remap an ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-remap-connection.html)
- [Delete a table from an ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-delete-table.html)
- [Delete a table with dependent objects]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-delete-table-dependencies.html)

You can also [Delete an ADW connection]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-delete-connection.html).

See the [Connection reference]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw-connection-reference.html) for details of connection parameters.
