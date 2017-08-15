---
title: [Understand backup/snapshot schedules]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can schedule periodic snapshots and backups. For snapshots, ThoughtSpot comes configured with a strongly recommended periodic backup policy. For backups, there is no such policy but you may want to create one or several of your own configurations. This section useful for understanding how to understand existing schedules and how to configure new schedules.

## Configuration format

ThoughtSpot uses a [protcol buffer](https://developers.google.com/protocol-buffers/) configuration file to hold snapshot and backup policies. There are slight differences between the configuration of snapshots and backups. You'll read more about these later. However, the file format defines a `schedule` structure which is the same for both snapshots and backups. The following example shows the `schedule` format:

```

schedule {
    period {
        number: integer
        unit: MINUTE | HOUR | DAY
        }
    retention_policy {
        bucket {
            time {
                number: integer
                unit: MINUTE | HOUR | DAY
             }
             capacity: integer
        }
    }
    offset_minutes_from_sunday_midnight: integer
}

```

The `schedule` has the following components:

| `period`

 | Specifies the frequency in the choosen `unit`. You can specify the `unit` as `MINUTE`, `HOUR`, or `DAY`.

 |
| `retention_policy`

 | Specifies retention intervals. Retention is on a first-in-first-out \(FIFO\) basis. So, the oldest result is always discarded. You can specify the `unit` as `MINUTE`, `HOUR`, or `DAY`.

 You can specify multiple retention buckets and they can have different retention policies.

 |
| `offset_minutes_from_sunday_midnight`

 | Determines the minute within the hour you'd like execution to start. Setting this to zero is equivalent to midnight.

 |

## Work through an example schedule

In this section, you work through an example schedule. This is a working example that is the actual default snapshot schedule set on every ThoughtSpot instance.

```

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

```

Under this policy, a snapshot is taken every hour starting at midnight. You can see that by combining the `period` of 1 \(one\) hour with the midnight offset of 0 \(zero\).

```

    schedule {
        period {
            number: 1
            unit: HOUR
        }
        ...
        }
        offset_minutes_from_sunday_midnight: 0
    }                

```

Using this frequency, a total of 24 snapshots are taken in a day.

|1|2|3|4|5|6|7|8|9|10|11|12|13|14|...|24|

If you were to specify a `number` of 2, the frequency changes. The first execution would start at midnight but subsequent executions would happen every 2 hours as shown here:

| |2| |4| |6| |8| |10| |12| |14|...|24|

You use the `rentention_policy` to control how many snapshots are kept. In this example, the first bucket retains a snapshot every three hours.

```

retention_policy {
    bucket {
        time {
            number: 1
            unit: HOUR
        }
        capacity: 3
    }     
    ...
 }

```

When the fourth hour comes along, the snapshot from first hour is discarded as per FIFO behavior. So in the 4th hour, you'll have the snapshots from hours 2, 3, and 4 in this retention bucket.

|1D|2R|3R|4R|5|6|7|8|9|10|11|12|13|14|...|24|

The second bucket retains the snapshot taken at four hour intervals.

```

 retention_policy {
    ...
    bucket {
        time {
            number: 4
            unit: HOUR
        }
        capacity: 2
    }      
}

```

It retains two of these four-hour-interval snapshots at any one time. By hour 9 during the day, you have the snapshots from hour 4 and hour 8 in this second bucket.

|1|2|3|4R|5|6|7|8R|9|10|11|12|13|14|...|24|

Consider what you will have in the first bucket in hour 9? The first bucket will have the snapshots from hour 9, 8, and 7.

At the end of the day, in the first bucket, you will have 22, 23, and 24th snapshot. While in the second bucket, you will have the 20th hour and the 24th hour snapshots.

|1|...|12|13|14|15|16|17|18|19|20R|21|22R|23R|24R|

What if you changed the `period` frequncy to every 2 hours? What would you have retained in your buckets at hour 24?

|1|...|12| |14| |16| |18R| |20R| |22R| |24R|

As you can see, when defining a policy it can be helpful to graphically represent the frequency you configure. Then, determine which time blocks are important to retain before determining your retention bucket.

**Parent topic:** [Backup and restore](../../admin/backup_restore/intro_backup_restore.html)
