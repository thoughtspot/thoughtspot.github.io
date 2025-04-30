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
In comparative analysis you compare two values against each in the **Search**
bar. Typically, in these cases, one measure is a _filtered measure_, for
example, `revenue region = west` is a filtered measure. Filtered measures allow
you to filter as part of your query.

Filters are useful for queries where the results should reflect a new, filtered
vale. region. In the `revenue region = west` example, you filter the region
column to values in the `west` only and compare it to total revenue.

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
