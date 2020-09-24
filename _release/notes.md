---
title: ["6.3 Release Notes"]
toc: false
last_updated: 09/09/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.3 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.3 New Features](#6-3-new)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-3-new"}
## 6.3 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.3 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-3).

### For the Analyst

<dl id="6-3-analyst">
  <dlentry id="geomaps">
    <dt>Geomaps</dt>
    <dd>ThoughtSpot now supports <a href="{{ site.baseurl }}/reference/geomap-reference.html">GeoMap</a> visualizations for these new locales:
        <ul>
          <li><strong>Netherlands</strong>: ...</li>
          <li><strong>...</strong>: ..., ..., ...</li>
        </ul>
          </dd></dlentry>

  <dlentry id="scriptability">
    <dt>Scriptability</dt>
    <dd>This release introduces expanded support for <a href="{{ site.baseurl }}/admin/scriptability/scriptability.html">exporting and importing ThoughtSpot objects</a>. You can now export and import the following scriptable objects:
     <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
    </dd>
  </dlentry>
  </dl>   

### For the Business User

<dl id="6-3-business-user">
  <dlentry id="monitor">
    <dt>Monitor</dt>
    <dd>The Monitor suite of features, some of which were introduced in earlier releases as Beta, are now generally available by default. These features are:
      <ul>
        <li><strong><a href="{{ site.baseurl }}/end-user/pinboards/share-pinboards.html#share-viz">Change this text and link</a></strong> brief explanation</li>   
      </ul>
    </dd></dlentry>
  <dlentry id="mobile-improvements">
    <dt>Mobile app updates</dt>
    <dd>ThoughtSpot mobile supports more features that were previously available only through the ThoughtSpot Web app, including:
    <ul>
    <li>Deep linking</li>
    <li>Drill down</li>
    </ul>
    <p>See <a href="{{ site.baseurl }}/admin/mobile/notes-mobile.html">ThoughtSpot mobile release notes</a>  and <a href="{{ site.baseurl }}/admin/mobile/use-mobile.html">ThoughtSpot Mobile overview</a> for detailed information.</p></dd>
    </dlentry>
  </dl>

### For the Data Engineer

<dl id="6-3-data-engineer">
  <dlentry id="dataflow">
    <dt>DataFlow</dt>
    <dd>In this release, DataFlow expands support to the following connection types:
    <ul>
      <li><a href="{{"/data-integrate/dataflow/dataflow-apache-parquet.html" | prepend: site.baseurl}}">Apache Parquet</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-azure-databricks.html" | prepend: site.baseurl}}">Azure Databricks</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-azure-data-lake.html" | prepend: site.baseurl}}">Azure Data Lake</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-denodo.html" | prepend: site.baseurl}}">Denodo</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-jdbc.html" | prepend: site.baseurl}}">JDBC</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-rest-api.html" | prepend: site.baseurl}}">REST API</a></li>
      <li><a href="{{"/data-integrate/dataflow/dataflow-sas.html" | prepend: site.baseurl}}">SAS</a></li>
    </ul>
    </dd></dlentry>
  <dlentry id="embrace">
    <dt>Embrace</dt>
    <dd>In this release, Embrace adds support for SpotIQ analyze. Now you can analyze any answer, pinboard vizualization, or data source to generate instant insights, by clicking the SpotIQ analyze button <img src="/images/icon-lightbulb.png" alt="spotiq analyze icon" class="inline" />.</dd>
    </dlentry>
</dl>

### For the IT Ops Engineer

<dl id="6-3-it-ops-engineer">
  
  <dlentry id="granular-pinboard-access">
  <dt>Granular access to Pinboards</dt>
  <dd>Starting with this release, you can limit the use of Pinboards and their components to a 'Read only' mode. The new <a href="{{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html#read-only">Cannot create or update Pinboards</a> negative privilege, when enabled on the cluster, limits users to viewing and exploring the curated Pinboards that are shared with them. These users cannot edit, copy, download, or share Pinboards and Answers.<br />See <a href="{{ site.baseurl }}/end-user/introduction/pinboard-granular-permission.html">Granular access to Pinboards</a>.</dd></dlentry>

  <dlentry id="entry"><dt>Advanced lean mode for cloud deployments</dt><dd>For ThoughtSpot customers who want to deploy their AWS, Azure, and GCP instances with lower data sizes, this release brings enhancements to advanced lean mode configuration.</dd><dd>Enhancements include the following:
  <ul>
    <li>You can now configure lean mode yourself using tscli commands. No need to contact ThoughtSpot.</a></li>
    <li>Default limits on objects (answers, pinboards) so that can't create more objects than your reduced configuration can support.</li>
  </ul>
  </dd></dlentry>
  
</dl>    

{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

### Scriptability
Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Scriptability%20Beta%20Program%20Request" target="_blank">Scriptability Beta Program</a>, for migrating and updating Answers and Pinboards in a flat-file format.

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
