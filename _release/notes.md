---
title: ["ThoughtSpot Cloud Release Notes"]
toc: false
last_updated: 10/5/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot 7 Cloud October 2021 version (ts7.oct.cl) is now available.

These release notes include information about new and enhanced features.

To see our feature deprecation plans, please see [Deprecation Announcements]({{ site.baseurl }}/release/deprecation.html).

{: id="new"}
## New Features and Functionality

{% include content/new-features-cloud-release.md %}

<h2><a id="2021-september"></a>ThoughtSpot 7 Cloud September Release (ts7.sep.cl)</h2>

<ul>
<li><a href="{{ site.baseurl }}#september-cloud-2021-first">For the First user</a></li>
<li><a href="{{ site.baseurl }}#september-cloud-2021-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#september-cloud-2021-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#september-cloud-2021-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#september-cloud-2021-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#september-cloud-2021-developer">For the Developer</a></li>
</ul>

<h3><a id="september-cloud-2021-first"></a>For the First User</h3>

<dl>
<dlentry id="getting-started">
<dt>Getting started with ThoughtSpot Cloud</dt>
<dd>The first user on the account has to complete a series of steps before other people can start using ThoughtSpot with your organization’s data. For these instructions, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-getting-started.html">Getting Started with ThoughtSpot Cloud</a>.
</dd>
</dlentry>
</dl>

<h3><a id="september-cloud-2021-analyst"></a>For the Analyst</h3>

<dl>
<dlentry id="auto-email">
<dt>Automatic following of How Users are Searching Answers pinboard</dt>
<dd>The <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">How Users are Searching Answers pinboard</a> allows administrators, and users they share the pinboard with, to understand how users are searching for existing answers and pinboards. Starting in the September release, ThoughtSpot automatically emails this pinboard to administrators once a week. You can add or remove users from this email list by <a href="{{ site.baseurl }}/admin/manage-jobs/schedule-a-pinboard-job.html">editing the follow schedule</a> for this pinboard.</dd>
</dlentry>
</dl>

<h3><a id="september-cloud-2021-business-user"></a>For the Business User</h3>

<dl>
<dlentry id="geomaps-denmark">
<dt>Geo map support</dt>
<dd>We added support for regions, municipalities, and postal codes, for Denmark. See <a href="{{ site.baseurl }}/reference/geomap-reference.html">Geo Map Reference</a>.</dd>
</dlentry>

<dlentry id="learning-cards">
<dt>Learning cards</dt>
<dd><p>This release introduces a new in-product learning initiative. Sets of learning cards appear when you first view an answer or search result after updating to the September release. These cards teach new users about ThoughtSpot, and how to gain insights from searches and answers. If you exit the learning cards by clicking the <strong>Hide</strong> or <strong>x</strong> button, you can always get them back by clicking on “learning mode on” from the profile menu.</p>
<p>This feature is only available if you have the <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html">new answer experience</a> <span class="badge badge-update">Beta</span> (off by default) on in your environment. You can turn the new answer experience on from the <strong>Experience manager</strong> in your profile.</p></dd>
</dlentry>

<dlentry id="watchlist-drag-and-drop">
<dt>Drag and drop metrics on your watchlist</dt>
<dd>You can now move metrics on your <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">home page watchlist</a> using drag and drop. Click on a metric, and move it to a different position in your watchlist.</dd>
</dlentry>

<dlentry id="search-suggestions">
<dt>Search suggestions</dt>
<dd><p>When you <a href="{{ site.baseurl }}/end-user/search/search-answers.html">search across existing answers and pinboards</a>, ThoughtSpot now offers search suggestions in the search bar, based on your past searches and popular searches in your environment, in addition to object suggestions. For example, if you type <code>Sal</code> into the search bar, it might now result in search suggestions like <strong>Sales</strong> and <strong>Sales this year</strong>, in addition to object suggestions like an existing pinboard called <strong>Sales in the east last year</strong>.</p>
<p>ThoughtSpot provides these search object suggestions before you begin typing, based on your past searches and popular searches in your environment.</p>
<p>This feature is in <span class="label label-beta">Beta</span>. If you do not see it yet, ThoughtSpot will enable it for you soon.</p></dd>
</dlentry>

</dl>

<h3><a id="september-cloud-2021-data-engineer"></a>For the Data Engineer</h3>
<dlentry id="connections">
<dt>Embrace is now called Connections</dt>
<dd>ThoughtSpot has renamed Embrace to Connections. Functionality remains the same. To access your connections, navigate to the Data tab and click Connections. For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Connections</a>.</dd>
</dlentry>

<h3><a id="september-cloud-2021-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="custom-domains">
<dt>Custom domain configuration</dt>
<dd><p>ThoughtSpot now supports the configuration of a custom domain or multiple domains for your ThoughtSpot Cloud URL. By default, the base URL is <em>&lt;your_company_name&gt;.thoughtspot.cloud</em>. This feature allows you to request a different URL or multiple URLs, such as <em>analytics.&lt;your_company_name&gt;.com</em>. This is useful when embedding ThoughtSpot pages with TS Everywhere, so that your embedding application and the ThoughtSpot pages have the same base URL. If you are embedding ThoughtSpot in multiple environments, such as a staging environment and a production environment, these multiple domains can point to the same ThoughtSpot instance.</p>
<p>Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/custom-domains.html">Custom domain configuration</a> for more information. To set up a custom domain in your ThoughtSpot Cloud URL, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support.</a></p></dd>
</dlentry>

</dl>

<h3><a id="september-cloud-2021-developer"></a>For the Developer</h3>

<dl>
<dlentry id="thoughtspot-everywhere">
<dt>ThoughtSpot Everywhere</dt>
<dd><p>
This release introduces the ThoughtSpot Everywhere Edition license, Visual Embed SDK version 1.4.0, and new REST APIs for programmatic management of data connections, metadata objects, user accounts, user groups and privileges, and object sharing permissions.</p>

<p>For more information, refer to <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=whats-new" target="_blank">ThoughtSpot Developer Documentation</a>.</p></dd>
</dlentry>
</dl>

<h2><a id="2021-august"></a>ThoughtSpot 7 Cloud August Release (ts7.aug.cl)</h2>

<ul>
<li><a href="{{ site.baseurl }}#august-cloud-first">For the First user</a></li>
<li><a href="{{ site.baseurl }}#august-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#august-cloud-business-user">For the Business User</a></li>
<!-- <li><a href="{{ site.baseurl }}#august-cloud-data-engineer">For the Data Engineer</a></li> -->
<li><a href="{{ site.baseurl }}#august-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#august-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="august-cloud-first"></a>For the First user</h3>

<dl>

<dlentry id="getting-started">
<dt>Getting started with ThoughtSpot Cloud</dt>
<dd>The first user on the account has to complete a series of steps before other people can start using ThoughtSpot with your organization’s data. For these instructions, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-getting-started.html">Getting Started with ThoughtSpot Cloud</a>.
</dd>
</dlentry>
</dl>

<h3><a id="august-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="scriptability">
<dt>Scriptability</dt>
<dd><ul><li><strong>Improved import workflow:</strong> The new import workflow for <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a> identifies errors, suggests solutions, and allows you to resolve these errors as part of the import workflow. It also has a cleaner, more intuitive UI, with separate sections for different object types.</li>
<li><strong>TML for tables with row-level security:</strong> ThoughtSpot now supports the migration and editing of tables with <a href="{{ site.baseurl }}/admin/data-security/row-level-security.html">row level security (RLS)</a> using <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">TML</a>.</li>
</ul></dd>
</dlentry>

</dl>

<h3><a id="august-cloud-business-user"></a>For the Business User</h3>

<dl>
<dlentry id="watchlist-metrics">
<dt>Watchlist metrics</dt>
<dd>There are several new features for the metrics watchlist on your ThoughtSpot home page:
<ul><li>You can now open metrics in your watchlist in a new tab by right-clicking on the metric on the home page.</li>
<li>There is now no limit to the number of metrics you can add to your watchlist.</li></ul>
Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">ThoughtSpot One home page</a> for more information about watchlist metrics.</dd>
</dlentry>

<dlentry id="scatter-bubble-charts">
<dt>Minimum and maximum on x-axis for scatter and bubble charts</dt>
<dd>You can now specify a minimum and maximum value for measures on the x-axis of <a href="{{ site.baseurl }}/end-user/search/about-scatter-charts.html">scatter</a> and <a href="{{ site.baseurl }}/end-user/search/about-bubble-charts.html">bubble</a> charts. For more information on how to add a minimum and maximum value to a chart axis, refer to <a href="{{ site.baseurl }}/end-user/search/chart-axes-options.html#edit">Change axis options</a>.</dd>
</dlentry>

<dlentry id="deprecations">
<dt>Deprecations</dt>
<dd><p>ThoughtSpot is dropping support for the following feature in the August Cloud release. This feature is <strong><em>not</em></strong> available in the August release:</p>
<ul><li>Ask an Expert</li></ul>
<p>Refer to <a href="{{ site.baseurl }}/release/deprecation.html#de-support-august-cloud">Deprecation Announcements</a> for more information.</p></dd></dlentry>

</dl>

<!-- <h3><a id="august-cloud-data-engineer"></a>For the Data Engineer</h3>

<dl>
<dlentry id="custom-calendar">
<dt>Custom calendar enhancements</dt>
<dd>There are several enhancements for custom calendar in this release:
<ul><li>Custom calendar offers <span class="badge badge-update">Beta</span> support for Redshift, Teradata, Starburst, Synapse, and SAP Hana connections. These are off by default. To enable them, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot support</a>.</li><li>Streamlined custom calendar window with the ability to preview calendar data.</li>
<li>Simplified workflow.</li>
<li>Preview calendar data from custom calendar list</li></ul>
For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">Custom calendar overview</a>.</dd>
</dlentry>
</dl> -->

<h3><a id="august-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>
<dlentry id="credit-usage-pinboard">
<dt>Credit Usage pinboard</dt>
<dd>The Credit Usage pinboard, a pinboard for monitoring your credit consumption under the consumption-based pricing model, is now accessible from the Admin Console, under <strong>Billing > Credit consumption</strong>.</dd>
</dlentry>

<dlentry id="saml-mail-field">
<dt>SAML configuration</dt>
<dd>When configuring SAML authentication for ThoughtSpot, it is now mandatory to map the <code>mail</code> attribute in the IDP metadata file to the email address of the user. If your company cannot meet this requirement, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot support</a>. For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/authentication-integration.html">configure SAML</a>.</dd>
</dlentry>

<dlentry id="column-summaries">
<dt>Enable or disable table column summaries</dt>
<dd>This release allows admins to enable or disable table column summaries for users on the new answer experience, from the <a href="{{ site.baseurl }}/admin/ts-cloud/search-spotiq-settings.html#search">Search & SpotIQ</a> section of the admin console. By default, table column summaries are on. This does not affect the display of summaries for users on the classic answer experience.</dd>
</dlentry>

<dlentry id="admin-console">
<dt>UI improvement for help customization</dt>
<dd>This release improves the UI and user experience of the <a href="{{ site.baseurl }}/admin/ts-cloud/customize-help.html">Help customization</a> section of the admin console.</dd>
</dlentry>

</dl>

<h3><a id="august-cloud-developer"></a>For the Developer</h3>
<dl>
<dd>ThoughtSpot introduces several new features and enhancements to the Developer Portal and Visual Embed SDK. This release also introduces new REST APIs to manage users, user sessions, group privileges, cluster configuration, and metadata objects. </dd>

<dd>For more information, refer to <a href="https://developers.thoughtspot.com/docs/?pageid=whats-new" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dl>


<h2><a id="2021-june"></a>ThoughtSpot 7 Cloud June Release (ts7.jun.cl)</h2>

<ul>
<li><a href="{{ site.baseurl }}#june-cloud-first">For the First user</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="june-cloud-first"></a>For the First user</h3>

<dl>

<dlentry id="getting-started">
<dt>Getting started with ThoughtSpot Cloud</dt>
<dd>The first user on the account has to complete a series of steps before other people can start using ThoughtSpot with your organization’s data. For these instructions, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-getting-started.html">Getting Started with ThoughtSpot Cloud</a>.
</dd>
</dlentry>
</dl>

<h3><a id="june-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="pivot-tables">
<dt>Conditional formatting for pivot tables</dt>
<dd><p>You can now perform conditional formatting on measures in pivot tables. Refer to <a href="{{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#table">Apply conditional formatting</a> and <a href="{{ site.baseurl }}/complex-search/about-pivoting-a-table.html">Pivot tables</a>.</p>
<p>To perform conditional formatting on measures in pivot tables, you must have the <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html">New Answer experience</a> <span class="badge badge-update">Beta</span> (off by default in June Cloud) enabled on your cluster.</p></dd>
</dlentry>

<dlentry id="embedded-link-format">
<dt>Embedded link format for sharing objects</dt>
<dd>For embedded ThoughtSpot environments, you can now generate links with your host application context and send these links in email notifications. You can specify the link format when sharing an object or scheduling a pinboard job to ensure that the links sent in the email notifications go to the appropriate URL. Refer to <a href="{{ site.baseurl }}/end-user/pinboards/share-answers.html">Share answers</a> and <a href="{{ site.baseurl }}/admin/manage-jobs/schedule-a-pinboard-job.html">Schedule a pinboard job</a> for more information.</dd>
</dlentry>


<dlentry id="streamlined-analyst-setup">
<dt>Streamlined analyst setup</dt>
<dd>We simplified the steps to set up an analyst account on ThoughtSpot. Now, you can create a connection, create a worksheet to model your business use cases, and immediately search your data in three steps. See <a href="{{ site.baseurl }}/admin/ts-cloud/analyst-onboarding.html">Analyst Onboarding</a> for further details.</dd>
  </dlentry>  

<dlentry id="group-aggregate-query-filters">
<dt>Group aggregate query filters</dt>
<dd>This release improves support for group aggregate query filters when seeking finer-grained results by adding a secondary dimension, or courser-grained results when dropping one of the existing dimensions. You can now also include or drop the filter condition. Refer to <a href="{{ site.baseurl }}/complex-search/aggregation-filters.html">Aggregation filters</a> for more information.</dd>

</dlentry>

</dl>

<h3><a id="june-cloud-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="trending-objects">
<dt>View counts for trending objects</dt>
<dd>You can now see the view counts for trending answers and pinboards on the home page. This can help you understand why an object is trending.</dd>
</dlentry>

<dlentry id="trending-objects-link">
<dt>Open trending objects in a new tab</dt>
<dd>You can now open trending objects in a new tab by right-clicking on the object link on the home page. Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#trending">ThoughtSpot One home page</a> for more information.</dd>
</dlentry>


</dl>

<h3><a id="june-cloud-data-engineer"></a>For the Data Engineer</h3>
<dl>
<dlentry id="embrace-databricks">
<dt>Databricks GA</dt>
<dd>Databricks is now GA in this release of ThoughtSpot Cloud. For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks.html">Databricks</a>.</dd>
</dlentry>

<dlentry id="object-usage-pinboard">
<dt>Object Usage Pinboard</dt>
<dd>This release introduces a new default pinboard for monitoring object usage. The <a href="{{ site.baseurl }}/admin/ts-cloud/object-usage.html">Object Usage Pinboard</a> contains data on the following topics:
<ul>
<li>Specifies what existing tables, worksheets and views users search on</li>
<li>Specifies which columns users search most frequently</li>
<li>Tracks the most searched tables, worksheets and views each month</li>
</ul>
Use this pinboard to identify what users have accessed, and determine which unused data objects can be deleted.</dd>
</dlentry>
</dl>

<h3><a id="june-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="consumption-pricing">
<dt>Consumption-based pricing system answers</dt>
<dd>ThoughtSpot provides 2 default system answers to help you track and analyze your credit consumption. These answers allow you to dive deeper into the credit consumption and activities of a specific user, or over a specific time window.
<ul><li><strong>Sample Answer - Credit usage details</strong>: This answer is ideal for looking into object-level details, such as the objects a user accessed and the actions they performed on those objects.</li>
<li><strong>Credit usage from Charging Records</strong>: Use this answer to learn more about API-level details. You can map activities and credit consumption to specific API calls.</li></ul>
Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html#user-activity">Consumption-based pricing</a> for more information.</dd>
</dlentry>

<dlentry id="admin-privileges">
<dt>New admin privileges <span class="label label-beta">Beta</span></dt>
<dd>This release introduces new administrator privileges that separate the abilities of the administrator into 4 specific privileges. For example, you can allow certain users to create and manage users, while not allowing them to manage SAML integration or other advanced settings. These new administrator privileges do <strong><em>not</em></strong> provide access to all data in ThoughtSpot, unlike the <strong>Can administer ThoughtSpot</strong> privilege. Users with the new privileges can only see data that others share with them. The <strong>Can administer ThoughtSpot</strong> privilege, which encompasses all 4 new administrator privileges, still appears as an option by default. To remove it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>. The 4 new privileges are:
<ul><li>Can manage users: Can create, delete, and edit users.</li>
<li>Can manage privileges: Can create, delete, and edit groups. This includes the group's name, sharing visibility, and privileges.</li>
<li>Can operate application: Can configure local and SAML authentication. Can manage application settings: search, SpotIQ, and onboarding advanced settings, style and help customization. Can view scheduled maintenance.</li>
<li>Can see system information: Can view all default admin data, including system worksheets and pinboards.</li></ul>
This feature is in <span class="label label-beta">Beta</span> and off by default. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</dd>
</dlentry>

<dlentry id="security-log-collection">
<dt>Security log collection</dt>
<dd>This release of ThoughtSpot Cloud enables your security team to collect security audit events based on user activity and ship them to your SIEM application in real-time. You can view logs for the following events:
<ul>
<li>Account logout</li>
<li>Failed login</li>
<li>Group creation</li>
<li>Group deletion</li>
<li>Group modification</li>
<li>Locked account</li>
<li>Object creation</li>
<li>Object deletion</li>
<li>Object modification</li>
<li>Object sharing</li>
<li>Password change</li>
<li>Privilege change</li>
<li>Profile change</li>
<li>Row level security (RLS) rule creation</li>
<li>RLS rule deletion</li>
<li>RLS rule modification</li>
<li>Successful login</li>
<li>User account creation</li>
<li>User account deletion</li>
<li>User group change</li>
</ul>
For further details, see <a href="{{ site.baseurl }}/admin/data-security/audit-logs.html">Collect security logs</a>.</dd>
</dlentry>

<dlentry id="admin-console">
<dt>UI improvement for scheduled maintenance</dt>
<dd>This release improves the UI and user experience of the <a href="{{ site.baseurl }}/admin/ts-cloud/scheduled-maintenance.html">Scheduled maintenance</a> section of the admin console.</dd>
</dlentry>

</dl>

<h3><a id="june-cloud-developer"></a>For the Developer</h3>

<dl>
<dlentry id="global-local-actions">
<dt>Global and local custom actions</dt>
<dd>The ThoughtSpot developer portal now supports designating a custom action as a <em>global</em> or <em>local</em> action. This feature allows you to determine and control the placement of custom actions in the ThoughtSpot UI. Developers can now choose to create a custom action that will appear on all visualizations or a specific custom action that can be added to a particular visualization by a ThoughtSpot user. A custom actions panel in the visualization pages allows ThoughtSpot users to view the available custom actions and add an action to any visualization.</dd>

<dd>For example, if you want an action that triggers a callback into your parent app, which would then post its data to Slack, you might want to add a custom action globally to all visualizations. Similarly, if you want to send the data obtained from a specific visualization to a URL, you can associate a custom action locally to that visualization.</dd>

<dd>For more information, see <a href="https://developers.thoughtspot.com/docs/?pageid=customize-actions" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dlentry>
</dl>

<dl>
<dlentry id="custom-action-auth">
<dt>Authentication schemes for custom actions</dt>
<dd>You can now apply an authentication scheme for custom actions that trigger a data payload to a specific URL target. If a custom action requires your users to authenticate to send data to a URL, you can specify the authentication method and authorization attributes when creating a custom action in the Developer portal.</dd>

<dd>ThoughtSpot will use this authentication information to send the required attributes in the <code>Authorization</code> headers to the URL endpoint configured in the custom action.
</dd>
<dd>For more information, see <a href="https://developers.thoughtspot.com/docs/?pageid=custom-action-url" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dlentry>
</dl>

<dl>
<dlentry id="custom-action-position">
<dt>Custom action position settings</dt>
<dd>ThoughtSpot users with edit privileges can now define or modify the position of a custom action on visualization pages. When a developer creates a custom action in the Developer portal, ThoughtSpot adds a menu item to the <strong>More</strong> menu <img src="/images/icon-ellipses.png" alt="more options menu icon" class="inline" /> by default. ThoughtSpot users can change this to a context menu action or a primary action at any time.</dd>

<dd>If your application instance requires an action that sends only a single row of data from charts or tables, developers can configure a custom action and restrict it to only the contextual menu. If this setting is enabled on a custom action, ThoughtSpot users cannot modify this action on a visualization page.</dd>

<dd>For more information, see <a href="https://developers.thoughtspot.com/docs/?pageid=custom-action-viz" target="_blank">ThoughtSpot Developer Documentation</a>.
</dd></dlentry>
</dl>

<dl>
<dlentry id="custom-link-format">
<dt>Custom link format for ThoughtSpot embedded instances</dt>
<dd>
ThoughtSpot generates links to access objects, such as pinboards, visualizations, and search answers, when a user shares an object with another user or follows a pinboard to receive periodic notifications. If you have embedded ThoughtSpot in your application, you might want to generate these links in the format that preserves your host application context.</dd>

<dd>For embedded instances, ThoughtSpot now allows you to customize the format of these links in the Developer portal. The <strong>Link Settings</strong> page in the Developer portal allows you to customize the link format for various resource URLs and the <strong>unsubscribe</strong> link sent in email notifications.</dd>

<dd>For more information, see <a href="https://developers.thoughtspot.com/docs/?pageid=customize-links" target="_blank">ThoughtSpot Developer Documentation</a>.
</dd></dlentry>
</dl>

<dl>
<dlentry id="rest-apis">
<dt>New REST APIs</dt>
<dd>The ThoughtSpot 7 Cloud June release introduces the following REST APIs:<br><br>
<ul><li><code>POST /tspublic/v1/security/share</code><br>You can use this API to share ThoughtSpot objects with another user or user group.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li><br>
<li><code>POST /tspublic/v1/security/shareviz</code><br>You can use this API to share a specific ThoughtSpot visualization with another user or user group. <br> For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li><br>
<li><code>GET /tspublic/v1/session/login/token</code><br>This API allows you to authenticate and log in a user if trusted authentication is enabled on ThoughtSpot. <br> For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li><br>
<li><code>POST /tspublic/v1/metadata/assigntag</code><br>You can use this API to programmatically assign a tag to a ThoughtSpot object such as pinboards, search answers, tables, and worksheets. <br>For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li><br>
<li><code>POST /tspublic/v1/user/updatepreference</code><br>This API now includes the optional <code>username</code> parameter, which allows API users to specify the <code>username</code> of the ThoughtSpot user.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li>
</ul></dd></dlentry>
</dl>


<h2><a id="2021-may"></a>ThoughtSpot 7 Cloud May Release (ts7.may.cl)</h2>

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
<dt>Oracle ADW for Connections</dt>
<dd>In this release, Oracle Autonomous Data Warehouse (ADW) is GA. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-adw.html">Oracle ADW</a>. </dd></dlentry>

<dlentry id="embrace-starburst">
<dt>Starburst for Embrace</dt>
<dd>Embrace now supports both Starburst Enterprise, and open source Trino databases. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-starburst.html">Starburst</a>.</dd></dlentry>

<!-- <dlentry id="embrace-custom-calendar">
<dt>Custom calendar for Embrace</dt>
<dd>In this release, custom calendar is available for Snowflake connections only. For details, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">Custom calendar</a>. </dd></dlentry> -->

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
<dd>To add a custom action to the contextual menu, you must have the <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html">New Answer experience</a> <span class="badge badge-update">Beta</span> (off by default) enabled on your cluster.</dd>
<dd>For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/custom-actions.html">Add custom actions</a>.</dd></dlentry>
</dl>

<dl>
<dlentry id="viz-embed-sdk">
<dt>Visual Embed SDK Version 1.2.0</dt>
<dd>The ThoughtSpot 7 Cloud May release introduces the Visual Embed SDK 1.2.0 version with a minor update and backward-compatible improvements.</dd></dlentry>
</dl>
<dlentry id="saml-authentication">
<dt>SAML authentication</dt>
<dd>The Visual Embed SDK packages now include the <code>noRedirect</code> attribute as an optional parameter for the <code>SSO</code> <code>AuthType</code>. If you want to display the SAML authentication workflow in a pop-up window, instead of refreshing the application web page to direct users to the SAML login page, you can set the <code>noRedirect</code> attribute to <code>true</code>.</dd>
<dd>For more information, see the <a href="https://developers.thoughtspot.com/docs/?pageid=getting-started" target="_blank">ThoughtSpot Developer Documentation</a>.</dd></dlentry>
</dl>

<dl>
<dlentry id="viz-embed-sdk-notification">
<dt>Visual Embed SDK notification when third-party cookies are disabled</dt>
<dd>When a user accesses the embedded application from a web browser that has third-party cookies disabled, the Visual Embed SDK emits the <code>NoCookieAccess</code> event to notify the developer. Cookies are disabled by default in Safari. Users can enable third-party cookies in Safari’s Preferences setting page or use another web browser. To know how to enable this setting by default on Safari for a ThoughtSpot embedded instance, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</dd></dlentry>
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
<ul><li><code>POST /tspublic/v1/user/updatepreference</code><br>You can use this API to programmatically update a ThoughtSpot user’s profile settings such as the email address, locale preference, notification settings, and the preference for revisiting the onboarding experience.<br><br>For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li><br>
<li><code>GET /tspublic/v1/metadata/listas</code><br>You can use this API to get a list of object headers for a ThoughtSpot user or user group. For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</li></ul></dd></dlentry>
</dl>

<h2><a id="2021-april"></a>ThoughtSpot 7 Cloud April Release (ts7.april.cl)</h2>
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
<dt>New Answer experience <span class="badge badge-update">Beta</span></dt>
<dd><p>This release redesigns the experience of creating and working with Answers. The new Answer experience contains multiple new features and feature enhancements. It is in <span class="badge badge-update">Beta</span> and off by default, but the option to turn it on or off individually is on by default. You can toggle it on or off individually from the <strong>Experience manager</strong> in your profile, or for the whole company by <a href="{{ site.baseurl }}/admin/misc/contact.html">contacting ThoughtSpot Support</a>.</p>
<p>The new Answer experience contains the following features and enhancements: {% include content/new-answer-experience-features.md %}</p>
<p>{% include content/new-answer-experience-deprecations.md %}</p>
<p> Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/new-answer-experience">New Answer experience</a> for more information on the behavior of these features.</p>

</dd></dlentry>

<dlentry id="sticky-search-toggle">
<dt>Sticky Search Answers/ Search Data toggle</dt>
<dd>This release makes the Search Answers/ Search Data toggle <img src="{{ site.baseurl }}/images/search-toggle-answers.png" alt="search toggle" class="inline"/> sticky. ThoughtSpot now remembers your choice across sessions when you switch between <a href="{{ site.baseurl }}/end-user/search/search-answers.html">Search Answers</a> and <a href="{{ site.baseurl }}/end-user/search/search-data.html">Search Data</a>.</dd></dlentry>

<dlentry id="latency">
<dt>Improvements in indexing latency for Search Answers</dt>
<dd>This release improves indexing latency to less than 10 minutes, from 6 hours previously. Now, when you create, modify, or delete a new object, update user permissions, or otherwise make changes within ThoughtSpot, the product reflects these changes within 10 minutes. If you create a new Answer, users can search for and find it 10 minutes after you create it. This indexing improvement is in the process of rollout. If you don’t have it yet, ThoughtSpot will deploy it soon.</dd></dlentry>

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

<dlentry id="developer-privilege">
<dt>Developer privilege</dt>
<dd>You can now grant groups the <a href="{{ site.baseurl }}/end-user/introduction/about-privileges-end-user.html">Developer privilege</a> from the Admin Console, allowing users in those groups to access and use the <a href="{{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html">Developer Portal</a>. In the Developer Portal, users can explore the ThoughtSpot APIs and developer tools, and build web applications with ThoughtSpot content.</dd></dlentry>

<dlentry id="tml-api">
<dt>TML APIs</dt>
<dd><p>The new TML APIs enable you to programmatically export, validate, and import scriptable <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html">TML</a> objects. Use these APIs to automate the change management and deployment processes between your development and production environments. With these APIs, analysts can much more easily migrate from one environment to the other by automating the entire change management process, reducing the risk of human error.</p>
<p>See <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</p></dd></dlentry>

<dlentry id="developer-portal">
<dt>ThoughtSpot Developer portal</dt>
<dd>ThoughtSpot users with admin or developer privileges can now access the ThoughtSpot Developer portal by clicking the <strong>Develop</strong> tab in the ThoughtSpot application.
The Developer portal, referred to as <strong>SpotDev</strong> in the earlier release, includes the following enhancements:
<ul>
<li>Playground enhancements<br>The <strong>Playground</strong> page now includes several UI enhancements to improve the interactive coding experience for developers.<ul>
<li>The <strong>Handle custom actions</strong> checkbox on the <strong>Playground</strong> pages allows you to view the code for the custom action event.</li>
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
For more information, see the <a href="https://developers.thoughtspot.com/docs/?pageid=js-reference" arget="_blank">ThoughtSpot Developer Documentation</a>.</dd></dlentry>

<dlentry id="session-api-enhancement">
<dt>Session API enhancement</dt>
<dd>The session REST API service now includes the <code>/tspublic/v1/session/auth/token</code> API to enable a client application to programmatically obtain an authentication token for a ThoughtSpot  user.<br>To access this API, visit the ThoughtSpot Swagger portal.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.</dd></dlentry>

</dl>

<h2><a id="2021-march"></a>ThoughtSpot 7 Cloud March Release (ts7.mar.cl)</h2>
<ul>
<li><a href="{{ site.baseurl }}#mar-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#mar-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#mar-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#mar-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="mar-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="scriptability">
<dt>Scriptability</dt>
<dd><ul><li><p><strong>Add tables and columns to an Embrace connection:</strong> ThoughtSpot now allows you to use TML to edit tables created through <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection.</p> <p>This feature is in <strong>Beta</strong> and off by default; to add columns and tables to an Embrace connection through Scriptability, contact your ThoughtSpot administrator.</p></li>
<li><p><strong>Improvements to generic join functionality:</strong> The expanded functionality for generic joins in TML files allows the following elements:
<ul><li>Constants: int, double, bool, date, and string</li>
<li>Comparison operators: <code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, and <code>&gt;=</code></li>
<li>Columns</li>
<li>Boolean operators: <code>AND</code>, <code>OR</code>, and <code>NOT</code></li></ul> This feature is in <strong>Beta</strong> and on by default.</p>
</li>
</ul></dd></dlentry>

</dl>

<h3><a id="mar-cloud-business-user"></a>For the Business User</h3>

<dl>

<dlentry id="ts-one-ga">
<dt>ThoughtSpot One GA</dt>
<dd>ThoughtSpot One is now available for all customers. It is on by default. See <a href="{{ site.baseurl }}/end-user/search/search-answers.html">Search Answers</a> and <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html">ThoughtSpot One home page</a> for more information.</dd>
</dlentry>

<dlentry id="bulk-share">
<dt>Bulk share objects from the ThoughtSpot One home page</dt>
<dd>You can now share multiple objects at a time from the ThoughtSpot One home page. Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#bulk-share">ThoughtSpot One home page</a>.</dd>
</dlentry>


<dlentry id="details-panel">
<dt>Frequent metrics and attributes in the <strong>Details</strong> panel</dt>
<dd>The <strong>Details</strong> panel that appears when you click on a Pinboard visualization while searching across your existing Answers and Pinboards now lists frequent metrics and attributes for that Pinboard. You can determine if a Pinboard search result is useful for you based on the metrics and attributes used most often in that Pinboard.</dd>
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

<h3><a id="mar-cloud-developer"></a>For the Developer</h3>

<dl>

<dlentry id="thoughtspot-embed">
<dt>ThoughtSpot Embed</dt>
<dd>ThoughtSpot cloud now supports embedding ThoughtSpot content in third-party applications. In this release, ThoughtSpot introduces the Visual Embed SDK package <span class="label label-beta">Beta</span> to help developers embed the ThoughtSpot search functionality, pinboards, visualizations, or the full application in their web page, portal, or business solution.</dd>
<dd>For more information on embedding ThoughtSpot, see <a href="{{ site.baseurl }}/admin/ts-cloud/intro-embed.html">ThoughtSpot embedding solution</a>.</dd></dlentry>

<dlentry id="spotdev-portal">
<dt>SpotDev portal</dt>
<dd>ThoughtSpot cloud now includes the <strong>SpotDev</strong> portal <span class="label label-beta">Beta</span> to allow developer users to explore the ThoughtSpot SDK APIs and build sample applications. The <strong>SpotDev</strong> tab in the ThoughtSpot application is available for the users with administrator and developer privileges.</dd>
<dd>The <strong>SpotDev</strong> portal provides a playground for developers and product owners to evaluate the Visual Embed APIs and preview the results. The portal also allows authorized users to rebrand the embedded content, <a href="{{ site.baseurl }}/admin/ts-cloud/customization-rebranding.html">customize styles</a>, and <a href="{{ site.baseurl }}/admin/ts-cloud/custom-actions.html">add custom menu actions</a> to the embedded instance.</dd><dd>For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html">SpotDev Portal</a>.</dd></dlentry>

</dl>

<h2><a id="2021-february"></a>ThoughtSpot 7 Cloud February Release (ts7.feb.cl)</h2>

<ul>
<li><a href="{{ site.baseurl }}#feb-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#feb-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#feb-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#feb-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
</ul>

<h3><a id="feb-cloud-analyst"></a>For the Analyst</h3>

<dl>
  <dlentry id="scriptability">
    <dt>Scriptability</dt>
    <dd><ul><li><p>You can now create and edit joins at the table level using TML, including range and generic joins. You must edit these joins from the source table, not the destination table. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a>.</p>
    <p>This feature is in Beta in the February release. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></li>
    <li><strong>Export custom SpotApps</strong>: Support for custom SpotApp export is now GA and on by default. You can now export your own custom SpotApps, or collections of Scriptable ThoughtSpot Answers, Pinboards, Views, tables, and Worksheets, packaged together as a zip file. Simply navigate to <strong>Data > SpotApps</strong> and choose the objects you would like to include in a custom SpotApp. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/app-templates.html">SpotApps</a>.</li></ul>
</dd></dlentry>

 <dlentry id="simplified-join-creation">
  <dt>Simplified join creation</dt>
  <dd>This release makes creating and editing joins from a table more flexible and intuitive. Our new joins interface allows you to define and edit the join type and cardinality at the table level, where previously this was only possible at the Worksheet level. Refer to <a href="{{ site.baseurl }}/admin/worksheets/add-joins.html#table-join">Table joins</a>.
</dd></dlentry>

<dlentry id="pinboard-download-api">
  <dt>Pinboard Export API</dt>
  <dd>Use the new Pinboard Export API to programmatically download Pinboards, or specific visualizations from the Pinboards, as PDFs. Refer to <a href="{{ site.baseurl }}/reference/api/rest-api-reference.html">REST API reference</a>.
</dd></dlentry>

<dlentry id="spotiq-analyze">
  <dt>Support for SpotIQ Analyze</dt>
  <dd><p>In this release, ThoughtSpot Cloud adds support for SpotIQ analyze. Now you can analyze any answer, pinboard visualization, or data source to generate instant insights, by clicking the SpotIQ analyze button <img src="{{ site.baseurl }}/images/icon-lightbulb.png" alt="SpotIQ analyze icon" class="inline"/>. For more information, see <a href="{{ site.baseurl }}/spotiq/customization.html">Custom SpotIQ analysis</a>.</p></dd></dlentry>

</dl>

<h3><a id="feb-cloud-business-user"></a>For the Business User</h3>

<dl>
<dlentry id="home-page-shortcuts">
<dt>Home page shortcuts</dt>
<dd><p>You can now create and access quick links to your most-used Answers and Pinboards from the ThoughtSpot One home page. Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">Home page shortcuts</a>.</p>
<p>ThoughtSpot One may be off in your environment. To enable ThoughtSpot One, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support.</a></p></dd>
</dlentry>

<dlentry id="internet-explorer">
  <dt>Deprecation of Internet Explorer</dt>
<dd>ThoughtSpot browser support for Internet Explorer is now deprecated. Refer to <a href="{{ site.baseurl }}/end-user/accessing.html">ThoughtSpot browser access</a> for a list of supported browsers.</dd>
</dlentry>

</dl>

<h3><a id="feb-cloud-data-engineer"></a>For the Data Engineer</h3>

<dl>
<dlentry id="embrace">
<dt>Embrace</dt>
<dd>Embrace now supports security passthrough for Snowflake and Google BigQuery using OAuth for authentication and authorization. For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-add-connection.html">Snowflake</a>, and <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-gbq-add-connection.html">Google BigQuery</a>.</dd>
<dd>Embrace passthrough functions are available for Snowflake. Passthrough functions allow you to send custom SQL expressions directly to your Snowflake database without being interpreted by ThoughtSpot. For more information, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake-passthrough.html">Passthrough functions for Snowflake</a>.</dd>
<dd>Embrace now supports Oracle Autonomous Database <span class="label label-beta">Beta</span>. This feature is in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.</dd>
</dlentry>
</dl>

<h3><a id="feb-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>
<dlentry id="new-region-support">
<dt>New region support</dt>
<dd>ThoughtSpot Cloud is now available in the following 2 regions, in addition to US East (N. Virginia) and West (Oregon), Sydney, and Ireland:
<ul><li>Frankfurt</li>
<li>Singapore</li></ul></dd></dlentry>

<dlentry id="search-answers-pinboard">
<dt>Search on Answers Pinboard</dt>
<dd>There are several changes to the behavior of the <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">How Users are Searching Answers Pinboard</a>:
<ul>
<li>The Pinboard and its underlying Worksheet, <strong>Discover Monitoring Data</strong>, are now accessible only to admins by default. Admins can share the Pinboard and Worksheet with anyone else who might need this information.</li>
<li>The Pinboard is populated with your users' Search on Answers data by default. You do not need to <a href="{{ site.baseurl }}/admin/misc/contact.html">Contact ThoughtSpot Support</a> to see your users' Search on Answers data in the Pinboard.</li></ul></dd>
</dlentry>

<dlentry id="pinboard-download-control">
<dt>Pinboard download control</dt>
<dd><p>You can now limit or remove the options ThoughtSpot provides for downloading Pinboards and their visualizations. You can allow users to only download Pinboard visualizations in a specific format (such as .csv), or you can restrict access to downloading Pinboards and their visualizations altogether.</p>
<p>This is a cluster-level feature. You cannot configure permissions for specific users.</p>
<p>This is an embed-only feature. To enable this functionality, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></dd>
</dlentry>

<dlentry id="consumption-based-pricing">
<dt>Consumption-based pricing</dt>
<dd>ThoughtSpot now offers consumption, or usage, based pricing. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/consumption-pricing.html">Consumption-based pricing</a>. To compare consumption- and capacity-based pricing, refer to <a href="https://www.thoughtspot.com/pricing" target="_blank">ThoughtSpot pricing</a>.</dd>
</dlentry>
</dl>

<h2><a id="2021-december"></a>ThoughtSpot 6 Cloud December Release (ts6.dec.cl)</h2>

<h3>Scriptability</h3>
There are several new features for Scriptability:
<ul>
<li><p><strong>Export custom SpotApps</strong>: You can now export your own custom SpotApps, or collections of Scriptable ThoughtSpot Answers, Pinboards, Views, tables, and Worksheets, packaged together as a zip file. Simply navigate to <strong>Data > SpotApps</strong> and choose the objects you would like to include in a custom SpotApp. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/app-templates.html">SpotApps</a>.</p>
<p>This feature is in Beta. To enable it, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot Support</a>.</p></li>
<li><strong>GUID handling</strong>: ThoughtSpot now recognizes pre-existing GUIDs upon import and asks if you would like to update the existing object or create a new one. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a>.</li>
<li>ThoughtSpot Scripting Language is now called ThoughtSpot Modeling Language.</li></ul>

<h3>Information Center</h3>
ThoughtSpot has a new Information Center, accessible from the help icon <strong>?</strong> next to your profile on the top navigation bar. This new help menu contains many useful resources, including a navigation overview, several training videos, and links to more help across the ThoughtSpot product, community, training, and documentation. Refer to <a href="{{ site.baseurl }}/end-user/help-center/what-you-can-find-in-the-help-center.html">More help and support</a>.

<h3>Embrace passthrough functions</h3>
Embrace now supports passthrough functions which allow you to send SQL expressions directly to the database, without being interpreted by ThoughtSpot. If you have custom database functions that ThoughtSpot doesn't support, you can use these new passthrough functions in the ThoughtSpot Formula Assistant to call your custom functions. Refer to <a href="{{ site.baseurl }}/reference/formula-reference.html#passthrough-functions">Embrace passthrough functions</a>.

<h3>New language support</h3>

Starting in the December Cloud release, ThoughtSpot supports the following new locale, including support for language keywords that can be used in the search bar:

<ul>
<li> English (India) </li>
</ul>

To set locale to English (India), click the user icon in the top right corner to navigate to the <strong>Profile</strong> page, and select locale under <strong>Preferences</strong>.

<h2><a id="2021-october"></a>ThoughtSpot 6 Cloud October Release (ts6.oct.cl)</h2>

<h3>New Home page</h3>

The ThoughtSpot <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html">Home page</a> allows you to access all your essential actions as a business user. You can:

<ul>
<li>Search across existing Answers and Pinboards</li>
<li>Search your data to create new Answers and Pinboards</li>
<li>View objects you viewed recently</li>
<li>View trending Pinboards and Answers</li>
<li>Filter existing objects by favorite, author, tag, or type of object</li>
<li>Sort existing objects by author, views, or most recently viewed</li>
<li>Bulk mark objects as favorites</li>
</ul>

<h3>Search existing Answers</h3>
In addition to the existing Search over data, this release gives business users easy <a href="{{ site.baseurl }}/end-user/search/search-answers.html">Search over existing Answers and Pinboards</a>. This  meets the users' information needs by making Answers searchable, sortable, and applying filters on relevance, recency, number of views, authorship, metrics used, and so on.

<h3>How Users are Searching Answers Pinboard</h3>
Use this default <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">Pinboard</a> to analyze how users are searching your existing Answers and Pinboards, so you can determine what objects are the most popular and what assets you may need to create.

<h3>Disable Answer Search for specific Worksheets</h3>
When users search for existing Answers and Pinboards, the default experience is to search across all Worksheets that they have access to. You may not want users to search for existing Answer and Pinboards built on certain Worksheets that are works in progress or deprecated. You can disable searching for Answers on specific Worksheets. Refer to <a href="{{ site.baseurl }}/admin/thoughtspot-one/disable-discover-for-worksheet.html">Disable Answer Search</a>.

<h3>Linked Pinboard filters</h3>
You can now create one filter that filters visualizations based on multiple Worksheets by linking the Worksheet columns, at the Pinboard level. This is useful when you have a Pinboard built on multiple Worksheets, and you would like to filter on columns that are functionally the same, but exist in multiple Worksheets.<br><br>

Refer to <a href="{{ site.baseurl }}/complex-search/linked-filters.html">Linked Pinboard filters</a>.<br>

<h3>Selective Pinboard filters</h3>
You can now configure Pinboard filters to apply to specific visualizations that you choose. This is useful when you would like to filter some, but not all, visualizations in a Pinboard.<br><br>

Refer to <a href="{{ site.baseurl }}/complex-search/selective-filters.html">Selective Pinboard filters</a>.

<!--<h3>Enhanced data modeling capabilities</h3>
This release enables new data modeling capabilities. You can now:
<ul>
<li>Join a View to a table</li>
<li>Build a Worksheet on top of a View</li>
</ul>-->

<h3>Geo maps</h3>
ThoughtSpot's Geo maps now have more detailed geographic and infrastructural boundaries by default. This includes road names, cities, and so on.<br>

ThoughtSpot supports maps of many countries. See the complete list in the <a href="{{ site.baseurl }}/reference/geomap-reference.html">Geo Map Reference</a>.

<h3>Customize ThoughtSpot Help</h3>
You can now tailor the ThoughtSpot Help menu to your organization by customizing it from the Admin Console. When you configure these Help settings, you set system-wide defaults for all your users.

Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/customize-help.html">Customize ThoughtSpot Help</a>.

<h3>User Adoption Pinboard</h3>
The <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Pinboard</a> is now accessible from the Admin Console.

{: id="2020-september"}
## ThoughtSpot Cloud September Release (tscloud.5)

<h3>Scriptability</h3>
Scriptability contains the following new features:
<ul>
  <li>Export and update logical tables</li>
  <li>Edit, validate, and publish objects using the TML editor</li>
  <li>Import multiple objects from the <strong>SpotApps</strong> page, or from the object list page</li>
  <li>Update Views</li>
  <li>GUID handling: a new <code>GUID</code> parameter in an object's .tml file allows ThoughtSpot to recognize pre-existing GUIDs, and determine if you are updating an existing object, or creating a new one</li>

</ul>

See <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a>.

<h3>Style Customization</h3>
You can now customize the ThoughtSpot application from the Admin Console. With style customization, you can change the fonts, chart color palettes, footer text, application logo, and background colors in your embedded ThoughtSpot instance.<br><br>

Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/style-customization.html">Style customization</a>.

<h3>In-app acceptance of ThoughtSpot's use agreement</h3>
You can now sign ThoughtSpot's end-user use agreement from the application itself. Even if you previously signed a paper copy of the use agreement, an admin must sign the agreement in the application, within 30 days of ThoughtSpot upgrading your cluster to Cloud 5.<br><br>

Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/use-agreement.html">ThoughtSpot use agreement</a>.

<h3>User adoption and performance Pinboards</h3>
This release of ThoughtSpot Cloud contains two new default Pinboards for administrators. Use the <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Pinboard</a> to understand how your ThoughtSpot users are interacting with ThoughtSpot, and how your user adoption is changing over time. Use the <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Pinboard</a> to understand how your ThoughtSpot cluster is performing.<br><br>

See <a href="{{ site.baseurl }}/admin/ts-cloud/user-adoption.html">User Adoption Pinboard</a> and <a href="{{ site.baseurl }}/admin/ts-cloud/performance-tracking.html">Performance Tracking Pinboard</a>.
