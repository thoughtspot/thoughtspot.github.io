---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Row level security

Row level security allows you to define which groups can see individual rows in a table, based on the values in one of its columns. Using row level security, you can effectively customize search results and pinboards for each group that views them.

## How row level security works

Row level security works at the group level, not the individual user level.

By default, all groups can see all rows for any table they can view. You can limit the rows a group can see by setting conditions on column values. The row level security rules you define on a table also apply to any worksheets and pinboards based on that table.

There are several reasons you might want to use row level security:

|Reason|Example|
|------|-------|
|Hide sensitive data from groups who should not see it.|In a report with customer details, hide potential customers \(those who have not yet completed their purchase\) from everyone except the sales group.|
|Filter tables to reduce their size, so that only the relevant data is visible.|Reduce the number of rows that appear in a very large table of baseball players, so that players who are no longer active are not shown except to historians.|
|Enable creation of a single pinboard or visualization, which can display different data depending on the group who is accessing it.|Create one sales pinboard that shows only the sales in the region of the person who views it. This effectively creates a personalized pinboard, depending on the viewer's region.|

## Rules-Based Row Level Security vs. Legacy Row Level Security

There are two types of row level security in ThoughtSpot:

-   [Rule-based row level security](new_row_level_security.html#)

    This is the newer, preferred method of setting row level security. It can handle thousands of groups, and allows you to set up flexible rules that are self-maintaining.

-   [Legacy row level security](about_legacy_row_security.html#)

    This is the legacy method, where you download a security file, which you edit in Excel to set up rules for row level security. This method is limited to 65 groups. You should not use this method, if you are setting up row level security for the first time. In fact, if you are using legacy row level security, you should consider migrating to the improved rule-based row level security for its better scale, flexibility, and ease of maintenance.


## Row level security and administrators

If a user is a member of a group that has the privilege **Has administration privileges**, that user will be able to see all the data in ThoughtSpot. Administrators can see all data sources, and no type of row level security applies to them.

