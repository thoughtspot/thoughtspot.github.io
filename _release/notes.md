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

<p><br />If you are running clusters on 4.5.x, you can upgrade to release
5.0 directly. (This includes any hotfixes or patches on these branches.)</p>

<p>If you are running on 4.4 or earlier releases, direct upgrade of a cluster
to 5.0 is not supported. In this case, you need to do a multiple pass upgrade:</p>

<ol>
    <li>Upgrade your cluster to the latest version of 4.5.x.</li>
    <li>After successful completion of step 1, upgrade from 4.5.x to 5.0.</li>
</ol>

<a name="5-0-new-features-and-functionality"></a>
<h2>5.0 New Features and Functionality</h2>

<thead>
<tr style="width: 100%;border-bottom-style: inset;">
</tr>
</thead>
<tbody>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="ProvidedfullintegrationwithSlackviaSpot"></a>Provided full integration with Slack via Spot</h3>
<p>Slack is an enterprise software platform for team communication through a messaging
application. Slack also allows users to communicate with applications like ThoughtSpot
through chat. ThoughtSpot implemented full Slack integration in version 4.5.1.
Administrators can follow setup steps in <a href="{{"/4.5/admin/setup/slack-integration.html" | prepend: site.url }}">Add the Slack integration</a>, and ThoughtSpot users can learn how to use Spot in
<a href="{{"/4.5/end-user/slack/intro.html" | prepend: site.url }}">Slack and Spot</a>
and <a href="{{"/4.5/end-user/slack/use-spot.html" | prepend: site.url }}">How to use Spot</a></p>
</div>
</td>
</tr>
<tr style="width: 100%;border-bottom-style: inset;">
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="AddedtheabilitytoaddcustomHelplinks"></a>Added the ability to add custom Help links</h3>
<p>When users click the help icon, they see a list of links. You can now add your own links to this list. This allows you to include documentation specific to your company, such as information about the data available in ThoughtSpot, where to get support internally, or company-specific training.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/custom_help_item.png"| prepend: site.baseurl }}"/></p>
<p>You can also edit existing links, change icons, or remove items from the help listing altogether.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/customize_help.png"| prepend: site.baseurl }}"/></p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Adminchartcolorpalettesautoupdatebasedonprimary color"></a>Admin chart color palettes auto update based on primary colors</h3>
<p>In the Admin <b>Style Customization</b> "Chart Color Palettes", secondary color gradients are now based off of the primary colors selected. When a different primary color is chosen, the associated secondary color gradients below it automatically update.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-palette-admin-style-customize.png"| prepend: site.baseurl }}"/></p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Customcolorpalettesarereflectedinuserschartcolorpicker"></a>Custom color palettes are reflected in users chart color picker</h3>
<p>Color palette changes made by the Admin in Style Customization, are now reflected in users' chart configuration color palettes (not just in the auto-generated chart colors, as in previous releases).</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-user-config-inherit-palette.png"| prepend: site.baseurl }}"/></p>
</div>
</td>
</tr>
<tr style="width: 100%;">
<td style="border: 1px solid #cccccc; text-align: left; padding: 10px 5px; max-width: 500px;">
<div style="word-wrap: break-word; overflow-wrap: break-word;">
<h3><a name="Admincanenableordisableautocolorrotationinstylecustomizationchartcolorpalettes"></a>Admins can enable or disable auto color rotation in Style Customization Chart Color Palettes</h3>
<p>When there is a single color on a chart (no legend), ThoughtSpot auto-rotates through primary colors to render the chart for visual variety. If an Admin does not want this behavior, they can disable it by choosing <b>Disable Color Rotation</b> on the "Chart Color Palettes", in which case ThoughtSpot will always use the default color on single-color charts.</p>
<p><img style="border: 0px solid black;" src="{{ "/images/notes/chart-color-palette-admin-rotation-on-off.png"| prepend: site.baseurl }}"/></p>
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
</tbody>

<a name="5-0-fixed-bugs"></a>
<h2>5.0 Fixed Bugs</h2>

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

<a name="notes-for-older-versions"></a>
<h2>Notes for older versions</h2>
<ul>
<li><a href="{{"/4.5/pdf/ThoughtSpot_Release_Notes_4.5.pdf" | prepend: site.url }}">4.5 Release Notes</a></li>
<li><a href="{{"/4.4/pdf/ThoughtSpot_Release_Notes_4.4.pdf" | prepend: site.url }}">4.4 Release Notes</a></li>
<li><a href="{{"/4.2/pdf/ThoughtSpot_Release_Notes_4.2.2.pdf" | prepend: site.url }}">4.2 Release Notes</a></li>
<li><a href="{{"/3.5/pdf/ThoughtSpot_Release_Notes_3.5.7.pdf" | prepend: site.url }}">3.5 Release Notes</a></li>
</ul>
