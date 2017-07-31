# About backups

You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Some advanced administrative operations also use backups.

## When to use a backup

Backups are created from an existing snapshot, but they differ from snapshots in the following ways:

-   Backups are stored on disk in a directory, while snapshots are stored in HDFS.
-   You can use a backup to recover from data loss or corruption, even if your cluster has been destroyed. Snapshots can be lost if the HDFS name node fails, you lose multiple disks at once, or the entire cluster is destroyed.
-   If you need to move data between two appliances, you must use a backup. Snapshots may only be used to restore to the cluster they were taken from.

## Backups and disk space

Backups can be quite large, so make sure you have enough disk space before taking one. Backups are usually stored using a [NAS \(network attached storage\) file system](../setup/NAS_mount.html#). In the case of periodic backups, you must ensure enough space to store all of the backups you want to save, plus some extra space.

Use a calculation like the example shown here to ensure enough disk space. Suppose a single backup takes up 6 GB of space, and that you specify three backups when setting up periodic backup, using the flag `-num_backup 3`. This means that three copies will be stored at the most. But the amount of space required will be larger than the simple calculation 6GB X 3.

When doing a backup, ThoughtSpot copies the release tarball and several other files and then checks if those files already exist before beginning the backup. If the files are already present, then they are removed from the backup copy. Storing these files takes about 5 GB of extra space. So in this example, where you want to store three backups, you need about 18 + 5 = 23 GB of free disk space. Remember that the data to be backed up can grow over time, so you should occasionally check to make sure you are not running out of space to store backups.

## Types of backups

Backups can be full, lightweight, or dataless.

## Full backups

Full backups are entire backups of the cluster with all data, whether loaded from the web interface or from tsload. They are written to a directory, which may be moved between clusters, even if the cluster configuration is different. Full backups can be very large, so before taking one, you should make sure there is enough disk space in the directory where it will be stored. [NAS \(network attached storage\)](../setup/NAS_mount.html#) is recommended for storing backups.

## Lightweight backups

Lightweight backups contain everything that makes up a cluster, except for any data loaded through ThoughtSpot Loader \(tsload\), ODBC/JDBC drivers, and Data Connect. Any data loaded via tsload can be re-loaded after the cluster has been restored, using the same scripts or remote connections you used to load it initially. tsload, ODBC/JDBC, and Data Connect data may be part of lightweight backups if they're used to load data into tables created through CSV import \(i.e. userdata\).

The lightweight backups contain the following:

-   Cluster configuration \(SSH, LDAP, etc.\)

-   In-memory data cache

-   All data that is stored in HDFS

-   Data uploaded by users

-   Metadata for the data store

-   Users, groups and permissions

-   Objects created by users \(pinboards, worksheets, and formulas\) with their shares and permissions.

-   Data model and row-level security rules.


## Dataless backups

Dataless backup saves a backup of the schema, with no data. This is provided mainly for support purposes, to enable you to send a copy of your cluster metadata to ThoughtSpot Support for troubleshooting, without compromising data security and privacy. When restoring from a dataless backup, you must supply the correct release tarball, since this type of backup does not include the software release. The size of a dataless backup is usually within 10's of megabytes if you do not have customized binaries.

