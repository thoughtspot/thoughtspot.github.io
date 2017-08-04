---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# About LDAP integration

Some companies use LDAP \(Lightweight Directory Access Protocol\) to manage user authentication. Using LDAP provides security and makes user management more centralized.

ThoughtSpot can be configured to authenticate users against an LDAP server. You can choose to authenticate users against an LDAP server, against ThoughtSpot, or both.

ThoughtSpot supports both anonymous and non-anonymous LDAP integration. Non-anonymous LDAP binding is more rigorous than anonymous authentication, but it should help you track what your users are querying and keep a log trace for auditing purposes.

If you have been using ThoughtSpot with users you created manually, and you now want to transition to LDAP, please contact ThoughtSpot Support. They can assist you in migrating existing users to their LDAP equivalents.

ThoughtSpot supports these types of LDAP servers:

-   [OpenLDAP](LDAP_config_openLDAP.html#)
-   [Active Directory](LDAP_config_AD.html#)

