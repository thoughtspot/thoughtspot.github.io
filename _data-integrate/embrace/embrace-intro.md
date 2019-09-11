---
title: [Embrace overview]
keywords: live query, external database, connectors
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company stores source data externally in data warehouses, you can use ThoughtSpot Embrace to directly query that data and use ThoughtSpot's analysis and visualization features, without moving the data into ThoughtSpot. If you decide later you want to copy your data into ThoughtSpot, you can also do that with Embrace.

{% include note.html content="ThoughtSpot Embrace is in beta, and only works with Snowflake databases at this time. To enable Embrace, contact ThoughtSpot support." %}

## How it works
You create a connection to a Snowflake database, choosing the columns from each table that you want to explore in your live query. Primary key and foreign key relationships are imported along with the primary key and foreign key tables. If there are any joins in the tables of your connection, they are also imported. After your connection is complete, it becomes a data source in ThoughtSpot that allows you to query the Snowflake database directly. It’s easy to apply transformations and filter the data also.

## Key benefits
- Set up and deploy ThoughtSpot faster by connecting directly to a Snowflake database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in Snowflake.
- Save significant time and money by avoiding ETL pipelines.
- Set up and schedule sync of data into ThoughtSpot.

## Embrace modes

Embrace has two operating modes:
- **Linked**: ThoughtSpot queries your data in the external Snowflake database.
- **Synced**: ThoughtSpot queries a copy of your data stored in ThoughtSpot.

When you create your connection to a Snowflake database, by default, it is a **Linked** connection. If you want to copy the external data into ThoughtSpot, you must sync the data. The features available with Linked and Synced tables are slightly different.

### Features in Embrace modes

| Feature |  Linked Tables | Synced Tables |
|---|---|---|
| *Simple Search* | Yes | Yes |
| *Complex searches like Versus, Inline Subquerying, Growth* | Yes | Yes |
| *Search Suggestions for column names* | Yes | Yes |
| *Search Suggestions for column values* | No | Yes |
| *Headlines at the bottom that summarize tables* | Yes | Yes |
| *All Chart Types & Configurations* | Yes | Yes |
| *SpotIQ Instant Insights* | Yes | Yes |
| *SpotIQ pre-computed insights* | No | Yes |
| *Table & Column Remapping* | No | No |
| *Custom Calendar* | No | Yes |
| *Hot & Cold Data* | No | N/A |
| *Pass Through Security* | No | N/A |
| *Sync using ODBC / JDBC driver of target database* | Yes | N/A |
| *Sync using Bulk Loading capability of target database for faster syncing* | No | N/A |

## Next steps

-   **[Add a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)**  
Create the connection between ThoughtSpot and tables in a Snowflake database.
- **[Sync]({{ site.baseurl }}/data-integrate/embrace/embrace-sync.html)**
Set your connection to copy tables from Snowflake into ThoughtSpot.
-   **[Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)**  
Edit, remap or delete a connection to tables in a Snowflake database.
- **[Know database connector details]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)**  
Source cloud data connectors, and their connection credentials, supported by Embrace.
