---
title: [Set the relay host for SMTP (email)]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
To enable alert emails, you'll need to set up a relay host for SMTP traffic from ThoughtSpot. This routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.

To set up a relay host:

1.   [Log in to the Linux shell using SSH](login_console.html#).
2.   Issue the setup command, providing the IP address of the relay host:

    ```
    $ tscli smtp set-relayhost <IP\_address>
    ```

3.   Verify your settings:

    ```
    $ tscli smtp show-relayhost
    ```

4.   [Verify that email is working](setup_email.html#).

-   **[Verify that email is working](../../admin/setup/setup_email.html)**  
 Check if the email settings are working properly by using this procedure. ThoughtSpot uses emails for sending critical notifications to ThoughtSpot Support.

**Parent topic:** [Installation and setup](../../admin/setup/intro.html)
