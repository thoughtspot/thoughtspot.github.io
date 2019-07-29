---
title: ["5.3 Release Notes"]
toc: false
keywords: "release notes"
last_updated: July 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.3 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [5.3 New Features](#53-new)
* [5.3 Fixed Issues](#53-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.3 release
directly:

* 5.0.x to 5.3
* 5.1.x to 5.3

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.0.x or version 5.1.x, and then to the 5.3 release.

Note that release must include the upgrade of all user profiles to include a valid, domain-specific email address. We block the upgrade if all users don't have valid emails.



{: id="53-new"}
## 5.3 New Features and Functionality

### Onboarding

In this release, we introduce user onboarding, which enables anyone to master the features they need in a very short time.

To learn how to set-up user onboarding, see [Onboarding Users]({{ site.baseurl }}/end-user/onboarding/intro-onboarding.html).

To include users in the onboarding process, each user profile must include a valid email address; see [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-user-ui).

When you create a new user, we recommend that you add them to a user group immediately. Configure that user group to use a specific data source, choose up to three initial pinboards, and specify the text of the welcome email.

To configure the email protocols necessary for onboarding, the administrator must also specify the onboarding configuration for the cluster. See the reference information for the [tscli onboarding command]({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-onboarding).

Finally, see the general overview of [How onboarding works for the user]({{ site.baseurl }}/end-user/onboarding/user-onboarding-experience.html).

### Management Console
The Management Console is now available in beta.  

Using the Management Console that is part of the ThoughtSpot Admin page, the administrators can manage, configure, monitor, and upgrade clusters. To enable this feature, contact ThoughtSpot Support. For more information, see [About Management Console]({{ site.baseurl }}/admin/setup/intro.html#about-management-console).

### Mandatory user emails

To upgrade to this release, all users must have a valid email in ThoughtSpot. We block the upgrade if all users don't have valid emails.

Before this release, the email field was not mandatory. See changes to [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-a-user-through-the-interface). To make bulk updates to emails, see [Configure LDAP for Active Directory]({{ site.baseurl }}admin/setup/LDAP-config-AD.html).

### Amazon S3 persistent storage option

You can now reduce the cost of an AWS deployment by using S3 for storage of major services like the ThoughtSpot database and search engine.  For more information, see [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html#).

### Pinboard export in PDF format

You can now download a pinboard in PDF format, without downloading each visualization separately. PDF files replicate the pinboard layout by default. Alternatively, you can choose to have each visualization on its own page. For more information, see [Download a pinboard as PDF]({{ site.baseurl }}/end-user/pinboards/download-pinboard-pdf.html).

### Pinboard presentation in full screen

We enhanced the presentation experience to show ThoughtSpot pinboards like a typical slide deck. This release features better navigation and presentation controls. See [Present a pinboard as a slideshow]({{ site.baseurl }}/end-user/pinboards/start-a-slideshow.html).

### New candlestick chart type

We added a new chart that shows price movements of financial instruments. You can adapt it to show other probability distribution information.  See [Candlestick chart]({{ site.baseurl }}/end-user/search/candlestick-charts.html).

### SpotIQ comparative analysis

SpotIQ Analysis now supports more complex measurements:  
* _Sum over sum_ and _Average_ use 'what-if' percentage insights.  
* _Unique count_  uses a 'versus' analysis to highlight absolute change grouped by different drill attributes  

See [SpotIQ Comparative Analysis]({{ site.baseurl }}/spotiq/spotiq-comparative-analysis.html).

### SpotIQ simplified feedback

We simplified feedback for insights and analysis to use fewer questions. These questions are now more relevant to the specific insight. See [Insight Feedback]({{ site.baseurl }}/spotiq/insight-feedback.html).

### Explore Search

With **Explore**, existing pinboards lead you to deeper insights through a multi-step discovery process. A single click generates a new chart, which leads to further exploration. See [Explore]({{ site.baseurl }}/end-user/search/explore.html).

### Schema and Join Information

You can now see the schema information and join information at the same time, under the **Schema** tab of each table, worksheet, and view. For an example, see [Modify joins within a worksheet]({{ site.baseurl }}/admin/worksheets/mod-ws-internal-joins.html).

### Drivers

As of this release, ThoughtSpot no longer supports Solaris installations.  
We also updated our drivers; see [Downloads]({{ site.baseurl }}/release/downloads.html).

{: id="53-fixed"}
## 5.3 Fixed Issues


{: id="notes-for-older-versions"}
## Notes from older versions

* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
