---
title: [Understanding views]
last_updated: 04/10/2020
summary: "If you want to perform a search on top of another search, try saving your search as a view. Then, you can use the saved view as a data source for a new search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Introduction to views

You may have noticed that when you do a search on a data source, ThoughtSpot is only able to aggregate one
column by one other column. Because of this, you may come across searches you
can't do in one pass, because they are essentially nested queries. But you can
create the equivalent of nested queries using a view, which is an answer that you have saved for the purpose of building other searches on top of it.

You can use a view just like any other data source. You
can even link it to other sources by defining a relationship. When you save an
answer as a view, and then use it as a source in a new search, it is
similar to doing a nested query in SQL, only much easier to create.

To create a view, you must belong to a group that has the
privilege **Can administer ThoughtSpot** or **Can manage data**. If you are
not able to create views, contact your administrator and request
the **Can manage data** privilege.

## View workflow

Suppose you have created a search on the sales fact table that shows the top ten
Sales Reps by revenue for the first quarter. Then you want to do some further
investigations on that set of data, like ranking them by how much they
discounted a specific product using data from the orders fact table. Unless you
save your first answer as a view, certain explorations like this won't be
possible. If you want to do this, here are the steps at a high level:

1. Create the first search, and [save it as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html#).

2. [Create relationships]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html#) or [define joins]({{ site.baseurl }}/admin/loading/constraints.html#) to connect your view with any other data sources you need.

3. Create a new search that includes your view and the other sources you linked with it.

4. You may want to [create a new worksheet]({{ site.baseurl }}/admin/worksheets/about-worksheets.html#) that includes all these data sources.

    Creating a worksheet will make it easier for people to search using your
    view and any related tables.

## Best practices for using views

{% include access.html content="Only users with the **Can administrator ThoughtSpot** or the **Can manage data** privilege can create views and link them." %}

{% include important.html content="Views do not support row level security (RLS), so all users of a view will be able to see all the data it contains." %}

- When creating views, keep in mind the sizing recommendations for worksheets, for the final worksheet that you plan to use in modeling you data.

- To be able to join a view with a base table, your installation must be configured to allow this. The view cannot have more than 5 tables, and the number of rows in the view cannot exceed 10 million rows.

- The order of the objects being linked (joined) matters, because joins are directional. The table or view with the foreign key must be in the the first (left) position. The table or view with the primary key must be in the second (right) position.

- For best performance, views should have 50 or fewer columns, and no more than 10 million rows. Exceeding these boundaries may make queries against this view run slow.

- To improve performance, you can materialize the views.

- You can use an ETL (extract, transform, load) processes to circumvent these limitations.

## Related Information

-   [More view scenario examples]({{ site.baseurl }}/complex-search/more-example-scenarios.html#)
-   [Save a search as a view]({{ site.baseurl }}/complex-search/create-aggregated-worksheet.html#)  
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html#)
-   [Materialized views]({{ site.baseurl }}/admin/loading/materialized-views.html#)
