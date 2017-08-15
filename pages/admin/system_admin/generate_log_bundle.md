---
title: [Generate and send a log bundle]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Use theses steps to generate a log bundle, which you can then send to ThoughtSpot Support.

Before you can send a log bundle to ThoughtSpot Support, you must [Connect to the ThoughtSpot Support file server](../setup/configure_secure_file_server_connection.html#). This is a one-time setup operation.

To generate a log bundle:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Issue the command to generate the log bundle:

    ```
    tscli callhome generate-bundle
       --d <directory> --since <num\_of\_daysd>
    ```

    **Note:** Don't forget to include `d` after your specified number of days. For example, `30d`.

3.   Change directories to the directory where you wrote the log bundle.
4.   Issue the command to send the log bundle to ThoughtSpot Support:

    ```
    tscli fileserver upload
       --file_name <file>
       --server_dir_path <path>
    ```


**Parent topic:** [System administration](../../admin/system_admin/sysadmin_overview.html)
