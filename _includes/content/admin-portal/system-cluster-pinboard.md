You can view cluster information from the Admin Console. The **System Cluster Pinboard** contains several ThoughtSpot Answers that display capacity, latency over time, snapshot status, installed release, node functions, and logs. To view this Pinboard, navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Cluster** from the side navigation bar that appears.

![Admin Console - Cluster Pinboard]({{ site.baseurl }}/images/admin-portal-cluster-pinboard.png "Admin Console - Cluster Pinboard")

Only the **Average Latency Last 2 Weeks (sec)** and **Total Capacity** panels contain a standard ThoughtSpot visualization. The other visualizations rely on internal queries that are not accessible. You can, however, **Present** them, or **Copy embed link**.

{: id="space-utilization"}
## Total Capacity (GB), Total Used Space (GB) by Daily (Day of Timestamp)

The **Total Capacity (GB), Total Used Space (GB) by Daily (Day of Timestamp)** chart displays your cluster's total capacity and estimated used capacity over time.

![Space utilization]({{ site.baseurl }}/images/admin-portal-overview-pinboard-space-utilization.png "Space Utilization")

The x-axis is by time and the y-axis measures the size in GB. You can zoom in
and see daily or hourly utilization data. So, in the **Space Utilization** chart
above, the green line shows the amount of capacity in use in the system, while
the red line shows the total capacity. An increase in the red line at the end of
a time period indicates the addition of extra hardware, resulting in increased
capacity.

The query for this Answer is the following:


```
day of timestamp
total capacity (gb)
total used space (gb)
daily
last 90 days last 25 hours
total capacity (gb) > 0
total used space (gb) > 0
```

The chart relies on the `TS: Internal Table Wise Capacity WS` worksheet. It
tracks  total used space, which consists of raw uncompressed data, including
replication.

## Cluster Details

The fields on this visualization have the following meaning:

 <table>
 <colgroup>
    <col style="width:35%" />
    <col style="width:65%" />
 </colgroup>
    <tr>
       <th>Field</th>
       <th>Description</th>
    </tr>
    <tr>
       <th>Cluster Name</th>
       <td>
          The name of the cluster defined at installation time.
       </td>
    </tr>
    <tr>
       <th>Cluster ID</th>
       <td>
          The ID of the cluster set at installation time.
       </td>
    </tr>
    <tr>
       <th>Last Update Time</th>
       <td>
          Last time the cluster was updated.
       </td>
    </tr>
    <tr>
       <th>Release</th>
       <td>
          Version of the current release.
       </td>
    </tr>
    <tr>
       <th>Zookeeper Servers</th>
       <td>
          IP addresses of the Zookeeper servers.
       </td>
    </tr>
    <tr>
       <th>HDFS Name Nodes</th>
       <td>
          Control nodes for Hadoop Distributed File System (HDFS).
       </td>
    </tr>
   </table>

## Cluster Logs

The fields on this visualization have the following meaning:

<table>
<colgroup>
   <col style="width:35%" />
   <col style="width:65%" />
</colgroup>
   <tr>
      <th>Field</th>
      <th>Description</th>
   </tr>
   <tr>
      <th>Time</th>
      <td>
         A timestamp indicating when an action occurred.
      </td>
   </tr>
   <tr>
      <th>Type</th>
      <td>
         Type of action.
      </td>
   </tr>
   <tr>
      <th>Release</th>
      <td>
        Identifies the full release number.
      </td>
   </tr>
</table>

You can also use the `tscli logs` command to review log data from your cluster.

## List of Snapshots

This visualization shows the snapshots _and the backups_ taken on the cluster.
The fields on this visualization have the following meaning:

<table>
<colgroup>
   <col style="width:35%" />
   <col style="width:65%" />
</colgroup>
   <tr>
      <th>Field</th>
      <th>Description</th>
   </tr>
   <tr>
      <th>Time</th>
      <td>
         A timestamp indicating when a snapshot or backup happened occurred.
      </td>
   </tr>
   <tr>
      <th>Name</th>
      <td>
         Name of the snapshot file. These files are stored in the `/usr/local/scaligent/backup` directory on your cluster.
      </td>
   </tr>
   <tr>
      <th>Reason</th>
      <td>
        Identifies the reason the snapshot/backup was created. You should see several period snapshots if your cluster is configured properly. You may also see evidence here of manual backups. For example, you should be sure your cluster is backed up before major events such as upgrades. Contact <a href="{{ site.baseurl }}/appliance/contact.html">ThoughtSpot Support</a> if you don't see evidence your cluster is periodically creating snapshots.
      </td>
   </tr>
   <tr>
      <th>Size</th>
      <td>
        Size of the backup in gigabytes.
      </td>
   </tr>
</table>

## Average Latency Last 2 Weeks (sec)

This visualization relies on the `TS: BI Server` worksheet to display the
average database latency over the last 15 days. The database latency measures how long it takes for a search to return data from ThoughtSpot - this does not include the time taken to send the answer back to the client, it measures internal processing time. You can use the visualization
menu to drill down to its underlying query:

```
average datacache (sec)
average total (sec)
daily
last 15 days
for database latency (us) > 0
```
