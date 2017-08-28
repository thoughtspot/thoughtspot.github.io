---
title: [Build the schema]
tags: [Modeling_Relationships,Data_Integ_TQL]
keywords: "SQL,data schema,TQL"
last_updated: tbd
summary: "Before you can load data into ThoughtSpot, you must build a database schema to receive it. "
sidebar: mydoc_sidebar
---
You can build a schema by writing a SQL script that creates the objects in your schema. ThoughtSpot provides the ThoughtSpot SQL Command Line (TQL) for creating, viewing, and managing a schema using SQL. Your script can use any statements that are supported in ThoughtSpot SQL Command Line (TQL). The TQL syntax is similar to the SQL used in other relational databases, but with some important differences.

You'll use DDL (data definition language) to create the schema into which you'll load the data. You'll probably want to put all your DDL statements into a text file, which you'll use as a script for creating the schema.

## Upload the script through the browser

You can upload an your SQL script directly through the browser in the ThoughtSpot application. You can edit the script or add to it right within the browser, too. The steps to build a schema through the browser are:

1.  [Write a SQL script to create the schema](create_schema_with_script.html#)
2.  [Import a schema (use the SQL editor)](upload_sql_script.html#)

##  Use TQL on the SQL command line

You can choose to run your SQL script within the Linux shell instead. You can run TQL in interactive command line mode, or you can write a script and use TQL to run it. The SQL syntax in ThoughtSpot is called TQL for ThoughtSpot SQL. The ThoughtSpot SQL Command Line (TQL) runs in an interactive mode. To invoke TQL [Log in to the Linux shell using SSH](../setup/login_console.html#) and type `tql`. At the prompt, type `h` or `help` to see a list of supported commands.

The steps to build a schema using TQL include:

1. [Connect to the database with the ThoughtSpot SQL Command Line (TQL)](connect_sql_cli.html#).
2. [Write a SQL script to create the schema](create_schema_with_script.html#).
3. Type your SQL commands on the command line, terminating each command with a semicolon (;).

    Commands can span multiple lines. ThoughtSpot supports a limited number of SQL commands, plus some custom SQL extensions. For example, you can specify the number of shards and the distribution key as part of the CREATE TABLE syntax. A full list of supported SQL in TQL is available in the [TQL reference](../reference/sql_cli_commands.html).

## Where to go next

-   **[Connect to the database with the ThoughtSpot SQL Command Line (TQL)](../../admin/loading/connect_sql_cli.html)**  
To perform administrative tasks directly in the database, you will use the ThoughtSpot SQL Command Line (TQL). TQL supports many, but not all, common SQL commands.
-   **[Create the schema in TQL](../../admin/loading/prep_schema_for_load.html)**  
Having examined the structure of the data to be loaded and become familiar with the ThoughtSpot SQL Command Line (TQL), you are now ready to create the schema.
-   **[Write a SQL script to create the schema](../../admin/loading/create_schema_with_script.html)**  
Using a SQL script to create your schema is a recommended best practice. This makes it easier to adjust the schema definitions and recreate the schema quickly, if needed.
-   **[Schema creation examples](../../admin/loading/create_schema_example.html)**  
These examples demonstrate the steps involved in creating a schema using the ThoughtSpot SQL Command Line (TQL). After the schema is created, you can load data into it with ThoughtSpot Loader.
-   **[Import a schema (use the SQL editor)](../../admin/loading/upload_sql_script.html)**  
You can run a SQL script to create your database schema through the browser, without having to log in to the shell on the ThoughtSpot instance. You can edit the script and run it directly in the browser to create the schema.
