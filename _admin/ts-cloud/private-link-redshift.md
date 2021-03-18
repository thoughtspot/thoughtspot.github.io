---
title: [Enabling an AWS PrivateLink between ThoughtSpot Cloud and your Redshift data warehouse]
last_updated: 3/16/2021
summary: "Learn how to deploy an AWS PrivateLink between your Redshift data warehouse and the ThoughtSpot Cloud tenant."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your data's security is important. To ensure a secure two-way data exchange between your cloud data warehouse and the ThoughtSpot Cloud tenant, you can use an AWS PrivateLink. This option is currently available for your Snowflake or Redshift data warehouse connections. This article details how to enable a PrivateLink for Redshift; you can also enable it for [Snowflake]({{ site.baseurl }}/admin/ts-cloud/private-link-snowflake.html).

To deploy an AWS PrivateLink, you must work with [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) and follow the procedure in this article.

{: id="prerequisites"}
## Prerequisites
- You must have a Redshift account
- The ThoughtSpot cluster must be in the same AWS region as your Redshift account
- You must obtain the ThoughtSpot AWS Account Amazon Resource Name (ARN) from [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). You may need a separate ARN for staging or dev environments.

## Enable an AWS PrivateLink for Redshift
To deploy an AWS PrivateLink between your Redshift data warehouse and the ThoughtSpot Cloud tenant, follow these steps.

1. [Configure the Endpoint Service in your AWS Console](#configure-aws)

3. [Exchange AWS and ThoughtSpot information with ThoughtSpot Support](#exchange-information)

4. [Accept the PrivateLink Request](#accept-request)

4. [Configure Embrace](#embrace)

{: id="configure-aws"}
### Configure the Endpoint Service in your AWS Console
After completing the [prerequisites](#prerequisites), you must configure the Endpoint Service.

1. Log into the AWS Console.

2. Create a Network Load Balancer (NLB) routing TCP traffic on port 5439 to your Redshift database.

1. Navigate to **AWS VPC Console > Endpoint Services > Create Endpoint Service**.

2. Select the Redshift NLB you created in step 2.

5. Select **Require Acceptance for Endpoint**.

6. Select **Endpoint Service > Whitelist principles > Add principles to whitelist**. Add the ThoughtSpot AWS Account Amazon Resource Name (ARN) that you obtained from ThoughtSpot Support in the [prerequisites](#prerequisites). You may need a separate ARN for staging or dev environments.

7. Select **Endpoint Service**.

8. Write down the values for:

* **Service name**: for example, *com.amazonaws.vpce.us-west-2.vpce-svc-00b9b06a71553a86e*

* **Availability zones**: for example, *us-west-2a (usw2-az1)*

    You must provide the service name and availability zones to ThoughtSpot Support.

{: id="exchange-information"}
### Exchange AWS and ThoughtSpot information with ThoughtSpot Support
1. Send the **Service name** and **Availability zones** you gathered in step 8 of [Configure the Endpoint Service in your AWS Console](#configure-aws) to ThoughtSpot Support.

2. After ThoughtSpot Support configures the AWS PrivateLink in ThoughtSpot, ask them to send you the PrivateLink Endpoint DNS name.

{: id="accept-request"}
### Accept the PrivateLink Request
1. Navigate to **VPC > Endpoint Services**.

2. Select the Endpoint Service you created in [Configure the Endpoint Service in your AWS Console](#configure-aws).

3. Select **Endpoint Connections**.

4. Select the connection from the ThoughtSpot AWS Account. Its status should be *Pending Acceptance*.

5. Select **Actions > Accept endpoint connection request**.

{: id="embrace"}
### Configure Embrace
[Configure Embrace for Redshift]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-redshift.html), using the PrivateLink Endpoint DNS name from ThoughtSpot Support.
