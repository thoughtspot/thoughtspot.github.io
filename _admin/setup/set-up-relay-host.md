---
title: [Set the relay host for SMTP (email)]
tags: [tscli]
keywords: email,SMTP,notification,"relay host"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot uses emails for sending critical notifications to ThoughtSpot Support. A relay host for SMTP traffic routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.

## Configure using Management Console
To set up a relay host and SMTP rules using the admin UI:
1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **SMTP** and then  **Configure** option.

   **image**  


5. Enter the relay host details:

   **image**

   <table>
   <colgroup>
   <col width="20%" />
   <col width="80%" />
   </colgroup>
   <tr>
   <th>Field</th>
   <th>Description</th>
   </tr>
   <tr>
   <th>Relay Host</th>
   <td>Specify the IP address of the relay host.</td>
   </tr>
   <tr>
   <th>Port</th>
   <td>Specify the port of the relay host.</td>
   </tr>
   <tr>
   <th>Is Host Reachable</th>
   <td>Select <b>Yes</b> if host is reachable. ThoughtSpot will verify the host.</td>
   </tr>
   <tr>
   <th>From Email</th>
   <td>Specify an email to receive alerts.</td>
   </tr>
   <tr>
   <th>From Name</th>
   <td>Specify the name associated with the email.</code>.
   </td>
   </tr>
   <tr>
   <th>SMTP Authentication Required</th>
   <td>Select <b>Yes</b> if you wish to enable SMTP authentication.
   </td>
   </tr>
   </table>

6. Click **Save** to configure the SMTP traffic rules.


## Configure using tscli

Set up SMTP rules to send critical email notifications to ThoughtSpot Support.

### Set up the relay Host

To set up a relay host:

1. Log in to the Linux shell using SSH.
2. Issue the setup command, providing the IP address of the relay host:

    ```
    $ tscli smtp set-relayhost <IP_address>
    ```

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
