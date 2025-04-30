---
title: [Refine a search with a worksheet]
tags:
keywords: search,worksheet,aggregated
last_updated: tbd
summary: "If you want to search on top of another search, try saving your search as a worksheet. Then, you can use the saved worksheet as a data source for a new search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Worksheets can be created from tables or from searching. You can also create a
worksheet from a search. This is an advanced form of searching. A worksheet
created from a search is called an _aggregated worksheet_. Aggregated worksheets
are effectively the same as any worksheet.

When you do a search on a data source, ThoughtSpot is only able to aggregate one
column by one other column. Because of this, you may come across searches you
can't do in one pass, because they are essentially nested queries. But you can
create the equivalent of nested queries using an aggregated worksheet, which is
essentially an answer that you save as a worksheet.

You can use search saved as a worksheet just like any other data source. You
can even link it to other sources by defining a relationship. When you save an
answer as a worksheet, and then use it as a source in a new search, it is
similar to doing a nested query in SQL, only much easier to create.

To create a worksheet from a search, you must belong to a group that has the
privilege **Has administration privileges** or **Can Manage Data**. If you are
not able to create aggregated worksheets, contact your administrator and request
the **Can Manage Data** privilege.

## Aggregated worksheet workflow

Suppose you have created a search on the sales fact table that shows the top ten
Sales Reps by revenue for the first quarter. Then you want to do some further
investigations on that set of data, like ranking them by how much they
discounted a specific product using data from the orders fact table. Unless you
save your first answer as a worksheet, certain explorations like this won't be
possible. If you want to do this, here are the steps at a high level:

1. Create the first search, and [save it as an aggregated worksheet](create-aggregated-worksheet.html#).
2. Link your worksheet to any other data sources you'll need.
3. Create a new search that includes your aggregated worksheet and the other sources you linked with it.
4. You may want to create a new worksheet that includes these data sources.

    This will make it easy for people to search using the same group of
    aggregated worksheet and tables that you created.

## Best practices for using aggregated worksheets

Only users with administrative privileges are able to create aggregated
worksheets and link them. Users that create aggregated worksheets should keep in
mind best practices for creating a worksheet and the boundaries around the final
worksheet size.

You can't link an aggregated worksheet with a sharded table. If you do this and
try to search on it, you will get an error.

To be able to join an aggregated worksheet with a base table, your installation
must be configured to allow the behavior. The aggregated worksheet cannot have
more than 5 tables involved. Moreover, the number of rows in the final
aggregated worksheet cannot be greater than 1000.

The order of the objects being linked (joined) matters, this is because joins are
directional. The table/aggregated worksheet with the foreign key needs to occur
in the first (left) position. The table with the primary key should be in the
second (right) position.

For the best performance, the final aggregated worksheet should have 50 or fewer
columns and no more than 10 million rows. Exceeding these boundaries can make
your worksheet creation slow or error prone.

You can use an ETL (extract, transform, load) process to circumvent these
limitations.
