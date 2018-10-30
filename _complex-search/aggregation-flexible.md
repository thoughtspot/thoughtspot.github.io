---
title: [Flexible aggregation functions (groups and filters)]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can use the `group_aggregate` function to aggregate measures at granularities that are
different from the dimensions that you have in columns used in the search.

## How aggregation formulas work

Typically, the groupings and filters used in a formula will be the same as those
of the columns used in the search. The concept of a grouping equates to an
attribute column.

For example, in the search "revenue ship mode", revenue is
the measure, and ship mode is the attribute or _grouping_. The result of this
search would show total revenue for each ship mode, e.g., _a_ dollars for air, _r_
dollars for rail, _t_ dollars for truck, _s_ dollars for sea transport.

The aggregation formulas are described in [Overview of aggregate formulas](aggregation-formulas.html#).

## About flexible aggregation

Starting with version 5.0, ThoughtSpot provides for more flexible aggregation
capability with a new formula called `group_aggregate`. You can use this formula
to pin columns in a query at a granularity different from the search bar query,
using custom groupings and filters, rather than being bound to those of the
search terms/columns.

The formula uses a sub-query to perform the custom aggregation. If the sub-query
is at a courser grain, result column is simply added to the result of original
query. Roll-up or _re-aggregation_ is used when the sub-query is at a finer grain than the
original query

This is particularly useful for comparison analysis.

You can specify to use the groups and filters from the query with `query_groups` and
`query_filters`, respectively, and for `query_groups` you can also add or exclude
some groups or filters.

You can use roll-up or re-aggregation to fill in a column.

## Examples

For a search on `revenue monthly ship mode`, you can add a formula to calculate yearly revenue by ship mode:

```
group_aggregate(sum(revenue), {ship mode, year(commit date)}, {})
```

The same formula can also be written using `query_groups()` and `query_filters()` as following:

```
group_aggregate(sum(revenue), query_groups() - {commit date} + {year(commit date)}, {})
```

This is helpful to include the main query groups that are not known at formula
creation time. You can use `+/-` to modify the set of groups included from
the query.

{% include note.html content="`+/-` is currently supported only for  `query_groups`, not `query_filters`."%}

## Where to learn more

* For more examples of flexible aggregation, see the `group_aggregate` function under "Aggregate
functions" in the [Formula function reference]({{ site.baseurl}}/reference/formula-reference.html).

* To learn about aggregation formulas in general, see [Overview of aggregate formulas](aggregation-formulas.html#) and [Group aggregation functions](about-pinned-measures.html#)
