---
title: [Schema not found error]
tags:
keywords: tbd
last_updated: tbd
summary: "Correct schema not found errors."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When connecting with ODBC, you need to specify both the database and schema to connect to. If no schema is supplied, you will get an error indicating that the schema could not be found.

When connecting with ODBC, remember to specify the schema. Note that you can add a default schema to use by supplying the parameter "SCHEMA" (Linux and Solaris) or the key "SCHEMA" (Windows).

Even if you do not use schema names in ThoughtSpot, you still have to specify a schema when connecting with ODBC. The default schema name in ThoughtSpot is "falcon_default_schema". This default schema is always assumed when you don't specify a schema name. However, with ODBC, you will need to specify it explicitly. To do this:

On Windows, [change your ODBC configuration]({{ site.baseurl }}/admin/clients/change-odbc-windows.html#) by adding a custom property with the key "SCHEMA" and the value "falcon_default_schema".

![]({{ site.baseurl }}/images/ODBC_add_schema.png "Edit a custom property on Windows")

On Linux or Solaris, you can modify the custom properties related to database and schema, if you want to provide defaults. For a list of those properties and how to change them, see [ODBC and JDBC configuration properties]({{ site.baseurl }}/admin/reference/simba-settings.html#).
