---
title: [Introduction to Embrace]
keywords: live query, external database, connectors
last_updated: tbd
toc: false
summary: "ThoughtSpot Embrace is an exciting new capability that allows you to perform live query to the external databases for analysis,  without having to cache the data in ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include note.html content="UNDER CONSTRUCTION." %}


Many organizations have data lakes deployed either as an on-premise setup or a cloud-based solution. Data flows within the data lake are sourced from different data repositories that may have security implications due to the strict data governance policies. Moving data to ThoughtSpot also adds a significant time for the setup to complete, and increases the overall time for deployment to analysis. In addition, ETL pipeline setup and maintenance also require considerable cost and efforts before you bring the data into ThoughtSpot system.

ThoughtSpot Embrace is an exciting new capability that allows you to perform live query to the external databases for analysis,  without having to cache the data in ThoughtSpot. Using Embrace, you can read directly from the external databases and do all your data analysis and visualizations in the ThoughtSpot application. This data can be refreshed from the underlying database at any time. Database connections are stored to make reconnecting seamless.

{% include note.html content="Please contact your ThoughtSpot representative, if you want to find out how to enable ThoughtSpot Embrace." %}

After choosing a data connection, you can choose from the data source, list of available tables to setup your live query. Then select only the columns of interest from each table. Primary key and foreign key relationships will also be imported, but only when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too. So you only connect the data you want to explore.



## Where to go next

-   **[Set up a new connection]({{ site.baseurl }}/embrace/getting-started/setup-a-new-connection.html)**  
Set up and enable the connection between ThoughtSpot and new data connection, and enter the data connection credentials.
-   **[Modify a connection]({{ site.baseurl }}/embrace/getting-started/modify-a-new-connection.html)**  
Edit a connection when you connect to a new data source or edit an existing one.
-   **[Know database connector details]({{ site.baseurl }}/embrace/reference/embrace-connection-credentials.html)**  
Here is a list of all of the source data connectors, and their connection credentials, that are supported in ThoughtSpot Embrace.
-   **[Data sources management]({{ site.baseurl }}/data-connect/setup/data-sources-management.html)**  
After you have successfully loaded your tables, you can check on the status of the load, make edits, and more.
