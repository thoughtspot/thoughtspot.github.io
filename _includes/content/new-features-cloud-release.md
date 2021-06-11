The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#june-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#june-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="june-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="pivot-tables">
<dt>Conditional formatting for pivot tables</dt>
<dd>You can now perform conditional formatting on measures in pivot tables. Refer to <a href="{{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#table">Apply conditional formatting</a> and <a href="{{ site.baseurl }}/complex-search/about-pivoting-a-table.html">Pivot tables</a>.</dd>
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
<dd>Datbricks is now GA in this release of ThoughtSpot Cloud. For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-databricks.html">Databricks</a>.</dd>
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
<li>Successful login</li>
<li>User account creation</li>
<li>User account deletion</li>
<li>User group change</li>
</ul>
For further details, see <a href="{{ site.baseurl }}/admin/data-security/audit-logs.html">Collect security logs</a>.</dd>
</dlentry>

</dl>

<h3><a id="june-cloud-developer"></a>For the Developer</h3>

<dl>
<dlentry id="global-local-actions">
<dt>Global and local custom actions</dt>
<dd>The ThoughtSpot developer portal now supports designating a custom action as a <em>global</em> or <em>local</em> action. This feature allows you to determine and control the placement of custom actions in the ThoughtSpot UI. Developers can now choose to create a custom action that will appear on all visualizations or a specific custom action that can be added to a particular visualization by a ThoughtSpot user. A custom actions panel in the visualization pages allows ThoughtSpot users to view the available custom actions and add an action to any visualization.</dd>

<dd>For example, if you want an action that triggers a callback into your parent app, which would then post its data to Slack, you might want to add a custom action globally to all visualizations. Similarly, if you want to send the data obtained from a specific visualization to a URL, you can associate a custom action locally to that visualization.</dd>

<dd>For more information, see <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=customize-actions" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dlentry>
</dl>

<dl>
<dlentry id="custom-action-auth">
<dt>Authentication schemes for custom actions</dt>
<dd>You can now apply an authentication scheme for custom actions that trigger a data payload to a specific URL target. If a custom action requires your users to authenticate to send data to a URL, you can specify the authentication method and authorization attributes when creating a custom action in the Developer portal.</dd>

<dd>ThoughtSpot will use this authentication information to send the required attributes in the <code>Authorization</code> headers to the URL endpoint configured in the custom action.
</dd>
<dd>For more information, see <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-action-url" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dlentry>
</dl>

<dl>
<dlentry id="custom-action-position">
<dt>Custom action position settings</dt>
<dd>ThoughtSpot users with edit privileges can now define or modify the position of a custom action on visualization pages. When a developer creates a custom action in the Developer portal, ThoughtSpot adds a menu item to the <strong>More</strong> menu <img src="/images/icon-ellipses.png" alt="more options menu icon" class="inline" /> by default. ThoughtSpot users can change this to a context menu action or a primary action at any time.</dd>

<dd>If your application instance requires an action that sends only a single row of data from charts or tables, developers can configure a custom action and restrict it to only the contextual menu. If this setting is enabled on a custom action, ThoughtSpot users cannot modify this action on a visualization page.</dd>

<dd>For more information, see <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-action-viz" target="_blank">ThoughtSpot Developer Documentation</a>.</dd>
</dd></dlentry>
</dl>

<dl>
<dlentry id="custom-link-format">
<dt>Custom link format for ThoughtSpot embedded instances</dt>
<dd>
ThoughtSpot generates links to access objects, such as pinboards, visualizations, and search answers, when a user shares an object with another user or follows a pinboard to receive periodic notifications. If you have embedded ThoughtSpot in your application, you might want to generate these links in the format that preserves your host application context.</dd>

<dd>For embedded instances, ThoughtSpot now allows you to customize the format of these links in the Developer portal. The <strong>Link Settings</strong> page in the Developer portal allows you to customize the link format for various resource URLs and the <strong>unsubscribe</strong> link sent in email notifications.</dd>

<dd>For more information, see <a href="https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=customize-links" target="_blank">ThoughtSpot Developer Documentation</a>.
</dd></dlentry>
</dl>

<dl>
<dlentry id="rest-apis">
<dt>New REST APIs</dt>
<dd>The ThoughtSpot 7 Cloud June release introduces the following REST APIs:<br><br>
<ul><li><code>POST /tspublic/v1/security/share</code><br>You can use this API to share ThoughtSpot objects with another user or user group.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/security-api.html">Security APIs</a>.</li><br>
<li><code>POST /tspublic/v1/security/shareviz</code><br>You can use this API to share a specific ThoughtSpot visualization with another user or user group. <br> For more information, see <a href="{{ site.baseurl }}/reference/api/security-api.html">Security APIs</a>.</li><br>
<li><code>GET /tspublic/v1/session/login/token</code><br>This API allows you to authenticate and log in a user if trusted authentication is enabled on ThoughtSpot. <br> For more information, see <a href="{{ site.baseurl }}/reference/api/session-api.html">Session APIs</a>.</li><br>
<li><code>POST /tspublic/v1/metadata/assigntag</code><br>You can use this API to programmatically assign a tag to a ThoughtSpot object such as pinboards, search answers, tables, and worksheets. <br>For more information, see <a href="{{ site.baseurl }}/reference/api/metadata-api.html">Metadata APIs</a>.</li><br>
<li><code>POST /tspublic/v1/user/updatepreference</code><br>This API now includes the optional <code>username</code> parameter, which allows API users to specify the <code>username</code> of the ThoughtSpot user.<br>For more information, see <a href="{{ site.baseurl }}/reference/api/user-api.html">User APIs</a>.</li>
</ul></dd></dlentry>
</dl>
