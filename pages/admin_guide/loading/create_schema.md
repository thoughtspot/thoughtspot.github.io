---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Build the schema

Before you can load data into ThoughtSpot, you must build a database schema to receive it. You will do this by writing a SQL script, which creates the objects in your schema.

Your SQL script can use any SQL statements that are supported in ThoughtSpot SQL Command Line \(TQL\). The TQL syntax is similar to the SQL used in other relational databases, but with some important differences. You'll use DDL \(data definition language\) to create the schema into which you'll load the data. You'll probably want to put all your DDL statements into a text file, which you'll use as a script for creating the schema.

## Uploading the SQL script through the browser

You can upload an existing SQL script directly through the browser in the ThoughtSpot application. You can edit the script or add to it right within the browser, too.

The steps to build a schema through the browser are:

1.  [Write a SQL script to create the schema](create_schema_with_script.html#)
2.  [Import a schema \(use the SQL editor\)](upload_sql_script.html#)

## Using TQL to create the schema

You can choose to run your SQL script within the Linux shell, instead of uploading it through the browser.

The steps to build a schema using TQL include:

1.  [Connect to the database with the ThoughtSpot SQL Command Line \(TQL\)](connect_sql_cli.html#).
2.  [Write a SQL script to create the schema](create_schema_with_script.html#).

