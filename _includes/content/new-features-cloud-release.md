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

<!-- removing these features for now per alok. may add back in

<dlentry id="spotapps">
<dt>ServiceNow SpotApp <span class="label label-beta">Beta</span></dt>
<dd><p>SpotApps are ThoughtSpot's new out-of-the-box solution templates built for specific use cases and data sources. They are built on Blocks, which are pre-built pieces of code that are easy to download and implement directly from the product. This release introduces the ServiceNow SpotApp and Analytics Blocks. Analytics Blocks include pre-built Worksheet, Answer, and Liveboard Blocks.</p>
<p>The ServiceNow SpotApp mimics the ServiceNow data model. After you connect to your ServiceNow data in your cloud data warehouse, ThoughtSpot maps that data to SpotApp columns, and creates pre-built but still customizable worksheets, answers, and Liveboards, based on your ServiceNow data.</p>
<p>Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/app-templates.html">SpotApps</a>.</p>
<p>This feature is in beta and off by default. It is part of the <a href="#data-tab">Data tab redesign</a> beta. To enable SpotApps and the Data tab redesign, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

<dlentry>
<dt>SQL-based views <span class="label label-beta">Beta</span></dt>
<dd><p>This release introduces beta support for SQL-based views. Users can create views based on SQL queries, and use those views as data sources. This type of view has the same functionality as a view based on searching your data.</p>
<p>This feature is in beta and off by default. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

<dlentry id="data-tab">
<dt>Data tab redesign <span class="label label-beta">Beta</span></dt>
<dd><p>This release redesigns the <strong>Data</strong> section of the product. To access this part of the product, select <strong>Data</strong> from the top navigation bar. The redesign introduces several new features, such as SQL-based views and SpotApps, and makes the UI more intuitive.</p>
<p>This feature is in beta and off by default. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

-->

<dlentry id="date-interval-functions">
<dt>Date interval functions</dt>
<dd><p>In this release, we introduced new functions for computing time intervals between two dates. In addition to the existing <a href="{{ site.baseurl }}/reference/formula-reference.html#diff_days">diff_days</a> and <a href="{{ site.baseurl }}/reference/formula-reference.html#diff_time">diff_time</a> functions, you can now use <code>diff_years</code>, <code>diff_quarters</code>, <code>diff_months</code>, <code>diff_weeks</code>, <code>diff_hours</code>, and <code>diff_minutes</code> to calculate time intervals at these additional granularities.</p>
<p>If your organization uses a <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">custom calendar</a>, which can specify a new starting date of a year, starting dates of quarters, a starting day of the month, and a starting day of the week, use the optional custom calendar argument with these functions to calculate the difference between the two dates.</p>

</dd>
</dlentry>

<dlentry id="auto-answer">
<dt>Automated answer creation in Setup</dt>
<dd><p>We simplified the steps to create Search visualizations during Setup. Now, you can select measures, attributes and date columns and immediately view suggested answers and visualizations. For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/automated-answer-creation.html">Create answers in Setup</a>.</p></dd>
</dlentry>

</dl>

<h3><a id="november-cloud-2021-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="liveboard-announcement">
<dt></dt>
<dd><p>Starting in December 2021, ThoughtSpot refers to Liveboards instead of pinboards. With Liveboards, you can have an interactive experience and get granular insights through live queries on cloud data, tailored for you. You can use Livebaords to iterate, explore, and drill into more insights, and tell a continuously evolving data story.<br/>
ThoughtSpot plans to support for several releases, and then retire, internal processes and external methods that use the older naming convention.</p></dd>
</dlentry>

<dlentry id="session-validity">
<dt>User session timeout and validity</dt>
<dd>ThoughtSpot increased the duration of <strong>idle session timeouts</strong> and the <strong>maximum session validity</strong>, when you click <strong>Remember me</strong> on the login screen. There is no change to the duration when you do not click <strong>Remember me</strong>.
<ul>
<li>Idle session timeout: If a user is not active for 14 days, ThoughtSpot logs the user out, and the user must enter their login credentials again.</li>
<li>Maximum session validity: ThoughtSpot forces the user's session to expire after 14 days, even if they are active throughout that period.</li> </ul>
<p>This change <strong><em>only</em></strong> affects new clusters created on the November Cloud release and later. Clusters created on the October Cloud release and earlier have the old experience, even after they update to the November Cloud release. In the old experience, the <strong>idle session timeout</strong> is 60 minutes with <strong>Remember me</strong>, and 30 minutes without it. The old <strong>maximum session validity</strong> is 7 days with <strong>Remember me</strong>, and not available without it.</p>
<p>To increase idle session timeouts or maximum session validity for clusters created on the October Cloud release and earlier, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd></dlentry>

<dlentry id="search-suggestions">
<dt>Search suggestions</dt>
<dd><p>Search suggestions are now GA. When you <a href="{{ site.baseurl }}/end-user/search/search-answers.html">search across existing answers and Liveboards</a>, ThoughtSpot now offers search suggestions in the search bar, based on your past searches and popular searches in your environment, in addition to object suggestions. For example, if you type <code>Sal</code> in the search bar, it might now result in search suggestions like <strong>Sales</strong> and <strong>Sales this year</strong>, in addition to object suggestions like an existing Liveboard called <strong>Sales in the east last year</strong>.</p>
<p>ThoughtSpot provides search suggestions before you begin typing, but not object suggestions.</p>
</dd>
</dlentry>

<dlentry id="search-data-toggle">
<dt>Search data</dt>
<dd><p>To make it easier for users to find new insights, we moved the <strong>Search data functionality</strong> from the search bar toggle on the home page to the <strong>Search data</strong> button in the main navigation bar.</p>
<p>To learn more about the impact this change may have on an embedded environment, refer to <a href="https://developers.thoughtspot.com/docs/?pageid=whats-new" target="_blank">What's new</a> in the Developer documentation.
</p></dd>
</dlentry>

</dl>

<h3><a id="november-cloud-2021-data-engineer"></a>For the Data Engineer</h3>
<dl>
<dlentry id="connections-snowflake-azure-ad-oauth">
<dt>Azure AD external OAuth for Snowflake</dt>
<dd>Snowflake now supports external OAuth through Microsoft Azure AD. See <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-azure-ad-oauth.html">Configure Azure AD external OAuth for a Snowflake connection</a>.</dd>
</dlentry>

<!-- removing for now per alok
<dlentry id="connections-flow-data-portal">
<dt>New connection creation flow with data tab redesign</dt>
<dd>If you have the new redesigned data tab enabled, you'll see the new Data Portal page. To start creating a connection, you click <strong>Connections</strong> and then click the connection type you want to create. Also with the new data tab enabled, you have the option to create a connection without selecting tables or columns. On the Data Portal page you can create a SQL-based view from a connection.</dd>
</dlentry>

-->

</dl>

<h3><a id="november-cloud-2021-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="saml">
<dt>SAML assertion validity</dt>
<dd>ThoughtSpot now supports 2 methods to increase the duration of validity for your <a href="{{ site.baseurl }}/admin/ts-cloud/authentication-integration.html#saml-assertion">SAML assertion</a>: the <code>SessionNotOnOrAfter</code> attribute and the <code>maxAuthenticationAge</code> parameter. You can ask ThoughtSpot Support to disable either one of these checks. If you use both, and either check fails, ThoughtSpot does not authenticate the user. Some IDPs do not support use of <code>SessionNotOnOrAfter</code>. If your IDP does not support use of <code>SessionNotOnOrAfter</code>, remove that attribute from your IDP assertion and <a href="{{ site.baseurl }}/admin/misc/contact.html">ask ThoughtSpot Support</a> to enable <code>maxAuthenticationAge</code>.</dd>
</dlentry>

<dlentry id="multiple-idp">
<dt>Multiple Identity Providers for SAML login</dt>
<dd>You can now configure SAML SSO login for more than one Identity Provider (IDP). You may have multiple groups of users who need to log into ThoughtSpot but are managed by separate IDPs. To configure this, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</dd>
</dlentry>

<dlentry id="vpn">
<dt>OpenVPN support for Google BigQuery and Azure Synapse connections</dt>
<dd>ThoughtSpot now supports secure access from ThoughtSpot Cloud to your data in Google BigQuery and Azure Synapse, through your OpenVPN server. ThoughtSpot supports the following OpenVPN server implementations:
<ul><li><a href="https://openvpn.net/community-downloads/" target="_blank">OpenVPN Community Edition</a></li>
<li><a href="https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-openvpn-clients" target="_blank">Azure VPN</a></li>
<li><a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html" target="_blank">AWS Client VPN</a></li></ul>
To learn how to configure a VPN connection for your Google BigQuery or Azure Synapse connection, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/openvpn-gbq.html">OpenVPN for Google BigQuery</a> and <a href="{{ site.baseurl }}/admin/ts-cloud/openvpn-synapse.html">OpenVPN for Azure Synapse</a>.</dd></dlentry>

</dl>

<h3><a id="november-cloud-2021-developer"></a>For the Developer</h3>

<dl>
<dt>ThoughtSpot Everywhere</dt>
<dd>
For information about the new features and enhancements introduced in this release, refer to <a href="https://developers.thoughtspot.com/docs/?pageid=whats-new" target="_blank">ThoughtSpot Developer Documentation</a>. </dd>
</dl>
