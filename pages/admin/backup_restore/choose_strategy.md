---
title: [Understand the backup strategies]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
This section discusses three strategies for backing up your ThoughtSpot cluster.

## Snapshots

A snapshot is a point-in-time image of your running cluster. Snapshots are both taken on and restored to a cluster while it is running. Each cluster has a enabled by default a snapshot configuration. This configuration instructs the system to periodically take snapshots. Creation of a snapshot takes about 20 seconds. Once taken, a snapshot is persisted on disk in the cluster's HDFS.

You can also create a snapshot manually. You should create a snapshot before making any changes to the environment, loading a large amount of new data, or changing the structure of a table. A snapshot may only be restored to the same cluster on which it was taken. The cluster software release version must match the snapshot release version.

If you need to move data between clusters or restore to a cluster that was updated to a new release, contact ThoughtSpot Support.

## Backups

A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. Backups are stored in a directory on a local or network file system. You can store all of the data associated with a snapshot or a portion of that data or only metadata. There is no default configuration enabled for backing up a cluster. You can configure on yourself or you can take backups manually. Backing up periodically protect your company from losing data and/or user work.

You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move the backup from an appliance to a virtual cluster or vice versa.

## Offline backup cluster

The most robust strategy for backup and recovery requires having a backup cluster offline that is kept in sync with the production cluster. Then, if the production cluster fails, the backup cluster can be drafted to take its place with minimal loss of work and disruption to operations.

Details on this architecture and instructions on setting it up are available in the ThoughtSpot Disaster Recovery Guide, which you can request from ThoughtSpot.

## Choosing when to use a strategy

Depending on your situation and your goals, you can choose to use a snapshot or a backup. This table should help you decide:

| |**Snapshot**|**Backup**|
|**Used to**|To restore to a cluster to particular point in time.| -   Restore a cluster to a prior state.
-   Move a cluster to a different HW appliance.
-   Move a cluster to VM appliance.
-   Removal of a node.
-   Restoring to a cluster running a different release from the one where the backup was taken.

 |
|**Stored**|In the cluster's HDFS|Outside the cluster on either local or NAS disk.|
|**Advantages**| -   Can be taken on or restored to a running cluster
-   Creation and restore is fast

 | -   Very stable medium.
-   Can be used to recover from data loss or corruption, even if your cluster was destroyed.
-   Can be typed as full, lightweight, or dataless.

 |
|**Limitations**| -   Includes all data, state, and metadata etc. created between snapshot creation and restore.
-   Are lost if the HDFS name node fails, you lose multiple disks at once, or the entire cluster is destroyed
-   Can only restored to the cluster they were taken from

 | -   Backups require deleting the existing cluster first.
-   You are resonsible for validating your backup configuration as viable for restoring a cluster.
-   Best practice recommends you to maintain multiple backups.
-   Are typically large in size.

 |

You should never restore from a snapshot or backup yourself, instead contact ThoughtSpot Support for help.

**Parent topic:** [Backup and restore](../../admin/backup_restore/intro_backup_restore.html)
