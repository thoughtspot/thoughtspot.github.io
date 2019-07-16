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

All other BI tools have the capability to read directly from external databases. Thoughtspot is the only major BI tool that doesn’t have this capability.

Many organizations have data lakes deployed either as an on-premise setup or a cloud-based solution. Data flows within the data lake are sourced from different data repositories that may have security implications due to the strict data governance policies. Moving data to ThoughtSpot also adds a significant time for the setup to complete, and increases the overall time for deployment to analysis. In addition, ETL pipeline setup and maintenance also require considerable cost and efforts before you bring the data into ThoughtSpot system.

ThoughtSpot Embrace is an exciting new capability that allows you to perform live query to the external databases for analysis,  without having to cache the data in ThoughtSpot. Using Embrace, you can read directly from the external databases and do all your data analysis and visualizations in the ThoughtSpot application. This data can be refreshed from the underlying database at any time.

{% include note.html content="Please contact your ThoughtSpot representative, if you want to find out how to enable ThoughtSpot Embrace." %}

ThoughtSpot Data Connect was developed by ThoughtSpot, but it uses Informatica's REST APIs to connect to multiple end points, define import tasks and execute them. You can use ThoughtSpot Data Connect to perform extract, transform, and load operations. Data source connections may be stored, to make reconnecting seamless.

After choosing a data source, you can choose from the list of available tables to import. Then select only the columns of interest from each table. Primary key and foreign key relationships will also be imported, but only when the primary key table is imported at the same time as the foreign key table. It’s easy to apply transformations and filters to the data, too. So you only import the data you want to explore. You can schedule incremental or full recurring data loads. Everything you need to do to get your data loaded can be done within the ThoughtSpot application.



## Where to go next

-   **[Before using ThoughtSpot Data Connect]({{ site.baseurl }}/data-connect/setup/before-using-data-connect.html)**  
There are a few prerequisites before using ThoughtSpot Data Connect. You must enable the connection beteween ThoughtSpot and Informatica, and enter the data connection credentials.
-   **[Set up ThoughtSpot Data Connect]({{ site.baseurl }}/data-connect/setup/settingup-etl.html)**  
The ThoughtSpot team will assist you in the initial setup and configuration of ThoughtSpot Data Connect. You must provide the credentials for logging in to the various data sources you want to connect to.
-   **[Add a new data source]({{ site.baseurl }}/data-connect/setup/adding-data-source.html)**  
Now that you've enabled ThoughtSpot Data Connect, you will be able to add a new data source. Data sources are the source systems from which you want to import data and schedule repeat data loads.
-   **[Data sources management]({{ site.baseurl }}/data-connect/setup/data-sources-management.html)**  
After you have successfully loaded your tables, you can check on the status of the load, make edits, and more.
