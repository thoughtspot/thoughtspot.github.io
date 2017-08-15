---
title: [Connect to the database with the ThoughtSpot SQL Command Line (TQL)]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
To perform administrative tasks directly in the database, you will use the ThoughtSpot SQL Command Line (TQL). TQL supports many, but not all, common SQL commands.

Before connecting with TQL, you will need:

-   Access to your ThoughtSpot instance Linux shell from a client machine.
-   The administrator OS login.

To connect to TQL:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#).
2.   Invoke TQL:

    ```
    $ tql

    TQL>
    ```

3.   Enter your SQL command, followed by a semicolon (;).

**Parent topic:** [Build the schema](../../admin/loading/create_schema.html)
