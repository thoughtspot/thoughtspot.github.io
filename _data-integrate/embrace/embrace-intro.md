---
title: [Overview]
keywords: live query, external database, connectors
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Many organizations use data lakes deployed either as an on-premise setup or a cloud-based solution for data management. Data flows within the data lake are sourced from different data repositories that may have security implications due to the strict data governance policies. Moving data to ThoughtSpot also adds a significant time for the setup to complete, and increases the overall time for deployment to analysis. In addition, ETL pipeline setup and maintenance also require considerable cost and efforts before you bring the data into ThoughtSpot system.

## About ThoughtSpot Embrace

ThoughtSpot Embrace is an exciting new capability that allows you to perform live query to the external databases for analysis,  without having to cache the data in ThoughtSpot. Using Embrace, you can read directly from the external databases and do all your data analysis and create  visualizations in the ThoughtSpot application. This data can be refreshed from the underlying database at any time. Database connections are stored to make reconnecting seamless.

After choosing a data connection, you can choose from the database - a list of available tables to setup your live query. Then select only the columns of interest from each table. Primary key and foreign key relationships will also be imported, but only when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too. So you only connect the data you want to explore.

{% include note.html content="Please contact your ThoughtSpot representative, if you want to find out how to enable ThoughtSpot Embrace." %}

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
