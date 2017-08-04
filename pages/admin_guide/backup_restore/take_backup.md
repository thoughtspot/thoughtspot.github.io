---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Take a backup of a snapshot

Taking a backup pulls a snapshot out and dumps it to persistent storage on disk, on a network mounted directory. Use this procedure when you want to create a backup.

Before creating a backup, you must identify an existing snapshot to use or take a new snapshot. The time required to take a backup depends on the data size. Taking a backup does not take long, and happens in the background while the cluster is running.

Choose the [mode of backup](backups_and_snapshots.html#) you want to create, either full, lightweight, or dataless. The directory to which you will write the backup must not already exist. You specify the directory to use, and it will be created for you when taking the backup.

If you would like to restore from a backup, contact ThoughtSpot Support.

Use this procedure to make a backup of a snapshot.

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Find out the name and size of the snapshot you want to back up. 

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

3.   Make sure you have enough room on the disk where you will save the backup. In addition to the size of the snapshot, you will need 10 to 12 GB of disk space. This is because the process requires space for temporary files. 

    ```
    $ df -h
    ```

4.   Create the backup, designating the [type of backup](backups_and_snapshots.html#), the snapshot name, and a directory: 

    ```
    $ tscli snapshot backup [--mode {full|light|dataless}] <name> <directory>
    ```

    or

    ```
    $ tscli.par backup create [-h]
        [--mode {full|light|dataless}]
        [--type {full|incremental}][--base BASE]
        [--storage_type {local|nas}][--remote]
         <name> <directory>
    ```

5.   Check that the backup was created: 

    ```
    $ tscli backup ls
    ```


