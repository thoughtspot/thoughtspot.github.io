---
title: ["6.2 Release Notes"]
toc: false
last_updated: 07/23/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.2 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).


* [6.2 New Features](#6-2-new)
* [Early Access Programs](#early-access)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-2-new"}
## 6.2 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.2 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-2).


### For the  Analyst

<dl id='6-2-analyst'>
  <dlentry id="geomaps">
    <dt>Geomaps</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="table-config">
    <dt>Table configuration</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="high-caridnality">
    <dt>High cardinality</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="keywords">
    <dt>New search keywords</dt>
    <dd>
      <ul>
        <li id="top">
          <strong>The nested ‘top’ keyword</strong>
          <br/>&nbsp;</li>
        <li id="not-in">
          <strong>The ‘not in’ keyword</strong>
          <br/>&nbsp;</li></ul>
    </dd></dlentry>
  <dlentry id="subscribe-others">
    <dt>Monitor: Subscribe others</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="scriptability">
    <dt>Scriptability</dt>
    <dd>This release introduces a more human-readable syntax, in addition to support for expanded ThoughtSpot support for more artifacts.
     <ul>
      <li id="answers"><strong>Scriptability for Answers</strong>
      <br/>&nbsp;</li>
      <li id="pinboards"><strong>Scriptability for Pinboards</strong><br/>&nbsp;</li>
      <li id="views"><strong>Scriptability for Views</strong><br/>&nbsp;</li>
      <li id="filters"><strong>Scriptability for Filters</strong><br/>&nbsp;</li></ul>
    </dd>
  </dlentry>
</dl>    

### For the Business User

<dl id="6-2-business-user">
  <dlentry id="growth-sharing">
    <dt>Growth: Sharing</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="answer-explorer">
    <dt>Answer Explorer v2</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="mobile-android">
    <dt>Mobile for Android</dt>
    <dd>&nbsp;</dd></dlentry>
</dl>

### For the Data Engineer

<dl id="6-2-data-engineer">
  <dlentry id="dataflow">
    <dt>DataFlow</dt>
    <dd>DataFlow is a new graphical, code-free, analyst-friendly approach for easily loading data into ThoughtSpot’s in-memory engine.<br/>
    In this release, DataFlow supports  a  large number of databases (<a href="{{"/data-integrate/dataflow/dataflow-amazon-aurora.html" | prepend: site.baseurl}}">Amazon Aurora</a>, <a href="{{"/data-integrate/dataflow/dataflow-amazon-redshift.html" | prepend: site.baseurl}}">Amazon Redshift</a>), <a href="{{"/data-integrate/dataflow/dataflow-azure-synapse.html" | prepend: site.baseurl}}">Azure Synapse</a>,
<a href="{{"/data-integrate/dataflow/dataflow-cassandra.html" | prepend: site.baseurl}}">Cassandra</a>,
<a href="{{"/data-integrate/dataflow/dataflow-google-bigquery.html" | prepend: site.baseurl}}">Google BigQuery</a>,
<a href="{{"/data-integrate/dataflow/dataflow-hive.html" | prepend: site.baseurl}}">Hive</a>,
<a href="{{"/data-integrate/dataflow/dataflow-ibm-db2.html" | prepend: site.baseurl}}">IBM Db2</a>,
<a href="{{"/data-integrate/dataflow/dataflow-mariadb.html" | prepend: site.baseurl}}">MariaDB</a>,
<a href="{{"/data-integrate/dataflow/dataflow-mongodb.html" | prepend: site.baseurl}}">MongoDB</a>,
<a href="{{"/data-integrate/dataflow/dataflow-mysql.html" | prepend: site.baseurl}}">MySQL</a>,
<a href="{{"/data-integrate/dataflow/dataflow-netezza.html" | prepend: site.baseurl}}">Netezza</a>,
<a href="{{"/data-integrate/dataflow/dataflow-oracle.html" | prepend: site.baseurl}}">Oracle</a>,
<a href="{{"/data-integrate/dataflow/dataflow-postgresql.html" | prepend: site.baseurl}}">PostgreSQL</a>,
<a href="{{"/data-integrate/dataflow/dataflow-presto.html" | prepend: site.baseurl}}">Presto</a>,
<a href="{{"/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise.html" | prepend: site.baseurl}}">SAP Adaptive Server Enterprise</a>,
<a href="{{"/data-integrate/dataflow/dataflow-sap-hana.html" | prepend: site.baseurl}}">SAP HANA</a>,
<a href="{{"/data-integrate/dataflow/dataflow-sap-sql-anywhere.html" | prepend: site.baseurl}}">SAP SQL Anywhere</a>,
<a href="{{"/data-integrate/dataflow/dataflow-sql-server.html" | prepend: site.baseurl}}">SQL Server</a>,
<a href="{{"/data-integrate/dataflow/dataflow-snowflake.html" | prepend: site.baseurl}}">Snowflake</a>,
<a href="{{"/data-integrate/dataflow/dataflow-splice-machine.html" | prepend: site.baseurl}}">Splice Machine</a>, and
<a href="{{"/data-integrate/dataflow/dataflow-teradata.html" | prepend: site.baseurl}}">Teradata</a>), file systems (<a href="{{"/data-integrate/dataflow/dataflow-amazon-s3.html" | prepend: site.baseurl}}">Amazon S3</a>,
<a href="{{"/data-integrate/dataflow/dataflow-azure-blob-storage.html" | prepend: site.baseurl}}">Azure Blob Storage</a>,
<a href="{{"/data-integrate/dataflow/dataflow-flat-files.html" | prepend: site.baseurl}}">Flat Files</a>,
<a href="{{"/data-integrate/dataflow/dataflow-google-cloud-storage.html" | prepend: site.baseurl}}">Google Cloud Storage</a>,
<a href="{{"/data-integrate/dataflow/dataflow-hdfs.html" | prepend: site.baseurl}}">HDFS</a>), and one application, <a href="{{"/data-integrate/dataflow/dataflow-salesforce.html" | prepend: site.baseurl}}">Salesforce</a>.</dd></dlentry>
  <dlentry id="embrace">
    <dt>Embrace</dt>
    <dd>
    <ul>
     <li id="teradata"><strong>Teradata</strong>
     <br/>&nbsp;</li>
     <li id="sap-hana"><strong>SAP HANA</strong>
     <br/>&nbsp;</li></ul></dd></dlentry>
  <dlentry id="tsload">
    <dt>TSload connector for ETL tools</dt>   
    <dd>&nbsp;</dd></dlentry>
</dl>

### For the IT Ops Engineer

<dl id="6-2-it-ops-engineer">
  <dlentry id="amazon-linux-2">
    <dt>Amazon Linux 2 Deployment</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry id="admin-portal">
    <dt>Admin Portal</dt>
    <dd>&nbsp;</dd></dlentry>
  <dlentry  id="in-memory-data-compression">
    <dt>In-memory data compression</dt>
    <dd>&nbsp;</dd></dlentry>
</dl>    

### Embrace supports more data warehouses and new features

Embrace now supports the following data warehouses:
- Teradata
- SAP HANA (version 2.0 or later)&nbsp;&nbsp;<span class="label label-success" style="position: relative; top: -1px">Beta</span>

Embrace includes the following new features:
- Ability to remove columns in a connection.
- A summary of tables/columns connected is now displayed as part of add/edit connection workflow.
- Actual SQL is displayed in the query visualizer. This allows analysts to check the actual external database query so they can easily validate the output.
- Improved performance when editing a connection.


ThoughtSpot now supports charts and tables with more than 1000 data values. You can easily understand how much of the data your chart or table displays.

* Your search in table form can now have more than 1000 rows.
* Your charts now come with a horizontal scroll bar, to support up to 35,000 data points.
* You can have up to 250 distinct legend items on a chart.

See [Charts and tables with a very large number of data values]({{ site.baseurl }}/end-user/search/high-cardinality.html).

### Tsload as a service

This release introduces a new option for loading data in bulk, called tsload as a service. The tsload service is a collection of APIs that allow you to directly, and more quickly load your data into the ThoughtSpot Falcon database. For more information, see [Use the tsload service to load data]({{ site.baseurl }}/admin/loading/load-with-service.html).


For more information, see [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

{: id="early-access"}
## Early Access Programs

### UI update

Please contact us if you are interested in participating in the <a href="mailto:early_access@thoughtspot.com?subject=UI%20Update%20Early%20Access%20Program%20Request" target="_blank">UI Update Early Access Program</a>.


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
