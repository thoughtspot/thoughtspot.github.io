---
title: [Calculate the cumulative sum]
keywords: tbd
last_updated: tbd
summary: "Use the cumulative function in a search to measure from the start of your data to the current point."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This example demonstrates using the cumulative_sum formula, also known as a running total. To use the cumulative function in a search:

1. Start a new search.

     ![]({{ site.baseurl }}/images/aggregation_answer.png "Aggregation Answer example")

2. In the upper right hand side of the table, click **Actions** and select **Add formula**.

     ![]({{ site.baseurl }}/images/create_formula_in_answer.png "Create a new formula in an answer")

3. Enter the cumulative_sum formula, providing a measure and one or more attributes. The example will return the sum of revenue, accumulated by the commit date.

     ![]({{ site.baseurl }}/images/cumulative_sum_formula.png "Cumulative Sum Formula")

4. Name the formula by clicking on its title and typing the new name. Click **Save**.
5. The formula will appear in the search bar and in the table as its own column.

     ![]({{ site.baseurl }}/images/cumulative_sum_table.png "Cumulative Sum Table")

    A headline box displaying the cumulative sum within the entire table will appear at the bottom. You can click on it to toggle between different aggregations.
