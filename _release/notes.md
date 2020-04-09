---
title: ["5.3 Release Notes"]
toc: false
last_updated: 04/09/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 5.3.2 CU3 is now available.
These are the new and enhanced features in this release.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

* [Supported Upgrade Paths](#upgrade-paths)
* [5.3.1 New Features](#531-new)
* [5.3 New Features](#53-new)
* [Beta Programs](#beta-program)

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.3.2 release
directly:

* 5.3 to 5.3.2 CU3
* 5.2.x to 5.3.2 CU3
* 5.1.x to 5.3.2 CU3

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.1.x, version 5.2.x, or version 5.3.x, and then to the 5.3.2 CU3 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade blocks." %}

{: id="531-new"}
## 5.3.1 New Features and Functionality

For a complete list of issues that we fixed in this release, see [5.3.1 Fixed issues]({{ site.baseurl }}/release/fixed.html#5-3-1).

### Onboarding
In this release, administrators can configure 'Welcome' emails to send to both new and existing users, and to existing groups. See [Edit a group]({{ site.baseurl }}/admin/users-groups/add-group.html#edit-group) and
[Create a user]({{ site.baseurl }}/admin/users-groups/add-user.html#create-a-user-through-the-interface).

### Embrace
**ThoughtSpot Embrace is in beta.**
In Release 5.3.1, you can connect to multiple Snowflake databases, and get faster querying results. We also made improvements to the connection configuration. See [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Pinboard export in PDF format has branding, and more
We enhanced the presentation experience even more. You can now brand the PDF with your own logo, add pagination, and supply footer text. When using the _Visualizations_ mode, you can de-select some of the visuals. See [Download a Pinboard as PDF]({{ site.baseurl }}/end-user/pinboards/download-pinboard-pdf.html).

### Streamlined AWS data loading from an S3 bucket
You can now load data from an S3 bucket into your ThoughtSpot AWS instance faster than ever before. By assigning an AWS IAM role to your instance which has read-only access to your S3 bucket, you no longer have to enter S3 credentials when loading data. For more information, see [Loading data from an AWS S3 bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket)

### Updated password requirements
This release added password requirements for new and existing users. When a user changes their password or an administrator adds a new user, ThoughtSpot requires a more complex password. Your password must contain three of the following: uppercase letters A-Z, lowercase letters a-z,  special characters !#$ etc, numbers 0-9. Your password must be at least eight characters long.

{: id="53-new"}
## 5.3 New Features and Functionality

For a complete list of issues that we fixed in this release, see [5.3 Fixed issues]({{ site.baseurl }}/release/fixed.html#5-3).

### Onboarding
In this release, we introduce user Onboarding, which communicates the value of ThoughtSpot to new users through a streamlined learning experience with default pinboards.

- To learn how to configure user onboarding, see [Onboarding Users]({{ site.baseurl }}/end-user/onboarding/intro-onboarding.html).
- To include users in the onboarding process, each user profile must include a valid email address. See [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-user-ui).
- When you create a new user, we recommend that you add them to a user group immediately. Configure that user group to use a specific data source, choose up to three initial pinboards, and specify the text of the welcome email.
- To configure the email protocols necessary for onboarding, the administrator must also specify the onboarding configuration for the cluster. See the reference information for the [tscli onboarding command]({{ site.baseurl }}/reference/tscli-command-ref.html#onboarding).
- See the general overview of [How onboarding works for the user]({{ site.baseurl }}/end-user/onboarding/user-onboarding-experience.html).  

### ThoughtSpot mobile

Our mobile app is available for customers with ThoughtSpot 5.1 or later.

Mobile version 1.1.2 now supports auto-redirect Single Sign-On (SSO) for configured clusters.

For more information about what you can do with it, see [mobile app features]({{ site.baseurl }}/admin/mobile/use-mobile.html#). For more information about how to deploy it, see [deploy mobile app]({{ site.baseurl }}/admin/mobile/deploy-mobile.html#).

### Mandatory user emails

To upgrade to this release, all users must have a valid email in ThoughtSpot. We block the upgrade if all users don't have valid emails.

Before this release, the email field was not mandatory. See changes to [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-a-user-through-the-interface). To make bulk updates to emails, see [Configure authentication through Active Directory]({{ site.baseurl }}/admin/setup/LDAP-config-AD.html).

### Amazon S3 persistent storage option

You can now reduce the cost of an AWS deployment by using S3 for storage of major services like the ThoughtSpot database and search engine.  For more information, see [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html#).

### Embrace

**ThoughtSpot Embrace is in beta.**

With ThoughtSpot Embrace, you can perform live queries against an external data repository without caching it in ThoughtSpot. You can then analyze the data and create visualizations in ThoughtSpot.

There are two modes for using Embrace:
- Linked tables provide real-time access to external data.
- Synced tables enable you to bring select tables into the ThoughtSpot internal database.

You can easily switch between Synced and Linked operation modes.

You can also schedule automatic updates that refresh the synced data

For more information, see [About ThoughtSpot Embrace]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Pinboard export in PDF format

You can now download a pinboard in PDF format, without downloading each visualization separately. PDF files replicate the pinboard layout by default. Alternatively, you can choose to have each visualization on its own page. For more information, see [Download a pinboard as PDF]({{ site.baseurl }}/end-user/pinboards/download-pinboard-pdf.html).

### Pinboard presentation in full screen

We enhanced the presentation experience to show ThoughtSpot pinboards like a typical slide deck. This release features better navigation and presentation controls. See [Present a pinboard as a slideshow]({{ site.baseurl }}/end-user/pinboards/start-a-slideshow.html).

### New candlestick chart type

We added a new chart that shows price movements of financial instruments. You can adapt it to show other probability distribution information.  See [Candlestick charts]({{ site.baseurl }}/end-user/search/candlestick-charts.html).

### SpotIQ comparative analysis

SpotIQ Analysis now supports more complex measurements:  
* _Sum over sum_ and _Average_ use 'what-if' percentage insights.  

See [Comparative Analysis]({{ site.baseurl }}/spotiq/comparative-analysis.html).

### SpotIQ simplified feedback

We simplified feedback for insights and analysis to use fewer questions. These questions are now more relevant to the specific insight. See [Insight Feedback]({{ site.baseurl }}/spotiq/insight-feedback.html).

### SearchIQ optimization and other enhancements

**SearchIQ is in Beta.**  We made significant improvements in setup of SearchIQ and its ability to interpret natural language queries. See [Optimize SearchIQ]({{ site.baseurl }}/end-user/search/searchiq-optimize.html).

### Schema and join information

You can now see the schema information and join information at the same time, under the **Schema** tab of each table, worksheet, and view. For an example, see [Modify joins within a worksheet]({{ site.baseurl }}/admin/worksheets/mod-ws-internal-joins.html).

### New geo map support
<!--SCAL-48652-->
Starting with this release, ThoughtSpot supports geo maps for these countries and regions:
 - United Kingdom: Zip Code
 - Sweden: Postal Code

 See [Geo Map Reference]({{ site.baseurl }}/reference/geomap-reference.html).

### Drivers

As of this release, ThoughtSpot no longer supports Solaris installations.  
We also updated our drivers; see [Downloads]({{ site.baseurl }}/release/downloads.html).

{: id="beta-program"}
## Beta Programs
If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators...
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.
These features are currently in Beta. Please contact us if you are interested in participating:
- Email <a href="mailto:BetaProgram@thoughtspot.com?subject=Explore%20Beta%20Program%20Request" target="_blank">Explore Beta Program</a> for AI-enabled guidance to deeper data insights.
- Email <a href="mailto:BetaProgram@thoughtspot.com?subject=Embrace%20Beta%20Program%20Request" target="_blank">Embrace Beta Program</a> to query external databases, like Snowflake.
