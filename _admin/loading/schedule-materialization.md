---
title: [Schedule materialization refresh on a view]
keywords: materialize,views,schedule
last_updated: 11/2/2018
summary: "Learn how to schedule materialization refresh of a view to keep it in synch with the data that makes it up."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To keep the data in a view up-to-date, you can schedule periodic refreshes from the underlying table(s).

To schedule materialization of a view:

1. To find your view, click **Data** in the top menu, and choose **Views**.
2. Click on the name of your view.
3. Click **Schema**.
4. Under **Materialization**, click the link next to **Update Schedule:**.

5. In the **Schedule data updates** dialog, select an option for **Repeats** (Monthly, Weekly, or Daily).

   ![]({{ site.baseurl }}/images/materialized-view-sched-weekly.png)

   If you don't want to set a schedule now, choose **Setup later** and skip to Step 11.

6. Fill in the schedule details:

   ![]({{ site.baseurl }}/images/schedule-data-updates-weekly.png)

7. Click **Update**.

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)
-   [About materialized views]({{ site.baseurl }}/admin/loading/materialized-views.html)
