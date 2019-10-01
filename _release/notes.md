---
title: ["5.3 Release Notes"]
toc: false
last_updated: July 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.3.1 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [5.3.1 New Features](#531-new)
* [5.3.1 Fixed Issues](#531-fixed)
* [5.3 New Features](#53-new)
* [5.3 Fixed Issues](#53-fixed)
* [Beta Programs](#beta-program)
* [Notes from Older Versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.3<!--.1--> release
directly:

* 5.3 to 5.3.1
* 5.2.x to 5.3.1
* 5.1.x to 5.3.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.1.x, version 5.2.x, or version 5.3, and then to the 5.3.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}

{: id="531-new"}
## 5.3.1 New Features and Functionality

### Streamlined AWS data loading from an S3 bucket
You can now load data from an S3 bucket into your ThoughtSpot AWS instance faster than ever before. By assigning an AWS IAM role to your instance which has read-only access to your S3 bucket, you no longer have to enter S3 credentials or root when loading data. For more information, see [Loading data from an AWS S3 bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-an-aws-s3-bucket)

{: id="531-fixed"}
## 5.3.1 Fixed Issues

An issue when using a custom calendar where a query that filters on a date field causes a database error is now fixed.

A problem where signing in to ThoughtSpot multiple times in quick succession causes a 500 error is now fixed.

An issue when row-level security is used, where a 2-column join in a fan-trap query does not work if the column contains NULL data/values is now fixed.

A problem where opening certain pinboards can cause the Google Chrome browser to freeze is now fixed.

An issue where columns renamed in a worksheet revert back to their original names later is now fixed.

A problem where columns cannot be deleted from a worksheet is now fixed.

An issue in custom calendar where filtering the date values by year, month or quarter does not work is now fixed.

A problem where Canadian postal codes do not appear on maps is now fixed.

An issue where the Admin > Style Customization page indicates the wrong pixel dimensions required for a wide application logo is now fixed.

{: id="53-new"}
## 5.3 New Features and Functionality

### Onboarding
In this release, we introduce user Onboarding, which communicates the value of ThoughtSpot to new users through a streamlined learning experience with default pinboards.

- To learn how to configure user onboarding, see [Onboarding Users]({{ site.baseurl }}/end-user/onboarding/intro-onboarding.html).

- To include users in the onboarding process, each user profile must include a valid email address. See [Create a user through the interface]({{ site.baseurl }}/admin/users-groups/add-user.html#create-user-ui).

- When you create a new user, we recommend that you add them to a user group immediately. Configure that user group to use a specific data source, choose up to three initial pinboards, and specify the text of the welcome email.

- To configure the email protocols necessary for onboarding, the administrator must also specify the onboarding configuration for the cluster. See the reference information for the [tscli onboarding command]({{ site.baseurl }}/reference/tscli-command-ref.html#onboarding).

- See the general overview of [How onboarding works for the user]({{ site.baseurl }}/end-user/onboarding/user-onboarding-experience.html).  

### ThoughtSpot mobile

Our brand new mobile app is now available for customers with ThoughtSpot 5.1 or later. For more information about what you can do with it, see [mobile app features]({{ site.baseurl }}/admin/mobile/use-mobile.html#). For more information about how to deploy it, see [deploy mobile app]({{ site.baseurl }}/admin/mobile/deploy-mobile.html#).

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

See [Comparative Analysis]({{ site.baseurl }}/spotiq/spotiq-comparative-analysis.html).

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

{: id="53-fixed"}
## 5.3 Fixed Issues

### Display and Rendering

- A problem where dates do not display properly in the query details pane of an answer is now fixed.  
- An issue where the color coding of columns is not displayed in a PDF downloaded from a worksheet is fixed.  
- A problem where using **Copy and edit** in a saved answer causes the screen to go blank has been fixed.  
- An issue where axis labels are missing from some visualizations is now fixed.  
- A problem where URLs that appear within an Answer are red, instead of blue, is now fixed.  
- An issue where an answer that has no measures causes it to display blank is now fixed.  
- A problem where weekly and monthly charts are not showing weekly and monthly aggregation correctly is now fixed.

### Pinboards

- A problem where the column tooltip in a pinboard does not show last updated information has been fixed.  
- An issue where the filter dialog box is unresponsive when opened from pinboard is now fixed.  
- A problem when pinning an answer to a pinboard where the pinboard list is very slow to display is now fixed.  
- An issue where scheduled pinboard emails fail to send to a specific recipient with a valid email address is now fixed.  
- A problem where a stacked bar chart does not work in a pinboard is now fixed.  
- An issue where an exclude filter does not work properly on a pinboard is now fixed.  
- A problem where a user cannot edit a pinboard, even though they have the proper permissions to do so is fixed.  
- An issue where emails fail to send from scheduled pinboards that contain Japanese characters in their title is now fixed.

### Search

- A problem where nulls are excluded from a query, even when they have not been excluded using a filter is now fixed.  
- An issue where searches on a pinboard don’t include cached queries has been fixed.  

### Administration

- An issue where running the `tscli cluster` command causes a failed security check is now fixed.   
- A problem where the Informatica ODBC cannot connect to ThoughtSpot is now fixed.<br>

### Answers

- A problem where a saved answer cannot be opened when it uses an aggregate function is now fixed.

{: id="beta-program"}
## Beta Programs
If you are interesting in testing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators...
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.
These features are currently in Beta. Please contact us if you are interested in participating.
- [SearchIQ](mailto:BetaProram@thoughtspot.com?subject=SearchIQ%20Beta%20Program%20Request)
- [Explore](mailto:BetaProram@thoughtspot.com?subject=Explore%20Beta%20Program%20Request)
- [Embrace](mailto:BetaProram@thoughtspot.com?subject=Embrace%20Beta%20Program%20Request)

{: id="notes-for-older-versions"}
## Notes from Older Versions

* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
