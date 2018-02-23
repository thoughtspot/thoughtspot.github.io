---
title: [Overview board]
keywords: monitor,system
tags: [indexing]
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The **Overview** tab summarizes basic information about how your cluster and who
uses it. Choose **Admin > System Health > Overview** to see this tab.

![]({{ site.baseurl }}/images/control_center_overview.png "System Health Center: Overview")


## Cluster Summary

This summary includes the import **LAST SNAPSHOT TIME** which shows that regular
snapshots of your cluster are collected. This value should update regularly. If
you do not see it change, you should check your cluster snapshot policy.  

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

This section reports information about tables in your cluster. Worksheet data
is not included.


## Relational Search Engine



## Critical Alerts



## System monitoring pinboards

There are several system monitoring panels in ThoughtSpot that include
information about the system status and resource usage. The information in these
pinboard is updated hourly from an internal database that collects monitoring
statistics.

![]({{ site.baseurl }}/images/panel-data.png "Menu of panel")

From the menu you can download or present information about your ThoughtSpot
cluster. The following tables are available.

<table>
  <tr>
    <th>Space Utilization</th>
    <td></td>
  </tr>
  <tr>
    <th>Monthly Active Users</th>
    <td>Number of users in the system per month. An active user is a user who has logged in at least once in the past month. Month is calculated from the current date.</td>
  </tr>
  <tr>
    <th>Monthly Ad-hoc Searches</th>
    <td>Number of ad-hoc searches made per month. An ad-hoc query is a search through the search bar or via or an API call.</td>
  </tr>
  <tr>
      <th>Monthly Pinboard Views</th>
    <td></td>
  </tr>
  <tr>
      <th>Top Users Last Month</th>
    <td></td>
  </tr>
  <tr>
    <th>Top Pinboards Last Month</th>
    <td></td>
  </tr>
  <tr>
    <th>Configuration events</th>
    <td></td>
  </tr>
</table>
