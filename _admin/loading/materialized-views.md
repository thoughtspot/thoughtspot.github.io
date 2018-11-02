---
title: [Materialized views]
keywords: materialize views
last_updated: 10/31/2018
summary: "You can materialize a view to improve its performance."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Views can become slow as your data volume and the number of views stacked on top of one another grow. This happens because when doing a search, each view is computed on the fly. To improve the performance of a view, you can materialize it. Materializing pre-computes the view and stores it in memory, just like a table. You can expect a materialized view to be three to six times faster than a view that is not materialized, on average.

To materialize a view, you must have the [Administrator privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html).

The number of materialized views you can create is limited to 50, because materialized views take up space in memory.

Once materialized, a view can have one of three states. You can see the status of a view by selecting **Data**, clicking on **Views**, and finding your view in the list. The status is shown next to the name of your view.

These are the statuses a view can have:

|Status|Description|Action|
|------|-----------|--------|
|In Progress|View is being materialized.|Wait for materialization to finish.|
|Ready|View has been materialized into memory.|View has been materialized, and may be searched.|
|Stale|View has become out of sync with the data in the tables that make it up, usually due to an incremental data load. |Refresh the view so that it includes the newest data from the tables that make it up.|
|Unknown|View status could not be determined.|Verify that the view has been materialized by clicking on it and choosing **Views**.|

If the status is **Stale**, you'll need to refresh the view so that it is in sync with the underlying table. Until you refresh it, the view will still be searchable, but the data will not be up-to-date. To refresh the view, click **Refresh**.

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)  
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
-   [Sharding]({{ site.baseurl }}/admin/loading/sharding.html)
