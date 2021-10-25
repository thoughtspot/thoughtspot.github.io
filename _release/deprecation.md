---
title: ["Deprecation Announcements"]
last_updated: 9/29/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot sometimes deprecates existing features and replaces them with new and more effective means to use our products.  In this article, we give you advance notice of features we are discontinuing in future releases.

<!--

Use following notes above feature that is deprecated. Send a link back to this document for a fuller description.
{% include deprecation.html content="This feature is now deprecated. You may not use it starting with release 7.1. For details, see Deprecation Announcements." %}

-->
{: id="de-support-january-cloud"}
## De-supported in January Cloud

The January Cloud release of ThoughtSpot Software, targeted for January 2022 (GA), will drop support for the following feature:

<dl>
<dlentry><dt>Business user onboarding</dt>
<dd>ThoughtSpot will replace the current business user onboarding (present in November Cloud 2021 and earlier) with a new onboarding flow. The new onboarding flow directs new users to Search Assist, where they can complete sample searches on <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist.html">demo data</a> or <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">their company's data</a>.</dd></dlentry>
</dl>

{: id="de-support-august-cloud"}
## De-supported in August Cloud

The August Cloud release of ThoughtSpot Software, targeted for August 2021 (GA), will drop support for the following feature:

<dl>
<dlentry><dt>Ask an Expert</dt>
<dd>This feature allowed users to ask a designated expert on a particular data source for help when they run into an issue with an Answer or search they created on that data source. Now, users can learn about specific data sources in a number of different ways, such as <a href="{{ site.baseurl }}/end-user/search/search-answers.html">searching across existing Answers and Pinboards</a>, or completing <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">Search Assist</a> sample queries on their own data.</dd></dlentry>
</dl>

{: id="de-support-may-cloud"}
## De-supported in May Cloud

The May Cloud release of ThoughtSpot Software, targeted for May 2021 (GA), will drop support for the following features:

<dl><dlentry><dt>Home page shortcuts for Answers and Pinboards</dt>
<dd>In May Cloud, we are replacing this feature with the ability to <a href="{{ site.baseurl }}/end-user/thoughtspot-one/thoughtspot-one-homepage.html#quick-links">add important metrics from Pinboards to your watchlist</a> and track them from the home page. To quickly access your most-used Answers and Pinboards in May Cloud, favorite these objects and toggle <strong>My favorites</strong>.</dd></dlentry>
<dlentry><dt>Replay search</dt>
<dd>Customers currently use <strong>Replay search</strong> to learn how to use ThoughtSpot's search on data. As an alternative, use <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist.html">Search Assist</a> to learn how to use ThoughtSpot's search on data, either on demo data, or on <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">your company's data</a>.</dd></dlentry>
<dlentry><dt>Learn how to use ThoughtSpot Pinboard</dt>
<dd>This Pinboard contains search replays created in the system. The Replay Search feature is de-supported in May Cloud. Customers currently use <strong>Replay search</strong> and the <strong>Learn how to use ThoughtSpot Pinboard</strong> to learn how to use ThoughtSpot's search on data. As an alternative, use <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist.html">Search Assist</a> to learn how to use ThoughtSpot's search on data, either on demo data, or on <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">your company's data</a>.</dd></dlentry>
</dl>

{: id="deprecate-may-cloud"}
## Deprecated in May Cloud
The May Cloud release of ThoughtSpot Software, targeted for May 2021 (GA), will deprecate the following features. ThoughtSpot will drop support for these features in a later release. If you have the [new Answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html) <span class="badge badge-update">Beta</span> (off by default in May Cloud) turned on, these features are de-supported in May Cloud. To use these features, turn the new Answer experience off [individually]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html#toggle-on-off) from your profile or for your whole company by [contacting ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

<dl>
<dlentry><dt>Multiple join path resolution within the formula editor or a search</dt>
<dd>When you try to search on columns with more than one possible join path, the system no longer allows you to define the join path within the search. Similarly, when you try to create a formula with columns with more than one possible join path, the system does not allow you to define the join path. Instead, the system now prompts you to resolve this issue and avoid confusion or incorrect data by creating a Worksheet with the correct join path.</dd></dlentry>
<dlentry><dt>Send feedback</dt>
<dd>The option to send product feedback, from the more options menu <img src="{{ site.baseurl }}/images/icon-more-10px.png" alt="more options menu icon" class="inline"/> on an Answer or search.</dd></dlentry>
<dlentry><dt>Client-side summaries for tables</dt>
<dd>We consolidated client-side column summaries and headlines from the backend into new headline summaries that come from the backend. These headline summaries are integrated with the table columns. You can pin them to Pinboards.</dd></dlentry>
<dlentry><dt>Ask an Expert</dt>
<dd>This feature allowed users to ask a designated expert on a particular data source for help when they run into an issue with an Answer or search they created on that data source. Now, users can learn about specific data sources in a number of different ways, such as <a href="{{ site.baseurl }}/end-user/search/search-answers.html">searching across existing Answers and Pinboards</a>, or completing <a href="{{ site.baseurl }}/admin/ts-cloud/search-assist-coach.html">Search Assist</a> sample queries on their own data.</dd></dlentry>
</dl>
