---
title: [Configure a reverse SSH tunnel]
last_updated: 7/27/2020
summary: You can set up a reverse tunnel to allow ThoughtSpot Support to get access to your ThoughtSpot instance, to perform support-related activities.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="reverse-tunnel"}
## Set up a reverse tunnel for support

You can set up a reverse tunnel to allow ThoughtSpot Support to get access to your ThoughtSpot instance, to perform support-related activities. This setup is scalable, more secure, and a much simpler alternative to using a virtual meeting room.

Granting remote support access can streamline troubleshooting activities, because it enables your support agent to work directly on your computer form a secure setting. The remote tunnel enables SSH and HTTP access to your ThoughtSpot instance by ThoughtSpot Support. You can grant and revoke this access easily, so you can enable it for a troubleshooting session, and then disable it again. Before doing this procedure, make sure your company's security policies allow reverse tunneling.

{% include note.html content="Before you set up a reverse tunnel, open port <code>22</code> in your firewall outgoing rules to add <code>tunnelrelay.thoughtspot.com</code> to your list of allowed domains." %}

## Configure reverse SSH tunnel
{% include content/admin-portal/reverse-ssh-tunnel.md %}
