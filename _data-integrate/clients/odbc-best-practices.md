---
title: [Best Practices for Using ODBC]
tags:
keywords: tbd
last_updated: tbd
summary: "To successfully use ODBC, following these best practices is recommended."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When developing tools that use the ODBC driver, use these best practices:

* When setting up ODBC for the first time, you should begin by using the ThoughtSpot Loader for the initial data loads. Once those are working properly, then you can switch to ODBC to do incremental loads. This allows you to do more in depth troubleshooting on any initial loading issues.

* After setting up the initial load and ensuring that it works, you may find that there are persistent problems with the incremental load using ODBC. You can enable ODBC logs and send them to ThoughtSpot Support for further investigation.

* You should create the parameterized SQL statement outside of ODBC. Using this method, the SQL statement can be sent to ThoughtSpot in batches by the ODBC driver, so you only have to update the memory itself. ETL tools have this implemented already (end users shouldn’t have to actually write the `INSERT` statement). But as a developer, you may be writing code that leverages the ODBC driver, so this tip can help you write your SQL for the best performance with the driver.

* Data can be loaded into a table through multiple parallel connections. This can be achieved by splitting the input data into multiple parts, and loading those individual parts through multiple parallel connections. The parallel loading can be used even while loading to a single table or multiple tables at the same time.

* When doing an incremental data load, note that the same `UPSERT` behavior that occurs via TQL will apply. This means that if you import a row whose primary key matches to an existing row, the existing row will be updated with the new values.
