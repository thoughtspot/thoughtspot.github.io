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

</dl>

<h3><a id="may-cloud-data-engineer"></a>For the Data Engineer</h3>

<dl>

<dlentry id="embrace-adw">
<dt>Oracle ADW for Embrace</dt>
<dd>In this release, Oracle Autonomous Data Warehouse (ADW) is GA. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw.html">Oracle ADW</a>. </dd></dlentry>

<dlentry id="embrace-custom-calendar">
<dt>Custom calendar for Embrace</dt>
<dd>In this release, custom calendar is available for Snowflake connections in Embrace. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">Custom calendar</a>. </dd></dlentry>

<dlentry id="embrace-databrix">
<dt>Databrix for Embrace</dt>
<dd>Embrace now supports Databrix. This feature is in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.</dd></dlentry>

<dlentry id="embrace-trino">
<dt>Starburst Trino for Embrace</dt>
<dd>Embrace now supports Starburst Trino. This feature is in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.</dd></dlentry>

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
<dlentry id="api">
<dt>Rest APIs</dt>
<dd>The ThoughtSpot 7 Cloud May release introduces the following new REST APIs:
<ul><li><code>POST /tspublic/v1/user/updatepreference</code><br>You can use this API to programmatically update a ThoughtSpot user’s profile settings such as the email address, locale preference, notification settings, and the preference for revisiting the onboarding experience. For more information, see <a href="{{ site.baseurl }}/reference/api/user-api.html">User API</a>.</li>
<li><code>GET /tspublic/v1/metadata/listas</code><br> You can use this API to get a list of object headers for a ThoughtSpot user or user group. For more information, see <a href="{{ site.baseurl }}/reference/api/metadata-api.html">Metadata API</a>.</li></ul></dd></dlentry>
</dl>
