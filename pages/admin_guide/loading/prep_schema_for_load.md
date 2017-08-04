---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Create the schema in TQL

Having examined the structure of the data to be loaded and become familiar with the ThoughtSpot SQL Command Line \(TQL\), you are now ready to create the schema.

This method is a good way to get familiar with TQL and how to create database objects, but when creating a schema in a production system, you will most likely [Write a SQL script to create the schema](create_schema_with_script.html#).

To create the schema directly in TQL:

1.   [Connect to the database with the ThoughtSpot SQL Command Line \(TQL\)](connect_sql_cli.html#). 
2.   If the database you will be using does not exist, create it now: 

    ```
    TQL> CREATE DATABASE my\_database;
    ```

3.   Connect to the database: 

    ```
    TQL> USE my\_database;
    ```

4.   If you wish to use a schema other than the default one, create it now: 

    ```
    TQL> CREATE SCHEMA my\_schema;
    ```

5.   Issue a CREATE TABLE command for each table you will create, using the information in [Plan the schema](plan_schema.html#). 

    **Note:** Foreign key declaration within a CREATE TABLE will show the table created even if there are problems with the foreign key. Therefore, it is good practice to also issue a separate `ALTER TABLE ADD CONSTRAINT FOREIGN KEY` command.


