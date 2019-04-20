---
title: ["Optimize and set up SearchIQ"]
keywords: SearchIQ,answer,introduction,"search bar","natural language",speech,voice
last_updated: tbd
summary: "For SearchIQ to work well, you should first optimize it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

SearchIQ is a different search experience that understands more natural, speech-like search language than [the original ThoughtSpot search]({{ site.baseurl }}/end-user/search/about-starting-a-new-search.html). For example, you can search for `What was my top selling product last month?`, instead of having to type `top 1 product by sales last month`. You can also speak your search using the voice-to-text capability of your operating system.

## How do I optimize SearchIQ?

{% include note.html content="SearchIQ is turned off by default, but your administrator can enable it for you. You'll also need to be a member of a group that has the **Can use experimental features** permission." %}

There are three main ways to optimize and set up SearchIQ to understand natural language searches:

1. [Set Entity Categories]({{ site.baseurl }}/admin/data-modeling/set-entity-category.html) for the 10-20 most frequently used columns.

2. [Add Synonyms]({{ site.baseurl }}/admin/data-modeling/change-visibility-synonym.md) for those same columns.

3. Do at least 20 natural language searches, and [teach SearchIQ]({{ site.baseurl }}/end-user/search/teach-searchiq.html) if any of the answers are not what you expect.


## Related information

-   [Use SearchIQ]({{ site.baseurl }}/end-user/search/use-searchiq.html)
-   [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html)
