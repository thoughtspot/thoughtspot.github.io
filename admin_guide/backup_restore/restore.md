# About restore operations

When restoring to a running cluster that has not been updated, you'll usually use a snapshot. But in the case where you've updated the cluster to a new release, the configuration has been changed significantly, or you're restoring to a different cluster, you'll need to restore from a backup.

Snapshots are restored onto a running cluster, while backups require deleting the existing cluster first.

Snapshot restore is not supported for cross versions. As such, if you’re running version 3.4, you can only restore to a snapshot taken in 3.4.

Changes to a cluster that require restoring from a backup instead of a snapshot include:

-   Removal of a node.
-   Restoring to a different cluster from the one where the snapshot/backup was taken.
-   Restoring to a cluster running a different release from the one where the snapshot/backup was taken.

**Note:** To perform a restore from a snapshot or backup, contact ThoughtSpot Support.

