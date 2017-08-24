---
title: [Configure LDAP for Active Directory]
tags: [Security_SAML_LDAP_AD, SysAdm_tscli_Config]
keywords: LDAP, "Active Directory"
last_updated: tbd
summary: "Use this procedure to set up integration with LDAP using Active Directory."
sidebar: mydoc_sidebar
---
Before you configure LDAP for Active Directory, collect this information:

-   URL to connect to Active Directory.

    For example, `ldap://192.168.2.48:389`

-   Default LDAP domain.

    The default domain is the domain under which users who want to be authenticated against Active Directory reside. When a user logs in with a username, the default domain is added to the username before sending it to the LDAP server. If users reside in multiple domains, you can still designate one of them as the default. Users belonging to a non-default domain will have to explicitly qualify their username when they log in, for example: `username@ldap1.thoughtspot.com`.

-   Whether you will use SSL.

    If yes, you'll need the certificate from the issuing authority.

-   LDAP search base.

    This prompt adds the search base information that allows ThoughtSpot to find user properties such as email and displayname from LDAP.

-   Automatically add LDAP users in ThoughtSpot?

    If you choose 'yes' for this, when a user is authenticated against LDAP, if that user does not exist in ThoughtSpot, then the user is automatically created. When users are created in this way, their passwords exist only in LDAP and are not stored in ThoughtSpot.

    In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against LDAP or against ThoughtSpot's internal authentication. If you choose 'no' for this, users who will authenticate against LDAP have to be manually created with a dummy password as a placeholder in ThoughtSpot before they can log in. The username you specify when creating the LDAP authenticated user manually in ThoughtSpot has to be domain qualified, for example: `username@ldap1.thoughtspot.com`.

-   Also use ThoughtSpot internal authentication?

    If you choose 'yes' for this, when a user logs in, ThoughtSpot will first attempt to authenticate the user against LDAP. If that attempt fails, it will then attempt to authenticate the user against ThoughtSpot. If either of these succeed, then the user is successfully logged in. This option is useful in scenarios where some users are not in LDAP and are created only in ThoughtSpot.


You do not need to create a user called tsadmin on your LDAP server. Internal authentication can be used for tsadmin. To configure LDAP for OpenLDAP:

1. [Log in to the Linux shell using SSH](logins.html#ssh-to-the-appliance).
2. Run the command to configure LDAP:

    ```
    $ tscli ldap configure
    ```

3. Answer the prompts using the information you collected. For example:

    ```
    Choose the LDAP protocol:
    [1] Active Directory
    [2] OpenLDAP
    Option number: 1

    Configuring Active Directory

    URL to connect to Active Directory. (Example: ldap://192.168.2.100:389): ldap://192.168.2.100:389

    Default domain (Example: ldap.thoughtspot.com): ldap.thoughtspot.com

    Use SSL (LDAPS) (y/n): n

    LDAP search base (Example: cn=Users): cn=Users

    Automatically add LDAP users in ThoughtSpot (y/n): y

    Also use ThoughtSpot internal authentication (y/n): y
    ```

4. If you are using SSL, [Add the SSL certificate for LDAP](add_SSL_for_LDAP.html#).
5. If you want to remove the LDAP configuration, issue:

    ```
    $ tscli ldap purge-configuration
    ```
