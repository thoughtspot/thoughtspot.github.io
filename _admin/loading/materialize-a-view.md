---
title: [Materialize a view]
keywords: materialize views
last_updated: 11/2/2018
summary: "Learn how to materialize a view to improve its performance."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To improve the performance of a view, you can materialize it. This operation computes the data for the view and stores it in memory, just like a table. You can expect a 3-6 times performance improvement on a materialized view over a view that is not materialized. However, materialized views take up space in memory, so weigh the tradeoffs and benefits of materializing a view ahead of time.

To materialize a view:

1. To find your view, click **Data** in the top menu, and choose **Views**.
2. Click on the name of your view.
3. Click **Schema**.
4. If needed, [add joins]({{ site.baseurl }}/admin/worksheets/add-joins.html).
5. Under **Materialize View**, choose **Materialize**
6. Fill in the details for [primary key]({{ site.baseurl }}/admin/loading/constraints.html), [sharding key, and number of shards]({{ site.baseurl }}/admin/loading/sharding.html}}).
   ![]({{ site.baseurl }}/images/materialize-a-view.png)
   {% include note.html content="If you do not fill in the sharding details, the view will be replicated on every node of your cluster. If you're not sure what to fill in, ask your ThoughtSpot administrator, or follow the links in this step to learn more about sharding." %}
7. Click **Materialize**.
8. You can see the status of the materialization as it progresses. Click **Update status** to refresh it. When it says **Materialized** your materialized view is ready for search.

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
-   [Sharding]({{ site.baseurl }}/admin/loading/sharding.html)
