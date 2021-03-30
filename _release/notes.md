---
title: ["7.0 Release Notes"]
toc: false
last_updated: 3/23/2021
sidebar: mydoc_sidebar
redirect_from:
- /7.0.0.mar.sw/release/notes.html
permalink: /:collection/:path.html
---
ThoughtSpot version 7.0 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [7.0 New Features](#7-0-new)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="7-0-new"}
## 7.0 New Features and Functionality

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

Here are the most significant new features and improvements in the 7.0.0 Software Release:

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

<dlentry id="scriptability">
  <dt>Scriptability enhancements</dt>
  <dd>There are several enhancements to the <a href="{{ site.baseurl }}/admin/scriptability/scriptability-overview.html">Scriptability</a> feature:
  <ul><li><strong>Export custom SpotApps</strong>: You can now export your own custom SpotApps, or collections of Scriptable ThoughtSpot Answers, Pinboards, SpotIQ results, Views, tables, and Worksheets, packaged together as a zip file. Simply navigate to <strong>Data > SpotApps</strong> and choose the objects you would like to include in a custom SpotApp. Refer to <a href="{{ site.baseurl }}/admin/scriptability/app-templates.html">SpotApps</a>.</li>
  <li><strong>Add tables and columns to an Embrace connection:</strong> ThoughtSpot now allows you to use TML to edit tables created through <a href="{{ site.baseurl }}/data-integrate/embrace/embrace-intro.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. Refer to <a href="{{ site.baseurl }}/admin/scriptability/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection.</li>
  <li><strong>GUID handling</strong>: ThoughtSpot now recognizes pre-existing GUIDs upon import and asks if you would like to update the existing object or create a new one. Refer to <a href="{{ site.baseurl }}/admin/scriptability/scriptability.html">Scriptability</a>.</li>
  <li><strong>Improvements to generic join functionality</strong> <span class="label label-beta">Beta</span>: The expanded functionality for generic joins in TML files allows the following elements:
<ul><li>Constants: int, double, bool, date, and string</li>
<li>Comparison operators: <code>=</code>, <code>!=</code>, <code><</code>, <code>></code>, <code><=</code>, and <code>>=</code></li>
<li>Columns</li>
<li>Boolean operators: <code>AND</code>, <code>OR</code>, and <code>NOT</code></li></ul> This feature is in <strong>Beta</strong>; to enable it, <a href="{{ site.baseurl }}/appliance/contact.html">contact ThoughtSpot Support</a>.</li>
<li><strong>Joins at the table level</strong>: You can now create and edit joins at the table level using TML, including range and generic joins. You must edit these joins from the source table, not the destination table. Refer to <a href="{{ site.baseurl }}/admin/scriptability/tml.html">ThoughtSpot Modeling Language</a>.</li>
<li><strong>Support for selective and linked filters</strong>: You can now import, export, and update Pinboards with <a href="{{ site.baseurl }}/complex-search/linked-filters.html">linked</a> or <a href="{{ site.baseurl }}/complex-search/selective-filters.html">selective</a> filters.</li>

  </ul></dd></dlentry>
<dlentry id="join-ui">
<dt>Join creation interface</dt>
<dd>We improved the join workflows to support adding and updating joins on tables, worksheets, and views. See <a href="{{ site.baseurl }}/admin/worksheets/add-joins.html">Join a table, View, or Worksheet to another data source</a>.
</dlentry>
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

<dlentry id="dataflow">
<dt>DataFlow</dt>
<dd>
We added support for connecting to the following databases: <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-exadata.html">Exadata</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum.html">Greenplum</a>, and <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-memsql.html">MemSQL</a>.

<p>We also added support for the  <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-splunk.html">Splunk</a> file system.</p>

<p>When connecting to remote files, DataFlow now supports the ORC and JSON file formats.</p>

<p>DataFlow includes support for utilities to configure SSL, so you can securely connect securely to the following source systems:
<a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-sql-server-utilities.html">SQLServer</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-databricks-delta-lake-utilities.html">Databricks Data Lake</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-postgresql-utilities.html">PostgreSQL</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-utilities.html">IBM Db2</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-greenplum-utilities.html">Greenplum</a>, <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-oracle-utilities.html">Oracle</a>, and <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-teradata-utilities.html">Teradata</a>.</p>

<p>Connections for remote files support several new <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-files-sync.html#file-format">file formats</a>; in addition to  <em>Delimited</em>, we have support for <em>Parquet</em>, <em>JSON</em> <span class="label label-beta">New</span>, <em>LDJSON</em> <span class="label label-beta">New</span>, and <em>ORC</em> <span class="label label-beta">New</span>.
</p>

<p>The DataFlow Home dashboard now shows both the historical and upcoming syncing information. It also supports search by table name. See <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-home.html">DataFlow home</a>.</p>

<p>All DataFlow database connections (as listed in <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow-databases">DataFlow Databases</a>), support retrieving data through a custom SQL expression.</p>

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
<dd>This release of ThoughtSpot introduces support for new cloud VM instance types for AWS and Azure.<br><br> The new AWS instance types are:
<ul><li>r5a.4xlarge</li>
<li>r5a.8xlarge</li>
<li>r5a.12xlarge</li>
<li>r5a.16xlarge</li>
<li>r5a.24xlarge</li></ul> The new Azure instance type is: <ul><li>D64s_v4</li></ul> To view all supported instance types for AWS and Azure, see the <a href="{{ site.baseurl }}/appliance/aws/configuration-options.html">AWS</a> and <a href="{{ site.baseurl }}/appliance/azure/configuration-options.html">Azure</a> configuration options.
</dd>
</dlentry>

<dlentry id="azure-disk-encryption">
<dt>Azure Disk Encryption</dt>
<dd>ThoughtSpot now supports <a href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/disk-encryption-overview" target="_blank">Azure Disk Encryption (ADE)</a> for clusters running on an RHEL image in Azure. Azure Disk Encryption provides volume encryption for both the OS and data disks of Azure virtual machines (VMs). To configure Azure Disk Encryption for your cluster(s), <a href="{{ site.baseurl }}/appliance/contact.html">contact ThoughtSpot Support</a>.
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

* 6.2.x to 7.0
* 6.3.x to 7.0

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 6.2.x, or 6.3.x and then to the 7.0 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
