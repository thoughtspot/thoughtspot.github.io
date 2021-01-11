---
title: ["6.2 Release Notes"]
toc: false
last_updated: 09/28/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.2.1 is now available. These release notes include information about new and enhanced features. 

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [6.2.1 New Features](#6-2-1-new)
* [6.2 New Features](#6-2-new)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-2-1-new"}
## 6.2.1 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.2.1 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-2-1).

### For the IT Ops Engineer

<dl id="6-2-1-it-ops-engineer">
  <dlentry id="granular-pinboard-access">
  <dt>Granular access to Pinboards</dt>
  <dd>Starting with this release, you can control user's permissions to create or update Pinboards, essentially limiting them to 'read only' access. These users can view and explore Pinboards. However, they cannot edit, copy, download, or share Pinboards and Answers.<br />This must be enabled on the cluster.<br />See <a href="{{ site.baseurl }}/end-user/introduction/pinboard-granular-permission.html">Granular access to Pinboards</a>, and <a href="{{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html#read-only">Cannot create or update Pinboards</a> privilege.</dd></dlentry>

<dlentry id="style-customization">
  <dt>Style customization</dt>
  <dd>You can now customize the ThoughtSpot application from the Admin Console. With style customization, you can change the fonts, chart color palettes, footer text, application logo, and background colors in your embedded ThoughtSpot instance.<br><br> Refer to <a href="{{ site.baseurl }}/admin/admin-portal/style-customization.html">Style customization</a>.</dd></dlentry>
</dl>

{: id="6-2-new"}
## 6.2 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.2 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-2).

### For the Analyst

<dl id="6-2-analyst">
  <dlentry id="geomaps">
    <dt>Geomaps</dt>
    <dd>ThoughtSpot now supports <a href="{{ site.baseurl }}/reference/geomap-reference.html">GeoMap</a> visualizations for these new locales:
        <ul>
          <li><strong>India</strong>: State, District, Postcode</li>
          <li><strong>Portugal</strong>: District, Municipality, Postcode</li>
          <li><strong>Italy</strong>: Improved regional name support</li>
        </ul>
          </dd><dd><strong>Geomaps overview</strong>
          <br>
<script src="https://fast.wistia.com/embed/medias/u7prltvp9w.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_u7prltvp9w popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span></dd></dlentry>
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
        </dd><dd><strong>Table configuration overview</strong><br>
<script src="https://fast.wistia.com/embed/medias/9ggsx9glpz.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_9ggsx9glpz popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span><p>For more information, see <a href="{{ site.baseurl }}/end-user/search/about-tables.html">Results that are tables</a>.</p></dd></dlentry>
  <dlentry id="high-cardinality">
    <dt>High cardinality</dt>
    <dd>In this release, ThoughtSpot supports charts and tables with a very large number of data values, and shows how much of the data your chart or table displays.<br/>
      <ul>
        <li>Your search in table form can now have more than 1000 rows.</li>
        <li>Your charts now come with a horizontal scroll bar, to support up to 35,000 data points.</li>
        <li>You can have up to 250 distinct legend items on a chart.</li>
        </ul>
        </dd><dd><strong>High cardinality overview</strong><br>
<script src="https://fast.wistia.com/embed/medias/q9jggoxmjy.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_q9jggoxmjy popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span><p>See <a href="{{ site.baseurl }}/end-user/search/high-cardinality.html">Charts and tables with a very large number of data values</a>.</p></dd></dlentry>
  <dlentry id="keywords">
    <dt>New search keywords and changed behavior</dt>
    <dd>
      <ul>
        <li id="top">
          <strong>The nested ‘top’ keyword</strong>
          <br/>The new keyword phrase, <a href="{{"/reference/keywords.html#top-n-by" | prepend: site.baseurl}}">top <em>n</em> <em>measure1</em> by <em>attribute</em> | <em>measure2</em></a>, enables you to search the top n results by an attribute or a secondary measure.</li>
        <li id="not-in">
          <strong>The ‘not in’ keyword</strong>
          <br/>Another keyword phrase, <a href="{{"/reference/keywords.html#not-in" | prepend: site.baseurl}}">not in</a>, enables you to find the relative complement of two sets: results that satisfy the outer query that are not in the inner query. Contrast this with <a href="{{"/reference/keywords.html#in" | prepend: site.baseurl}}">in</a> that returns results that are an intersection of the outer and inner query, or 'query within a query'.</li>
        <li id="in">
          <strong> Change in behavior for the ‘in’ keyword</strong>
          <br/>The <a href="{{"/reference/keywords.html#in" | prepend: site.baseurl}}">in</a> keyword returns results that are an intersection of the outer and inner query, or 'query within a query'. Starting in 6.2, searches with the <code>in</code> keyword do not include {null} values. To include these {null} values, create a formula for the relevant attribute in your search, to convert {null} values to 'unknown,' or some similar word.</li></ul>
          </dd><dd><strong>Search keywords overview</strong><br>
<script src="https://fast.wistia.com/embed/medias/0m74x2bszt.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_0m74x2bszt popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span></dd></dlentry>
  <dlentry id="monitor">
    <dt>Monitor <span class="label label-beta">Beta</span></dt>
    <dd>
      <ul>
        <li id="subscribe-others">
          <strong>Subscribe others</strong>: To drive adoption of Pinboards, analysts can now subscribe business users to receive daily email notification for the relevant metrics. See <a href="{{"/spotiq/monitor-headlines.html#subscribe-others" | prepend: site.baseurl}}">Subscribe others</a>.</li>
       <li id="monitor-ux"><strong>UI enhancements</strong>: We made several improvements to the Monitor and Follow features, optimizing the workflow.</li></ul></dd></dlentry>
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
  <dlentry id="aggregate-formulas">
    <dt>Aggregate formulas as Worksheet filters</dt>
    <dd>You can now use an aggregate formula as a Worksheet filter. See <a href="{{ site.baseurl }}/complex-search/aggregation-formulas.html#aggregate-filter">Use aggregate formulas as Worksheet filters</a>.</dd></dlentry>
  <dlentry id="formula-parser">
    <dt>Formula Parser Improvements</dt>
    <dd>ThoughtSpot 6.2 includes improvements to the latency of the formula parser. Complex formulas that took over 45 seconds to parse are now parsed in 150 milliseconds — a 300x improvement. Latency no longer increases exponentially with the depth of the formula nesting, no matter how complex the formula is.</dd></dlentry>
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
    <dd>Updates to Answer Explorer in 6.2 introduce a cleaner user interface and allow users to add their own filters, comparisons, measures, and attributes to a visualization while in Explore mode. See <a href="{{ site.baseurl }}/end-user/pinboards/answer-explorer.html">Answer Explorer</a> for more information.</dd>
    <dd><strong>Answer Explorer overview</strong>
    <br>
    <script src="https://fast.wistia.com/embed/medias/e69konui8y.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_e69konui8y popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span></dd>
    </dlentry>
  <dlentry id="mobile-android">
    <dt>Mobile for Android</dt>
    <dd>In time for this release, you can download ThoughtSpot app for Android OS from the PlayStore. See <a href="{{ site.baseurl }}/admin/mobile/notes-mobile.html">ThoughtSpot Mobile release notes</a> and <a href="{{ site.baseurl }}/admin/mobile/use-mobile.html">ThoughtSpot Mobile overview</a>.</dd></dlentry>
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
<a href="{{"/data-integrate/dataflow/dataflow-files.html" | prepend: site.baseurl}}">Flat Files</a>,
<a href="{{"/data-integrate/dataflow/dataflow-google-cloud-storage.html" | prepend: site.baseurl}}">Google Cloud Storage</a>,
<a href="{{"/data-integrate/dataflow/dataflow-hdfs.html" | prepend: site.baseurl}}">HDFS</a>), and one application, <a href="{{"/data-integrate/dataflow/dataflow-salesforce.html" | prepend: site.baseurl}}">Salesforce</a>.</dd><dd><strong>DataFlow overview</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/0850igo7wv.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_0850igo7wv popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span></dd></dlentry>
  <dlentry id="embrace">
    <dt>Embrace</dt>
    <dd>In this release, Embrace supports two new data warehouses and includes new features.
    <p>New data warehouses:</p>
      <ul>
      <li id="teradata"><strong>Teradata</strong>
       <br/>Teradata Vantage version 16.20 or later is required. For more information, see <a href="{{"/data-integrate/embrace/embrace-teradata.html" | prepend: site.baseurl}}">Teradata overview</a>.</li><br>
      <li id="sap-hana"><strong>SAP HANA</strong> <span class="label label-beta">Beta</span>
       <br/>SAP HANA version 2.0 or later is required. For more information, see <a href="{{"/data-integrate/embrace/embrace-hana.html" | prepend: site.baseurl}}">SAP HANA overview</a>.</li></ul>
      <p>New features:</p>
      <ul>
        <li>Ability to remove columns from a connection.</li>
        <li>Actual SQL is displayed in the query visualizer. This allows analysts to check the actual external database query so they can easily validate the output.</li>
        <li>A summary of connected tables/columns is displayed in the add/edit connection workflow.</li>
        <li>Improved performance when creating or editing a connection.</li></ul>
       </dd></dlentry>
  <dlentry id="tsload">
    <dt>tsload connector</dt>   
    <dd>This release introduces a new option for loading data in bulk, called tsload connector. It is a collection of APIs that allow you to directly, and more quickly load your data into the ThoughtSpot Falcon database. For more information, see <a href="{{"/admin/loading/load-with-tsload.html" | prepend: site.baseurl}}">Use the tsload connector to load data</a>.</dd></dlentry>
</dl>

### For the IT Ops Engineer

<dl id="6-2-it-ops-engineer">
  <dlentry id="amazon-linux-2">
    <dt>Amazon Linux 2 Deployment</dt>
    <dd>This release of ThoughtSpot introduces deployment support for <a href="https://aws.amazon.com/amazon-linux-2/" target="_blank" >Amazon Linux 2</a>. This decouples the OS and application files we shipped together in previous releases, and gives you the flexibility to run ThoughtSpot on an Amazon Linux 2 image that your organization manages internally. ThoughtSpot certifies Amazon Linux 2 on the AWS platform. To deploy ThoughtSpot on Amazon Linux 2, you must have the Ansible tarball; you can obtain the tarball through your ThoughtSpot contact. For more information, see the <a href="{{"/appliance/amazon-linux-2/al2-overview.html" | prepend: site.baseurl}}">Amazon Linux 2 Deployment Overview</a>.</dd></dlentry>
  <dlentry id="admin-portal">
    <dt>Admin Console</dt>
    <dd>This release of ThoughtSpot introduces the <a href="{{ site.baseurl }}/admin/admin-portal/admin-portal.html">Admin Console</a>, providing you with an intuitive, user-friendly interface to accomplish most of the necessary tasks for administering ThoughtSpot. You can accomplish the following tasks from the Admin Console:
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
    </dd><dd><strong>Admin Console overview</strong>
    <br>
    <script src="https://fast.wistia.com/embed/medias/ic9rg4gru8.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_ic9rg4gru8 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span></dd></dlentry>
  <dlentry  id="in-memory-data-compression">
    <dt>In-memory data compression</dt>
    <dd>ThoughtSpot release 6.2 includes improvements to in-memory data compression. These improvements lower your RAM requirements and reduce the number of VMs you need for in-memory data, when deploying on a cloud platform. In release 6.2, ThoughtSpot added two new compression algorithms to the Dictionary compression that ThoughtSpot already supports. ThoughtSpot now supports <strong>LZ4</strong>, for <code>INT</code>, <code>BIGINT</code>, <code>DOUBLE</code>, and <code>FLOAT</code> data types, and <strong>RLE</strong>, for strings. See <a href="{{ site.baseurl }}/admin/architecture/data-compression.html">In-memory data compression</a> for more information. </dd></dlentry>
  <dlentry  id="falcon-monitor">
    <dt>Falcon monitoring Pinboards</dt>
    <dd>In ThoughtSpot release 6.2, there are 4 new Pinboards, based on Falcon metrics, that are available to system administrators. Use the Falcon monitoring system Pinboards for an overview of Falcon, ThoughtSpot's in-memory database, and its health, based on query, data load, and varz metrics. You can use these Pinboards for proactive monitoring, or, with help from <a href="{{ site.baseurl }}/appliance/contact.html">ThoughtSpot Support</a>, for debugging. See <a href="{{ site.baseurl }}/admin/system-monitor/falcon-monitor.html">Falcon monitoring Pinboards</a> for more information. </dd></dlentry>
  <dlentry  id="use-agreement">
    <dt>In-app acceptance of ThoughtSpot's use agreement</dt>
    <dd>You can now sign ThoughtSpot's end-user use agreement from the application itself. Even if you previously signed a paper copy of the use agreement, an admin <strong><em>must</em></strong> sign the agreement in the application, within 30 days of your upgrade to release 6.2. See <a href="{{ site.baseurl }}/admin/setup/use-agreement.html">ThoughtSpot use agreement</a> for more information. </dd></dlentry>
</dl>    

{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

### Monitor

Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Monitor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a>, for monitoring selected metrics over time.

### Scriptability
Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Scriptability%20Beta%20Program%20Request" target="_blank">Scriptability Beta Program</a>, for migrating and updating Answers and Pinboards in a flat-file format.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.2.1 release
directly:

* 6.0.x to 6.2.1
* 6.1.x to 6.2.1
* 6.2 to 6.2.1

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade. First, upgrade to version 6.0.x, 6.1.x, or 6.2, and then to the 6.2.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
