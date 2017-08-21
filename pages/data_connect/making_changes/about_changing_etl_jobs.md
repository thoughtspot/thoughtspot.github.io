---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About making changes to Data Connect setup

After setting up ThoughtSpot Data Connect, you may want to make changes to the scheduling, data sources, or even the schema you are importing into in ThoughtSpot. These best practices describe how to make such changes.

## Changes to data sources

If your company migrates from one source database or application to another you may find that you need to redo the data import using the new system. You can do this without losing any data that has already been loaded into ThoughtSpot, but you need to be careful not to accidentally delete an existing table that was created by the old data source. Create the new data source, but choose to retain the table when you delete the old data source. You should also stop any scheduled jobs associated with the old data source before deletion.

-   [Delete a connection](delete_a_connection.html#)
-   [Delete a data source](delete_data_source.html#)

## Changes to scheduled data imports

It's easy to change scheduled data imports to run at a different time or frequency through the Data Connect web interface. You may also want to pause a data import because the source system will be offline for maintenance. You can then resume it, when the maintenance has been completed.

-   [Stop a scheduled job from running](stop_scheduled_job.html#)

## Changes to the Schema in ThoughtSpot

It is very common to need to change what you're importing into ThoughtSpot for various reasons. For example the source database may have changed, because you've implemented a new application. Or you might simply change your mind about the best way to model the data that was brought in through Data Connect.

-   [Change sharding for a data source](change_sharding.html#)
-   [Change a data type for a data source](change_data_type.html#)
-   [Add a column to an existing data source](add_a_column.html#)
-   [Remove a column from an existing data source](remove_column.html#)

-   **[Edit a connection](../../../data_connect/data_connect/making_changes/edit_a_connection.html)**  
You can edit a connection used in a data source.
-   **[Delete a connection](../../../data_connect/data_connect/making_changes/delete_a_connection.html)**  
You can delete a connection, but only once you've resolved each of its dependencies.
-   **[Delete a data source](../../../data_connect/data_connect/making_changes/delete_data_source.html)**  
If you want to delete a data source, make sure and read this section so you don't inadvertently delete data in ThoughtSpot.
-   **[Stop a scheduled job from running](../../../data_connect/data_connect/making_changes/stop_scheduled_job.html)**  
You may want to stop a scheduled job from running for a time, or even permanently. Use this procedure to pause or stop a job.
-   **[Change sharding for a data source](../../../data_connect/data_connect/making_changes/change_sharding.html)**  
Use this procedure to change the sharding on a data source after it has been set up and the load has run. You can still change the number of shards or make it a replicated table instead.
-   **[Change a data type for a data source](../../../data_connect/data_connect/making_changes/change_data_type.html)**  
When a data type used in a data source has changed, or you decide that the data should come into ThoughtSpot with a different data type, you can change the data type, even if you've already loaded data into the target table.
-   **[Add a column to an existing data source](../../../data_connect/data_connect/making_changes/add_a_column.html)**  
You can add a column to an existing data source using this procedure. This will work even if the data load has already been run in the past.
-   **[Remove a column from an existing data source](../../../data_connect/data_connect/making_changes/remove_column.html)**  
You can remove a column from a data source, even if its data load has been run in the past, by using this procedure.
-   **[Add/remove columns in a loaded table](../../../data_connect/data_connect/making_changes/add_remove_columns_in_a_loaded_table.html)**  
You can modify tables that have been selected for load in Data Connect by adding or removing columns.
