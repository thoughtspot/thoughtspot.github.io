---
title: [Materialize a view]
last_updated: 09/21/2020
summary: "Learn how to materialize a view to improve its performance."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To improve the performance of a view, you can materialize it. This operation computes the data for the view and stores it in memory, just like a table. You can expect a 3-6 times performance improvement on a materialized view over a view that is not materialized. However, materialized views take up space in memory, so weigh the tradeoffs and benefits of materializing a view ahead of time.

{% include note.html content="Row Level Security does not apply to materialized views. All users will see the same data when using the materialized view as a data source." %}

To materialize a view:

{% include content/view-materialize/view-materialize-navigation.md %}

4. If you don't have any joins, you may wish to add them now. See [add joins]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html).

5. Under **Materialization**, click **Materialize**.

   ![]({{ site.baseurl }}/images/view-materialize-1.png)

6. Fill in the details for [primary key]({{ site.baseurl }}/admin/loading/constraints.html), [sharding key, and number of shards]({{ site.baseurl }}/admin/loading/sharding.html).

   ![]({{ site.baseurl }}/images/view-materialize-2.png)

   {% include note.html content="If you do not fill in the sharding details, the view is replicated on every node of your cluster. Follow the links in this step to learn more about sharding." %}

7. Click **Materialize**.

8. In the **Schedule data updates** dialog, decide if you want to configure the schedule to refresh materialized view at this time.

   If you want to skip this step and perhaps schedule it later, click **Setup later**.

   ![]({{ site.baseurl }}/images/view-materialize-3.png)

{% include content/view-materialize/view-materialize-schedule-options.md %}

11. You can see the status of the materialization in progresses.

    ![View materialization in progress]({{ site.baseurl }}/images/view-materialize-8.png)

12. Click **Update status** to refresh materialization status.

13. Note that when the materialization completes, the status changes to **Materialized**.

    ![Materialized view created successfully]({{ site.baseurl }}/images/view-materialize-9.png)

    If after some time, the status has not changed to **Materialized**, check the [list of statuses]({{ site.baseurl }}/admin/loading/materialized-views.html#materialization-status) and corresponding actions to take.

When it says **Materialized** your materialized view is ready for search.    


## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)
-   [About materialized views]({{ site.baseurl }}/admin/loading/materialized-views.html)
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
-   [Sharding]({{ site.baseurl }}/admin/loading/sharding.html)
