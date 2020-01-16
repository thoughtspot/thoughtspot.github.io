---
title: [Embrace overview]
last_updated: 10/21/2019
toc: true
summary: "Using Embrace, you can perform live queries on external databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company stores source data externally in data warehouses, you can use ThoughtSpot Embrace to directly query that data and use ThoughtSpot's analysis and visualization features, without moving the data into ThoughtSpot.

Embrace supports the following external databases:
- Snowflake
- Amazon Redshift (*in beta*)

To enable Embrace, contact ThoughtSpot support.

## How it works
You create a connection to the external database, choosing the columns from each table that you want to explore in your live query. Primary key and foreign key relationships are imported along with the primary and foreign key tables. If there are any joins in the tables of your connection, they are also imported. After your connection is complete, it becomes a **linked** data source in ThoughtSpot that allows you to query the external database directly. It’s easy to apply transformations and filter the data also.

## Key benefits
- Set up and deploy ThoughtSpot faster by connecting directly to the external database.
- Eliminate the need to move data into ThoughtSpot for analysis.
- Centralize data management and governance in the external database.
- Save significant time and money by avoiding ETL pipelines.
- Connect to multiple external databases.

### Features in Embrace

The following features are available in Embrace:

- Simple Search
- Complex searches like Versus, Inline Subquerying, Growth
- Search Suggestions for column names
- Search Suggestions for column values
- Headlines at the bottom that summarize tables
- All Chart Types & Configurations
- Table and Column Remapping
- Indexing of table columns

The following features are NOT available in Embrace:

- SpotIQ Instant Insights
- SpotIQ pre-computed insights
- Custom Calendar
- Materialized Views

## Next steps

-   **[Add a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)**  
Create the connection between ThoughtSpot and tables in an external database.
-   **[Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)**  
Edit, remap or delete a connection to tables in an external database.
- **[Connectors reference]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)**  
Source cloud data connectors, and their connection credentials, supported by Embrace.
