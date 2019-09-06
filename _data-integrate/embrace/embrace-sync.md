---
title: [Sync]
tags: [limitations]
keywords: tbd
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you create a connection, the selected tables and columns in your connection are linked to the external database it may take a while to initially render the search results. This is because ThoughtSpot does not cache linked data. With linked data, ThoughtSpot queries the external database directly, which is slower than querying data that is stored in ThoughtSpot's database. To copy your external tables or columns into ThoughtSpot, you must sync them.

Not all of ThoughtSpot's features are supported with linked tables and columns. For details, see: [features available in embrace modes]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html#features-available-in-embrace-modes).

## Sync tables and columns

To improve search performance, you can use Embrace's **Sync** feature. Sync copies selected tables or columns into ThoughtSpot. By syncing your tables and columns, your data is indexed, which improves search speed. In addition, you can use all of ThoughtSpot's features, like SpotIQ, to gain insights into your data. You can sync manually at any time, and also schedule your sync. For example, add sync mode to define the data to be replaced or appended with every sync interval.

### Sync now

To sync now:
1. Click **Data** in the top navigation bar.
2. Click the **Connections** tab at the top of the page.
3. Select your connection name.

    ![]({{ site.baseurl }}/images/select-connection.png "Select a connection")

4. Check the box next to the table or columns that you want to sync, and click **Sync Now**.

    ![]({{ site.baseurl }}/images/sync.png "Table sync")

Notice the sync status in the table list once the sync job completes the syncing request.

### Schedule sync

To schedule sync:
1.


## Related information
- [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
- [Know Embrace connector]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)
- [Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)
- [Data security]({{ site.baseurl }}/admin/architecture/security.html)
