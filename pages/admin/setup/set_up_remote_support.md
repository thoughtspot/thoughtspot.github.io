---
title: [Set up remote support access]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You can set up a reverse tunnel to allow ThoughtSpot Support to get access to your ThoughtSpot instance, to perform support-related activities. This setup is a much simpler, more secure, and scalable than the alternative option of using a virtual meeting room.

Before you can do this procedure, your networking team needs to open port 22 in your firewall outgoing rules.

Granting remote support access can streamline troubleshooting activities, since it enables your support agent to work directly in a secure setting. The remote tunnel enables SSH and HTTP access to your by ThoughtSpot Support. This access can be granted and revoked easily, so you can enable it for a troubleshooting session, and then disable it again. Before doing this procedure, make sure it is allowed by your internal security policies.

To enable remote support:

1.   [Contact ThoughtSpot](../misc/contact.html#) to open a support ticket for making the appropriate reverse tunnel settings on our end. Provide the cluster name of the cluster for which you want to enable remote support.
2.   When the ticket has been completed, continue with the remaining steps in this procedure to make the settings on your side.
3.   [Log in to the Linux shell using SSH](login_console.html#).
4.   Issue the command to configure the destination for the remote tunnel. You only need to do this once, when you are enabling the tunnel for the very first time. After that, this setting persists when you start and stop the remote tunnel.

    ```
    $ tscli support set-remote --addr tunnel.thoughtspot.com --user ubuntu
    ```

5.   Test that the setting has been applied:

    ```
    $ tscli support show-remote
    ```

6.   Enable the remote tunnel:

    ```
    $ tscli support start-remote
    ```

7.   [Contact ThoughtSpot](../misc/contact.html#) again, so you can test the setup with your ThoughtSpot Support contact.
8.   After your remote session with ThoughtSpot Support, you should turn the remote tunnel off, until you need to use it again:

    ```
    $ tscli support stop-remote
    ```

    You can repeat the steps to start and stop the remote tunnel as needed for future support operations.

9.   Test that the remote tunnel has been disabled:

    ```
    $ tscli support show-remote
    ```


**Parent topic:** [Installation and setup](../../admin/setup/intro.html)
