---
title: [Troubleshooting Data Integrations]
tags:
keywords: tbd
last_updated: tbd
summary: "Learn how to fix connection issues."
sidebar: mydoc_sidebar
---
This section can help if you're having trouble creating a connection or need to find out more information about what is going on with ODBC or JDBC.

The information contained here is very basic, and mostly about how to enable logs on the client side. If you need more detailed troubleshooting information or help, please contact ThoughtSpot Support.

-   **[Enabling ODBC Logs on Windows](../../data_integration/troubleshooting/troubleshooting_ODBC.html)**  
If you need more information in order to troubleshoot ODBC connections, you can enable logging for ODBC. To do this on Windows, follow these instructions.
-   **[Enabling ODBC Logs on Linux or Solaris](../../data_integration/troubleshooting/enable_ODBC_log_linux.html)**  
If you need more information in order to troubleshoot ODBC connections, you can enable logging for ODBC. To do this on Linux or Solaris, follow these instructions.
-   **[Enabling JDBC Logs](../../data_integration/troubleshooting/JDBC_logging.html)**  
To enable logging for JDBC, add the logging parameters to the connect string. Logs are stored on ThoughtSpot.
-   **[Schema not found error](../../data_integration/troubleshooting/schema_not_found.html)**  
When connecting with ODBC, you need to specify both the database and schema to connect to. If no schema is supplied, you will get an error indicating that the schema could not be found.
-   **[How to improve throughput of the load](../../data_integration/troubleshooting/how_to_improve_throughput_of_the_load.html)**  
The transaction/commit size value can improve the throughput of the load when setting up the ODBC Driver.
