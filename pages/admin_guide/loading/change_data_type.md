---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Change the Data Type of a Column

When you issue the TQL command to convert a column from one data type to another, the conversion is handled automatically. However, you'll need to ensure that any visualizations built on top of the table display correctly.

You should always take a snapshot of your database before making any schema changes. This will allow you to revert back to the prior state if you make an error, or something doesn't work as you expected after the schema change.

When changing a data type in an existing table, be aware that answers and pinboards created on top of that table \(or worksheets that include it\) may change. This is because charts and aggregations depend upon the data type. So for example changing from INTEGER to VARCHAR could break charts that used the numeric data type INTEGER to calculate an average or a total. Because of this, use caution, and check all dependent objects before and after changing the data type, to ensure that they display as intended.

To change the data type of a column:

1.   [Connect to the database with the ThoughtSpot SQL Command Line \(TQL\)](connect_sql_cli.html#). 
2.   Issue the command to change the data type using this syntax: 

    ```
    TQL> ALTER TABLE <table>
         MODIFY COLUMN <column> <new\_data\_type>;
    ```

    For example:

    ```
    ALTER TABLE fact100
       MODIFY COLUMN product_id int;
    ```


