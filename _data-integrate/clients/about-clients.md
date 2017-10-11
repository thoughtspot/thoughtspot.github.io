---
title: [ThoughtSpot Clients]
tags:
keywords: tbd
last_updated: tbd
toc: false
summary: "Clients help you to load data easily from your ETL tool or another database."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot provides certified clients to help you load data easily from your ETL tool or another database. These include ODBC and JDBC drivers.

You can obtain the ThoughtSpot client downloads from the Help Center. Always use the version of the ThoughtSpot clients that corresponds with the version of ThoughtSpot that you are running. When upgrading, make sure to upgrade your clients as well.

{% include important.html content="The ETL tool must add a data transformation step if the source column data type does not exactly match the target's, ThoughtSpot's, column data type. The driver does not do any implicit conversions." %}

## Where to go next

-   **[About the ODBC Driver](/admin/../data_integration/clients/about-odbc.html)**  
You can use the ThoughtSpot ODBC driver to bring data into ThoughtSpot from your ETL tool or database.
-   **[About the JDBC Driver](/admin/../data_integration/clients/about-jdbc-driver.html)**  
 Java Database Connectivity (JDBC) is a Java standard API that allows applications to interact with databases in a standard manner. ThoughtSpot has JDBC support via a JDBC driver we provide.
-   **[About Informatica Connector](/admin/../data_integration/clients/about-informatica.html)**  
You can use the ThoughtSpot Informatica Cloud connector to read and write data between ThoughtSpot and Informatica. The connector supports INSERT, UPSERT, and READ operations. Once the connecter is downloaded, you can enter your company's ThoughtSpot cluster information and conduct data transfers.
