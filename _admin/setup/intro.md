---
title: [About installation and upgrades]
tags:
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your ThoughtSpot application software is already installed for you in a ThoughtSpot appliance (this is true for both physical and virtual appliances). The ThoughtSpot software is updated by ThoughtSpot Support. ThoughtSpot Support will contact you to schedule an update when one becomes available.

As administrator, you are responsible for setting up and configuring ThoughtSpot. This guide explains how. It will also assist you in troubleshooting some common problems, finding additional resources, and contacting ThoughtSpot.

To perform the set up and configuration, you must first learn how to [gain administrative access](./logins.html). If you haven't already done this, do this now.  Then, complete the following tasks as needed:

-   **[Set your ThoughtSpot locale](/admin/setup/set_your_thoughtspot_locale.html)**  
In addition to American English, ThoughtSpot also supports German and Japanese.
-   **[Test network connectivity between nodes](/admin/setup/test_network.html)**  
This procedure tests the network connectivity between the ThoughtSpot nodes, and to the LAN. If you can perform these steps successfully, the network settings on ThoughtSpot are correct.
-   **[Set the relay host for SMTP (email)](/admin/setup/set_up_relay_host.html)**  
To enable alert emails, you'll need to set up a relay host for SMTP traffic from ThoughtSpot. This routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.
-   **[Set up a fiscal calendar year](/admin/setup/set_custom_calendar.html)**  
Many companies start their fiscal calendar in a month other than January. If this is the case in your company, setting a fiscal calendar quarter makes the ThoughtSpot date searches reflect your fiscal year.
-   **[Configure SSL (secure socket layers)](/admin/setup/SSL_config.html)**  
You should use SSL (secure socket layers) for sending data to and from ThoughtSpot. SSL provides authentication and data security. This section applies to both SSL to enable secure HTTP and secure LDAP.
-   **[Configure SAML](/admin/setup/configure_SAML_with_tscli.html)**  
ThoughtSpot can use Security Assertion Markup Language (SAML) to authenticate users. You can set up SAML through the shell on ThoughtSpot using a tscli based configurator.
-   **[About LDAP integration](/admin/setup/about_LDAP.html)**  
Some companies use LDAP (Lightweight Directory Access Protocol) to manage user authentication. Using LDAP provides security and makes user management more centralized.
-   **[Configure a NAS file system](/admin/setup/NAS_mount.html)**  
Some operations, like backup/restore and data loading, require you to either read or write large files. You can mount a NAS (network attached storage) file system for these operations.
-   **[Configure support services](/admin/setup/work-with-ts-support.html)**  
Set up and configure ThoughtSpot support services for your installation. You can designate a support contact (email and phone number), set up a reverse tunnel to allow ThoughtSpot Support to get access to your ThoughtSpot instance. Enable an optional "call home" capability sends usage statistics to ThoughtSpot Support once a day via a secure file server.
-   **[Set up monitoring](/admin/setup/set_up_monitoring.html)**  
To configure monitoring of your cluster, set up the frequency of heartbeat and monitoring reports and an email address to receive them.
-   **[Network ports](/admin/setup/firewall_ports.html)**  
For regular operations and for debugging, there are some ports you will need to keep open to network traffic from end users. Another, larger list of ports must be kept open for network traffic between the nodes in the cluster.
-   **[About load balancing and proxies](/admin/setup/about_load_balancer_configuration.html)**  
A load balancer is needed in front of a server group in order to direct traffic to individual servers in a way that maximizes efficiency. Here are some of the best practices and guidelines for a typical implementation with ThoughtSpot. Your experience may differ depending on your environment and preference.
