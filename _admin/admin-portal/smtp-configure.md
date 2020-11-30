---
title: [Set the relay host for SMTP (email)]
last_updated: 8/13/2020
summary: ThoughtSpot uses emails to send critical notifications to ThoughtSpot Support. A relay host for SMTP traffic routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/admin-portal/smtp-configure.md %}

### Configure an email to receive alerts

ThoughtSpot sends alerts to the email address specified during installation. If you do not specify an email address, you do not receive any alerts. To add an email to receive alerts, `ssh` into your cluster from the command line and issue the following command.

{% include note.html content="Add the ThoughtSpot Support alert email, <code>prod-alerts@thoughtspot.com</code>, to allow ThoughtSpot Support to receive alerts. ThoughtSpot Support monitors these alerts to ensure your cluster's health. Do not add this email to POC or demo environments." %}

```
$ tscli monitoring set-config --email <prod-alerts@thoughtspot.com>,<your_email>
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

## Additional resources
As you develop your expertise in emails and alerts, we recommend the following ThoughtSpot U course:
* [Email and Alert Setup](https://training.thoughtspot.com/emails-alerts){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
