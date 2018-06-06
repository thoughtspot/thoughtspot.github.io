---
title: ["4.5 Release Notes"]
toc: false
keywords: "release notes"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
<p>We are&nbsp;happy to inform you that the latest version of ThoughtSpot is available with the release of the 4.5 version. Below is the features list and issues that were part of the 4.5.X release cycle.</p>
<ul>
   <li><a href="#4-5-new features-and-functionality ">4.5 New Features and Functionality</a></li>
   <li><a href="notes.html#4-5-fixed-bugs">4.5 Fixed bugs</a></li>
   <li><a href="notes.html#notes-for-older-versions">Notes for older versions</a></li>
</ul>
<h2>Supported upgrade paths</h2>
<p><br />If you are running one of the following releases, you can upgrade to this release directly.</p>
<p>4.2.3, 4.3, 4.4.X and any hotfixes or customer patches on these branches</p>
<p>If you are running a different version, you need to do a multiple pass upgrade. First, upgrade to one of the above versions, and then to this release.</p>
<h2><br />4.5 New&nbsp;Features and Functionality&nbsp;</h2>
<table style="border-collapse: collapse; width: 100%;" border="0" border-collapse: collapse; padding="0">
<thead>
<tr style="width: 100%;border-bottom-style: inset;">
</tr>
</thead>
<tbody>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="UIReportsquerycancellation"></a>UI Reports query cancellation</h3>
<p>Beginning in this release, ThoughtSpot reports queries which exceed system resource:</p>
<p><tt>Query cancelled due to memory limits being exceeded (OOM).</tt></p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Datatypeinformationavailableonhover"></a>Data type information available on hover</h3>
<p>The data type information is now available when a user hovers over a column in the left panel.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Improvedsessionsecurity"></a>Improved session security</h3>
<p>New improvements in security reduce the amount of information made available by the UI during a user session.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Improvedmemorymanagementlogs"></a>Improved memory management logs</h3>
<p>This release includes improvements to how the system logs memory situations. The logs now record when a situation begins and ends plus information about which request triggered the situation. The system also now keeps a tally of how many distinct clients experienced a rejection.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Improvementsinupgrade"></a>Improvements in upgrade</h3>
<p>This release includes significant improvements in the performance of upgrades particularly those installations with large objects.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Multipledata%2Ftimeformattedcolumnsindataimport"></a>Multiple data/time formatted columns in data import</h3>
<p>Your imported data can now include columns with different date/time formats.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="NewcommandstoinstallRpackages"></a>New commands to install R packages</h3>
<p>This release includes the `tscli rpackage` command. This command allows users to manage R packages for use with SpotIQ.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Settinguserfeedbackemail"></a>Setting user feedback email</h3>
<p>Users in ThoughtSpot may be asked for feedback for new or BETA features in the<br /> system. By default, feedback goes directly to ThoughtSpot support. Alternatively, you can send feedback to someone in your company. See the <tt>tscli</tt> commands reference for details.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="SpotIQprofilepreferences"></a>SpotIQ profile preferences</h3>
<p>In this release, you can configure your SpotIQ preferences in your user profile. These preferences control notifications and allows you to exclude nulls or zero measures from your analysis.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Flyingournewcolors"></a>Flying our new colors</h3>
<p>In this release, we are changing our primary navigation bar from black to light gray. Screen captures in the documentation may show the older color scheme. Expect them to update over all.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="ExpandRLSconfigurationtoincludeallunderlyingtables"></a>Expand RLS configuration to include all underlying tables</h3>
<p>By default, worksheet queries only take into account RLS rules on tables whose<br /> columns appear in the query. Other related tables that may underly the worksheet<br /> are ignored. This means that not all RLS rules on underlying tables are applied<br /> when a user queries a worksheet.</p>
<p>You can configure a stricter application of RLS rules to take into account RLS<br /> rules from all the tables underlying the worksheet. This is recommended if you<br /> have key dimension tables that worksheets rely on but that are not necessarily<br /> regularly accessed through query. To do this, contact ThoughtSpot Customer<br /> Support.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Higherbulkfilterlimit"></a>Higher bulk filter limit</h3>
<p>Users can now have up to 10K values in a bulk filter. Additionally, bulk filtering no longer requires validation of filtered values. Values in the bulk filter that do not exist in the data are allowed in the filter. This allows a filter to anticipate data that may be present in the future.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Newhomepage"></a>New home page</h3>
<p>This release includes updates to the application home page. It now contains several new sections intended to encourage users to explore and learn about your company data:</p>
<ul>
<li><strong>All time popular/Recently trending</strong> answers and pinboards</li>
<li><strong>Recently viewed</strong> answers and pinboards</li>
<li><strong>Recent team activity</strong> Answers, pinboards, worksheets, and tables people in your company have created or edited recently.</li>
<li><strong>Did you know?</strong> Auto analysis results from SpotIQ</li>
</ul>
<p>The areas are restricted by privileges just as other areas. For example, if a user doesn't have the ability<br /> to use SpotIQ, that option does not appear.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Strictercolumnsharingfeature"></a>Stricter column sharing feature</h3>
<p>This release includes the ability to apply strict column level security. Under the standard column sharing, users without access to a specific table column can still see the column's data if subsequent worksheets relying on that data were shared with them. Now, you can for your installation, prevent this permissive sharing and prevent users from ever seeing the data. Speak with ThoughtSpot Customer Support for information on enabling this feature.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="GrantDownload%2FUploadtoAll"></a>Grant Download/Upload to All</h3>
<p>This release includes two APIs (<tt>v1/group/addprivilege</tt> or <tt>v1/group/removeprivilege</tt>) that allow you to add or remove the <tt>DATADOWNLOADING</tt> or <tt>USERDATAUPLOADING</tt> privilege to/from the system default <tt>ALL_GROUP</tt> group.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Newdatefunctionsforformulas"></a>New date functions for formulas</h3>
<p>This release includes several new date functions for formulas:</p>
<ul>
<li><strong>day_number_of_quarter</strong></li>
<li><strong>day_number_of_week</strong></li>
<li><strong>month_number_of_quarter</strong></li>
<li><strong>week_number_of_month</strong></li>
<li><strong>week_number_of_quarter</strong></li>
<li><strong>week_number_of_year</strong></li>
</ul>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Metricspipelineimprovements"></a>Metrics pipeline improvements</h3>
<p>Included in this release are metrics pipelines that empower both our team and yours to enrich the ThoughtSpot product experience. The new metric pipelines enable:</p>
<ul>
<li>Faster issue resolution: ThoughtSpot collects the diagnostic information from your system on an ongoing basis: there is no time needed to collect diagnostic information after a problem is reported. Our support team can begin working to remediate any issue with you at once.</li>
<li>Failure prevention: Metrics provides direct visibility to the ThoughtSpot team on your system's limits. Therefore, our Support team can proactively identify critical threshold issues and work to prevent failures. Metrics also help reduce SLA times as the team can debug much faster.</li>
<li>Improved Search: ThoughtSpot can tune search algorithms by studying search history and schema.</li>
<li>Improve Performance: ThoughtSpot analyzes expensive and complex query patterns to look for performance optimizations.</li>
<li>Improved Browser Performance: Finally, the metrics pipeline allows ThoughtSpot to identify application-use patterns that contribute to performance bottlenecks with specific browsers and help your team prevent or alleviate them.</li>
</ul>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Relativetimefiltering"></a>Relative time filtering</h3>
<p>This release includes support for filtering with relative time frame. The syntax for this filter is:</p>
<p><tt>last <span class="error">[N]</span> &lt;period&gt; for each &lt;period&gt;</tt></p>
<p>For example, this filter presents results for the last two months for all the years available in the data.</p>
<p><tt>last 2 months for each year</tt></p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Gridlinesforchartswithx%2Fyaxis"></a>Gridlines for charts with x/y axis</h3>
<p>Users can now enable the display of gridlines in charts that have an x and y axis.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="ImprovementstoGrowthovertimequeries"></a>Improvements to Growth-over-time queries</h3>
<p>This release includes improvements with queries that use growth of queries with formats such as the following:</p>
<p><tt>growth of &lt;measure_column&gt; by &lt;date_column&gt; &lt;bucket&gt; &lt;period-over-period&gt;</tt></p>
<p>This table shows the possible buckets and the period-over keywords you can<br /> combine:</p>
<div class="table-wrap">
<table class="confluenceTable">
<tbody>
<tr>
<td class="confluenceTd"><tt>quarterly</tt></td>
<td class="confluenceTd"><tt>monthly</tt></td>
<td class="confluenceTd"><tt>weekly</tt></td>
<td class="confluenceTd"><tt>daily</tt></td>
<td class="confluenceTd"><tt>hourly</tt></td>
</tr>
<tr>
<td class="confluenceTd"><tt>year-over-year</tt></td>
<td class="confluenceTd"><tt>year-over-year</tt></td>
<td class="confluenceTd"><tt>year-over-year</tt></td>
<td class="confluenceTd"><tt>year-over-year</tt></td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd"><tt>quarter-over-quarter</tt></td>
<td class="confluenceTd"><tt>quarter-over-quarter</tt></td>
<td class="confluenceTd"><tt>quarter-over-quarter</tt></td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd"><tt>month-over-month</tt></td>
<td class="confluenceTd"><tt>month-over-month</tt></td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd"><tt>week-over-week</tt></td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd">&nbsp;</td>
<td class="confluenceTd"><tt>day-over-day</tt></td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Newperiodkeywords"></a>New period keywords</h3>
<p>This release includes expansions to the time-series keywords. The <tt>quarter of year</tt> and <tt>day of month</tt> keywords were added.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Abilitytosettableloadprioritization"></a>Ability to set table load prioritization</h3>
<p>You can now use <tt>tql</tt> to set table load priority. You can set priority values between <tt>1-100</tt>. The default priority is <tt>50</tt>. The following illustrates examples of the new commands for setting and changing table load priority:</p>
<div class="code panel" style="border-width: 1px;">
<div class="codeContent panelContent">
<pre class="code-java">  alter table <span class="code-quote">'t1'</span> set load priority [value]
  alter table <span class="code-quote">'t1'</span> remove load priority
</pre>
</div>
</div>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Customizeheadlinedisplay"></a>Customize headline display</h3>
<p>Now, you can decide whether or not to display headlines in your table results. To customize headlines, choose <strong>Actions &gt; Customize summaries</strong>.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-21-15-35-53-119.png"| prepend: site.baseurl }}"/></p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Pinboardinformation"></a>Pinboard information</h3>
<p>The *<strong>Actions &gt; Pinboard Info</strong>* was added to the pinboards. This feature allows you to see who authored a pinboard, when it was created, and when it was last modified.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Improvedcallhomefunctionality"></a>Improved call home functionality</h3>
<p>"Call home" data is metadata and usage data from your ThoughtSpot cluster. ThoughtSpot's "call home" functionality intermittently sends a call home bundle<br /> of statistics to a ThoughtSpot S3 server via HTTPS. The data is encrypted at<br /> rest on the server.</p>
<p>Beginning with this release, callhome is enabled by default. Your ThoughtSpot Support personnel configures callhome for you during installation and upgrade.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="AdditionalRLSabilitieswithprivilege"></a>Additional RLS abilities with privilege</h3>
<p>Users in groups with this privilege (directly or via group inheritance) can now add/edit/delete existing RLS rules. They were are already permitted to:</p>
<ul>
<li>Exempt from row-level security (RLS) rules.</li>
<li>Permitted to check or uncheck Bypass RLS on a worksheet.</li>
</ul>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Newdefaultsnapshotpolicy"></a>New default snapshot policy</h3>
<p>This release includes a new default snapshot policy. Three snapshots are taken over 4 hour intervals in the course of a day. And 4 daily snapshots are taken. This provides continuity over the long weekends in many countries by ensuring snapshots on Saturday, Sunday, Monday, and Tuesday.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="LearnThoughtSpotinGA"></a>Learn ThoughtSpot in GA</h3>
<p>The Learn option from the main menu has moved from a BETA to a GA feature. Learn uses replay to teach users how to perform search with ThoughtSpot.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Filteredaggregation"></a>Filtered aggregation</h3>
<p>You can now use a set of filtered aggregation functions in the Formula Editor rather than crafting a lengthy <tt>if then else</tt> formula to achieve that today. Filters are useful for queries where the results should reflect a new, filtered vale. For example, a query that compares total revenue with the cost of the <tt>west</tt> region. In this example, you filter the region column to values in the <tt>west</tt> only.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Disablefooterinsomeembedsituations"></a>Disable footer in some embed situations</h3>
<p>This release includes the ability to disable the footer in embed applications that involve an individual visualization.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="UpdatestotheSystemHealthpinboards"></a>Updates to the System Health pinboards</h3>
<p>This release includes updates to counts in System Health for:</p>
<ul>
<li>pinboard impressions</li>
<li>ad-hoc searches -new search done from search bar</li>
<li>user counts</li>
</ul>
<p>New boards were added and some older boards were deprecated. An expanded monitoring section was added to the documentation as well.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Comparisonwithvsandall"></a>Comparison with vs and all</h3>
<p>Users can now do comparisons with the <tt>vs</tt>/<tt>versus</tt> keyword. You can also use the new <tt>all</tt> keyword in these comparison expressions.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="NewtsusernamevariableforRLS"></a>New ts_username variable for RLS</h3>
<p>A new <tt>ts_username</tt> variable was added for use in row level security (RLS) rules.</p>
<p><tt>ts_username != 'mark'</tt></p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Periodagoanalysisfeature%22foreach%22andversusandmore"></a>Period-ago analysis feature "for each" and versus and more</h3>
<p>This feature allows user to analyze and compare two time periods. For example, a user wants to compare monthly performance this year vs last year.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="NewlanguagesandCanadiangmapping"></a>New languages and Canadian mapping</h3>
<p>This release includes support for Canadian province and county maps.</p>
<p>Additionally, following languages are possible from the interface.</p>
<div class="table-wrap">
<table class="confluenceTable">
<tbody>
<tr>
<td class="confluenceTd">Locale</td>
<td class="confluenceTd">Language</td>
<td class="confluenceTd">BETA?</td>
</tr>
<tr>
<td class="confluenceTd"><strong>de-DE</strong></td>
<td class="confluenceTd">German</td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd"><strong>en-CA</strong></td>
<td class="confluenceTd">Canadian English</td>
<td class="confluenceTd">Yes</td>
</tr>
<tr>
<td class="confluenceTd"><strong>en-GB</strong></td>
<td class="confluenceTd">United Kingdom English</td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd"><strong>en-US</strong></td>
<td class="confluenceTd">English (United States)</td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd"><strong>es-US</strong></td>
<td class="confluenceTd">Spanish (United States)</td>
<td class="confluenceTd">Yes</td>
</tr>
<tr>
<td class="confluenceTd"><strong>fr-CA</strong></td>
<td class="confluenceTd">French (Canada)</td>
<td class="confluenceTd">Yes</td>
</tr>
<tr>
<td class="confluenceTd"><strong>fr-FR</strong></td>
<td class="confluenceTd">French (France)</td>
<td class="confluenceTd">Yes</td>
</tr>
<tr>
<td class="confluenceTd"><strong>ja</strong></td>
<td class="confluenceTd">Japanese</td>
<td class="confluenceTd">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd"><strong>pt-BR</strong></td>
<td class="confluenceTd">Portuguese (Brazil)</td>
<td class="confluenceTd">Yes</td>
</tr>
<tr>
<td class="confluenceTd"><strong>zh-CN</strong></td>
<td class="confluenceTd">Chinese (S)</td>
<td class="confluenceTd">&nbsp;</td>
</tr>
</tbody>
</table>
</div>
<p>BETA languages are for testing purposes only. You should not rely on them for production clusters.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Improvementstopivottablevisualizations"></a>Improvements to pivot table visualizations</h3>
<p>This release added the ability to show grand totals on pivot tables.</p>
<p><span class="image-wrap">
<img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-20-12-03-50-657.png"| prepend: site.baseurl }}"/></span></p>
<p>Pivot tables now support the tree layout for row headers:</p>
<p><span class="image-wrap"><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-23-11-01-12-994.png"| prepend: site.baseurl }}" /></span></p>
<p>From the header menu users can now change the type of total shown for an aggregated measure:</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/image-2018-03-23-10-58-23-080.png"| prepend: site.baseurl }}"/></p>
<p>Finally, pivot tables no longer limit the number of rows displayed. Previously, rows over the limit showed<br /> as (Other) . Now, the system simply shows the rows as expected.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Ramdiskispreservedacrossclusterupgrades"></a>Ramdisk is preserved across cluster upgrades</h3>
<p>A feature was added that preserves RAMDisk across cluster upgrades.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<h3><a name="Presentoptiononpinboardandvisualization"></a>Present option on pinboard and visualization</h3>
<p>The present operation is now available on both the pinboard and an individual visualization <strong>Action</strong> menu.</p>
</td>
</tr>
</tbody>
</table>
<h2>4.5 Fixed Bugs&nbsp;</h2>
<table style="border-collapse: collapse; width: 100%;" border="0" border-collapse: collapse; padding="0">
<thead>
<tr style="width: 100%;border-bottom-style: inset;">
</tr>
</thead>
<tbody>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where insufficient memory caused services on a cluster to crash repeatedly.</p>
</td>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where idle sessions were never timing out.</p>
</td>
</tr>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where indexes failed to build for empty tables.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where users were unable to scroll in IE with pivot tables.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issues with upgrade was resolved which caused the appliance to boot from an incorrect partition causing users to be found missing.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where where deadlock issues with the Search service caused indexing to fail.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where periodic backups was delayed.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Adding columns to a worksheet and saving them resulted in timeouts and an <tt>HTTP_UNAUTHORIZED(401)</tt> status. This problem resulted from an internal <tt>SESSION</tt> handling error. This problem was resolved in this release.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where <tt>tsadmin</tt> and <tt>guest</tt> were prevented from uploading a CSV upload and received a red bar error instead.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem with memory links during upgrade was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where Google Chrome version 65 broke the formatting of headlines in pinboards. This issue was reported as a Product Support Advisory for versions 3.x and 4.x releases older than 4.4.1.4. </p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An underlying system issue was resolved that caused a saved answer to fail with a red bar error if the answer was created on a relationship(s) which was based on a hidden column(s).</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A pinned answer that relied on an underlying join between two worksheets one of<br /> which included a filter failed to display properly. This problem was resolved in<br /> this release.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>After upgraded customer appliance from 4.4.0.11 to 4.4.1.2 GA, some pinboards could not be opened and instead returned a red bar error. This issue was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Some customers reported that several data buckets were relative to calendar year/quarter/month rather than relative to the financial year.</p>
<ul>
<li>QUARTER_OF_YEAR</li>
<li>MONTH_OF_YEAR</li>
<li>MONTH_OF_QUARTER</li>
<li>WEEK_OF_YEAR_ISO</li>
<li>WEEK_OF_QUARTER</li>
<li>DAY_OF_YEAR</li>
<li>DAY_OF_QUARTER</li>
</ul>
<p>This issue was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was resolved where hidden fields in source data prevented users from creating answers related to other columns in that data.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Customers were receiving a <tt>RowSecurityManager not implemented for Atlas.</tt> message when scheduling a pinboard. This problem was the result of legacy features in the system. These features no longer are checked.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where drill down on multiple buckets did not apply all date filters.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved that caused segmentation faults which in turn caused crashes in a cluster during an upgrade.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was resolved that potentially made ThoughtSpot at risk for Jackson JSON Library Vulnerabilities.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved with the <strong>Show underlying data</strong> function ignoring the "last period" filter. This filter is no longer ignored.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where the presence of a date bucket filter after a measure column was ignored in query execution.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Issues were resolved that potentially exposed ThoughtSpot to two vulnerabilities: "Meltdown" and "Spectre", along with variants. These vulnerabilities only applied when the ThoughtSpot application was sharing hardware with other applications, such as cloud deployments. When deployed in a virtualized environment, either on prem or in AWS, the virtual environment needed to patch the OS for it. When deployed on its own appliance, these vulnerabilities should not have affected ThoughtSpot.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was fixed that occurred when plotting a formula that has either NaN or Infinity as some of the values. In this case, the pivot table treated the first instance of NaN/Infinity and every subsequent value as a single value and plots it in one cell. This problem was fixed.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where <tt>near</tt> keywords returned a red bar error.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was resolved where requests to update a formula failed due to the complexity of the nesting.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Non-admin user could still see hidden fields. In queries, these users were asked to disambiguate these even though they were hidden. This problem was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was fixed where the installation path was not properly updated resulting in an environment pointing to old versions of <tt>tsload</tt> and <tt>tql</tt>. Now, the standard path is updated during an upgrade.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where a saved answer from version 4.3 failed after upgrade because they referred to old table names.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>When query has keywords that map to date column and Period Ago date buckets then SpotIQ Insight for that query did not work even though the user-created query succeeded. This SpotIQ bug was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>When a query had keywords that mapped to a date column as well as to date buckets, SpotIQ Analysis failed for that query. For example, in query <tt>revenue in Q1 1992</tt> the last part represents date buckets. If <tt>Q1 1992</tt> maps to a date column then SpotIQ analysis failed. The query itself worked and any answer/pinboard that based on these queries were fine. This problem was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where NPS surveys were appearing when ThoughtSpot was provided through embedded content. This should no longer occur.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was occurring where upgrade to a new version caused several types of formulas that relied on aggregated data to stop working. Problems were recorded involving:</p>
<ul class="alternate" type="square">
<li>Unique or count not functional when using Aggregated date.</li>
<li>Group_count not functional as well.</li>
<li>Group_max giving duplicated result.</li>
</ul>
<p>This problem was resolved and should no longer appear</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where ThoughtSpot would throw an error if the query involved multiple date filters on the same date column. This has been fixed in this release.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where the <tt>tscli ssl set-min-version</tt> failed because the minimum value was incorrect internally. The internal issue was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue with the callhome metrics feature caused problems during upgrade. This problem was resolved.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where deleting a relationship failed if either side of that relationship was a worksheet.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where Zookeeper reported reaching a descriptor limit. This report was returned in error. ThoughtSpot no longer reports this.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved where data loaded very slowly.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem where Strict Transport Security was not enforced was fixed. The product now supports Strict Transport Security.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>An issue was resolved where the ThoughtSpot application was potentially vulnerable to Cross-Site Request Forgery (CSRF) . The potential was removed from the application interactions. Any ThoughtSpot API clients will have to be updated to be compliant with this new feature. The primary clients that would be effected:</p>
<ul>
<li>Sync scripts that manage users and groups creation.</li>
<li>Scripts that use the public APIs to fetch data.</li>
</ul>
<p>The easiest way to diagnose this would be the inability of the script to login to the system. Please contact support to get guidance on the steps to resolve the issue.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>A problem was resolved with the <tt>JESSIONID</tt> value. Previously, setting the <strong>Remember Me</strong> option on the login page, caused the server to set a new <tt>JSESSIONID</tt> on the client after the user logs out. This new <tt>JSESSIONID</tt> was used for the next authenticated user session, regardless of the user's identity. This no longer happens. Instead, users that re-login after setting <strong>Remember Me</strong> are given a new <tt>JSESSIONID</tt>.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Dates on the *<strong>Data</strong>* page was corrected so that dates now sort chronologically.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Previously, the application allowed cookies to contain information related to session state. An option was added to set more secure cookie handling in the application.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Previously, the login form on the ThoughtSpot application provided an autocomplete feature. Autocomplete is no longer support. Turning off <tt>autocomplete</tt> prevents intruders from compromising ThoughtSpot from a workstation unattended using a previously stored user ID and/or password.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>Previously, alerts were time stamped with in PDT. This was fixed, now <tt>tscli alert list</tt> shows alerts display in the cluster's local timezone.</p>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px;">
<p>The system now validates both the format and the size of profile pictures, previously these were not checked.</p>
</td>
</tr>
</tbody>
</table>
<h2>Notes for older versions</h2>
<ul>
<li><a href="{{"/4.4/release/notes.html" | prepend: site.baseurl }}">4.4 Release Notes</a></li>
<li><a href="{{"/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf" | prepend: site.url }}">4.2 Release Notes</a></li>
<li><a href="{{"/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf" | prepend: site.url }}">3.5 Release Notes</a></li>
<li><a href="{{"/3.4/pdf/ThoughtSpot_Release_Notes_3.4.pdf" | prepend: site.url }}">3.4 Release Notes</a></li>
</ul>
