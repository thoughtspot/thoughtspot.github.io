---
title: [Understand views]
tags: [bestpractices]
keywords: search,view,aggregated
last_updated: tbd
summary: "If you want to search on top of another search, try saving your search as a view. Then, you can use the saved view as a data source for a new search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If you want to use the results of a search as the starting point for other searches, you can save the initial search as a view. Views are similar to tables. One important difference is that the search that makes up a view gets computed each time the view is used. However, you can materialize a view, so its data gets stored. When materialized, a view becomes much like a table, with the same fast performance users expect when searching.

You may have noticed that when you do a search on a data source, ThoughtSpot is only able to aggregate one
column by one other column. Because of this, you may come across searches you
can't do in one pass, because they are essentially nested queries. But you can
create the equivalent of nested queries using a view, which is
essentially an answer that you have saved for the purpose of building other searches on top of it.

You can use a view just like any other data source. You
can even link it to other sources by defining a relationship. When you save an
answer as a view, and then use it as a source in a new search, it is
similar to doing a nested query in SQL, only much easier to create.

To create a view, you must belong to a group that has the
privilege **Has administration privileges** or **Can Manage Data**. If you are
not able to create views, contact your administrator and request
the **Can Manage Data** privilege.

## View workflow

Suppose you have created a search on the sales fact table that shows the top ten
Sales Reps by revenue for the first quarter. Then you want to do some further
investigations on that set of data, like ranking them by how much they
discounted a specific product using data from the orders fact table. Unless you
save your first answer as a view, certain explorations like this won't be
possible. If you want to do this, here are the steps at a high level:

1. Create the first search, and [save it as a view](create-aggregated-worksheet.html#).
2. Link your view to any other data sources you'll need.
3. Create a new search that includes your view and the other sources you linked with it.
4. You may want to create a new worksheet that includes all these data sources.

    This will make it easier for people to search using your
    view and any related tables.

## Best practices for using views

Only users with administrative privileges are able to create views and link them. Users that create views should keep in
mind best practices for creating a worksheet and the boundaries around the final
worksheet size.

You can't link a view with a sharded table. If you do this and
try to search on it, you will get an error.

To be able to join a view with a base table, your installation
must be configured to allow the behavior. The view cannot have
more than 5 tables involved. Moreover, the number of rows in the
view cannot be greater than 1000.

The order of the objects being linked (joined) matters, this is because joins are
directional. The table or view with the foreign key needs to occur
in the first (left) position. The table or view with the primary key should be in the
second (right) position.

For the best performance, views should have 50 or fewer
columns and no more than 10 million rows. Exceeding these boundaries can make
your view slow or error prone.

You can use an ETL (extract, transform, load) process to circumvent these
limitations.
