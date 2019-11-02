---
title: [Add a connection]
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Once ThoughtSpot Embrace is enabled, you can add a connection to a supported external database. This allows you to perform a live query of the external database to create answers and pinboards, without having to bring the data into ThoughtSpot.

## Add a connection

To add a new connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add connection** at the upper-right-hand side of the page.

     ![]({{ site.baseurl }}/images/new-connection.png "New db connect")

3. Create a name for your connection, a description (optional), then select a connection type, and click **Next**.

     ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type")

4. Enter the connection details for your external data source, and click **Next**.

    ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type")

    Refer to the [Embrace connectors]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html#) for more information on each of the specific attributes you must enter for your connection.

5. Select tables (on the left) and the columns from each table (on the right), and then click **Create connection**.

    ![]({{ site.baseurl }}/images/create-connection.png "column add bar")

   Once the connection is added, the "Connection created" screen appears. From there, you can do any of the following:
   - Search your external database, by clicking **Search now**.
   - Sync the data from your external database into ThoughtSpot, by clicking **Sync now**.
   - Schedule a regular time to sync the data from your external database, by clicking **Schedule sync**.

   No matter which option you choose here, you can do any of them at any time later.

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the selected tables of the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database. To copy your external tables into ThoughtSpot, you must sync them. For details on how to sync tables and columns, see: [Sync]({{ site.baseurl }}/data-integrate/embrace/embrace-sync.html#).

Not all of ThoughtSpot's features are supported with linked tables. For details, see: [features available in embrace modes]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html#features-available-in-embrace-modes).

## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Connectors reference]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Load and manage data]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data and object security]({{ site.baseurl }}/admin/architecture/security.html)
