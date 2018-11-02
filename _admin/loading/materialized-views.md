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

{% include note.html content="The number of materialized views you can create is limited to 50, because materialized views take up space in memory." %}

These are the operations you can do on a view:
-   [Materialize a view]({{ site.baseurl }}/admin/loading/materialize-a-view.html) to improve performance,
-   [Dematerialize a view]({{ site.baseurl }}/admin/loading/dematerialize-a-view.html) to save space, or
-   [Refresh a view]({{ site.baseurl }}/admin/loading/refresh-view.html) to synchronize its data with the latest data load to the underlying tables.
-   Check the status of a view.

Once materialized, a view can have one of three statuses. You can see the status of a view by selecting **Data**, clicking on **Views**, and finding your view in the list. The status is shown next to the name of your view.

These are the statuses a view can have:

|Status|Description|Action|
|------|-----------|--------|
|Queued|View is waiting to be materialized.|Click **Update status**.|
|In Progress|View is being materialized.|Click **Update status**. Wait for materialization to finish.|
|Materialized|View has been materialized into memory.|You can now search the materialized view.|
|Stale|View has become out of sync with the data in the tables that make it up, usually due to an incremental data load. |Refresh the view by clicking **Refresh Data***.|
|Unknown|View status could not be determined.|Click **Update status**.|
|Error|An error occurred.|Refresh the view by clicking **Refresh Data***. Optionally run a report.|

\* You will only have the option to refresh data if you have the **Can administer ThoughtSpot** privilege.

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)
-   [Materialize a view]({{ site.baseurl }}/loading/materialize-a-view.html)  
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
-   [Sharding]({{ site.baseurl }}/admin/loading/sharding.html)
