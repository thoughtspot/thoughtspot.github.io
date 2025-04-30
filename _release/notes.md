---
title: ["Release Notes"]
toc: false
keywords: "release notes"
last_updated: 04/08/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

We are happy to inform you that the latest version of ThoughtSpot, Release 4.4, is now available.

These are the new and enhanced features in this release. For a complete list of issues that we fixed in this release, see [Fixed issues]({{ site.baseurl }}/release/fixed.html).

{% include callout.html content="For detailed descriptions of new features and capabilities in this release, see the official release announcement on the ThoughtSpot blog <b><a href='https://www.thoughtspot.com/thoughtspot-blog/5-amazing-new-additions-thoughtspot-44'>5 Amazing New Additions in ThoughtSpot 4.4</a>.</b>" type="success" %}

<h4><a name="LearnThoughtSpotinBETA"></a>Learn ThoughtSpot in BETA</h4>
The Learn option from the main menu is a BETA feature that uses replay to teach you more about ThoughtSpot.
<h4><a name="SupportforUKandCanadianLanguages"></a>Support for UK and Canadian Languages</h4>
Support for UK English (<strong>en-GB</strong>) and Canadian English (<strong>en-CA</strong>) was added. Users can <a class="external-link" href="https://docs.thoughtspot.com/4.4/end-user/introduction/about-user.html" rel="nofollow">set these locale's via their profile</a>

<h4><a name="Showregressionlineoption"></a>Show regression line option</h4>
Users have a new option to <strong>Show Regression Line</strong> on line, column, bubble, and scatter charts.

<img src="{{ "/images/notes/image-2017-10-11-16-05-22-908.png"| prepend: site.baseurl }}"/>

<h4><a name="NewHasadministrationprivileges"></a>New Has administration privileges</h4>
If you add the privilege <strong>Has administration privileges</strong> to a group, note that all users in that group will be able to see all the data in ThoughtSpot. Administrators can see all data sources, and row-level security (RLS) does not apply to them. If you want to enable users to bypass row-level security, add them to a group with <strong>Can Administer RLS</strong> privileges.

<h4><a name="Checkclustercommandadded"></a>Check cluster command added</h4>
The `tscli cluster check` command was added to check the status of all or specific nodes in a cluster.

<h4><a name="Servicelogsstoredtodisk"></a>Service logs stored to disk</h4>
Service logs are now stored to disk. This ensures better protection against service logs from exceeding the SSD on a node and impacting a node.

<h4><a name="Thetsclinasmountcifscommandrequiresapassword"></a>The tscli nas mount-cifs command requires a password</h4>
Now the `tscli nas mount-cifs` command prompts for a password if you do not supply one.

<h4><a name="SankeyChart"></a>Sankey Chart</h4>
A new type of chart, the Sankey diagram, is now available. This chart displays a flow diagram that illustrates transfers of flows within a system.

<h4><a name="Newimprovedicons"></a>New improved icons</h4>
In this release, the search <strong>?</strong> (question mark) icon was replaced with an <strong>i</strong> (letter "i"). The team has redesigned the caret-down and <strong>x</strong> (clear-all) icon. Finally, the wand icon is removed from keywords in the <strong>Search</strong> dropdown. Instead, the identifier `keyword` appears beneath each keyword.

<img src="{{ "/images/notes/image-2017-10-11-14-14-52-672.png "| prepend: site.baseurl  }}"/>

<h4><a name="WhatamIlookingat%3FRedesign%21"></a>What am I looking at? Redesign!</h4>
The <strong>What am I looking at</strong> information panel is improved in this release with an <strong>I</strong> rather than the previous <strong>?</strong> (question mark). The new design is intended to clarify the information in the panel and make it easier to use.

<h4><a name="Configurablemaximumjobtime"></a>Configurable maximum job time</h4>
You can set the maximum amount of time in milliseconds a task is allowed to stay in "In progress" state. If the task exceeds this time, it is aborted.

<h4><a name="Administerrowlevelsecurityprivilege"></a>Administer row level security privilege</h4>
Users with the <strong>Can Administer RLS</strong> privilege can bypass row-level security (RLS) rules. By default this privilege is enabled. You can configure your installation to disable it.

<h4><a name="Reversebooleantofilter"></a>Reverse of boolean to filter conversion</h4>
ThoughtSpot introduced a feature in <strong>3.4</strong> which implicitly converted boolean columns to filters when a user searched. For example, `product isRed = true` became `product isRed`. This behavior meant that the `product` column was not added to the table or chart result.

Users were confused by this implicit behavior. This feature was reverted <strong>4.3</strong>. Now, boolean columns are treated like any other columns in the query. Meaning they remain `product isRed = true` and are not converted. The column also appears in the search results.

When you upgrade a 3.4 through 4.2 installation to 4.3 or newer, tables or charts created in the 3.4 through 4.2, that contained these booleans are upgraded using `product isRed = true` so that users are not surprised by additional columns suddenly appearing in their saved answers.

<h4><a name="ImprovementsinRAMDiskrecovery"></a>Improvements in RAMDisk recovery</h4>
This release includes improvements in the speed and performance of RAMDisk recovery.

<h4><a name="Fantrapsituationsaresupportedfornewinstallations"></a>Fan trap situations are supported for new installations</h4>
ThoughtSpot now supports fan traps in new installations. This feature is enabled by default in new installations.

For existing customers upgrading to 4.4 this feature is disabled. You must work with ThoughtSpot Support and Customer support to dentify answers and pinboards that are impacted should this feature be enabled. Your ThoughtSpot customer service representative or ThoughtSpot Support can help you to identify, mitigate, and resolve any impacted data. Once these impacts are resolved, they can enable the feature for you.

<h4><a name="Improvementstoconcatfunction"></a>Improvements to concat function</h4>
The `concat` function now allows users to concatenate multiple strings rather than single strings.

<h4><a name="Primarykeydropscheckdependencies"></a>Primary key drops check dependencies</h4>
Dropping a primary key can impact downstream objects such as worksheets and pinboards. When dropping a primary key, TQL now checks for dependencies and issues a warning. Users must override with the `--allow_unsafe` flag.

<h4><a name="TooltipfunctionalityintheSchemaVisualizer"></a>Tooltip functionality in the Schema Visualizer</h4>
A tooltip function was introduced into the <strong>Table</strong> list for the <strong>Schema Visualizer</strong>. This tooltip shows information about the underlying table.

<img src="{{ "/images/notes/image-2017-10-12-11-34-45-219.png "| prepend: site.baseurl  }}" />

<h4><a name="Colorpickerimprovements"></a>Color picker improvements</h4>
This release includes new vibrant chart colors. It also includes the ability to add your own HEX values.

<img src="{{ "/images/notes/image-2017-10-11-14-51-27-471.png "| prepend: site.baseurl  }}" />

<h4><a name="tspublicsession%2Floginandsession%2FlogoutAPIs"></a>tspublic session/login and session/logout APIs</h4>
This release includes two new public APIs. You can use these APIs to log users in and out of a ThoughtSpot session. See the documentation for <a class="external-link" href="https://goo.gl/ggXFCb" rel="nofollow">details about the calls</a>.

<h4><a name="Reducesearchsuggestiontokens"></a>Reduce search suggestion tokens</h4>
This release improves the search experience by reducing the number of tokens in search results. Users found the number of suggestions confusing. Instead, the search greatly reduces the number of suggestions.

<h4><a name="Queryprocessingimprovements"></a>Query processing improvements</h4>
This release includes improvements to the underlying processing of complex schema, object, and formula variations. Users should see improved ability to work with:

- Schema various such as chasm, fan, nested chasm, and chain of chasm traps,
- Object variations such as aggregated worksheet, join of aggregated worksheet and base tables.
- Formula variation such as aggregate and non-aggregate functions, windowing functions, and pinned measures.

These changes include optimization for generating queries that involve row level security(RLS).

<h4><a name="Filterbycreator"></a>Filter by creator</h4>
Users have the ability to filter pinboards and answers by creator.

<img src="{{ "/images/notes/image-2017-10-12-11-57-00-108.png "| prepend: site.baseurl  }}" />

<h4><a name="Improvementinpinboardlayoutofsmalltable"></a>Improvement in pinboard layout of small table</h4>
Tables with fewer rows appeared distorted with whitespace when pinned in a pinboard. This release includes improvements for display of tables in pinboards. See the documentation for more information about <a class="external-link" href="https://goo.gl/XiqaXu" rel="nofollow">editing a pinboard</a>.

<h4><a name="Formulaperformanceimprovements"></a>Formula performance improvements</h4>
This release includes improvements in backend indexing formats that result in formula performance improvements.

<h4><a name="Abilitytodefineajoinbetweenaworksheetandatable"></a>Ability to define a join between a worksheet and a table</h4>
Users can join a worksheet to one or more tables. The direction of the join can be from the worksheet to the table or the reverse. When you join a worksheet to a table, you bring any tables connected to the joined table into a search.

This feature has limitations. It is not possible to join multiple tables in the worksheet and a single table in a single relationship. Nor is it possible to join between a formula column in a worksheet and another table.

<h4><a name="Gettingaclusterconfiguration"></a>Getting a cluster configuration</h4>
When using `tscli cluster get-config` to get cluster information, the system can run into situations where it cannot make a connection across the network. When this happens, the command returns an error but continues to work.

<h4><a name="ODBCextract%2Ftransform%2Floadimprovements"></a>ODBC extract/transform/load improvements</h4>
By default, ThoughtSpot takes a permissive approach to datatype compatibility<br /> between source and target in ODBC. As much as possible ThoughtSpot automatically<br /> converts incoming "compatible" input data to the desired ThoughtSpot target<br /> datatype. Flags were added that allow you to tune this behavior and make it stricter. At installation time, your customer support engineer can assist you in<br /> configuring a stricter load behavior.

<h4><a name="Userswithdataaccesscandrilldown"></a>Users with data access can drill down</h4>
If you own the pinboard you can drill down to the data beneath. New in this release, users you share the pinboard with can also drill down provide they <em>also</em><br /> have access to the data on which the board was based.

<h4><a name="Descriptionincludedwhenaddingcolumnstoworksheets"></a>Description included when adding columns to worksheets</h4>
When adding a column from an existing data table or worksheet, the <strong>Description</strong> of the column is also copied into the new worksheet.

<h4><a name="Abilitytochangeapinboardheadline"></a>Ability to change a pinboard headline</h4>
Users can edit the pinboard headline. To edit a headline, activate the headline edit button at the corner of a headline and click it.

<img src="{{ "/images/notes/image-2017-10-12-14-24-08-298.png "| prepend: site.baseurl }}" />

<h4><a name="APItotransferownershipofobjects"></a>API to transfer ownership of objects</h4>
The new `POST /tspublic/v1/user/transfer/ownership` API was added. It allows the transfer ownership of all objects from one user to another. You must transfer all of a user's objects. This mehtod takes two query parameters of type String.

- <strong>`fromUserName`</strong> Name of a user from whom the ownership needs to be transferred.
- <strong>`toUserName`</strong> Name of a user to whom the ownership needs to be transferred.

It returns a `200` status if ownership of all objects are successfully transferred. It returns a status of `400` if either the `fromName` and `toName` is invalid or for given username there is no user present.
