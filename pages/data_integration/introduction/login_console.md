---
title: [Log in to the Linux shell using SSH]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "Use SSH oo perform basic administration such as checking network connectivity, starting and stopping services."
sidebar: mydoc_sidebar
---
# Log in to the Linux shell using SSH

To perform basic administration such as checking network connectivity, starting and stopping services, and setting up email, log in remotely as the Linux administrator user "admin". To log in with SSH from a client machine, you can use the command shell or a utility like Putty.

In the following procedure, replace `<hostname\_or\_IP>` with the hostname or IP address of a node in ThoughtSpot. The default SSH port (22) will be used.

1.   Log in to a client machine and open a command prompt.
2.   Issue the SSH command, specifying the IP address or hostname of the ThoughtSpot instance:

    ```
    ssh admin@<hostname\_or\_IP>
    ```

3.   Enter the password for the admin user.

**Parent topic:** [Introduction](../../data_integration/introduction/introduction_data_integration.html)
