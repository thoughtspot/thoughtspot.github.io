---
title: ["6.0 Release Notes"]
toc: false
last_updated: 7/1/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot version 6.0.5 is now available. These release notes include information about new and enhanced features.

For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html)

* [6.0.5 New Features](#6-0-5-new)
* [6.0.4 New Features](#6-0-4-new)
* [6.0.2 New Features](#6-0-2-new)
* [6.0 New Features](#6-new)
* [Beta Programs](#beta-program)
* [Supported Upgrade Paths](#upgrade-paths)

{: id="6-0-5-new"}
## 6.0.5 New Features and Functionality

### Set a relay host for SMTP

You can now specify a custom port to connect to the SMTP relay host. If you do not specify a port, the system uses the default recommended port, port 25. Use a custom port if port 25 is blocked in your environment.

See [Set the relay host for SMTP]({{ site.baseurl }}/admin/setup/set-up-relay-host.html).

### Red Hat Enterprise Linux (RHEL)
Starting with the 6.0.5 release, ThoughtSpot runs with RHEL 7.7 or RHEL 7.8. See <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/7.8_release_notes/index" target="_blank">RHEL 7.8 Release notes</a>.

### Disable items in embedded ThoughtSpot

You can now disable any of the following items when ThoughtSpot is embedded:

- Share
- Copy a link
- Send feedback

Contact ThoughtSpot support to enable this feature.

### Embrace advanced configuration

In this release, on the connection details page, you can provide additional key-value pairs that you need to set up the connection to your external data source. Any key-value pairs that you enter must be defined in the external data source. Key-value pairs are case-sensitive.

Some examples of key-value pairs for Snowflake, include the following:

Setting up a proxy connection:

![]({{ site.baseurl }}/images/snowflake-adv-config-1.png)

Applying a filter on the schema:

![]({{ site.baseurl }}/images/snowflake-adv-config-2.png)

### Set limits on the number of rows that ThoughtSpot loads

In this release, you can now set a limit on the number of rows ThoughtSpot loads initially for visualizations. This can reduce the load time of visualizations that have many rows, and tend to load slowly.

Contact ThoughtSpot support to enable this feature.

### OpenLDAP authentication
ThoughtSpot now integrates with OpenLDAP for user authentication. LDAP provides security and makes user management more centralized. To enable user authentication through OpenLDAP, <a href="{{ site.baseurl }}/appliance/contact.html">contact ThoughtSpot Support</a>.

{: id="6-0-4-new"}
## 6.0.4 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.0.4 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-0-4).

### Red Hat Enterprise Linux (RHEL)

This release of ThoughtSpot introduces deployment support for <a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux" target="_blank">RHEL 7.7</a>. This decouples the OS and application files we shipped together in previous releases, and gives you the flexibility to run ThoughtSpot on an RHEL image that your organization manages internally.
ThoughtSpot certifies RHEL 7.7 on the following platforms:

- ThoughtSpot-configured appliances, both DELL hardware and SMC hardware
- Cloud deployments: AWS and GCP
- VMware

RHEL support is in the Early Access phase. To deploy ThoughtSpot on RHEL, you must have the Ansible tarball; please contact us if you are interested in participating in the <a href="mailto:early_access@thoughtspot.com?subject=RHEL%20Early%20Access%20Program%20Request" target="_blank">RHEL Early Access Program</a>.
For more information, see [RHEL Deployment Overview]({{ site.baseurl }}/appliance/rhel/rhel.html).

{: id="6-0-2-new"}
## 6.0.2 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.0.2 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-0-2).

### Embrace for Google BigQuery and Microsoft Azure Synapse

In addition to Snowflake and Redshift, you can now run live queries against Google BigQuery or Microsoft Azure Synapse Analytics, without caching data in ThoughtSpot. You can then analyze this data, and create Answers and Pinboards.

See [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Embrace enhancements

- **Search indexing** Starting with release 6.0.2, we enabled search indexing of columns by default, in all Embrace connections. This shows values of columns in the search bar as you type.

  ThoughtSpot re-indexes columns daily; this can be changed to an hourly schedule.

- **UI/UX for creating and editing** Embrace connections now include a built-in workflow.

- **Headline optimization** We changed the behavior for loading headlines with tabular reports. The primary table now loads immediately, and headlines appear when the queries that populate them complete.

### Data Search APIs

To programmatically use the data that we retrieve from a query, you can use ThoughtSpot Search Data API.

See [Search Data API]({{ site.baseurl }}/app-integrate/reference/search-data-api.html).

{: id="6-new"}
## 6.0 New Features and Functionality

For a complete list of issues that we fixed in this release, see [6.0 Fixed issues]({{ site.baseurl }}/release/fixed.html#6-0).

### Mobile
You can now download ThoughtSpot Mobile app from the AppStore for both iPhone and iPad devices. ThoughtSpot Mobile works for releases 5.1 and later.

Mobile version 1.1.2 now supports auto-redirect Single Sign-On (SSO) for configured clusters.

See [Mobile]({{ site.baseurl }}/admin/mobile/use-mobile.html).

### Embrace for Snowflake and Amazon Redshift

In addition to Snowflake support, you can now perform live queries against an Amazon Redshift database without caching it in ThoughtSpot. You can then analyze this data, and create Answers and Pinboards.  **Support for Amazon Redshift is in beta in Release 6.0.**

ThoughtSpot now supports the following features for linked tables:
  - Search suggestions for column values
  - Indexing of table columns
  - Remapping of tables and columns

<strong>Embrace overview</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/1n7ei0tqr4.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_1n7ei0tqr4 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

For more information, see [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html).

### Monitor Headlines

The Monitor feature enables you to follow headline metrics, and get daily updates in your mailbox, on your ThoughtSpot home page, and in the SpotIQ Follow management interface.

For more information, see [Monitor headlines]({{ site.baseurl }}/spotiq/monitor-headlines.html).

 **Support for Monitor is in beta**.

* To monitor headlines, click the **Follow** icon in the top right corner of the insight.

* The **SpotIQ Follow** interface lists all the headlines you follow, and the changes from last run.

* Click each headline to see the detailed performance over time, examine each interval, all at the time scale you choose. And you can change to table view, or to another chart type to better visualize your changing metric.

### Chart Configuration

This release introduces a complete new approach that makes chart configuration much easier and more intuitive. For more information, see [Changing Charts]({{ site.baseurl }}end-user/search/change-the-chart.html).

<strong>Chart configuration overview</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/y633w03qzm.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_y633w03qzm popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

* **[Add drag-and-drop chips]({{ site.baseurl }}/end-user/search/drag-and-drop.html)** automatically when adding new elements in search bar. These appear on the chart as "Not visualized", and you can move them into the axis area to visualize.
* **[Improve number formatting]({{ site.baseurl}}/end-user/search/show-data-labels.html#labels-one)** for data labels on the chart marks (bars, bubbles, lines), and on the axes. Can use numbers, percentages, currencies, and specified units, "as is" (auto mode), or change to millions, trillions, and billions (K, M, B). Can easily specify the number of decimal places.
* <strong>Independent control of each measure</strong> in a chart helps you reduce noise by applying labels only where you need it.
* **[Simple time bucketing]({{ site.baseurl }}/complex-search/change-the-view.html#change-the-date-bucketing-grouping)** lets you change granularity of time series.
* **[Intuitive color configuration]({{ site.baseurl }}/end-user/search/change-chart-colors.html)** enables you to quickly change color on the element or in the legend.
* **[Column renaming]({{ site.baseurl }}/end-user/search/column-renaming.html)** for pivot tables and regular chart tables
* **[Wrapping and clipping]({{ site.baseurl }}/end-user/search/about-tables.html#clip-wrap-text)** of text in a table.

### Scriptable Worksheets
You can now **Export** Worksheets by downloading them to a `*.yaml` file, make changes, and then **Update** the Worksheet from the changed file either to the same cluster, or to a new cluster.

Scriptable Worksheets support metadata migration from development to production environments, enables changes that are not possible within the user interface, and lets you perform bulk changes to the metadata (renaming, duplication).

See [Migrate or restore Worksheets]({{ site.baseurl }}/admin/worksheets/worksheet-export.html), and [Worksheet YAML specification]({{ site.baseurl }}/admin/worksheets/yaml-worksheet.html).

### Welcome new users

Administrators can configure a welcoming experience for new users. In addition to assigning a user to the most relevant groups and Pinboards, they can customize a Welcome email to introduce them to ThoughtSpot and help them get started.

<strong>Configure new user welcome experience and emails</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/bo6xskh8x0.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_bo6xskh8x0 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Getting started

To quickly onboard new users and teach them how to effectively use ThoughtSpot, we added in-product guidance and video content.

<strong>Getting started with ThoughtSpot</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/ifwwkmmtk5.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_ifwwkmmtk5 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

See [the Getting Started sidebar]({{ site.baseurl }}/end-user/introduction/getting-started.html).

### Sharing

We improved the experience of sharing Answers and Pinboards through better email notifications, with embedded links.

<strong>Sharing Pinboards and Answers</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/7heqb1ujsx.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_7heqb1ujsx popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

See [Overview of Sharing]({{ site.baseurl }}/end-user/data-view/sharing-for-end-users.html).

### Access request and grant

To enhance the ease of sharing, we simplified and reinforced the workflow for access request and grant of privileges to Pinboards, Answers, and Data sources.

<strong>Requesting and granting access to Pinboards and Answers</strong>
<br>

<script src="https://fast.wistia.com/embed/medias/34nrrb385a.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_34nrrb385a popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

### Google Cloud Platform GCS persistent storage

You can now reduce the cost of a GCP deployment by using GCS for storage of major services like the ThoughtSpot database and search engine. For more information, see [GCP configuration options]({{ site.baseurl }}/appliance/gcp/configuration-options.html).

### Streamlined GCP data loading from a GCS bucket
You can now load data from a Google Cloud Storage (GCS) bucket into your ThoughtSpot GCP instance. By assigning the _Compute Engine default service account_ and the _Set access for each API_ scope to your instance, you can set read-only access to your GCS bucket. This way, you don't have to enter GCS credentials when loading data. For more information, see [Loading data from a GCP GCS bucket]({{ site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-a-gcp-gcs-bucket).

### Answer Explorer

This release introduces Answer Explorer, which provides you with AI-guided exploration of Pinboards, at a single click.

<p><strong>Answer Explorer overview</strong></p>
<script src="https://fast.wistia.com/embed/medias/iu2ho8imd3.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_iu2ho8imd3 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

Answer Explorer includes the following features:

* <strong>Filters</strong> search field accepts any value, including a column name. After you enter your value, press **Enter**, or click **Add**.
* <strong>Comparisons</strong> lets you easily perform a "versus" analysis.
* <strong>Breakdowns</strong> make it easy to add a new attribute or replace an existing one, and let you change buckets for time series: monthly, weekly, daily, or quarterly.
* <strong>Metrics</strong> "Also include" feature enables you to add other available metrics, and changing a column replaces a metric.
* <strong>Navigation</strong>: Column names appear separately from search values. Undo steps back to the last change. Copy and edit retains all changes. Seamlessly switch from Answer Explorer to search.

Refer to [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html).

### Homepage Insights for everyone

This release of ThoughtSpot leverages existing insights that are generated by the SpotIQ power users, and shares them with everyone on their Homepage, regardless of that person's access to SpotIQ Analyze function.

These insights are diverse, and cover a wider range of data sources and types.

### Ask an Expert

We improved the Expert feature by adding more email notifications, enriching email content, and directly linking from emails to requests.

* When a user creates a request, both that user and designated experts get an email notification. The **Open request** link in the expert's leads directly to ThoughtSpot, to review and manage the request.
* When an expert resolves the request, both the expert and the user receive an email notification. The user can then follow the supplied link to navigate directly to the resolved answer.

### Geo maps
ThoughtSpot now supports [geo map]({{ site.baseurl }}/reference/geomap-reference.html) visualizations for these new locales:
- <strong>Austria:</strong> State, District, and Postal
- <strong>Italy:</strong> Region, Province/Territories, and Postal Code
- <strong>Poland:</strong> Province/Territories, County, Postal Code

{: id="beta-program"}
## Beta Programs
If you are interested in seeing some of our newest features, we want to add you to our testing group. ThoughtSpot is looking for people with all levels of experience: end-users, analysts, administrators, configurators, and so on.
We like to have a diversity of experience and perspective, and want to hear from you. Because we strive for excellence, we will partner with you to adjust the final details of our offerings based on your feedback.

Please contact us if you are interested in participating in the <a href="mailto:BetaProgram@thoughtspot.com?subject=Montor%20Beta%20Program%20Request" target="_blank">Monitor Beta Program</a>, for monitoring selected metrics over time.

{: id="upgrade-paths"}
## Supported Upgrade Paths

If you are running one of the following versions, you can upgrade to the 6.0.5 release
directly:

* 6.0.x to 6.0.5
* 5.3.x to 6.0.5
* 5.2.x to 6.0.5

This includes any hotfixes or customer patches on these branches.

If you are running a different version, you must do a multiple pass upgrade.
First, upgrade to version 5.2.x, 5.3.x, or 6.0.x, and then to the 6.0.5 release.

{% include note.html content="To successfully upgrade your ThoughtSpot cluster, all user profiles must include a valid email address. Without valid email addresses, the upgrade is blocked." %}
