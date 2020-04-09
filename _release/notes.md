---
title: ["6.1 Release Notes"]
toc: false
last_updated: 04/09/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.1 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.1 New Features](#6-1-new)
* [Early Access Programs](#early-access)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-1-new"}
## 6.1 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.1 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-1).

### Updating ThoughtSpot UI through CDN

Starting with this release, you can configure automatic updates of the front end of the ThoughtSpot application by uploading from CDN (Amazon Cloudfront). This enables your organization to get many new features of ThoughtSpot and get many critical bug fixes without experiencing the traditional upgrade downtime.

UI auto-update is in the Early Access phase. Please contact us if you are interested in participating in the <a href="mailto:early_access@thoughtspot.com?subject=UI%20Update%20Early%20Access%20Program%20Request" target="_blank">UI Update Early Access Program</a>.

### Back up and restore ThoughtSpot AWS and GCP clusters using cloud storage

With AWS, you can back up and restore using an S3 bucket. With GCP, you can back up and restore using a GCS bucket.

For details, see:
- [Back up and restore an AWS cluster using S3]({{ site.baseurl }}/appliance/aws/aws-backup-restore.html#)
- [Back up and restore a GCP cluster using GCS]({{ site.baseurl }}/appliance/gcp/gcp-backup-restore.html#)

### Geo map support for Norway and Switzerland

For details, see: [Geo Map reference]({{ site.baseurl }}/reference/geomap-reference.html#)

### New SQL commands for ODBC and JDBC drivers

For developers creating tools to connect to ThoughtSpot through the ODBC or JDBC driver, the following new commands are available:

- `ALTER TABLE`
- `CREATE DATABASE`
- `CREATE SCHEMA`
- `DROP`
- `SCRIPT`
- `SHOW`
- `TRUNCATE`

For details, see: [Supported SQL commands]({{ site.baseurl }}/data-integrate/reference/odbc-commands.html)

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

If you are running one of the following versions, you can upgrade to the 6.1 release
directly:

* 5.3.x to 6.1
* 5.2.x to 6.1

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.2.x, or version 5.3.x, and then to the 6.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
