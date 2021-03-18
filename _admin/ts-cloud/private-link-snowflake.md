---
title: [Enabling an AWS PrivateLink between ThoughtSpot Cloud and your Snowflake data warehouse]
last_updated: 3/16/2021
summary: "Learn how to deploy an AWS PrivateLink between your Snowflake data warehouse and the ThoughtSpot Cloud tenant."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your data's security is important. To ensure a secure two-way data exchange between your cloud data warehouse and the ThoughtSpot Cloud tenant, you can use an AWS PrivateLink. This option is currently available for your Snowflake or Redshift data warehouse connections. This article details how to enable a PrivateLink for Snowflake; you can also enable it for [Redshift]({{ site.baseurl }}/admin/ts-cloud/private-link-redshift.html).

To deploy an AWS PrivateLink, you must work with [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) and follow the procedure in this article.

{: id="prerequisites"}
## Prerequisites
- You must have a Snowflake account
- The ThoughtSpot cluster must be in the same AWS region as your Snowflake account
- You must obtain the ThoughtSpot AWS Account ID from [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). You may need a separate Account ID for staging or dev environments.

## Enable an AWS PrivateLink for Snowflake
To deploy an AWS PrivateLink between your Snowflake data warehouse and the ThoughtSpot Cloud tenant, follow these steps.

1. [Request Snowflake PrivateLink configuration](#request-configuration)

3. [Exchange AWS and ThoughtSpot information with ThoughtSpot Support](#exchange-information)

4. [Configure Embrace](#embrace)

{: id="request-configuration"}
### Request Snowflake PrivateLink configuration
1. Send a support request to Snowflake, asking them to configure an AWS PrivateLink. You must provide the following information:
* Snowflake account URL
* ThoughtSpot AWS Account ID. You obtained ThoughtSpot's AWS Account ID from [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) in the [prerequisites](#prerequisites). You may need a separate Account ID for staging or dev environments.

2. Snowflake provides the following details with their response:
- VPC Endpoint Service Name
- Private DNS records required for Snowflake clients

{: id="exchange-information"}
### Exchange AWS and ThoughtSpot information with ThoughtSpot Support
1. Send the **Service name** and the **account name** from the DNS records to ThoughtSpot Support. You gathered this information in step 2 of [Request Snowflake PrivateLink configuration](#request-configuration).

2. After ThoughtSpot Support configures the AWS PrivateLink in ThoughtSpot, ask them to send you the PrivateLink Snowflake account name.

{: id="embrace"}
### Configure Embrace
[Configure Embrace for Snowflake]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-snowflake.html), using the PrivateLink Snowflake account name from ThoughtSpot Support.
