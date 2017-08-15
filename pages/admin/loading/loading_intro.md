---
title: [Load and manage data]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
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

-   **[About case configuration](../../admin/loading/about_case_configuration.html)**  
You can set the type of case sensitivity you would like to see reflected in the ThoughtSpot display.
-   **[Generate CSV files with the data to be loaded](../../admin/loading/generate_flat_file.html)**  
The first step in loading data is to obtain or create one or more flat files that contain the data to be loaded into ThoughtSpot.
-   **[Load data from a web browser](../../admin/loading/load_from_web_browserdita.html)**  
The simplest way to load data is to upload a CSV or Excel file from the ThoughtSpot Web interface. This method is recommended for small, one time data loads. Using this method, the data schema is created for you automatically.
-   **[Append data from a web browser](../../admin/loading/append_data_from_a_web_browser.html)**  
 You can append data to your existing system tables through the ThoughtSpot application, even if the tables were initially loaded using Data Connect or tsload.
-   **[Plan the schema](../../admin/loading/plan_schema.html)**  
Before you can load data with ThoughtSpot Loader, you must create a schema to receive it, using the SQL command line interface \(TQL\).
-   **[Build the schema](../../admin/loading/create_schema.html)**  
Before you can load data into ThoughtSpot, you must build a database schema to receive it. You will do this by writing a SQL script, which creates the objects in your schema.
-   **[Change the schema](../../admin/loading/change_schema.html)**  
After you've created a schema and loaded data, you may find yourself wishing you'd set things up a little differently. You can make changes to the schema, such as changing the primary key, relationships to other tables, and sharding.
-   **[Load data with ThoughtSpot Loader](../../admin/loading/load_with_data_importer.html)**  
ThoughtSpot Loader \(tsload\) is a common way to import data. When using tsload, you can load larger datasets and make the loading process repeatable through scripting.
-   **[Delete a data source](../../admin/loading/about_dependencies.html)**  
When you want to delete a data source, you first need to handle any dependent objects that have been built on top of it. You can easily see these dependencies, and choose how to handle them before deleting the data source.
-   **[About the Schema Viewer](../../admin/loading/schema_viewer.html)**  
There is a schema viewer in ThoughtSpot which lets you see your database schema in the web browser. You can see tables and worksheets and their relationships. The Schema Viewer is interactive, so you can configure it to show just what you want to see.
