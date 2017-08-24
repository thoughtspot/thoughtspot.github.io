---
title: [Configure OpenLDAP]
tags: [Security_SAML_LDAP_AD, SysAdm_tscli_Config]
keywords: tbd
last_updated: tbd
summary: "Use this procedure to set up integration with LDAP using OpenLDAP."
sidebar: mydoc_sidebar
---
Before configuring OpenLDAP, you will need this information:

-   URL to connect to OpenLDAP

    For example, `ldap://192.168.2.48:389`

-   Distinguished Name template

    The template for usernames, for example `cn={0},ou=users,dc=thoughtspot,dc=com`

-   Automatically add LDAP users in ThoughtSpot?

    If you choose 'yes' for this, when a user is authenticated against LDAP, if that user does not exist in ThoughtSpot, the user is automatically created. When users are created in this way, their passwords exist only in LDAP and are not stored in ThoughtSpot.

    If you choose 'no' for this, users who will authenticate against LDAP have to be manually created with a dummy password as a placeholder in ThoughtSpot before they can log in. In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against LDAP or against ThoughtSpot's internal authentication.

-   Also use ThoughtSpot internal authentication?

    If you choose 'yes' for this, when a user logs in, ThoughtSpot will first attempt to authenticate the user against LDAP. If that attempt fails, it will then attempt to authenticate the user against ThoughtSpot. If either of these succeed, then the user is successfully logged in. This option is useful in scenarios where some users are not in LDAP and are created only in ThoughtSpot.


You do not need to create a user called `tsadmin` on your LDAP server. Internal authentication can be used for `tsadmin`. To configure LDAP for OpenLDAP:

1. [Log in to the Linux shell using SSH](logins.html#ssh-to-the-appliance).
2. Run the command to configure LDAP:

    ```
    $ tscli ldap configure
    ```

3. Answer the prompts using the information you collected. For example:

    ```
    Choose the LDAP protocol:
    [1]  Active Directory
    [2]  OpenLDAP
    Option number: 2

    Configuring Open LDAP

    URL to connect to OpenLDAP (Example: ldap://192.168.2.100:389): ldap://192.168.2.48:389

    Distinguished name template (Example: cn={0},ou=users,dc=thoughtspot,dc=com): cn={0},ou=users,dc=thoughtspot,dc=com

    Automatically add LDAP users in ThoughtSpot (y/n): n

    Also use ThoughtSpot internal authentication (y/n): y
    ```

4. If you are using SSL, [Add the SSL certificate for LDAP](add_SSL_for_LDAP.html#).
5. If you want to remove the LDAP configuration, issue:

    ```
    $ tscli ldap purge-configuration
    ```
