---
title: [DataFlow]
last_updated: 06/26/2020
toc: true
summary: "With DataFlow, you can move data into ThoughtSpot from most databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company maintains large sources of data externally, you can use ThoughtSpot DataFlow to easily ingest just the relevant information, and then query that data and use ThoughtSpot's analysis and visualization features. And after you configure scheduled refresh, your analysis visuals are always current.

DataFlow brings several enhancements to the ThoughtSpot product:

- New simple ETL tool with a robutst user interface

- Ability to load data into new tables with primary and sharding keys, use existing tables

- Easy scheduling of data loads

- Simple mechanism for syncing data, coupled with powerful conditional options

- Easy monitoring and alerting of data loads

- User-based security for loading data

## Administration

We recommend that you perform these tasks before sharing ThoughtSpot DataFlow access with your organization:

- [Manage DataFlow users]({{ site.baseurl }}/data-integrate/dataflow/dataflow-user-management.html)

- [Setup DataFlow mail]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mail-setup.html)

## Supported databases

DataFlow supports the movement of data from the following external databases:
-


## How it works


## Key benefits
- Set up and deploy ThoughtSpot faster by ingesting data from external databases.
- Move data into ThoughtSpot quickly and efficiently.
- Schedule regular data refresh that fits the needs of your business.
- Connect to multiple external databases.

## Limitations


## Feature availability in DataFlow

The following matrix compares the features that are available by loading data through DataFlow, compared with the loading through the command-line <code>tsload</code> process:

<table>
<tbody>
<tr>
<th>Feature Name</th>
<th>DataFlow</th>
<th>tsload</th>
</tr>
<tr>
<td>Feature 1</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Feature 2</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Feature 3</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Feature 4</td>
<td>&check;</td>
<td>&check;</td>
</tr>
<tr>
<td>Feature 5</td>
<td>&check;</td>
<td>&cross;</td>
</tr>
  </tbody>
</table>
