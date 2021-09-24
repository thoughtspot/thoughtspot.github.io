---
title: ["Password and account management"]
last_updated: 9/24/21
summary: "Learn the local user password and account management requirements."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can sign into ThoughtSpot using [SAML]({{ site.baseurl }}/admin/ts-cloud/authentication-integration.html), [LDAP]({{ site.baseurl }}/admin/setup/sync-users-and-groups-from-ldap.html), or as a local user. [Local users]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html) do not use their company's single sign-on (SSO) provider to sign into ThoughtSpot. These local users have certain password and account management requirements that local users and people who create these users must be aware of.

## Password requirements
By default, any password for a local user account must meet the following criteria. Passwords for SAML and LDAP users do ***NOT*** need to meet these criteria.

- The password must be 9 characters or more in length.
- The password must include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
- The password must score a 3 or higher on the [Dropbox password library](https://github.com/dropbox/zxcvbn){: target="_blank"}. This test ensures password complexity and uniqueness.

## Password requirement modification
You can modify most of the password requirements for local users in your organization by [contacting ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). ThoughtSpot Support can modify the following requirements:

- Minimum number of characters.
- Minimum number of uppercase letters, lowercase letters, numbers, and special characters.
- The [Dropbox password library](https://github.com/dropbox/zxcvbn){: target="_blank"}: ThoughtSpot Support can turn this requirement off.

## Password validity and changes
By default, passwords are valid for 180 days. After 180 days, ThoughtSpot requires local users to change their passwords. When you change your password, you cannot use any of your last 10 ThoughtSpot passwords.

To increase or decrease the number of days that passwords are valid for, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). ThoughtSpot Support can also set passwords to never expire.

## Login management
By default, after 10 failed logins in a row, ThoughtSpot locks out the user for 60 minutes (1 hour). This applies only to local users.

To change the number of failed logins that trigger the lockout, or to change the length of time for the lockout, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).
