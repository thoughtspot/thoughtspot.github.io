---
title: ["6.0 Release Notes"]
toc: false
last_updated: December, 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.0.1 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [6.0.1 New Features](#6-0-1-new)
* [6.0.1 Fixed Issues](#6-0-1-fixed)
* [6.0 New Features](#6-new)
* [6.0 Fixed Issues](#6-fixed)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)
* [Notes from Older Versions](#notes-for-older-versions)

{: id="6-0-1-new"}
## 6.0.1 New Features and Functionality
tbd

{: id="6-0-1-fixed"}
## 6.0.1 Fixed Issues

The following issues are fixed in the 6.0.1 release:

- Search autocomplete occasionally displays an error when a bulk filter is used.
- In a custom calendar, sales results for individual years are correct, but when comparing those same years using `versus`, they are incorrect (example: `2019 vs 2018``net sales`).
- Upgrades to a ThoughtSpot AWS deployment can cause hosts to lose their configured hostnames.
- A yellow bar sometimes appears when doing a search, which causes search not to work.
- Optimization does not occur in pinned measure formulas with complex aggregation, resulting in more queries than necessary.
- Delayed search that was enabled for a cluster is disabled after upgrade to release 5.3.x.
- The dot in a hover tooltip for a chart, indicating which item the tooltip applies to, does not appear.
- Common keywords, like `this year`, `date daily`,`last quarter`, and `week of year` do not reflect the settings of a custom calendar.
- The title page of an exported PDF does not display the full date.
- The `date` filter of an answer does not work properly when pinned to a pinboard, even if the pinboard `date` filter is applied.
- Scroll and edit options are missing for charts in presentation mode when using the Microsoft Internet Explorer browser.



{: id="6-new"}
## 6.0 New Features and Functionality

### Mobile
You can now download ThoughtSpot Mobile app from the AppStore for both iPhone and iPad devices. ThoughtSpot Mobile works for releases 5.1 and later.

Mobile version 1.1.2 now supports auto-redirect Single Sign-On (SSO) for configured clusters.

See [Mobile]({{ site.baseurl }}/admin/mobile/use-mobile.html).

### Embrace for Snowflake and Amazon Redshift

In addition to Snowflake support, you can now perform live queries against an Amazon Redshift database without caching it in ThoughtSpot. You can then analyze this data, and create visualizations and pinboards. As with Snowflake, you can sync the data into ThoughtSpot later. **Support for Amazon Redshift is in beta**.

ThoughtSpot now supports the following features for linked tables:
  - Search suggestions for column values
  - Indexing of table columns
  - Remapping of tables and columns

For more information, see [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Monitor headlines

The Monitor feature enables you to follow headline metrics, and get daily updates in your mailbox, on your ThoughtSpot home page, and in the SpotIQ Follow management interface.

For more information, see [Monitor headlines]({{ site.baseurl }}/spotiq/monitor-headlines.html)  

 **Support for Monitor is in beta**.

* To monitor headlines, click the **Follow** icon in the top right corner of the insight.

  ![Monitor headlines with Follow]({{ site.baseurl }}/images/follow.png "Monitor headlines with Follow")

* The **SpotIQ Follow** interface lists all the headlines you follow, and the changes from last run.
  ![SpotIQ Follow management interface]({{ site.baseurl }}/images/spotiq-monitor.png "SpotIQ Follow management interface")

* Click each headline to see the detailed performance over time, examine each interval, all at the time scale you choose. And you can change to table view, or to another chart type to better visualize your changing metric.

  ![Metric performance over time]({{ site.baseurl }}/images/spotiq-monitor-detail.png "Metric performance over time")

### Chart Configuration

This release introduces a complete new approach that makes chart configuration much easier and more intuitive.

<strong>Chart configuration overview</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/v408bchsqf.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_v408bchsqf popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

* <strong>Add drag-and-drop chips</strong> automatically when adding new elements in search bar. These appear on the chart as "Not visualized", and you can move them into the axis area to visualize.
* <strong>Improve number formatting</strong> for data labels on the chart marks (bars, bubbles, lines), and on the axes. Can use numbers, percentages, currencies, and specified units, "as is" (auto mode), or change to millions, trillions, and billions (K, M, B). Can easily specify the number of decimal places.
* <strong>Independent control of each measure</strong> in a chart helps you reduce noise by applying labels only where you need it.
* <strong>Simple time bucketing</strong> lets you change granularity of time series.
* <strong>Intuitive color configuration</strong> enables you to quickly change color on the element or in the legend.
* <strong>Column renaming</strong> for pivot tables and regular chart tables, wrapping and clipping of header text.

### Scriptable Worksheets
You can now **Export** Worksheets by downloading them to a `*.yaml` file, make changes, and then **Update** the Worksheet from the changed file either to the same cluster, or to a new cluster.

Scriptable Worksheets support metadata migration from development to production environments, enables changes that are not possible within the user interface, and lets you perform bulk changes to the metadata (renaming, duplication).

See [Migrate or restore Worksheets]({{ site.baseurl }}/admin/worksheets/worksheet-export.html), and [Worksheet YAML specification]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html).

### Welcome new users

Administrators can configure a welcoming experience for new users. In addition to assigning a user to the most relevant groups and Pinboards, they can customize a Welcome email to introduce them to ThoughtSpot and help them get started.

<strong>Configure new user welcome experience and emails</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/bo6xskh8x0.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_bo6xskh8x0 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Getting started

To quickly onboard new users and teach them how to effectively use ThoughtSpot, we added in-product guidance and video content.

<strong>Getting started with ThoughtSpot</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/ifwwkmmtk5.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_ifwwkmmtk5 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Sharing

We improved the experience of sharing Answers and Pinboards through better email notifications, with embedded links.

<strong>Sharing Pinboards and Answers</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/g05dmacmng.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_g05dmacmng popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Access request and grant

To enhance the ease of sharing, we simplified and reinforced the workflow for access request and grant of privileges to Pinboards, Answers, and Data sources.

<strong>Requesting and granting access to Pinboards and Answers</strong>
<br>
<script src="https://fast.wistia.com/embed/medias/34nrrb385a.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_34nrrb385a popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Google Cloud Platform GCS persistent storage

You can now reduce the cost of a GCP deployment by using GCS for storage of major services like the ThoughtSpot database and search engine. For more information, see [GCP configuration options]({{ site.baseurl }}/appliance/gcp/configuration-options.html).

### Streamlined GCP data loading from a GCS bucket
You can now load data from a Google Cloud Storage (GCS) bucket into your ThoughtSpot GCP instance. By assigning the _Compute Engine default service account_ and the _Set access for each API_ scope to your instance, you can set read-only access to your GCS bucket. This way, you don't have to enter GCS credentials when loading data. For more information, see [Loading data from a GCP GCS bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-a-gcp-gcs-bucket)

### Answer Explorer

This release introduces Answer Explorer, which provides you with AI-guided exploration of Pinboards, at a single click.

<p><strong>Answer Explorer overview</strong></p>
<script src="https://fast.wistia.com/embed/medias/iu2ho8imd3.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_iu2ho8imd3 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

Answer Explorer includes the following features:

* <strong>Filters</strong> search field accepts any value, including a column name. After you enter your value, press **Enter**, or click **Add**.
* <strong>Comparisons</strong> lets you easily perform a "versus" analysis.
* <strong>Breakdowns</strong> make it easy to add a new attribute or replace an existing one, and let you change buckets for time series: monthly, weekly, daily, or quarterly.
* <strong>Metrics</strong> "Also include" feature enables you to add other available metrics, and changing a column replaces a metric.
* <strong>Navigation</strong>: Column names appear separately from search values. Undo steps back to the last change. Copy and edit retains all changes. Seamlessly switch from Answer Explorer to search.

### Homepage Insights for everyone

This release of ThoughtSpot leverages existing insights that are generated by the SpotIQ power users, and shares them with everyone on their Homepage, regardless of that person's access to SpotIQ Analyze function.

These insights are diverse, and cover a wider range of data sources and types.

### Ask an Expert

We improved the Expert feature by adding more email notifications, enriching email content, and directly linking from emails to requests.

* When a user creates a request, both that user and designated experts get an email notification. The **Open request** link in the expert's leads directly to ThoughtSpot, to review and manage the request.
* When an expert resolves the request, both the expert and the user receive an email notification. The user can then follow the supplied link to navigate directly to the resolved answer.

<!-- ### New group functions
- [median function]({{ site.baseurl }}/reference/formula-reference.html#median)
- [nth_percentile function]({{ site.baseurl }}/reference/formula-reference.html#nth_percentile) -->

### GeoMaps
ThoughtSpot now supports [GeoMap]({{ site.baseurl }}/reference/geomap-reference.html) visualizations for these new locales:
- <strong>Austria:</strong> State, District, and Postal
- <strong>Italy:</strong> Region, Province/Territories, and Postal Code
- <strong>Poland:</strong> Province/Territories, County, Postal Code

{: id="6-fixed"}
## 6.0 Fixed Issues

The following issues are fixed in the 6.0 release:

- The `tscli cluster download-release` command sometimes did not work correctly.
- The date dimension attribute was removed from the query for all date aggregations, except for DETAILED.

{: id="beta-program"}
## Beta Programs
If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.
These features are currently in Beta. Please contact us if you are interested in participating:
- <a href="mailto:BetaProgram@thoughtspot.com?subject=Montor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a> for monitoring selected metrics over time.
- <a href="mailto:BetaProgram@thoughtspot.com?subject=Embrace%20Beta%20Program%20Request" target="_blank">Embrace Beta Program for Redshift</a> to query the new supported external database, Amazon Redshift.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.0.1 release
directly:

* 5.3.x to 6.0.1
* 5.2.x to 6.0.1

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.2.x, or version 5.3.x, and then to the 6.0.1 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}

{: id="notes-for-older-versions"}
## Notes for earlier releases

* [5.3 Release Notes](/5.3/pdf/ThoughtSpot_Release_Notes_5.3.pdf)
* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
