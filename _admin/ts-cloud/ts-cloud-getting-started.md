---
title: [Getting Started with ThoughtSpot Cloud]
last_updated: 11/05/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

As the first user on the account, you have to complete the following steps before other people can dig into your organization’s data.

## Before you begin

Before you start, review these talks to identify your ideal use case. The context helps you make account-related decisions and use ThoughtSpot effectively.

<div><iframe width="375" height="210" src="https://www.youtube.com/embed/_HqB__xe3bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
<a href="https://youtu.be/_HqB__xe3bo" target="_blank">ThoughtSpot Success Series: Defining a ThoughtSpot Use Case</a>
</div>
<br/>
<div><iframe width="375" height="210" src="https://www.youtube.com/embed/W5dwAmLSwT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
<a href="https://youtu.be/W5dwAmLSwT0"  target="_blank">ThoughtSpot Success Series: Use Case Prioritization</a>
</div>

We highly recommend that you register for the free ThoughtSpot U course that covers the material in this section, [Getting Started with ThoughtSpot Analytics Cloud](https://training.thoughtspot.com/getting-started-with-thoughtspot-cloud){: target="_blank"}.

We also provide these instructions in <a href="{{ site.baseurl }}/downloads/ts-cloud-get-started.pdf" download>PDF format</a>.

## Step 1: Create a ThoughtSpot Community account

A ThoughtSpot Community account lets you ask questions in our product forums, explore best practices from other customers, sign up for events, and contact support.

[Create a Community account](https://community.thoughtspot.com/customers/s/login/SelfRegister){:target="_blank"}

## Step 2: Activate your ThoughtSpot Cloud account

We will send you an email that contains the administrator credentials to log in for the first time. Check your inbox, then navigate to your new cluster. Stay logged in to complete the rest of the setup.

## Step 3: Create users and groups, choose authentication method

Review the available user groups and privileges so you can assign people to the correct roles. We recommend that you create admins and analysts in this step, especially if you plan to collaborate on the remaining data setup.

- [Understanding privileges]({{site.baseurl}}/end-user/introduction/about-privileges-end-user.html){:target="_blank"}
- [Data security]({{site.baseurl}}/admin/data-security/sharing-security-overview.html){:target="_blank"}
- [Managing authentication with SAML]({{site.baseurl}}/admin/ts-cloud/authentication-integration.html){:target="_blank"}
- [Managing local authentication]({{site.baseurl}}/admin/ts-cloud/authentication-local.html){:target="_blank"}

## Step 4: Connect to your data source
Completing this step lets all users in your organization perform live queries. Choose your cloud data warehouse type, and follow the connection instructions.
- [Amazon Redshift]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-redshift.html){:target="_blank"}
- [Azure Synapse]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-synapse.html){:target="_blank"}
- [Databricks]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-databricks.html){:target="_blank"}
- [Google BigQuery]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-gbq.html){:target="_blank"}
- [Oracle ADW]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-adw.html){:target="_blank"}
- [SAP HANA]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana.html){:target="_blank"}
- [Snowflake]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-snowflake.html){:target="_blank"}
- [Starburst]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-starburst.html){:target="_blank"}
- [Teradata]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-teradata.html){:target="_blank"}

## Step 5: Model your data for searches

ThoughtSpot automatically optimizes your data for search. It models and configures most details. However, we recommend that you adjust the modeling settings to align with your identified use cases, and improve the experience for other users.

- [Data modeling]({{site.baseurl}}/admin/data-modeling/about-data-modeling-intro.html){:target="_blank"}
- [Join tables]({{site.baseurl}}/admin/ts-cloud/tables-join.html){:target="_blank"}

## Step 6: Create a worksheet

Worksheets make it easier for everyone in your organization to search data and create visualizations. Use the following step-by-step instructions to create your first worksheet.

- [Create and use worksheets]({{site.baseurl}}/admin/worksheets/about-worksheets.html){:target="_blank"}

## Step 7: Learn search essentials

After you finish creating worksheets, you are ready to search. Review the key concepts to get started, and how to help others in your organization become effective searchers.

- [Search overview]({{site.baseurl}}/end-user/search/search-overview.html){:target="_blank"}
- [Keyword reference]({{site.baseurl}}/reference/keywords.html){:target="_blank"}
- [Understanding Charts]({{site.baseurl}}/end-user/search/about-charts.html){:target="_blank"}
- [Understanding formulas in searches]({{site.baseurl}}/complex-search/add-formula-to-search.html){:target="_blank"}

## Step 8: Make a default Liveboard

Liveboards are interactive collections of charts and tables. Set up a shared Liveboard now, so everyone who joins your organization can access valuable information.

- [Basic Liveboard usage]({{site.baseurl}}/end-user/pinboards/about-pinboards.html){:target="_blank"}

## Step 9: Onboard your colleagues

Any time you create a new user, immediately add them to a user group. Configure that user group to use a specific data source, choose initial Liveboards, and specify the text of the person’s welcome email. We recommend that you also prepare a support strategy for data-specific questions.

- [Onboarding users]({{site.baseurl}}/end-user/onboarding/intro-onboarding.html){:target="_blank"}

## Step 10: Track your organization’s usage

ThoughtSpot administrators have built-in Liveboards to monitor adoption and usage.

- [Performance tracking Liveboard]({{site.baseurl}}/admin/ts-cloud/performance-tracking.html){:target="_blank"}
- [User adoption Liveboard]({{site.baseurl}}/admin/ts-cloud/user-adoption.html){:target="_blank"}

## Keep learning

- [ThoughtSpot Cloud documentation](https://cloud-docs.thoughtspot.com){:target="_blank"}
- [Training: Getting started with ThoughtSpot Analytics Cloud](https://training.thoughtspot.com/getting-started-with-thoughtspot-cloud){:target="_blank"}
- [Thoughtspot Success Series](https://youtu.be/EYHa8Ck3tdw){:target="_blank"}

## Get connected

- [Visit YouTube channel](https://www.youtube.com/thoughtspot){:target="_blank"}
- [Schedule office hours](https://thoughtspotcs-officehours.youcanbook.me/){:target="_blank"}
- [Join upcoming events](https://groups.thoughtspot.com/events/#/list){:target="_blank"}
