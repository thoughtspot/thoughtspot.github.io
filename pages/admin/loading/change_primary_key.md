---
title: [Change the primary key for a table]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Use this procedure to change the primary key for a table. But use it with caution, particularly if you are changing to a primary key for which values are not unique.

You should always take a snapshot of your database before making any schema changes. This will allow you to revert back to the prior state if you make an error, or something doesn't work as you expected after the schema change.

You can change the primary key of a table without having to TRUNCATE it first and reload the data. However, changing the primary key could result in data deletion. This is because of the upsert behavior which is applied when multiple rows have the same primary key. This is very important to understand ahead of time, if you are considering changing to a primary key for which values are not unique.

To change the primary key, first remove any existing primary key, and then define a new one \(if any\). You do not need to truncate the tables to do this operation beginning in version 3.2. Any dependent objects \(pinboards or worksheets\) will remain intact.

To change the primary key of a table:

1.   [Create a manual snapshot](../backup_restore/take_snapshot.html).
2.   [Connect to the database with the ThoughtSpot SQL Command Line \(TQL\)](connect_sql_cli.html#).
3.   Drop the existing primary key \(if any\), by issuing a command like this example:

    ```
    TQL> ALTER TABLE "cart"
         DROP CONSTRAINT
         PRIMARY KEY;
    ```

4.   Add a new primary key, if desired:

    ```
    TQL> ALTER TABLE "cart"
         ADD CONSTRAINT
         PRIMARY KEY ("owner_id");
    ```

5.   Test that any dependent objects \(pinboards, worksheets, etc.\) are still working correctly.
6.   Delete the snapshot you created earlier using the command:

    ```
    tscli snapshot delete <name>
    ```


**Parent topic:** [Change the schema](../../admin/loading/change_schema.html)
