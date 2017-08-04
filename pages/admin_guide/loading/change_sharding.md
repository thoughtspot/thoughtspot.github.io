---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Change sharding on a table

You can change the sharding on a table or remove it altogether \(creating a replicated table\) using this procedure. This procedure preserves the data within the table.

You should always take a snapshot of your database before making any schema changes. This will allow you to revert back to the prior state if you make an error, or something doesn't work as you expected after the schema change.

This procedure reshards a table. This is also called redistributing or repartitioning. You can use this method to reshard a table without losing its data or metadata. This means that worksheets and pinboards built on top of the table will continue to work.

You can use these steps to do any of these operations:

-   shard a table that was previously replicated.
-   change a replicated table to a sharded table.
-   change the number of shards to use for a sharded table.

To change the sharding on a table:

1.   [Take a snapshot](../backup_restore/take_snapshot.html). 
2.   [Connect to the database with the ThoughtSpot SQL Command Line \(TQL\)](connect_sql_cli.html#). 
3.  Issue the command to change the sharding using this syntax:

    ```
    TQL> ALTER TABLE <table>
         [SET DIMENSION | SET FACT 
         [PARTITION BY HASH 
         [(<shards>)]
         [KEY(<column>)]]]
    ```

    For example:

    -   To make a sharded table into a dimension table \(replicated on every node\), use:

        ```
        ALTER TABLE "products"
           SET DIMENSION;
        ```

    -   To make a dimension table into a sharded \(fact\) table or change the number of shards, use:

```
ALTER TABLE "sales"
   SET FACT PARTITION BY HASH (96)
   KEY ("productID");
```

4.   Test that any dependent objects \(pinboards, worksheets, etc.\) are still working correctly. 
5.   Delete the snapshot you created earlier using the command: 

    ```
    tscli snapshot delete <name>
    ```


