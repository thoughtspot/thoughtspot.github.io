The latest release of ThoughtSpot Cloud contains several new and enhanced features.

<ul>
<li><a href="{{ site.baseurl }}#april-cloud-analyst">For the Analyst</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-business-user">For the Business User</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-data-engineer">For the Data Engineer</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-it-ops-engineer">For the IT Ops Engineer</a></li>
<li><a href="{{ site.baseurl }}#april-cloud-developer">For the Developer</a></li>
</ul>

<h3><a id="april-cloud-analyst"></a>For the Analyst</h3>

<dl>

<dlentry id="">
<dt>Scriptability</dt>
<dd>There are several enhancements to the <a href="{{ site.baseurl }}/admin/ts-cloud/scriptability.html">Scriptability</a> feature:
<ul><li><strong>Support for selective and linked filters:</strong> You can now import, export, and update Pinboards with <a href="{{ site.baseurl }}/complex-search/linked-filters.html">linked</a> or <a href="{{ site.baseurl }}/complex-search/selective-filters.html">selective</a> filters.</li>
<li><strong>Add tables and columns to an Embrace connection (GA):</strong> ThoughtSpot now allows you to use TML to edit tables created through <a href="{{ site.baseurl }}/admin/ts-cloud/embrace.html">Embrace</a>, and add columns and tables that already exist in the external database to the connection. This feature is now GA and on by default. Refer to <a href="{{ site.baseurl }}/admin/ts-cloud/tml.html#syntax-tables">ThoughtSpot Modeling Language</a> and specify the <code>connection</code> information when adding tables or table columns to an Embrace connection.
</ul>
</dd></dlentry>

</dl>

<h3><a id="april-cloud-business-user"></a>For the Business User</h3>

<h3><a id="april-cloud-data-engineer"></a>For the Data Engineer</h3>

<h3><a id="april-cloud-it-ops-engineer"></a>For the IT Ops Engineer</h3>

<dl>

<dlentry id="">
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
<p>See <a href="{{ site.baseurl }}/reference/api/tml-api.html">TML APIs</a>.</p></dd></dlentry>

</dl>
