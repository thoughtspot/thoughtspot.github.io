---
title: [About the ODBC Driver]
tags:
keywords: tbd
last_updated: tbd
summary: "Use the ODBC driver to bring data in from your ETL tool or database."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot comes packaged with an ODBC (Open Database Connectivity) driver, so that you can transfer data between ThoughtSpot and other databases. Basic knowledge of ODBC data source administration is helpful when setting up ODBC.

Supported operating systems for the ODBC driver are:

-   Microsoft Windows 32-bit
-   Microsoft Windows 64-bit
-   Linux 32-bit
-   Linux 64-bit
-   Solaris Sparc 32-bit
-   Solaris Sparc 64-bit

## Version Compatibility

To ensure compatibility, always use the ODBC driver with the same version number as the ThoughtSpot instance to which you are connecting.

## Supported Data Types

The ODBC driver supports these data types:

-   INT
-   BIGINT
-   BOOLEAN
-   DOUBLE
-   FLOAT
-   DATE
-   TIME
-   TIMESTAMP
-   DATETIME
-   CHAR
-   VARCHAR

**Important:** The ETL tool must add a data transformation step if the source column data type does not exactly match the target's, ThoughtSpot's, column data type. The driver does not do any implicit conversions.

-   **[Install the ODBC Driver on Windows](../../data_integration/clients/install_odbc_windows.html)**  
Use this procedure to obtain the Microsoft Windows ODBC driver and install it.
-   **[Install the ODBC Driver on Linux](../../data_integration/clients/install_odbc_linux.html)**  
Use this procedure to obtain the Linux ODBC driver and install it.
-   **[Install the ODBC Driver on Solaris](../../data_integration/clients/install_odbc_solaris.html)**  
Use this procedure to obtain the Solaris ODBC driver and install it.
-   **[Best Practices for Using ODBC](../../data_integration/clients/odbc_best_practices.html)**  
To successfully use ODBC, following these best practices is recommended.
