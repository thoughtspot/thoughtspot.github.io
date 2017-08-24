---
title: [Upload logs to ThoughtSpot Support]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
ThoughtSpot Support uses a secure file sever to collect log files or other files needed for troubleshooting. You can easily send log files to this file serve directly from the ThoughtSpot instance.

Before you can upload a file to the secure file server:

1.  [Configure the connection to the file server](../setup/configure_secure_file_server_connection.html#).
2.  Obtain the directory path on the file server.

The server directory path for uploading a file is formatted like this example: `/Shared/support/<customer_name>`. If you do not know the customer name, [contact ThoughtSpot Support](../misc/contact.html#).

You can upload files directly to the file server using this procedure:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Navigate to the directory where the file to be uploaded is located.
3.   Issue the command to upload the file, specifying the file name and directory path:

    ```
    $ tscli fileserver upload --file_name <file> --server_dir_path <path>
    ```

    When your upload succeeds, you will see a confirmation message.


**Parent topic:** [Get logs](../../admin/troubleshooting/get_logs.html)
