---
title: [Introduction to Data Integration]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Introduction to Data Integration

This guide explains how to integrate ThoughtSpot with other data sources for loading data. It also includes information on installing and using the ThoughtSpot clients (ODBC, JDBC, and Informatica).

There are several ways to load data into ThoughtSpot, depending on your goals and where the data is located. You should also consider requirements for recurring loads when planning how best to bring the data into ThoughtSpot.

**Note:** ThoughtSpot displays VARCHAR fields using lower case, regardless of what the original casing of your loaded data is.

Here are the options, with information on where to find the documentation for each method:

|Method|Description|
|------|-----------|
|ThoughtSpot Data Connect|ThoughtSpot Data Connect is a web interface for connecting to databases and applications to move data into ThoughtSpot. You can choose which tables and columns to import and apply data transformations. You can also set up recurring loads. See the ThoughtSpot Data Connect Guide for details.

|
|ThoughtSpot Loader (tsload)|ThoughtSpot Loader is a command line tool to load CSV files into an existing database schema in ThoughtSpot. This is the fastest way to load extremely large amounts of data, and it can be run in parallel. You can also use this method to script recurring loads. See the ThoughtSpot Administrator Guide for details.

|
|User Data Import|Users can upload a spreadsheet through the web interface with User Data Import. This is useful for giving everyone easy access to loading small amounts of their own data. See the ThoughtSpot Administrator Guide for details.

|
|[ODBC](../clients/about_odbc.html)|ThoughtSpot provides an ODBC (Open Database Connectivity) driver to enable transferring data from your ETL tool into ThoughtSpot.|
|[JDBC](../clients/about_jdbc_driver.html)|ThoughtSpot provides a JDBC (Java Database Connectivity) driver to enable transferring data from your ETL tool into ThoughtSpot.|
|[Connect to SSIS](../ssis/about_ssis.html)|You can use the ODBC driver to connect to SSIS and import data into ThoughtSpot. Basic instructions are included in this guide.|
|[Connect to Pentaho](../pentaho/about_pentaho.html)|You can use the JDBC driver to connect to Pentaho and import data into ThoughtSpot. Basic instructions are included in this guide.|
|[Informatica Connector](../clients/about_informatica.html)|If your company uses Informatica, you can take advantage of the [Informatica Connector](../clients/about_informatica.html). This allows ThoughtSpot to become a target database, into which you can load data.|

-   **[Login credentials for administration](../../data_integration/introduction/logins.html)**  
You will need administrative permissions to perform the actions discussed in this guide. You can access ThoughtSpot via SSH at the command prompt and from a Web browser.
-   **[Log in to the Linux shell using SSH](../../data_integration/introduction/login_console.html)**  
To perform basic administration such as checking network connectivity, starting and stopping services, and setting up email, log in remotely as the Linux administrator user "admin". To log in with SSH from a client machine, you can use the command shell or a utility like Putty.
-   **[Log in to ThoughtSpot from a browser](../../data_integration/introduction/accessing.html)**  
To set up and explore your data, access ThoughtSpot from a standard Web browser using a username and password.
