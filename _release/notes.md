---
title: ["6.2 Release Notes"]
toc: false
last_updated: 21/07/2020
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
    <dd>ThoughtSpot now supports <a href="{{ site.baseurl }}/reference/geomap-reference.html">GeoMap</a> visualizations for these new locales:
        <ul>
          <li><strong>India</strong>: State, District, Postcode</li>
          <li><strong>Portugal</strong>: District, Municipality, Postcode</li>
          <li><strong>Italy</strong>: Improved regional name support</li>
        </ul>
          </dd></dlentry>
  <dlentry id="table-config">
    <dt>Table configuration</dt>
    <dd>This release introduces a more intuitive way to configure your tables, including these new features:
        <ul>
            <li><strong><a href="{{ site.baseurl }}/end-user/search/about-tables.html#rearrange-column-order">Drag and drop chips</a></strong> allow you to easily rearrange the order of the columns in your table</li>
            <li><strong><a href="{{ site.baseurl }}/end-user/search/about-tables.html#clip-wrap-text">Clip or wrap text</a></strong> for the entire table from the <strong>Edit table: Settings</strong> menu, or by column from the column's <strong>more options menu</strong></li>
            <li><strong><a href="{{ site.baseurl }}/end-user/search/about-tables.html#number-formatting">Number formatting</a></strong> for any table column based on a measure, allowing you to change the category (number, percentage, or currency), units (auto, none, thousand, million, billion, or trillion), or method of writing negative values (-1234, 1234-, or (1234))</li>
            <li><strong><a href="{{ site.baseurl }}/end-user/search/about-tables.html#table-footer">Enable or disable the table footer</a></strong> from the <strong>Edit table: Settings</strong> menu</li>
            <li><strong><a href="{{ site.baseurl }}/end-user/search/about-tables.html#column-summaries">Enable or disable column summaries</a></strong> from the <strong>Edit table: Settings</strong> menu</li>
        </ul>
      <p>For more information, see <a href="{{ site.baseurl }}/end-user/search/about-tables.html">Results that are tables</a>.</p>
        </dd></dlentry>
  <dlentry id="high-cardinality">
    <dt>High cardinality</dt>
    <dd>In this release, ThoughtSpot supports charts and tables with a very large number of data values, and shows how much of the data your chart or table displays.<br/>
      <ul>
        <li>Your search in table form can now have more than 1000 rows.</li>
        <li>Your charts now come with a horizontal scroll bar, to support up to 35,000 data points.</li>
        <li>You can have up to 250 distinct legend items on a chart.</li></ul>
      <p>See <a href="{{"/end-user/search/high-cardinality.html#insights" | prepend: site.baseurl}}">Charts and tables with a very large number of data values</a>.</p></dd></dlentry>
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
  <dlentry id="insights">
    <dt>Insights</dt>
    <dd>Insights no longer appear on Home page and Pinboard by default, unless that feature is turned on for the cluster. See <a href="{{"/end-user/introduction/about-navigating-thoughtspot.html#insights" | prepend: site.baseurl}}">Finding your way around, Insights</a>.</dd></dlentry>  
  <dlentry id="scriptability">
    <dt>Scriptability</dt>
    <dd>This release introduces expanded support for <a href="{{ site.baseurl }}/admin/scriptability/scriptability.html">exporting and importing ThoughtSpot objects</a>. You can now export and import the following scriptable objects:
     <ul>
      <li><a href="{{ site.baseurl }}/admin/worksheets/worksheet-export.html">Worksheets with filters</a></li>
      <li><a href="{{ site.baseurl }}/admin/scriptability/scriptability-answer.html">Answers</a> <span class="label label-beta">Beta</span></li>
      <li><a href="{{ site.baseurl }}/admin/scriptability/scriptability-pinboard.html">Pinboards</a> <span class="label label-beta">Beta</span></li>
    </ul>
    </dd>
  </dlentry>
</dl>    

### For the Business User

<dl id="6-2-business-user">
  <dlentry id="growth-sharing">
    <dt>Growth: Sharing</dt>
    <dd>Updates to <a href="{{ site.baseurl }}/end-user/data-view/sharing-for-end-users.html">sharing</a> in 6.2 make the feature more intuitive, and remove moments of friction that can occur when sharing, or trying to access objects for which you have limited permissions.
      <ul>
        <li><strong><a href="{{ site.baseurl }}/end-user/pinboards/share-pinboards.html#share-viz">Share a specific visualization within a Pinboard</a></strong> so that the email link opens up to that visualization in Explore mode</li>
        <li><strong><a href="{{ site.baseurl }}/end-user/pinboards/share-pinboards.html#share-direct-link">Copy a direct link to the Pinboard, Answer, or visualization within a Pinboard</a></strong> that you are sharing, so you can separately send that link to users after you share the object with them</li>  
        <li><strong><a href="{{ site.baseurl }}/end-user/pinboards/request-access">Request access within a Pinboard or Answer</a></strong> if you need edit or underlying data access to the Pinboard or Answer</li>        
        <li><strong><a href="{{ site.baseurl }}/end-user/pinboards/share-pinboards.html#share-underlying-data">Share underlying data access</a></strong> within the sharing modal if the user does not have data access</li>        
      </ul>
    </dd></dlentry>
  <dlentry id="answer-explorer">
    <dt>Answer Explorer v2</dt>
    <dd>Updates to Answer Explorer in 6.2 allow users to add their own filters, comparisons, and measures and attributes to a visualization while in Explore mode. See <a href="{{ site.baseurl }}/end-user/pinboards/answer-explorer.html">Answer Explorer</a> for more information.</dd></dlentry>
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
    <dt>Embrace has new features and supports more data warehouses</dt>
    <dd>In this release, Embrace includes the following new features:
      <ul>
        <li>Improved performance when creating or editing a connection.</li>
        <li>Ability to remove columns in a connection.</li>
        <li>Actual SQL is displayed in the query visualizer. This allows analysts to check the actual external database query so they can easily validate the output.</li>
        <li>A summary of tables/columns connected is now displayed as part of add/edit connection workflow.</li></ul>
      <p>Starting with Release 6.2, ThoughtSpot Embrace connects to two more data warehouses:</p>
      <ul>
       <li id="teradata"><strong>Teradata</strong>
        <br/>We certify Embrace with Teradata Vantage version 16.20 or later; see <a href="{{"/data-integrate/embrace/embrace-teradata.html" | prepend: site.baseurl}}">Teradata connections in Embrace</a></li>
       <li id="sap-hana"><strong>SAP HANA</strong> <span class="label label-beta">Beta</span>
        <br/>We certify Embrace with SAP HANA Version 2.0 or later; see <a href="{{"/data-integrate/embrace/embrace-hana.html" | prepend: site.baseurl}}">SAP HANA connections in Embrace</a></li></ul></dd></dlentry>
  <dlentry id="tsload">
    <dt>tsload connector for ETL tools</dt>   
    <dd>This release introduces a new option for loading data in bulk, called tsload connector. The tsload connector is a collection of APIs that allow you to directly, and more quickly load your data into the ThoughtSpot Falcon database. For more information, see <a href="{{"/admin/loading/load-with-tsload.html" | prepend: site.baseurl}}">Use the tsload connector to load data</a>.</dd></dlentry>
</dl>

### For the IT Ops Engineer

<dl id="6-2-it-ops-engineer">
  <dlentry id="amazon-linux-2">
    <dt>Amazon Linux 2 Deployment</dt>
    <dd>This release of ThoughtSpot introduces deployment support for <a href="https://aws.amazon.com/amazon-linux-2/" target="_blank" >Amazon Linux 2</a>. This decouples the OS and application files we shipped together in previous releases, and gives you the flexibility to run ThoughtSpot on an Amazon Linux 2 image that your organization manages internally. ThoughtSpot certifies Amazon Linux 2 on the AWS platform. To deploy ThoughtSpot on Amazon Linux 2, you must have the Ansible tarball; you can obtain the tarball through your ThoughtSpot contact. For more information, see the <a href="{{"/appliance/amazon-linux-2/al2-overview.html" | prepend: site.baseurl}}">Amazon Linux 2 Deployment Overview</a>.</dd></dlentry>
  <dlentry id="admin-portal">
    <dt>Admin Portal</dt>
    <dd>This release of ThoughtSpot introduces the <a href="{{ site.baseurl }}/admin/admin-portal/admin-portal.html">Administration Portal</a>, providing you with an intuitive, user-friendly interface to accomplish most of the necessary tasks for administering ThoughtSpot. You can accomplish the following tasks from the Administration Portal:
    <ul>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/users.html">Manage ThoughtSpot users</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/groups.html">Manage ThoughtSpot groups</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/authentication-local.html">Manage local authentication</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/authentication-saml.html">Configure SAML authentication</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/authentication-active-directory.html">Configure LDAP authentication through Active Directory</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/ssl-configure.html">Configure SSL</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/reverse-ssh-tunnel.html">Configure a reverse SSH tunnel for Support</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/smtp-configure.html">Set the relay host for SMTP (email)</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/customize-help.html">Customize ThoughtSpot help</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/customize-actions-menu.html">Customize Answer actions menu</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/system-overview-pinboard.html">View System Overview Pinboard</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/system-cluster-pinboard.html">View System Cluster Pinboard</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/system-alerts-pinboard.html">View System Alerts Pinboard</a></li>
      <li><a href="{{ site.baseurl }}/admin/admin-portal/available-update.html">Monitor available cluster updates</a></li>
    </ul>
    </dd></dlentry>
  <dlentry  id="in-memory-data-compression">
    <dt>In-memory data compression</dt>
    <dd>ThoughtSpot release 6.2 includes improvements to in-memory data compression. These improvements lower your RAM requirements and reduce the number of VMs you need for in-memory data, when deploying on a cloud platform. In release 6.2, ThoughtSpot added two new compression algorithms to the Dictionary compression that ThoughtSpot already supports. ThoughtSpot now supports <strong>LZ4</strong>, for <code>INT</code>, <code>BIGINT</code>, <code>DOUBLE</code>, and <code>FLOAT</code> data types, and <strong>RLE</strong>, for strings. See <a href="{{ site.baseurl }}/admin/architecture/data-compression.html">In-memory data compression</a> for more information. </dd></dlentry>
</dl>    

{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

### Monitor

Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Monitor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a>, for monitoring selected metrics over time.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.2 release
directly:

* 5.3.x to 6.2
* 6.0.x to 6.2

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.3.x, or version 6.0.x, and then to the 6.2 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
