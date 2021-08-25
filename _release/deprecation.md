---
title: ["Deprecation announcements"]
last_updated: 6/9/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot sometimes deprecates existing features and replaces them with new and more effective means to use our products.  In this article, we give you advance notice of features we are discontinuing in future releases.

Please [contact](https://community.thoughtspot.com/customers/s/contactsupport) your Customer Success or SRE team for clarification.

{: id="de-support-7-0"}
## De-supported in 7.0

The 7.0 release of ThoughtSpot Software, targeted for March 2021 (LA) and June 2021 (GA), will drop support for  **SearchIQ**. This feature was always in Beta, and was never deployed on production environments.

As we move to ThoughtSpot Cloud, we incorporate and further enrich the affordances of SearchIQ in Ask Answers features, and in an enhanced experience with our Home page.

{: id="de-support-7-1"}
## De-supported in 7.1

The 7.1 release of ThoughtSpot Software, targeted for July 2021 (LA) and Oct 2021 (GA), will drop support for  **Instant Insights**.

As we move to ThoughtSpot Cloud, our automated insights strategy is progressively more focused and prioritized around Monitor, where users get _personalized_ insights in the metrics that are important to them.

Instant Insights currently appear in four (4) areas of our product:

- Home Page: Did you know
- Search: under the answer
- Pinboard: Pinboard Insights at the top of the pinboard
- Worksheet and Table: the Spotiq Insights tab

The current Instant Insights feature works only in on-prem deployments that use our internal database, Falcon. Embrace and cloud deployments do not support Instant Insights.  

{: id="de-support-7-1-1"}
## Deprecated in 7.1.1
The 7.1.1 release of ThoughtSpot Software, targeted for November 2021 (GA), will deprecate the following features. ThoughtSpot will drop support for these features in a later release. If you have the new Answer experience turned on in 7.1.1, these features are de-supported in 7.1.1. To use these features, turn the new Answer experience off.

<dl>
<dlentry><dt>Multiple join path resolution within the formula editor or a search</dt>
<dd>When you try to search on columns with more than one possible join path, the system no longer allows you to define the join path within the search. Similarly, when you try to create a formula with columns with more than one possible join path, the system does not allow you to define the join path. Instead, the system now prompts you to resolve this issue and avoid confusion or incorrect data by creating a Worksheet with the correct join path.</dd></dlentry>
<dlentry><dt>Send feedback</dt>
<dd>The option to send product feedback, from the more options menu <img src="{{ site.baseurl }}/images/icon-more-10px.png" alt="more options menu icon" class="inline"/> on an Answer or search.</dd></dlentry>
<dlentry><dt>Client-side summaries for tables</dt>
<dd>We consolidated client-side column summaries and headlines from the backend into new headline summaries that come from the backend. These headline summaries are integrated with the table columns. You can pin them to Pinboards.</dd></dlentry>
<dlentry><dt>R integration</dt>
<dd><p>R integration is not available in the new Answer experience at this time. We plan to add support for R in the new Answer experience in a future release.</p>
<p>ThoughtSpot continues to support R for all customers who currently include R charts in their solutions on the ThoughtSpot Software deployments; please continue to use the classic Answer experience.</p>
{% include tip.html content="We support R only in Falcon deployments (data imported into ThoughtSpot), and R integration is disabled by default. It is not available when creating connections and linking to external databases in real time." %}</dd></dlentry>
</dl>

{: id="de-support-7-1-1"}
## De-supported in 7.1.1
The 7.1.1 release of ThoughtSpot Software, targeted for November 2021 (GA), will drop support for the following features.

<dl><dlentry><dt>Learn how to use ThoughtSpot Pinboard</dt>
<dd>This Pinboard contains search replays created in the system. The Replay Search feature is also de-supported in 7.1.1. Customers currently use <strong>Replay search</strong> and the <strong>Learn how to use ThoughtSpot Pinboard</strong> to learn how to use ThoughtSpot's search on data. As an alternative, starting in 7.0.1, use <a href="https://docs.thoughtspot.com/7.0/end-user/onboarding/search-assist.html">Search Assist</a> to learn how to use ThoughtSpot search on <a href="https://docs.thoughtspot.com/7.0/admin/worksheets/search-assist-coach.html">your company's data</a>.</dd></dlentry>
<dlentry><dt>Replay search</dt>
<dd>This feature allowed you to replay the search used to create an Answer. As an alternative, starting in 7.0.1, use <a href="https://docs.thoughtspot.com/7.0/end-user/onboarding/search-assist.html">Search Assist</a> to learn how to use ThoughtSpot search on <a href="https://docs.thoughtspot.com/7.0/admin/worksheets/search-assist-coach.html">your company's data</a>.</dd></dlentry>
<dlentry><dt>Ask an Expert</dt>
<dd>This feature allowed users to ask a designated expert on a particular data source for help when they run into an issue with an Answer or search they created on that data source. Starting in 7.0.1, users can learn about specific data sources in a different way, by completing <a href="https://docs.thoughtspot.com/7.0/end-user/onboarding/search-assist.html">Search Assist</a> sample queries on their own data sources.</dd></dlentry>
</dl>
