---
title: [Authentication]
last_updated: 4/22/2020
summary: "ThoughtSpot provides SAML and ThoughtSpot login to authenticate users."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot provides two ways to authenticate users: SAML and
ThoughtSpot login. If possible, ThoughtSpot recommends that you use
SAML, since ThoughtSpot provides only basic authentication, with no
restrictions on passwords, timeouts, failed logins, etc.

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
    <li>No other enterprise password control (expiration, failed logins, etc.).</li>
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
automatically created. You can create [groups]({{ site.baseurl }}/admin/users-groups/add-group.html) and [users]({{ site.baseurl }}/admin/users-groups/add-user.html) manually, or you must
automate the assignment from a source system. ThoughtSpot has public APIs that you
can use to sync users and groups between source systems and your ThoughtSpot
appliance.
