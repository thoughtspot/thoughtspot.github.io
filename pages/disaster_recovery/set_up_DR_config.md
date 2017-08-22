---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Set up a disaster recovery configuration

Use this procedure to set up a disaster recovery configuration with a primary and a mirror instance.

The disaster recovery setup uses periodic backups from the primary to a shared storage \(NFS mounted drive or NAS\). Note, if you do not use the tscli command to mount NAS, please make sure the NAS is mounted on all nodes of both clusters. When choosing times and frequencies for periodic backups, you should choose a reasonable frequency. Do not schedule backups too close together, since a backup cannot start when another backup is still running. Avoid backing up when the system is experiencing a heavy load, such as peak usage or a large data load.

This is the procedure for designating a primary and a mirror ThoughtSpot instance.

1.   Ensure you have tscli on the target appliance. If not, please contact ThoughtSpot Support. In addition, the appliance should not be running a cluster, so if one exists, please contact ThoughtSpot Support to delete the cluster. A ThoughtSpot cluster should be up and running on the source appliance. 
2.   Log in to the primary appliance, and set it up to take periodic backups and write them to the shared backup directory \(in a SAN or shared NFS-mounted drive\): 

    ```
    $ tscli backup set-periodic --at <hour1,hour2,...> --directory <shared_backup_directory> [--num_backups <num_backups>]
    ```

    For example:

    ```
    $ tscli backup set-periodic --at 01,17 --directory /mnt/thoughtspot_backups --num_backups 5
    ```

3.   Run `tscli backup periodic-config` to check whether the periodic backup is set correctly. 
4.   Designate the mirror appliance cluster to act as a mirror: 

    ```
    $ tscli backup start-mirror <shared_backup_directory> <mirror_node1_IP,mirror_node2_IP,...> <mirror_cluster_name> <mirror_cluster_id> 
    ```

    For example:

    ```
    $ tscli backup start-mirror /mnt/thoughtspot_backups 192.168.2.111, 192.168.2.112,192.168.2.113 thoughtspot_mirror thoughtspot-mirror-29543
    ```

5.   It may take some time for the cluster to begin acting as a mirror. Issue the command to verify that the cluster has started running in mirror mode: 

    ```
    $ tscli backup mirror-status
    ```

    You can use this command in the future to check whether the mirror cluster is up to date.


**Parent topic:** [Cluster replacement](../../disaster_recovery/disaster_recovery/cluster_replacement.html)

