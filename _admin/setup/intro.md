---
title: [About installation and upgrades]
keywords: notes, tips, cautions, warnings, admonitions,configuration
last_updated: July 3, 2016
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your ThoughtSpot application software is already installed for you in a
ThoughtSpot appliance (this is true for both physical and virtual appliances).
The ThoughtSpot software is updated by ThoughtSpot Support. ThoughtSpot Support
will contact you to schedule an update when one becomes available.

As administrator, you are responsible for setting up and configuring
ThoughtSpot. This guide explains how. It will also assist you in troubleshooting
some common problems, finding additional resources, and contacting ThoughtSpot.

## Display your current configuration

To perform the set up and configuration, you must first learn how to [gain
administrative access]({{ site.baseurl }}/admin/setup/logins.html).

1. Log into the ThoughtSpot cluster as the `admin` user.
2. Use the `tscli feature` subcommand to display your current configuration.

    ```
    $ tscli feature get-all-config
    +---------------------------------+----------+---------------+
    |              NAME               |  STATUS  | CONFIGURATION |
    +---------------------------------+----------+---------------+
    | Firewall                        | Disabled |               |
    | Saml                            | Disabled |               |
    | Ldap                            | Disabled |               |
    | CustomBranding                  | Disabled |               |
    | CustomBrandingFontCustomization | Disabled |               |
    | DataConnect                     | Disabled |               |
    | RLS                             | Enabled  |               |
    | Callhome                        | Enabled  |               |
    | SSHTunnel                       | Enabled  |               |
    | Fileserver                      | Disabled |               |
    +---------------------------------+----------+---------------+
    ```


## Related information

The following tasks are available needed:

* [Set your locale]({{ site.baseurl }}/admin/setup/set-your-thoughtspot-locale.html)
* [Test connectivity between nodes]({{ site.baseurl }}/admin/setup/test-network.html)
* [Set the relay host for SMTP]({{ site.baseurl }}/admin/setup/set-up-relay-host.html)
* [Set up a fiscal calendar year]({{ site.baseurl }}/admin/setup/set-custom-calendar.html)
* [Configure internal authentication]({{ site.baseurl }}/admin/setup/internal-auth.html)
* [Configure SSL]({{ site.baseurl }}/admin/setup/SSL-config.html)
* [Configure SAML]({{ site.baseurl }}/admin/setup/configure-SAML-with-tscli.html)
* [Integrate LDAP]({{ site.baseurl }}/admin/setup/about-LDAP.html)
* [Configure NAS file system]({{ site.baseurl }}/admin/setup/NAS-mount.html)
* [Set up monitoring]({{ site.baseurl }}/admin/setup/set-up-monitoring.html)
* [Configure support services]({{ site.baseurl }}/admin/setup/work-with-ts-support.html)
* [Network ports]({{ site.baseurl }}/admin/setup/firewall-ports.html)
* [Configure load balancing and proxies]({{ site.baseurl }}/admin/setup/about-load-balancer-configuration.html)
* [Customize look and feel]({{ site.baseurl }}/admin/setup/customize-style.html)
* [Add the Slack integration]({{ site.baseurl }}/admin/setup/slack-integration.html)
