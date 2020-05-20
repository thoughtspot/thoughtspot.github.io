---
title: [About installation and upgrades]
last_updated: 3/4/2020
summary: "As administrator, you are responsible for setting up and configuring ThoughtSpot. This guide explains how. It will also assist you in troubleshooting some common problems, finding additional resources, and contacting ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

In ThoughtSpot, both physical appliances and virtual machines ship with a base OS image. ThoughtSpot Support then helps you to install, and subsequently update the software. Note the exception of RHEL installations, where the customer provides the OS image themselves, and uses a slightly different installation protocol. 

The ThoughtSpot Support team contacts all clients to schedule updates as we release new versions of ThoughtSpot. To schedule upgrades to patch releases that support your use cases, work with our Customer Success team.

As administrator, you are responsible for setting up and configuring
ThoughtSpot. This guide helps you with these tasks, and also assists in troubleshooting
some common problems and finding additional resources.

{: id="display-current-config"}
## Display your current configuration

To perform the setup and configuration, you must first learn how to [gain
administrative access]({{ site.baseurl }}/admin/setup/logins.html).

1. Log in to the ThoughtSpot cluster as the `admin` user.
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

{: id="related" }
## Related information

The following tasks are also available:

* [Set your locale]({{ site.baseurl }}/admin/setup/set-your-thoughtspot-locale.html)
* [Test connectivity between nodes]({{ site.baseurl }}/admin/setup/test-network.html)
* [Set up a fiscal calendar year]({{ site.baseurl }}/admin/setup/set-custom-calendar.html)
* [Integrate LDAP]({{ site.baseurl }}/admin/setup/about-LDAP.html)
* [Set up monitoring]({{ site.baseurl }}/admin/setup/set-up-monitoring.html)
* [Configure support services]({{ site.baseurl }}/admin/setup/work-with-ts-support.html)
* [Network ports]({{ site.baseurl }}/admin/setup/firewall-ports.html)
* [Configure load balancing and proxies]({{ site.baseurl }}/admin/setup/about-load-balancer-configuration.html)
* [Customize look and feel]({{ site.baseurl }}/admin/setup/customize-style.html)
