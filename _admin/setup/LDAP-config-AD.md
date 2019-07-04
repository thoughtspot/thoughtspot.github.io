---
title: [Configure LDAP for Active Directory]
tags: [SAML_LDAP_AD, tscli]
keywords: LDAP, "Active Directory"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot enables you to set up integration with LDAP using Active Directory. After successful setup, you can authenticate users against secure LDAP.


## Before you begin
Before you configure LDAP for Active Directory, collect the following information:
- **URL**: This is needed to connect to Active Directory. For example, `ldap://192.168.2.48:389`
- **Domain name**: Preferred domain under which users who want to be authenticated against Active Directory reside. When a user logs in with a username, the default domain is added to the username before sending it to the LDAP server. If users reside in multiple domains, you can still designate one of them as the default.

  **_NOTE:_** Users belonging to a non-default domain will have to explicitly qualify their username when they log in, for example: `username@ldap1.thoughtspot.com`
- **Search base**: LDAP search base that allows ThoughtSpot to find user properties such as email and display name from LDAP.
- **SSL**: Obtain the SSL certificate from an issuing authority if you want to use SSL.
- **Automatically add LDAP or AD users in ThoughtSpot? (yes/no)**: If you choose 'yes', the user that does not exist in ThoughtSpot is automatically created and authenticated against LDAP. Note that such users passwords exist only in LDAP and are not stored in ThoughtSpot.

  If you choose 'no', users have to be manually created with a dummy password as a placeholder in ThoughtSpot before they can log in. The username you specify when creating the LDAP authenticated user manually in ThoughtSpot has to be domain qualified, for example: `username@ldap1.thoughtspot.com`.

  **_NOTE:_** In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against LDAP or against ThoughtSpot's internal authentication.
- **Also use ThoughtSpot internal authentication? (yes/no)**: If you choose 'yes', ThoughtSpot will first attempt to authenticate the user against LDAP when a user logs in. If that attempt fails, it will then attempt to authenticate the user against ThoughtSpot. If either of these succeed, then the user is successfully logged in.

  **_NOTE:_** You can use this option only via tscli. This is useful in scenarios where some users are not in LDAP and are created only in ThoughtSpot.


## Configure using Management Portal
To configure LDAP for active directory:

1. Log into ThoughtSpot from a browser.
2. Click the **Admin** icon on the top navigation bar.

   ![]({{ site.baseurl }}/images/mgmt-portal/admin.png)

   This opens the ThoughtSpot Management Portal.
3. Click **Settings** icon on the top navigation bar.

   **image**

4. In the Settings panel, click **Authentication: Active Directory** and then  **Configure** option.

   **image**  


5. Enter the active directory details:

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
   <th>URL</th>
   <td>Specify the URL to connect to active directory.</td>
   </tr>
   <tr>
   <th>Domain name preferred</th>
   <td>Specify the preferred LDAP domain name.</td>
   </tr>
   <tr>
   <th>Search Base</th>
   <td>Specify the LDAP search base.</td>
   </tr>
   <tr>
   <th>Add users in ThoughtSpot?</th>
   <td>Select **Yes** to automatically add AD users to ThoughtSpot upon first successful authentication. For more information, see **Before you begin section**.</td>
   </tr>
   <tr>
   <th>SSL Required?</th>
   <td>If you are using SSL, add the **SSL Certificate** and specify the **Certificate Alias** for LDAP.</a>
   </td>
   </tr>
   </table>

6. Click **Save** to configure the active directory configuration.



## Configure using tscli

You do not need to create a user called `tsadmin` on your LDAP server. Internal authentication can be used for `tsadmin`. To configure LDAP:

1. Log in to the Linux shell using SSH.
2. Run the command to configure LDAP:

    ```
    $ tscli ldap configure
    ```

3. Answer the prompts using the information you collected under **Before you begin** section. For example:

    ```
    Choose the LDAP protocol:
    [1] Active Directory
    Option number: 1

    Configuring Active Directory

    URL to connect to Active Directory. (Example: ldap://192.168.2.100:389): ldap://192.168.2.100:389

    Default domain (Example: ldap.thoughtspot.com): ldap.thoughtspot.com

    Use SSL (LDAPS) (y/n): n

    LDAP search base (Example: cn=Users): cn=Users

    Automatically add LDAP users in ThoughtSpot (y/n): y

    Also use ThoughtSpot internal authentication (y/n): y
    ```

4. If you are using SSL, [add the SSL certificate for LDAP](add-SSL-for-LDAP.html#).
5. If you want to remove the LDAP configuration, issue:

    ```
    $ tscli ldap purge-configuration
    ```
