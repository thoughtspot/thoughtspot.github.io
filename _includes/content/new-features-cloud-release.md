The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#may-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#may-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#may-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#may-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#may-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="may-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry>
  <dt>Search Assist Coach</dt>
  <dd><a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">Search Assist Coach</a> enables Analysts, or anyone who has <strong>edit</strong> access to a Worksheet, to create <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist.html">Search Assist</a> sample queries based on their company data. This gives all users the opportunity to experience onboarding and training on data that is relevant to their work, and specific to their line of business.</dd></dlentry>

  <dlentry>
    <dt>Scriptable Worksheets with Search Assist Coach lessons</dt>
    <dd>You can now use TML to import, export, and update Worksheets with <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">Search Assist Coach</a> lessons. See <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-worksheets">Syntax of the Worksheet TML file</a>.</dd></dlentry>

</dl>

<h3><a id="may-cloud-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="home-page-metrics">
<dt>Track metrics from the home page</dt>
<dd>You can now add important metrics to your watchlist and track them from the home page. Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">Home page metrics</a>.</dd>
</dlentry>

<dlentry id="automatic-select">
<dt>Automatic selection of first search result</dt>
<dd>When you search across existing Answers and Pinboards, ThoughtSpot now automatically selects the first result and opens the <strong>Details</strong> panel. This allows you to quickly glance at the details for the result that ThoughtSpot determines is most useful for you. You can see the metrics, groups, and filters for the Answer or Pinboard, and easily find out if that object answers your question.</dd>
</dlentry>

<dlentry id="latency">
<dt>Improvements in indexing latency for Search Answers</dt>
<dd>This release improves indexing latency to less than 10 minutes (less than 5 in most cases), from 6 hours previously. Now, when you create, modify, or delete a new object, update user permissions, or otherwise make changes within ThoughtSpot, the product reflects these changes within 10 minutes.</dd></dlentry>

<dlentry id="deprecations">
<dt>Deprecations</dt>
<dd>ThoughtSpot is dropping support for several features in the May Cloud release. These features are <strong><em>not</em></strong> available in the May release. ThoughtSpot is also deprecating several features in the May Cloud release. These features are still available in the May release, but ThoughtSpot will drop support for them in a later release. Refer to <a href="{{ site.baseurl }}/release/deprecation.html">Deprecation Announcements</a> for more information.</dd></dlentry>

</dl>

<h3><a id="may-cloud-data-engineer"></a>For the Data Engineer</h3>

<dl>

<dlentry id="embrace-adw">
<dt>Oracle ADW for Embrace</dt>
<dd>In this release, Oracle Autonomous Data Warehouse (ADW) is GA. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw.html">Oracle ADW</a>. </dd></dlentry>

<dlentry id="embrace-starburst">
<dt>Starburst for Embrace</dt>
<dd>Embrace now supports both Starburst Enterprise, and open source Trino databases. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-starburst.html">Starburst</a>.</dd></dlentry>

<dlentry id="embrace-custom-calendar">
<dt>Custom calendar for Embrace</dt>
<dd>In this release, custom calendar is available for Snowflake connections only. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">Custom calendar</a>. </dd></dlentry>

<dlentry id="embrace-databricks">
<dt>Databricks for Embrace</dt>
<dd>Embrace now supports Databricks. This feature is in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.</dd></dlentry>

<h3><a id="may-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>
<dlentry id="product-usage-worksheet">
<dt>Product Usage Worksheet</dt>
<dd>This release introduces a new default Worksheet for monitoring product usage. The Product Usage Worksheet contains data on the following topics:
<ul><li>Specifies what existing Worksheets, tables, and Views users search on and create objects from, and what those objects are</li>
<li>Lists what actions users complete in the product</li>
<li>Lists the underlying data sources for any object</li>
<li>Lists any object's dependents</li></ul>
You can search on this Worksheet, or create Pinboards based on it, to monitor your users' interaction with the product. To access this Worksheet, search for <strong>Product Usage Worksheet</strong> from the <strong>Data</strong> tab, or add it as a source while searching data.</dd></dlentry>
</dl>

<h3><a id="may-cloud-developer"></a>For the Developer</h3>

<dl>
<dlentry id="custom-actions">
<dt>Custom actions in the context menu</dt>
<dd>ThoughtSpot now allows you to add a custom action in the contextual menu for embedded visualizations in the <b>Answers</b> or <b>Pinboards</b> page.</dd>
<dd>To add a custom action to the contextual menu, you must have the <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html">New Answer experience</a> enabled on your cluster.</dd>
<dd>For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html">Add custom actions</a>.</dd></dlentry>
</dl>

<dl>
<dlentry id="viz-embed-sdk">
<dt>Visual Embed SDK Version 1.2.0</dt>
<dd>The ThoughtSpot 7 Cloud May release introduces the Visual Embed SDK 1.2.0 version with a minor update and backward-compatible improvements.</dd></dlentry>
</dl>
<dlentry id="saml-authentication">
<dt>SAML authentication</dt>
<dd>The Visual Embed SDK packages now include the <code>noRedirect</code> attribute as an optional parameter for the <code>SSO</code> <code>AuthType</code>. If you want to display the SAML authentication workflow in a pop-up window, instead of refreshing the application web page to direct users to the SAML login page, you can set the <code>noRedirect</code> attribute to <code>true</code>.</dd>
<dd>For more information, see the <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=getting-started" target="_blank">ThoughtSpot Developer Documentation</a>.</dd></dlentry>
</dl>

<dl>
<dlentry id="viz-embed-sdk-notification">
<dt>Visual Embed SDK notification when third-party cookies are disabled</dt>
<dd>When a user accesses the embedded application from a web browser that has third-party cookies disabled, the Visual Embed SDK emits the <code>NoCookieAccess</code> event to notify the developer. Cookies are disabled by default in Safari. Users can enable third-party cookies in Safari’s Preferences setting page or use another web browser. To know how to enable this setting by default on Safari for a ThoughtSpot embedded instance, contact ThoughtSpot Support.</dd></dlentry>
</dl>

<dl>
<dlentry id="pinboard-embed-enhancements">
<dt>Pinboard embed enhancements</dt>
<dd>The More menu <img src="/images/icon-ellipses.png" alt="more options menu icon" class="inline" /> in the embedded Pinboard page now shows the following actions for pinboard and visualizations.</dd>
<dd>Pinboard<ul><li>Save</li><li>Make a copy</li><li>Add filters</li><li>Configure filters</li><li>Present</li><li>Download as PDF</li><li>Pinboard info</li><li>Manage schedules</li></ul>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note:</b> Users with edit permissions can view and access the <b>Save</b>, <b>Add filters</b>, <b>Configure filters</b>, and <b>Manage schedules</b> actions.</div>
Visualizations on a pinboard
<ul><li>Pin</li><li>Download</li><li>Edit</li><li>Present</li><li>Download as CSV</li><li>Download as XLSX</li><li>Download as PDF</li></ul>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note:</b> Users with edit permissions can view and access the <b>Edit</b> action.
The <b>Download as CSV</b>, <b>Download as XSLX</b>, and <b>Download as PDF</b> actions are available for table visualizations.
The <b>Download</b> action is available for chart visualizations.</div>
</dd></dlentry>
</dl>

<dl>
<dlentry id="performance-optimization">
<dt>Performance optimization</dt>
<dd>This release introduces the following performance improvements for ThoughtSpot embedded applications:
<ul><li>Faster loading of embedded objects and application pages.</li><li>Faster loading of preview results in the Playground.</li></ul></dd></dlentry>
</dl>

<dl>
<dlentry id="rest-apis">
<dt>REST APIs</dt>
<dd>The ThoughtSpot 7 Cloud May release introduces the following new REST APIs:<br><br>
<ul><li><code>POST /tspublic/v1/user/updatepreference</code><br>You can use this API to programmatically update a ThoughtSpot user’s profile settings such as the email address, locale preference, notification settings, and the preference for revisiting the onboarding experience.<br><br>For more information, see <a href="{{ site.baseurl }}/reference/api/user-api.html">User API</a>.</li><br>
<li><code>GET /tspublic/v1/metadata/listas</code><br>You can use this API to get a list of object headers for a ThoughtSpot user or user group. For more information, see <a href="{{ site.baseurl }}/reference/api/metadata-api.html">Metadata API</a>.</li></ul></dd></dlentry>
</dl>
