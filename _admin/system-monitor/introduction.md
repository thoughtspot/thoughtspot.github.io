---
title: [Introduction to monitoring]
summary: "Learn how to monitor your system."
last_updated: 10/22/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
System monitoring tools in ThoughtSpot include several Pinboards in the **Admin Console** and system logs. Additionally, ThoughtSpot provides several worksheets and
out-of-the-box system monitoring pinboards. From these worksheets, you can
create your own custom visualizations and pinboards.  This page introduces these features and directs you towards more detailed information.

## Admin Console

The ThoughtSpot application includes an **Admin Console** center, where you can easily monitor usage, alerts, events and general cluster health. Navigate to the Admin Console by selecting **Admin** from the top navigation bar.

Only users with administrative privileges can view the **Admin Console**.
However, administrative users can present the information in the **Admin Console** to others

Administrators can also create their own, custom boards that reflect system data
in ways that are meaningful to specific departments or groups. For more
information, see the following documentation:

* [Data board]({{ site.baseurl }}/admin/system-monitor/data.html)
* [Cluster Manager board]({{ site.baseurl }}/admin/system-monitor/cluster-manager.html)
* [Alerts and Events board]({{ site.baseurl }}/admin/system-monitor/cluster-manager.html)
* [System worksheets]({{ site.baseurl }}/admin/system-monitor/worksheets.html)
* [System pinboards]({{ site.baseurl }}/admin/system-monitor/monitor-pinboards.html)
* [Falcon monitoring Pinboards]({{ site.baseurl }}/admin/system-monitor/falcon-monitor.html)
* [Performance Tracking Pinboard]({{ site.baseurl }}/admin/system-monitor/performance-tracking.html)

Much of the data presented by these boards is also available through [`tscli` commands]({{ site.baseurl }}/reference/tscli-command-ref.html).

## Log files

Many of the administration commands output logging information to log files. The
logs get written into the fixed directory `/export/logs`, with a sub-directory for
each subsystem. The individual log directories are the following:

- `/export/logs/orion`
- `/export/logs/oreo`
- `/export/logs/hadoop`
- `/export/logs/zookeeper`

You can also view [additional topics that also touch on [log files]({{site.baseurl}}/tags/tag_logs.html) throughout the documentation.

## System monitoring notifications

You can configure ThoughtSpot to send emails to addresses you specify with
monitoring reports and a cluster heartbeat. Follow these steps to [Set up monitoring]({{ site.baseurl }}/admin/setup/set-up-monitoring.html#).
