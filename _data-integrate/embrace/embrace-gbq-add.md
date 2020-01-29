---
title: [Add a BigQuery connection]
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Once ThoughtSpot Embrace is enabled, you can add a connection to a BigQuery database. This allows you to perform a live query of the external database to create answers and pinboards, without having to bring the data into ThoughtSpot.

To add a new connection to BigQuery:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

     <!-- ![]({{ site.baseurl }}/images/new-connection.png "New db connect") -->
3. Create a name for your connection, a description (optional), then select the BigQuery connection type, and click **Continue**.

     <!-- ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type") -->
4. Enter the connection details for your external data source, and click **Next**.

     <!-- ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type") -->

     Refer to the [BigQuery connection reference]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-reference.html#) for more information on each of the specific attributes you must enter for your connection.

5. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

     ![]({{ site.baseurl }}/images/create-connection.png "column add bar")

   Once the connection is added, the "Connection created" screen appears. From there, you can do any of the following:
   - Search your external database, by clicking **Search now**.

   No matter which option you choose here, you can do any of them at any time later.

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database.

## Related information
- [Modify a BigQuery connection]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-modify.html)
- [BigQuery connection reference]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-reference.html)
- [Load and manage data]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data and object security]({{ site.baseurl }}/admin/architecture/security.html)
