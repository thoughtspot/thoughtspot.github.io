---
title: ["Deprecation Announcements"]
last_updated: 5/13/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot sometimes deprecates existing features and replaces them with new and more effective means to use our products.  In this article, we give you advance notice of features we are discontinuing in future releases.

<!--

Use following notes above feature that is deprecated. Send a link back to this document for a fuller description.
{% include deprecation.html content="This feature is now deprecated. You may not use it starting with release 7.1. For details, see Deprecation Announcements." %}

-->
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

{: id="de-support-7-2"}
## De-supported in 7.2

The 7.2 release of ThoughtSpot Software, targeted for Nov 2021 (LA), Feb 2022 (GA), will drop support for **R integration**.

Customers currently use R to generate custom charts. We plan to introduce a new feature, **Bring Your Own Charts**, for the 7.2 release.

The current integration with R works only in on-prem deployments that use our internal database, Falcon. Embrace and cloud deployments do not support Instant Insights.  
