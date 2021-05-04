---
title: ["Search Answers"]
last_updated: 5/4/2021
summary: "You search existing Answers and Pinboards to get correct information."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Why search Answers?

With Search Answers, you can search existing content in Answers and Pinboards to get the information you need. This complements Search Data, where users create new Answers and Pinboards.

Search Answers supports new users who are not yet familiar with the data in their organization. Search Data is intuitive, but you must have some knowledge of the data, a basic working vocabulary for the data domain. When you first begin to work with your company's data, it may be challenging to ask meaningful questions, since you may not know the names of the principal metrics, dimensions, and groupings.

Search Answers eliminates redundant construction of new Answers and Pinboards by finding what is already in the system, the result of your co-workers' earlier queries. We now have a solution for leveraging these existing artifacts while eliminating lost productivity of duplicate work. And we also help you succeed the very first time you use ThoughtSpot.

## How to search Answers

![]({{ site.baseurl }}/images/search-answers.png "Search across existing Answers")

1. To search Answers and Pinboards, toggle the **Search type** icon to **Search Answers** at the top right, next to the search bar: ![]({{ site.baseurl }}/images/search-toggle-answers.png){: .inline}. ThoughtSpot remembers your choice across sessions when you switch between <strong>Search Answers</strong> and <strong>Search Data</strong>.

2. You can select a specific Worksheet from the **Sources** dropdown to the left of the search bar. By default, you search across all Worksheets for which you have access.

3. You can search across all existing Answers and Pinboards (default), only Answers, or only Pinboards.

4. Select the Tags that organize the Answers and Pinboards, or search across all Tags.

5. Specify if you want to search across Answers and Pinboards created by all users (default), or just certain users (including yourself).

6. Type your query into the search bar. Notice that the suggestions that appear show the name of the existing Answer or Pinboard, and its author.

   Select **Go** or click Enter on your keyboard.

7. The list of results of your selection appear. Note that ThoughtSpot automatically selects the first result and opens the **Details** panel. This allows you to quickly glance at the metrics, groups, and filters for the Answer or Pinboard that ThoughtSpot determines is most useful for you.

8. You can sort these results by the following parameters:
    - Relevance (default)
    - Number of views
    - Created date: latest first
    - Created date: earliest first
    - Modified date: latest first
    - Modified date: earliest first    

## Working with results from Search over Answers

Let us consider the `sales in the last year` example. This search returns matches based on existing Answers (charts, headlines, and tables) and Pinboards:

![]({{ site.baseurl }}/images/search-answers-result.png "Result of a search across existing Answers and Pinboards")

1. When you select an existing Answer artifact from the list by clicking it, you can see what it is. ThoughtSpot automatically selects the first result in the search, and opens the **Details** panel. If it is a chart, the results list reports the type of chart (Column, Bar, Line, and so on). The results list also includes all relevant Headlines and Tables.

   Additionally, the interface exposes these details:

   - source Worksheet
   - name of the artifact
   - name of the Pinboard
   - relative creation date
   - relative modification date (when applicable)
   - number of views
   - creator/author
   - **Metrics** fields
   - **Grouped by** fields
   - **Filtered by** fields

2. Notice that the right side of the interface also reports key data for the selected artifact: title, the Pinboard where it is found,  **Metrics**, **Filtered by**, and **Grouped by**. For Pinboard results, the **Details** panel lists **Frequent Metrics** and **Frequent Groupings** for that Pinboard. You can determine if a Pinboard search result is useful for you based on the metrics and attributes used most often in that Pinboard.

3. To see how the Answer appears as a chart, a table, or headline, click **Preview**, and notice the detail in the graph.

   ![]({{ site.baseurl }}/images/search-answerss-results-preview.png "Preview matching Answer")

4. The interface displays 10 matching Answers. Click **Next** to see the next set of results.   

5. When you explore a Pinboard search result, notice that it contains representative icons for the visualizations inside the Pinboard.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard.png "Result of Search is a Pinboard")

   When you click **Preview**, you can scroll through all the visuals inside the Pinboard.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard-preview.png "Result of Search is a Pinboard")

## Indexing for Search Answers
You can search for any Answer or Pinboard that ThoughtSpot has indexed. ThoughtSpot indexes changes in ThoughtSpot in less than 10 minutes (less than 5 in most cases). If you do not see a new object when you search for it, or you *do* see an object that you deleted, or you modify the access permissions for an Answer or Pinboard, ThoughtSpot will reflect this change within 10 minutes.
