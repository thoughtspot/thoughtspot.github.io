---
title: ["Release Notes"]
toc: false
keywords: "release notes"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

<p>We are&nbsp;happy to inform you that the latest version 4.4 of ThoughtSpot is available. Below is the list features and issues that were part of this release.</p>

<h2>New&nbsp;Features and Functionality</h2>
<table style="border-collapse: collapse; width: 100%; font-size: inherit; font-family: inherit;" border="0" cellspacing="0" cellpadding="0">
<thead>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<th style="text-align: left; padding: 10px 0; font-weight: bold; font-size: inherit; font-family: inherit;" title="Description">Description</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="LearnThoughtSpotinBETA"></a>Learn ThoughtSpot in BETA</h4>
<p>The Learn option from the main menu is a BETA feature that uses replay to teach you more about ThoughtSpot.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="SupportforUKandCanadianLanguages"></a>Support for UK and Canadian Languages</h4>
<p>Support for UK English (<strong>en-GB</strong>) and Canadian English (<strong>en-CA</strong>) was added. Users can <a class="external-link" href="https://docs.thoughtspot.com/4.4/end-user/introduction/about-user.html" rel="nofollow">set these locale's via their profile</a></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Showregressionlineoption"></a>Show regression line option</h4>
<p>Users have a new option to <strong>Show Regression Line</strong> on line, column, bubble, and scatter charts.</p>
<p>
<img src="{{ "/images/notes/image-2017-10-11-16-05-22-908.png"| prepend: site.baseurl }}"/></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="NewHasadministrationprivileges"></a>New Has administration privileges</h4>
<p>If you add the privilege <strong>Has administration privileges</strong> to a group, note that all users in that group will be able to see all the data in ThoughtSpot. Administrators can see all data sources, and row-level security (RLS) does not apply to them. If you want to enable users to bypass row-level security, add them to a group with <strong>Can Administer RLS</strong> privileges.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Checkclustercommandadded"></a>Check cluster command added</h4>
<p>The <tt>tscli cluster check</tt> command was added to check the status of all or specific nodes in a cluster.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Servicelogsstoredtodisk"></a>Service logs stored to disk</h4>
<p>Service logs are now stored to disk. This ensures better protection against service logs from exceeding the SSD on a node and impacting a node.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Thetsclinasmountcifscommandrequiresapassword"></a>The tscli nas mount-cifs command requires a password</h4>
<p>Now the <tt>tscli nas mount-cifs</tt> command prompts for a password if you do not supply one.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="SankeyChart"></a>Sankey Chart</h4>
<p>A new type of chart, the Sankey diagram, is now available. This chart displays a flow diagram that illustrates transfers of flows within a system.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Newimprovedicons"></a>New improved icons</h4>
<p>In this release, the search <strong>?</strong> (question mark) icon was replaced with an <strong>i</strong> (letter "i"). The team has redesigned the caret-down and <strong>x</strong> (clear-all) icon. Finally, the wand icon is removed from keywords in the <strong>Search</strong> dropdown. Instead, the identifier <tt>keyword</tt> appears beneath each keyword.</p>
<p><img src="{{ "/images/notes/image-2017-10-11-14-14-52-672.png "| prepend: site.baseurl  }}"/></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="WhatamIlookingat%3FRedesign%21"></a>What am I looking at? Redesign!</h4>
<p>The <strong>What am I looking at</strong> information panel is improved in this release with an <strong>I</strong> rather than the previous <strong>?</strong> (question mark). The new design is intended to clarify the information in the panel and make it easier to use.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Configurablemaximumjobtime"></a>Configurable maximum job time</h4>
<p>You can set the maximum amount of time in milliseconds a task is allowed to stay in "In progress" state. If the task exceeds this time, it is aborted.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Administerrowlevelsecurityprivilege"></a>Administer row level security privilege</h4>
<p>Users with the <strong>Can Administer RLS</strong> privilege can bypass row-level security (RLS) rules. By default this privilege is enabled. You can configure your installation to disable it.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>ThoughtSpot introduced a feature in <strong>3.4</strong> which implicitly converted boolean columns to filters when a user searched. For example, <tt>product isRed = true</tt> became <tt>product isRed</tt>. This behavior meant that the <tt>product</tt> column was not added to the table or chart result.</p>
<p>Users were confused by this implicit behavior. This feature was reverted <strong>4.3</strong>. Now, boolean columns are treated like any other columns in the query. Meaning they remain <tt>product isRed = true</tt> and are not converted. The column also appears in the search results.</p>
<p>When you upgrade a 3.4 through 4.2 installation to 4.3 or newer, tables or charts created in the 3.4 through 4.2, that contained these booleans are upgraded using <tt>product isRed = true</tt> so that users are not surprised by additional columns suddenly appearing in their saved answers.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="ImprovementsinRAMDiskrecovery"></a>Improvements in RAMDisk recovery</h4>
<p>This release includes improvements in the speed and performance of RAMDisk recovery.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Fantrapsituationsaresupportedfornewinstallations"></a>Fan trap situations are supported for new installations</h4>
<p>ThoughtSpot now supports fan traps in new installations. This feature is enabled by default in new installations.</p>
<p>For existing customers upgrading to 4.4 this feature is disabled. You must work with ThoughtSpot Support and Customer support to dentify answers and pinboards that are impacted should this feature be enabled. Your ThoughtSpot customer service representative or ThoughtSpot Support can help you to identify, mitigate, and resolve any impacted data. Once these impacts are resolved, they can enable the feature for you.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Improvementstoconcatfunction"></a>Improvements to concat function</h4>
<p>The <tt>concat</tt> function now allows users to concatenate multiple strings rather than single strings.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Primarykeydropscheckdependencies"></a>Primary key drops check dependencies</h4>
<p>Dropping a primary key can impact downstream objects such as worksheets and pinboards. When dropping a primary key, TQL now checks for dependencies and issues a warning. Users must override with the <tt>--allow_unsafe</tt> flag.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="TooltipfunctionalityintheSchemaVisualizer"></a>Tooltip functionality in the Schema Visualizer</h4>
<p>A tooltip function was introduced into the <strong>Table</strong> list for the <strong>Schema Visualizer</strong>. This tooltip shows information about the underlying table.</p>
<p>
<img src="{{ "/images/notes/image-2017-10-12-11-34-45-219.png "| prepend: site.baseurl  }}" /></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Colorpickerimprovements"></a>Color picker improvements</h4>
<p>This release includes new vibrant chart colors. It also includes the ability to add your own HEX values.</p>
<p><img src="{{ "/images/notes/image-2017-10-11-14-51-27-471.png "| prepend: site.baseurl  }}" /></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="tspublicsession%2Floginandsession%2FlogoutAPIs"></a>tspublic session/login and session/logout APIs</h4>
<p>This release includes two new public APIs. You can use these APIs to log users in and out of a ThoughtSpot session. See the documentation for <a class="external-link" href="https://goo.gl/ggXFCb" rel="nofollow">details about the calls</a>.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Reducesearchsuggestiontokens"></a>Reduce search suggestion tokens</h4>
<p>This release improves the search experience by reducing the number of tokens in search results. Users found the number of suggestions confusing. Instead, the search greatly reduces the number of suggestions.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Queryprocessingimprovements"></a>Query processing improvements</h4>
<p>This release includes improvements to the underlying processing of complex schema, object, and formula variations. Users should see improved ability to work with:</p>
<ul>
<li>Schema various such as chasm, fan, nested chasm, and chain of chasm traps,</li>
<li>Object variations such as aggregated worksheet, join of aggregated worksheet and base tables.</li>
<li>Formula variation such as aggregate and non-aggregate functions, windowing functions, and pinned measures.</li>
</ul>
<p>These changes include optimization for generating queries that involve row level security(RLS).</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Filterbycreator"></a>Filter by creator</h4>
<p>Users have the ability to filter pinboards and answers by creator.</p>
<p><img src="{{ "/images/notes/image-2017-10-12-11-57-00-108.png "| prepend: site.baseurl  }}" /></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Improvementinpinboardlayoutofsmalltable"></a>Improvement in pinboard layout of small table</h4>
<p>Tables with fewer rows appeared distorted with whitespace when pinned in a pinboard. This release includes improvements for display of tables in pinboards. See the documentation for more information about <a class="external-link" href="https://goo.gl/XiqaXu" rel="nofollow">editing a pinboard</a>.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Formulaperformanceimprovements"></a>Formula performance improvements</h4>
<p>This release includes improvements in backend indexing formats that result in formula performance improvements.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Abilitytodefineajoinbetweenaworksheetandatable"></a>Ability to define a join between a worksheet and a table</h4>
<p>Users can join a worksheet to one or more tables. The direction of the join can be from the worksheet to the table or the reverse. When you join a worksheet to a table, you bring any tables connected to the joined table into a search.</p>
<p>This feature has limitations. It is not possible to join multiple tables in the worksheet and a single table in a single relationship. Nor is it possible to join between a formula column in a worksheet and another table.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Gettingaclusterconfiguration"></a>Getting a cluster configuration</h4>
<p>When using <tt>tscli cluster get-config</tt> to get cluster information, the system can run into situations where it cannot make a connection across the network. When this happens, the command returns an error but continues to work.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="ODBCextract%2Ftransform%2Floadimprovements"></a>ODBC extract/transform/load improvements</h4>
<p>By default, ThoughtSpot takes a permissive approach to datatype compatibility<br /> between source and target in ODBC. As much as possible ThoughtSpot automatically<br /> converts incoming "compatible" input data to the desired ThoughtSpot target<br /> datatype. Flags were added that allow you to tune this behavior and make it stricter. At installation time, your customer support engineer can assist you in<br /> configuring a stricter load behavior.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Userswithdataaccesscandrilldown"></a>Users with data access can drill down</h4>
<p>If you own the pinboard you can drill down to the data beneath. New in this release, users you share the pinboard with can also drill down provide they <em>also</em><br /> have access to the data on which the board was based.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Descriptionincludedwhenaddingcolumnstoworksheets"></a>Description included when adding columns to worksheets</h4>
<p>When adding a column from an existing data table or worksheet, the <strong>Description</strong> of the column is also copied into the new worksheet.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="Abilitytochangeapinboardheadline"></a>Ability to change a pinboard headline</h4>
<p>Users can edit the pinboard headline. To edit a headline, activate the headline edit button at the corner of a headline and click it.</p>
<p><img src="{{ "/images/notes/image-2017-10-12-14-24-08-298.png "| prepend: site.baseurl }}" /></p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<h4><a name="APItotransferownershipofobjects"></a>API to transfer ownership of objects</h4>
<p>The new <tt>POST /tspublic/v1/user/transfer/ownership</tt> API was added. It allows the transfer ownership of all objects from one user to another. You must transfer all of a user's objects. This mehtod takes two query parameters of type String.</p>
<ul>
<li><strong><tt>fromUserName</tt></strong> Name of a user from whom the ownership needs to be transferred.</li>
<li><strong><tt>toUserName</tt></strong> Name of a user to whom the ownership needs to be transferred.</li>
</ul>
<p>It returns a <tt>200</tt> status if ownership of all objects are successfully transferred. It returns a status of <tt>400</tt> if either the <tt>fromName</tt> and <tt>toName</tt> is invalid or for given username there is no user present.</p>
</td>
</tr>
</tbody>
</table>
<h2>Fixed Bugs</h2>
<table style="border-collapse: collapse; width: 100%; font-size: inherit; font-family: inherit;" border="0" cellspacing="0" cellpadding="0">
<thead>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<th style="text-align: left; padding: 10px 0; font-weight: bold; font-size: inherit; font-family: inherit;" title="Description">Description</th>
</tr>
</thead>
<tbody>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Aggregation over group_max returned a red bar error, This was resolved, users can now aggregate over a <tt>group_max</tt> function.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>A problem with editing formulas was resolved where users were repeatedly and unnecessarily presented with disambiguation options.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>An issue was resolved where a bar on the chart label did not match the underlying data. The data was correct, the label was not.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>An issue was corrected where, if one snapshot deletion failed in any fashion, any subsequent attempts to delete a snapshot failed.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Users were unable to edit a KPI formula if the KPI formula was pinned to a pinboard.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Users were able to <strong>Select All</strong> for 1000+ items in a pinboard filter. This action was available but not supported and caused users to believe pinboard filters were not working. Now, the option to <strong>Select All</strong> no longer functions when there are 1000+ items in a filter.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Users were unable to restore a database backup without first renaming the backup. Renaming is no longer required.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Creating a formula on <tt>cumulative_sum</tt> function mistakenly caused an error to appear. This action no longer causes an error.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Some installations saw worksheet performance degrade for worksheets with a large number of columns. Users can now set a configuration option to avoid these problems.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Previously setting both the browser and the ThoughSpot profile value failed to display numbers and date formats in the proper locale. This problem was corrected. Setting the ThoughtSpot profile to the proper locale results in the appropriate display of date and number formats. It also causes translated strings to appear in the interface where they exist.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Active directory (AD) synchronization was not working. Moreover, if AD security group had no members in it, then the synchronization did not recognize the group at all. These problems were corrected, empty groups are recognized and users moved between groups now are properly synchronized by ThoughtSpot.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>A problem was resolved where the round function returned a negative zero when it should have returned a 0 (zero).</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Visualizations that relied on chasm trap worksheet were not immediately updated when a formula was changed. The workaround was to manually update the visualization. This was corrected. The system now updates the visualization automatically when an underlying formula is changed.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>On a worksheet with a chasm trap, join between a fact and dimension did not work properly when grouping by a measure on the dimension table. This was fixed.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Using <tt>safe_divide</tt> and <tt>sum</tt> did not work with formula on formula. This problem was fixed.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Data connected schedules did not adjust for daylight savings time. Now, the schedules adjust as expected.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>The ThoughtSpot tomcat instance went into crash loop when a generic relationship includes <tt>IS NULL</tt> operator. Now, this relationship no longer causes this problem.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>An ODBC connection between Alteryx and ThoughtSpot was failing. This problem was solved by updating the ODBC drivers to the latest versions.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>An issue was fixed where an unnecessary right-outer join was being applied to row-level security RLS-introduced joins. This situation led to impacts on query performance.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>A problem was resolved with multiple sequential joins. Previously, the proper join path was not used when the fields are pulled from tables that were far apart unless fields from the intermediate tables were also used. Now, ThoughtSpot is able to handle multiple sequential joins.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Resolved an issue with a chasm trap that used <tt>unique count</tt> on shared dimension. The chasm trap was generating an incorrect query. Now, <tt>unique count</tt> is applied correctly in the final query.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Previously, a user user that created some row-level security (RLS) rules was associated with the rules such that deleting the user also deleted the rules. This is no longer the case. If a user creates a set of RLS rules and that user is subsequently deleted, the rules persist in the system.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>An issue was resolved where filters could only be edited in the search bar.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>Intermittent, ambiguous red bar errors related to chasm trap situations were resolved.</p>
</td>
</tr>
<tr style="border-bottom: 1px solid #cccccc; width: 100%;">
<td style="text-align: left; padding: 10px 0; font-size: inherit; font-family: inherit;">
<p>The help for row-level security rules was complicated and hard to parse. This text was improved and moved into the Query Visualizer.</p>
</td>
</tr>
</tbody>
</table>
