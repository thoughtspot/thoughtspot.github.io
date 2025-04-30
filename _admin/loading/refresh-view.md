---
title: [Refresh a materialized view]
keywords: materialize, views, refresh, stale
last_updated: 11/2/2018
summary: "You can refresh a view manually, so that its data matches the data in its underlying tables."
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Materialized views can get out of synch with their underlying data. If the status of a view is **Stale**, you'll need to refresh the view manually, so that it is in sync with the underlying table. Until you refresh it, the view will still be searchable, but the data will not be up-to-date.

To refresh a view manually:

1. To find your view, click **Data** in the top menu, and choose **Views**.

2. Click the name of your view.

3. Click **Schema**.

4. Under **Materialization**, choose **Dematerialize**.

     ![]({{ site.baseurl }}/images/materialization-dialog-on-weekly.png "Dematerialize a View")

## Related Information

     -   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
     -   [About materialized views]({{ site.baseurl }}/admin/loading/materialized-views.html)
