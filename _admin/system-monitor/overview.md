---
title: [Overview board]
keywords: monitor,system,actions,user,cluster,nodes,version
tags: [indexing]
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The **Overview** tab summarizes basic information about how your cluster and who
uses it. Choose **Admin > System Health > Overview** to see this tab. The tab
is a pinboard with information about the system status and resource usage.

## Understand system boards and pinboards

The **Overview** page includes system charts and standard ThoughtSpot <a
href="#" data-toggle="tooltip"
data-original-title='{{site.data.glossary.pinboard}}'>answers</a>. The system
charts contain information that are system generated in real time and use
internal system data. The other answers rely on underlying system worksheets
which administrators can view. The information in these answers update hourly
from internal tables that collect monitoring statistics.  

Each answer has a menu. You can present or copy the links to the system charts.
The answers have the standard ThoughtSpot answer menu. You can use the menu to
do additional actions such as download the panel's answer or present information
about your ThoughtSpot cluster. You cannot, however, change the underlying
query.

To find out how a particular answer result is calculated, do the following:

1. Select **Edit** from the panel menu.

   ![]({{ site.baseurl }}/images/panel-data.png "Menu of panel")

   This displays a **Search** bar.

2. Investigate the components of the search as you would normally.

    ![]({{ site.baseurl }}/images/admin-panel-details.png)



## Cluster Summary

This has basic information about your cluster.  The **NUMBER OF NODES** is the
number of installed nodes. This doesn't reflect the active nodes which may be
more or less.

This summary includes the import **LAST SNAPSHOT TIME** which shows that regular
snapshots of your cluster are collected. This value should update regularly in
real time. If you do not see it change, you should check your cluster snapshot
policy.  

```
$ tscli snapshot-policy show
schedule {
  period {
    number: 1
    unit: HOUR
  }
  retention_policy {
    bucket {
      time {
        number: 1
        unit: HOUR
      }
      capacity: 3
    }
    bucket {
      time {
        number: 4
        unit: HOUR
      }
      capacity: 2
    }
  }
  offset_minutes_from_sunday_midnight: 0
}
enabled: false
```

You can see this policy is disabled, which is a problem. For your cluster safety
you should enable the default snapshot policy. When you show or enable the
snapshot policy, you'll see your actions reflected in the **Configuration
Events** panel on this same page.

## Relational Data Cache

This section reports real-time information about tables in your cluster.
Worksheet data is not included.

| Value  |  Description |
|---|---|
|  **TABLES LOADED** | Number currently loaded.  |
|  **TABLES BEING UPDATED** | Number of table loads in-progress. |
|  **NEW TABLES BEING LOADED** | Number of tables being loaded for the first time.  |
|  **ROWS** | Number of rows combined across all tables in ThoughtSpot.  |

## Relational Search Engine


| Value  |  Description |
|---|---|
|  **TABLES SEARCHABLE** | ???  |
|  **TABLES BEING INDEXED** | Total of in-progress table indexing. |
|  **NEW TABLES BEING INDEXED** | Total of first-time, in-progress table indexing.  |
|  **TOKENS SEARCHABLE** | Number of <a href="#" data-toggle="tooltip" data-original-title='{{site.data.glossary.token}}'>tokens</a> of all table (combined) indexed in ThoughtSpot. |


## Critical Alerts

Alerts generated in the last ???. This includes when an alert was generated and
from which service and machine.  Unlike the other


## Space Utilization

The **Space Utilization** chart is one of the available charts for you to use
when checking the cluster overview. This line chart displays the total capacity
and estimated used capacity over time.

 ![]({{ site.baseurl }}/images/memory_usage_chart.png "Space Utilization chart example")

The x-axis is by time. It allows you to zoom in and see daily or hourly data.
The y-axis measures the size in GB. So in the **Space Utilization** chart above, the
green line shows the amount of capacity in use in the system, while the red line
shows the total capacity. An increase in the red line at the end of a time period
indicates the addition of extra hardware, resulting in increased capacity.

The query for this answer is the following:


```
day of timestamp
total capacity (gb)
total used space (gb)
daily
last 90 days last 25 hours
total capacity (gb) > 0
total used space (gb) > 0
```

The chart relies on the `TS: Internal Table Wise Capacity WS` worksheet. It
tracks  total used space, which consists of raw uncompressed data, including
replication.

## Monthly Active Users

Number of active users in the system over the last four months. An active user
within a time interval is defined as a user who has logged in at least once in
that time interval, in this case a month. Month is calculated from the current
month.

The query for this answer is the following:

```
monthly
last 4 months this month
active users
user != {null}
```

This query relies on the `TS: BI server` worksheet.

## Monthly Ad-hoc Searches

Number of ad-hoc searches (query) made per month. An ad-hoc query is any change
in a search that results in a new answer (result).  A search result from a
change in the search bar such as adding a new token like a formula or keyword. A
search can also happen through SpotIQ or through another UI/API interaction.

For example,  scenarios considered as ad-hoc search (query):

* User edits tokens in the search bar.
* User opens an existing saved answer and makes changes to tokens in the search bar.
* User opens an existing saved pinboard, edits a context viz and makes change to the search viz search tokens.
* Searches initiated by a `tspublic` API call for data with runtime filters

It is not considered a search (query) if a user opens an existing saved
aggregated worksheet and makes changes to tokens related to its underlying
query.

The query for this pinboard is the following:

```
ad-hoc search
user action = 'answer_pinboard_context' 'answer_saved' 'answer_unsaved'
monthly
last 4 months this month
```

This visualization relies on data from the `TS: BI Server` worksheet.

## Monthly Pinboard Views

Number of times a saved pinboard is opened by a user. These scenarios are
considered viewing a pinboard:

* User opens an existing saved pinboard.
* User opens embed pinboard from a URL.
* Pinboard data is accessed using the `tspublic` API.

These scenarios are not considered pinboard views:

* A user opens SpotIQ tab pinboards.
* A user opens admin tab pinboards.
* The system loads a pinboard on the homepage.
* The system loads a pinboard in the learn page.

The query underlying this answer is:

```
pinboard views
user action = 'pinboard_embed_view' 'pinboard_tspublic_no_runtime_filter' 'pinboard_tspublic_runtime_filter' 'pinboard_view'
monthly
last 4 months this month
```

The query uses the `TS: BI Server` data source.

## Top Users Last Month

This answer shows the top ThoughtSpot users ranked by number of ad-hoc searches
the users performed in the last 30 days. The possible user actions include:

* ???

The query underlying this answer is:

```
top 10
ranked by user actions
user action != 'invalid'
user != {null}
user
last 30 days today
```
The query uses the `TS: BI Server` data source.

## Top Pinboards Last Month

This answer shows the top ThoughtSpot users ranked by number of pinboard actions the user
performed in the last 30 days. The possible user actions include:

* User opens an existing saved pinboard ('pinboard_view').
* User opens embed pinboard from a URL ('pinboard_embed_view' ).
* Pinboard data is accessed using the `tspublic` API ('pinboard_tspublic_no_runtime_filter' or 'pinboard_tspublic_runtime_filter').


The query underlying this answer is:

```
top 10
ranked by pinboard views
user action = 'pinboard_embed_view' 'pinboard_tspublic_no_runtime_filter' 'pinboard_tspublic_runtime_filter' 'pinboard_view'
pinboard != {null}
pinboard
last 30 days today

```
The query uses the `TS: BI Server` data source.

## Configuration Events

This system visualization displays events that changed the configuration of the
system for the last ??? days. The include events initiated from the `tscli`
command and other operations.

## About deprecated boards

There are a number of deprecated boards on this page. They are there to support
older installations that relied on them. New installations, should not user or
rely on deprecated boards. Older installations that have used these boards in
some way, should user the new boards and remove any dependencies.
