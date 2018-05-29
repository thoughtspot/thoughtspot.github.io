---
title: [Overview of the ODBC Driver]
keywords: connection,ODBC,secure,version
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

## Version compatibility and connection parameters

To ensure compatibility, always use the ODBC driver with the same version number
as the ThoughtSpot instance to which you are connecting. You can make a secure
ODBC connection to the ThoughtSpot database by configuring a user and password
combination with the driver.  For detailed information about connection parameters, see the [ODBC and JDBC configuration properties]({{ site.baseurl }}/data-integrate/reference/simba-settings.html#)

## Supported Data Types

The ODBC driver supports these data types:

-   `INT`
-   `BIGINT`
-   `BOOLEAN`
-   `DOUBLE`
-   `FLOAT`
-   `DATE`
-   `TIME`
-   `TIMESTAMP`
-   `DATETIME`
-   `CHAR`
-   `VARCHAR`

## Source and target data compatibility

By default, ThoughtSpot takes a "most likely" approach to datatype compatibility
between source and target in ODBC. As much as possible ThoughtSpot automatically
infers the incoming "compatible" input data  and converts it to the most likely
ThoughtSpot target datatype.

By default, we just take the source data as is, and write to the target column "assuming" it's compatible. There's no inferring or anything that happens here. It's the user's responsibility to ensure that the incoming data is EXACTLY in the same format as the target able. e.g. you MUST have source datatype as INT if the target ThoughtSpot datatype is INT. If the source has

Alternatively, you can require that ThoughtSpot match the source data type
exactly and, if it can't find a match, it returns an error and the data load
fails. By mixing both types, you can configure along a scale of behavior between
the permissiveness of the automatic approach and the strictness of "must match"
approach.

<table>
  <tr style="background-color:white;">
    <th colspan="2" rowspan="2"></th>
    <th colspan="2" style="background-color:white;">Strictness</th>
  </tr>
  <tr style="background-color:white;border-bottom:1pt solid black;">
    <td>true</td>
    <td>false</td>
  </tr>
  <tr style="background-color:white;">
    <th rowspan="2" style="valign:middle;background-color:white;"><div class="vert">Permissiveness</div></th>
    <td>true</td>
    <td>Data types are inferred and automatically converted. ThoughtSpot returns an error in cases where the data conversion is not possible. Data load fails in its entirety if any data contains mismatches. You must correct the problem in the source data and try the load again.</td>
    <td>Data types are inferred and automatically converted. No error is thrown even if source and target data types don’t match. Data load continues even when the source and target data types don’t match. This means your data load may contain data types that you do not intend or that are not helpful.  You are responsible for checking and validating the data in this case.</td>
  </tr>
  <tr>
    <td>false</td>
    <td>The source and target data types must match. If any data contains mismatches, ThoughtSpot returns an error to the client a data load fails in its entirety. You must correct the problem in the source data and try the load again.<br><br>This is the strictest configuration.</td>
    <td>No data types are inferred and conversion does not check for matches. This is the most permissive configuration.</td>
  </tr>
</table>

<p>Your customer support engineer who can assist you in configuring the ODBC
behavior that suits you best. Regardless of which configuration you choose, you
should validate that the results of data loading _as they appear in_ ThoughtSpot
are what you desire.</p>


## Data type conversion matrix

<p>Following table describes the conversion matrix between SQL datatypes and
ThoughtSpot datatypes.</p>


| Source SQL Datatypes          |BOOL |INT32 |INT64 |DOUBLE |FLOAT | CHAR |DATE | TIME |DATETIME|
|-------------------------------|-----|------|------|-------|------|------|-----|------|--------|
|`SQL_BIT`                      | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_TINYINT`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_SMALLINT`                 | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_INTEGER`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_BIGINT`                   | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_CHAR`                     | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_VARCHAR`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_LONGVARCHAR`              | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | Y   |  Y   |   Y    |
|`SQL_BINARY`                   | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_VARBINARY`                | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_LONGVARBINARY`            | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_DOUBLE`                   | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_REAL`                     | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_FLOAT`                    | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_NUMERIC`                  | Y   |  Y   |  Y   |  Y    |  Y   |  Y   | --  |  --  | -- |
|`SQL_GUID`                     | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_MINUTE_TO_SECOND`| --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_HOUR_TO_SECOND`  | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_HOUR_TO_MINUTE`  | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_DAY_TO_SECOND`   | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_DAY_TO_MINUTE`   | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_DAY_TO_HOUR`     | --  |  --  | -- | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_YEAR`            | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_MONTH`           | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_DAY`             | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_HOUR`            | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_MINUTE`          | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_INTERVAL_SECOND`          | --  |  Y   |  Y   | -- |  --  | Y   | --  |  --  | -- |
|`SQL_TYPE_TIME`                | --  |  --  | -- | -- |  --  | Y   | --  |  Y   |   Y    |
|`SQL_TYPE_DATE`                | --  |  --  | -- | -- |  --  | Y   | Y   |  --  |  Y    |
|`SQL_TYPE_TIMESTAMP`           | --  |  --  | -- | -- |  --  | Y   | Y   |  Y   |   Y    |


If a conversion is not possible, an error is returned to the client to indicate
conversion failure. The ETL tool must add a data transformation step if the
source column data type does not exactly match the target's ThoughtSpot
column data type. The driver does not do any implicit conversions.
