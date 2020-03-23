---
title: ["6.1 Release Notes"]
toc: false
last_updated: March 17, 2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.1 is now available. These release notes include information about new features,
fixed issues from previous releases, and any known issues.

* [6.1 New Features](#6-new)
* [6.1 Fixed Issues](#6-fixed)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)
* [Notes from Older Versions](#notes-for-older-versions)

{: id="6-1-new"}
## 6.1 New Features and Functionality

### Back up and restore ThoughtSpot AWS and GCP clusters

Now you can back up and restore your ThoughtSpot cluster hosted in either AWS or GCP.

For AWS, you use an S3 bucket. For GCP, you use a GCS bucket.

For details, see:
- [Back up and restore a cluster in AWS]({{ site.baseurl }}/appliance/aws/aws-backup-restore.html#)
- [Back up and restore a cluster in GCP]({{ site.baseurl }}/appliance/gcp/gcp-backup-restore.html#)

### Geomap support for Norway and Switzerland

For details, see: [Geo Map reference]({{ site.baseurl }}/reference/geomap-reference.html#)

{: id="6-1-fixed"}
## 6.1 Fixed Issues

The following issues are fixed in the 6.1 release:

  - When using the `tscli fileserver upload` command to upload a file that is larger than the maximum supported file size, an error message with an incorrect maximum file size appears.
  - The tscli event list displays messages for creation, modification, and deletion that are not user friendly.
  - Sorting or filtering a column in a chart does not work.
  - The column order in the PDF of a visualization is different than the order in shown in ThoughtSpot.
  - Removing a key from a table is not possible because multiple joins for an old column cannot be detected.
  - Intermittent slow search response time.
  - Entering a search causes results from columns outside the selected data source.
  - An incorrect result is displayed when a filter is created on Group_Max aggregation function.
  - Backup policy names are not validated to ensure they won't cause backups to fail.
  - The headline table aggregate summary is not available when group aggregate functions are used.
  - Removing a column from a search increases the number of rows shown.
  - Multiple variables cannot be added to a single map visualization.
  - Drilling down on a visualization causes the date format to change.
  - Double-clicking on the legend of a stacked column chart does not showing hidden values.
  - Data load fails due to a primary key having multiple rows.
  - Filtering on a pinboard card causes a NullPointerException error.
  - Pre-update check of self-service upgrade runs indefinitely.
  - A formula with Group_Max function doesn't work with Growth key word.
  - The confirmation message for deleting a restored cluster indicates the cluster name.

{: id="beta-program"}
## Beta Programs
If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Montor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a>, for monitoring selected metrics over time.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.1 release
directly:

* 5.3.x to 6.1
* 5.2.x to 6.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.2.x, or version 5.3.x, and then to the 6.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}

{: id="notes-for-older-versions"}
## Notes for earlier releases

* [6.0 Release Notes](/6.0/pdf/ThoughtSpot_Release_Notes_6.0.pdf)
* [5.3 Release Notes](/5.3/pdf/ThoughtSpot_Release_Notes_5.3.pdf)
* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
