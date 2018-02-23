---
title: [Monitoring Tools]
keywords: monitor,logs
tags: [indexing]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
System monitoring tools in ThoughtSpot include the System Health, system log
files, and out-of-the-box system monitoring pinboards.

## System Health Center

The ThoughtSpot application includes a System Health Center, for easy monitoring
of usage and cluster health, including alerts. You can view the System Health
Center by clicking on the **Admin** icon and then clicking **System Health**.

 ![]({{ site.baseurl }}/images/control_center_show.png "Getting to the System Health Center")


## Log files

Many of the administration commands output logging information to log files. The logs get written into the fixed directory /export/logs, with a sub-directory for each subsystem. The individual log directories are:

-   `/export/logs/orion`
-   `/export/logs/oreo`
-   `/export/logs/hadoop`
-   `/export/logs/zookeeper`

## System monitoring notifications

You can configure ThoughtSpot to send emails to addresses you specify with monitoring reports and a cluster heartbeat. Follow these steps to [Set up monitoring]({{ site.baseurl }}/admin/setup/set-up-monitoring.html#).
