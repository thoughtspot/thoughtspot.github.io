---
title: [Monitoring Tools]
keywords: monitor,logs,health,node,cluster,performance
tags: [indexing]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
System monitoring tools in ThoughtSpot includes a **Admin > System Health** page
as well as system log files. Additionally, ThoughtSpot provides several
worksheets from which were created out-of-the-box system monitoring pinboards.
You can also create your own custom pinboards from these same worksheets.  

## System Health Center

The ThoughtSpot application includes a System Health Center, for easy monitoring
of usage and cluster health, including alerts. You can view the System Health
Center by clicking on the **Admin** icon and then clicking **System Health**.

![]({{ site.baseurl }}/images/control_center_overview.png "System Health Center: Overview")

The System Health center can only be viewed by administrative users.


## Log files

Many of the administration commands output logging information to log files. The
logs get written into the fixed directory `/export/logs`, with a sub-directory for
each subsystem. The individual log directories are:

- `/export/logs/orion`
- `/export/logs/oreo`
- `/export/logs/hadoop`
- `/export/logs/zookeeper`

## System monitoring notifications

You can configure ThoughtSpot to send emails to addresses you specify with
monitoring reports and a cluster heartbeat. Follow these steps to [Set up
monitoring]({{ site.baseurl }}/admin/setup/set-up-monitoring.html#).
