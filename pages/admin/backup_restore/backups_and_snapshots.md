---
title: [Delete Me]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.

You can create a manual backup or configure an automated, periodic backup A backup stores snapshot outside of a ThoughtSpot cluster. For manual backups, the system creates a backup using the named snapshot you specify. For periodic backups, the system uses the most recent snapshot to create the backup.

CAUTION:

You should never disable the periodic snapshot system as backups rely on it. For example, if you have disabled the periodic snapshots system and periodic backups are enabled, then the periodic backup may use a very outdated snapshot or it may fail all together.

Backups are usually stored on a [NAS (network attached storage) file system](../setup/NAS_mount.html#) but you can store them on a local disk as well. When creating a backup, ThoughtSpot copies a release tarball and several supporting files to a disk you specify. Storing these supporting files takes about 5 GB of extra space beyond the backup itself. So, make sure you have enough disk space before backing up.

## Validate your backup system

You are resonsible for validating your backup configuration as viable for restoring a cluster. This validation ensures the storage and backup format are at the level you required. Best practice is to maintain multiple backup images.

-   **[Understand backup modes](/pages/admin/backup_restore/backup_modes.html)**  
You can create a backup using one of three modes, full, lightweight or dataless.
-   **[Create a manual backup](/pages/admin/backup_restore/take_backup.html)**  
Use this procedure when you want to manually create a backup. If you would like to restore from a backup, contact ThoughtSpot Support.
-   **[Configure periodic backups](/pages/admin/backup_restore/configure_backup.html)**  
You can configure ThoughtSpot to backup automatically at specified times. The policy allows you to control the type, frequency, retention periods (first-in-first-out), and output location for a periodic backup.

**Parent topic:** [Backup and restore](/pages/admin/backup_restore/intro_backup_restore.html)
