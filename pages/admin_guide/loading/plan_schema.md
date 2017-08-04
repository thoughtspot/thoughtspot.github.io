---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Plan the schema

Before you can load data with ThoughtSpot Loader, you must create a schema to receive it, using the SQL command line interface \(TQL\).

The TQL syntax is similar to the SQL used in other relational databases, but with some important differences. You'll use DDL \(data definition language\) to create the schema into which you'll load the data. You'll probably want to put all your DDL statements into a text file, which you'll use as a script for creating the schema.

Before writing your TQL script, you need to understand some basic ThoughtSpot concepts.

## About databases and schemas

ThoughtSpot organizes objects in a hierarchical namespace. Databases contain schemas, which contain tables.

 ![](../../images/namespace.png "Namespace diagram") 

ThoughtSpot can contain one or more databases, and each database can have multiple schemas. If you do not specify a schema, the default schema \(falcon\_default\_schema\) is used automatically. This makes it easier to add tables to the database without the need to explicitly create a schema.

If you do create an additional schema, you must refer to its objects using the syntax <schemaname\>.<objectname\>. If you do not qualify the schema when referencing its objects, the default schema \(falcon\_default\_schema\) will always be assumed.

By default, ThoughtSpot creates an internal database to host tables corresponding to data that is imported by users from a Web browser.

## Review the structure of your data

The schema you create to hold the data needs to be a good fit for your data. First, familiarize yourself with the tables you want to load, and understand their structure. Make note of this information for each table:

-   The column names and data types
-   Type of table \(fact or dimension\)
-   Primary key column\(s\)
-   The size of the table on disk
-   Any other tables it can be joined with \(foreign keys\)

Here's what you'll need to take into account in your TQL for creating each table, based on these properties:

|Table type|Table size|To be joined with|Schema recommendations|
|----------|----------|-----------------|----------------------|
|Fact|Any|Small dimension table\(s\)| -   Sharded.
-   Foreign key references the primary key in the dimension table.

 |
|Fact|Any|Large dimension table\(s\)| -   Sharded on the same distribution key as the dimension table it will be joined with.
-   Foreign key references the primary key in the dimension table.

 |
|Fact|Any|Another fact table| -   Sharded on the same distribution key as the fact table it will join with.
-   Many-to-many relationship defines how the tables will be joined.

 |
|Dimension|under 50MB|Fact table\(s\)| -   Replicated \(not sharded\).
-   Has a primary key.

 |
|Dimension|over 50MB|Fact table\(s\)| -   Distributed dimension table, sharded on the same distribution key as the fact table it will be joined with.
-   Primary key must be the same as the distribution key.

 |

