---
title: [Create or change schedule for refreshing a materialized view]
last_updated: 09/21/2020
summary: "Learn how to create or change the schedule for data refresh in a materialized view."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To keep the data in a materialized view consistent and relevant, we recommend that you periodically refresh it with data from the parent table or tables. ThoughtSpot makes it easy, by letting you schedule regular refreshes at daily, weekly, or monthly intervals.

To schedule materialization of a view, follow these steps:

{% include content/view-materialize/view-materialize-navigation.md %}

4. Under **Materialization**, in the **Update schedule** section, either update an existing schedule, or create a new schedule:
   - To update an existing schedule, click *Daily*, *Weekly*, or *Monthly*.
   - To create a schedule, click *None*.

   ![Update or create a schedule]({{ site.baseurl }}/images/view-materialize-10.png)

{% include content/view-materialize/view-materialize-schedule-options.md %}

## Related Information

-   [Understand views]({{ site.baseurl }}/complex-search/about-query-on-query.html)  
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html)
-   [About materialized views]({{ site.baseurl }}/admin/loading/materialized-views.html)
