---
title: [Configure authentication through Active Directory]


last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot enables you to set up integration with Active Directory using LDAP. After successful setup, you can authenticate users against AD, including authentication over SSL.

## Before you begin
Before you configure ThoughtSpot for Active Directory, collect the following information:
- **URL**: Required to connect to Active Directory. For example, `ldap://ad.yourdomain.local:389` or `ldap://ad.yourdomain.local:636`
- **Domain name**: Default domain under which users who want to be authenticated against Active Directory reside. When a user logs in with a username, the default domain is added to the username before sending it to the LDAP server. If users reside in multiple sub-domains, you can still designate one of them as the default. Authentication against multiple domains is not supported. **_NOTE:_** Users who don't belong to the default domain will have to explicitly qualify their username when they log in, for example: `username@ad.yourdomain.local`
- **Search base**: LDAP search base (Scope of searching user information like email and displayName within AD).
- **SSL**: If you want to use SSL, you must obtain the SSL certificate from an issuing authority. **_NOTE:_** If AD servers are behind a load balancer, you must procure the SSL certificate to identify ThoughtSpot to the load balancer (The communication after the load balancer is non-secure). ThoughtSpot does not support a scenario where multiple AD servers provide their own SSL certificates.
- **Automatically add LDAP or AD users in ThoughtSpot? (yes/no)**: If you choose 'yes', new users are automatically created within ThoughtSpot when successfully authenticated against AD. Note that ThoughtSpot doesn't cache passwords for AD-authenticated users. If you choose 'no', users have to be manually created with a dummy password as a placeholder in ThoughtSpot before they can log in. The username you specify when creating the LDAP authenticated user manually in ThoughtSpot has to be domain qualified, for example: `username1@ad.yourdomain.local`. **_NOTE:_** In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against AD or against ThoughtSpot's internal authentication.
- **Also use ThoughtSpot internal authentication? (yes/no)**: If you choose 'yes', ThoughtSpot will first attempt to authenticate the user against AD. If that attempt fails, it will then attempt to authenticate the user as an internal/local ThoughtSpot user. If either of these succeed, then the user is successfully logged in. This is useful in scenarios where some users are not in AD and are created only in ThoughtSpot.

<!-- ## Configure using Management Console

{% include note.html content="The Management Console is now available in beta for customers with ThoughtSpot 5.3 or newer." %}

To configure authentication via Active Directory:
=======
  **_NOTE:_** In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against LDAP or against ThoughtSpot's internal authentication.
- **Also use ThoughtSpot internal authentication? (yes/no)**: If you choose 'yes', ThoughtSpot will first attempt to authenticate the user against LDAP when a user logs in. If that attempt fails, it will then attempt to authenticate the user against ThoughtSpot. If either of these succeed, then the user is successfully logged in.

  **_NOTE:_** You can use this option only in `tscli`. This is useful in scenarios where some users are not in LDAP and are created only in ThoughtSpot.

<!--
## Configure using Management Console

{% include note.html content="The Management Console is now available in beta for customers with ThoughtSpot 5.3 or later. Please contact ThoughtSpot Support, if you want to try it." %}

To configure LDAP for active directory:


1. Log into ThoughtSpot from a browser.
2. Click the **Admin** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/admin.png)

   This opens the ThoughtSpot Management Console.
3. Click **Settings** menu on the top navigation bar.

   ![]({{ site.baseurl }}/images/settings.png)

4. In the Settings panel, click **Authentication: Active Directory** and then  **Configure** option.

   ![]({{ site.baseurl }}/images/ad.png)  


5. Enter the active directory details with the information you gathered above in **Before you begin** section:

   ![]({{ site.baseurl }}/images/ad-configure.png)

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
   <td>Select <b>Yes</b> to automatically add AD users to ThoughtSpot upon first successful authentication. For more information, see <b>Before you begin section</b>.</td>
   </tr>
   <tr>
   <th>SSL Required?</th>
   <td>If you are using SSL, add the **SSL Certificate** and specify the **Certificate Alias** for LDAP.
   </td>
   </tr>
   </table>

6. Click **Save** to configure the active directory configuration.

-->
## Configure using tscli

You do not have to create a user called `tsadmin` on your LDAP server. Internal authentication can be used for `tsadmin`. To configure AD based authentication:

1. Log in to the Linux shell using SSH.
2. Run the command to configure AD authentication:

    ```
    $ tscli ldap configure
    ```

3. Answer the prompts using the information you collected under **Before you begin** section. For example:

    ```
    Choose the LDAP protocol:
    [1] Active Directory
    Option number: 1
    Configuring Active Directory
    URL to connect to Active Directory. (Example: ldap://ad.yourdomain.local:389): ldaps://ad.yourdomain.local:636
    Default domain (Example: ldap.thoughtspot.com): yourdomain.local
    Use SSL (LDAPS) (y/n): n
    LDAP search base (Example: cn=Users): cn=Users,ou=orgunit,dc=youdomain,dc=local
    Automatically add LDAP users in ThoughtSpot (y/n): y
    Also use ThoughtSpot internal authentication (y/n): y
    ```

4. If you are using SSL, [add the SSL certificate for AD](add-SSL-for-LDAP.html#).
5. If you want to remove the AD configuration, issue:

    ```
    $ tscli ldap purge-configuration
    ```
