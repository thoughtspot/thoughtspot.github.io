The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#november-cloud-2021-first">For the First user</a></li>
<li><a href="{{ site.baseurl }}#november-cloud-2021-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#november-cloud-2021-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#november-cloud-2021-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#november-cloud-2021-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#november-cloud-2021-developer">For the Developer</a></li>
</ul>

<h3><a id="november-cloud-2021-first"></a>For the First User</h3>

<dl>
<dlentry id="getting-started">
<dt>Getting started with ThoughtSpot Cloud</dt>
<dd>The first user on the account has to complete a series of steps before other people can start using ThoughtSpot with your organization’s data. For these instructions, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-getting-started.html">Getting Started with ThoughtSpot Cloud</a>.
</dd>
</dlentry>
</dl>

<h3><a id="november-cloud-2021-analyst"></a>For the Analyst</h3>

<dl>

<dlentry>
<dt>SQL-based views</dt>
<dd><p>This release introduces <span class="label label-beta">Beta</span> support for SQL-based views. Users can create views based on SQL queries, and use those views as data sources. This type of view has the same functionality as a view based on searching your data.</p>
<p>This feature is in <span class="label label-beta">Beta</span> and off by default. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

<dlentry id="data-tab">
<dt>Data tab redesign</dt>
<dd><p>This release redesigns the <strong>Data</strong> section of the product. To access this part of the product, select <strong>Data</strong> from the top navigation bar. The redesign introduces several new features, such as SQL-based views and SpotApps, and makes the UI more intuitive.</p>
<p>This feature is in <span class="label label-beta">Beta</span> and off by default. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

</dl>

<h3><a id="november-cloud-2021-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="session-validity">
<dt>User session timeout and validity</dt>
<dd>ThoughtSpot increased the duration of <strong>idle session timeouts</strong> and the <strong>maximum session validity</strong>, when you click <strong>Remember me</strong> on the login screen. There is no change to the duration when you do not click <strong>Remember me</strong>.
<ul>
<li>Idle session timeout: If a user is not active for 14 days, ThoughtSpot logs the user out, and the user must enter their login credentials again.</li>
<li>Maximum session validity: ThoughtSpot forces the user's session to expire after 14 days, even if they are active throughout that period.</li> </ul>
<p>This change <strong><em>only</em></strong> affects new clusters created on the November Cloud release and later. Clusters created on the October Cloud release and earlier have the old experience, even after they update to the November Cloud release. In the old experience, the <strong>idle session timeout</strong> is 60 minutes with <strong>Remember me</strong>, and 30 minutes without it. The old <strong>maximum session validity</strong> is 7 days with <strong>Remember me</strong>, and not available without it.</p>
<p>To increase idle session timeouts or maximum session validity for clusters created on the October Cloud release and earlier, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd></dlentry>

</dl>

<h3><a id="november-cloud-2021-data-engineer"></a>For the Data Engineer</h3>

<h3><a id="november-cloud-2021-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="saml">
<dt>SAML assertion validity</dt>
<dd>ThoughtSpot now supports 2 methods to increase the duration of validity for your <a href="{{ site.baseurl }}/admin/ts-cloud/authentication-integration.html#saml-assertion">SAML assertion</a>: the <code>SessionNotOnOrAfter</code> attribute and the <code>maxAuthenticationAge</code> parameter. <code>SessionNotOnOrAfter</code> overrules <code>maxAuthenticationAge</code> if both are present. If your IDP does not support use of <code>SessionNotOnOrAfter</code>, remove that attribute from your IDP assertion and <a href="{{ site.baseurl }}/admin/misc/contact.html">ask ThoughtSpot Support</a> to enable <code>maxAuthenticationAge</code>.</dd>
</dlentry>

</dl>

<h3><a id="november-cloud-2021-developer"></a>For the Developer</h3>

<dl>
<dt>ThoughtSpot Everywhere</dt>
<dd>
For information about the new features and enhancements introduced in this release, refer to <a href="https://developers.thoughtspot.com/docs/?pageid=whats-new" target="_blank">ThoughtSpot Developer Documentation</a>. </dd>
</dl>
