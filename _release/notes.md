---
title: ["6.3 Release Notes"]
toc: false
last_updated: 10/18/2020
sidebar: mydoc_sidebar
redirect_from:
- /6.3.0/release/notes.html
- /6.3.0.CU1/release/notes.html
permalink: /:collection/:path.html
---

ThoughtSpot version 6.3 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.3 New Features](#6-3-new)
   * [For the Analyst](#6-3-analyst)
   * [For the Business User](#6-3-business-user)
   * [For the Data Engineer](#6-3-data-engineer)
   * [For the IT Ops Engineer](#6-3-it-ops-engineer)
<!--* [Beta Programs](#beta-program)-->
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-3-new"}
## 6.3 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.3 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-3).

### New language support

Starting in the 6.3 release, ThoughtSpot supports the following new locale, including support for language keywords that can be used in the search bar:

<ul>
<li> English (India) </li>
</ul>

To set locale to English (India), click the user icon in the top right corner to navigate to the <strong>Profile</strong> page, and select locale under <strong>Preferences</strong>. 

### For the Analyst

<dl id="6-3-analyst">
  <dlentry id="geomaps">
    <dt>Geomaps</dt>
    <dd>ThoughtSpot now supports <a href="{{ site.baseurl }}/reference/geomap-reference.html">GeoMap</a> visualizations for this new locale:
        <ul>
          <li><strong>Netherlands</strong>: Province, Municipality, Postcode</li>
        </ul>
          </dd></dlentry>

  <dlentry id="scriptability">
    <dt>Scriptability</dt>
    <dd><p>This release introduces expanded support for <a href="{{ site.baseurl }}/admin/scriptability/scriptability-overview.html">exporting and importing ThoughtSpot objects</a>. Pinboard and Answer Scriptability is now GA. You can also export, import, and update the following newly scriptable objects:</p>
     <ul>
      <li>Views</li>
      <li>Tables</li>
    </ul>
    <p>ThoughtSpot Modeling Language is now called <a href="{{ site.baseurl }}/admin/scriptability/tml.html">ThoughtSpot Modeling Language</a>.</p>
    </dd>
  </dlentry>  

  <dlentry id="linked-filters">
    <dt>Linked Pinboard filters</dt>
    <dd>You can now create one filter that filters visualizations based on multiple Worksheets by linking the Worksheet columns, at the Pinboard level. This is useful when you have a Pinboard built on multiple Worksheets, and you would like to filter on columns that are functionally the same, but exist in multiple Worksheets. Refer to <a href="{{ site.baseurl }}/complex-search/linked-filters.html">Linked Pinboard filters</a>.
    </dd>
  </dlentry>  

  <dlentry id="selective-filters">
    <dt>Selective Pinboard filters</dt>
    <dd>You can now configure Pinboard filters to apply to specific visualizations that you choose. This is useful when you would like to filter some, but not all, visualizations in a Pinboard. Refer to <a href="{{ site.baseurl }}/complex-search/selective-filters.html">Selective Pinboard filters</a>.
    </dd>
  </dlentry>  

  </dl>

### For the Business User

<dl id="6-3-business-user">
  <dlentry id="monitor">
    <dt>Monitor</dt>
    <dd>The Monitor suite of features, some of which were introduced in earlier releases as Beta, are now generally available by default.</dd></dlentry>
  <dlentry id="mobile-improvements">
    <dt>Mobile app updates</dt>
    <dd>ThoughtSpot mobile supports more features that were previously available only through the ThoughtSpot Web app, including:
    <ul>
    <li>Deep linking</li>
    <li>Drill down</li>
    </ul>
    <p>See <a href="{{ site.baseurl }}/admin/mobile/notes-mobile.html">ThoughtSpot mobile release notes</a>  and <a href="{{ site.baseurl }}/admin/mobile/use-mobile.html">ThoughtSpot Mobile overview</a> for detailed information.</p></dd>
    </dlentry>
    <dlentry id="pivot-table">
      <dt>Pivot table enhancements</dt>
      <dd>This release includes enhancements to <a href="{{ site.baseurl }}/complex-search/about-pivoting-a-table.html">Pivot tables</a>. You can now:
      <ul>
      <li><strong>Drill down</strong> on values in pivot tables</li>
      <li><strong>Show underlying data</strong> for values in pivot tables</li>
      <li><strong>SpotIQ analyze</strong> values in pivot tables</li></ul>
      </dd></dlentry>
  </dl>

### For the Data Engineer

<dl id="6-3-data-engineer">
  <dlentry id="dataflow">
    <dt>DataFlow</dt>
    <dd id="dataflow-new-connections"><strong>New connection types</strong><br/>In this release, DataFlow expands support to the following connection types:
    <ul>
      <li><a href="{{"/data-integrate/dataflow/dataflow-apache-parquet.html" | prepend: site.baseurl}}">Apache Parquet</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-databricks-delta-lake.html" | prepend: site.baseurl}}">Databricks Delta Lake</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-denodo.html" | prepend: site.baseurl}}">Denodo</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-jdbc.html" | prepend: site.baseurl}}">JDBC</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-rest-api.html" | prepend: site.baseurl}}">REST API</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-sas.html" | prepend: site.baseurl}}">SAS</a></li>
    </ul>
    </dd>
    <dd id="dataflow-transformations"><strong>Transformations</strong><br/>In all DataFlow database connections, you can now add row-level formulas that use native database functions to transform your data as it loads into ThoughtSpot.</dd></dlentry>
  <dlentry id="embrace">
    <dt>Embrace</dt>
    <dd>In this release, Embrace adds support for SpotIQ analyze. Now you can analyze any answer, pinboard vizualization, or data source to generate instant insights, by clicking the SpotIQ analyze button <img src="../images/icon-lightbulb.png" alt="spotiq analyze icon" class="inline">.</dd>
    <dd>Embrace now supports security passthrough for Snowflake and Google BigQuery using OAuth for authentication and authorization. This feature is in beta for this release. Contact ThoughtSpot support for assistance.</dd>
    </dlentry>
</dl>

### For the IT Ops Engineer

<dl id="6-3-it-ops-engineer">

  <dlentry id="entry"><dt>Advanced lean mode for cloud deployments</dt><dd>For ThoughtSpot customers who want to deploy their AWS, Azure, and GCP instances with lower data sizes, this release brings enhancements to advanced lean mode configuration.</dd><dd>You can now configure lean mode yourself using tscli commands. No need to contact ThoughtSpot. For details, see <a href="{{ site.baseurl }}/appliance/cloud.html#reducing-your-cloud-infrastructure-costs">Use small and medium instance types</a>.
  </dd></dlentry>

  <dlentry id="open-ldap-auth"><dt>OpenLDAP authentication</dt><dd>ThoughtSpot now integrates with OpenLDAP for user authentication. LDAP provides security and makes user management more centralized. To enable user authentication through OpenLDAP, <a href="{{ site.baseurl }}/appliance/contact.html">contact ThoughtSpot Support</a>. This feature also exists in ThoughtSpot release 6.0.5.
  </dd></dlentry>

  <dlentry id="open-ldap-admin-user"><dt>OpenLDAP admin user</dt><dd>ThoughtSpot now supports using your company's OpenLDAP admin user to SSH into your cluster(s) as an admin, instead of using the local ThoughtSpot admin user, which has sudo privileges. This feature is only applicable to ThoughtSpot clusters run on an <a href="{{ site.baseurl }}/appliance/rhel/rhel.html">RHEL image</a>. Refer to <a href="{{ site.baseurl }}/appliance/rhel/rhel-install-online.html#ldap_admin_user">Install the ThoughtSpot application on online clusters that use RHEL</a> to learn how to add the three OpenLDAP admin user parameters to your Ansible playbook.
  </dd></dlentry>

  <dlentry id="admin-console"><dt>Admin Console enhancements</dt><dd>This release reorganizes the Admin Console, to make it cleaner and more intuitive. This includes the following changes:
  <ul>
  <li>The <strong>System Overview Pinboard</strong> in the Admin Console has been deprecated. You can find visualizations from it on the <a href="{{ site.baseurl }}/admin/admin-portal/system-cluster-pinboard.html">System Cluster Pinboard</a> and the <a href="{{ site.baseurl }}/admin/admin-portal/system-alerts-pinboard.html">System Alerts Pinboard</a>.</li>
  <li>The <strong>Total Capacity</strong> visualization is now in the <strong>System Cluster Pinboard</strong>.</li>
  <li>The visualizations about user activity that appeared in the <strong>System Overview Pinboard</strong> now appear in the new <a href="{{ site.baseurl }}/admin/admin-portal/user-adoption-pinboard.html">User Adoption Pinboard</a>.</li>
  <li>The <strong>Relational Data Cache</strong> and <strong>Relational Search Engine</strong> panels that appeared in the <strong>System Overview Pinboard</strong> now appear in <strong>Data > Usage > Data</strong>.</li>
  <li>Many of the visualizations that appeared in the <strong>System Overview Pinboard</strong> appear in the <a href="{{ site.baseurl }}/admin/system-monitor/overview.html">System Information and Usage Pinboard</a>.</li>
  <li>The <strong>Configuration Events</strong> panel that appeared in the <strong>System Overview Pinboard</strong> now appears in the <a href="{{ site.baseurl }}/admin/admin-portal/system-alerts-pinboard.html">System Alerts Pinboard</a>.</li></ul>
  </dd></dlentry>

  <dlentry id="user-adoption-perfomance-tracking-pinboard"><dt>User adoption and performance Pinboards</dt><dd>This release of ThoughtSpot contains two new default Pinboards for administrators. Use the User Adoption Pinboard in the Admin Console to understand how your ThoughtSpot users are interacting with ThoughtSpot, and how your user adoption is changing over time. Use the Performance Tracking Pinboard, accessible from the <strong>Pinboards</strong> tab, to understand how your ThoughtSpot cluster is performing. Refer to <a href="{{ site.baseurl }}/admin/admin-portal/user-adoption-pinboard.html">User Adoption Pinboard</a> and <a href="{{ site.baseurl }}/admin/system-monitor/performance-tracking.html">Performance Tracking Pinboard</a>.
  </dd></dlentry>

  <dlentry id="ease-of-installation"><dt>RHEL and Amazon Linux 2 ease of installation</dt><dd>This release of ThoughtSpot makes it easier to deploy ThoughtSpot on an <a href="{{ site.baseurl }}/appliance/amazon-linux-2/al2-overview.html">Amazon Linux 2</a> or <a href="{{ site.baseurl }}/appliance/rhel/rhel.html">RHEL image</a>.
  <ul>
  <li>You can now use a Terraform, Puppet, or Chef template, or an Ansible tarball, to install OS packages, dependencies, and the ThoughtSpot CLI (tscli), and configure your cluster. Previously, you could only use an Ansible tarball or Terraform template.</li>
  <li>You now only need 20 GB on the root drive for yum packages and system logs, and 200 GB for ThoughtSpot installation.</li>
  <li>You can now deploy ThoughtSpot on RHEL version 7.9. You can no longer deploy ThoughtSpot on RHEL version 7.7.</li>
  </ul>
  </dd></dlentry>

</dl>    

<!--{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.-->

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.2 release
directly:

* 6.1.x to 6.3
* 6.2.x to 6.3

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 6.1.x, or version 6.2.x, and then to the 6.3 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
