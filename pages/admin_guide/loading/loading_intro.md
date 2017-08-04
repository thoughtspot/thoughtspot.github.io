---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Load and manage data

There are several methods of loading data into ThoughtSpot. This section describes each method and why you might choose it above the others.

The fastest and easiest way to load a new table is by importing it using the Web browser. This is best for one time data loads of small tables which do not have complex relationships to other tables. This method is limited to tables that are under 50 MB \(megabytes\) in size.

Using ThoughtSpot Loader, you can script recurring loads and work with multi-table schemas.

If your data already exists in another database with the schema you want to use in ThoughtSpot, you can pull the schema and data in using the ODBC or JDBC driver.

These are the methods you can use to load data, along with the benefits of each method:

|Method|Description|Benefits|
|------|-----------|--------|
|[Load data from a web browser](load_from_web_browserdita.html#)|Use the ThoughtSpot Web interface to upload an Excel or CSV \(comma separated values\) file from your local machine.|Easy way to do a one-time data load of a small file \(under 50MB\).End users can upload their own data and explore it quickly.

|
|Use ThoughtSpot Data Connect. For details, see the ThoughtSpot Data Connect Guide|This is a premium feature, available at additional cost. Use ThoughtSpot Data Connect to connect directly to external data sources and pull in tables and columns from them. You can also set up recurring loads to keep the data fresh.|Easy way to connect to multiple sources of data directly and set up recurring loads. You won't need to define a schema to accept the data loads, because this is done automatically for you.|
|[Load data with ThoughtSpot Loader](load_with_data_importer.html#)|Use TQL and tsload to load data directly into the back end database that ThoughtSpot uses.|Best way to load large amounts of data or a schema with multiple tables.Can be scripted and used for recurring data loads, such as monthly sales results or daily logs.

Can be integrated with an ETL solution for automation.

|
|Use the ODBC/JDBC driver to connect to ThoughtSpot|Use the ODBC or JDBC client with your ETL tool. For information, see the ThoughtSpot Data Integration Guide.|Make use of an established ETL process and tool\(s\).Connect to ThoughtSpot using third party tools like SSIS.

You don't need to define a schema to accept the data load.

|
|Use the Informatica Connector|Use the Informatica Connector if you already use Informatica to connect to your other data sources. For information, see the ThoughtSpot Data Integration Guide.|Works with your established data migration processes in Informatica.|

If you're uploading data through the Web interface, you can use a native Excel file. If you want to use a CSV \(comma separated values\) or delimited file, or you are loading using ThoughtSpot Loader, you'll need to [Generate CSV files with the data to be loaded](generate_flat_file.html#) first.

**Note:** End users will almost always work with worksheets and data they upload.

