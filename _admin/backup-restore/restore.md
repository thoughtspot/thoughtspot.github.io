---
title: [About restore operations]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When restoring to a running cluster that where the ThoughtSpot software was not updated, you'll usually use a snapshot. But in the case where you've updated the cluster to a new release, the configuration has changed significantly, or you're restoring to a different cluster, you'll need to restore from a backup.

Restoring from backup require that you first delete the old cluster. Changes to a cluster that require restoring from a backup instead of a snapshot include:

-   Removal of a node.
-   Restoring to a different cluster from the one where the snapshot/backup was taken.
-   Restoring to a cluster running a different release from the one where the snapshot/backup was taken.

You should never restore from a snapshot or backup yourself. To perform a restore from a snapshot or backup, contact ThoughtSpot Support.
