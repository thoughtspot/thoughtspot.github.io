---
title: [System pinboards]
keywords: monitor,pinboard
tags: [indexing]
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
There are several system monitoring pinboards in ThoughtSpot that include
information about the system status and resource usage. The information in these
pinboard is updated hourly from an internal database that collects monitoring
statistics.

 ![]({{ site.baseurl }}/images/resource_usage_pinboard.png "Example of a system monitoring pinboard")

 The monitoring pinboards can only be viewed by users with the administrator
 privilege. They are based on worksheets, which administrators can view, but not
 modify. However, you can create new monitoring reports from the
 worksheets.

 The monitoring information in **System Health** query several underlying
 worksheets. Administrators can view these worksheets and query them, but they
 cannot edit them.

## List system pinboards

To list these system pinboards:

1. Go to the **Pinboards** tab.
2. Choose **All** and **All types**.
3. Enter `TS ` (don't forget the space) in the search field.

   ![]({{ site.baseurl }}/images/su-pinboards.png)

## Summary of system pinboards

<table>
<colgroup>
   <col style="width:35%" />
   <col style="width:65%" />
</colgroup>
   <tr>
      <th>Pinboard</th>
      <th>Description</th>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">Learn how to use ThoughtSpot</code></td>
      <td>
         Contains search replays created in the system.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: Alert Detail</code></td>
      <td>
         Combines alerts, notification events, and configuration events boards.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: Cluster Detail</code></td>
      <td>
         Contains cluster details, logs, snapshots, and latency data.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: System Information and Usage</code></td>
      <td>
         Replicates the **Admin > System Health > Overview** page.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: Latency Visualizations</code></td>
      <td>
         Latency on servers and <a href="#" data-toggle="tooltip" data-original-title='{{site.data.glossary.impression}}'>impression</a> counts. This data comes from the `TS: BI Server` worksheet.
      </td>
   </tr>
   <tr>
      <td><code class="highlighter-rouge">TS Stats: Table Status</code></td>
      <td>
         Replicates the **Data** board.
      </td>
   </tr>
  </table>


## About deprecated boards

The deprecated boards (`TS status: Usage - Deprecated` and `TS StaTS: Queries --
Deprecated`) are there to support older installations. New installations, should
not use or rely on deprecated boards. Older installations that have used these
boards in some way, should use the new boards and remove any dependencies.
