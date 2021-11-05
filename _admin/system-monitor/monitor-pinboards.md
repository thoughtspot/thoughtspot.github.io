---
title: [System Liveboards]
summary: "ThoughtSpot provides several Liveboards that help with system monitoring."
last_updated: 11/04/2021
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
There are several system monitoring Liveboards in ThoughtSpot that provide
answers for system status and resource usage questions. The information in these Liveboards are updated hourly from internal data sources that collect monitoring statistics.

Only users with administrative privilege can view the monitoring Liveboards. They are based on [system worksheets and views]({{ site.baseurl }}/admin/system-monitor/worksheets.html), which administrators can view, but not modify. However, you can create new monitoring Liveboards from these Worksheets and Views.

## View the system Liveboards

To view these system Liveboards:

1. Go to the **Liveboards** tab.
2. Choose **All**.
3. Enter `System User` in the search field, or search for the Liveboard you would like to view. You can also view the User Adoption Liveboard and Performance Tracking Liveboard in the Admin Console.

## Description of system Liveboards

<table>
<colgroup>
   <col style="width:35%" />
   <col style="width:65%" />
</colgroup>
   <tr>
      <th>Liveboard</th>
      <th>Description</th>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Learn how to use ThoughtSpot</code></td>
      <td>
         Contains search replays created in the system. This Liveboard is not available with the <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html">new Answer experience</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: Latency Visualizations</code></td>
      <td>
         Latency on servers and <a href="#" data-toggle="tooltip" data-original-title='{% for entry in site.data.glossary.entries %}{% if entry.word == "impression" %}{{ entry.definition }}{% endif %}{% endfor %}
'>impression</a> counts. This data comes from the <code>TS: BI Server</code> worksheet.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Connections Liveboard</code></td>
      <td>
         Contains information on your connections: monthly and daily row count, query count, and query performance.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">User Adoption</code></td>
      <td>
         Contains information on how your ThoughtSpot users are interacting with ThoughtSpot, and how your user adoption is changing over time. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Liveboard</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Object Usage</code></td>
      <td>
         Contains information on how your ThoughtSpot users are interacting with ThoughtSpot objects such as worksheets, tables, and views. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/object-usage.html">Object Usage Liveboard</a>.
      </td>
   </tr>

   <tr>
      <td><code class="highlighter-rouge">Performance Tracking</code></td>
      <td>
         Contains information on how your ThoughtSpot cluster is performing. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Liveboard</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Credit Usage Liveboard</code></td>
      <td>
         Tracks credit consumption for consumption-based pricing. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html#credit-usage-pinboard">Consumption-based pricing</a>.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">How Users are Searching Answers</code></td>
      <td>
      Describes how users are searching for existing answers and Liveboards. Contains information on what users are searching for, where users are successful and where they are not. Refer to <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html#">How Users are Searching Answers</a>.
      </td>
   </tr>
  </table>
