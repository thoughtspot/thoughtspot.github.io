---
title: [Work with snapshots]
keywords: backup,snapshot
tags: [performance]
last_updated: 06/16/2019
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
A snapshot is a timestamped image of your live cluster that you can use to restore that cluster. This article describes how to work with the default snapshot configuration of your cluster, and how to make manual snapshots.

To work with snapshots, use either the `tscli` command line interface, or the Management Console.

{% include note.html content=" The Management Console is in beta on ThoughtSpot Release 5.3 or later. Contact ThoughtSpot Support to enable it." %}

{% include warning.html content="Backups rely on the snapshot system, so you must never disable the periodic snapshot system. If
you disable periodic snapshots and enable periodic backups, the
backups either fail or use an outdated snapshot." %}

## Create a manual snapshot

You must create a snapshot before making any changes to the environment,
loading a large amount of data, or changing the structure of a table. ThoughtSpot supports up to 20 manual snapshots. You must clear them to create new snapshots. To delete a snapshot, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

{% include note.html content="During an upgrade, all snapshots from the previous version of ThoughtSpot become manual snapshots." %}

ThughtSpot creates a snapshot in approximately 20 seconds, depending on the size of the cluster. To restore from a snapshot, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

### Using Management Console

To manually create a snapshot using the Admin UI, follow these steps:

1. Log into ThoughtSpot from a browser.

2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the Management Console.

3. Click the **Settings** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the **Settings** panel, click **Snapshot**, and select the   **Configure** option.

   ![]({{ site.baseurl }}/images/snapshot.png)  

5. Enter the snapshot configuration details:

   ![]({{ site.baseurl }}/images/snapshot-create.png)

   | Field | Description |
   | --- | --- |
   | Snapshot Name | Specify the name of the snapshot. |
   | Time to Live | Specify the day counter after which the snapshot automatically expires from the system. |

6. Click **Save** to create a snapshot.

You can see the new snapshot file in the snapshot dashboard.

### Using tscli

To create a snapshot using the `tscli`, follow these steps:

1. Log into the Linux shell using SSH.
2. Create a snapshot, specifing its name and the reason for creating it. Note that snapshot names must not exceed 44 characters.

    ```
    $ tscli snapshot create <name> <reason> <ttl>
    ```

3. Check that the snapshot was created successfully:

    ```
    $ tscli snapshot ls
    ```

## Configure periodic snapshots

Each ThoughtSpot cluster automatically makes periodic
snapshots based on its default snapshot policy. You can change this policy.

### Using Management Console

The default snapshot policy is enabled for every cluster. You can update the current policy for periodic snapshots.

**Update the snapshot policy**

To update your current periodic snapshot policy, follow these steps:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.

3. Navigate to **Settings** >> **Snapshot**. This opens the Snapshot list panel.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the **Snapshot** list panel, click the **Configure Snapshot Policy** option.

   ![]({{ site.baseurl }}/images/snapshot-policy.png)  

5. Update the snapshot policy details:

   ![]({{ site.baseurl }}/images/snapshot-policy-configure.png)

   | Field | Description |
   | --- | --- |
   | Snapshot Policy | Specify _Enabled_ or _Disabled_. |
   | Period | Specify the frequency of the chosen unit of time: _Minutes_, _Hours_, or _Days_. |
   | Retention Policy | Specify the retention intervals in the chosen unit of time: _Minutes_, _Hours_, or _Days_. Retention is on a first-in-first-out (FIFO) basis, discarding the oldest results first. |
   | Capacity |  |

   To use multiple retention buckets with different retention policies, click <strong>Add Retention Policy</strong> to specify multiple policies.

6. Click **Save** to update the snapshot policy.


### Using tscli

The default snapshot policy is enabled for every cluster. You can display the current policy for periodic snapshots.

**View snapshot policy**

To view your current periodic snapshot policy, follow these steps:

1. Log into the Linux shell using SSH.
2. Enter `tscli snapshot-policy show` command to view the policy.

In the following example, the policy starts at midnight on Sunday. It retains the snapshots from the previous three 4-hour intervals, and two snapshots from two of the previous 4-hour
intervals. Here, ThoughtSpot retains 7 periodic snapshots overall. For
detailed information about understanding the schedule, see [Understand
backup/snapshot schedules](how-to-create-a-schedule.html).  

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
      capacity: 4
    }
    bucket {
      time {
        number: 1
        unit: DAY
      }
      capacity: 4
    }
    bucket {
      time {
        number: 1
        unit: WEEK
      }
      capacity: 2
    }
  }
  offset_minutes_from_sunday_midnight: 0
}
enabled: true

```
**Update the snapshot policy**

Do not change the default policy, unless it is recommended by [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

{% include note.html content="Your policy must hold no more than 20 snapshots at any time. Exceeding this number impacts cluster performance." %}

To update your current periodic snapshot policy, follow these steps:
1. Log in to the Linux shell using SSH.
2. Enter `tscli snapshot-policy update`.
3. In the editor, make changes to the current policy, and save them.

You cannot delete the snapshot policy. However, you can either disable or enable it.

**Disable the snapshot policy**  

To disable your current periodic snapshot policy, follow these steps:

1. Log into the Linux shell using SSH.
2. Enter `tscli snapshot-policy disable`.

**Enable the snapshot policy**  

To enable a specific periodic snapshot policy, follow these steps:  

1. Log into the Linux shell using SSH.
2. Enter `tscli snapshot-policy enable`.
