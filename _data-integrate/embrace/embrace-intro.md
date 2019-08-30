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
- **Synced**: Embrace transfers data from Snowflake into ThoughtSpot, and periodically refreshes it.

ThoughtSpot Embrace allows you to directly query an external database and do all your data analysis and create visualizations in ThoughtSpot. Embrace has an intuitive process for synchronizing the external data into ThoughtSpot on a predefined schedule.

After choosing a data connection, you can choose from the database - a list of available tables to setup your live query. Then select only the columns of interest from each table. Primary key and foreign key relationships will also be imported, but only when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too. So you only connect the data you want to explore.

## Key benefits
- Simple and scalable data movement model with focus only on data visualizations.
- Quick setup and faster deployments with seamless DB connections.
- Eliminate the need of moving data into ThoughtSpot for analysis.
- Ease of data management and governance.
- Huge time and cost saving since ETL pipelines are eliminated.

## What's next

-   **[Set up a new connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)**  
Set up and enable the connection between ThoughtSpot and new database connection.
-   **[Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)**  
Edit a connection when you connect to a new data source or edit an existing one.
-   **[Know database connector details]({{ site.baseurl }}/data-integrate/embrace/reference/embrace-connection-credentials.html)**  
Here is a list of all of the source cloud data connectors, and their connection credentials, that are supported in ThoughtSpot Embrace.
-   **[Data sources management]({{ site.baseurl }}/admin/loading/loading-intro.html)**  
After you have successfully loaded your tables, you can check on the status of the load, make edits, and more.
-   **[Data security]({{ site.baseurl }}/admin/architecture/security.html)**  
Understand how to secure your data and other key information in ThoughtSpot.
