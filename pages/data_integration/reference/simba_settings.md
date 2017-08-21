---
title: [ODBC and JDBC configuration properties]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "Lists the properties you can set for ODBC or JDBC connections"
sidebar: mydoc_sidebar
---
# ODBC and JDBC configuration properties

This section lists the properties you can set for ODBC or JDBC connections.

## Setting Properties for ODBC

The properties information here comes mostly from the document Configuring SimbaClient for ODBC, published by Simba Technologies. You can access it directly [here](http://cdn.simba.com/products/SEN/doc/SimbaEngine_SDK_SimbaClientServer_User_Guide.pdf). Not all the parameters Simba accepts are supported by the ThoughtSpot ODBC clients, and ThoughtSpot has added some properties, which are listed separately here. All configuration properties use the type String (text).

You can set these properties on Windows by using the [ODBC Administrator](../clients/change_odbc_windows.html#).

For Linux and Solaris, the properties are located in three files, depending on their type:

|Property Type|Location|
|-------------|--------|
|DSN|`odbc.ini` file|
|Driver|`odbsinst.ini` file|
|SimbaSetting Reader|`simbaclient.ini` file|

## Setting Properties for JDBC

For JDBC, these properties are passed as key value pairs in the connect string. For more information, see [Use the JDBC Driver](../clients/use_jdbc_driver.html#).

## Properties Reference

The following tables summarize the configuration properties.

|Property|Type|Description|
|--------|----|-----------|
|`DATABASE`|DSN or Driver|The default database to connect to.|
|`SCHEMA`|DSN or Driver|The default schema to connect to.|

|Property|Type|Description|
|--------|----|-----------|
|`Description`|DSN|A brief, human-readable description of the DSN. This describes the DSN to users who are deciding which DSN to use.|
|`Driver`|DSN or Driver|In the driver configuration location, Driver should contain the path to the driver binary. In the DSN configuration location, Driver could contain the path to the driver binary, or it could contain the driver entry in the registry.|
|`Idle Timeout`|DSN|The time to wait for a response from the server, in seconds. This property is optional, but SimbaClient will wait indefinitely for SimbaServer to respond to a request made to the server unless you specify a timeout period. IdleTimeout specifies how many seconds that SimbaClient will wait before aborting the attempt and returning to the application with an error. This timeout corresponds to ODBC’s CONNECTION\_TIMEOUT property and is only used when more specific timeouts, such as QUERY\_TIMEOUT or LOGIN\_TIMEOUT aren’t applicable.|
|`Locale`|DSN|The connection locale. If this value is set, it overrides the driver-wide locale. For example, the driver-wide locale could be en-US. If the client would prefer fr-CA, it can set the connection locale to fr-CA. Values are composed of a 2-letter language code (in lower case), and an optional 2-letter country code (in upper case). If the country code is specified, it must be separated from the language code by a hyphen (-).

|
|`LoginTimeout`|DSN|The timeout, in seconds, to wait for a response from the server when attempting to log in. A value of 0 means no timeout. The default value is 60.|
|`Query Timeout`|DSN|The timeout, in seconds, to wait for a response from the server during Prepare, Execute, and ExecuteDirect. A value of 0 means no timeout. The default value is 60.|
|`ServerList`|DSN|A comma separated list of all servers (IP address and port number) to connect to. SimbaClient must be able to find SimbaServer on the network. This property enables server discovery. SimbaClient will try to make a network connection to the servers in the order specified until a connection is made.|

|Property|Type|Description|
|--------|----|-----------|
|`LogLevel`|SimbaSetting Reader|Controls the granularity of the messages and events that are logged.With this keyword, you can control the amount of log output by controlling the kinds of events that are logged. Possible values (case sensitive):

-   0 or LOG\_OFF: no logging occurs
-   1 or LOG\_FATAL: only log fatal errors
-   2 or LOG\_ERROR: log all errors
-   3 or LOG\_WARNING: log all errors and warnings
-   4 or LOG\_INFO: log all errors, warnings, and informational messages
-   5 or LOG\_DEBUG: log method entry and exit points and parameter values for debugging
-   6 or LOG\_TRACE: log all method entry points

|
|`LogPath`|SimbaSetting Reader|Specifies the directory where the log files are created. For example:```
LogPath=C:\Simba Technologies\Temp
```

If this value is not set, the log files are written to the current working directory of the SimbaClient.|
|`LogFileSize`|SimbaSetting Reader|The size of each log file, in bytes. The default values is 20971520 bytes. When the maximum size of the file is reached, a new file is created.|
|`LogFileCount`|SimbaSetting Reader|The number of log files to create. When the maximum number of log files has been created, the oldest file will be deleted and a new one created. The default value is 50.|

**Parent topic:** [Reference](../../data_integration/reference/intro_reference.html)
