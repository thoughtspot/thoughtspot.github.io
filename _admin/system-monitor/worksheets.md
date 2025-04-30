---
title: [System Worksheets and Views]
summary: "Learn about the system Worksheets and Views that ThoughtSpot provides."
last_updated: 4/28/2021
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
3. Enter `System User` in the search field.

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
      <td><code class="highlighter-rouge">Credits Purchased</code></td>
      <td>
         Contains data on the number of credits for <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html">consumption-based pricing</a> your cluster has, and their expiration date. Used for the <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html#credit-usage-pinboard">Credit Usage Pinboard</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Sample Retail - Apparel</code></td>
      <td>
         Contains sample retail data for <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist.html">Search Assist</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Credit Usage</code></td>
      <td>
         Tracks the credits for <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html">consumption-based pricing</a> your cluster has consumed. Used for the <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html#credit-usage-pinboard">Credit Usage Pinboard</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Discover Monitoring Data</code></td>
      <td>
         Contains data on how users are searching for existing Answers and Pinboards. Contains information on what users are searching for, where users are successful and where they are not. Used for the <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html#">Stats and Trends for Search on Answers Pinboard</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Product Usage</code></td>
      <td>
         Contains usage data for the product. Specifies what existing Worksheets, tables, and Views users search on and create objects from, and what those objects are. Specifies what actions users complete in the product. You can also use this Worksheet to view the underlying data sources for any objects, and any object’s dependents.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">MetricsMonitoring</code></td>
      <td>
         Contains data on how users are searching for existing Answers and Pinboards. Contains information on what users are searching for, where users are successful and where they are not, based on click count and position. Used for the <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html#">Stats and Trends for Search on Answers Pinboard</a>.
      </td>
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
