The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#mar-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#mar-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#mar-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
</ul>

<h3><a id="mar-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="scriptability">
<dt>Scriptability</dt>
<dd><ul><li><p><strong>Add tables and columns to an Embrace connection:</strong> ThoughtSpot now allows you to edit tables created through <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection.</p> <p>This feature is in <strong>Beta</strong>; to add columns and tables to an Embrace connection through Scriptability, contact your ThoughtSpot administrator.</p></li>
<li><strong>Improvements to generic join functionality:</strong> The expanded functionality for generic joins in TML files allows the following elements:
<ul><li>Constants: int, double, bool, date, and string</li>
<li>Comparison operators: <code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, and <code>&gt;=</code></li>
<li>Columns</li>
<li>Boolean operators: <code>AND</code>, <code>OR</code>, and <code>NOT</code></li></ul>
</li>
</ul></dd></dlentry>

<dlentry id="answer-v2">
<dt>Answer V2 functionality in Pinboards</dt>
<dd><p>The features in the <a href="{{ site.baseurl }}/admin/ts-cloud/answer-v2.html">Answer V2 feature set</a> are now available in Answers and headlines pinned to Pinboards.</p>
<p>The Answer V2 feature set is in Beta and off by default. To enable Answer V2, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd></dlentry>

</dl>

<h3><a id="mar-cloud-business-user"></a>For the Business User</h3>

<dl>
<dlentry id="details-panel">
<dt>Frequent metrics and attributes in the <strong>Details</strong> panel</dt>
<dd><p>The <strong>Details</strong> panel that appears when you click on a Pinboard visualization while searching across your existing Answers and Pinboards now lists frequent metrics and attributes for that Pinboard. You can determine if a Pinboard search result is useful for you based on the metrics and attributes used most often in that Pinboard.</p>
<p>Searching across existing Answers and Pinboards is part of ThoughtSpot One. ThoughtSpot One may be off in your environment. To enable ThoughtSpot One, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support.</a></p></dd>
</dlentry>

</dl>

<h3><a id="mar-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="search-spotiq">
<dt>Manage advanced search and SpotIQ settings</dt>
<dd>You can now manage advanced search and SpotIQ settings from the Admin Console. You can configure column indexing and enable or disable SpotIQ Analyze and column summaries. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html">Manage search and SpotIQ settings</a>.</dd></dlentry>

<dlentry id="email-onboarding">
<dt>Manage email and onboarding settings</dt>
<dd>You can manage certain advanced settings for your organization from the Admin Console. You can customize welcome emails, scheduled emails, and the workflow that allows users to sign up for ThoughtSpot from the login page. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/onboarding-email-settings.html">Manage email and onboarding settings</a>.</dd></dlentry>

<dlentry id="performance-tracking">
<dt>Performance Tracking Pinboard</dt>
<dd>The <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Pinboard</a> is now accessible from the Admin Console. To view this Pinboard, navigate to the Admin Console by selecting <strong>Admin</strong> from the top navigation bar. Select <strong>App performance</strong> from the side navigation bar in the Admin Console.</dd></dlentry>

</dl>
