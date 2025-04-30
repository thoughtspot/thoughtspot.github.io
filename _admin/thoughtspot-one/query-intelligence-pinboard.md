---
title: [How users are searching answers pinboard]
summary: "The How Users are Searching Answers Pinboard describes how users are searching for existing Answers and Pinboards. It specifies what users are searching for, where users are successful, and where they are not."
last_updated: 9/21/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

As an analyst, you need data to analyze to help you empower your users. For example, it is useful to know how your users are searching your existing Answers and Pinboards, so you can determine what objects are the most popular and what assets you may need to create. The **How Users are Searching Answers** Pinboard, a default ThoughtSpot Pinboard that is visible to admins, provides this information. Review the [best practices](#best-practices) for this Pinboard.

If you do not have admin privileges and would like to access this Pinboard, ask your ThoughtSpot administrator to share the Pinboard and its underlying Worksheet, **Discover Monitoring Data**, with you. Administrators, review the [sharing best practices](#sharing-best-practices) for this Pinboard.

To access the **How Users are Searching Answers** Pinboard, search for "How users are searching" while searching among your existing Answers and Pinboards, or search on the **Pinboards** page.

The **How Users are Searching Answers** Pinboard contains the following visualizations:
- [Number of searches](#number-of-searches)
- [% of queries with zero results](#no-result-queries)
- [Last updated time in hours ago](#last-updated)
- [Top Search Queries on existing answers](#top-search-existing)
- [Top Search Queries with zero results](#top-search-existing-no-result)
- [Top Search Queries where the user did not click on any result](#top-search-not-useful)
- [What results users are clicking on](#which-result)
- [Position at which users are clicking](#click-position)
- [Worst click position by any user against search queries](#worst-click-position)
- [Top results users are clicking on](#top-results)
- [Weekly % of search queries on answers for which no answers exist](#weekly-queries-no-answer)
- [Weekly Searches on answers](#weekly-searches)
- [What results users are finding useful with autocomplete suggestions](#autocomplete)

{% include note.html content="Some or all of the visualizations on this Pinboard may be empty, if you do not have Search on Answers on in your environment, or if it is newly on, and few users have searched on it. You must also enable Mixpanel. To see the statistics on how your organization uses Search Answers, contact ThoughtSpot Support." %}

![How Users are Searching Answers Pinboard]({{ site.baseurl }}/images/query-intelligence-pinboard.png "How Users are Searching Answers Pinboard")

{: id="number-of-searches"}
## Number of searches
This headline specifies the number of searches users have done on existing Answers and Pinboards in the last 7 days.

{: id="no-result-queries"}
## % of queries with zero results
This headline specifies the percentage of searches on existing Answers and Pinboards that had no results. The lower the percentage of searches with no results, the better the user experience. If you have a high percentage of queries without results, consider building more Answers and Pinboards, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="last-updated"}
## Last updated time in hours ago
This headline shows the number of hours it has been since this Pinboard was automatically updated with new data.

{: id="top-search-existing"}
## Top search queries on existing answers
This visualization lists users' most searched Answers and success rates for the last 30 days.

{: id="top-search-existing-no-result"}
## Top search queries with zero results
This visualization lists users' most common search queries for Answers with no results. These are the most common Answers and Pinboards users search for but do not find. Consider building Answers and Pinboards that answer these questions, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="top-search-not-useful"}
## Top search queries on existing answers where the user did not click on any result
This visualization lists users’ top search queries that did not result in a useful Answer or Pinboard. The users' queries returned results, but the user did not click on any of the answers. Consider building Answers and Pinboards that better answer these questions, or empower these users to build their own Answers and Pinboards by searching your data.

{: id="which-result"}
## What results users are clicking on
This chart describes what search results users are clicking on against each query. The chart contains the top 10 queries from the last 30 days.

{: id="click-position"}
## Position at which users are clicking
Describes where in the list of search results users are clicking, indicating how easily users find answers. The lower the click position, the better. A lower click position means users are able to find answers easily and high up on the list of search results. "0" means users are finding useful results in autocomplete suggestions, i.e. before they could even search.

{: id="worst-click-position"}
## Worst click position by any user against search queries
Indicates when users have to browse many Answers before finding the right one. This data is from the last 30 days. Consider building Answers and Pinboards for these queries.

{: id="top-results"}
## Top results users are clicking on
This visualization lists the top search results that users found useful in the last 30 days. You can filter this visualization to see results for a specific query.

{: id="weekly-queries-no-answer"}
## Weekly % of search queries on answers for which no answers exist
This visualization shows the percentage of searches on existing Answers and Pinboards that had no results, on a weekly basis. The lower the percentage of searches with no results, the better the user experience. If you have a high percentage of queries without results, consider building more Answers and Pinboards, or empower more users to build their own Answers and Pinboards by searching your data.

{: id="weekly-searches"}
## Weekly searches on answers
This visualization shows the number of searches on Answers and Pinboards on a weekly basis. You can narrow this down by filtering on query text to see the top results for a specific query.

{: id="autocomplete"}
## What results users are finding useful with autocomplete suggestions
Lists the autocomplete query suggestions that users are clicking on. The chart contains the top 10 queries from the last 30 days.

{: id="best-practices"}
## Best practices
You can use the Stats and Trends Pinboard to understand your company's use of ThoughtSpot in many ways. Here are a few of the most useful ways to interact with this Pinboard.

1. **Monitor Adoption**:<br>
    Keep track of the [number of searches](#number-of-searches) on existing Answers and Pinboards in the last 7 days, and on the [number of searches on Answers on a weekly basis](#weekly-searches).

2. **View what's trending in your organization**:<br>
    Users' search queries reflect what information is important to them. To understand what data users currently find valuable, view [Top Search Queries on existing answers](#top-search-existing), which has data from the last 30 days.

    You can also see which queries had no satisfactory answer for the user, based on the click position and the count of queries with either no results. Consider building Answers and Pinboards that satisfy these queries, or renaming existing objects to match what search terms users use.

3. **Determine what content you should create**:<br>
    Use this Pinboard to determine what Answers and Pinboards you should create for your users. View [Top Search Queries with zero results](#top-search-existing-no-result) and [Top Search Queries where the user did not click on any result](#top-search-not-useful). If a query has zero results, you have no content for this query. Consider building Answers and Pinboards that satisfy it. If a user does not click on any results, you may have content for this query, but it may not be discoverable. Consider renaming existing objects to match what search terms users use.

4. **Monitor how users are finding content you created**:<br>
    As a content creator, you may want to see which search queries result in users clicking on Answers and Pinboards you created. In [Top Search Queries on existing answers](#top-search-existing), click **Explore**. Filter by **Result title**, specifying your content's title(s). This filter provides a list of the top search queries that resulted in users clicking on your content, in the last 30 days. Use this information to determine how to slightly alter your descriptions or titles to make your content more discoverable.

5. **Analyze which search results are useful for a specific query**:<br>
    The [Top results users are clicking on](#top-results) visualization lists the top 10 search results users clicked on in the last 30 days. You may want to find this information for a specific query. In [Top results users are clicking on](#top-results), click **Explore**. Filter by **query text**, specifying the query text you want to analyze.

{: id="sharing-best-practices"}
### Sharing best practices
You can easily share this Pinboard with non-admins. Refer to [Share Pinboards]({{ site.baseurl }}/end-user/pinboards/share-pinboards.html). However, keep in mind that this Pinboard has sensitive data. You can see what all your users are searching. You cannot see what a specific user is searching, but generic information may still be sensitive. Exercise caution when sharing this Pinboard with non-admins.
