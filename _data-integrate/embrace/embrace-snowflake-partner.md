---
title: [Snowflake Partner Connect]
last_updated: 2/21/2019
toc: true
summary: "With Snowflake Partner Connect you can easily create a Snowflake trial account with ThoughtSpot to try ThoughtSpot Embrace through a simple cloud-based deployment."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
With Snowflake Partner Connect, you can quickly and easily try out using Snowflake connected to ThoughtSpot with ThoughtSpot Embrace.

Snowflake Partner Connect benefits:
- Easy to sign up
- Up and running in 5 minutes
- Zero ThoughtSpot software cost
- Trial data already loaded into Snowflake
- No or minimal data modeling
- Successful search-driven insights within minutes of launch

## Features

TBD

## Sign up for Partner Connect

To sign up for Partner Connect, do the following:

1. Log in to your Snowflake account, or sign up for a [free trial](https://trial.snowflake.com/){:target="_blank"}.

2. Click **Partner Connect**.

3. Click **ThoughtSpot**.
   The _Connect to ThoughtSpot_ window appears.

4. Click **Connect**.
    A ThoughtSpot account is created for you and an email with activation instructions is sent to the email address associated with your Snowflake account.

5.      

## Deploy Cloud Express

To deploy Cloud Express, do the following:

1. Open the email you received and download the license key to your computer.
2. Click the link in the email to go to the [AWS marketplace](https://aws.amazon.com/marketplace){:target="_blank"}.
3. Search for ThoughtSpot in AWS marketplace
4. In the search results, click the free trial for Cloud Express.
5. Sign in to AWS using your corporate account.
6. Click the **Continue to Subscribe** button.
7. Accept the terms and conditions, by clicking **Accept Terms**, and then click **Continue to Configuration**.
8. On the _Configure this software_ page, select software version 6.0, your region, and click **Continue to Launch**.
9. On the _Launch this software_ page, if you have not signed up yet, click **Usage Instructions** and follow the instructions in step 2 of [Sign up for Cloud Express]({{ site.baseurl }}/data-integrate/embrace/embrace-cloud-express.html#sign-up-for-cloud-express). Once you're signed up, go to the next step.
10. On the _Launch this software_ page, work with your IT group to select the VPC, Subnet and Keypair settings, and then click **Launch**. Once your ThoughtSpot instance launches, the _Launch this software_ page appears.
11. Click the **EC2 Console** link to view the status of your instance.
12. Save the **Instance ID**, and, under the _Description_ tab at the bottom of the page, the **IPv4 Public IP**. You use the Instance ID to sign in to your instance. The IPv4 Public IP is the URL of your instance.
13. Once your instance is up and running, go to the URL you copied in the previous step and sign in to your ThoughtSpot instance, using the following credentials:
  - Username: **tsadmin**
  - Password: **\<Instance-ID>-TS** _(example: i-035ab9c2900ed9fbf-TS)_
      After you sign in, the _Upload the license key file_ page appears.
14. Upload the license key file you received from ThoughtSpot.
15. After the license key file is uploaded, you are interactively guided through onboarding into ThoughtSpot.
16. If you are going to connect to a Snowflake data warehouse, be sure to enable AWS Private Link for Snowflake. For details, see Snowflake's documentation [Enabling AWS PrivateLink](https://docs.snowflake.net/manuals/user-guide/admin-security-privatelink.html#enabling-aws-privatelink){:target="_blank"} for details.

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
