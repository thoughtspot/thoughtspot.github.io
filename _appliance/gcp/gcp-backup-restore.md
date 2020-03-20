---
title: [Back up and Restore]
last_updated: 3/13/2020
sidebar: mydoc_sidebar
summary: "Learn how to back up or restore your ThoughtSpot cluster hosted in GCP."
permalink: /:collection/:path.html
---
You can back up and restore your ThoughtSpot cluster hosted in GCP using a GCS bucket.

It is recommended to use a bucket in the same region as your cluster. By doing this, you avoid additional cross-region data transfer costs.

## Backing up to an GCS bucket

To back up your cluster to a GCS bucket, use the ThoughtSpot tscli:

1. Log in to the Linux shell of your cluster using SSH.
    ```
    $ ssh admin@<cluster-IP>
    ```
2. Run the backup command using the following syntax:  

    `tscli backup create --storage_type=cloud <SNAPSHOT NAME> <PATH TO BACKUP IN CLOUD>`
    Example:
    ```
    $ tscli backup create --storage_type=cloud snapshot_1 my_backup001
    ```

## Restoring from an GCS bucket

To restore your cluster from an GCS bucket, use the ThoughtSpot tscli:

1. Log in to the Linux shell of your cluster using SSH.
    ```
    $ ssh admin@<cluster-IP>
    ```
2. Run the restore command using the following syntax:  

    `tscli cluster restore <PATH TO BACKUP ON CLOUD> --enable_cloud_storage=gcs`

    Example:
    ```
    $ tscli cluster restore gcs://bucket0001/backup/my_backup001
    ```
