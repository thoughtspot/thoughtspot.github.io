---
title: [Stats and Trends for Search on Answers Pinboard]
summary: "The Stats and Trends for Search on Answers Pinboard describes how users are searching for existing Answers and Pinboards. It specifies what users are searching for, where users are successful, and where they are not."
last_updated: 1/15/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

As an analyst, you need data to analyze to help you empower your users. For example, it is useful to know how your users are searching your existing Answers and Pinboards, so you can determine what objects are the most popular and what assets you may need to create. The **Stats and Trends for Search on Answers** Pinboard, a default ThoughtSpot Pinboard that is visible to admins, provides this information. If you do not have admin privileges and would like to access this Pinboard, ask your ThoughtSpot administrator to share the Pinboard and its underlying Worksheet, **Discover Monitoring Data**, with you.

To access the **Stats and Trends for Search on Answers** Pinboard, search for "Stats and trends for search on answers" while searching among your existing Answers and Pinboards, or search on the **Pinboards** page.

The **Stats and Trends for Search on Answers** Pinboard contains the following visualizations:
- [Number of searches](#number-of-searches)
- [Number of users](#number-of-users)
- [% of queries for which no result exists](#no-result-queries)
- [Top Search Queries on existing answers](#top-search-existing)
- [Top Search Queries on existing answers for which no result exists](#top-search-existing-no-result)
- [Top Search Queries on existing answers where the user did not find anything useful](#top-search-not-useful)
- [Top Users who searched for answers](#top-users)
- [Weekly Searches on answers](#weekly-searches)
- [Top Answers](#top-answers)
- [Weekly % of search queries on answers for which no answers exist](#weekly-queries-no-answer)
- [Weekly Active Users](#wau)
- [Poorly performing search queries for answers](#poor-performance)

{% include note.html content="Some or all of the visualizations on this Pinboard may be empty, if you do not have Search on Answers on in your environment, or if it is newly on, and few users have searched on it. To see the statistics on how your organization uses Search Answers, contact ThoughtSpot Support." %}

![Stats and Trends for Search on Answers Pinboard]({{ site.baseurl }}/images/query-intelligence-pinboard.png "Stats and Trends for Search on Answers Pinboard")

{: id="number-of-searches"}
## Number of searches
This headline specifies the number of searches users have done on existing Answers and Pinboards in the last 7 days.

{: id="number-of-users"}
## Number of users
This headline specifies the total number of users who searched on existing Answers and Pinboards in the last 7 days.

{: id="no-result-queries"}
## % of queries for which no result exists
This headline specifies the percentage of searches on existing Answers and Pinboards that had no results. The lower the percentage of searches with no results, the better the user experience. If you have a high percentage of queries without results, consider building more Answers and Pinboards, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="top-search-existing"}
## Top Search Queries on existing answers
This visualization lists users' top search queries while searching for Answers in the last 30 days.

{: id="top-search-existing-no-result"}
## Top Search Queries on existing answers for which no result exists
This visualization lists users' top search queries that had no results. These are the most common Answers and Pinboards users search for but do not find. Consider building Answers and Pinboards that answer these questions, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="top-search-not-useful"}
## Top Search Queries on existing answers where the user did not find anything useful
This visualization lists users' top search queries that did not result in a useful Answer or Pinboard. The users did not click on any of the results. Consider building Answers and Pinboards that better answer these questions, or empower these users to build their own Answers and Pinboards by searching your data.

{: id="top-users"}
## Top Users who searched for answers
This visualization lists the top 10 users who searched for Answers and Pinboards in the last 30 days.

{: id="weekly-searches"}
## Weekly Searches on answers
This visualization shows the number of searches on Answers and Pinboards on a weekly basis.

{: id="top-answers"}
## Top Answers
This visualization lists the top Answers and Pinboards that users who searched for Answers and Pinboards found useful in the last 30 days.

{: id="weekly-queries-no-answer"}
## Weekly % of search queries on answers for which no answers exist
This visualization shows the percentage of searches on existing Answers and Pinboards that had no results, on a weekly basis. The lower the percentage of searches with no results, the better the user experience. If you have a high percentage of queries without results, consider building more Answers and Pinboards, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="wau"}
## Weekly Active Users
This visualization shows the total number of users who are searching for Answers and Pinboards, on a weekly basis.

{: id="poor-performance"}
## Poorly performing search queries for answers
This visualization lists queries in the last 30 days for which users browsed multiple Answers and Pinboards, before finding the right Answer or Pinboard.
