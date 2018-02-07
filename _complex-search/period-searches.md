---
title: [Time series analysis]
keywords: period,"period ago","time series"
tags: [time,dates]
last_updated: tbd
summary: "You can compare across time periods without using a formula."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
A _time series_ is a set of data points ordered by time. For example, within the
same week a sale on Tuesday comes before a sale on Wednesday in such a data set.
You can use ThoughtSpot's _time series analysis_ feature to search for answers
about series data.

![]({{ site.baseurl }}/images/period-drop.png "Period Analysis")

You might use this feature to compare a time period across other time periods.
For examples sales for each month across several years.  You may also want to
calculate an aspect such as growth over the same time period across other
periods. You can also do relative analysis such as sales for the last 3 months of
each year across years.

You can use one or more of the following period keywords to create this type of
analysis:

## Period keywords

<table cellpadding="4" cellspacing="0" summary="" class="table" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%" />
      <col style="width:50%" />
   </colgroup>
  <tr>
    <th>Keyword</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>quarter (<i>date</i>)</td>
    <td><code>quarter (commit date)</code></td>
  </tr>
  <tr>
    <td>month of quarter (<i>date</i>)</td>
    <td><code>month of quarter (commit date)</code></td>
  </tr>
  <tr>
    <td>week of year (<i>date</i>)</td>
    <td><code>week of year (commit date)</code></td>
  </tr>
  <tr>
    <td>week of quarter (<i>date</i>)</td>
    <td><code>week of quarter (commit date)</code></td>
  </tr>
  <tr>
    <td>week of month (<i>date</i>)</td>
    <td><code>week of month (commit date)</code></td>
  </tr>
  <tr>
    <td>day of year (<i>date</i>)</td>
    <td><code>day of year (commit date)</code></td>
  </tr>
  <tr>
    <td>day of quarter (<i>date</i>)</td>
    <td><code>day of quarter (commit date)</code></td>
  </tr>
  <tr>
    <td>day (<i>date</i>)</td>
    <td><code>day (order date)</code></td>
  </tr>
  <tr>
    <td>day of week (<i>date</i>)</td>
    <td><code>day of week (order date)</code></td>
  </tr>
  <tr>
    <td>hour (<i>datetime</i>)</td>
    <td><code>hour (timestamp)</code></td>
  </tr>
</table>

All of these keywords sort the data using datetime semantics, that is
chronologically in a time sequence. By default, the **Search** bar suggests
these keywords less frequently than others.

You can use these new keywords in combination with the existing data keywords which are:

* `Detailed`
* `Hourly`
* `Daily`
* `Weekly`
* `Monthly`
* `Quarterly`
* `Yearly`

##  Examples of time series analysis

Typically, when you search for answers about series data, the visualizations
that answer your questions are line charts. These charts frequently but not
always include a stack to indicate a period.

![]({{ site.baseurl }}/images/time-example1.png "Period Analysis Example")

When you search for an aspect of data of time series, a typical response is a
line chart showing the aspect as it rises and falls over time.

![]({{ site.baseurl }}/images/time-example2.png "Period Analysis Example")

You can also add a relative date filter for example,

```
total revenue quarterly yearly by year month(commit date) >= 01/01/1995
month(commit date) before 01/01/1998
```

This type of query also yields a stacked line chart:

![]({{ site.baseurl }}/images/time-example3.png "Period Analysis Example")

The child date time attribute is on the X-axis and the parent in the legend. For
example, if you search `revenue month yearly` the child, `monthly`, appears on
the x-axis and the parent, `yearly`, in the legend.e
