---
title: [About Runtime Filters]
summary: "Use runtime filters to filter an embedded answer or pinboard."
last_updated: 18/8/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Runtime filters allow you to apply filters to the data returned by the APIs, or the visualizations and pinboard you’re embedding.

## Capabilities of Runtime Filters

Runtime Filters provide the ability to apply filters on embedded objects at the time of retrieval. You can pass the filter criteria as URL query parameters on pinboard or visualizations. ThoughtSpot supports applying runtime filters to objects embedded using the
[Visual Embed SDK]({{ site.baseurl }}/admin/ts-cloud/visual-embed-sdk.html) or the [REST APIs]({{ site.baseurl }}/admin/ts-cloud/about-rest-apis.html).  

This example shows how to define RuntimeFilter parameters when rendering a visualization or pinboard using the Visual Embed SDK. Here, the RuntimeFilter is operating on the `Revenue` column and will return values equal to `100000`.

```
pinboardEmbed.render({
    pinboardId: '133e6c5f-e522-41a0-b0ad-b9c3b066e276',
    vizId: '28b73b4a-1341-4535-ab71-f76b6fe7bf92',
      runtimeFilters: [{
      columnName: 'Revenue',
      operator: EQ,
      values: [ 100000 ]
      }]
  });
```
This example shows the URL to access a pinboard with a filter. Here the Runtime
Filter is operating on the column `Color` and will only return values that are equal (EQ) to "red".

```
http://<your.thoughtspot.com>/?col1=Color&op1=EQ&val1=red#
/pinboard/e36ee65e-64be-436b-a29a-22d8998c4fae
```

This example shows the URL for a REST API call with a filter. Here the Runtime Filter is operating on the column `Category` and returning values that are equal
to `mfgr%2324`.

```
http://<your.thoughtspot.com>/callosum/v1/tspublic/v1/pinboarddata?
id=e36ee65e-64be-436b-a29a-22d8998c4fae&col1=Category
&op1=EQ&val1=mfgr%2324
```

ThoughtSpot will try to find a matching column from the pinboard or
visualization being accessed, using the `col` field as `name`. You can add any
number of filter sets by incrementing the parameters (e.g. `col2`, `op2`, and
`val2`, etc.) For operators that support more than one value you can pass
`val1=foo&val1=bar`, etc.

If the pinboard or answer you're filtering already has one or more filters
applied, the Runtime Filter(s) will act as an `AND` condition. This means that
the data returned must meet the conditions of all filters - those supplied in
the runtime filter, and those included in the pinboard or visualization itself.

## Supported Data Types

You can use runtime filters on these data types:

-   `VARCHAR`
-   `BIGINT`
-   `INT`
-   `FLOAT`
-   `DOUBLE`
-   `BOOLEAN`
-   `DATE`
-   `DATE_TIME`
-   `TIME`

For the `DATE` and `DATE_TIME` data types, you must provide the date and time values in the Epoch time format. The Epoch time is also referred to as POSIX or Unix time. Epoch time is an integer value representing the number of seconds elapsed since 1 JAN 1970 00:00:00 UTC. You may have to convert time zones to calculate the appropriate timestamp.

For example, if you want to filter data for 2020-05-22, you can specify the date value in the Epoch time format as 1590192000, or use the following JavaScript method to calculate the timestamp:

```
new Date('2020-05-22').getTime() / 1000
```

## Example Uses

You can use Runtime Filters alongside the REST API and Embedding to create
dynamic controls in your Web portal. For example, you could use the REST API to
get a list of possible filters for a visualization. Then use that data to
populate a select list on your Web portal. When a user makes a selection, you
would then pass it as a Runtime Filter, and the result returned will apply the
filter.

## Limitations of runtime filters

Runtime Filters do not work directly on top of tables. You must create a
worksheet if you want to use Runtime Filters. This means that the pinboard or
visualization on which you apply a runtime filter must be created on top of a
worksheet.

If the worksheet was created from an answer (it is an aggregated
worksheet), Runtime Filters will only work if the answer was formed using a
single worksheet. If the answer from which the worksheet was created includes
raw tables or joins multiple worksheets, you won't be able to use Runtime
Filters on it. This is because of the join path ambiguity that could result.

Runtime Filters do not allow you to apply “having" filters using a URL.

You cannot apply a Runtime Filter on a pinboard or visualization built on tables
whose schema includes a chasm trap. See the ThoughtSpot Administrator Guide for
details on chasm traps and how ThoughtSpot handles them.
