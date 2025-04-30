---
title: [System Worksheets and Views]
summary: "Learn about the system Worksheets and Views that ThoughtSpot provides."
last_updated: 10/21/2020
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Most of the monitoring information in ThoughtSpot's system Pinboards comes from system
Worksheets and Views that administrators can view, but not modify. The underlying tables
are protected system tables that you cannot access directly. However,
administrators can create new, custom monitoring reports from the Worksheets and Views.

## List the system Worksheets and Views

To list the system Worksheets and Views:

1. Go to the **Data** tab.
2. Choose **All** and **All types**.
3. Enter `TS: ` in the search field.

## Description of system Worksheets and Views

<table>
<colgroup>
   <col style="width:35%" />
   <col style="width:65%" />
</colgroup>
   <tr>
      <th>Worksheet</th>
      <th>Description</th>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: BI Server</code></td>
      <td>
         Contains data related to the systems associated with underlying the
         ThoughtSpot BI server.  This includes database latency, browser clients, size
         of responses, and more.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: External Table Current Row Count</code></td>
      <td>
         Contains data related to the row count for external tables, or tables loaded through Embrace.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: Rows of un-cached tables for each connection</code></td>
      <td>
         Contains data related to the sum of rows count for each un-cached table in an Embrace connection.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: External Table Stats WS</code></td>
      <td>
         Contains data related to the stats collected for external tables, or tables loaded through Embrace.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: External Table Info</code></td>
      <td>
         Contains data related to external tables, or tables loaded through Embrace.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS: Daily Row Count External Table</code></td>
      <td>
         Contains Embrace data, stored on a daily basis: the number of rows in your external database, and whether each external table is cached or not.
      </td>
   </tr>
</table>
