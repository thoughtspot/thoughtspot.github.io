---
title: ["Search Answers"]
last_updated: 11/16/2020
summary: "You search existing Answers and Pinboards to get correct information."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Why search Answers?

{% include content/search-answers-description.md %}

Consider the knowledge and skills that a user must have before issuing a traditional search query:

1. She must understand the data: to which worksheet the data belongs, what are the data column names and the data they contain, the categorical divisions in the data, and so on.
2. She must understand analytical aspects: to determine how to apply filters effectively.
3. She must have experience with business intelligence tools, to understand the best reporting options.

These skills are outside the experience of most business users, so  they often require the support of their analyst colleagues. This means that analysts receive an extremely large number of diverse requests for help with data, and users have to wait a long time to get a response.

For every user to be independent, they must be able to get Answers to their questions quickly. ThoughtSpot enables this autonomy by introducing search over existing Answers, leveraging existing company-wide knowledge of the data and analytical experience. Because many business users have similar data questions, Search over Answers helps them discover what they need within existing Answers and Pinboards. In the unlikely scenario that an appropriate Answer does not exist, the user or the analyst can create relevant new content, and close that knowledge gap.

This is why searching over existing Answers provides the necessary information to the user, and does not require that she be deeply familiar with the company's data and how it is organized.

## How to search Answers

![]({{ site.baseurl }}/images/search-answers.png "Search across existing Answers")

1. To search Answers and Pinboards, toggle the **Search type** icon to **Search Answers** at the top right, next to the search bar: ![]({{ site.baseurl }}/images/search-toggle-answers.png){: .inline}.

2. You can select a specific Worksheet from the **Sources** dropdown to the left of the search bar. By default, you search across all Worksheets for which you have access.

3. You can search across all existing Answers and Pinboards (defualt), only Answers, or only Pinboards.

4. Select the Tags that organize the Answers and Pinboards, or search accross all Tags.

5. Specify if you want to search across Answers and Pinboards created by all users (default), or just certain users (including yourself).

6. Type your query into the search bar. Notice that the suggestions that appear show the name the existing Answer or Pinboard, and its author.

   Select **Go** or click Enter on your keyboard.

7. The list of results of your selection appear. You can sort these results by the following parameters:
    - Relevance (default)
    - Number of views
    - Created date: latest first
    - Created date: earliest first
    - Modified date: latest first
    - Modified date: earliest first    

## Example of Search over Answers

Search `sales in the last year` returns the matches based on existing Answers (charts, headlines, and tables):

![]({{ site.baseurl }}/images/search-answers-result.png "Result of a search across existing Answers")

1. When you select an existing Answer artifact from the list by clicking it, you can see what it is. If a chart, the result list report the type of chart (Column, Bar, Line, and so on). The results list also includes all relevant Headlines and Tables.

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

2. Notice that the right side of the interface also reports key data for the selected artifact: title, the Pinboard where it is found,  **Metrics**, **Filter by**, and **Group by**.

3. To see how the Answer appears as a chart (or table, or ), click **Preview**, and notice the detail in the graph.

   ![]({{ site.baseurl }}/images/search-answerss-results-preview.png "Preview matching Answer")

4. The interface displays 10 matching Answers. Click **Next** to see the next set of results.   

5. When you explore a Pinboard search result, notice that it contains representative icons for the Pinboard visualizations.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard.png "Result of Search is a Pinboard")

   When you click **Preview**, you can scroll through all the visuals inside the Pinboard.

   ![]({{ site.baseurl }}/images/search-answers-results-pinboard-preview.png "Result of Search is a Pinboard")
