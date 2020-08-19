---
title: [Falcon monitoring Pinboards]
last_updated: 8/19/2020
summary: "Use the Falcon monitoring system Pinboards for an overview of Falcon, ThoughtSpot's in-memory database, and its health, based on query, data load, and varz metrics."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
In ThoughtSpot release 6.2, there are 4 new Pinboards, based on Falcon metrics, that are available to system administrators.

Falcon is ThoughtSpot's in-memory database. Falcon monitoring functionality pushes different kinds of metrics to Falcon system tables every fifteen minutes. These system tables, when updated, update the 4 new Pinboards that you can use to monitor Falcon's health. You can see these Pinboards from the **Pinboards** page, by searching for **Falcon**:

![Falcon Pinboards on the Pinboards page]({{ site.baseurl }}/images/falcon-pinboards.png "Falcon Pinboards on the Pinboards page")

The 4 new database monitoring Pinboards are: [Falcon_360_Overview](#falcon_360_overview), [Falcon_Query_360_Overview](#falcon_query_360_overview), [Falcon_Dataload_360_Overview](#falcon_dataload_360_overview), and [Falcon_Varz_360_Overview](#falcon_varz_360_overview).

You can use these Pinboards for proactive monitoring, or, with help from [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html), for debugging.

{: id="falcon_360_overview"}
## Falcon_360_Overview
This Pinboard provides basic information regarding Falcon's performance and health. Visualizations include **Interactive query latency(sec) percentiles last 24 hours**, **Dataload : Avg Ingestion Speed (# Rows Ingested / Load Time) Per Hour - Last 72 Hours**, **CPU Utilization (System, Idle, User) - Last 72 Hours**, **Dataload Frequency By Hour Of Day (Aggregated over 7 days)**, **Top 10 frequently changed pinboard vizes**, and so on.

![Falcon_360_Overview Pinboard]({{ site.baseurl }}/images/falcon-360-pinboard.png "Falcon_360_Overview Pinboard")

{: id="falcon_query_360_overview"}
## Falcon_Query_360_Overview
This Pinboard provides information about Falcon query execution based on traces. Visualizations include **Interactive query latency(sec) percentiles last 24 hours**, **Average duration(sec) by request source last 72 hours**, **Median latency(sec) by hour of the day last 7 days**, **Count of trace ids by error status last 72 hours**, **Max JIT compilation time(sec) last 72 hours**, **Top 10 vizs based on avg duration(sec)**, and so on.

![Falcon_Query_360_Overview Pinboard]({{ site.baseurl }}/images/falcon-query-360-pinboard.png "Falcon_Query_360_Overview Pinboard")


{: id="falcon_dataload_360_overview"}
## Falcon_Dataload_360_Overview
This Pinboard provides information about Falcon data loads based on traces. Visualizations include **Failed Dataloads**, **Tables With Most Frequent Inserts/Upserts**, **Table Growth (# Rows) Over Time**, **Load Frequency By Hour Of Day (Aggregated in a time window)**, **Slowest Loads & Corresponding Region Load Time Skew**, **Loads With Highest Compaction Overhead (# Rows)** and so on.

![Falcon_Dataload_360_Overview Pinboard]({{ site.baseurl }}/images/falcon-dataload-360-pinboard.png "Falcon_Dataload_360_Overview Pinboard")

{: id="falcon_varz_360_overview"}
## Falcon_Varz_360_Overview
This Pinboard provides information about Falcon services based on metrics in VarZ format. Visualizations include **Falcon Worker Execution Metrics**, **Falcon Query Runtime (Average and Max)**, **Falcon Worker Memory Manager**, **Daily Data Load Statistics**, **Falcon Compiler Cache Daily Usage**, and so on.

![Falcon_Varz_360_Overview Pinboard]({{ site.baseurl }}/images/falcon-varz-360-pinboard.png "Falcon_Varz_360_Overview Pinboard")
