---
title: [About the JDBC Driver]
tags:
keywords: tbd
last_updated: tbd
summary: "Use JDBC to interact with databases in a standard manner."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Java Database Connectivity (JDBC) is a Java standard API that allows applications to interact with databases in a standard manner. ThoughtSpot has JDBC support via a JDBC driver we provide.

## When to use JDBC

JDBC can be used whenever you want to connect to ThoughtSpot to insert data programmatically from a Java program or application. You should begin by using the ThoughtSpot Loader for initial data loads and then use JDBC for incremental loads. This is because the ThoughtSpot Loader is generally faster than JDBC. Information on using the ThoughtSpot Loader is available in the ThoughtSpot Administrator Guide.

## Version Compatibility

To ensure compatibility, always use the JDBC driver with the same version number as the ThoughtSpot instance to which you are connecting.

## Performance Considerations

These are some general recommendations for maximizing the performance of JDBC:

-   Insert in batches rather than doing single inserts at a time using the `PreparedStatement::addBatch()` and `PreparedStatement::executeBatch` commands.
-   If you need to upload a lot of data, consider running multiple connections with batch inserts in parallel.

{% include note.html content="The ETL tool must add a data transformation step if the source column data type does not exactly match the target's, ThoughtSpot's, column data type. The driver does not do any implicit conversions." %}
