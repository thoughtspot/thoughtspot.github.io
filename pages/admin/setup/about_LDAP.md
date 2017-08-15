---
title: [About LDAP integration]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Some companies use LDAP \(Lightweight Directory Access Protocol\) to manage user authentication. Using LDAP provides security and makes user management more centralized.

ThoughtSpot can be configured to authenticate users against an LDAP server. You can choose to authenticate users against an LDAP server, against ThoughtSpot, or both.

ThoughtSpot supports both anonymous and non-anonymous LDAP integration. Non-anonymous LDAP binding is more rigorous than anonymous authentication, but it should help you track what your users are querying and keep a log trace for auditing purposes.

If you have been using ThoughtSpot with users you created manually, and you now want to transition to LDAP, please contact ThoughtSpot Support. They can assist you in migrating existing users to their LDAP equivalents.

ThoughtSpot supports these types of LDAP servers:

-   [OpenLDAP](LDAP_config_openLDAP.html#)
-   [Active Directory](LDAP_config_AD.html#)

-   **[Configure OpenLDAP](../../admin/setup/LDAP_config_openLDAP.html)**  
Use this procedure to set up integration with LDAP using OpenLDAP.
-   **[Configure LDAP for Active Directory](../../admin/setup/LDAP_config_AD.html)**  
Use this procedure to set up integration with LDAP using Active Directory.
-   **[Add the SSL certificate for LDAP](../../admin/setup/add_SSL_for_LDAP.html)**  
When you set up LDAP, you specified whether or not to use SSL for LDAP \(LDAPS\). If using SSL, you must install the LDAP SSL certificate.
-   **[Test the LDAP configuration](../../admin/setup/test_ldap.html)**  
After configuring LDAP, you can test to make sure it is working by issuing a command.
-   **[Sync users and groups from LDAP](../../admin/setup/sync_users_and_groups_from_ldap.html)**  
Use this procedure to synchronize your ThoughtSpot system with an LDAP server.

**Parent topic:** [Installation and setup](../../admin/setup/intro.html)
