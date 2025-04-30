---
title: [How DataFlow works]
last_updated: 06/26/2020
summary: "With DataFlow, you can move data into ThoughtSpot from most databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Follow the steps in this checklist to connect to your data source and establish data load.

| &#10063; | Step 1: Enable DataFlow on the cluster by running `tscli dataflow enable`. Refer to [tscli dataflow commands]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-dataflow).|
| &#10063; | Step 2: Add a connection to the data source|
| &#10063; | Step 3: Select the source table or file |
| &#10063; | Step 4: Specify the sync schedule: hourly, daily, weekly, monthly, or one-time only (does not repeat) |
| &#10063; | Step 5: Map tables or files from the data source to tables in the internal ThoughtSpot database |
| &#10063; | Step 6: Map columns from the data source to columns in the internal ThoughtSpot database |
| &#10063; | Step 7: [Optional] Set sync properties: conditions, sync mode (append or overwrite), additional scripts to run before or after the sync operation, specify additional sync properties |
| &#10063; | Step 8: [Optional] Create table joins |
