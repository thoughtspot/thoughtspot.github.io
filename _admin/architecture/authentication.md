---
title: [Authentication]
last_updated: 11/10/21
summary: "ThoughtSpot provides either SAML or local ThoughtSpot accounts to authenticate users."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot provides two ways to authenticate users: [SAML]({{ site.baseurl }}/admin/ts-cloud/authentication-integration.html) (Security Association Markup Language) and [ThoughtSpot local accounts]({{ site.baseurl }}/admin/ts-cloud/authentication-local.html). ThoughtSpot recommends that you use
SAML for authentication, since it is industry-standard and enables Single-Sign On (SSO) with your Identity Provider (IdP).

Use the following table to help you choose an authentication option.

<table>
  <tr>
    <th><a href="{{ site.baseurl }}/admin/setup/configure-SAML-with-tscli.html">SAML</a></th>
    <th><a href="{{ site.baseurl }}/admin/users-groups/add-user.html">ThoughtSpot</a></th>
  </tr>
  <tr>
    <td>
    <ul>
    <li>Use SAML for single sign-on authentication.</li>
    <li>Can redirect from ThoughtSpot to SAML logins.</li>
    <li>Recommended for portal integration.</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>User created and managed in ThoughtSpot.</li>
    <li><a href="{{ site.baseurl }}/admin/users-groups/add-user.html#password">Password strength control</a></li>
    <li>Only recommended when SAML is not an option.</li>
    </ul>
    </td>
  </tr>
</table>

All users and groups must be known to ThoughtSpot. If you are using
SAML and don’t create users in ThoughtSpot, a user is created when the user
first logs in. However, this user is assigned to the `All` group and can only
see content available for all users.

Groups are the primary way that security is managed. Groups are not
automatically created. You can create [groups]({{ site.baseurl }}/admin/users-groups/add-group.html) and [users]({{ site.baseurl }}/admin/users-groups/add-user.html) manually, or you must automate the assignment from a source system. ThoughtSpot has public APIs that you
can use to sync users and groups between source systems and your ThoughtSpot
appliance.
