---
title: [Custom monitoring]
keywords: monitor
tags: [indexing]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

 ![]({{ site.baseurl }}/images/resource_usage_pinboard.png "Example of a system monitoring pinboard")

The monitoring pinboards can only be viewed by users with the administrator
privilege. They are based on worksheets, which administrators can view, but not
modify. The underlying tables are protected system tables that cannot be
accessed directly. However, you can create new monitoring reports from the
worksheets.

The worksheets for system monitoring are:

-   Ts: bi server
-   Ts: database
-   Ts: loader
-   Ts: search
-   Ts: service resources

Here is a list of the system monitoring pinboards:

* **TS Stats: Usage** Helps you see how much the system is being used. Shows search and pinboard activity by user and by date. Examples include:
  -   Questions asked by user
  -   Questions asked by date
  -   Pinboard impressions

* **TS Stats: Suggestions** Helps you monitor the performance statistics for the suggestions provided in the search bar. Shows the number and latency of suggestions given over time. Examples include:
  -   Suggestion volume over time
  -   Suggestion latency over time

- **TS Stats: Queries** Helps you monitor database performance over time by showing query volume, latency, and any errors.  Examples include:
  -   Query latency by size of response
  -   Average vs. maximum query latency
  -   Database queries and errors

- **TS Stats: Resource Usage** Helps you monitor cluster resources by showing memory and CPU usage per component:
  -   Service
  -   Database
  -   Search
  -   Host
  -   Aggregate (all)

  Examples include:

  -   CPU usage per component over time
  -   Memory usage per component over time
  -   Aggregate memory usage over time
-
There are several system monitoring pinboards in ThoughtSpot that include
information about the system status and resource usage. The information in these
pinboard is updated hourly from an internal database that collects monitoring
statistics.

 ![]({{ site.baseurl }}/images/resource_usage_pinboard.png "Example of a system monitoring pinboard")

The monitoring pinboards can only be viewed by users with the administrator
privilege. They are based on worksheets, which administrators can view, but not
modify. The underlying tables are protected system tables that cannot be
accessed directly. However, you can create new monitoring reports from the
worksheets.

The worksheets for system monitoring are:

-   Ts: bi server
-   Ts: database
-   Ts: loader
-   Ts: search
-   Ts: service resources

Here is a list of the system monitoring pinboards:

* **TS Stats: Usage** Helps you see how much the system is being used. Shows search and pinboard activity by user and by date. Examples include:
  -   Questions asked by user
  -   Questions asked by date
  -   Pinboard impressions

* **TS Stats: Suggestions** Helps you monitor the performance statistics for the suggestions provided in the search bar. Shows the number and latency of suggestions given over time. Examples include:
  -   Suggestion volume over time
  -   Suggestion latency over time

- **TS Stats: Queries** Helps you monitor database performance over time by showing query volume, latency, and any errors.  Examples include:
  -   Query latency by size of response
  -   Average vs. maximum query latency
  -   Database queries and errors

- **TS Stats: Resource Usage** Helps you monitor cluster resources by showing memory and CPU usage per component:
  -   Service
  -   Database
  -   Search
  -   Host
  -   Aggregate (all)

  Examples include:

  -   CPU usage per component over time
  -   Memory usage per component over time
  -   Aggregate memory usage over time


## Create your own activity panels

The information on the  System Health page is visible only to administrative
users. You may find it useful to share some of this information with your users.
Or you may want to customize some of this information and share it with your
users. You can do this.

1.
