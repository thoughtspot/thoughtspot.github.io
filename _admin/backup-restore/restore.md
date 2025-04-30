---
title: [About restore operations]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When restoring to a running cluster where the ThoughtSpot software is not updated, we recommend that you use a snapshot. But in the case where you updated the cluster to a new release, if the configuration changed significantly, or when restoring to a different cluster, you must restore from a backup.

Restoring from backup require that you first delete the old cluster. Changes to a cluster that require restoring from a backup instead of a snapshot include:

-   Removal of a node.
-   Restoring to a different cluster from the one where the snapshot/backup was taken.
-   Restoring to a cluster running a different release from the one where the snapshot/backup was taken.

You should never restore from a snapshot or backup yourself. To perform a restore from a snapshot or backup, contact ThoughtSpot Support.
