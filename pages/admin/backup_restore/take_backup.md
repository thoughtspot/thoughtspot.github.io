---
title: [Create a manual backup]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
---
Use this procedure when you want to manually create a backup. If you would like to restore from a backup, contact ThoughtSpot Support.

You create a manual backup from an existing snapshot. So, you must identify an existing snapshot to use or take a new snapshot first. The time required to take a backup depends on the data size. Taking a backup does not take long, and happens in the background while the cluster is running.

1. Log in to the Linux shell using SSH.
2. Create a manual snapshot or find a snapshot you want to use.
   To find a snapshot you want to back up use the following command:

    ```
    $ tscli snapshot ls

    ---------------------------------------------------------------------------

    Name          : pre330
    Reason        : pre3.3.0
    Hdfs snapshot : pre330
    Start         : Wed May 4 18:07:32 2016
    End           : Wed May 4 18:08:23 2016
    Size(Full)    : 13.24 GB
    Size(LW)      : 4.96 GB
    Size(Dataless): 39.76 MB
    ---------------------------------------------------------------------------

    ...
    ```

3. Make sure you have enough room on the target disk.

    In addition to the size of the snapshot, you will need 10 to 12 GB of disk space. This is because the process requires space for temporary files. You can use the `df` command to check disk size.

    ```
    $ df -h
    ```

4. Create the backup, designating the [type of backup](backups_and_snapshots.html#), the snapshot name, and a directory:

    Choose the [mode of backup](backups_and_snapshots.html#) you want to create, either full, lightweight, or dataless. The destination directory is created for you; do not specify an existing directory. The BASE value is the name

    ```
    $ tscli backup create [-h]
        [--mode {full|light|dataless}]
        [--type {full}]
        [--base snapshot_name>]
        [--storage_type {local|nas}][--remote]
         <name> <directory>
    ```

5. Check that the backup was created:

    ```
    $ tscli backup ls
    ```
