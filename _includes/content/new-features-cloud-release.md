The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#april-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="april-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="scriptability">
<dt>Scriptability</dt>
<dd>There are several enhancements to the <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a> feature:
<ul><li><strong>Support for selective and linked filters:</strong> You can now import, export, and update Pinboards with <a href="{{ site.baseurl }}/complex-search/linked-filters.html">linked</a> or <a href="{{ site.baseurl }}/complex-search/selective-filters.html">selective</a> filters.</li>
<li><strong>Add tables and columns to an Embrace connection (GA):</strong> ThoughtSpot now allows you to use TML to edit tables created through <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. This feature is now GA and on by default. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection.</li>
</ul>
</dd></dlentry>

<dlentry id="query-dashboard">
<dt>Enhancements to the Search on Answers Pinboard</dt>
<dd>The <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">Search on Answers Pinboard</a> contains several new or updated visualizations, including <strong>Top search queries on existing Answers</strong>, <strong>Position at which users are clicking</strong>, and <strong>What results users are finding useful with autocomplete suggestions</strong>. These new visualizations provide more information about click position, what information users look for, and what information they cannot find. You can also view the <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html#best-practices">best practices</a> for this Pinboard.
</dd></dlentry>

</dl>

<h3><a id="april-cloud-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="new-answer-experience">
<dt>New Answer experience</dt>
<dd><p>This release redesigns the experience of creating and working with Answers. The new Answer experience contains multiple new features and feature enhancements. It is on by default; you can toggle it on or off from the <strong>Experience manager</strong> in your profile.</p>
<p>The new Answer experience contains the following features and enhancements: {% include content/new-answer-experience-features.md %}</p>
<p>{% include content/new-answer-experience-deprecations.md %}</p>
<p> Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience">New Answer experience</a> for more information on the behavior of these features.</p>

</dd></dlentry>

<dlentry id="sticky-search-toggle">
<dt>Sticky Search Answers/ Search Data toggle</dt>
<dd>This release makes the Search Answers/ Search Data toggle <img src="{{ site.baseurl }}/images/search-toggle-answers.png" alt="search toggle" class="inline"/> sticky. ThoughtSpot now remembers your choice across sessions when you switch between <a href="{{ site.baseurl }}/end-user/search/search-answers.html">Search Answers</a> and <a href="{{ site.baseurl }}/end-user/search/search-data.html">Search Data</a>.</dd></dlentry>

<dlentry id="latency">
<dt>Improvements in indexing latency for Search Answers</dt>
<dd>This release improves indexing latency to less than 10 minutes, from 6 hours previously. Now, when you create, modify, or delete a new object, update user permissions, or otherwise make changes within ThoughtSpot, the product reflects these changes within 10 minutes. If you create a new Answer, users can search for and find it 10 minutes after you create it.</dd></dlentry>

<dlentry id="unicode">
<dt>Unicode support</dt>
<dd>We added unicode character matching in Search Answers, extending support to all languages and character sets. You can now search all artifacts that use unicode characters in titles, descriptions, metadata, and keywords, and see the correct results.

<img src="/images/search-answers-unicode.png" alt="Search Answers with full unicode support" title="Unicode support">
</dd>
</dlentry>

</dl>

<h3><a id="april-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="private-link">
<dt>AWS PrivateLink between ThoughtSpot Cloud and your Snowflake or Redshift data warehouse</dt>
<dd>To ensure a secure two-way data exchange between your cloud data warehouse and the ThoughtSpot Cloud tenant, you can use an AWS PrivateLink. This option is currently available for your Snowflake or Redshift data warehouse connections. Refer to the <a href="{{ site.baseurl }}/admin/ts-cloud/private-link-redshift.html">Redshift</a> and <a href="{{ site.baseurl }}/admin/ts-cloud/private-link-snowflake.html">Snowflake</a> articles about enabling an AWS PrivateLink.</dd></dlentry>

</dl>

<h3><a id="april-cloud-developer"></a>For the Developer</h3>

<dl>

<dlentry id="developer-portal">
<dt>ThoughtSpot Developer portal</dt>
<dd>ThoughtSpot users with admin or developer privileges can now access the ThoughtSpot Developer portal by clicking the <strong>Develop</strong> tab in the ThoughtSpot application.
The Developer portal, referred to as <strong>SpotDev</strong> in the earlier release, includes the following enhancements:
<ul>
<li>Playground enhancements<br>The <strong>Playground</strong> page now includes several UI enhancements to improve the interactive coding experience for developers.<ul>
<li>The <strong>Handle custom actions</strong> checkbox on the <strong>Playground</strong> &gt; <strong>Search</strong> page allows you to view the code for the custom action event.</li>
<li>The <strong>Navigate to URL</strong> checkbox on the <strong>Playground</strong> &gt; <strong>Full app</strong> page allows you to set a URL path to navigate to when the embedded  application loads.</li>
</ul>
</li>
<li>Custom action Configuration<br>You can now configure custom actions for embedded pinboards and visualization pages. You can also set a custom action as a primary menu command, or as a menu item in the <strong>More</strong> menu <img src="{{ site.baseurl }}/images/icon-more-10px.png" alt="the more options menu">.</li>
<li>Security settings<br>The <strong>Security Settings</strong> page in the developer portal includes the following new features:<ul>
<li>Users with developer and admin privileges can now add external application domains to the Content Security Policy (CSP) and Cross-Origin Resource Sharing (CORS) whitelist.</li>
<li>Users with admin privileges can add the SAML redirect domains to the allowed list of domains, and thus provide a seamless login experience for federated users who request access to the embedded ThoughtSpot content.</li>
<li>Users with admin privileges can enable the trusted authentication method to authenticate ThoughtSpot users who request access to the embedded content.</li>
</ul>
</li>
</ul></dd></dlentry>

<dlentry id="visual-embed-sdk">
<dt>ThoughtSpot Visual Embed SDK enhancements</dt>
<dd>ThoughtSpot Visual Embed SDK is now available to all external users who want to embed ThoughtSpot content in their application, product, or web page.<br>You can now download the Visual Embed SDK package from the <a href="https://www.npmjs.com/package/@thoughtspot/visual-embed-sdk" target="_blank">NPM site</a> and get started with embedding ThoughtSpot.<br>The new Visual Embed SDK package includes several new enhancements to support user authentication, full application rendition, custom action configuration for embedded pinboards and visualizations, and enumerators for handling the events generated by the embed configuration.
For more information, see the <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=js-reference" arget="_blank">ThoughtSpot Developer Documentation</a>.</dd></dlentry>

<dlentry id="session-api-enhancement">
<dt>Session API enhancement</dt>
<dd>The session REST API service now includes the <code>/tspublic/v1/session/auth/token</code> API to enable a client application to programmatically obtain an authentication token for a ThoughtSpot  user.<br>To access this API, visit the ThoughtSpot Swagger portal.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/session-api.html">session APIs</a>.</dd></dlentry>

</dl>
