---
title: ["Search data"]
last_updated: 4/6/2021
summary: "You use search to answer questions about your data without having to consult a data analyst."
sidebar: mydoc_sidebar
redirect_from:
- /end-user/search/about-starting-a-new-search.html
permalink: /:collection/:path.html
---
## How do I search data?

To search data, make sure that the search bar icon is set to **Search data**. ThoughtSpot remembers your choice across sessions when you switch between <strong>Search Answers</strong> and <strong>Search Data</strong>.

![]({{ site.baseurl }}/images/search-data.png "Search bar for Search data")

You’ve probably seen one of these before:

 ![]({{ site.baseurl }}/images/search_bar_blank.png "Search bar")

Click in the box and start typing some letters. As soon as you begin typing, ThoughtSpot suggests some search terms. Type slowly, and use the suggestions to find what you're looking for.

ThoughtSpot Cloud's default search experience is search on enter. This means that you can add new tokens to the search bar, or remove them, without altering your existing search, until you press **Enter** on your keyboard, or select **Go** to the right of the search bar. This means that you may need to press **Enter** or **Go** to ensure that ThoughtSpot updates your search with any new items in the search bar.

When you phrase a question in ThoughtSpot Search, use key words instead of full conversational style.

For example, avoid: `Find all books by Lewis Carroll with the title Alice in Wonderland`. Instead, type: `carroll alice`.

In another example, avoid `Find the largest city by population`. Inastead, type: `largest city by population`.

Do use helper words, like “by” and “for”, but they can also be left out, and the search will return the same answer.

## What kinds of things can I type?

Search is based on the tables that exist in your data. Tables are made of rows and columns, like spreadsheets. So you can search by typing in any of these words:

-   The column name: like revenue, product name, or store
-   Any of the values in the columns: like 20000, kitten chow, or richmond
-   One of the special [keywords]({{ site.baseurl }}/reference/keywords.html#) ThoughtSpot understands: like <code>yesterday</code>, <code>&gt;</code>, or <code>contains</code>.

## Save an answer

An answer is the result of a single search. You can save an answer you want to work more on later, or just keep it for your personal use. You can also share an answer with other users.  The **Answers** tab is where you can view and then the your saved search results.

## Related information

-   [Choose a data source]({{ site.baseurl }}/end-user/search/about-choosing-sources.html)  
-   [Search bar features]({{ site.baseurl }}/end-user/search/about-the-search-bar.html)  
-   [Search suggestions]({{ site.baseurl }}/end-user/search/recent-searches.html)  
-   [Search results and column types]({{ site.baseurl }}/end-user/search/about-attributes-and-measures.html)  
-   [Share an answer]({{ site.baseurl }}/end-user/pinboards/share-answers.html)
