The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<h3>Scriptability</h3>
There are several new features for Scriptability:
<ul>
<li><strong>Edit table-level joins from the source table</strong>: You can now edit joins at the table level using TML. You must edit these joins from the source table, not the destination table. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a>.</li>
<li><strong>Add tables and columns to an Embrace connection</strong>: ThoughtSpot now allows you to edit tables created through <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection. This feature is in <strong>Beta</strong>; to add columns and tables to an Embrace connection through Scriptability, contact your ThoughtSpot administrator. </li>
</ul>

<h3>Improvements to conditional formatting for charts</h3>
<p>This release makes chart conditional formatting more intuitive and easier to use. The new interface is accessible from the <strong>Edit measure > Conditional formatting</strong> section in the <strong>Edit chart configuration</strong> <img src="{{ site.baseurl }}/images/icon-gear-10px.png" alt="chart configuration icon" class="inline"/> panel. Refer to <a href="{{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#conditional-formatting-table">Apply conditional formatting</a>.</p>
<p>This feature is part of the <a href="{{ site.baseurl }}/admin/ts-cloud/answer-v2.html">Answer V2 feature set</a>. Answer V2 is in <strong>Beta</strong>, and is off by default in ThoughtSpot Cloud clusters. If you would like to try out the features in the Answer V2 feature set, contact your ThoughtSpot administrator.</p>

<h3>Deprecation of Internet Explorer</h3>
ThoughtSpot browser support for Internet Explorer is now deprecated. Refer to <a href="{{ site.baseurl }}/end-user/accessing.html">ThoughtSpot browser access</a> for a list of supported browsers.

<h3>Support for SpotIQ Analyze</h3>
<p>In this release, ThoughtSpot Cloud adds support for SpotIQ analyze. Now you can analyze any answer, pinboard vizualization, or data source to generate instant insights, by clicking the SpotIQ analyze button <img src="{{ site.baseurl }}/images/icon-lightbulb.png" alt="SpotIQ analyze icon" class="inline"/>.</p>

<h3>Home page shortcuts</h3>
You can now create and access quick links to your most-used Answers and Pinboards from the ThoughtSpot One home page. Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">Home page shortcuts</a>.

<h3>Search Assist: Analyst-authored queries</h3>
The <a href="{{ site.baseurl }}/admin/ts-cloud/analyst-authored-queries.html">Search Assist: Analyst-authored queries</a> feature is now generally available and on by default.

<h3>Frequent metrics and attributes in the <strong>Details</strong> panel</h3>
The <strong>Details</strong> panel that appears when you click on a Pinboard visualization while searching across your existing Answers and Pinboards now lists frequent metrics and attributes for that Pinboard. You can determine if a Pinboard search result is useful for you based on the metrics and attributes used most often in that Pinboard.

<h3>Search on Answers Pinboard</h3>
There are several changes to the behavior of the <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">Stats and Trends for Search on Answers Pinboard</a>:
<ul>
<li>The Pinboard and its underlying Worksheet, <strong>Discover Monitoring Data</strong>, are now accessible only to admins by default. Admins can share the Pinboard and Worksheet with anyone else who might need this information.</li>
<li>The Pinboard is populated with your users' Search on Answers data by default. You do not need to contact ThoughtSpot Support to see your users' Search on Answers data in the Pinboard.</li></ul>

<h3>Consumption-based pricing</h3>
ThoughtSpot now offers consumption, or usage, based pricing. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html">Consumption-based pricing</a> and the <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing-faq.html">Consumption pricing FAQ</a>. To compare consumption- and capacity-based pricing, refer to <a href="https://www.thoughtspot.com/pricing" target="_blank">ThoughtSpot pricing</a>.
