---
title: [Cloud Express for Embrace]
last_updated: 10/21/2019
toc: true
summary: "With Cloud Express, you can easily try ThoughtSpot Embrace through a simple cloud-based deployment."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
With Cloud Express, you can easily connect your production data in an existing cloud data warehouse to ThoughtSpot using ThoughtSpot Embrace.  

Cloud Express benefits:
- Easy to sign up
- Up and running in 5 minutes
- Zero ThoughtSpot software cost
- No more than $100 to $150 per month infrastructure cost
- No or minimal data modeling
- Successful search-driven insights in 45 minutes from launch

## Supported features

- 5 Users
- 20 million rows
- Snowflake, AWS Redshift data warehouses
- SAML (through the ThoughtSpot Management Console)
- Restore from snapshot (through the ThoughtSpot Management Console)
- Self-service upgrade (Download and access for new release)
- Measure usage (#users created, # rows, queries, objects created, other) via MixPanel

## Unsupported features

- User data upload
- Backup
- Restore from backup

## Sign up for Cloud Express

To sign up for Cloud Express, do the following:

1. Go to the ThoughtSpot marketing site [URL TBD].
2. Sign up by providing the following information:
   - Name
   - Email address
   - Company name
   - Phone number
3. After you sign up, you receive an email that contains a license key and instructions.

## Deploy Cloud Express

To deploy Cloud Express, do the following:

1. Open the email you received and download the license key to your computer.
2. Click the link in the email to go to the [AWS marketplace](https://aws.amazon.com/marketplace){:target="_blank"}.
3. Search for ThoughtSpot in AWS marketplace
4. In the search results, click the free trial for Cloud Express.
5. Sign in to AWS using your corporate account.
6. Click the **Continue to Subscribe** button.
7. Accept the terms and conditions, by clicking **Accept Terms**, and then click **Continue to Configuration**.
8. Enter the environmental details for your infrastructure (VPC, Subnet, Security Group).
9. Enable AWS Private Link for Snowflake. See Snowflake's documentation [Enabling AWS PrivateLink](https://docs.snowflake.net/manuals/user-guide/admin-security-privatelink.html#enabling-aws-privatelink){:target="_blank"} for details.
10. Launch your Snowflake instance in AWS.

## Connect to your data warehouse

Before you begin, read the available best practices for your data warehouse:
- [Snowflake best practices]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)

To connect to your data warehouse, do the following:

1. Sign in to your ThoughtSpot instance.
2. Connect to your data warehouse. For details, see:
- [Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)
- [Add a Redshift connection]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-add.html)
- [Add a BigQuery connection]({{ site.baseurl }}/data-integrate/embrace/embrace-gbq-add.html)
- [Add a Synapse connection]({{ site.baseurl }}/data-integrate/embrace/embrace-synapse-add.html)  

   When you create a connection to your data warehouse, you specify the tables and columns you want to link to.

3. Once you create your connection, you can search the connected tables and columns of your data warehouse right away, as you would any tables and columns in ThoughtSpot's internal database.  
