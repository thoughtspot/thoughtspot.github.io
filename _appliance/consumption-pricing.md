---
title: [Consumption-based pricing]
last_updated: 2/3/2021
summary: ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on usage of the ThoughtSpot product.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on your users' usage of the ThoughtSpot product. When you purchase a consumption-based ThoughtSpot license, ThoughtSpot bills you based on [credits](#credits). The ThoughtSpot consumption licensing model is available for both ThoughtSpot Cloud and for Embrace software deployment on your cloud platform.

Refer to the [Consumption pricing FAQ]({{ site.baseurl }}/appliance/consumption-pricing-faq.html) for more information. To learn about each of ThoughtSpot's pricing options, refer to [ThoughtSpot pricing](https://www.thoughtspot.com/pricing){: target="_blank"}.

{: id="rights-obligations"}
## Using the ThoughtSpot consumption licensing model with Embrace
We originally introduced the consumption-based pricing model in our ThoughtSpot Cloud offering. You can now use the consumption pricing model when you deploy ThoughtSpot Software in your own cloud environment, and use Embrace connections to your data.

You must allow ThoughtSpot to gather usage information from your cluster environment daily. We use a secure TLS-encrypted SSL connection to gather this information, and use it solely for the purpose of measuring credit consumption.

Additionally, you must allow ThoughtSpot to serve usage information to you, for full visibility and accurate reporting of in-product usage and credit consumption. To accomplish this, ThoughtSpot creates an Embrace JDBC connection to your cluster, and uses TLS-encrypted SSL transport protocol to serve this data. This usage information is secure and isolated inside our cloud environment.

The following points outline the necessary prerequisites to licensing and using ThoughtSpot based on consumption level.

<dl>
<dlentry>
<dt>Supported deployments</dt>
<dd><p>The ThoughtSpot consumption licensing model is available for both <a href="https://cloud-docs.thoughtspot.com">ThoughtSpot Cloud</a>, and for ThoughtSpot Software deployments that use <a href="{{ site.baseurl }}/data-integrate/embrace/embrace-intro.html">Embrace</a> to connect to data.</p>
<p>Consumption pricing <strong>does not apply</strong> to ThoughtSpot Software deployments that use the ThoughtSpot Falcon database, where you import/maintain data using <a href="{{ site.baseurl }}/data-integrate/dataflow/dataflow.html">Dataflow</a> or another ETL tool.</p></dd>
</dlentry>
<dlentry>
<dt>Supported releases</dt>
<dd><p>In the 6.3.1 SW release, ThoughtSpot consumption pricing is available only on single-node clusters.</p>
<p>Starting with the 6.3.1.CU1 release, ThoughtSpot makes consumption pricing available for all multi-node deployments.</p></dd></dlentry>
<dlentry>
<dt>Mandatory ports</dt>
<dd>ThoughtSpot requires for organizations that subscribe to usage-based pricing to open the following ports. Failure to open these ports prevents you from using the consumption-based license.
<dl><dlentry>
<dt>Port 443</dt>
<dd>The outbound port to the IP address that we provide at the time of licensing; we use this to collect usage data.</dd></dlentry>
<dlentry>
<dt>Port 5439</dt>
<dd>The inbound port from the IP address that we provide at the time of licensing; we use this to send you credit consumption data.</dd></dlentry></dl></dd></dlentry></dl>

{: id="credits"}
## Credits
You purchase and consume credits with the consumption model. A credit is a unit of measure.  Usage of ThoughtSpot, measured in [usage minutes](#usage-minutes), consumes credits. Examples of user activity that consume credits include a user performing a search in ThoughtSpot, viewing or editing Pinboards or answers, creating and editing worksheets, or making any administrative changes or setup. Each user actively using ThoughtSpot consumes credits, even if they are using the product at the same time. You consume 1 credit for each usage minute. ThoughtSpot refers to this as *credit consumption rate* or *credit burn rate.*

{: id="usage-minutes"}
## Usage minutes
Usage minutes refer to the number of minutes of ThoughtSpot usage. Each user's usage minutes are calculated separately. Usage minutes are calculated in the following ways:
- Any user activity in the application kicks off a 10 minute usage block.
- Any additional user activity within that 10 minutes does not drive additional consumption and the whole session will be charged at 10 minutes.
- The first click after the initial 10 minute window ends, initiates a second 10 minute session.
- Each user’s usage is counted separately.

    ![Usage minutes example]({{ site.baseurl }}/images/consumption-example.png "Usage minutes example")

## User activity that incurs usage minutes
User activity is defined as any user-triggered (initiated) action in ThoughtSpot, starting from the time the action is initiated until the time that the results of the action(s) are visible to the user in the product. This includes any time spent by ThoughtSpot in processing the user-triggered action in order to present the results to the user. User activity is measured in [usage minutes](#usage-minutes).

User activity that incurs usage minutes includes any user interaction with the product, such as:
- Clicking on any interactive elements inside the ThoughtSpot product, such as menu items, search boxes, tabs, buttons, icons and other user interface artifacts. Some examples are:
    - Performing searches on data or search-related actions such as Explore, filters, drill-down, showing underlying data, and other related actions
    - Creating, editing, updating deleting or interacting with Answers, Pinboards, Worksheets, tables, Views, and other objects
    - Triggering user-initiated SpotIQ analyses
    - Setup and configuration actions in the product (such as those performed in the **Admin** section of the product or other such parts of the product)
    - Uploads, downloads, sharing, triggering the sending of emails from within the product
- Browser actions (such as refreshing the page or using the **forward** or **back** buttons)
- Any scrolling in the product that triggers updates to objects or content being viewed
    For example, if a user is scrolling through a Pinboard, initially it displays only a subset of the charts that can fit on the screen. This counts as initial user activity. At any point, if the user scrolls through the Pinboard, resulting in ThoughtSpot loading and displaying additional charts in that Pinboard for the first time, this counts as additional user activity.

## Monitor your consumption
ThoughtSpot maintains user activity data in a relational database to make it available for reporting in the ThoughtSpot product. ThoughtSpot instances that are hosted in your on-premises/cloud provider environment must connect to this relational database through an Embrace connection in order to access information about consumption usage. This Embrace connection is created by ThoughtSpot support personnel as part of the setup for consumption pricing on ThoughtSpot Software instances (Software on-premises installations). The connection uses Transport Layer Security (TLS) on port 5439 as a secure channel to query the cluster-specific consumption data.

{% include important.html content="When using consumption pricing with Embrace in ThoughtSpot Software, you must ensure your cluster can connect to `redshift-pricing.thoughtspot.cloud` on TCP port 5439. Access to this port is *required* for an on-prem cluster that uses consumption pricing." %}

You can monitor your credit consumption with the Credit Usage Pinboard, a new default admin-only Pinboard with data from the new Credit Usage Worksheet. You can access this Pinboard by searching for it on the **Pinboards** page.

![Credit Usage Pinboard]({{ site.baseurl }}/images/consumption-usage-pinboard.png "Credit Usage Pinboard")

The Credit Usage Pinboard contains useful visualizations and headlines you can use to monitor your consumption. You can also search the data yourself, using the Credit Usage Worksheet, and create your own Answers and Pinboards.

The Credit Usage Pinboard contains the following visualizations and headlines:
- Daily Usage, with Unique Users (last 30 days)
- Billable Credits Consumed, All Time
- Billable Credits Consumed, Month to Date
- Credits Purchased, Expiry Date
- Uncapped Credits Consumed, Month to Date
- Uncapped Credits Consumed, All Time
- Credit Consumption & Usage, Top 10 Users, This Month
- Monthly Credits Consumed, with Unique Users
- Weekly Credits Consumed, with Unique Users, Last 8 Weeks
- Month of Year Credit Usage, by User GUID
