---
title: [Performance considerations]


last_updated: 07/20/2019
summary: "Make sure you understand the performance considerations in your installation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot configuration and licensing varies by memory availability. Other considerations also impact the performance of your solution. Because some
solutions perform better than others, think about the following issues before implementation.

Each node in a ThoughtSpot cluster performs ideally when it has less than 250GB of data and fewer than 0.25 billion total rows of data. For more complex schemas, we recommend even fewer rows of data per node for optimal performance. To reduce the total amount of data and rows of data, you can
limit the data range to the relevant years or months, or combine long and narrow tables into wider tables when possible.

## Data Boundaries

Total rows in a result of a join can have an impact on perforamence. In general, we recommend that you have fewer than 10 billion rows in a many-to-many join. Also, consider these boundaries:

|Description |Boundary|
|-------------------------|--------------------|
|Maximum number of rows that can be downloaded | 10M (default:  1M) |
|Size in CSV format| 250GB per node|
|Total number of rows across all tables| 250GB per node|
|Many-to-Many (Generic) join cardinality|2.5B per node|
|Load frequency| Once every hour|


## Worksheet Boundaries

Worksheets must have less than 1000 columns. For aggregated worksheets, follow these guidelines:

* Number of columns should be less than 50
* Number of rows should be less than 10 millions

You can use an ETL process to circumvent these limitations. Speak with ThoughtSpot Customer Support to learn more.

### Aggregated Worksheets and Joins

To join an aggregated worksheet with a base table, you must configure your installation to allow this behavior.
* The aggregated worksheet cannot use more than 5 component tables.
* The number of rows in the final aggregated worksheet cannot be greater than 1000.

### Chasm Trap Worksheets

For chasm trap scenarios where two or more fact tables join through a shared dimension, we recommend the following boundaries:

|Description |Boundary|
|-------------------------|--------------------|
|Maximum number of fact tables in a worksheet	|5|
|Maximum number of shared dimensions	|2|
|Maximum number of rows in a _non_ co-sharded shared dimension table of chasm trap	|1B|
|Maximum number of rows in a co-sharded shared dimension table of chasm trap	| 1B |

## Row-level Security Boundaries

Maximum number of unique RLS rules with search data suggestions should not exceed 15K.

## Scheduled Pinboards

For ideal performance of scheduled pinboards, do not exceed 50 scheduled pinboard jobs.
