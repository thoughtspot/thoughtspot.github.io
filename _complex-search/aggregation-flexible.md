---
title: [Flexible aggregation functions (group aggregate and filters)]
summary: Learn about advanced aggregation functions.
last_updated: 11/15/2019
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
capability with a new function called `group_aggregate`. You can use this formula
to pin columns in a query at a granularity different from the search bar query,
using custom groupings and filters, rather than being bound to those of the
search terms/columns.

The formula uses a sub-query to perform the custom aggregation. If the sub-query
is at a courser grain, result column is simply added to the result of original
query. Roll-up or _reaggregation_ is used when the sub-query is at a finer grain than the
original query.

This is particularly useful for comparison analysis.

You can specify to use the groups and filters from the query with `query_groups` and
`query_filters`, respectively, and for `query_groups` you can also add or exclude
some groups or filters.

You can use roll-up or reaggregation to fill in a column.

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

{% include note.html content="`+/-` is currently supported only for `query_groups`, not `query_filters`."%}

## When group formula results are finer-grained than the search

With the flexibility of groupings for group formulas, the computed column
created by a formula can be finer or courser grained than the search itself.

For example, you can have a search that shows **total yearly sales** and a
formula that computes total sales _for each month_ (a finer-grained calculation
than the search).

In such cases, if an additional aggregation is specified by the formula, the
results get _reaggregated_.

Reaggregation can be applied in either of these ways:

* You can add an aggregation keyword just before a formula column in a search.
For example, in this search we've added the keyword **min** just before our formula
for `monthly_sales`:

  **sum revenue yearly min monthly_sales**

  where, the `monthly_sales` formula is written as:

    ```
     group_aggregate(sum(revenue), {start_of_month(date)}, {})
    ```

* You can create a separate formula, such as in this search for:

  **sum revenue yearly min_monthly_sales**

  where, the `min_monthly_sales` formula is written as:

  ```
  min(monthly_sales)
  ```

Alternatively, if no aggregation is specified, then the search query also
inherits the formula groupings, as in this search:

**sum revenue yearly monthly_sales**

where, the original query is computed at a monthly grain instead of yearly.

## Reaggregation scenarios

Some scenarios require aggregation on an already aggregated result.

For example, computing minimum monthly sales per ship mode, requires two
aggregations:

* the first aggregation of **sum** to compute total monthly sales per ship
mode.

* the second aggregation of **min** to compute minimum sale that happened
for any given month for that ship mode.

An example of this is this search:

**ship mode min monthly_sales**

where the formula `monthly_sales` is written as:

```
group_aggregate(sum(revenue), query_groups() + {start_of_month(date)}, {})
```

## Groups and filters

Flexible group aggregate formulas allow for flexibility in both [groupings](about-pinned-measures.html#)
and [filters](filtered-agg-forms.html#). The formulas give you the ability to
specify only groupings or only filters.

## Related information

* For more examples of flexible aggregation, see the `group_aggregate` function under "Aggregate
functions" in the [Formula function reference]({{ site.baseurl}}/reference/formula-reference.html).

* To learn about aggregation formulas in general, see
[Overview of aggregate formulas](aggregation-formulas.html#) and
[Group aggregation functions](about-pinned-measures.html#)
