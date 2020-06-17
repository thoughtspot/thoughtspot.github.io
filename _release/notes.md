---
title: ["6.1 Release Notes"]
toc: false
last_updated: 04/09/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.1.1 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.1.1 New Features](#6-1-1-new)
* [Early Access Programs](#early-access)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-1-1-new"}
## 6.1.1 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.1.1 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-1-1).

### Amazon Linux 2

This release of ThoughtSpot introduces deployment support for [Amazon Linux 2](https://aws.amazon.com/amazon-linux-2/){:target="_blank"}. This decouples the OS and application files we shipped together in previous releases, and gives you the flexibility to run ThoughtSpot on an Amazon Linux 2 image that your organization manages internally. ThoughtSpot certifies Amazon Linux 2 on the AWS platform.To deploy ThoughtSpot on Amazon Linux 2, you must have the Ansible tarball; you can obtain the tarball through your ThoughtSpot contact. For more information, see the [Amazon Linux 2 Deployment Overview]({{ site.baseurl }}/appliance/amazon-linux-2/al2-overview.html).

### Charts and tables with a very large number of data values

ThoughtSpot now supports charts and tables with more than 1000 data values. You can easily understand how much of the data your chart or table displays.
* Your search in table form can now have more than 1000 rows.
* Your charts now come with a horizontal scroll bar, to support up to 35,000 data points.
* You can select the fit to screen button to see the whole chart at one time.
* You can have up to 250 distinct legend items on a chart.
* You can turn on all [data labels]({{ site.baseurl }}/end-user/search/show-data-labels.html#labels-all) using the new shortcut button at the top right corner.
See [Charts and tables with a very large number of data values]({{ site.baseurl }}/end-user/search/high-cardinality.html).

### tsload as a service

This release introduces a new option for loading data in bulk, called tsload as a service. The tsload service is a collection of APIs that allow you to directly, and more quickly load your data into the ThoughtSpot Falcon database. For more information, see [Use the tsload service to load data]({{ site.baseurl }}/admin/loading/load-with-service.html).

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

For details, see: [Supported SQL commands]({{ site.baseurl }}/data-integrate/reference/odbc-commands.html).

### Embrace advanced configuration

In this release, on the connection details page, you can provide additional key-value pairs that you need to set up the connection to your external data source. Any key-value pairs that you enter must be defined in the external data source. Key-value pairs are case-sensitive.

Some examples of key-value pairs for Snowflake, include the following:

Setting up a proxy connection:

![]({{ site.baseurl }}/images/snowflake-adv-config-1.png)

Applying a filter on the schema:

![]({{ site.baseurl }}/images/snowflake-adv-config-2.png)

### Upgrade to Python 3

Starting with this release, ThoughtSpot uses Python 3 packages. For example, to invoke the `syncUsersAndGroups.py` script the script, you must now use the `python3` command; see [Sync users and groups from LDAP]({{ site.baseurl }}/admin/setup/sync-users-and-groups-from-ldap.html).

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
* 6.0.x to 6.1

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.3.x, or version 6.0.x, and then to the 6.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
