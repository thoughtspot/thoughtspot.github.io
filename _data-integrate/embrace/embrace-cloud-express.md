---
title: [Cloud Express for Embrace]
last_updated: 2/18/2020
toc: true
summary: "With Cloud Express, you can easily try ThoughtSpot Embrace through a simple cloud-based deployment."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
With Cloud Express, you can easily connect your production data in an existing cloud data warehouse to ThoughtSpot using ThoughtSpot Embrace.  

## Benefits
- Easy to sign up
- Deploy with a few clicks in your secure cloud environment
- Zero ThoughtSpot software cost

## Supported capabilities and restrictions

- AWS-marketplace-driven deployment
- Embrace support for Snowflake and Amazon Redshift
- 5 users
- 20 million rows of Embrace data
- No Falcon data upload
- No access to ThoughtSpot support. Use ThoughtSpot documentation to set up and maintain your Cloud Express deployment.

## Workflow

There are five steps in the Cloud Express workflow:  
![]({{ site.baseurl }}/images/workflow.svg)

These steps are detailed in the sections that follow.

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

3. Search for ThoughtSpot in the AWS marketplace.

4. In the search results, click the free trial for Cloud Express.

5. Sign in to AWS using your corporate account.

6. Click the **Continue to Subscribe** button.

7. Accept the terms and conditions, by clicking **Accept Terms**, and then click **Continue to Configuration**.

8. On the _Configure this software_ page, select software version 6.0, your region, and click **Continue to Launch**.

9. On the _Launch this software_ page, if you have not signed up yet, click **Usage Instructions** and follow the instructions in step 2 of [Sign up for Cloud Express]({{ site.baseurl }}/data-integrate/embrace/embrace-cloud-express.html#sign-up-for-cloud-express). Once you're signed up, go to the next step.

10. On the _Launch this software_ page, work with your IT group to select the VPC, Subnet and Keypair settings, and then click **Launch**. Once your ThoughtSpot instance launches, the _Launch this software_ page appears.

11. Click the **EC2 Console** link to view the status of your instance.

12. Save the **Instance ID**, and, under the _Description_ tab at the bottom of the page, the **IPv4 Public IP**. You use the Instance ID to sign in to your instance. The IPv4 Public IP is the URL of your instance.

    {% include note.html content="If you are using Snowflake Business Critical (or higher) and wish to use PrivateLink with your account to directly connect your Snowflake account to one or more AWS VPCs, please contact Snowflake Support and request it to be enabled." %} 

## Sign in and connect to your data warehouse

Before you begin, read the available best practices for your data warehouse:
- [Snowflake best practices]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)

To connect to your data warehouse, do the following:

1. Once your instance is up and running, go to the URL you copied in the previous section and sign in to your ThoughtSpot instance, using the following credentials:
  - Username: **tsadmin**
  - Password: **\<Instance-ID>-TS** _(example: i-035ab9c2900ed9fbf-TS)_

    After you sign in, the _Upload the license key file_ page appears.

2. Upload the license key file you received from ThoughtSpot.

3. After the license key file is uploaded, you are interactively guided through onboarding into ThoughtSpot.

4. Connect to your data warehouse. For details, see:
- [Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)
- [Add a Redshift connection]({{ site.baseurl }}/data-integrate/embrace/embrace-redshift-add.html)  

    When you create a connection to your data warehouse, you specify the tables and columns you want to link to.

3. Once you create your connection, you can search the connected tables and columns of your data warehouse right away, as you would any tables and columns in ThoughtSpot's internal database.

## Model Data

To benefit from the full power of ThoughtSpot, you can model your data in many ways.

ThoughtSpot recommends that you start with the following:
- Create table joins (if needed). For details, see: [Join a table or view to another data source]({{ site.baseurl }}/admin/data-modeling/create-new-relationship.html)
- Create a worksheet. For details, see: [Create and use worksheets]({{ site.baseurl }}/admin/worksheets/about-worksheets.html)

  Examples of data modeling that you can do in a worksheet include:
  - Removing columns that aren't needed
  - Adding data labels and synonyms
  - Adding calculations, such as margin  

For more information about data modeling, see: [Overview of data modeling settings]({{ site.baseurl }}/admin/data-modeling/data-modeling-settings.html)

## Search

Once you've modeled your data, you're ready to search your dataset.

For search basics, see: [Start a new search]({{ site.baseurl }}/end-user/search/start-a-new-search.html)

## Related information

- [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html)
