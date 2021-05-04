---
title: ["What's new in Free Trial"]
keywords: "free trial"
last_updated: 04/28/2021
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---
## April 28, 2021 

{: id="countdown"}
### Free Trial Countdown

We have added a white banner to the top of the screen to count down users’ remaining days on Free Trial. The countdown banner turns yellow once you have reached your final week on Free Trial. At any time, you can click *Upgrade now* to upgrade to a paid account. The *Upgrade now* link takes you to Intercom to connect to ThoughtSpot.

![]({{ site.baseurl }}/images/free-trial-countdown-banner-7.png "7-day countdown for Free Trial")

{: id="simplified-snowflake-url"}
### Simplified Snowflake account name

We have simplified the steps to add a Snowflake connection. When prompted to enter the Snowflake account name, you can now copy-paste the entire URL of your Snowflake account, and ThoughtSpot will extract the account name for you. Previously, users had to select the account name from the URL and enter it in the Snowflake account field.

![]({{ site.baseurl }}/images/free-trial-snowflake-url.png "Snowflake Account name or URL for connection")

{: id="thoughtspot-connections"}
### ThoughtSpot connections

We have renamed ThoughtSpot Embrace to Connections within the product. Now, Free Trial users can access Connections by clicking *Connections* on the *Data* page. Functions like `sql_int_op` that were previously available under *Embrace passthrough* are now available under *Connection passthrough*.

![]({{ site.baseurl }}/images/free-trial-data-connections.png "Data Connections page")


## April 7, 2021

{: id="fixed-issues"}

These are the issues we fixed in the Free Trial April 7th release.

* Users who attempt to log in after completing their 30-day free trial see a prompt to contact Sales.

![]({{ site.baseurl }}/images/free-trial-account-expiry.png "Account expiration message")

* Users who attempt to log in with a previous password see an error message on their first attempt. Previously, they would need to attempt twice to see this error message.

![]({{ site.baseurl }}/images/free-trial-password-reset.png "Login with previous password error message")

## March 31, 2021

{: id="unicode"}
### Unicode support

We added unicode character matching in Search Answers, extending support to all languages and character sets. You can now search all artifacts that use unicode characters in titles, descriptions, metadata, and keywords, and see the correct results.

![]({{ site.baseurl }}/images/search-answers-unicode.png "Unicode support")

<!--{: id="auto-worksheet"}

Starting with the March 2021 Free Trial release, you can auto-generate a Worksheet during onboarding. When setting up a Worksheet through the Setup tab, you can view suggested joins, and take advantage of data modeling best practices, making your data easier to search.

## About Worksheets

Users are often unfamiliar with tables and how they relate to one another. A Worksheet groups multiple related tables together in a logical way. Using Worksheets has the following advantages:

* Pre-join multiple tables together.
* Give a user or group access to only part of the underlying data.
* Include a derived column using a formula.
* Rename columns to make the data easier to search.
* Build in a specific filter or aggregation.
* Give users a filtered set of data to search.

Typically, you create one Worksheet for each set of fact and dimension tables. For example, you may have a sales fact table and an inventory fact table. Each of these fact tables shares common dimensions like date, region, and store. In this scenario, you would create two Worksheets: sales and inventory. The following diagram depicts the workflow for creating the sales Worksheet.

![]({{ site.baseurl }}/images/workflow_create_worksheet.png "Create worksheet")

## Generating Worksheets

To generate a Worksheet through the Setup tab, follow these steps:

1. Complete Step 1 of Setup, <a href="{{ site.baseurl }}admin/ts-cloud/connect-data.html">setting up your connection</a>.

2. Click Step 2, *Model data and create a Worksheet.* Select *Create Worksheet* in the lower left corner. A list of the available fact tables from your connection appears.

3. The first fact table alphabetically will be selected by default. Choose the fact table from which you would like to create your Worksheet by selecting the box to the left of its name.

   {% include note.html content="After the Worksheet is created, you will have the option to add more fact tables to its schema."%}

4. Click *Next* in the upper right corner. A list of the available dimension tables from your connection appears.

5. Choose the dimension table(s) to join to your fact table and click *Next*. You can choose up to four dimension tables.

6. The joins interface appears, showing a join based on a column of data both tables contain. You can proceed with the suggested join, or click the column names to change the join.

   {% include note.html content="The default join type is Inner, which will yield all search results with matching values from the fact table and the dimension table. You can click the Venn diagram icon to change the join type."%}

7. Click *Next*. The columns view of your Worksheet appears. You may notice that the column names have been changed to make them more easily searchable (for example, underscores may be replaced with spaces).

8. [Optional] Click *My Worksheet* to change the name of your Worksheet.

9. [Optional] Click the column titles to change the names of your searchable columns. You can also click the blue check-box next to a column name to remove it from your Worksheet.

10. [Optional] Click the data type under *Type* to change the recorded data type. For example, you can change a data type like Zipcode from ‘Measure’ to ‘Attribute’.

11. Click *Save worksheet*. Your Worksheet is now available to search and share.

   {% include note.html content="Joins created in the setup of a Worksheet are inherited at the table level. To remake your auto-generated Worksheet through the Setup tab, you must first delete the Worksheet, then delete the joins at the table level."%}
-->
