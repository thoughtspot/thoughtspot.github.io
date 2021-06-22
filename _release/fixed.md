---
title: ["Fixed issues"]
keywords: "fixed issues"
last_updated: 09/09/2020
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---
These are the issues we fixed in recent ThoughtSpot releases.

<ul>
<li>
<details>
<summary>7.0.X Release</summary>
<ul>
<li><a href="#7-0-1">7.0.1 Fixed issues</a></li>
<li><a href="#7-0">7.0 Fixed issues</a></li>
</ul>
</details></li>
<li>
<details>
<summary>6.3.X Releases</summary>
<ul>
<li><a href="#6-3-1">6.3.1 Fixed issues</a></li>
<li><a href="#6-3">6.3 Fixed issues</a></li>
</ul>
</details></li>
<li>
<details>
<summary>6.2.X Releases</summary>
<ul>
<li><a href="#6-2-1">6.2.1 Fixed issues</a></li>
<li><a href="#6-2">6.2 Fixed issues</a></li>
</ul>
</details></li>
<li>
<details>
<summary>6.1.X Releases</summary>
<ul>
<li><a href="#6-1-1">6.1.1 Fixed issues</a></li>
<li><a href="#6-1">6.1 Fixed issues</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>6.0.X Releases</summary>
<ul>
<li><a href="#6-0-5">6.0.5 Fixed issues</a></li>
<li><a href="#6-0-4">6.0.4 Fixed issues</a></li>
<li><a href="#6-0-3">6.0.3 Fixed issue</a></li>
<li><a href="#6-0-2">6.0.2 Fixed issues</a></li>
<li><a href="#6-0-1">6.0.1 Fixed issues</a></li>
<li><a href="#6-0">6.0 Fixed issues</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>5.3.X Releases</summary>
<ul>
<li><a href="#5-3-2-cu3">5.3.2 CU3 Fixed issues</a></li>
<li><a href="#5-3-2-cu2">5.3.2 CU2 Fixed issues</a></li>
<li><a href="#5-3-2-cu1">5.3.2 CU1 Fixed issues</a></li>
<li><a href="#5-3-2">5.3.2 Fixed issues</a></li>
<li><a href="#5-3-1">5.3.1 Fixed issues</a></li>
<li><a href="#5-3">5.3 Fixed issues</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>5.2.X Releases</summary>
<ul>
<li><a href="#5-2-3">5.2.3 Fixed issues</a></li>
<li><a href="#5-2-2">5.2.2 Fixed issues</a></li>
<li><a href="#5-2-1">5.2.1 Fixed issues</a></li>
<li><a href="#5-2">5.2 Fixed issues</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>5.1.X Releases</summary>
<ul>
<li><a href="#5-1-4">5.1.4 Fixed issues</a></li>
<li><a href="#5-1-3">5.1.3 Fixed issues</a></li>
<li><a href="#5-1-2">5.1.2 Fixed issues</a></li>
<li><a href="#5-1-1">5.1.1 Fixed issues</a></li>
<li><a href="#5-1">5.1 Fixed issue</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>5.0.X Releases</summary>
<ul>
<li><a href="#5-0-4">5.0.4 Fixed issue</a></li>
<li><a href="#5-0">5.0 Fixed issues</a></li>
</ul>
</details>
</li>
<li>
<details>
<summary>4.X Releases</summary>
<ul>
<li><a href="4-5-1">4.5.1 Fixed issues</a></li>
<li><a href="4-5">4.5 Fixed issues</a></li>
<li><a href="4-4">4.4 Fixed issues</a></li>
</ul>
</details>
</li>
</ul>

<a id="7-0-1"></a>
## 7.0.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 7.0.1.

- Authentication is blocked after installing a patch.
- 

<a id="7-0"></a>
## 7.0 Fixed issues

These are the issues we fixed in ThoughtSpot Release 7.0.

- Users with the *Cannot create or update Pinboards* permission can create pinboards and pin answers to pinboards, but this permission shouldn't allow them to.
- Scheduled pinboards with row-level security enabled, send incorrect PDF attachments to some users.
- Users who have completed the onboarding process, see the onboarding page every time they sign in to ThoughtSpot.
- Queries show a measure as being *grouped by*, rather than *summed*, which causes incorrect results.
- Embrace generates incorrect joins in RedShift SQL.
- Editing any filter generates an error.
- German letters ä, ö, and ü are not supported in usernames.
- A missing sysctl parameter causes pinboard exports to not work.
- Saving an edited formula in worksheet does not work.
- Date sorting doesn't work after pinboard filters are added.
- A manually started SpotIQ Analysis runs for a long time, and eventually stops after about 20 minutes with no insights found.
- Cluster upgrades run for 2 hours before eventually failing, after printing out the same migration statement twice.
- DataFlow pre and post sync TQL fails with *add_days* function.
- DataFlow sync does not sync a table.
- An error occurs during DataFlow sync after adding a table.
- Zooming in on a map visualization is not possible when using latitude and longitude.
- A formula that uses *to_string* on a round fails.

<a id="6-3-1"></a>
## 6.3.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.3.1.

- Text in a table incorrectly converts to a link, causing broken links in data.
- Applying a Pinboard filter to or double-clicking the legend of a stacked column visualization causes it to fill the entire vertical length of the chart.
- Installing Python packages removes `/usr/bin/pip3`, causing the pip3 package installation to fail.
- Upgrade fails when NAS mount does not have an absolute path.
- When opening a chart in Answer Explorer and adding some values, the chart converts to a table and downloads don't work.
- Attempting to enable SSSD by running: `tscli enable sssd --user USER --domain DOMAIN` causes an error.
- Using a calculated field with the `Rank()` function causes an error.
- Uploading a data column name adds an invisible character to the column name, which causes search to not work.
- Though all the schemas and tables are visible, data retrieval with an Embrace SAP Hana connection fails.
- A specific Pinboard filter blocks an entire Pinboard from loading.
- When creating a DataFlow TeraData connection, the preview screen is very slow.
- Simba Server receives 500 errors during data loads, causing sporadic load failures.
- Editing a filter causes an error.
- When creating an Embrace RedShift connection, incorrect joins are generated in the RedShift SQL.
- Cluster upgrades fail due to a gap in the edit log for HDFS, causing it to get stuck in standby mode. 
- Conditional formatting prohibits the use of hex color #000000 from being used to color a table cell.

<a id="6-3"></a>
## 6.3 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.3.

- Pivot table aggregation type cannot be changed.
- Exporting data to CSV does not conform to a custom date format.
- Adding a filter to a Pinboard does not work with visualizations from different sources.
- When a user runs a search on a table, if the result set is greater than 1000 rows, the Show column summary sums up 1000 rows only, while the headline summaries show the total for all rows.
- `substr` function using non-English text garbles the result.
- **Make a Copy**  option in Pinboard menu is greyed out for a user with view-only access.
- Logging in through SSO with SAML fails periodically.
- SSO session timeouts do not work.
- Pinboards are read-only when the owner shares them with another user with edit rights. 
- Worksheets cannot be saved if they contain a formula and a filter.
- As a result of strict CLS, users can access tables that they shouldn't be able to access when selecting a source in a worksheet.
- Growth formula does not work when using a custom calendar.
- ThoughtSpot main navigation bar displays even when `primaryNavHidden=true`.
- Attribute views, analytic views, and calculation views are not accessible through Embrace SAP HANA connections.
- "`[object Object]`" displays in the description field after editing a view.
- Search suggestions don't display column values.
- The select data source option is not available for Search.
- R package not set up on cluster.
- Style customization menu is not available.
- Replay Search feature shows as available, despite not being supported in embedded ThoughtSpot.
- Query from user set `bypass RLS` shows joins to RLS tables.
- Pivot table disappears when scheduled, but is visible when downloaded.
- Email does not work in DataFlow, even when SMTP is configured.
- DataFlow does conform to the cluster timezone.
- A worksheet with a formula configured as Geo does not import into a cluster.
- Using DataFlow to update a flow with a new column fails if the column includes a space.
- A JAR file mismatch causes an error when using DataFlow for MySQL.
- Data labels do not display on the % line in a Pareto chart.
- Adding table sync in DataFlow causes a "Failed to load column" error.
- Table number formatting is lost when saving an Answer.
- Custom calendar date starts with February instead of January in a line chart.
- Incorrect statistics display in the log and dashboard when using DataFlow for MySQL.
- A cluster cannot be stopped if nodes are down.
- Names cannot be updated in a pivot table.
- Sankey chart shows incorrect values.
- Users who don't have edit permissions on a table visualization in a Pinboard do not have the option to remove a column.
- Sankey charts do not load.
- Preview of tables in DataFlow for Teradata does not work.
- SpotIQ doesn't display "analyses" after an analysis is run.
- A scheduled Pinboard does not send email when there is a Japanese character in the Pinboard.
- Users cannot drill down on pivot tables to look at the underlying table.
- Complex Pinboards cannot be copied for editing.
- Showing underlying data on a chasm trap search gives repeated or incorrect values.
- Scheduled materialized views don't update.
- Date formats of downloaded csv, pdf, and xlsx files do not conform to the locale.
- Users can't sign in after `tscli storage gc` command completes.
- Scriptability does not export worksheets that have a filter.
- Pivot table heatmap function uses the decimal value of the percentage calculation instead of the actual percentage.
- Summing on group aggregate formula in a worksheet fails.
- Data tab missing information after making a copy of "TS Stats: Table Status" Pinboard.
- `to_string` does not work on custom calendar attributes.
- "million" and "billion" are not translated to Japanese in an Answer.
- Changes to column names in the data format of a Pinboard do not persist.
- Using a global filter on one value in a Pinboard filters on all values.
- Converting a '/' (front slash) to 'safe_divide' in a complex formula causes an error.
- Geo Map downloads two different charts for the same query.
- User is unable to list and delete worksheet dependencies.
- Attempting to share a worksheet with another user causes a "Loading Failed" error when trying to add the user.

<a id="6-2-1"></a>
## 6.2.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.2.1.

- Replay Search incorrectly shows as available when ThoughtSpot deployed in Embedded mode.
- Style customization page is not available.
- Clicking the Follow button enables the navigation bar when ThoughtSpot is deployed in Embedded mode.
- Scrolling a tabular Answer causes an error.
- Growth formula doesn’t work when using a custom calendar.
- Geo Map intermittently displays two different charts for the same query.
- Copy to clipboard doesn’t work in the Administration console.
- Choosing a fact table when creating a join causes inconsistent sub-queries.

<a id="6-2"></a>
## 6.2 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.2.

- Row-level security does not reflect search tokens and Explore suggestions.
- Old version of the ThoughtSpot Web UI appears for some users, after cluster upgrade.
- Global filter on Pinboard in the ThoughtSpot Web UI doesn't work.
- Users can still access **Data > Tables** page, even though the Data tab is hidden from ThoughtSpot Web UI.
- The time required to execute the TQL delete command increases exponentially, until it no longer works.
- PDF export from a Pinboard in the ThoughtSpot Web UI doesn't work.
- The sender's email in notifications uses the default `no-reply@customer.thoughtspot.com ` instead of the `from-email` configured through `tscli smtp`, or the email of the user who shares the Pinboard.
- Regional German names for states in Geo Maps are not allowed.
- In Version 80 of Google Chrome browser, ThoughtSpot Web UI displays the date shifted by one day.
- ThoughtSpot Web app did not work with Version 80 of Google Chrome browser; cookies for pages in a ThoughtSpot cluster do not have the new SameSite attribute.
- ThoughtSpot Web App did not work on newer versions of Microsoft Edge browser, after 5.3.
- Pinboards with 25 or more visualizations do not work properly.

<a id="6-1-1"></a>
## 6.1.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.1.1.

- Queries time out when loading a fact table with as many as 4 billion rows.
- SpotIQ gets stuck in a loop and is unresponsive.
- When multiple filters are used in a worksheet, the searches fail for only specific columns in a table.
- Microsoft Internet Explorer 11 doesn't work with ThoughtSpot embedded in an iframe, displaying an 'access denied' JavaScript error message.
- The time required to use TQL to delete data from fact tables increases until the delete is not successful.
- After upgrade to 6.1, ad sync scripts fail to run.
- Inconsistent naming of disks causes mounting to fail.
- The Admin Console fails to load in a cluster, where it loaded before.
- An older version of the ThoughtSpot user interface appears, even though cluster is running newer version.
- Upgrading a cluster from 5.x release to 6.x release is unsuccessful.
- Sender's email displayed in notifications does not use the from-email configured in `tscli smtp`.
- A large number of scheduled Pinboards slows down the Falcon database.
- After upgrade to 5.3.2.CU1, all Pinboards using a specific variable (adp) do not work.
- An administrator is unable to save a worksheet on the first try.

<a id="6-1"></a>
## 6.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.1.

- When using the `tscli fileserver upload` command to upload a file that is larger than the maximum supported file size, an error message with an incorrect maximum file size appears.
- The tscli event list displays messages for creation, modification, and deletion that are not user friendly.
- Sorting or filtering a column in a chart does not work.
- The column order in the PDF of a visualization is different than the order in shown in ThoughtSpot.
-  Removing a key from a table is not possible because multiple joins for an old column cannot be detected.
- Intermittent slow search response time.
- Entering a search generates results from columns outside the selected data source.
- An incorrect result is displayed when a filter is created on the Group_Max aggregation function.
- Backup policy names are not validated to ensure they won't cause backups to fail.
- The headline table aggregate summary is not available when group aggregate functions are used
- Removing a column from a search increases the number of rows shown.
- Multiple variables cannot be added to a single map visualization.
- Drilling down on a visualization causes the date format to change.
- Double-clicking on the legend of a stacked column chart does not show hidden values.
- Data load fails due to a primary key having multiple rows.
- Filtering on a Pinboard card causes a NullPointerException error.
- A formula with Group_Max function doesn't work with Growth key word.
- The confirmation message for deleting a restored cluster indicates the wrong cluster name.
- Modifying a date filter of a Pinboard from a set date range to none, causes the filter to disappear.
- R visualization downloads fail when exporting to PDF.
- A Pinboard with filters cannot be saved.
- Using a weekly date aggregation with a custom calendar, causes the days to be split at the end of the month if the month ends in the middle of the week.
- Worksheet filters provide different answers than search filters.
- Drilling down on a date in a custom calendar displays an incorrect epoch.
- Menu items, including Share, Copy a Link, and Send Feedback, cannot be disabled when ThoughtSpot is embedded.
- ThoughtSpot instances hosted in GCP have a 127.0.0.1 address for eth0.
- Keywords do not provide correct results when using a custom calendar.
- A worksheet cannot be saved after changing a join type.
- Top and Bottom keywords do not work on a measure with the `unique_count_if` formula applied.
- Non-admin users are unable to search for a newly added column in the worksheet.
- Colors of slices in pie chart change when you filter on the pie chart.
- Total labels in a Stacked Bar chart do not account for negative amounts.
- When adding a connection in Embrace, not all tables in the external database are displayed.
- ThoughtSpot TQL does not list tables that don't exist in the default Falcon schema.
- The date format in a PDF is not correct for the user's locale.
- Various display issues with Admin Console
- Periodic backups fail after upgrade.
- Geo maps allow regional German names for states.
- In ThoughtSpot clusters hosted in Azure, Log rotate does not rotate `large_files`.

<a id="6-0-5"></a>
## 6.0.5 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.0.5.

  - When **Copy link** has been disabled, it still appears in the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} of Pinboards.
  - The management console is not accessible.
  - A Pinboard with an advanced formula can be viewed by an administrator, but not by a regular user they share it wit
  - A cluster that is using a customer logo, still shows the ThoughtSpot logo on downloaded PDFs.
  - Filter values overlap and are unreadable in the filter picker.
  - Attempting to sign in using SSO causes a 500 Internal Server Error.
  - Clusters with many scheduled Pinboards cause the Falcon database to be slower than normal
  - Dates in PDFs are only displayed in the United States date format.
  - The Google Chrome 80 browser is not supported, because cookies for pages in a ThoughtSpot cluster do not have the SameSite attribute, which is required for that browser.
  - The **group aggregate** function does not work after upgrade to release 5.3.1.
  - A user who edits a worksheet is not able to save their changes.

<a id="6-0-4"></a>
## 6.0.4 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.0.4.

- Under certain conditions, worksheet filters provide different answers than search filters.
- Total amounts in a stacked bar chart do not account for negative amounts.
- Management console displays incorrect information about SSL status.
- Management console displays incorrect information about SMTP status
- Upgrading from release 5.2.3 to 6.0.3 causes HDFS to go into safe mode and cause missing data volumes.

<a id="6-0-3"></a>
## 6.0.3 Fixed issue

This is the issue we fixed in ThoughtSpot Release 6.0.3.

- Dates shown in the ThoughtSpot UI may be offset by one day in version 80 or later of the Google Chrome browser. Actual search results are not affected by this issue.

<a id="6-0-2"></a>
## 6.0.2 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.0.2.

- Updating a formula causes a blank screen and corrupts a worksheet when it is saved.
- Upgrade to release 6.0.1 changes charts with a y-axis at 100% to a regular stacked column chart.
- After upgrade to release 5.3.2, users cannot sign in using SSO.
- Disk alerts occur when drives are functioning normally.

<a id="6-0-1"></a>
## 6.0.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.0.1.

- Search autocomplete occasionally displays an error when using a bulk filter.
- In a custom calendar, sales results for individual years are correct, but are not correct when comparing those same years using `versus`(example: `2019 vs 2018``net sales`).
- Upgrades to a ThoughtSpot AWS deployment can cause hosts to lose their configured hostnames.
- A yellow bar sometimes appears during search, causing search not to work.
- Optimization does not occur in pinned measure formulas with complex aggregation, resulting in more queries than necessary.
- After upgrade to release 5.3.x., previously enabled delayed search for a cluster is disabled.
- The dot in a hover tooltip for a chart, indicating which item the tooltip applies to, does not appear.
- Common keywords, like `this year`, `date daily`,`last quarter`, and `week of year` do not reflect the settings of a custom calendar.
- The title page of an exported PDF does not display the full date
- The `date` filter of an answer does not work properly when pinned to a Pinboard, even after applying the Pinboard `date` filter
- Scroll and edit options are missing for charts in presentation mode when using the Microsoft Internet Explorer browser.

<a id="6-0"></a>
## 6.0 Fixed issues

These are the issues we fixed in ThoughtSpot Release 6.0.

- The `tscli cluster download-release` command sometimes did not work correctly.
- The date dimension attribute was removed from the query for all date aggregations, except for DETAILED.

<a id="5-3-2-cu3"></a>
## 5.3.2 CU3 Fixed issues

These are the issues we fixed in ThoughtSpot Release 5.3.2 CU3.

- Exported PDF, CSV, and XLSX files display caption tags
- Administrators are not able to edit a worksheet.
- A legend in a chart is not displayed correctly when the _monthly_ attribute is used in a search.
- After upgrade to 5.3.2 CU2, users cannot access a ThoughtSpot instance previously accessed through SSO.
- Users cannot sign in to a ThoughtSpot instance through SSO.
- Changes made to a schema through TQL are not reflected when viewed in the ThoughtSpot UI.

<a id="5-3-2-cu2"></a>
## 5.3.2 CU2 Fixed issue

This is the issue we fixed in ThoughtSpot Release 5.3.2 CU2.

- Visualizations that worked in the past, display an error message.

<a id="5-3-2-cu1"></a>
## 5.3.2 CU1 Fixed issue

This is the issue we fixed in ThoughtSpot Release 5.3.2 CU1.

- Rows that don't exist in TQL appear when filtering in the ThoughtSpot UI.

<a id="5-3-2"></a>
## 5.3.2 Fixed issues

These are the issues we fixed in ThoughtSpot Release 5.3.2.   

- Delayed search enabled in a previous release version does not work after upgrade to 5.3.1.
- Pop-up messages sometimes cover the entire width of the screen.
- _Share_, _Copy a link_, and _Send feedback_ cannot be disabled when ThoughtSpot is embedded.
- An error in the date range occurs when drilling down in a custom calendar.
- When the network check fails during a self-service upgrade, it retries indefinitely.
- If formulas have a less-than sign (<) followed by text, the text following the less-than sign does not display in a table.
- Removing a column from a search query increases the number of rows displayed.
- A search that uses the `group_max` function displays an incorrect result when filtering is applied.

<a id="5-3-1"></a>
## 5.3.1 Fixed issues

These are the issues we fixed in ThoughtSpot Release 5.3.1.

- Using a custom calendar, and doing a query that filters on a date field causes a database error.
- Signing in to ThoughtSpot multiple times in quick succession causes a 500 error.
- When row-level security is used, a 2-column join in a fan-trap query does not work if the column contains NULL data/values.
- Opening certain Pinboards can cause the Google Chrome browser to freeze
- Columns renamed in a worksheet revert back to their original names later.
- Columns cannot be deleted from a worksheet.
- Using a custom calendar and filtering date values by year, month or quarter does not work.
- Canadian postal codes do not appear on maps.
- The Admin > Style Customization page indicates the wrong pixel dimensions required for a wide application logo.
- Certain HTTP security headers are not implemented.

<a id="5-3"></a>
## 5.3 Fixed issues

These are the issues we fixed in ThoughtSpot Release 5.3.

- A problem where dates do not display properly in the query details pane of an answer is now fixed.  
- An issue where the color coding of columns is not displayed in a PDF downloaded from a worksheet is fixed.  
- A problem where using **Copy and edit** in a saved answer causes the screen to go blank has been fixed.  
- An issue where axis labels are missing from some visualizations is now fixed.  
- A problem where URLs that appear within an Answer are red, instead of blue, is now fixed.  
- An issue where an answer that has no measures causes it to display blank is now fixed.  
- A problem where weekly and monthly charts are not showing weekly and monthly aggregation correctly is now fixed.
- A problem where the column tooltip in a Pinboard does not show last updated information has been fixed.  
- An issue where the filter dialog box is unresponsive when opened from Pinboard is now fixed.  
- A problem when pinning an answer to a Pinboard where the Pinboard list is very slow to display is now fixed.  
- An issue where scheduled Pinboard emails fail to send to a specific recipient with a valid email address is now fixed.  
- A problem where a stacked bar chart does not work in a Pinboard is now fixed.  
- An issue where an exclude filter does not work properly on a Pinboard is now fixed.  
- A problem where a user cannot edit a Pinboard, even though they have the proper permissions to do so is fixed.  
- An issue where emails fail to send from scheduled Pinboards that contain Japanese characters in their title is now fixed.
- A problem where nulls are excluded from a query, even when they have not been excluded using a filter is now fixed.  
- An issue where searches on a Pinboard don’t include cached queries has been fixed.  
- An issue where running the `tscli cluster` command causes a failed security check is now fixed.   
- A problem where the Informatica ODBC cannot connect to ThoughtSpot is now fixed
- A problem where a saved answer cannot be opened when it uses an aggregate function is now fixed.
