---
title: ["Password and account management"]
last_updated: tbd
summary: "Learn the local user password and account management requirements."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can sign into ThoughtSpot using SAML, LDAP, or as a local user. [Local users]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html) do not use their company's single sign-on (SSO) provider to sign into ThoughtSpot. These local users have certain password and account management requirements that users and people who create these users must be aware of.

## Password requirements
By default, any password for a local user account must meet the following criteria. Passwords for [SAML]({{ site.baseurl }}/admin/ts-cloud/authentication-saml.html) and [LDAP]({{ site.baseurl }}/admin/setup/sync-users-and-groups-from-ldap.html) users do ***NOT*** need to meet these criteria.

- The password must be 9 characters or more in length.
- The password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
- The password must score a 3 or higher on the [Dropbox password library](https://github.com/dropbox/zxcvbn){: target="_blank"}. This test ensures password complexity.

## Password requirement modification
