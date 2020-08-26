---
title: [Set the relay host for SMTP (email)]
tags: [tscli]
keywords: email,SMTP,notification,"relay host"
last_updated: tbd
summary: "To enable alert emails, you'll need to set up a relay host for SMTP traffic."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot uses emails for sending critical notifications to ThoughtSpot Support. A relay host for SMTP traffic routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.

## Set up the relay Host

To set up a relay host:

1. Log in to the Linux shell using SSH.
2. Issue the setup command, providing the IP address of the relay host:

    ```
    $ tscli smtp set-relayhost <IP_address>
    ```

    ThoughtSpot uses port 25 to connect to the relay host. If port 25 is blocked in your environment, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to use a custom port.

3. Verify your settings:

    ```
    $ tscli smtp show-relayhost
    ```

4. Verify that email is working.

## Configure an email to receive alerts

ThoughtSpot sends alerts to the email address specified during installation. If you do not specify an email address, you do not receive any alerts. To add an email to receive alerts, issue the following command.

{% include note.html content="Add the ThoughtSpot Support alert email, <code>prod-alerts@thoughtspot.com</code>, to allow ThoughtSpot Support to receive alerts. ThoughtSpot Support monitors these alerts to ensure your cluster's health. Do not add this email to POC or demo environments." %}

```
$ tscli monitoring set-config --email <prod-alerts@thoughtspot.com>,<your_email>
```

To send to multiple emails, provide a comma-separated list with no spaces.

## Verify the relay with an email

Check if the email settings are working properly by using this procedure.

 1. Log in to the Linux shell using SSH.
 2. Try sending an email to yourself by issuing:

    ```
    $ echo | mail -s Hello <your_email>
    ```

 3. If you receive the email at the address(es) you supplied, email is working correctly.
