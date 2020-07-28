---
title: [Configure NAS for backup storage]
last_updated: 7/28/2020
summary: You can use network attached storage (NAS) to support backup/restore and data loading.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="mount-nas"}
## About NAS mount

ThoughtSpot enables you to mount a NAS file system for storing or accessing
large files. The file system mounts at the same location on each node in the cluster automatically. When any node restarts, the file system mounts again automatically, if it can be found.

When supplying a directory for writing or reading a backup, you can specify a new mount point within `/export` as the directory to use. Likewise, you can stage data there for loading. It is best to have 2 separate NAS volumes, individually dedicated to data loads and backups.

Backups are written by the Linux user `admin`. If that user does not have
permission to write to the NAS file system, you can write the backups to a disk
(for example `/export/sdc1`, `/export/sdd1`, `/export/sde1`, or `/export/sdf1`)
and then set up a cron job that executes as root user and copies the backup to
the NAS device every night, then deletes it from the directory.

Do not send the periodic backups or stage files on `/export/sdb1` since it is a
name node. It is used internally by Hadoop Distributed File System (HDFS) and if
this drive fills up, it can cause serious problems. Do not allow backups or data
files to accumulate on ThoughtSpot. If disk space becomes limited, the system
will not function normally.

{% include content/admin-portal/nas-mount-configure.md %}
