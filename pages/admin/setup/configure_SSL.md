---
title: [Configure SSL for web traffic]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
This procedure shows how to add SSL (secure socket layers) to enable secure HTTP (HTTPS) in ThoughtSpot.

To set up SSL, you will need:

-   The SSL certificate
-   The private key

To install the SSL certificate:

1.   Follow the instructions from your certifying authority to obtain the certificate. This is usually sent via email or available by download.
2.   Copy the certificate and key files to ThoughtSpot:

    ```
    $ scp <key> <certificate> admin@<IP\_address>:<path>
    ```

3.   [Log in to the Linux shell using SSH](login_console.html#).
4.   Change directories to where you copied the certificate:

    ```
    $ cd <path>
    ```

5.   Issue the tscli command to install the certificate:

    ```
    $ tscli ssl add-cert <key> <certificate>
    ```

6.   To test that the certificate was installed correctly, [Log in to ThoughtSpot from a browser](accessing.html#).

    You should see that the URL begins with `https://`.


**Parent topic:** [About SSL (secure socket layers)](../../admin/setup/about_SSL.html)
