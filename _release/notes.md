---
title: ["7.0 Release Notes"]
toc: false
last_updated: 3/23/2021
sidebar: mydoc_sidebar
redirect_from:
- /6.3.0/release/notes.html
- /6.3.0.CU1/release/notes.html
- /6.3.1/release/notes.html
permalink: /:collection/:path.html
---
ThoughtSpot version 7.0 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [7.0 New Features](#7-0-new)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="7-0-new"}
## 7.0 New Features and Functionality

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [7.0 New Features](#7-0-new)
   * [For the Analyst](#7-0-analyst)
   * [For the Business User](#7-0-business-user)
   * [For the Data Engineer](#7-0-data-engineer)
   * [For the IT Ops Engineer](#7-0-it-ops-engineer)

{: id="7-0-analyst"}
### For the Analyst

<dl>
<dlentry id="search-assist-coach">
  <dt>Search Assist Coach</dt>
  <dd><a href="{{ site.baseurl }}/admin/worksheets/search-assist-coach.html">Search Assist Coach</a> enables Analysts, or anyone who has <strong>edit</strong> access to a Worksheet, to create <a href="{{ site.baseurl }}/end-user/onboarding/search-assist.html">Search Assist</a> sample queries based on their company data. This gives all users the opportunity to experience onboarding and training on data that is relevant to their work, and specific to their line of business.</dd></dlentry>
</dl>

{: id="7-0-business-user"}
### For the Business User

<dl>
<dlentry id="search-assist">
  <dt>Search Assist</dt>
<dd><a href="{{ site.baseurl }}/end-user/onboarding/search-assist.html">Search Assist</a> introduces new users to ThoughtSpot's Search experience by walking them through simple search scenarios on sample data. It demonstrates how anyone can get answers to their data questions by typing in the Search bar. Additionally, you can use <a href="{{ site.baseurl }}/admin/worksheets/search-assist-coach.html">Search Assist Coach</a> to create sample search queries on your own data.</dd>
</dlentry>

</dl>

{: id="7-0-data-engineer"}
### For the Data Engineer

<dl>
<dlentry id="embrace">
<dt>Embrace</dt>
<dd>Embrace passthrough functions are available for Snowflake. Passthrough functions allow you to send custom SQL expressions directly to your Snowflake database without being interpreted by ThoughtSpot. For more information, see <a href="{{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-passthrough.html">Passthrough functions for Snowflake.</a></dd>
<dd>Embrace supports Oracle Autonomous Database <span class="label label-beta">Beta</span>. This feature is still in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.
</dd>
</dlentry>
</dl>

{: id="7-0-it-ops-engineer"}
### For the IT Ops Engineer

<dl>
<dlentry id="rhel">
<dt>RHEL ease of installation</dt>
<dd>This release of ThoughtSpot makes it easier to deploy ThoughtSpot on an <a href="{{ site.baseurl }}/appliance/rhel/rhel.html">RHEL image</a>. You can now enable SELinux when deploying ThoughtSpot on RHEL. If you enable SELinux, ensure that you install the <a href="{{ site.baseurl }}/appliance/rhel/rhel-packages.html">yum</a> <code>setroubleshoot</code> package.</dd>
</dlentry>

<dlentry id="oel">
<dt>Oracle Enterprise Linux (OEL) support</dt>
<dd>This release of ThoughtSpot introduces deployment support for Oracle Enterprise Linux. This decouples the OS and application files we shipped together in previous releases, and gives you the flexibility to run ThoughtSpot on an OEL image that your organization manages internally. ThoughtSpot certifies OEL version 7.9 on AWS, GCP, and VMware. To deploy ThoughtSpot on OEL, you must have the Ansible tarball; you can obtain the tarball through your ThoughtSpot contact. For more information, see the <a href="{{ site.baseurl }}/appliance/rhel/rhel.html">RHEL and OEL deployment guide</a>.
</dd>
</dlentry>

<dlentry id="cloud-vm">
<dt>New cloud VM instance types</dt>
<dd>This release of ThoughtSpot introduces support for new cloud VM instance types for AWS and Azure. The new AWS instance types are:
<ul><li>r5a.4xlarge</li>
<li>r5a.8xlarge</li>
<li>r5a.12xlarge</li>
<li>r5a.16xlarge</li>
<li>r5a.24xlarge</li></ul> The new Azure instance type is: <ul><li>D64s_v4</li></ul> To view all supported instance types for AWS and Azure, see the <a href="{{ site.baseurl }}/appliance/aws/configuration-options.html">AWS</a> and <a href="{{ site.baseurl }}/appliance/azure/configuration-options.html">Azure</a> configuration options.
</dd>
</dlentry>
</dl>

<!--{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.-->

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 7.0 release
directly:

* 6.2.x
* 6.3.x to 7.0

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 6.2.x, or 6.3.x and then to the 7.0 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
