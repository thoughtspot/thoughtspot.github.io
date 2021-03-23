---
title: ["7.0 Release Notes"]
toc: false
last_updated: 3/23/2021
sidebar: mydoc_sidebar
redirect_from:
- /6.3.0/release/notes.html
- /6.3.0.CU1/release/notes.html
- /6.3.1/release/notes.html
permalink: /:collection/:path.html
---
ThoughtSpot version 7.0 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [7.0 New Features](#7-0-new)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="7-0-new"}
## 7-0 New Features and Functionality

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [7.0 New Features](#7-0-new)
   * [For the Analyst](#7-0-analyst)
   * [For the Business User](#7-0-business-user)
   * [For the Data Engineer](#7-0-data-engineer)
   * [For the IT Ops Engineer](#7-0-it-ops-engineer)

{: id="7-0-analyst"}
### For the Analyst

<dl>
<dlentry id="simplified-join-creation">
<dt>Simplified join creation</dt>
<dd>This release makes creating and editing joins from a table more flexible and intuitive. Our new joins interface allows you to define and edit a join’s type and cardinality at the table level, where previously this was only possible at the Worksheet level. Refer to <a href="{{ site.baseurl }}/admin/worksheets/add-joins.html">Table joins</a>.</dd>
</dlentry>
</dl>

{: id="7-0-business-user"}
### For the Business User

<dl>
<dlentry id="internet-explorer">
  <dt>Deprecation of Internet Explorer</dt>
<dd>ThoughtSpot browser support for Internet Explorer is now deprecated. Refer to <a href="{{ site.baseurl }}/end-user/accessing.html">ThoughtSpot browser access</a> for a list of supported browsers.</dd>
</dlentry>

<dlentry id="information-center">
  <dt>Information Center</dt>
<dd>ThoughtSpot has a new Information Center, accessible from the help icon <img src="../images/icon-help-10px.png" alt="Help icon" class="inline"> next to your profile on the top navigation bar. This new help menu contains many useful resources, including a navigation overview, several training videos, and links to more help across the ThoughtSpot product, community, training, and documentation. Refer to <a href="{{ site.baseurl }}/end-user/help-center/what-you-can-find-in-the-help-center.html">More help and support</a>.</dd></dlentry>

</dl>

{: id="7-0-data-engineer"}
### For the Data Engineer

<dl>
<dlentry id="embrace">
<dt>Embrace</dt>
<dd>Embrace now supports Oracle Autonomous Database <span class="label label-beta">Beta</span>. This feature is in beta and disabled by default. To enable this feature, contact <a href="{{ site.baseurl }}/admin/misc/contact.html">ThoughtSpot Support</a>.
</dd>
<dd>Embrace now supports security passthrough for Snowflake using OAuth for authentication and authorization. For more information, see <a href="{{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html">Snowflake</a>.</dd>
</dlentry>
</dl>

{: id="7-0-it-ops-engineer"}
### For the IT Ops Engineer

<dl>
<dlentry id="consumption-based-pricing">
<dt>Consumption-based pricing</dt>
<dd>ThoughtSpot now offers consumption, or usage, based pricing. Refer to <a href="{{ site.baseurl }}/appliance/consumption-pricing.html">Consumption-based pricing</a> and the <a href="{{ site.baseurl }}/appliance/consumption-pricing-faq.html">Consumption pricing FAQ</a>. To compare consumption- and capacity-based pricing, refer to <a href="https://www.thoughtspot.com/pricing" target="_blank">ThoughtSpot pricing</a>.</dd>
</dlentry>
</dl>  

<!--{: id="beta-program"}
## Beta Programs

If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.-->

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 7.0 release
directly:

* 6.2.x
* 6.3.x to 7.0

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 6.2.x, or 6.3.x and then to the 7.0 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
