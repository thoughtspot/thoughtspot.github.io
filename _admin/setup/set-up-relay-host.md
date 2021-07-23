---
title: [Set the relay host for SMTP (email)]
last_updated: 7/23/2021
summary: "ThoughtSpot uses emails to send critical notifications to ThoughtSpot Support. A relay host for SMTP traffic routes the alert and notification emails coming from ThoughtSpot through an SMTP email server."
redirect_from:
- /7.0.0.mar.sw/admin/setup/set-up-relay-host.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can configure the relay host [using tscli](#tscli) or [through the Admin Console](#admin-portal).

{: id="tscli"}
## Configure using tscli

Set up SMTP rules to send critical email notifications to ThoughtSpot Support.

### Set up the relay host

To set up a relay host:

1. Log in to the Linux shell using SSH.
2. Issue the setup command, providing the IP address of the relay host:

    On ThoughtSpot release 6.1.1 and later, or on release 6.0.5, you can specify a custom port to connect to the relay host. If you do not specify a port, the system uses the default recommended port, port 25. Use a custom port if port 25 is blocked in your environment.

    To use the default port, run the setup command:

    ```
    $ tscli smtp set-relayhost <IP_address>
    ```

    To use a custom port instead of port 25, run the setup command, specifying the port you want to use:

    ```
    $ tscli smtp set-relayhost <IP_address>:<custom_port>
    ```

    If you are on 6.1 rather than 6.1.1, or an earlier version than 6.0.5, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to use a custom port.

3. Verify your settings:

    ```
    $ tscli smtp show-relayhost
    ```

4. Verify that email is working.

### Configure an email to send alerts

1. Log in to the Linux shell using SSH.

2. Specify the domain of the email address you would like emails to come from. In `example@company.com`, this command specifies `company`.

    ```
    $ tscli smtp set-mailname <mailname>
    ```

3. Specify the name of the email address you would like emails to come from. In `example@company.com`, this command specifies `example`.

    ```
    $ tscli smtp set-mailfromname <mailfromname>
    ```

### Configure SMTP authentication

1. Log in to the Linux shell using SSH.

2. If SMTP authentication is required, you must specify a username and password. Skip this step if SMTP authentication is not required.

    ```
    $ tscli smtp set-saslcredentials
    ```

{: id="configure-email"}
### Configure an email to receive alerts

ThoughtSpot sends alerts to the email address specified during installation. If you do not specify an email address, you do not receive any alerts. To add an email to receive alerts, issue the following command.

{% include note.html content="Add the ThoughtSpot Support alert email, <code>prod-alerts@thoughtspot.com</code>, to allow ThoughtSpot Support to receive alerts. ThoughtSpot Support monitors these alerts to ensure your cluster's health. Do not add this email to POC or demo environments." %}

```
$ tscli monitoring set-config --email <prod-alerts@thoughtspot.com>,<your_email>
```

To send to multiple emails, provide a comma-separated list with no spaces.

{: id="verify-email"}
### Verify the relay with an email

Check if the email settings are working properly by using this procedure.

 1. Log in to the Linux shell using SSH.
 2. Try sending an email to yourself by issuing:

    ```
    $ echo | mail -s Hello <your_email>
    ```

 3. If you receive the email at the address(es) you supplied, email is working correctly.

{: id="admin-portal"}
{% include content/admin-portal/smtp-configure.md %}

After you configure SMTP through the Admin Console, use `tscli` to [configure an email to receive monitoring alerts](#configure-email) and [verify the relay with an email](#verify-email).

## Additional resources
As you develop your expertise in emails and alerts, we recommend the following ThoughtSpot U course:
* [Email and Alert Setup](https://training.thoughtspot.com/emails-alerts){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
