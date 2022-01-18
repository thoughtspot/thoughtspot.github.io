---
title: ["Search Answers"]
last_updated: 1/18/2022
summary: "You search existing answers and Liveboards to get correct information."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

## Why search answers?

With Search Answers, you can search existing content in answers and Liveboards to get the information you need. This complements Search Data, where users create new answers and Liveboards.

Search Answers supports new users who are not yet familiar with the data in their organization. Search Data is intuitive, but you must have some knowledge of the data, a basic working vocabulary for the data domain. When you first begin to work with your company's data, it may be challenging to ask meaningful questions, since you may not know the names of the principal metrics, dimensions, and groupings.

Search Answers eliminates redundant construction of new answers and Liveboards by finding what is already in the system, the result of your co-workers' earlier queries. We now have a solution for leveraging these existing artifacts while eliminating lost productivity of duplicate work. And we also help you succeed the very first time you use ThoughtSpot.

## How to search answers

To search answers and Liveboards, select **Search answers and Liveboards** from the navigation bar.

![]({{ site.baseurl }}/images/search-answers-bar.png "Search across existing Answers")

As you enter terms in the search bar, ThoughtSpot suggests relevant answers and Liveboards. Select one of the suggested answers, or press enter to navigate to the Search Answers page.

### Navigate the Search Answers page

![]({{ site.baseurl }}/images/search-answers-page.png "Search across existing Answers")

2. You can select a specific worksheet from the **Sources** dropdown to the left of the search bar. By default, you search across all worksheets for which you have access.


3. You can search across all existing answers and Liveboards (default), only answers, or only Liveboards.

4. Select the Tags that organize the answers and Liveboards, or search across all Tags.

5. Specify if you want to search across answers and Liveboards created by all users (default), or just certain users (including yourself).

6. Type your query into the search bar. ThoughtSpot offers search suggestions, based on your past searches and popular searches in your environment, in addition to object suggestions. For example, if you type `Sal` in the search bar, it might result in search suggestions like **Sales** and **Sales this year**, in addition to object suggestions like an existing Liveboard called **Sales in the east last year**. ThoughtSpot also offers search suggestions before you begin typing, but not object suggestions.

   Select **Go** or click Enter on your keyboard.

7. The list of results of your selection appear. Note that ThoughtSpot automatically selects the first result and opens the **Details** panel. This allows you to quickly glance at the metrics, groups, and filters for the answer or Liveboard that ThoughtSpot determines is most useful for you.

8. You can sort these results by the following parameters:
    - Relevance (default)
    - Number of views
    - Created date: latest first
    - Created date: earliest first
    - Modified date: latest first
    - Modified date: earliest first    

## Working with results from Search over Answers

Let us consider the `sales in the last year` example. This search returns matches based on existing answers (charts, headlines, and tables) and Liveboards:

![]({{ site.baseurl }}/images/search-answers-result.png "Result of a search across existing answers and Liveboards")

1. When you select an existing answer artifact from the list by clicking it, you can see what it is. ThoughtSpot automatically selects the first result in the search, and opens the **Details** panel. If it is a chart, the results list reports the type of chart (Column, Bar, Line, and so on). The results list also includes all relevant Headlines and Tables.

   Additionally, the interface exposes these details:

   - source worksheet
   - name of the artifact
   - name of the Liveboard
   - relative creation date
   - relative modification date (when applicable)
   - number of views
   - creator/author
   - **Metrics** fields
   - **Grouped by** fields
   - **Filtered by** fields

2. Notice that the right side of the interface also reports key data for the selected artifact: title, the Liveboard where it is found,  **Metrics**, **Filtered by**, and **Grouped by**. For Liveboard results, the **Details** panel lists **Frequent Metrics** and **Frequent Groupings** for that Liveboard. You can determine if a Liveboard search result is useful for you based on the metrics and attributes used most often in that Liveboard. You can expand a section by clicking **Show all section details** to see all metrics, filters, or groupings for the object.

3. To see how the answer appears as a chart, a table, or headline, click **Preview**, and notice the detail in the graph.

   ![]({{ site.baseurl }}/images/search-answerss-results-preview.png "Preview matching Answer")

4. The interface displays 10 matching answers. Click **Next** to see the next set of results.   

5. When you explore a Liveboard search result, notice that it contains representative icons for the visualizations inside the Liveboard.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard.png "Result of Search is a Liveboard")

   When you click **Preview**, you can scroll through some of the visualizations inside the Liveboard. On the last screen of the preview, ThoughtSpot prompts you to view the full Liveboard to see all the visualizations.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard-preview.png "Result of Search is a Liveboard")

## Indexing for Search Answers
You can search for any answer or Liveboard that ThoughtSpot has indexed. ThoughtSpot indexes changes in ThoughtSpot in less than 10 minutes (less than 5 in most cases). If you do not see a new object when you search for it, or you *do* see an object that you deleted, or you modify the access permissions for an Answer or Liveboard, ThoughtSpot will reflect this change within 10 minutes.
