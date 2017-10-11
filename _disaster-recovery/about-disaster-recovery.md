---
title: [About disaster recovery]
tags:
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Disaster recovery is the ability to recover from a hardware or software failure or a catastrophic event. ThoughtSpot protects you from data loss in the event of a hardware or software failure or a catastrophic event.

ThoughtSpot takes snapshots of itself automatically at periodic intervals. These can be pulled out as backups at intervals or manually as needed. See the ThoughtSpot Administrator Guide for details on backups, snapshots and restore operations.

The information here addresses disaster recovery specifically. These are some potential types of failure, listed in increasing order of severity:

-   [Disk failure](disk-failure.html#)
-   [Node failure](node-failure.html#)
-   [Cluster replacement](cluster-replacement.html#)

ThoughtSpot supports recovery from disk or node failure within each appliance. You can also architect your system to support loss of an entire appliance, which is the highest level of disaster recovery.

## Where to go next

-   **[Disk failure]/disaster_recovery/disaster_recovery/disk-failure.html)**  
ThoughtSpot uses replication of stored data. When a disk goes bad, ThoughtSpot continues to operate.
-   **[Node failure]/disaster_recovery/disaster_recovery/node-failure.html)**  
ThoughtSpot uses replication of stored data. When a disk goes bad, ThoughtSpot continues to operate.
-   **[Cluster replacement]/disaster_recovery/disaster_recovery/cluster-replacement.html)**  
Cluster replacement can be achieved using a mirrored system architecture. This allows you to recover an entire system very quickly without data loss.
