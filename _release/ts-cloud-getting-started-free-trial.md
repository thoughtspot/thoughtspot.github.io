---
title: [Getting Started with ThoughtSpot Free Trial]
last_updated: 11/05/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

Completing the following steps helps you and other users in your organization get the most value from your data during the trial period. A little bit of time setting up ThoughtSpot has a big impact.

## Before you begin

Before you start, review these talks to identify your ideal use case. The context helps you make account-related decisions and use ThoughtSpot effectively.

<div><iframe width="375" height="210" src="https://www.youtube.com/embed/_HqB__xe3bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
<a href="https://youtu.be/_HqB__xe3bo" target="_blank">ThoughtSpot Success Series: Defining a ThoughtSpot Use Case</a>
</div>
<br/>
<div><iframe width="375" height="210" src="https://www.youtube.com/embed/W5dwAmLSwT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
<a href="https://youtu.be/W5dwAmLSwT0"  target="_blank">ThoughtSpot Success Series: Use Case Prioritization</a>
</div>

We highly recommend that you register for the free ThoughtSpot U course that covers the material in this section, [Getting Started with ThoughtSpot Analytics Cloud](https://training.thoughtspot.com/getting-started-with-thoughtspot-cloud){: target="_blank"}.

We also provide these instructions in <a href="{{ site.baseurl }}/downloads/ts-cloud-free-trial-get-started.pdf" download>PDF format</a>.

## Step 1: Create a ThoughtSpot Community account

A ThoughtSpot Community account lets you ask questions in our product forums, explore best practices from other customers, sign up for events, and contact support.

[Create a Community account](https://community.thoughtspot.com/customers/s/login/SelfRegister){:target="_blank"}

## Step 2: Activate your ThoughtSpot Cloud account

We will send you an email that contains the administrator credentials to log in for the first time. Check your inbox, then click to access the free trial cluster. Stay logged in to complete the rest of the setup.

### Password requirements
When you start using the ThoughtSpot Free Trial, you see the ThoughtSpot password verification checklist. Passwords must meet the following requirements:

- 8 or more characters.
- 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
- Pass a complexity and uniqueness test that checks for known patterns and simple words. ThoughtSpot rejects passwords that are not complex enough. For more information, see the [Dropbox password library](https://github.com/dropbox/zxcvbn){: target="_blank"}.
- No blocked words. By default, the blocked words are: your username and any part of your display name.

## Step 3: Connect to your data source
Completing this step lets all users in your organization perform live queries. Choose your cloud data warehouse type, and follow the connection instructions.
- [Amazon Redshift]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-redshift.html){:target="_blank"}
- [Azure Synapse]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-synapse.html){:target="_blank"}
- [Databricks]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-databricks.html){:target="_blank"}
- [Google BigQuery]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-gbq.html){:target="_blank"}
- [Oracle ADW]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-adw.html){:target="_blank"}
- [SAP HANA]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-hana.html){:target="_blank"}
- [Snowflake]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-snowflake.html){:target="_blank"}
- [Starburst]({{site.baseurl}}/admin/ts-cloud/ts-cloud-embrace-starburst.html){:target="_blank"}
- [Teradata]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-teradata.html){:target="_blank"}
- [Upload flat data file (CSV)]({{site.baseurl}}/release/ts-cloud-getting-started-free-trial.html#upload-csv){:target="_blank"}

## Step 4: Model your data for searches

ThoughtSpot automatically optimizes your data for search. It models and configures most details. However, we recommend that you adjust the modeling settings to align with your identified use cases, and improve the experience for other users.

- [Data modeling]({{site.baseurl}}/admin/data-modeling/about-data-modeling-intro.html){:target="_blank"}
- [Join tables]({{site.baseurl}}/admin/ts-cloud/tables-join.html){:target="_blank"}

## Step 5: Create a worksheet

Worksheets make it easier for everyone in your organization to search data and create visualizations. Use the following step-by-step instructions to create your first worksheet.

- [Create and use worksheets]({{site.baseurl}}/admin/worksheets/about-worksheets.html){:target="_blank"}

## Step 6: Learn search essentials

After you finish creating worksheets, you are ready to search. Review the key concepts to get started, and how to help others in your organization become effective searchers.

- [Search overview]({{site.baseurl}}/end-user/search/search-overview.html){:target="_blank"}
- [Keyword reference]({{site.baseurl}}/reference/keywords.html){:target="_blank"}
- [Understanding Charts]({{site.baseurl}}/end-user/search/about-charts.html){:target="_blank"}
- [Understanding formulas in searches]({{site.baseurl}}/complex-search/add-formula-to-search.html){:target="_blank"}

## Step 7: Make a default Liveboard

Liveboards are interactive collections of charts and tables. Set up a shared Liveboard now, so everyone who joins your organization can access valuable information.

- [Basic Liveboard usage]({{site.baseurl}}/end-user/pinboards/about-pinboards.html){:target="_blank"}

## Keep learning

- [ThoughtSpot Cloud documentation](https://cloud-docs.thoughtspot.com){: target="_blank"}
- [Training: Getting started with ThoughtSpot Analytics Cloud](https://training.thoughtspot.com/getting-started-with-thoughtspot-cloud){:target="_blank"}
- [Thoughtspot Success Series](https://youtu.be/EYHa8Ck3tdw){:target="_blank"}
- [ThoughtSpot Support Handbook]({{site.baseurl}}/admin/ts-cloud/ts-cloud-support-handbook.html) (<a href="{{ site.baseurl }}/downloads/support-handbook.pdf" download>PDF</a>)

## Get connected

- [Visit YouTube channel](https://www.youtube.com/thoughtspot){:target="_blank"}
- [Schedule office hours](https://thoughtspotcs-officehours.youcanbook.me/){:target="_blank"}
- [Join upcoming events](https://groups.thoughtspot.com/events/#/list){:target="_blank"}

{: id="upload-csv"}
## Upload a flat data file (CSV)

To upload a CSV file to Free Trial, follow these steps:

1. Navigate to the Data tab, and select **Upload CSV** from the **More** menu in the upper right corner of your screen. <br />
Alternatively, navigate to step one of Setup, and click **upload CSV**.

2. Upload the CSV or Excel file using one of these options:

   - Click **Browse your files** and select the file.
   - Drag and drop the file into the drop area.
   - **Note**: Free Trial has a CSV file size limit of 10 MB.

3. Answer the question **Are the column names already defined in the file header?**

4. Answer the question **Are the fields separated by?**

5. Click **Next.**

6. If column names are missing, click the column header to add column names that describe the attributes or measures in the columns.<br />
You can also change existing names to a simpler or more human-readable format.

7. Click **Next**.

8. Review the automatically-generated data types for each column, and make necessary changes. <br /> There are eight data types: **Integer**, **Large Integer**, **Decimal**, **Text**, **Date**, **Date_Time**, and **Time**.

9. Click **Upload**.

   - **Note**: Free Trial users have an upload limit of one CSV file per user.

To replace your uploaded CSV file, follow these steps:

1. Navigate to the Data tab, and click the **More** menu icon in the upper right corner of your screen.

2. Select **View CSV**. The details of your uploaded file appear.

3. Select **Replace CSV** from the top right corner of the screen.

3. Answer the question **Are the column names already defined in the file header?**

4. Answer the question **Do you want to append to the existing data or overwrite it?**<br />

4. Answer the question **Are the fields separated by?**

5. Click **Next**.

6. Preview your data and click **Upload**.
