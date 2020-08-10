---
title: [Authentication through Active Directory integration]
last_updated: 7/24/2020
toc: true
summary: ThoughtSpot enables you to set up integration with LDAP using Active Directory. After successful setup, you can authenticate users against a secure LDAP server.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can use ThoughtSpot's integration with Active Directory for user authentication. By default, [local authentication]({{ site.baseurl }}/admin/admin-portal/authentication-local.html) is enabled. You can also configure integration with LDAP through Active Directory, allowing you to authenticate users against an LDAP server. ThoughtSpot does not support any other LDAP authentication.

You can configure the Active Directory integration through the Admin Portal.

{: id="prerequisites"}
## Configuration prerequisites

Before you configure ThoughtSpot for Active Directory, collect the following information:

| &#10063; | [URL](#url) |
| &#10063; | [Domain name](#domain-name) |
| &#10063; | [Search base](#search-base) |
| &#10063; | [SSL](#ssl) |
| &#10063; | [Automatically add LDAP or AD users in ThoughtSpot?](#auto-add) |
| &#10063; | [Also use ThoughtSpot internal authentication?](#ts-auth) |

{: id="url" }
### URL

Required to connect to Active Directory.

For example, `ldap://ad.yourdomain.local:389` or `ldap://ad.yourdomain.local:636`

{: id="domain-name" }
### Domain name

Default domain under which users who want to be authenticated against Active Directory reside. When a user logs in with a username, the default domain is added to the username before sending it to the LDAP server. If users reside in multiple sub-domains, you can still designate one of them as the default. Authentication against multiple domains is not supported.

Users who don't belong to the default domain must explicitly qualify their username when they log in.

For example: `username@ad.yourdomain.local`

{: id="search-base" }
### Search base

LDAP search base. The scope of searching user information, like _email_ and _Display name_, within AD.

{: id="auto-add" }
### Automatically add LDAP or AD users in ThoughtSpot? (yes/no)

If you choose 'yes', new users are automatically created within ThoughtSpot when successfully authenticated against AD. ThoughtSpot doesn't cache passwords for AD-authenticated users.

If you choose 'no', users have to be manually created with a dummy password as a placeholder in ThoughtSpot before they can log in. The username you specify when creating the LDAP-authenticated user manually in ThoughtSpot has to be domain qualified, for example: `username1@ad.yourdomain.local`.

In order to log in to ThoughtSpot, the user has to exist in ThoughtSpot independent of whether that user is authenticated against AD or against ThoughtSpot's internal authentication.

{: id="ssl" }
### SSL

If you want to use SSL, you must obtain the SSL certificate from an issuing authority. When you select **yes**, ThoughtSpot prompts you to enter the certificate and certificate alias.

If AD servers are behind a load balancer, you must procure the SSL certificate to identify ThoughtSpot to the load balancer. The communication after the load balancer is non-secure. ThoughtSpot does not support a scenario where multiple AD servers provide their own SSL certificates.

## Configure Active Directory

{% include content/admin-portal/authentication-active-directory.md %}

## Next steps
Next, [sync users and groups from LDAP through Active Directory]({{ site.baseurl }}/admin/setup/sync-users-and-groups-from-ldap.html).
