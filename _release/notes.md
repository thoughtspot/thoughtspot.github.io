---
title: ["4.5 Release Notes"]
toc: false
keywords: "release notes"
last_updated: 04/09/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot version 4.5.1 is now available.

<ul>
   <li><a href="#supported-upgrade-paths">Supported Upgrade Paths</a></li>
   <li><a href="#4-5-1-new-features-and-functionality">4.5.1 New Features and Functionality</a></li>
   <li><a href="#4-5-new-features-and-functionality">4.5 New Features and Functionality</a></li>
</ul>

For a complete list of issues that we fixed in recent releases, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

<h2>Supported Upgrade Paths</h2>

If you are running the following version, you can upgrade to the 4.5.1.x release
directly:

* 4.4.1.3 to 4.5.1.x

<p>If you are running 4.4.1.2 or earlier, you must do a multiple pass upgrade:</p>

<ol>
    <li>Upgrade your cluster to 4.4.1.3.</li>
    <li>Upgrade from 4.4.1.3 to 4.5.1.x.</li>
</ol>

<h2>4.5.1 New Features and Functionality</h2>

These are the new and enhanced features in this release. For a complete list of issues that we fixed in this release, see [4.5.1 Fixed issues]({{ site.baseurl }}/release/fixed.html#4-5-1).


<h4><a name="ProvidedfullintegrationwithSlackviaSpot"></a>Provided full integration with Slack via Spot</h4>
<p>Slack is an enterprise software platform for team communication through a messaging
application. Slack also allows users to communicate with applications like ThoughtSpot
through chat. ThoughtSpot implemented full Slack integration in version 4.5.1.
Administrators can follow setup steps in <a href="{{"/4.5/admin/setup/slack-integration.html" | prepend: site.url }}">Add the Slack integration</a>, and ThoughtSpot users can learn how to use Spot in
<a href="{{"/4.5/end-user/slack/intro.html" | prepend: site.url }}">Slack and Spot</a>
and <a href="{{"/4.5/end-user/slack/use-spot.html" | prepend: site.url }}">How to use Spot</a></p>

<h4><a name="AddedtheabilitytoaddcustomHelplinks"></a>Added the ability to add custom Help links</h4>
<p>When users click the help icon, they see a list of links. You can now add your own links to this list. This allows you to include documentation specific to your company, such as information about the data available in ThoughtSpot, where to get support internally, or company-specific training.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/custom_help_item.png"| prepend: site.baseurl }}"/></p>
<p>You can also edit existing links, change icons, or remove items from the help listing altogether.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/customize_help.png"| prepend: site.baseurl }}"/></p>

<h4><a name="Adminchartcolorpalettesautoupdatebasedonprimary color"></a>Admin chart color palettes auto update based on primary colors</h4>
<p>In the Admin <b>Style Customization</b> "Chart Color Palettes", secondary color gradients are now based off of the primary colors selected. When a different primary color is chosen, the associated secondary color gradients below it automatically update.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-palette-admin-style-customize.png"| prepend: site.baseurl }}"/></p>

<h4><a name="Customcolorpalettesarereflectedinuserschartcolorpicker"></a>Custom color palettes are reflected in users chart color picker</h4>
<p>Color palette changes made by the Admin in Style Customization, are now reflected in users' chart configuration color palettes (not just in the auto-generated chart colors, as in previous releases).</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-user-config-inherit-palette.png"| prepend: site.baseurl }}"/></p>

<h4><a name="Admincanenableordisableautocolorrotationinstylecustomizationchartcolorpalettes"></a>Admins can enable or disable auto color rotation in Style Customization Chart Color Palettes</h4>
<p>When there is a single color on a chart (no legend), ThoughtSpot auto-rotates through primary colors to render the chart for visual variety. If an Admin does not want this behavior, they can disable it by choosing <b>Disable Color Rotation</b> on the "Chart Color Palettes", in which case ThoughtSpot will always use the default color on single-color charts.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-palette-admin-rotation-on-off.png"| prepend: site.baseurl }}"/></p>


<h4><a name="LocalizedDateFormatSupportedinSearchFilters"></a>Localized Date Format Supported in Search Filters</h4>
<p>The search bar now accepts dates in the format used by the user browser's locale setting. For example, European locales accept dates using formats like DD-MM-YYYY. The US locale accepts dates using formats like MM-DD-YYYY.</p>

<h2>4.5 New Features and Functionality</h2>

These are the new and enhanced features in this release. For a complete list of issues that we fixed in this release, see [4.5 Fixed issues]({{ site.baseurl }}/release/fixed.html#4-5).

<h4><a name="UIReportsquerycancellation"></a>UI Reports query cancellation</h4>
<p>Beginning in this release, ThoughtSpot reports queries which exceed system resource:</p>
<p><code>Query cancelled due to memory limits being exceeded (OOM).</code></p>

<h4><a name="Datatypeinformationavailableonhover"></a>Data type information available on hover</h4>
<p>The data type information is now available when a user hovers over a column in the left panel.</p>

<h4><a name="Improvedsessionsecurity"></a>Improved session security</h4>
<p>New improvements in security reduce the amount of information made available by the UI during a user session.</p>

<h4><a name="Improvedmemorymanagementlogs"></a>Improved memory management logs</h4>
<p>This release includes improvements to how the system logs memory situations. The logs now record when a situation begins and ends plus information about which request triggered the situation. The system also now keeps a tally of how many distinct clients experienced a rejection.</p>

<h4><a name="Improvementsinupgrade"></a>Improvements in upgrade</h4>
<p>This release includes significant improvements in the performance of upgrades particularly those installations with large objects.</p>

<h4><a name="Multipledata%2Ftimeformattedcolumnsindataimport"></a>Multiple data/time formatted columns in data import</h4>
<p>Your imported data can now include columns with different date/time formats.</p>

<h4><a name="NewcommandstoinstallRpackages"></a>New commands to install R packages</h4>
<p>This release includes the `tscli rpackage` command. This command allows users to manage R packages for use with SpotIQ.</p>

<h4><a name="Settinguserfeedbackemail"></a>Setting user feedback email</h4>
<p>Users in ThoughtSpot may be asked for feedback for new or BETA features in the system. By default, feedback goes directly to ThoughtSpot support. Alternatively, you can send feedback to someone in your company. See the <code>tscli</code> commands reference for details.</p>

<h4><a name="SpotIQprofilepreferences"></a>SpotIQ profile preferences</h4>
<p>In this release, you can configure your SpotIQ preferences in your user profile. These preferences control notifications and allows you to exclude nulls or zero measures from your analysis.</p>

<h4><a name="Flyingournewcolors"></a>Flying our new colors</h4>
<p>In this release, we are changing our primary navigation bar from black to light gray. Screen captures in the documentation may show the older color scheme. Expect them to update over all.</p>

<h4><a name="ExpandRLSconfigurationtoincludeallunderlyingtables"></a>Expand RLS configuration to include all underlying tables</h4>
<p>By default, worksheet queries only take into account RLS rules on tables whose columns appear in the query. Other related tables that may underly the worksheet are ignored. This means that not all RLS rules on underlying tables are applied when a user queries a worksheet.</p>
<p>You can configure a stricter application of RLS rules to take into account RLS rules from all the tables underlying the worksheet. This is recommended if you have key dimension tables that worksheets rely on but that are not necessarily regularly accessed through query. To do this, contact ThoughtSpot Customer Support.</p>

<h4><a name="Higherbulkfilterlimit"></a>Higher bulk filter limit</h4>
<p>Users can now have up to 10K values in a bulk filter. Additionally, bulk filtering no longer requires validation of filtered values. Values in the bulk filter that do not exist in the data are allowed in the filter. This allows a filter to anticipate data that may be present in the future.</p>

<h4><a name="Newhomepage"></a>New home page</h4>
<p>This release includes updates to the application home page. It now contains several new sections intended to encourage users to explore and learn about your company data:</p>
<ul>
<li><strong>All time popular/Recently trending</strong> answers and pinboards</li>
<li><strong>Recently viewed</strong> answers and pinboards</li>
<li><strong>Recent team activity</strong> Answers, pinboards, worksheets, and tables people in your company have created or edited recently.</li>
<li><strong>Did you know?</strong> Auto analysis results from SpotIQ</li>
</ul>
<p>The areas are restricted by privileges just as other areas. For example, if a user doesn't have the ability to use SpotIQ, that option does not appear.</p>

<h4><a name="Strictercolumnsharingfeature"></a>Stricter column sharing feature</h4>
<p>This release includes the ability to apply strict column level security. Under the standard column sharing, users without access to a specific table column can still see the column's data if subsequent worksheets relying on that data were shared with them. Now, you can for your installation, prevent this permissive sharing and prevent users from ever seeing the data. Speak with ThoughtSpot Customer Support for information on enabling this feature.</p>

<h4><a name="GrantDownload%2FUploadtoAll"></a>Grant Download/Upload to All</h4>
<p>This release includes two APIs (<code>v1/group/addprivilege</code> or <code>v1/group/removeprivilege</code>) that allow you to add or remove the <code>DATADOWNLOADING</code> or <code>USERDATAUPLOADING</code> privilege to/from the system default <code>ALL_GROUP</code> group.</p>

<h4><a name="Newdatefunctionsforformulas"></a>New date functions for formulas</h4>
<p>This release includes several new date functions for formulas:</p>
<ul>
<li><strong>day_number_of_quarter</strong></li>
<li><strong>day_number_of_week</strong></li>
<li><strong>month_number_of_quarter</strong></li>
<li><strong>week_number_of_month</strong></li>
<li><strong>week_number_of_quarter</strong></li>
<li><strong>week_number_of_year</strong></li>
</ul>

<h4><a name="Metricspipelineimprovements"></a>Metrics pipeline improvements</h4>
<p>Included in this release are metrics pipelines that empower both our team and yours to enrich the ThoughtSpot product experience. The new metric pipelines enable:</p>
<ul>
<li>Faster issue resolution: ThoughtSpot collects the diagnostic information from your system on an ongoing basis: there is no time needed to collect diagnostic information after a problem is reported. Our support team can begin working to remediate any issue with you at once.</li>
<li>Failure prevention: Metrics provides direct visibility to the ThoughtSpot team on your system's limits. Therefore, our Support team can proactively identify critical threshold issues and work to prevent failures. Metrics also help reduce SLA times as the team can debug much faster.</li>
<li>Improved Search: ThoughtSpot can tune search algorithms by studying search history and schema.</li>
<li>Improve Performance: ThoughtSpot analyzes expensive and complex query patterns to look for performance optimizations.</li>
<li>Improved Browser Performance: Finally, the metrics pipeline allows ThoughtSpot to identify application-use patterns that contribute to performance bottlenecks with specific browsers and help your team prevent or alleviate them.</li>
</ul>

<h4><a name="Relativetimefiltering"></a>Relative time filtering</h4>
<p>This release includes support for filtering with relative time frame. The syntax for this filter is:</p>
<p><code>last <span class="error">[N]</span> &lt;period&gt; for each &lt;period&gt;</code></p>
<p>For example, this filter presents results for the last two months for all the years available in the data.</p>
<p><code>last 2 months for each year</code></p>

<h4><a name="Gridlinesforchartswithx%2Fyaxis"></a>Gridlines for charts with x/y axis</h4>
<p>Users can now enable the display of gridlines in charts that have an x and y axis.</p>

<h4><a name="ImprovementstoGrowthovertimequeries"></a>Improvements to Growth-over-time queries</h4>
<p>This release includes improvements with queries that use growth of queries with formats such as the following:</p>
<p><code>growth of &lt;measure_column&gt; by &lt;date_column&gt; &lt;bucket&gt; &lt;period-over-period&gt;</code></p>
<p>This table shows the possible buckets and the period-over keywords you can combine:</p>
<table>
<tr>
<td><code>quarterly</code></td>
<td><code>monthly</code></td>
<td><code>weekly</code></td>
<td><code>daily</code></td>
<td><code>hourly</code></td>
</tr>
<tr>
<td><code>year-over-year</code></td>
<td><code>year-over-year</code></td>
<td><code>year-over-year</code></td>
<td><code>year-over-year</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td><code>quarter-over-quarter</code></td>
<td><code>quarter-over-quarter</code></td>
<td><code>quarter-over-quarter</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><code>month-over-month</code></td>
<td><code>month-over-month</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><code>week-over-week</code></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td><code>day-over-day</code></td>
</tr>
</table>

<h4><a name="Newperiodkeywords"></a>New period keywords</h4>
<p>This release includes expansions to the time-series keywords. The <code>quarter of year</code> and <code>day of month</code> keywords were added.</p>

<h4><a name="Abilitytosettableloadprioritization"></a>Ability to set table load prioritization</h4>
<p>You can now use <code>tql</code> to set table load priority. You can set priority values between <code>1-100</code>. The default priority is <code>50</code>. A lower number indicates a higher priority, with 1 being the highest priority. Tables set to a load priority of 1, load before tables set to higher numbers. The following illustrates examples of the new commands for setting and changing table load priority:</p>
<div class="code panel" style="border-width: 1px;">
<div class="codeContent panelContent">
<pre class="code-java">  alter table <span class="code-quote">'t1'</span> set load priority [value]
  alter table <span class="code-quote">'t1'</span> remove load priority
</pre>
</div>

<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h4><a name="Customizeheadlinedisplay"></a>Customize headline display</h4>
<p>Now, you can decide whether or not to display headlines in your table results. To customize headlines, choose <strong>Actions &gt; Customize summaries</strong>.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-21-15-35-53-119.png"| prepend: site.baseurl }}"/></p>

<h4><a name="Pinboardinformation"></a>Pinboard information</h4>
<p>The <strong>Actions &gt; Pinboard Info</strong> was added to the pinboards. This feature allows you to see who authored a pinboard, when it was created, and when it was last modified.</p>

<h4><a name="Improvedcallhomefunctionality"></a>Improved call home functionality</h4>
<p>"Call home" data is metadata and usage data from your ThoughtSpot cluster. ThoughtSpot's "call home" functionality intermittently sends a call home bundle of statistics to a ThoughtSpot S3 server via HTTPS. The data is encrypted at rest on the server.</p>
<p>Beginning with this release, callhome is enabled by default. Your ThoughtSpot Support personnel configures callhome for you during installation and upgrade.</p>

<h4><a name="AdditionalRLSabilitieswithprivilege"></a>Additional RLS abilities with privilege</h4>
<p>Users in groups with this privilege (directly or via group inheritance) can now add/edit/delete existing RLS rules. They were are already permitted to:</p>
<ul>
<li>Exempt from row-level security (RLS) rules.</li>
<li>Permitted to check or uncheck Bypass RLS on a worksheet.</li>
</ul>

<h4><a name="Newdefaultsnapshotpolicy"></a>New default snapshot policy</h4>
<p>This release includes a new default snapshot policy. Three snapshots are taken over 4 hour intervals in the course of a day. And 4 daily snapshots are taken. This provides continuity over the long weekends in many countries by ensuring snapshots on Saturday, Sunday, Monday, and Tuesday.</p>

<h4><a name="LearnThoughtSpotinGA"></a>Learn ThoughtSpot in GA</h4>
<p>The Learn option from the main menu has moved from a BETA to a GA feature. Learn uses replay to teach users how to perform search with ThoughtSpot.</p>

<h4><a name="Filteredaggregation"></a>Filtered aggregation</h4>
<p>You can now use a set of filtered aggregation functions in the Formula Editor rather than crafting a lengthy <code>if then else</code> formula to achieve that today. Filters are useful for queries where the results should reflect a new, filtered vale. For example, a query that compares total revenue with the cost of the <code>west</code> region. In this example, you filter the region column to values in the <code>west</code> only.</p>

<h4><a name="Disablefooterinsomeembedsituations"></a>Disable footer in some embed situations</h4>
<p>This release includes the ability to disable the footer in embed applications that involve an individual visualization.</p>

<h4><a name="UpdatestotheSystemHealthpinboards"></a>Updates to the System Health pinboards</h4>
<p>This release includes updates to counts in System Health for:</p>
<ul>
<li>pinboard impressions</li>
<li>ad-hoc searches -new search done from search bar</li>
<li>user counts</li>
</ul>
<p>New boards were added and some older boards were deprecated. An expanded monitoring section was added to the documentation as well.</p>

<h4><a name="Comparisonwithvsandall"></a>Comparison with vs and all</h4>
<p>Users can now do comparisons with the <code>vs</code>/<code>versus</code> keyword. You can also use the new <code>all</code> keyword in these comparison expressions.</p>

<h4><a name="NewtsusernamevariableforRLS"></a>New ts_username variable for RLS</h4>
<p>A new <code>ts_username</code> variable was added for use in row level security (RLS) rules.</p>
<p><code>ts_username != 'mark'</code></p>

<h4><a name="Periodagoanalysisfeature%22foreach%22andversusandmore"></a>Period-ago analysis feature "for each" and versus and more</h4>
<p>This feature allows user to analyze and compare two time periods. For example, a user wants to compare monthly performance this year vs last year.</p>

<h4><a name="NewlanguagesandCanadiangmapping"></a>New languages and Canadian mapping</h4>
<p>This release includes support for Canadian province and county maps.</p>
<p>Additionally, following languages are possible from the interface.</p>
<div class="table-wrap">
<table class="confluenceTable">
<tbody>
<tr>
<td>Locale</td>
<td>Language</td>
<td>BETA?</td>
</tr>
<tr>
<td><strong>de-DE</strong></td>
<td>German</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><strong>en-CA</strong></td>
<td>Canadian English</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>en-GB</strong></td>
<td>United Kingdom English</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><strong>en-US</strong></td>
<td>English (United States)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><strong>es-US</strong></td>
<td>Spanish (United States)</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>fr-CA</strong></td>
<td>French (Canada)</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>fr-FR</strong></td>
<td>French (France)</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>ja</strong></td>
<td>Japanese</td>
<td>&nbsp;</td>
</tr>
<tr>
<td><strong>pt-BR</strong></td>
<td>Portuguese (Brazil)</td>
<td>Yes</td>
</tr>
<tr>
<td><strong>zh-CN</strong></td>
<td>Chinese (S)</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
</div>
<p>BETA languages are for testing purposes only. You should not rely on them for production clusters.</p>

<h4><a name="Improvementstopivottablevisualizations"></a>Improvements to pivot table visualizations</h4>
<p>This release added the ability to show grand totals on pivot tables.</p>
<p><span class="image-wrap">
<img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-20-12-03-50-657.png"| prepend: site.baseurl }}"/></span></p>
<p>Pivot tables now support the tree layout for row headers:</p>
<p><span class="image-wrap"><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-23-11-01-12-994.png"| prepend: site.baseurl }}" /></span></p>
<p>From the header menu users can now change the type of total shown for an aggregated measure:</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-23-10-58-23-080.png"| prepend: site.baseurl }}"/></p>
<p>Finally, pivot tables no longer limit the number of rows displayed. Previously, rows over the limit showed as (Other) . Now, the system simply shows the rows as expected.</p>

<h4><a name="Ramdiskispreservedacrossclusterupgrades"></a>Ramdisk is preserved across cluster upgrades</h4>
<p>A feature was added that preserves RAMDisk across cluster upgrades.</p>

<h4><a name="Presentoptiononpinboardandvisualization"></a>Present option on pinboard and visualization</h4>
<p>The present operation is now available on both the pinboard and an individual visualization <strong>Action</strong> menu.</p>
