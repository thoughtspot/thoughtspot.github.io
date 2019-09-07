---
title: [Sync]
tags: [limitations]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you create a connection, the selected tables and columns in your connection are linked to the Snowflake database. As a result, it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the Snowflake database directly, which is slower than querying data that is stored in ThoughtSpot's database. To copy tables from the Snowflake database into ThoughtSpot, you must sync them.

Not all of ThoughtSpot's features are supported with linked tables and columns. For details, see: [features available in embrace modes]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html#features-available-in-embrace-modes).

## Sync tables and columns

To improve search performance, you can use Embrace's **Sync** feature. Sync copies selected tables or columns into ThoughtSpot. By syncing your tables and columns, your data is indexed, which improves search speed. In addition, you can use all of ThoughtSpot's features, like SpotIQ, to gain insights into your data. You can sync manually at any time, and also schedule your sync.

### Sync now

To sync now:
1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of your connection.

    ![]({{ site.baseurl }}/images/select-connection.png "Select a connection")

4. Check the box next to the table that you want to sync, and click **Sync Now**.

    ![]({{ site.baseurl }}/images/sync.png "Table sync")

The status of the sync appears in the Last Synced column and refreshes to indicate when the sync was completed.

### Schedule sync

To schedule sync:
1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of the table you want to sync.

4. Click the **Sync** tab.

5. Click **Schedule**.

6. In the *Sync table* window, set the following items:  
    A. For Repeats, select how often you want to sync (**Hourly**, **Daily**, **Weekly**, or **Monthly**).  
    B. Select a sync mode:
    - **Append** adds to the current data.
    - **Overwrite** replaces the current data.  
7. (Optional) Enter a Snowflake condition to be added to the search query.

8. (Optional) If you want to shard the data as it is synced, click **Show Advanced settings** and enter the **Primary key**, **Sharding key** and **Number of shards**.

9. Click **Schedule**

   The schedule is saved and runs automatically at the selected time.  
   Every time the schedule is run, it is listed History list.

#### Update or remove a schedule

To update a schedule:

1. Click **Schedule**.

2. In the *Sync table* window, make your changes and click **Update Schedule**.

To remove a schedule:

- Click More Info (insert icon here) and select 






## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Know Embrace connector]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data security]({{ site.baseurl }}/admin/architecture/security.html)
