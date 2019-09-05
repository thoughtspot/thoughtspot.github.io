---
title: [Introduction to Embrace]
keywords: live query, external database, connectors
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot Embrace is in Beta, and works only with Snowflake databases. To enable ThoughtSpot Embrace, contact your ThoughtSpot representative.

Source data exists in data warehouses in many organizations.These warehouses have strict security rules, and these companies prefer to keep the data in one place. In these circumstances, Embrace leverages all ThoughtSpot analytical capabilities directly on the external database, without moving the data. And it makes it easy to bring this data into ThoughtSpot at any time.

## About Embrace

Embrace has two primary operating modes:
- **Linked**: queries from ThoughtSpot run directly on the external Snowflake database.
- **Synced**: data transfers from Snowflake into ThoughtSpot, and is periodically refreshed.

ThoughtSpot Embrace allows you to directly query an external database and do all your data analysis and create visualizations in ThoughtSpot. Embrace has an intuitive process for synchronizing the external data into ThoughtSpot on a predefined schedule.

After choosing a data connection, you can choose from the database - a list of available tables to setup your live query. Then select only the columns of interest from each table. Primary key and foreign key relationships will also be imported, but only when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too. So you only connect the data you want to explore.

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
