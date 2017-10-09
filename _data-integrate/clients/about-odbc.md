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

## Source and target data compatibility

By default, ThoughtSpot takes a permissive approach to datatype compatibility
between source and target in ODBC. As much as possible ThoughtSpot automatically
converts incoming "compatible" input data to the desired ThoughtSpot target
datatype. At installation time, your customer support engineer can assist you in
configuring a stricter behavior for ODBC.

Following table describes the conversion matrix between SQL datatypes and
ThoughtSpot datatypes.


| Source SQL Datatypes          |BOOL |INT32 |INT64 |DOUBLE |FLOAT | CHAR |DATE |TIME|DATETIME|
|-------------------------------|----|---- |---- |---- |---- | ---- |---- | ----|----|
|`SQL_BIT`                      | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_TINYINT`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_SMALLINT`                 | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_INTEGER`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_BIGINT`                   | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_CHAR`                     | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_VARCHAR`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_LONGVARCHAR`              | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_BINARY`                   |     |      |      |       |      |  Y   |     |      |        |
|`SQL_VARBINARY`                |     |      |      |       |      |  Y   |     |      |        |
|`SQL_LONGVARBINARY`            |     |      |      |       |      |  Y   |     |      |        |
|`SQL_DOUBLE`                   | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_REAL`                     | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_FLOAT`                    | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_NUMERIC`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   |     |      |        |
|`SQL_GUID`                     |     |      |      |       |      |  Y   |     |      |        |
|`SQL_INTERVAL_MINUTE_TO_SECOND`|     |      |      |       |      |  Y   |     |      |        |
|`SQL_INTERVAL_HOUR_TO_SECOND`  |     |      |      |       |      |  Y   |     |      |        |
|`SQL_INTERVAL_HOUR_TO_MINUTE`  |     |      |      |       |      |  Y   |     |      |        |
|`SQL_INTERVAL_DAY_TO_SECOND`   |     |      |      |       |      |  Y   |     |      |        |
|`SQL_INTERVAL_DAY_TO_MINUTE`   |     |      |      |       |      |  Y   |     |      |        |


If a conversion is not possible, an error is returned to the client to indicate
conversion failure.  The ETL tool must add a data transformation step if the
source column data type does not exactly match the target's, ThoughtSpot's,
column data type. The driver does not do any implicit conversions. 
