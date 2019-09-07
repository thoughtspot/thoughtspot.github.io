---
title: [Add a connection]
tags: [limitations]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Once ThoughtSpot Embrace is enabled, you can add a connection to a supported database source. Database sources are the external source systems to which you want to perform a live query to create answers and pinboards, without having to bring the data into ThoughtSpot.

{% include note.html content="The 5.3 release only supports Snowflake." %}

## Create a new connection

To add a new connection:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page, and click **+ Add Connection** at the upper-right-hand side of the page.

     ![]({{ site.baseurl }}/images/new-connection.png "New db connect")

3. Select a connection type and click **Next**.

     ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type")

4. Enter the connection credentials for your external data source and click **Next**:

    ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type")

    Refer to the [Embrace connectors]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html#) for more information on each of the specific attributes you must enter into the dialog box.

5. Select the tables and columns you want to load, and then click **Create Connection**.

    ![]({{ site.baseurl }}/images/create-connection.png "column add bar")

   Your new connection appears on the **Data** > **Connections** page. You can click the name of your connection to view the tables and columns in your connection.   

The connection you just created is a link to the external data source. If there are any joins in the external data source, those are imported into ThoughtSpot.

You can now perform a live query on the selected tables and columns of your connection. Because the selected tables and columns in your connection are linked, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database. To copy your external tables into ThoughtSpot, you must sync them. For details on how to sync tables and columns, see: [Sync]({{ site.baseurl }}/data-integrate/embrace/embrace-sync.html#).

Not all of ThoughtSpot's features are supported with linked tables. For details, see: [features available in embrace modes]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html#features-available-in-embrace-modes).

## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Know Embrace connector]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data security]({{ site.baseurl }}/admin/architecture/security.html)
