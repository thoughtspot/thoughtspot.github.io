---
title: Set the relay host for SMTP (email)
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "To enable alert emails, you'll need to set up a relay host for SMTP traffic from ThoughtSpot. This routes the alert and notification emails coming from ThoughtSpot through an SMTP email server."
sidebar: mydoc_sidebar
---

To set up a relay host:

1. [Log in to the Linux shell using SSH](login_console.html#).
2. Issue the setup command, providing the IP address of the relay host:

    ```
    $ tscli smtp set-relayhost <IP\_address>
    ```

3. Verify your settings:

    ```
    $ tscli smtp show-relayhost
    ```

##  Verify that email is working

Check if the email settings are working properly by using this procedure. ThoughtSpot uses emails for sending critical notifications to ThoughtSpot Support.

ThoughtSpot sends alerts to the email address specified during installation. If no email address was entered, no alerts will be sent. But you can add an email to receive alerts by issuing:

```
$ tscli monitoring set-config --email <your\_email>
```

You can add a list of email addresses separated by commas, with no spaces.

To verify that the send email function is working correctly:

1.   [Log in to the Linux shell using SSH](login_console.html#).
2.   Try sending an email to yourself by issuing:

    ```
    $ echo | mail -s Hello <your\_email>
    ```

3.   If you receive the email at the address you supplied, email is working correctly.
