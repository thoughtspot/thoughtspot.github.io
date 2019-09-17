---
title: [Configure SAML]
tags: [SAML_LDAP_AD, tscli]
keywords: SAML, ldap, AD, security
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot enables you to use the Security Assertion Markup Language (SAML) to authenticate user. You can set up SAML using the management console or through the shell on ThoughtSpot using a `tscli` based configurator. It is configured to work using service provided by an Identity Provider (IDP).

## Before you begin

Before you configure SAML, you need the following information:

1. ThoughtSpot Service address: DNS name of the load balancer front-end (For multi-node ThoughtSpot clusters) or of ThoughtSpot server (For single-node ThoughtSpot cluster).
2. Service port: Service port for ThoughtSpot instance (Typically TCP/443).
3. Unique service name: The unique key used in ThoughtSpot as an identifier for IDP service. It will be set by ThoughtSpot Support Team. It can be set to anything in the format  `urn:thoughtspot:callosum:saml`.
4. Skew Time in Seconds: Allowed skew time for authentication (Duration after authentication response is rejected and sent back from the IDP). Usually set to `3600` seconds.
5. IDP Metadata XML File: This file is provided by the IDP. The absolute path to the `idp-meta.xml` file is needed for one-time configuration.
6. Decide whether to `Automatically add SAML users to Thoughtspot: (yes/no)`: If you choose 'yes', then new users will be automatically created in ThoughtSpot. If 'no', then SAML users will be added in ThoughtSpot upon first successful SSO login.
7. Decide whether to `Also use ThoughtSpot internal authentication (y/n)`: If 'y' then ThoughtSpot local/internal users (including local administrative users) will still be authenticated outside the scope of SSO.

## Configure using Management Console

{% include note.html content="The Management Console is now available as a `Beta` release." %}

To configure SAML using the admin UI:

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the Settings panel, click **Authentication: SAML** and then  **Configure** option.

   ![]({{ site.baseurl }}/images/saml.png)  


5. Enter the SAML details with the information you gathered above in **Before you begin section**:

   ![]({{ site.baseurl }}/images/saml-configure.png)

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
   <th>ThoughtSpot Service address</th>
   <td>Specify the Domain or IP of the cluster.</td>
   </tr>
   <tr>
   <th>Port</th>
   <td>Specify the port of the cluster.</td>
   </tr>
   <tr>
   <th>Unique Service Name</th>
   <td>Specify the service ID to identify client.</td>
   </tr>
   <tr>
   <th>Skew Time in Seconds</th>
   <td>Specify the alowed skew time.</td>
   </tr>
   <tr>
   <th>Protocol</th>
   <td>Specify the protocol fro authentication.</td>
   </tr>
   <tr>
   <th>IDP Metadata XML File</th>
   <td>Specify the IDP file path to persist configure over upgrades.</td>
   </tr>
   <tr>
   <th>Add users in ThoughtSpot?</th>
   <td>Select <b>Yes</b> to automatically add SAML users to ThoughtSpot upon first successful authentication. For more information, see <b>Before you begin section</b>.</td>
   </tr>
   </table>

6. Click **Save** to configure the SAML configuration.

You can now test the SAML setup. Open ThoughtSpot login page in a browser. You should see the the Single Sign On (SSO) option.


## Configure using tscli

To set up SAML on ThoughtSpot for user authentication:

**_NOTE:_** This configuration persists across software updates, so you do not have to reapply it if you update to a newer release of ThoughtSpot.

1. Log in to the Linux shell using SSH.
2. Execute the command to launch the interactive SAML configuration:

    ```
    tscli saml configure
    ```

3. Complete the configurator prompts with the information you gathered above in **Before you begin section**.
4. When the configuration is complete, open a browser and go to the ThoughtSpot login page.
   It should now show the SSO option.
