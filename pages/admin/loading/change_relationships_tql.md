---
title: [Change a relationship between tables]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Use this procedure to remove a relationship between tables or define a new one. This operation works for both kinds of relationships: foreign key or generic relationship.

You should always take a snapshot of your database before making any schema changes. This will allow you to revert back to the prior state if you make an error, or something doesn't work as you expected after the schema change.

To change a relationship between two tables, first remove any existing relationship, and then define the new relationship (if any). You do not need to truncate the tables to do this operation. Any dependent objects (pinboards or worksheets) will remain intact.

To change the relationship between tables:

1.   [Create a manual snapshot](../backup_restore/take_snapshot.html).
2.   [Connect to the database with the ThoughtSpot SQL Command Line (TQL)](connect_sql_cli.html#).
3.   Issue the command to drop the existing relationship, by issuing a command like one of these examples:
    -   Drop a foreign key by name, if it was given a name when it was defined:

        ```
        TQL> ALTER TABLE
             "sales_fact"
             DROP CONSTRAINT
             "FK_PO_number";
        ```

    -   Drop a relationship by name, if it was given a name when it was defined:

        ```

        TQL> ALTER TABLE "fruit_dim"
             DROP RELATIONSHIP "REL_dates";
        ```

    -   Drop the foreign key relationship explicitly, if it doesn't have a name, by referencing the two tables that are joined. This drops all foreign keys between the two tables:

        ```
        TQL> ALTER TABLE "shipments"
             DROP CONSTRAINT
             FOREIGN KEY "orders";
        ```

    -   Drop all generic relationships between two tables:

        ```
        TQL> ALTER TABLE "wholesale_buys"
             DROP RELATIONSHIP
             WITH "retail_sales";
        ```

4.   Define a new relationship, if you want to, using ALTER TABLE...ADD CONSTRAINT...
5.   Test that any dependent objects (pinboards, worksheets, etc.) are still working correctly.
6.   Delete the snapshot you created earlier using the command:

    ```
    tscli snapshot delete <name>
    ```


**Parent topic:** [Change the schema](../../admin/loading/change_schema.html)
