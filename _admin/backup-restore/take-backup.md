---
title: [Create a manual backup]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot enables you to manually create a backup to restore a cluster to a prior state, a differently configured appliance, or move the backup from an appliance to a virtual cluster or vice versa. For restoring a cluster from a backup, [contact ThoughtSpot]({{ site.baseurl }}/admin/misc/contact.html#).

You create a manual backup from an existing snapshot. So, you must identify an existing snapshot to use or take a new snapshot first. The time required to take a backup depends on the data size. Taking a backup does not take long, and happens in the background while the cluster is running.


## Using Management Console
To manually create a backup using the admin UI:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/mgmt-portal/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **Backup** and then  **Configure** option.

   **image**  


5. Enter the backup configuration details:

   **image**

   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
   <tr>
   <th>Field</th>
   <th>Description</th>
   </tr>
   <tr>
   <th>Location</th>
   <td>Specify the backup location.</td>
   </tr>
   <tr>
   <th>Mode</th>
   <td>Select the backup mode. Allowed type are <code>full</code>, <code>light weight</code> or <code>dataless</code>.</td>
   </tr>
   <tr>
   <th>NAS Path</th>
   <td>If you choose NAS, select the NAS path or configure a new NAS mount.</td>
   </tr>
   <tr>
   <th>Directory Name</th>
   <td>Specify the location on the disk to place the backup.</td>
   </tr>
   <tr>
   <th>Choose Snapshot</th>
   <td>Select an existing snapshot. If unavailable, create a manual snapshot for the backup.</td>
   </tr>
   </table>

6. Click **Save** to configure the backup.

You can see the newly created backup file in the backup dashboard.

## Using tscli
To manually create a backup using the tscli:
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

    In addition to the size of the snapshot, you must have 10 to 12 GB of disk space. This is because the process requires space for temporary files. You can use the `df` command to check disk size.

    ```
    $ df -h
    ```

4. Create the backup, designating the [type of backup]({{ site.baseurl }}/admin/backup-restore/backup-modes.html#), the snapshot name, and a directory:

    Choose the [mode of backup]({{ site.baseurl }}/admin/backup-restore/backup-modes.html#) you want to create, either full, lightweight, or dataless. The destination directory is created for you; do not specify an existing directory. The BASE value is the name

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
