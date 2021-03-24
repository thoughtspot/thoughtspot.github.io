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
<dlentry id="tbd-analyst">
<dt>TBD</dt>
<dd>TBD.</dd>
</dlentry>
</dl>

{: id="7-0-business-user"}
### For the Business User

<dl>
<dlentry id="tbd-business-user">
  <dt>TBD</dt>
<dd>TBD</dd>
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
</dd>

</dlentry>
</dl>

{: id="7-0-it-ops-engineer"}
### For the IT Ops Engineer

<dl>
<dlentry id="tbd-it-ops">
<dt>TBD</dt>
<dd>TBD</dd>
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
