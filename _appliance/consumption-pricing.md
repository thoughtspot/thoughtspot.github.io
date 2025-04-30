---
title: [Consumption-based pricing]
last_updated: 7/28/2021
summary: ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on usage of the ThoughtSpot product.
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot’s consumption-based licensing model lets you license ThoughtSpot based on your users' usage of the ThoughtSpot product. When you purchase a consumption-based ThoughtSpot license, ThoughtSpot bills you based on [credits](#credits). The ThoughtSpot consumption licensing model is available for both ThoughtSpot Cloud and for Embrace software deployment on your cloud platform.

To learn about each of ThoughtSpot's pricing options, refer to [ThoughtSpot pricing](https://www.thoughtspot.com/pricing){: target="_blank"}. ThoughtSpot offers consumption- and capacity-based pricing. Each cluster must have a discrete pricing model. You cannot license one cluster as both consumption and capacity, but you can have multiple clusters with each using a different pricing model.

{: id="rights-obligations"}
## Using the ThoughtSpot consumption licensing model with Embrace
We originally introduced the consumption-based pricing model in our ThoughtSpot Cloud offering. You can now use the consumption pricing model when you deploy ThoughtSpot Software in your own cloud environment, and use Embrace connections to your data.

You must allow ThoughtSpot to gather usage information from your cluster environment daily. We use a secure TLS-encrypted SSL connection to gather this information, and use it solely for the purpose of measuring credit consumption.

Additionally, you must allow ThoughtSpot to serve usage information to you, for full visibility and accurate reporting of in-product usage and credit consumption. To accomplish this, ThoughtSpot creates an Embrace JDBC connection to your cluster, and uses TLS-encrypted SSL transport protocol to serve this data. This usage information is secure and isolated inside our cloud environment.

The following points outline the necessary prerequisites to licensing and using ThoughtSpot based on consumption level.

<dl>
<dlentry>
<dt>Supported deployments</dt>
<dd><p>The ThoughtSpot consumption licensing model is available for both <a href="https://cloud-docs.thoughtspot.com" target="_blank">ThoughtSpot Cloud</a>, and for ThoughtSpot Software deployments that use <a href="{{ site.baseurl }}/data-integrate/embrace/embrace-intro.html">Embrace</a> to connect to data.</p>
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
You purchase and consume credits with the consumption model. A credit is a unit of measure. When members of your organization utilize ThoughtSpot, we measure [usage minutes](#usage-minutes), which consume available credits. Examples of user activity that consume credits include a user performing a search in ThoughtSpot, viewing or editing Pinboards or answers, creating and editing worksheets, making any administrative changes, or changing setup configuration.  Each user who actively uses ThoughtSpot consumes credits, even if they are using the product at the same time. Each usage minute is equivalent to consuming one (1) credit. ThoughtSpot refers to this as **credit consumption rate** or **credit burn rate**.

{: id="usage-minutes"}
## Usage minutes
Usage minutes refer to the number of minutes that the members of your organization use ThoughtSpot. We calculate each user’s usage minutes separately.

We calculate usage minutes in the following manner:
- Any user activity in the application kicks off a 10 minute usage block.
- Any additional user activity within that 10 minutes does not drive additional consumption; we charge the whole session at 10 minutes.
- The first click after the initial 10 minute window ends initiates a second 10 minute session.
- If the user activity ceases within a 10-minute time interval, then restarts and lasts past the end of the current 10-minute time interval, it triggers the subsequent time interval.
- We calculate each user’s activity separately. For example, if 10 users are using ThoughtSpot for the same 10 minutes, we count 100 minutes of usage.

    ![Usage minutes example]({{ site.baseurl }}/images/consumption-example.png "Usage minutes example")

## User activity that incurs usage minutes
We define user activity as any user-triggered (initiated) action in ThoughtSpot, starting from the time the user initiates the action, until the time that the results of the action(s) become visible to the user of the product. This includes any time used by ThoughtSpot to process the user-triggered action in order to present the results to the user. We measure user activity in [usage minutes](#usage-minutes). You can consume usage minutes during implementation and training prior to go-live, as well as after.

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

## User activity that does not incur usage minutes
The following do not count toward consumption:

* The only click that does not count as user activity is clicking **Sign out**.
* Any action that happens outside the product or is not user-triggered inside the product is not considered user activity. For example: the system sending out a scheduled pinboard, a user receiving emails generated by ThoughtSpot based on actions such as scheduled pinboards, welcome or other kinds of emails, and emails sent out as a result of “Following” metrics in the product do not count as user activity. (*However, if the user logs in to the product as a result of these emails, that will start user activity*).
* Any non-user-initiated activity in the system does not count as “user activity”. This includes automatically triggered SpotIQ analyses, indexing or other non-user-initiated queries against external warehouses and any other background processes or daemons that are not a result of an explicit user triggered action.
* Any scrolling on ThoughtSpot product pages that does not update any content on the page does not count towards consumption.
* Leaving ThoughtSpot open in another tab does not count toward consumption.

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

## Consumption data storage
ThoughtSpot stores your consumption data and keeps it secure. A dedicated Amazon S3 bucket is set up to store the user activity CSV files temporarily. Then, the S3 data is uploaded to a searchable data store (Amazon Redshift). There is an S3 bucket prefix for each customer and a unique key for each customer to encrypt it. The encryption key is stored in AWS KMS. As part of the pricing configuration, the customer cluster is configured with an access key to have access to the S3 bucket prefix unique to the cluster. ThoughtSpot deploys and maintains an Amazon Redshift database to load the consumption pricing data. Every customer cluster that is enabled for consumption pricing gets access to only that cluster’s consumption pricing data. A unique database user is created in Redshift and configured in the customer cluster as part of the pricing configuration. This results in a unique Embrace connection per customer cluster to the ThoughtSpot manager consumption pricing database (Redshift). This is used to view the consumption pricing related reports in the customer's ThoughtSpot instance.
