---
title: [Configure SAML]
tags: [SAML_LDAP_AD, tscli]
keywords: SAML, ldap, AD, security
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot enables you to use the Security Assertion Markup Language (SAML) to authenticate user. You can set up SAML using the management console or through the shell on ThoughtSpot using a `tscli` based configurator.

## Before you begin

Before you configure SAML, you need the following information:

- **ThoughtSpot Service address**: Domain or IP of the server where your ThoughtSpot instance is running.
- **Port**: Port of the server where your ThoughtSpot instance is running.
- **Unique service name**: The unique key used as IDP to identify the client. It should be in the following format: `urn:thoughtspot:callosum:saml`
- **Skew Time in Seconds**: Allowed skew time, which is the time after authentication response is rejected and sent back from the IDP. It is usually set to 3600 seconds.
- **Protocol**: An authentication mechanism for ThoughtSpot.
- **IDP Metadata XML File**: The absolute path to the `idp-meta.xml` file. This is needed so that the configuration persists over upgrades.
- **Automatically add SAML users** (yes/no): If you choose 'yes', the user that does not exist in ThoughtSpot is automatically created in ThoughtSpot.

  If you choose 'no', SAML users are added in ThoughtSpot upon first login.
- **Internal authentication**: This configurator also checks with the user if internal authentication needs to be set or not. This internal authentication mechanism is used to authenticate `tsadmin`, so set it to true if you do not know what it does.

  **_NOTE:_** You can set internal authentication only through `tscli`.

## Configure using Management Console
To configure SAML using the admin UI:

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **Authentication: SAML** and then  **Configure** option.

   **image**  


5. Enter the SAML details with the information you gathered above in **Before you begin section**:

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
