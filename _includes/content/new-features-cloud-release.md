The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#july-cloud-first">For the First user</a></li>
<li><a href="{{ site.baseurl }}#july-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#july-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#july-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#july-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#july-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="july-cloud-first"></a>For the First user</h3>

<dl>

<dlentry id="getting-started">
<dt>Getting started with ThoughtSpot Cloud</dt>
<dd>The first user on the account has to complete a series of steps before other people can start using ThoughtSpot with your organization’s data. For these instructions, see <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-getting-started.html">Getting Started with ThoughtSpot Cloud</a>.
</dd>
</dlentry>
</dl>

<h3><a id="july-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="scriptability">
<dt>Scriptability</dt>
<dd><ul><li><strong>TML for tables with row-level security:</strong> ThoughtSpot now supports the migration and editing of tables with <a href="{{ site.baseurl }}/admin/data-security/row-level-security.html">row level security (RLS)</a> using <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">TML</a>.</li>
<li><strong>Improved import workflow:</strong> The new import workflow for <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a> allows you to resolve errors as part of the import workflow.</li></ul></dd>
</dlentry>

<dlentry id="auto-email">
<dt>Automatic following of Stats and Trends for Search on Answers pinboard</dt>
<dd>The <a href="{{ site.baseurl }}/admin/thoughtspot-one/query-intelligence-pinboard.html">Stats and Trends for Search on Answers pinboard</a> allows administrators, and users they share the pinboard with, to understand how users are searching for existing answers and pinboards. Now, ThoughtSpot automatically emails this pinboard to administrators once a week. You can add or remove users from this email list by <a href="{{ site.baseurl }}/admin/manage-jobs/schedule-a-pinboard-job.html">editing the follow schedule</a> for this pinboard.</dd>
</dlentry>

</dl>

<h3><a id="july-cloud-business-user"></a>For the Business User</h3>

<dl>
<dlentry id="watchlist-metrics">
<dt>Watchlist metrics</dt>
<dd>There are several new features for the metrics watchlist on your ThoughtSpot home page:
<ul><li>You can now open metrics in your watchlist in a new tab by right-clicking on the metric on the home page.</li>
<li>There is now no limit to the number of metrics you can add to your watchlist.</li></ul>
Refer to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">ThoughtSpot One home page</a> for more information about watchlist metrics.</dd>
</dlentry>
</dl>

<h3><a id="july-cloud-data-engineer"></a>For the Data Engineer</h3>

<dl>
<dlentry id="custom-calendar">
<dt>Custom calendar enhancements</dt>
<dd>There are several enhancements for custom calendar in this release:
<ul><li>Streamlined custom calendar window with the ability to preview calendar data.</li>
<li>Simplified workflow.</li>
<li>Preview calendar data from custom calendar list</li></ul>
For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html">Custom calendar overview</a>.</dd>
</dlentry>
</dl>

<h3><a id="july-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>
<dlentry id="credit-usage-pinboard">
<dt>Credit Usage pinboard</dt>
<dd>The Credit Usage pinboard, a pinboard for monitoring your credit consumption under the consumption-based pricing model, is now accessible from the Admin Console, under <strong>Billing > Credit consumption</strong>.</dd>
</dlentry>

<dlentry id="saml-mail-field">
<dt>SAML configuration</dt>
<dd>When configuring SAML authentication for ThoughtSpot, it is now mandatory to map the <code>mail</code> attribute in the IDP metadata file to the email address of the user. If your company cannot meet this requirement, <a href="{{ site.baseurl }}/admin/misc/contact.html">contact ThoughtSpot support</a>. For more information, refer to <a href="{{ site.baseurl }}/admin/ts-cloud/authentication-integration.html">configure SAML</a>.</dd>
</dlentry>
</dl>

<h3><a id="july-cloud-developer"></a>For the Developer</h3>
