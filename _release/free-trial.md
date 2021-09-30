---
title: ["What's new in Free Trial"]
keywords: "free trial"
last_updated: 09/30/2021
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---

## September 30, 2021

### Free Trial Make It Shine

These are the changes we made to Free Trial this week:

- We fixed an issue where attempts to skip steps during Onboarding by clicking the numbered steps at the top of the screen caused loading delays.
- We fixed an issue where the Free Trial "Invite others" feature created duplicate objects on the third-party service ThoughtSpot uses to send emails.
- We fixed an issue where Redshift fact tables timed out during loading in the Modeling stage of Setup. 

## September 20, 2021

### Data source tooltips

ThoughtSpot allows you to search on multiple data sources as long as your sources are related by a join. When you select the data source for your search, unrelated data sources gray out in the Data Sources side panel. To find out why a data source is marked unavailable, click on the data source name for a tooltip explanation.

![]({{ site.baseurl }}/images/free-trial-search-tooltips.png "Free Trial data source tooltips"){: .inline}


### Free Trial Make It Shine

These are the changes we made to Free Trial this week:

- We fixed toast notifications on the homepage to display multiple changes to the same component.
- Users with accounts where the maximum file upload count is 0 no longer see the option to upload CSV files during setup.
- Users can now exit 3-step setup at any time. <br/>
  ![]({{ site.baseurl }}/images/free-trial-checklist-exit.png "Free Trial exit 3-step-checklist"){: .inline}
- Column titles in all capital letters now correct to title-case during auto-worksheet creation.


## Aug 19, 2021

### Worksheet Column tooltips

When editing a Worksheet in the *Columns* tab, you can rename the columns, add searchable synonyms, change search indexing, among other options. To learn more about changes you can make and about the default column behavior, hover over each column type to see a brief explanation of the column meaning. In the example below, hovering over the “Hidden” column type reveals that selecting *Yes* removes a column from appearing during searches.

![]({{ site.baseurl }}/images/free-trial-worksheet-tooltips.png "Free Trial worksheet column tooltips"){: .inline}

### Free Trial Make It Shine

These are the changes we made to Free Trial this week:

- Joins created during Auto Worksheet setup now default to many-to-one join type, rather than one-to-one. For more information, see [Join cardinality]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-cardinality).
- When logging in for the first time as an Analyst, ThoughtSpot prompts you to first set up a connection, rather than searching on sample data.
- When setting up an Embrace connection, the final step of set-up now asks users to choose both tables and columns for the connection.
![]({{ site.baseurl }}/images/free-trial-embrace-table-columns.png "Free Trial Embrace tables and columns"){: .inline}


## Aug 12, 2021

### Invitation to shared groups

Users invited to Free Trial through the “Invite others” feature now share access to all groups belonging to the user who invited them. This feature facilitates team sharing and analysis of data objects belonging to shared groups. Due to shared group privileges, invited users can now access SpotIQ insights from the **SpotIQ** tab, and can upload CSV files from the **Setup** tab.

![]({{ site.baseurl }}/images/free-trial-invited-spotiq.png "Free Trial invited users privileges"){: .inline}


## Aug 5, 2021

### Naming joins in Free Trial

Previously, the **Create join** process automatically named joins according to the source and destination table names. This practice prevented users from creating multiple joins between the same two tables. To avoid duplicate join name errors, you can now give each join a unique name during the join creation process.

![]({{ site.baseurl }}/images/free-trial-create-join.png "Free Trial join creation page"){: .inline}

### Error message details

We revised the error messaging in Free Trial to include more pertinent details. Now, you can click **View Details** to see the reason for any error message, and to send an error report to ThoughtSpot.<br/>
![]({{ site.baseurl }}/images/free-trial-view-details.png "Free Trial view error details"){: .inline} <br/>
![]({{ site.baseurl }}/images/free-trial-error-report.png "Free Trial report error"){: .inline}


### Free Trial Make It Shine

We applied this fix to Free Trial:

- Users invited to join Free Trial through the “invite others” feature can now upload CSV files.


## June 30, 2021

{: id="worksheet-creation-existing-joins-message"}
### Worksheet creation with existing joins

When you select a fact table with existing joins during worksheet creation in Setup, ThoughtSpot automatically adopts the existing join. To simplify worksheet creation, ThoughtSpot now displays the names of pre-existing table joins. To change existing joins and create a new worksheet based on your fact table, navigate to the Data tab and select the table to delete the existing join(s).

![]({{ site.baseurl }}/images/free-trial-preexisting-join.png "Worksheet creation preexisting join message")

### Free Trial Make It Shine

These are the changes we made to Free Trial:

* To streamline user login, the login page now remembers user email addresses.
* The fact table description in worksheet creation now reads: "A fact table contains metrics like sales revenue, balance amount, or quantity. Typically, the table with the most records is your fact table."


## June 23, 2021

These are the changes we made to Free Trial:

* To facilitate connecting to your data using Redshift, users now see a connection creation checklist during the Redshift connection process. <br>
![]({{ site.baseurl }}/images/free-trial-add-connection-redshift.png "Redshift connection creation checklist"){: .inline}

* The **more options** menu on the Data page no longer contains the option to **View CSV** after a user deletes a previously uploaded CSV file. Now, users can immediately upload a new CSV file by selecting **Upload CSV**.

* We made the following design changes to Free Trial:
  * We adjusted the size of the video thumbnail that appears during Analyst onboarding.
  * We adjusted the size and height of the **Name Your Worksheet** dropdown during worksheet creation in Setup.

## June 11, 2021

{: id="invite-others"}
### Free Trial invite others

We streamlined the process to invite another user to Free Trial. Now, you can invite others directly from within Free Trial, and the invitee receives the Free Trial activation email in their inbox. Users you invite automatically join your group, and can access your shared data objects (worksheets, answers, pinboards, etc.). You can invite a maximum of five new users to join your group.

To invite a teammate to Free Trial, simply navigate to the **Setup** tab, click **Invite others** at the bottom of the screen, and enter your teammate’s email.

![]({{ site.baseurl }}/images/free-trial-invite-others.png "Invite others to ThoughtSpot")

![]({{ site.baseurl }}/images/free-trial-invite.png "Invite others to ThoughtSpot")


## June 9, 2021

{: id="password-creation-checklist"}
### Password creation checklist

We redesigned the account creation page to clarify the password requirements for new users. Now, when you first log in to Free Trial, the password verification checklist appears. Your password must contain:

- 8 or more characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character ( !, #, $, etc.)

![]({{ site.baseurl }}/images/free-trial-password-checklist.png "Password creation checklist")

{: id="worksheet-creation-tooltips"}
### Worksheet creation tooltips in Setup

To simplify the process of creating worksheets on Free Trial, we added tooltips to explain the difference between fact tables and dimension tables. When creating a worksheet, you first select the fact table that forms the base of your business use case, then add dimension tables with common dimensions to your fact table. For example, to create a Sales worksheet, you join together a sales fact table with dimension tables that share common dimensions like date, region, and store.

The worksheet creation tooltips appear when you create a worksheet during onboarding. To view examples of typical fact tables, proceed to step one of the worksheet creation process in Setup, and click the information icon to the right of the **Select a fact table** dialog. To view examples of typical dimension tables, click the information icon to the right of the **Select up to 4 dimension tables** dialog.

![]({{ site.baseurl }}/images/free-trial-pendo-fact-table.png "Fact table tooltip"){: .inline}

![]({{ site.baseurl }}/images/free-trial-pendo-dimension-table.png "Dimension table tooltip"){: .inline}


### Free Trial Make It Shine

These are the fixes we applied to Free Trial:

* We resolved bugs to improve search data and answer functionality.

## May 26, 2021

{: id="make-it-shine"}
### Free Trial Make It Shine

These are the fixes we applied to Free Trial:

* To facilitate account creation and login, Free Trial login now asks for email address rather than user name.
![]({{ site.baseurl }}/images/free-trial-login-email-address.png "Email address login"){: .inline}

* The countdown banner for users on their last day of Free Trial now reads: “Only 1 day remaining in your free trial. Get ThoughtSpot for your organization. Upgrade now.”
![]({{ site.baseurl }}/images/free-trial-countdown-banner-1.png "One day remaining on free trial"){: .inline}

* The connection creation interface prompts users to “confirm” their connection.
![]({{ site.baseurl }}/images/free-trial-connection-confirm.png "Error message for incorrect user name"){: .inline}

* ThoughtSpot Free Trial does not send password reset emails to expired accounts.


## May 12, 2021

These are the changes we made to Free Trial.

* We fixed the username/password error message when users create a Snowflake connection. Previously, users who entered an incorrect username or password would see a Snowflake IP whitelisting error message.<br>
![]({{ site.baseurl }}/images/free-trial-username-error.png "Error message for incorrect user name"){: .inline}

* We removed the prompt to **Search now** after users create a connection. Now, users can return directly to Setup to continue setting up their Free Trial account.<br>
**Before:**<br>
![]({{ site.baseurl }}/images/free-trial-search-prompt.png "Prompt to Search Now"){: .inline}<br>
**After:**<br>
![]({{ site.baseurl }}/images/free-trial-no-search-prompt.png "Back to Setup"){: .inline}


## May 5, 2021

{: id="schedule-meeting"}
### Schedule time with product experts

To improve your product experience, we have added a feature to schedule one-on-one meetings with product experts. Now, when you run into an error or have a question about the product, you can reach out for help without ever leaving your page.

To schedule a meeting, click **Book 1:1 expert help** at the top of the page. Choose a time within the calendar, and enter your name and email before clicking **Confirm Booking**. After confirmation, you will receive a link to your Zoom meeting.

![]({{ site.baseurl }}/images/free-trial-expert-calendar.png "Book 1:1 expert help")

![]({{ site.baseurl }}/images/free-trial-confirm-meeting.png "Confirm meeting with product expert")

{: id="whats-new-with-free-trial"}
### What’s New with Free Trial

We added a "What’s New" section to the ThoughtSpot Information Center. This section highlights important features for different user personas. Click on the **help** icon![]({{ site.baseurl }}/images/icon-help-10-px.png "Help icon"){: .inline}. when the red notification appears to see new features. Click **Learn More** to browse our documentation, or click **Try it now** to experience it for yourself.

![]({{ site.baseurl }}/images/free-trial-whats-new.png "What’s New on Free Trial")

![]({{ site.baseurl }}/images/free-trial-learn-more.png "Learn more about new features")


{: id="duplicate-column-names-highlighted"}
### Worksheet duplicate column names error

When creating a Worksheet, all columns must have unique names. In order to prevent column name duplicate errors, ThoughtSpot highlights duplicate column names during Worksheet creation, before you can save the Worksheet. In previous releases, the **Cannot add duplicate column names** error message did not specify which columns were duplicates. We believe all analysts, including those on Free Trial, will love this enhancement.

![]({{ site.baseurl }}/images/free-trial-duplicate-columns.png "Duplicate columns error message")

{: id="add-snowflake-connection"}
### Add a Snowflake connection

We made the following changes to simplify the process of adding a Snowflake connection:

* By default, ThoughtSpot directs users to use Service Account. Previously, **Use OAuth** was the default option.
* We added a reminder that the Snowflake database name is case-sensitive.
* We added a connection creation checklist for Snowflake.

![]({{ site.baseurl }}/images/free-trial-add-snowflake-connection.png "Updates to Snowflake connection page")


## April 28, 2021

{: id="countdown"}
### Free Trial Countdown

We added a white banner to the top of the screen to count down users’ remaining days on Free Trial. The countdown banner turns yellow once you have reached your final week on Free Trial. At any time, you can click **Upgrade now** to upgrade to a paid account. The **Upgrade now** link takes you to Intercom to connect to ThoughtSpot.

![]({{ site.baseurl }}/images/free-trial-countdown-banner-7.png "7-day countdown for Free Trial")

{: id="simplified-snowflake-url"}
### Simplified Snowflake account name

We simplified the steps to add a Snowflake connection. When prompted to enter the Snowflake account name, you can now copy-paste the entire URL of your Snowflake account, and ThoughtSpot will extract the account name for you. Previously, users had to select the account name from the URL and enter it in the Snowflake account field.

![]({{ site.baseurl }}/images/free-trial-snowflake-url.png "Snowflake Account name or URL for connection")

{: id="thoughtspot-connections"}
### ThoughtSpot connections

We renamed ThoughtSpot Embrace to Connections within the product. Now, Free Trial users can access Connections by clicking **Connections** on the **Data** page. Functions like `sql_int_op` that were previously available under **Embrace passthrough** are now available under **Connection passthrough**.

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
