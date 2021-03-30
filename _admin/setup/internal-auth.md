---
title: [Configure internal authentication]
last_updated: 3/4/2020
toc: false
summary: "Many organizations don’t use LDAP or active directory for user authentication. In other scenarios, some users are not in LDAP and are created only in ThoughtSpot. In such cases, you can choose to authenticate users against ThoughtSpot internal authentication."
redirect_from:
- /6.3.0/admin/setup/internal-auth.html
- /6.3.0.CU1/admin/setup/internal-auth.html
- /7.0.0.mar.sw/admin/setup/internal-auth.html
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---

Many organizations don't use LDAP or active directory for user authentication. In other scenarios, some users are not in LDAP and are created only in ThoughtSpot. In such cases, you can choose to authenticate users against ThoughtSpot internal authentication.

{% include note.html content="Before the user logs into ThoughtSpot, the user must exist in ThoughtSpot. This is independent of the authentication mechanism." %}

## Enable internal authentication with the Admin Console

{% include content/admin-portal/authentication-local.md %}

If you have been using ThoughtSpot with users you created manually, and you now want to transition to LDAP, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). They can assist you in migrating existing users to their LDAP equivalents.
