---
title: [Create a manual snapshot]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You should create a snapshot before making any changes to the environment, loading a large amount of new data, or changing the structure of a table. If you would like to restore from a snapshot instead, contact ThoughtSpot Support.

Taking a snapshot is fast, about 20 seconds. It happens invisibly in the background of a running cluster. To create a snapshot:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Initiate a snapshot, providing a name and reason for creating it: Snapshot names must be 44 characters or less. You can have up to 20 manual snapshots at a time, after which, you have to clear one before you are able to create another.

    ```
    $ tscli snapshot create <snapshot\_name> <reason>
    ```

3.   Check that the snapshot was created:

    ```
    $ tscli snapshot ls
    ```


**Parent topic:** [Work with snapshots](../../admin/backup_restore/overview_snapshot.html)
