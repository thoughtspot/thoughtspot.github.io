---
title: ["6.0 Release Notes"]
toc: false
last_updated: July 2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## What's in the Release Notes

ThoughtSpot version 6.0 is now available. These release notes include information about new features,
fixed issues from the previous releases, and any known issues.

* [Supported Upgrade Paths](#upgrade-paths)
* [6.0 New Features](#6-new)
* [6.0 Fixed Issues](#6-fixed)
* [Beta Programs](#beta-program)
* [Notes from Older Versions](#notes-for-older-versions)

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.0 release
directly:

* 5.3.x to 6.0
* 5.2.x to 6.0

(This includes any hotfixes or customer patches on these branches.)

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.2.x, or version 5.3.x, and then to the 6.0 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}

{: id="6-new"}
## 6.0 New Features and Functionality

<!-- ### Mobile
You can now download ThoughtSpot Mobile app from the AppStore for both iPhone and iPad devices. ThoughtSpot Mobile works for releases 5.1 and later.

Mobile now includes supports auto-redirect Single Sign-On (SSO) for configured clusters.

See [Mobile]({{ site.baseurl }}/admin/mobile/use-mobile.html).-->

### GeoMaps
ThoughtSpot now supports [GeoMap]({{ site.baseurl }}/reference/geomap-reference.html).
 visualizations for these new locales:
- <strong>Austria:</strong> State, District, and Postal
- <strong>Italy:</strong> Region, Province/Territories, and Postal Code
- <strong>Poland:</strong> Province/Territories, County, Postal Code

### Worksheet scriptability
You can now **Export** Worksheets by downloading them to a `*.yaml` file, make changes, and then **Update** the Worksheet from the changed file either to the same cluster, or to a new cluster.

Worksheet scriptability supports metadata migration from development to production environments, enables changes that are not possible within the user interface, and lets you perform bulk changes to the metadata (renaming, duplication).

See [Migrate or restore Worksheets]({{ site.baseurl }}/admin/worksheets/worksheet-export.html), and [Worksheet YAML specification]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html)

### Chart Configuration

This release introduces a complete new approach that makes chart configuration much easier and more intuitive.

<strong>Chart configuration overview</strong>

<script src="https://fast.wistia.com/embed/medias/v408bchsqf.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_v408bchsqf videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/v408bchsqf/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

* <strong>Add drag-and-drop chips</strong> automatically when adding new elements in search bar. These appear on the chart as "Not visualized", and you can move them into the axis area to visualize.
* <strong>Improve number formatting</strong> for data labels on the chart marks (bars, bubbles, lines), and on the axes. Can use numbers, percentages, currencies, and specified units, "as is" (auto mode), or change to millions, trillions, and billions (K, M, B). Can easily specify the number of decimal places.
* <strong>Independent control of each measure</strong> in a chart helps you reduce noise by applying labels only where you need it.
* <strong>Simple time bucketing</strong> lets you change granularity of time series.
* <strong>Intuitive color configuration</strong> enables you to quickly change color on the element or in the legend.
* <strong>Column renaming</strong> for pivot tables and regular chart tables, wrapping and clipping of header text.

### Embrace now supports Amazon Redshift
You can now perform live queries against an Amazon Redshift database without caching it in ThoughtSpot. You can then analyze the data and create visualizations in ThoughtSpot. As with Snowflake, you can sync the data into ThoughtSpot later, if you want. Support for **Amazon Redshift is in beta**.

ThoughtSpot now supports the following features for linked tables:
- Search suggestions for column values
- Indexing of table columns
- Remapping of tables and columns

For more information, see [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Answer Explorer

This release introduces Answer Explorer, which provides you AI-guided exploration of pinboards with a single click.

<p><strong>An overview of Answer Explorer</strong></p>
<script src="https://fast.wistia.com/embed/medias/iu2ho8imd3.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_iu2ho8imd3 popover=true popoverAnimateThumbnail=true" style="display:inline-block;height:84px;position:relative;width:150px">&nbsp;</span>

Answer Explorer includes the following features:

* Filters

  Search field accepts any value, including a column name. After you enter your value, press **Enter**, or click **Add**.

* Comparisons

  Allows you to easily do "versus" comparisons.

* Breakdowns

  Change time bucket for time series: monthly, weekly, daily, or quarterly. Easier to add a new attribute or replace and existing one.

* Metrics  

  "Also include" allows you to add a metric. Changing a column allows you to replace a metric.

* Navigation

  Column names appear separately from search values. Undo goes back to the last change. Copy and edit retains all changes. Seamlessly switch from Answer Explorer to search.

### Ask an Expert

TBD

<!-- ### New group functions
- [median function]({{ site.baseurl }}/reference/formula-reference.html#median)
- [nth_percentile function]({{ site.baseurl }}/reference/formula-reference.html#nth_percentile) -->

### Sharing

We improved the experience of sharing answers and Pinboards through better email notifications, with embedded links.

<strong>Sharing Pinboards and Answers</strong>

<script src="https://fast.wistia.com/embed/medias/g05dmacmng.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_g05dmacmng videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/g05dmacmng/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

### Access request and granularity

To enhance the ease of sharing, we simplified and reinforced the workflow for access request and grant of privileges to Pinboards, Answers, and Data sources.

<strong>Requesting and granting access to Pinboards and Answers</strong>

<script src="https://fast.wistia.com/embed/medias/34nrrb385a.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_34nrrb385a videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/34nrrb385a/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

### Google Cloud Platform GCS persistent storage option
You can now reduce the cost of a GCP deployment by using GCS for storage of major services like the ThoughtSpot database and search engine. For more information, see [GCP configuration options]({{ site.baseurl }}/appliance/gcp/configuration-options.html).

### Streamlined GCP data loading from a GCS bucket
You can now load data from a Google Cloud Storage (GCS) bucket into your ThoughtSpot GCP instance. By assigning the _Compute Engine default service account_ and the _Set access for each API_ scope to your instance, you can set read-only access to your GCS bucket. This way, you don't have to enter GCS credentials when loading data. For more information, see [Loading data from a GCP GCS bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-a-gcp-gcs-bucket)

{: id="6-fixed"}
## 6.0 Fixed Issues

The following issues are fixed in the 6.0 release:

- The `tscli cluster download-release` command sometimes does not work correctly.
- The date dimension attribute is removed from the query for all date aggregations, except for DETAILED.

{: id="beta-program"}
## Beta Programs
If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators...
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.
These features are currently in Beta. Please contact us if you are interested in participating:
- Email <a href="mailto:BetaProgram@thoughtspot.com?subject=Explore%20Beta%20Program%20Request" target="_blank">Explore Beta Program</a> for AI-enabled guidance to deeper data insights.
- Email <a href="mailto:BetaProgram@thoughtspot.com?subject=Embrace%20Beta%20Program%20Request" target="_blank">Embrace Beta Program</a> to query the new supported external database, Amazon Redshift.

{: id="notes-for-older-versions"}
## Notes from Older Versions

* [5.3 Release Notes](/5.3/pdf/ThoughtSpot_Release_Notes_5.3.pdf)
* [5.2 Release Notes](/5.2/pdf/ThoughtSpot_Release_Notes_5.2.pdf)
* [5.1 Release Notes](/5.1/pdf/ThoughtSpot_Release_Notes_5.1.pdf)
* [5.0 Release Notes](/5.0/pdf/ThoughtSpot_Release_Notes_5.0.pdf)
* [4.5 Release Notes](/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf)
* [4.4 Release Notes](/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf)
* [4.2 Release Notes](/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf)
* [3.5 Release Notes](/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf)
