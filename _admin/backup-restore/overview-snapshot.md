---
title: [Work with snapshots]
keywords: backup,snapshot
tags: [performance]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
A snapshot is a point-in-time image of your running cluster you can use to restore the cluster back to a specific point in time. In this section, you will learn how to work with the default snapshot configuration
that is enabled on every cluster and how to take manual snapshots of your own.

## Create a manual snapshot

You should create a snapshot before making any changes to the environment,
loading a large amount of new data, or changing the structure of a table. You
can have up to 20 manual snapshots at a time, after which, you have to clear one
before you are able to create another. If you need to delete a snapshot, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

{% include note.html content="When you upgrade, all existing snapshots from the previous version of ThoughtSpot will become manual snapshots." %}

Taking a snapshot is fast, about 20 seconds. It happens invisibly in the
background of a running cluster.  If you would like to restore from a snapshot
instead, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

### Using Management Console
To manually create a snapshot using the admin UI:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **Snapshot** and then  **Configure** option.

   **image**  


5. Enter the snapshot configuration details:

   **image**

   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
   <tr>
   <th>Field</th>
   <th>Description</th>
   </tr>
   <tr>
   <th>Snapshot Name</th>
   <td>Specify the name of the snapshot.</td>
   </tr>
   <tr>
   <th>Time to Live</th>
   <td>Specify the day counter after which the snapshot automatically deletes.</td>
   </tr>
   </table>

6. Click **Save** to create a snapshot.

You can see the newly created snapshot file in the snapshot dashboard.

### Using tscli

To create a snapshot using the tscli:

1. Log in to the Linux shell using SSH.
2. Initiate a snapshot, providing a name and reason for creating it: Snapshot names must be 44 characters or less.


    ```
    $ tscli snapshot create <name> <reason> <ttl>
    ```

3. Check that the snapshot was created:

    ```
    $ tscli snapshot ls
    ```


## Configure periodic snapshots

By default, each ThoughtSpot cluster is configured to take automatic, periodic
snapshots of your cluster. This section explains how to learn more about the
periodic snapshots in your cluster.

### Using Management Console
The default snapshot policy is enabled for every cluster. You can update the current policy for periodic snapshots.

To update your current periodic snapshot policy using the admin UI:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/mgmt-portal/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **Snapshot** and then  **Configure Snapshot Policy** option.

   **image**  


5. Update the snapshot policy details:

   **image**

   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
   <tr>
   <th>Field</th>
   <th>Description</th>
   </tr>
   <tr>
   <th>Snapshot Policy</th>
   <td>Specify the name of the snapshot.</td>
   </tr>
   <tr>
   <th>Period</th>
   <td>Specify the frequency in the chosen unit. Allowed unit types are Minutes, Hours, or Days.</td>
   </tr>
   <tr>
   <th>Retention Policy</th>
   <td>Specify the retention intervals in the chosen unit. Allowed unit types are Minutes, Hours, or Days. Retention is on a first-in-first-out (FIFO) basis. So, the oldest result is always discarded.

   <p><b>Note:</b> You can add multiple retention buckets with different retention policies. Click <b>Add Retention Policy</b> to specify more policies.</p></td>
   </tr>
   </table>

6. Click **Save** to update the snapshot policy.


### Using tscli

The default snapshot policy is enabled for every cluster. You can display the current policy for periodic snapshots.

To check or view your current periodic snapshot policy:

1. Log in to the Linux shell using SSH.
2. Enter `tscli snapshot-policy show` to view the policy.

```

[admin@dogfood1 ~]$ tscli snapshot-policy show
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

The above policy starts  at midnight on Sunday. It retains the snapshots from the
last three 4-hour intervals and two snapshots from two of the previous 4 hour
intervals. That means, there are 7 periodic snapshots retained overall. For
detailed information about understanding the schedule, see [Understand
backup/snapshot schedules](how-to-create-a-schedule.html).

You shouldn't change this default policy unless instructed to by [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#). If you
have to adjust it for some reason, you can update it. This opens the current policy in an editor.

{% include note.html content="Your policy should never retain more than 20 snapshots at any point in time. Exceeding this number can impact cluster performance." %}

To update your current periodic snapshot policy:
1. Log in to the Linux shell using SSH.
2. Enter `tscli snapshot-policy update` to update the periodic policy.

You cannot delete the snapshot policy. However, you can disable or enable the policy.

To disable your current periodic snapshot policy:

1. Log in to the Linux shell using SSH.
2. Enter `tscli snapshot-policy disable` to disable a snapshot policy.

To enable a specific periodic snapshot policy:

1. Log in to the Linux shell using SSH.
2. Enter `tscli snapshot-policy enable` to enable a specified snapshot policy.

{% include warning.html content="Backups rely on the snapshot system. For this
reason, you should never disable the periodic snapshot system. For example, if
you have disabled the periodic snapshots and periodic backups are enabled, then
the periodic backup may use a very outdated snapshot or it may fail all
together." %}
