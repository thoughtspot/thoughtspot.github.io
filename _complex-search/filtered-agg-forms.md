---
title: [Filtered aggregation]
keywords: filter, search, aggregation
tags: [time,dates]
last_updated: tbd
toc: false
summary: "You can create a filtered aggregation in the search bar."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Filters are useful for queries where the results should reflect a new, filtered
value.  

## Comparative and derivative filters

In comparative analysis you compare two segments of some whole against each in
the **Search** bar. For example, a company that has locations across the United
States, may want to compare total revenue in the Wes to the East segment. In a
comparative filter, one of the segments you are comparing is filtered.

An example of a comparative filter is comparing west revenue with total revenue.
In these cases, one measure is a _filtered measure_, for example, `revenue
region = west` is a filtered measure.

Derivative comparison is when you want to add a column to your results which is
derived from other columns in the same results. For example, you search for
revenue and cost and want to calculate profit in your result.

Some examples of comparisons in the real world are:

* revenue of this_soap versus all_soaps (Comparative filter)
* tax as a percentage of revenue (derivative)
* count revenue as a percentage of state revenue (comparative with a derivative)

If you plan to create these types of filters, you need to understand how to
create filter functions.

## About filter functions

Filter functions take two arguments, the column ( measure or attribute) to
aggregate and the filter condition:

```
FUNCTION_NAME(condition, <column name>)
```

ThoughtSpot functional library will include the following functions:

* `sum_if`
* `average_if`
* `count_if`
* `unique_count_if`
* `max_if`
* `min_if`
* `stddev_if`
* `variance_if`

The table below illustrates some examples of these functions in use:

<table>
  <tr>
    <th>Example</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>sum_if(region=’west’, revenue)</code></td>
    <td>Only aggregate the revenue for the values corresponding to west region.</td>
  </tr>
  <tr>
    <td><code>count_if(region =’west’, region)</code></td>
    <td>Only aggregate the region for the values corresponding to west region.</td>
  </tr>
  <tr>
    <td><code>count_if(revenue > 100, red)</code></td>
    <td>Count the number of times red appears when revenue was greater than 100 (row level revenue data, not aggregated).</td>
  </tr>
</table>

A condition can have multiple filters like `region = west OR region = east`. If
there are no rows matching the criteria, the condition returns a 0 (zero). A 0
can result in situations where there are logic errors in the formula, so be sure
to double-check your work.

![]({{ site.baseurl }}/images/filtered-agg-forms.png "Filter Aggregation")
