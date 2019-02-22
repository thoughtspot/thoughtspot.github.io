---
title: ["5.1 Release Notes"]
toc: false
keywords: "release notes"
last_updated: Jan 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 5.1.1 is now available. These release notes include information about new features,
resolved issues from the previous releases, and known issues.

* [5.1.1 New Features](#511-new)
* [5.1.1 Fixed bugs](#511-fixed)
* [5.1 New Features](#51-new)
* [5.1 Fixed bugs](#51-fixed)
* [Notes for older versions](#notes-for-older-versions)

## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 5.1.1 release
directly:

* 4.5.1.x to 5.1.1
* 5.0.x to 5.1.1
* 5.1 to 5.1.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to one of the above versions, and then to 5.1.1 release.

{: id="511-new"}
## 5.1.1 New Features and Functionality

### Data visualization color refinements

Visualization colors have been refined to match ThoughtSpot's new fresh and modern look. You can still customize colors and reset them to the default color palette later, if needed.

{: id="511-fixed"}
## 5.1.1 Fixed Issues

Console error that occurred from any click in the Microsoft Internet Explorer or Edge browsers when ThoughtSpot was embedded in a desktop application is now fixed.

Deprecated SSH cryptographic settings used in previous releases are no longer used. This ensures that a man-in-the-middle attacker cannot exploit vulnerabilities in those settings to record communication to decrypt the session key or  messages.

Geobubble map that always displayed labels that could not be turned off has now been fixed by adding a checkbox to enable/disable data labels.

Search autocomplete previously caused an error. This has been fixed.

There was a problem where query joins don't appear correct when using a formula that involves multiple dimensions. In that scenario, a chasm trap query is created that combines data from similar queries. This problem is now fixed.

A problem when attempting to mount drives using `tscli mount-*` is now fixed.

A problem when running SpotIQ Snapshot R analysis where it would display a blank screen when it found no data, is now fixed. If the analysis finds no data, the message "No data found" will be displayed.

A problem with SpotIQ snapshots that allowed the date picker to be used to select a date in the future is now fixed.

A problem where cross-origin resource sharing couldn't be enabled is now fixed.

Previously, the contextual (right-click) menu in a Pinboard presentation did not close when changing slides using the arrow keys. This is now fixed.

Previously, the contextual menu in a Pinboard presentation did not close when pressing the Esc key. This is now fixed.

A problem where the `thoughtspot` user did not source `/etc/bashrc` upon login is now fixed.

The problem of a display name that includes a space causing the master of the cluster management system to go into a crash loop is now fixed. Cluster ID is now used instead of display name, to avoid this problem.

The problem with the Configuration Events list becoming cluttered because of periodic cluster checks is now fixed. Those checks are now filtered out.

A problem with error messages flowing outside the text field on the SpotIQ analyses page is now fixed.

A problem where the filter panel fails to open from the left panel in a worksheet formula column is now fixed.   

Previously, Custom R analysis failed when it was run using Custom Analyze. This is now fixed.

A problem with the close (x) button not being aligned properly in search phrases is now fixed.

A problem with the wrong font being used for a chart label is now fixed.

The `Error Code: QUERY_GEN_ERROR` error on a saved answer, after upgrading a cluster, is now fixed.

A problem where there were two different backgrounds on an answer page, causing the left-panel title to display incorrectly, is now fixed.

An error message in the chart Configure panel that had the x and y axes reversed is now fixed.

Previously, there was a problem where the contextual menu, opened in a pinboard presentation, remained on the screen after the user returned to the pinboard. This is now fixed.

Previously, using the legend in the Configure panel of the Funnel chart caused an error. This has now been fixed by removing the legend from this chart.

Previously, pressing ESC to close the search phrase drop-down menu in an answer opened from a pinboard, caused the answer to close (instead of the drop-down menu). This is now fixed.

A problem using the Microsoft Internet Explorer browser, where the buttons do not display at the bottom of the Edit Group, Add a New Group, and Customize Analysis windows is now fixed.

The misaligned SearchIQ phrase suggestion drop-down menu is now fixed.

Previously, there was a problem with SearchIQ when so many search phrases were entered into the search field that it wrapped onto a second or third line. This caused it to the phrases to run off the edge of the window, and could also cause the buttons on the bottom to be pushed below the bottom of the window, and made inaccessible. These problems are now fixed.

A problem where the Customize analysis button in a SpotIQ result was misaligned, because the result's description line was too long, is now fixed.

Previously, when a search query was so long that it wrapped onto a second line, it caused the close (x) button to not appear and the 'More...' link to not work and overlap with SearchIQ toggle. This is now fixed.

Previously, there was a problem with line, scatter and radar charts, where the tooltip (information) for a specific data point appeared as soon as the mouse entered the main answer area of the page, even if it is not close to the data point itself. This problem is now fixed. Now, all charts only show tooltips when the mouse is close to the data point for which the tooltip is being shown.

Previously, when creating or deleting a pinboard, the list of pinboards would slide down, and then back up the screen. This problem is now fixed.

The problem when editing a visualization from a pinboard, where text at the upper-left corner of the window displays "Editing Visualization Chart 1" or "Editing Visualization Table 1" is now fixed. In addition, the 'Close' link in the upper-right corner of the window is now replaced with '<' to indicate that you will go back to the pinboard when you click it.

The misaligned 'Search Columns' text in the sources search field, when SearchIQ is turned on, is now fixed.

Previously, if you edited an answer or view in a pinboard, and then you turned on SearchIQ, you automatically navigated to the results page, losing any edits that you made. This problem is now fixed.

The incorrect spacing between chart legends, is now fixed.

The misaligned information in the Load Status column on the **Data > Data Sources** page is now fixed.

The misaligned checkmarks on the **Upload your data** page have been fixed.

The misaligned author icon for a rule on the **Data > Row Security** page is now fixed.

Previously, cards in the **Recent team activity** section on the home page were shorter than other cards. They are now the same height as the other cards.

The alignment problem of the column sort arrows in the **Showing underlying data** window, opened from either an answer or a worksheet, is now fixed.

The title-switcher drop-down menu below a pinboard title that was too close to an existing title, has been fixed.

Inconsistencies in style between the windows used to edit the title and description of a pinboard compared to an answer have been fixed.

A problem using Microsoft Internet Explorer, when saving the name of the answer, where the dialog box and 'Done' button can be hidden behind the table, is now fixed.

A problem where the horizontal legend in pinboard presentation mode overflows the edge of the screen, is now fixed.

Previously, admin style and font customizations for tables and charts were not on by default, but should have been. This is now fixed.

Previously, there was a problem that occurred when typing a search phrase. When the full phrase appeared in the suggestion drop-down list, and you clicked it, the full search phrase appeared, highlighted in red, in the search field. This has now been fixed.

A problem where GeoBubble or Geo HeatMap charts display briefly and then disappear, when using certain datasets, is now fixed.

A problem where it is not possible to zoom in or out on geo maps using the scroll wheel of a mouse, has been fixed.

{: id="51-new"}
## 5.1 New Features and Functionality

### Quick Select

When you type a phrase or a letter in the search bar, the first suggestion is
automatically highlighted and you can press Enter to select it ([Quick Select]({{ site.baseurl }}/end-user/search/about-the-search-bar.html)). Suggestions can be an attribute, measures, value, keyword, historical queries,
or exactly what you typed as the search phrase. Historic suggestions always
display on top with the first suggestion highlighted as default.  If there are
no suggestions, the suggestion list is not be displayed.

### Improvements in the presentation mode experience of pinboards

When you display pinboards charts on projectors in conference rooms and on a
laptop that has a widescreen display, the display automatically adjusts itself
depending on the size of the display screen. For example, if you are using a
widescreen display, pinboard font size increases for a more definitive and
high-quality experience.

1. Choose a pinboard that you want to display and click the **present** icon ![present icon]({{ site.baseurl }}/images/icon-present.png){: .inline} (top-right).

   Alternatively, you can click the ellipses ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} and select **Present**.

2. Use the **Up** and **Down** arrow keys to navigate.

### Stable search suggestions

Search suggestions are now more stable. When you start to type a search phrase and
the full matching phrase appears in the results list, the order in which it
appears does not change as you finish typing it.

### Show rounded or non-rounded numbers on charts

You can set labels on charts to [show rounded or non-rounded numbers]({{ site.baseurl}}/end-user/search/show-data-labels.html#show-rounded-or-non-rounded-numbers).

### Pie charts now support color customization

You can now [customize the colors of each slice on pie charts]({{ site.based}}/end-user/search/change-chart-colors.html#set-pie-chart-slice-colors) from the chart Styles panel. Click the Styles button next to any pie chart to get started (![paintbrush icon]({{ site.baseurl }}/images/icon-paintbrush.png){: .inline}).

### Longer pinboard descriptions

Table or chart descriptions in a pinboard can now be up to two lines long.
Descriptions that exceed a second line are truncated with three periods (...) at
the end. Headline tiles (which don’t have a table or chart) are limited to a
one-line description.

### New typography in the desktop app

With the 5.1 release, the fonts used are Optimo Plain and BB Roller Mono. This
provides a modern, more readable look for the ThoughtSpot application user
interface and data visualizations.

### Table aggregate headline

The Table Aggregate headline option is available when an aggregate function is
used in a table either through a formula or a search bar query, like the average
of a measure. It recalculates the function for the entire table. In such cases,
the Table Aggregate is shown by default below the table, instead of the “Avg”
option, which does a second level of aggregation on top of the existing
aggregation.

### Period to date

Before 5.1, Period to Date didn't work in conjunction with other date filters.
With this release, you can compare data spread across the same period and drill
down to a specific period of a year, month, week, and date.

For example, you can compare:

* `quarter to date vs last year quarter to date`
* `month to date vs last month to date`
* `year to date vs last year month to date`
* `week to date vs last quarter week to date`

To review date keywords, see [Date in keywords reference]({{ site.baseurl }}/reference/keywords.html#date).

For more about `vs` keyword, see [Comparative in keywords reference]({{ site.baseurl }}/reference/keywords.html#comparative)

### Case sensitivity on formulas is supported

You can now enable case sensitivity when defining formulas, and the final
formula output retains the case sensitive state. Quoted text in a formula can
now be case-sensitive. For example, "`if revenue > 1000 then 'Good' else 'Bad'`".
The output of this formula retains the case.

### SpotIQ personalization

Users can specify "Insight Threshold Settings" as part of their individual
profile [SpotIQ preferences]({{ site.baseurl}}/end-user/introduction/about-user.html#spotiq-preferences-and-email-notifications) to further refine the parameters SpotIQ uses.
SpotIQ profile preferences are a subset of those available on the SpotIQ "Customize
analysis dialog", and persist for all SpotIQ analyses, unless you explicitly
reset options for custom analyze.

### Improved search editing

You can edit a search without affecting existing search results. You can insert a new phrase or edit an existing one in the middle of a search without causing any errors. You can even merge words or phrases without breaking the search. As you edit your search, ThoughtSpot continuously generates new results.

### Copy and edit

The previous feature called "Make a Copy" is now called "Copy and Edit" and it brings a major workflow improvement. Instead of simply saving a copy in the background, "Copy and Edit" allows you to make a copy of an answer, pinboard visualization, insight, SpotIQ pinboard or view and immediately start editing it.

### SpotIQ insight feedback

Administrators can save user feedback and use it to suppress down-voted insights
from auto or custom SpotIQ analyses.

### SpotIQ column level data modeling

Data modelers and administrators can [exclude columns from SpotIQ analyses]({{ site.baseurl }}/admin/data-modeling/spotiq-data-model-preferences.html) via a
new `SPOTIQ PREFERENCE` option on the Data tabs for worksheets, tables or views.
By default, all columns are included in SpotIQ analyses.

### Schema Viewer available to non-admin users

Starting in the 5.1 release, you can grant non-admin users with
[Can manage data]({{ site.baseurl}}/admin/users-groups/about-users-groups.html)
privilege access to [Schema Viewer]({{ site.baseurl}}/admin/loading/schema-viewer.html).
This enables non-admin users to view data in a schema they have access to.

### Active Directory (AD) management for ThoughtSpot nodes

ThoughtSpot supports enabling [Active Directory (AD) based access]({{ site.baseurl}}/admin/setup/active-directory-based-access.html) individually on
each node where the commands are run. To enable AD access on a cluster, the
administrator must run the same commands on each individual node and on any
additional nodes added to the cluster.

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

The X and Y axes were previously flipped on [bar charts and stacked bar charts]({{ site.baseurl }}/end-user/search/about-bar-charts.html). This has been fixed.


{: id="notes-for-older-versions"}
## Notes from older versions

* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
