---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Backup and restore

ThoughtSpot provides a full set of backup and restore features to protect your data from disasters and human error. You can use these for disaster recovery, for migrating a cluster, or for recreating a cluster on another appliance or virtual appliance.

There are two ways to save a cluster. Snapshots run faster and are taken on a running cluster, but in some cases you'll need to pull a snapshot out as a backup.

## Snapshots

A snapshot is a point-in-time capture of a cluster persisted on disk in HDFS. You can take a snapshot at any time, and it takes about 20 seconds.

Snapshots are both taken on and restored to a cluster while it is running. A snapshot may only be restored to the same cluster on which it was taken. In addition, the cluster software release version must match the snapshot release version.

If you need to move data between clusters or restore to a cluster that has been updated to a new release, contact ThoughtSpot Support.

## Backups

A backup is similar to a snapshot, except that it is self-contained and portable, because it is stored on disk in the file system. A backup is created by pulling an existing snapshot out as a backup. It is recommended to pull a backup periodically, to protect you from losing data and any work that has been done by users. You can set up ThoughtSpot to take these backups periodically at intervals and modes you define.

## Disaster recovery

There is an even more robust strategy for backup and recovery that involves having a backup cluster offline that is kept in sync with the production cluster. Then if the production cluster fails, the backup cluster can be drafted to take its place with minimal loss of work and disruption to operations. Details on this architecture and instructions on setting it up are available in the ThoughtSpot Disaster Recovery Guide, which you can request from ThoughtSpot.

