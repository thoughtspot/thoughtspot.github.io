---
title: [Embrace overview]
keywords: live query, external database, connectors
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company stores source data externally in data warehouses, you can use Embrace to directly query that data and use ThoughtSpot's analytical capabilities, without moving the data into ThoughtSpot. If you decide later you want to bring the data into ThoughtSpot, you can also do that with Embrace.

{% include note.html content="ThoughtSpot Embrace is in beta, and only works with Snowflake databases at this time. To enable Embrace, contact ThoughtSpot support." %}

## About Embrace

Embrace allows you to directly query an external database, and do your data analysis and visualizations in ThoughtSpot. With Embrace, you can also copy the external data into ThoughtSpot using sync.

Embrace has two primary operating modes:
- **Linked**: queries from ThoughtSpot run directly on the external Snowflake database.
- **Synced**: data transfers from Snowflake into ThoughtSpot, and is periodically refreshed.

After creating a connection to a Snowflake database, you choose tables to set up your live query, and then select only the columns you want to explore from each table. Primary key and foreign key relationships are imported when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too.

## Key benefits
- Quick setup and faster deployments of ThoughtSpot by connecting directly to a Snowflake.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralized data management and governance in Snowflake.
- Significant time and cost savings by avoiding ETL pipelines.
- In cases where data must be transferred into ThoughtSpot, Embrace provides easy setup and scheduling capabilities.

## Features available in Embrace modes

| Feature |  Synced Tables | Linked Tables |
|---|---|---|
| *Simple Search* | Yes | Yes |
| *Complex searches like Versus, Inline Subquerying, Growth* | Yes | Yes |
| *Search Suggestions for column names* | Yes | Yes |
| *Search Suggestions for column values* | Yes | No |
| *Headlines at the bottom that summarize tables* | Yes | Yes |
| *All Chart Types & Configurations* | Yes | Yes |
| *SpotIQ Instant Insights* | Yes | Yes |
| *SpotIQ pre-computed insights* | Yes | No |
| *Table & Column Remapping* | No | No |
| *Custom Calendar* | Yes | No |
| *Hot & Cold Data* | N/A | No |
| *Pass Through Security* | N/A | No |
| *Sync using ODBC / JDBC driver of target database* | N/A | Yes |
| *Sync using Bulk Loading capability of target database for faster syncing* | N/A | No |

## What's next

-   **[Set up a new connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)**  
Set up and enable the connection between ThoughtSpot and new database connection.
-   **[Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)**  
Edit a connection when you connect to a new data source or edit an existing one.
- Edit a linked table
-   **[Know database connector details]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)**  
Here is a list of all of the source cloud data connectors, and their connection credentials, that are supported in ThoughtSpot Embrace.
- Synchronize
