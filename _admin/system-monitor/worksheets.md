---
title: [System worksheets]
keywords: monitor,worksheet
tags: [indexing]
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The monitoring information in **System Health** query several underlying
worksheets. They are based on worksheets, which administrators can view, but not
modify. The underlying tables are protected system tables that cannot be
accessed directly. However, you can create new monitoring reports from the
worksheets.

## List system worksheets

To list these system worksheets:

1. Go to the **Data** tab.
2. Choose **All** and **All types**.
3. Enter `TS ` (don't forget the space) in the search field.

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
      Contains data related to the systems associated with underlying the
  ThoughtSpot BI server.  This includes database latency, browser clients, size
  of responses, and more.
      </td>
    </tr>
    <tr>
      <th>TS: Search</th>
      <td>
      Contains data related to the number of queries run in the system. This contains
information such as uptime, host, and timestamps.
      </td>
    </tr>
    <tr>
      <th>TS: Database</th>
      <td>
      Contains information related to the database cache and queries run on the database. For example, you could use this worksheet to see data on the query errors returned by the database.
      </td>
    </tr>
    <tr>
      <th>TS: Table Row Size</th>
      <td>
      
      </td>
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
