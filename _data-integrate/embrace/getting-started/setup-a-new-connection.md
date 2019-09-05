---
title: [Add a connection]
tags: [limitations]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Now that you've enabled ThoughtSpot Embrace, you can add a connection to a supported database source. Database sources are the external source systems to which you want to perform a live query to create answers and pinboards, without having to bring the data into ThoughtSpot.

{% include note.html content="The 5.3 release only supports Snowflake." %}

## Create a new connection

To add a new connection:

1. Sign in to ThoughtSpot from a browser.

2. Click **Data** in the top navigation bar.

3. Click the **Connections** tab at the top of the page, and select **+ Add connection** at the upper right-hand side of the panel.

     ![]({{ site.baseurl }}/images/new-connection.png "New db connect")

4. Select the connection type you want to use from the available list and click **Next**.

     ![]({{ site.baseurl }}/images/select-new-connection.png "Select a new connection type")

5. Enter the connection credentials for your external data source and click **Next**:

    ![]({{ site.baseurl }}/images/new-connection-creds.png "Select a connection type")

    Refer to the [Embrace connectors]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html#) for more information on each of the specific attributes you must enter into the dialog box.

6. Select the tables and columns you want to load.
7. When all the columns are selected, click **Create connection**.

    ![]({{ site.baseurl }}/images/create-connection.png "column add bar")


Your connection details appear on the Connections list page. You can view the selected tables and columns of a connection, edit the table, and create schema joins as necessary.

## Data syncing
After you add a connection, you can directly perform a live query against the selected tables specified in that connection. This process may take a while to initially render the search results because the selected tables in the connection are linked. When they are linked, ThoughtSpot doesn't cache the data when you connect to linked tables in an external database.

To improve the search performance, you can use Embrace's `Sync` functionality. Using this procedure, you can locally store the selected tables or columns in ThoughtSpot that you wish to use in your search query. You can also schedule some useful conditions when you sync tables from the underlying database periodically. For example, add sync mode to define the data to be replaced or appended with every sync interval.

To sync a data table:
1. Log in to ThoughtSpot from a browser.
2. Click Data on the top navigation bar.
3. Click the Connections tab at the top of the page.
4. Select the connection type of interest on Connections list page.

    ![]({{ site.baseurl }}/images/select-connection.png "Select a connection")

5. Find the table you want to sync in the list, and check the box next to its name.
6. Click the **Sync now** icon.

    ![]({{ site.baseurl }}/images/sync.png "Table sync")

Notice the sync status in the table list once the sync job completes the syncing request.



## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Know Embrace connector]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data security]({{ site.baseurl }}/admin/architecture/security.html)
