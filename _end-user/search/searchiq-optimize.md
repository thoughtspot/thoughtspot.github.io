---
title: ["Optimize and set up SearchIQ"]
keywords: SearchIQ,answer,introduction,"search bar","natural language",speech,voice
last_updated: tbd
summary: "For SearchIQ to work well, you should first optimize it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

SearchIQ is a different search experience that understands more natural, speech-like search language than [the original ThoughtSpot search]({{ site.baseurl }}/end-user/search/about-starting-a-new-search.html). For example, you can search for `What was my top selling product last month?`, instead of having to type `top 1 product by sales last month`. You can also speak your search using the voice-to-text capability of your operating system.

There are a few ways for Administrators to optimize how SearchIQ interprets natural language questions. Taking the time to do this up front leads to better results from SearchIQ and better adoption by end users.

## How do I optimize SearchIQ?

{% include note.html content="SearchIQ is turned off by default, but your administrator can enable it for you. You must also be a member of a group that has the **Can use experimental features** permission." %}

There are two main ways to optimize SearchIQ to understand natural language searches:

### Method 1: Data modeling settings

If you're not sure how to change the data modeling settings, see the
[Overview of data modeling settings]({{ site.baseurl}}/admin/data-modeling/data-modeling-settings.html). These are the settings most relevant to SearchIQ:

1. [Add common Synonyms]({{ site.baseurl }}/admin/data-modeling/change-visibility-synonym.md) for frequently used columns.

2. [Set Entity Categories]({{ site.baseurl }}/admin/data-modeling/set-entity-category.html), for columns which represent a person, place, or thing.

3. [Turn off indexing]({{ site.baseurl }}/admin/data-modeling/change-index.html) for columns that contain a lot of text by setting **INDEX TYPE** to **DONT_INDEX**. This ensures that SearchIQ won't scan through all that text when it's trying to understand what a user has asked. Note that searches of the text field using the "contains" keyword will still work.

4. [Add experts to the data source]({{ site.baseurl }}/admin/data-modeling/add-expert.html) to enable the [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html) workflow, which gives users another path to getting an answer if they get stuck.

### Method 2: Language modeling

SearchIQ comes bundled with a set of pre-defined templates which help it understand natural language and serve the best result. However, you can also define your own templates for each data source.

There are a few ways to teach new language interpretations to SearchIQ:

1. Teach SearchIQ from the Data Tab:

   From the **Data** tab, click the three dot icon and choose **Teach**. This takes you to a screen where you can map searches to things in the data.
   E.g. You can map the phrase “best movie” to match the search “top movie_title sort by imdb_score”.

2. Teach SearchIQ using a saved SearchIQ answer:

   Click on a saved answer. Next, click on one of the dropdown phrases that shows how the search terms were interpreted, and click **Teach**. Then you can [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html).

3. Use new searches to teach SearchIQ:

   As a best practice, you should do at least 20-30 new natural language searches, and [Teach SearchIQ]({{ site.baseurl }}/end-user/search/teach-searchiq.html) if any of the answers are not what you expect.


## Related information

-   [About SearchIQ]({{ site.baseurl }}/end-user/search/about-searchiq.html)
-   [Use SearchIQ]({{ site.baseurl }}/end-user/search/use-searchiq.html)
-   [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html)
