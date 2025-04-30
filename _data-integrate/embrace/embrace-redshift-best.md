---
title: [Best practices for Embrace with Redshift]
last_updated: 05/26/2020
summary: "You can connect to Redshift using ThoughtSpot Embrace, and start searching your data. This article contains helpful pointers on data modeling."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Configuring your ThoughtSpot server

We recommend configuring the following settings when creating Embrace connections:
- Turn on ‘Search on Enter’ to reduce the number of queries run against Redshift.
- Turn off ‘Auto Indexing’, and manually set the Index Type on columns that would be helpful when searching.

[Contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to do this configuration.

## Optimizing query performance

User experience in ThoughtSpot Embrace is strongly impacted by the performance of queries in the underlying database. Redshift is a columnar MPP database built for analytic workloads, and proper tuning can have a significant impact on query performance.

You should always follow AWS best practices to optimize query performance. For details, see
[Tuning query performance](https://docs.aws.amazon.com/redshift/latest/dg/c-optimizing-query-performance.html){:target="_blank"} in Amazon's Redshift documentation.

## Workload management and monitoring

We recommend that you implement workload management (WLM) within Redshift to prioritize queries appropriately.
For more information, refer to the following links in Amazon's Redshift documentation:
- Implementation: [Implementing workload management](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-implementing-workload-management.html){:target="_blank"}
- Workload and performance data: [System monitoring tables](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics){:target="_blank"}

## Concurrency scaling

ThoughtSpot may generate large numbers of concurrent queries. Redshift’s concurrency scaling feature can be enabled to provide consistent query performance during periods of high activity.

For details, see [Working with concurrency scaling](https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html){:target="_blank"} in Amazon's Redshift documentation.

## Data modeling

In Redshift, query performance can be improved significantly using Sort and Distribution keys on large tables. Selecting an optimized compression type can also have a big impact on query performance.

These and other important topics are covered in [Amazon Redshift best practices for table design](https://docs.aws.amazon.com/redshift/latest/dg/c_designing-tables-best-practices.html){:target="_blank"} in Amazon's Redshift documentation.

## Materialized views

Redshift now supports materialized views, and it is recommended to create a materialized view and use it in place of any complex views or poor performing table joins.

For details, see [Creating materialized views in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/materialized-view-overview.html){:target="_blank"} in Amazon's Redshift documentation.

## Defining joins between tables

To search more than one table at the same time in ThoughtSpot, you must define joins between these tables by specifying the columns that contain matching data across two tables. These columns represent the ‘primary key’ and ‘foreign key’ of the join. You can define them in either Redshift or ThoughtSpot.

For details on the syntax for defining primary and foreign keys in Redshift, see [ALTER TABLE](https://docs.aws.amazon.com/redshift/latest/dg/r_ALTER_TABLE.html){:target="_blank"} in Amazon's Redshift documentation.

For details on defining joins in ThoughtSpot, see [Join a table or view to another data source]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html).
