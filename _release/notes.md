---
title: ["6.2 Release Notes"]
toc: false
last_updated: 07/23/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.2 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.2 New Features](#6-1-1-new)
* [Early Access Programs](#early-access)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-2-new"}
## 6.2 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.2 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-2).

### Embrace supports more data warehouses and new features

Embrace now supports the following data warehouses:
- Teradata
- SAP HANA (version 2.0 or later)&nbsp;&nbsp;<span class="label label-success" style="position: relative; top: -1px">Beta</span>

Embrace includes the following new features:
- Ability to remove columns in a connection.
- A summary of tables/columns connected is now displayed as part of add/edit connection workflow.
- Actual SQL is displayed in the query visualizer. This allows analysts to check the actual external database query so they can easily validate the output.
- Improved performance when editing a connection.

For more information, see [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

{: id="early-access"}
## Early Access Programs

### UI update

Please contact us if you are interested in participating in the <a href="mailto:early_access@thoughtspot.com?subject=UI%20Update%20Early%20Access%20Program%20Request" target="_blank">UI Update Early Access Program</a>.

### RHEL support
RHEL support is in the Early Access phase. To deploy ThoughtSpot on RHEL, you must have the Ansible tarball; please contact us if you are interested in participating in the <a href="mailto:early_access@thoughtspot.com?subject=RHEL%20Early%20Access%20Program%20Request" target="_blank">RHEL Early Access Program</a>. For more information, see [RHEL Deployment Overview]({{ site.baseurl }}/appliance/rhel/rhel.html).

{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

### Monitor

Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Monitor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a>, for monitoring selected metrics over time.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.2 release directly:

* 6.0.x to 6.2
* 6.1.x to 6.2

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 6.0.x, or version 6.1.x, and then to the 6.2 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
