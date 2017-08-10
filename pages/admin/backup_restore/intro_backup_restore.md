# Backup and restore

ThoughtSpot provides a full set of backup and restore features to protect your data from disasters and human error. You can use these for disaster recovery, for migrating a cluster, or for recreating a cluster on another appliance or virtual appliance.

-   **[Understand the backup strategies](../../admin/backup_restore/choose_strategy.html)**  
This section discusses three strategies for backing up your ThoughtSpot cluster.
-   **[Understand backup/snapshot schedules](../../admin/backup_restore/how_to_create_a_schedule.html)**  

-   **[Work with snapshots](../../admin/backup_restore/overview_snapshot.html)**  

-   **[Work with backups](../../admin/backup_restore/backups_and_snapshots.html)**  
A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.
-   **[About restore operations](../../admin/backup_restore/restore.html)**  
When restoring to a running cluster that where the ThoughtSpot software was not updated, you'll usually use a snapshot. But in the case where you've updated the cluster to a new release, the configuration has changed significantly, or you're restoring to a different cluster, you'll need to restore from a backup.

