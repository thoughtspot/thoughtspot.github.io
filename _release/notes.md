---
title: ["5.0 Release Notes"]
toc: false
keywords: "release notes"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
<p>ThoughtSpot version 5.0 is now available. This release includes the features and issue fixes shown here.</p>

<ul>
   <li><a href="notes.html#5-0-new-features-and-functionality">5.0 New Features and Functionality</a></li>
   <li><a href="notes.html#5-0-fixed-bugs">5.0 Fixed bugs</a></li>
   <li><a href="notes.html#notes-for-older-versions">Notes for older versions</a></li>
</ul>

<h2>Supported upgrade paths</h2>

<p><br />If you are running one of the following releases, you can upgrade to this release directly.</p>
<ul>
<li>4.4.1.x to 5.0</li>
<li>4.5. to 5.0</li>
<li>4.5.1.x to 5.0</li>
</ul>
<p>(This incudes any hotfixes or customer patches on these branches.)</p>
<p>If you are running a different version, you need to do a multiple pass upgrade. First, upgrade to one of the above versions, and then to this release.</p>

<a name="5-0-new-features-and-functionality"></a>
<h2>5.0 New Features and Functionality</h2>

<div>&nbsp;</div>
<div>
<table style="border-collapse: collapse; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Stylecustomizationoptionsareenabledbydefault"></a>Style customization options are enabled by default</h3>
<p>In the past, to enable style customization&mdash;colors, fonts, and custom logo&mdash;you had to contact ThoughtSpot Support. With this release, style customization features are enabled by default for users with the Administrator privilege. If you want to disable these settings, contact ThoughtSpot Support.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/style-customizations.png"| prepend: site.baseurl }}"/></p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="SupportforIPSecbetweenclusternodes"></a>Support for IPSec between cluster nodes</h3>
<p>With 5.0, you can encrypt traffic between various ThoughtSpot cluster nodes. However, by default the encryption of traffic between ThoughtSpot nodes is disabled. When required to enable on a specific cluster, contact ThoughtSpot Support. ThoughtSpot can enable encryption of traffic between ThoughtSpot nodes to allow this feature to automatically work on AWS, GCP, OnPrem, and Azure.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="URLlinksindatavaluescannowopeninthesametaboriFrame"></a>URL links in data values can now open in the same tab or iFrame</h3>
<p>In past versions, clicking a URL link in an answer would open the URL in a new tab. Similarly, for an answer embedded in an iFrame, clicking on a URL opened it in a new tab. This is still the default behavior, but you can configure ThoughtSpot to open the link in the same context where it appears.</p>
<p>Now you can change a cluster-wide setting to make links open in the same context (iFrame or tab) in which they appear. With this configuration, if the ThoughtSpot answer is embedded in an iFrame, clicking the URL will open it within the same iFrame. If you are using the ThoughtSpot application the link will open in the same tab.</p>
<p>This setting applies to an entire ThoughtSpot instance. So if it is set to open URLs in the same tab, all URL links whether in the application or in an embedded visualization will open in place. Contact ThoughtSpot Support if you wold like them to change this setting for you.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Patchsupportforupdates"></a>Patch support for updates</h3>
<p>The 5.0 release adds support for applying patches using the <tt>tscli</tt> command. With this patch support, you do not need to upgrade the entire cluster when there is a bug fix, security fix, or minor feature you want to install. It also the ability to apply or rollback a patch and to see any patches that have been applied cluster-wide or listed out by service. To see the list of patches applied currently on a cluster, run the following commands:</p>
<p><tt>tscli patch ls</tt></p>
<p>To see a list of all patches that have ever been applied, including any that were rolled back, issue the command:</p>
<p><tt>tscli patch ls --applied</tt></p>
<p>Additional command flags allow you to see the listing by service or to view all patch rollbacks.</p>
<p>To install a patch, contact ThoughtSpot Support.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="PinboardInstantInsights"></a>Pinboard Instant Insights</h3>
<p>With the 5.0 release, you can now automatically view the executive summary of insights for each SpotIQ Pinboard visualizations. Use the magic wand icon (at the top right corner) to see instant insights of your data. The instant insights are generated based on the analysis of visualizations and tables which are pinned on to your pinboard.<br /> Note that the instant insights are cached. It means if you ran SpotIQ analysis on a pinboard to generate insights you don&rsquo;t need to rerun SpotIQ analysis.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Abilitytoincludeorexcludevalues%2Cincludingnullvalues"></a>Ability to include or exclude values, including null values</h3>
<p>Filters on columns, pinboards, and worksheets now give you the ability to include or exclude values. In past releases, you could only choose values to include. This change makes it easy to see all values except for one or more values. Bulk filters also work with exclude.</p>
<p>When selecting a filter from a list of values, the null value is now available for filtering. You can choose to include or exclude the null value. This allows you to easily see where null (missing) values exist in the data. This can be helpful when looking for dirty or incomplete data.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="DirectsearchtoembedAPI"></a>Direct search to embed API</h3>
<p>ThoughtSpot Extended Enterprise Edition now includes more API functionality with the introduction of direct to search embedding. Direct to search embedding enables new embed use cases by allowing a search from an external application or web page to pull data directly from ThoughtSpot. You no longer need to save a search result to a pinboard and embed it using the visualization's URL.</p>
<p>This direct to search embedding is useful when you want to allow an application to pull data directly from ThoughtSpot in an ad hoc fashion, but you do not want to embed the entire ThoughtSpot application.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Changethecoloronsinglecolorcharts"></a>Change the color on single color charts</h3>
<p>When a chart consists of a single color, you can now change the color. To do this, select the chart style icon to the right of the chart. Under the Color section, use the color picker to choose which color to use for the chart.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="SpotIQAutomatedInsightsonthehomepage"></a>SpotIQ Automated Insights on the homepage</h3>
<p>On the homepage, there is now a section called <strong>Did You Know?</strong>, which shows insights found by SpotIQ. To find these insights, SpotIQ runs many analyses of the data used in recent searches. The results which are most likely to contain useful insights are included in this section. This helps users you more value from their data and learn about areas where you may want to do further exploration.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="FlexibleJoinsinWorksheets"></a>Flexible Joins in Worksheets</h3>
<p>This version of ThoughtSpot introduces flexible join types to give you more options and an easier workflow to model joins between tables, views, and worksheets and within worksheets.</p>
<p>You can now specify the join type separately for each join between tables in a worksheet. You can also create generic relationships between tables without leaving the worksheet creation workflow within the ThoughtSpot application.</p>
<p>In past versions, there were several limitations on joins:</p>
<ol>
<li>It was hard to see the effective schema when creating or editing a worksheet.</li>
<li>You could only specify one type of join (inner, outer, etc.) per worksheet, and that join type would be applied to all table joins in the worksheet.</li>
</ol>
<p>This limited the use of worksheets such that they couldn&rsquo;t be applied to some use cases. For example, sometimes two tables in a worksheet required a full outer join between them, while two others required an inner join. Now you can create this type of worksheet, and all the joins to support it, in a single workflow.</p>
<p>Now you can specify join type for each relationship in a worksheet, using one of these types:</p>
<ul>
<li>Full outer join</li>
<li>Left outer join</li>
<li>Right outer join</li>
<li>Inner join</li>
</ul>
<p>In ThoughtSpot, the fact or source table is the &ldquo;left&rdquo; table, and the dimension (target or destination) table is the &ldquo;right&rdquo; table. You can now easily see which is the left table and which is the right table when you&rsquo;re setting up the join types.</p>
</div>
</td>
</tr>

<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="FlexibleAggregationFormulas"></a>Flexible aggregation formulas</h3>
<p>ThoughtSpot now provides for more flexible aggregation capability with a
new function called <tt>group_aggregate</tt>. You can use this in formulas to pin columns
in a query at a granularity different from the search bar query, rather than being
bound to those of the search terms/columns. You can use the groups and filters from
the query with <tt>query_groups</tt> and <tt>query_filters</tt>, and with <tt>query_groups</tt>
you can also add or exclude some groups or filters.</p>
</div>
</td>
</tr>

<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="CustomRScriptsOnSearchResults"></a>Custom R scripts on search results</h3>
<p>The ability to add custom R scripts is now available as part of the Search page.
In previous releases, custom R scripts were an option only on SpotIQ custom analysis.
Starting in version 5.0, given R privileges, you can create and run R scripts on search
results (answers),leverage ThoughtSpot provided scripts, share scripts as templates, and
share R visualizations as answers and pinboards. End users with privileges can run pre-built R
scripts on top of their search results.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/r-icon.png"| prepend: site.baseurl }}"/></p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/r-png-result.png"| prepend: site.baseurl }}"/></p>
</div>
</td>
</tr>

<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="AwsSesForSecureEmailOnThoughtSpotServers"></a>AWS SES for secure
email on ThoughtSpot servers</h3>
<p>ThoughtSpot now supports secured mail on ThoughtSpot servers.
Administrators can set up SMTP authorization to verify emails come
from an authorized entity, such as AWS Simple Email Service (SES). This
minimizes the chance that spam, malicious, or phishing emails generating from
bad actor ThoughtSpot servers.
</p>
</div>
</td>
</tr>


<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="NewLeaderboardpinboard"></a>New Leaderboard pinboard</h3>
<p>The out-of-the-box pinboard called <tt>TS Stats: System Information and Usage</tt> now contains leaderboard visualizations. These show which users are most active, and what kinds of things they're doing in ThoughtSpot.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/leaderboard_pinboard.png"| prepend: site.baseurl }}"/></p>


<p>Some of the new visualizations show:</p>
<ul>
<li>Which users were most active in the last month</li>
<li>Which pinboards are viewed most often</li>
<li>Which users have initiated the most all-time ad-hoc searches</li>
<li>Which users have been active today</li>
<li>Number of monthly active users (MAU)</li>
</ul>
<p>This leaderboard increases engagement within your user community and helps you identify the people who are the most skilled and frequent ThoughtSpot users.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Newdefaultsnapshotpolicy"></a>New default snapshot policy</h3>
<p>This release includes a new default snapshot policy. Three snapshots are taken over 4-hour intervals in the course of a day. And 4 daily snapshots are taken. This provides continuity over the long weekends in many countries by ensuring snapshots on Saturday, Sunday, Monday, and Tuesday.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="LearnThoughtSpotinGA"></a>Learn ThoughtSpot in GA</h3>
<p>The Learn option from the main menu has moved from a BETA to a GA feature. Learn uses replay to teach users how to perform search with ThoughtSpot.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="PushdatatoanothersystemfromThoughtSpot"></a>Push data to another system from ThoughtSpot</h3>
<p>You can now operationalize your data by pushing it to external systems, so actions on that data can be automated. You can create a custom action that allows a user in ThoughtSpot to manually push the results of a search to the other system for processing.</p>
<p>For example, a ThoughtSpot search on customers with past due accounts could push a list of addresses to a system that generates a payment reminder mailing.</p>
<p>You must be licensed for ThoughtSpot Extended Enterprise Edition to enable pushing data to another system. To have this functionality turned on, contact ThoughtSpot Support.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="AllsavedanswersuggestionsappearinAnswersratherthanassearchsuggestions"></a>All saved answer suggestions appear in Answers rather than as search suggestions</h3>
<p>In past versions, search suggestions included saved answers and pinboards, if they were closer to what you were searching. Now, they appear as cards at the bottom of the search results. This is less distracting when searching and makes these saved searches stand out as distinct from search suggestions.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="LocalizedDateFormatSupportedinSearchFilters"></a>Localized Date Format Supported in Search Filters</h3>
<p>The search bar now accepts dates in the format used by the user browser's locale setting. For example, European locales accept dates using formats like DD-MM-YYYY. The US locale accepts dates using formats like MM-DD-YYYY.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="MoreLocalizationInGA"></a>More Localization in GA</h3>
<p>Several language options for browser display have moved from BETA to GA to now include
Français (Canada), Français (France), Português (Brasil), 中文 (简体), and Español (latín).
Users can change their Locale preference on the ThoughtSpot Profile page.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="KeywordsReferenceInMultipleLanguages"></a>Keywords reference in multiple languages</h3>
<p>The keyword reference in the documentation now provides translations (for keywords only)
from English into the following languages:</p>
<li>日本語</li>
<li>中文 (简体)</li>
<li>Deutsche</li>
<li>Español (latín)</li>
<li>Français (Canada)</li>
<li>Français (France)</li>
<li>Português (Brasil)</li>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<a name="5-0-fixed-bugs"></a>
<h2>5.0 Fixed Bugs</h2>
<table style="border-collapse: collapse; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<p>A problem was resolved where changes to metadata resulted in rebuilding the search index, even though the data had not changed.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<p>A problem was resolved where a search was returning an unexpected answer, because the last aggregation performed during execution was doing a MIN() rather than a SUM().</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<p>A problem was resolved where timeouts were causing a cluster crash in some cases when a right outer join was used.</p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<p>A problem was resolved where the space allocation chart was not getting updated.</p>
</div>
</td>
</tr>
</tbody>
</table>

<a name="notes-for-older-versions"></a>
<h2>Notes for older versions</h2>
<ul>
<li><a href="{{"/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf" | prepend: site.url }}">4.5 Release Notes</a></li>
<li><a href="{{"/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf" | prepend: site.url }}">4.4 Release Notes</a></li>
<li><a href="{{"/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf" | prepend: site.url }}">4.2 Release Notes</a></li>
<li><a href="{{"/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf" | prepend: site.url }}">3.5 Release Notes</a></li>
</ul>
