---
title: [System worksheets]
keywords: monitor,worksheet
tags: [indexing]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The monitoring information in **System Health** query several underlying worksheets. Administrators can view these worksheets and query them, but they cannot edit them.


## List internal system worksheets

To list these internal worksheets:

1. Go to the **Data** tab.
2. Choose **All** and **All types**.
3. Enter `TS:` in the search bar.

   ![]({{ site.baseurl }}/images/su-worksheets.png)


## About the worksheets
   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
    <tr>
      <th>Worksheet</th>
      <th>Description</th>
    </tr>
    <tr>
      <th>TS: BI Server</th>
      <td>
      Contains data related to the the database underlying the ThoughtSpot server.
      <td>
    </tr>
    <tr>
      <th>TS: Search</th>
      <td>
      
      <td>
    </tr>
    <tr>
      <th>TS: Database</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Table Row Size</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Table Shards</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Table Row Counts</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS; Internal Table Wise Capacity WS</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Table Info</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Table Row Counts and Shards</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Internal Capacity WS</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Service Resources</th>
      <td>
      <td>
    </tr>
    <tr>
      <th>TS: Metrics</th>
      <td>
      <td>
    </tr>
  </table>

modify. The underlying tables are protected system tables that cannot be
accessed directly. However, you can create new monitoring reports from the
worksheets.

The worksheets for system monitoring are:

-   TS: bi server
-   TS: database
-   TS: loader
-   TS: search
-   TS: service resources

Here is a list of the system monitoring pinboards:

* **TS StaTS: Usage** Helps you see how much the system is being used. Shows search and pinboard activity by user and by date. Examples include:
  -   Questions asked by user
  -   Questions asked by date
  -   Pinboard impressions

* **TS StaTS: Suggestions** Helps you monitor the performance statistics for the suggestions provided in the search bar. Shows the number and latency of suggestions given over time. Examples include:
  -   Suggestion volume over time
  -   Suggestion latency over time

- **TS StaTS: Queries** Helps you monitor database performance over time by showing query volume, latency, and any errors.  Examples include:
  -   Query latency by size of response
  -   Average vs. maximum query latency
  -   Database queries and errors

- **TS StaTS: Resource Usage** Helps you monitor cluster resources by showing memory and CPU usage per component:
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


-   TS: BI server
-   TS: database
-   TS: loader
-   TS: search
-   TS: service resources

Here is a list of the system monitoring pinboards:

* **TS StaTS: Usage** Helps you see how much the system is being used. Shows search and pinboard activity by user and by date. Examples include:
  -   Questions asked by user
  -   Questions asked by date
  -   Pinboard impressions

* **TS StaTS: Suggestions** Helps you monitor the performance statistics for the suggestions provided in the search bar. Shows the number and latency of suggestions given over time. Examples include:
  -   Suggestion volume over time
  -   Suggestion latency over time

- **TS StaTS: Queries** Helps you monitor database performance over time by showing query volume, latency, and any errors.  Examples include:
  -   Query latency by size of response
  -   Average vs. maximum query latency
  -   Database queries and errors

- **TS StaTS: Resource Usage** Helps you monitor cluster resources by showing memory and CPU usage per component:
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
