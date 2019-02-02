---
title: ["5.1 Release Notes"]
toc: false
keywords: "release notes"
last_updated: Jan 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.1 is now available. These release notes include information about new features,
resolved issues from the previous releases, and known issues.

* [5.1 New Features](#51-new)
* [5.1 Fixed bugs](#51-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following version, you can upgrade to 5.1 release directly.

* 4.4.1.x to 5.0
* 4.5. to 5.0
* 4.5.1.x to 5.0
* 5.0.x to 5.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you need to do a multiple pass upgrade.
First, upgrade to one of the above versions, and then to 5.1 release.

{: id="51-new"}
## New Features and Functionality

### Schema Viewer available to non-admin users

Starting 5.1 release, you can grant non-admin users with Can manage data
privilege access to Schema Viewer. This enables non-admin users to view data in
a schema they have access to.

### Period to date

Before 5.1, Period to Date didn't work in conjunction with other date filters.
With this release, you can compare data spread across the same period and drill
down to a specific period of a year, month, week, and date. For example, you can
compare Quarter to Date vs Last Year Quarter to Date, Month-to-date vs the Last
Month-to-date, Year-to-date vs Last Year Month-to-date, Week-to-date vs Last
Quarter WTD.

### Case sensitivity on formulas is supported

You can now enable case sensitivity when defining formulas, and the final
formula output retains the case sensitive state. Quoted texts in a formula can
now be case-sensitive. For example, "`if revenue > 1000 then 'Good' else 'Bad'`".
The output of this formula retains the case.

### Only authenticated users have access

Prior to 5.1 release, the application used JSESSIONID to track user sessions and
control access to the application, however not all URL’s are protected from
unauthenticated access. Certain URL’s are accessible without a valid JSESSIONID
cookie. This has been fixed. Only authenticated users have access.

### New typography in the desktop app

With the 5.1 release, the fonts used are Optimo Plain and BB Roller Mono. This
provides a modern, more readable look for the application user interface and
data visualizations.

### Presentation mode supported

You can display SpotIQ Pinboards, saved answers over projector screen by
switching to presentation mode. This enables full-screen mode for pinboards to
be easily displayed on projectors in conference rooms and on laptops.

1. Choose a pinboard that you want to display and click the **present** icon ![present icon]({{ site.baseurl }}/images/icon-present.png){: .inline} (top-right).

   Alternatively, you can click the ellipses ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Present**.

2. Use the **Up** and **Down** arrow keys to navigate.

### Pie charts now support color customization

You can now [customize the colors of each slice on pie charts]({{ site.based}}/end-user/search/change-chart-colors.html#set-pie-chart-slice-colors) from the chart Styles panel. Click the Styles button next to any pie chart to get started (![paintbrush icon]({{ site.baseurl }}/images/icon-paintbrush.png){: .inline}).

### Improved search suggestions

Search suggestions are now more stable. When you start to type a search term and
the full matching term appears in the results list, the order in which it
appears does not change as you finish typing the term. Any additional
suggestions, available by clicking ‘more’ at the bottom of the list, are added
to the bottom of the list without moving any of the initial suggestions.

When there are four or more instances of a specific match, they are added to a
folded list ( icon) and the number of additional instances is displayed with a
plus sign (Example: 4+ matches). When you click the folded list, it expands to
show all the matches in that folded list.

### Table aggregate headline

The Table Aggregate headline option is available when an aggregate function is
used in a table either through a formula or a search bar query, like the average
of a measure. It recalculates the function for the entire table. In such cases,
the Table Aggregate is shown by default below the table, instead of the “Avg”
option, which does a second level of aggregation on top of the existing
aggregation.

### Longer pinboard descriptions

Table or chart descriptions in a pinboard can now be up to two lines long.
Descriptions that exceed a second line are truncated with three periods (...) at
the end. Headline tiles (which don’t have a table or chart) are limited to a
one-line description.

### SpotIQ personalization

Users can specify "Insight Threshold Settings" as part of their individual
profile [SpotIQ preferences]({{ site.baseurl}}/end-user/introduction/about-user.html#spotiq-preferences-and-email-notifications) to further refine the parameters SpotIQ uses. SpotIQ
profile preferences are a subset of those available on the SpotIQ "Customize
analysis dialog", and persist for all SpotIQ analyses, unless you explicitly
reset options for custom analyze.

### SpotIQ insight feedback

Administrators can save user feedback and use it to suppress down-voted insights
from auto or custom SpotIQ analyses.

### SpotIQ column level data modeling

Data modelers and administrators can [exclude columns from SpotIQ analyses]({{ site.baseurl }}/admin/data-modeling/spotiq-data-model-preferences.html) via a
new SPOTIQ PREFERENCE option on the Data tabs for worksheets, tables or views.
By default, all columns are included in SpotIQ analyses.

### Active Directory (AD) management for ThoughtSpot nodes

ThoughtSpot supports enabling [Active Directory (AD) based access]({{ site.baseurl}}/admin/setup/active-directory-based-access.html) individually on
each node where the commands are run. To enable AD access on a cluster, the
administrator must run the same commands on each individual node and on any
additional nodes added to the cluster.

### Show rounded or non rounded numbers on charts

You can set labels on charts to [show rounded or non rounded numbers]({{ site.baseurl}}/end-user/search/show-data-labels.html#show-rounded-or-non-rounded-numbers).

### Keyword support for eight new languages / locales (Beta)

Beta mode [internationalization (I18N) keywords support]({{ site.baseurl}}/reference/keywords.html) for the following additional locales is available in version 5.1:

* Español (España)
* Português (Portugal)
* Italiano
* Dansk
* Suomi
* Svenska
* Norsk
* Nederland

{: id="51-fixed"}
## 5.1 Fixed Issues

X and Y axis were previously flipped on [bar charts and stacked bar charts]({{ site.baseurl }}/end-user/search/about-bar-charts.html). This has been fixed.

{: id="notes-for-older-versions"}
## Notes from older versions

* [5.0 Release Notes]({{ site.baseurl}}/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes]({{ site.baseurl}}/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes]({{ site.baseurl}}/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes]({{ site.baseurl}}/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes]({{ site.baseurl}}/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
