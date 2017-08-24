---
title: [Manage periodic snapshots]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
By default, each ThoughtSpot cluster is configured to take automatic, periodic snapshots of your cluster. This section explains how to learn more about the periodic snapshots in your cluster.

The default snapshot policy is enabled for every cluster. You can use the `tscli snapshot-policy show` command to display the current policy for periodic snapshots.

```

$ tscli snapshot-policy show
schedule {
    period {
        number: 1
        unit: HOUR
        }
        retention_policy {
            bucket {
                time {
                    number: 1
                    unit: HOUR
            }
            capacity: 3
            }
            bucket {
                time {
                    number: 4
                    unit: HOUR
            }
            capacity: 2
            }
    }
    offset_minutes_from_sunday_midnight: 0
}
enabled: true

```

This policy takes a snapshot every hour starting at midnight on Sudnay. It retains the snapshots from the last three hour intervals and two snapshots from two of the previous 4 hour intervals. For detailed information about understing the schedule, see [Understand backup/snapshot schedules](how_to_create_a_schedule.html).

You shouldn't change this default policy unless instructed to by support. If you have to adjust it for some reason, you can use, `tscli snapshot-policy update` command. This opens the current policy in an editor. Your policy should never retain more than 20 snapshots at any point in time. Exceeding this number can impact cluster performance.

You cannot delete the snapshot policy. However, you can disable the policy by executing the`tscli snapshot-policy disable` command. And you can reenable it by running, `tscli snapshot enable-policy`.

CAUTION:

Backups rely on the snapshot system. For this reason, you should never disable the periodic snapshot system. For example, if you have disabled the periodic snapshots and periodic backups are enabled, then the periodic backup may use a very outdated snapshot or it may fail all together.

To check your current periodic snapshot policy:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Enter `tscli snapshot-policy show` to view the policy.

**Parent topic:** [Work with snapshots](../../admin/backup_restore/overview_snapshot.html)
