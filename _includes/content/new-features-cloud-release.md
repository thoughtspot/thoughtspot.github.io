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

</dl>

<h3><a id="june-cloud-business-user"></a>For the Business User</h3>

<h3><a id="june-cloud-data-engineer"></a>For the Data Engineer</h3>

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

</dl>

<h3><a id="june-cloud-developer"></a>For the Developer</h3>
