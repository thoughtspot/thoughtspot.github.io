---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Configure periodic snapshots

You can configure ThoughtSpot to take snapshots for you automatically at specified times you define, or keep the default snapshot policy.

The default snapshot policy is enabled for each cluster. A periodic snapshot is taken every hour, and the old snapshots are retained based on the following time-based pattern:

-   3 \* 1-hour snapshots

-   2 \* 4-hour snapshots


This means you will always have a snapshot that was taken 1, 2, 3, 4, and 8 hours ago. You can create up to 20 automatic snapshots, but this is dependent on the garbage collection policy.

The periodic snapshot policy can be adjusted by executing the tscli command, `tscli snapshot update-policy`. This will bring up an editor. However, it is not recommended that you change it.

You cannot delete the snapshot policy. However, you can disable the policy by executing the tscli command, `tscli snapshot disable-policy`. And you can reenable it by running, `tscli snapshot enable-policy`.

CAUTION:

Disabling periodic snapshots will prevent periodic backups from working.

To check your current periodic snapshot policy:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Issue `tscli snapshot show-policy` Your policy will be displayed as such:

    ```
    admin@dogfood1:~$ tscli snapshot show-policy
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

    `period` denotes how often periodic snapshots are taken. `number` is the frequency in the chosen time `unit`. So in the example above, a snapshot is taken every one hour.

    `retention_policy` denotes which snapshots are available at any given moment. `capacity` sets the number of snapshots retained for a certain time policy. Therefore, you will always have the number of snapshots set in `capacity` for that time policy. So for the first `bucket` in the example above, a snapshot is available for each hour over the past three hours, which totals three snapshots. For the second `bucket` in the example above, a snapshot is available for every four hours over the past eight hours, which totals two snapshots.

    `offset_minutes_from_sunday_midnight` lets you set the minute within the hour you'd like to start your periodic snapshot. Setting it to zero, as depicted in the example above, will have the snapshot begin at midnight.


