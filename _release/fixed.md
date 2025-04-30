---
title: ["Fixed issues"]
toc: false
keywords: "fixed issues"
last_updated: 04/08/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

These are the issues we fixed in ThoughtSpot Release 4.4. For a complete list of new and enhanced features in this release, see [Release notes]({{ site.baseurl }}/release/notes.html).

- Aggregation over group_max returned a red bar error. This was resolved, users can now aggregate over a `group_max` function.

- A problem with editing formulas was resolved where users were repeatedly and unnecessarily presented with disambiguation options.

- An issue was resolved where a bar on the chart label did not match the underlying data. The data was correct, the label was not.

- An issue was corrected where, if one snapshot deletion failed in any fashion, any subsequent attempts to delete a snapshot failed.

- Users were unable to edit a KPI formula if the KPI formula was pinned to a pinboard.

- Users were able to <strong>Select All</strong> for 1000+ items in a pinboard filter. This action was available but not supported and caused users to believe pinboard filters were not working. Now, the option to <strong>Select All</strong> no longer functions when there are 1000+ items in a filter.

- Users were unable to restore a database backup without first renaming the backup. Renaming is no longer required.

- Creating a formula on `cumulative_sum` function mistakenly caused an error to appear. This action no longer causes an error.

- Some installations saw worksheet performance degrade for worksheets with a large number of columns. Users can now set a configuration option to avoid these problems.

- Previously setting both the browser and the ThoughSpot profile value failed to display numbers and date formats in the proper locale. This problem was corrected. Setting the ThoughtSpot profile to the proper locale results in the appropriate display of date and number formats. It also causes translated strings to appear in the interface where they exist.

- Active directory (AD) synchronization was not working. Moreover, if AD security group had no members in it, then the synchronization did not recognize the group at all. These problems were corrected, empty groups are recognized and users moved between groups now are properly synchronized by ThoughtSpot.

- A problem was resolved where the round function returned a negative zero when it should have returned a 0 (zero).

- Visualizations that relied on chasm trap worksheet were not immediately updated when a formula was changed. The workaround was to manually update the visualization. This was corrected. The system now updates the visualization automatically when an underlying formula is changed.

- On a worksheet with a chasm trap, join between a fact and dimension did not work properly when grouping by a measure on the dimension table. This was fixed.

- Using `safe_divide` and `sum` did not work with formula on formula. This problem was fixed.

- Data connected schedules did not adjust for daylight savings time. Now, the schedules adjust as expected.

- The ThoughtSpot tomcat instance went into crash loop when a generic relationship includes `IS NULL` operator. Now, this relationship no longer causes this problem.

- An ODBC connection between Alteryx and ThoughtSpot was failing. This problem was solved by updating the ODBC drivers to the latest versions.

- An issue was fixed where an unnecessary right-outer join was being applied to row-level security RLS-introduced joins. This situation led to impacts on query performance.

- A problem was resolved with multiple sequential joins. Previously, the proper join path was not used when the fields are pulled from tables that were far apart unless fields from the intermediate tables were also used. Now, ThoughtSpot is able to handle multiple sequential joins.

- Resolved an issue with a chasm trap that used `unique count` on shared dimension. The chasm trap was generating an incorrect query. Now, `unique count` is applied correctly in the final query.

- Previously, a user user that created some row-level security (RLS) rules was associated with the rules such that deleting the user also deleted the rules. This is no longer the case. If a user creates a set of RLS rules and that user is subsequently deleted, the rules persist in the system.

- An issue was resolved where filters could only be edited in the search bar.

- Intermittent, ambiguous red bar errors related to chasm trap situations were resolved.

- The help for row-level security rules was complicated and hard to parse. This text was improved and moved into the Query Visualizer.
