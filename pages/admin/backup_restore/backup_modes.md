---
title: [Understand backup modes]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can create a backup using one of three modes, full, lightweight or dataless.

## Full backups

Full backups are entire backups of the cluster with all data, whether loaded from the web interface or from `tsload`. This is the best mode for restoring a cluster and all your data. Once a `FULL` backup is created, you can move them between clusters, even if the cluster configuration is different. Full backups can be as large as 20 GB in addition to the 5 GB of additional files.

Before creating a manual backup or configuring automated backups, make sure there is enough disk space on the target disk. Consider an example, where you want to store three backups. If the backup itself takes 18GB, you need about 18 + 5 = 23 GB of free disk space. Don't forget that the backup size can grow over time, so you should occasionally check to ensure you are not in dange of running out of disk space to store backups.

## Lightweight backups

Lightweight backups contain everything that makes up a cluster so they contain the following:

-   Cluster configuration \(SSH, LDAP, etc.\)

-   In-memory data cache

-   All data that is stored in HDFS

-   Data uploaded by users

-   Metadata for the data store

-   Users, groups and permissions

-   Objects created by users \(pinboards, worksheets, and formulas\) with their shares and permissions.

-   Data model and row-level security rules.


Data loaded through ThoughtSpot Loader \(tsload\), ODBC/JDBC drivers, and Data Connect is excluded. The expectation is that data loaded via tsload is from external sources and so can be re-loaded after the cluster is restored. An exception is if these mechanisms were used to load data into tables that were first created through CSV import \(that is, a user first loaded the tables via the GUI\). In this case, the data, like the tables they were loaded into, are saved.

## Dataless backups

A dataless backup saves a backup of the schema \(metadata\), with no data. Dataless backups allow you to send a copy of your cluster metadata to ThoughtSpot Support for troubleshooting without compromising data security and privacy. The size of a dataless backup is usually within 10's of megabytes provided you do not have customized binaries.

When restoring from a dataless backup, you must supply the correct release tarball, since this type of backup does not include the software release.

**Parent topic:** [Work with backups](../../admin/backup_restore/backups_and_snapshots.html)
