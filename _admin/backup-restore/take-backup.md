---
title: [Create a manual backup]
summary: Learn how to manually create a backup.
last_updated: 3/11/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot enables you to manually create a backup to restore a cluster to a prior state or a differently configured appliance. You can also move the backup from an appliance to a virtual cluster or vice versa. To restore a cluster from a backup, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

You create a manual backup from an existing snapshot. So, you must identify an existing snapshot to use or take a new snapshot first. The time required to take a backup depends on the data size. Taking a backup does not take long, and happens in the background while the cluster is running.

## Using tscli
To manually create a backup using ThoughtSpot's command line interface, tscli:
1. Log in to the Linux shell using SSH.
    ```
    $ ssh admin@<cluster-IP>
    ```
2. [Create a manual snapshot]({{ site.baseurl }}/admin/backup-restore/overview-snapshot.html#snapshot-tscli) or find a snapshot you want to use.
   To find a snapshot you want to use for your backup, run `tscli snapshot ls`:

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

    In addition to the size of the snapshot, you must have 10 to 12 GB of disk space. This is because the process requires space for temporary files. You can use the `df -h` command to check disk size.

    ```
    $ df -h
    ```

4. Create the backup, designating the [type of backup]({{ site.baseurl }}/admin/backup-restore/backup-modes.html#), the snapshot name, and a directory:

    Choose the [mode of backup]({{ site.baseurl }}/admin/backup-restore/backup-modes.html#) you want to create, either `full`, `lightweight`, or `dataless`. Specify an existing directory path for the backup to go, but the folder (the last part of the path: `/home/admin/<folder>`) **must not** already exist. ThoughtSpot creates the folder when it runs a backup. Refer to the [tscli command reference]({{ site.baseurl }}/reference/tscli-command-ref.html#backup) for help, or run `tscli backup create -h` on the command line to see the help for this command.

    ```
    $ tscli backup create [-h]
        [--mode {full|light|dataless}]
        [--type {full}]
        [--storage_type {local|nas}]
        [--remote]
        [--no-orion-master]
        [--bucket_name <bucket_name>]
        [--staging_dir <staging_dir_name]
         <snapshot_name> <directory>
    ```
    Here is a sample `tscli backup create` command:
    ```
    $ tscli backup create --mode dataless <my_snapshot> <directory_path>
    ```
