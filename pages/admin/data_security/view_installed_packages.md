---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# View installed packages

You can view installed Linux packages at any time, along with the version numbers of the installed packages.

Use the command `tscli os list-packages` to see installed packages and their version:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Issue the `tscli os list-packages` command to list installed packages: 

    ```
    $ tscli os list-packages
    
    |Package                         |Version                          |
    |------------------------------------------------------------------|
    |accountsservice                 |0.6.15-2ubuntu9.7                |
    |acpid                           |1:2.0.10-1ubuntu3                |
    |adduser                         |3.113ubuntu2                     |
    |apache2                         |2.2.22-1ubuntu1.10               |
    |apache2-mpm-prefork             |2.2.22-1ubuntu1.10               |
    |apache2-utils                   |2.2.22-1ubuntu1.10               |
    |apache2.2-bin                   |2.2.22-1ubuntu1.10               |
    
    ...
    ```


**Parent topic:** [Security policies](../../admin/data_security/security_policy.html)

