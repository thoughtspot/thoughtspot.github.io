---
title: [Set the relay host for SMTP (email)]
last_updated: 5/8/2020
summary: "ThoughtSpot uses emails to send critical notifications to ThoughtSpot Support. A relay host for SMTP traffic routes the alert and notification emails coming from ThoughtSpot through an SMTP email server."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Configure using tscli

Set up SMTP rules to send critical email notifications to ThoughtSpot Support.

### Set up the relay Host

To set up a relay host:

1. Log in to the Linux shell using SSH.
2. Issue the setup command, providing the IP address of the relay host.

    Starting with ThoughtSpot release 6.0.5, you can specify a custom port to connect to the relay host. If you do not specify a port, the system uses the default recommended port, port 25. Use a custom port if port 25 is blocked in your environment.

    To use the default port, run the setup command:

    ```
    $ tscli smtp set-relayhost <IP_address>
    ```

    To use a custom port instead of port 25, run the setup command, specifying the port you want to use:

    ```
    $ tscli smtp set-relayhost <IP_address>:<custom_port>
    ```

    If you are on an earlier version than 6.0.5, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to use a custom port.

3. Verify your settings:

    ```
    $ tscli smtp show-relayhost
    ```

4. Verify that email is working.

### Configure an email to receive alerts

ThoughtSpot sends alerts to the email address specified during installation. If no email address was entered, no alerts are sent. You should add an email to receive alerts by issuing:

```
$ tscli monitoring set-config --email <your_email>
```

To send to multiple emails, provide a comma-separated list with no spaces.

### Verify the relay with an email

Check if the email settings are working properly by using this procedure.

 1. Log in to the Linux shell using SSH.
 2. Try sending an email to yourself by issuing:

    ```
    $ echo | mail -s Hello <your_email>
    ```

 3. If you receive the email at the address(es) you supplied, email is working correctly.
