---
title: [Overview board]
keywords: monitor,system
tags: [indexing]
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The **Overview** tab summarizes basic information about how your cluster and who
uses it. Choose **Admin > System Health > Overview** to see this tab.  This
section discusses the pinboards you'll find on this page and what you can learn
from them.

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
pinboard is updated hourly from internal tables that collect monitoring
statistics.  

Each panel has a menu. You can use the menu to do additional actions such as
download the panel's visualization or present information about your ThoughtSpot
cluster. To find out how a particular panel result is calculated, do the
following:

1. Select **Edit** from the panel menu.

   ![]({{ site.baseurl }}/images/panel-data.png "Menu of panel")

   This displays a **Search** bar.

2. Investigate the components of the search as you would normally.

    ![]({{ site.baseurl }}/images/admin-panel-details.png)


The following panels are available.

### Space Utilization

The **Space Utilization** chart is one of the available charts for you to use when
checking the cluster overview. You can find the chart in the **Overview**
section of the System Health center. This line chart displays the total used
space, which consists of raw uncompressed data, including replication.

 ![]({{ site.baseurl }}/images/memory_usage_chart.png "Space Utilization chart example")

The x-axis is by time. It allows you to zoom in and see daily or hourly data.
The y-axis measures the size in GB. So in the **Space Utilization** chart above, the
green line shows the amount of capacity in use in the system, while the red line
shows the total capacity. The increase in the red line at the end of the period
indicates the addition of extra hardware, resulting in increased capacity.

You can use Edit to view the query, which is:

`
day of timestamp
total capacity (gb)
total used space (gb)
daily
last 90 days last 25 hours
total capacity (gb) > 0
total used space (gb) > 0


### Monthly Active Users

Number of users in the system per month. An active user is a user who has logged in at least once in the past month. Month is calculated from the current date.

### Monthly Ad-hoc Searches

Number of ad-hoc searches made per month. An ad-hoc query is a search through the search bar or via or an API call.

### Monthly Pinboard Views


### Top Users Last Month</th>


### Top Pinboards Last Month</th>


### Configuration events


## About deprecated boards
