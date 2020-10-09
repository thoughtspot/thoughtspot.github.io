---
title: [Admin Console]
last_updated: 7/27/2020
summary: Learn how the Admin Console can help you manage users, groups, security, authentication, and much more.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Admin Console provides you with an intuitive, user-friendly interface to accomplish most of the necessary tasks for administering ThoughtSpot.

Navigate to the Admin Console by selecting **Admin** from the top navigation bar.

![Admin tab]({{ site.baseurl}}/images/admin-tab.png "Admin tab")

You can complete the following tasks in the Admin Console:

**Manage users and groups**
* [Manage ThoughtSpot users]({{ site.baseurl }}/admin/admin-portal/users.html)<br>
Create, edit, or delete users.
* [Manage ThoughtSpot groups]({{ site.baseurl }}/admin/admin-portal/groups.html)<br>
Create, edit, or delete groups.

**Configure authentication**
* [Manage local authentication]({{ site.baseurl }}/admin/admin-portal/authentication-local.html)<br>
Enable or disable ThoughtSpot's local authentication.
* [Configure SAML authentication]({{ site.baseurl }}/admin/admin-portal/authentication-saml.html)<br>
Integrate with SAML for single sign-on (SSO) authentication.
* [Configure LDAP authentication through Active Directory ]({{ site.baseurl }}/admin/admin-portal/authentication-active-directory.html)<br>
Integrate with LDAP to authenticate users against a secure LDAP server.

**Manage settings: SSL, support, and application and menu customization**
* [Configure SSL]({{ site.baseurl }}/admin/admin-portal/ssl-configure.html)<br>
Use SSL for authentication and data security when you send data to and from ThoughtSpot.
* [Configure a reverse SSH tunnel]({{ site.baseurl }}/admin/admin-portal/reverse-ssh-tunnel.html)<br>
Set up a reverse tunnel to allow ThoughtSpot Support to get access to your ThoughtSpot instance, to perform support-related activities.
* [Set the relay host for SMTP (email)]({{ site.baseurl }}/admin/admin-portal/smtp-configure.html)<br>
Set up a relay host for SMTP traffic, to route the alert and notification emails coming from ThoughtSpot through an SMTP email server.
* [Customize ThoughtSpot help]({{ site.baseurl }}/admin/admin-portal/customize-help.html)<br>
Customize ThoughtSpot Help to be specific to your data, examples, and documentation.
* [Customize Answer actions menu]({{ site.baseurl }}/admin/admin-portal/customize-actions-menu.html)<br>
Add custom actions to the more options menu ![more options menu icon]({{ site.baseurl}}/images/icon-more-10px.png "more options menu icon"){: .inline} for Answers.
* [Customize application style]({{ site.baseurl }}/admin/admin-portal/style-customization.html)<br>
Starting with release 6.2.1, you can change the overall style of your ThoughtSpot interface from the Admin Console: logo, colors, fonts, and footer text.

**Manage backup and storage options**
* [Configure NAS for backup storage]({{ site.baseurl }}/admin/admin-portal/nas-mount-configure.html)<br>
Use network attached storage to support backup/restore and data loading.
* [Manage and create snapshots]({{ site.baseurl }}/admin/admin-portal/snapshot-manage.html)<br>
Create and manage snapshots, which you can use to restore the cluster to a specific point in time.

**Monitor system**
* [View System Overview Pinboard]({{ site.baseurl }}/admin/admin-portal/system-overview-pinboard.html)<br>
View and explore your users' activity on the system overview Pinboard.
* [View System Cluster Pinboard]({{ site.baseurl }}/admin/admin-portal/system-cluster-pinboard.html)<br>
View and explore cluster activity on the system cluster Pinboard.
* [View System Alerts Pinboard]({{ site.baseurl }}/admin/admin-portal/system-alerts-pinboard.html)<br>
View and explore system alerts, configuration events, and notification events on the system alerts Pinboard.

**Upgrade your cluster**
* [Monitor available cluster updates]({{ site.baseurl }}/admin/admin-portal/available-update.html)<br>
View available cluster updates.
