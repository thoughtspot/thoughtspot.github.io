---
title: [Calculate the moving average]
tags:
keywords: tbd
last_updated: tbd
summary: "You can use the moving formulas to compute a measure within a moving window of your data, usually defined by time."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This example  demonstrates using the `moving_average` formula. To use the moving function in a search:

1. Start a new search.

   ![]({{ site.baseurl }}/images/aggregation_answer.png "Aggregation Answer example")

2. In the upper right hand side of the table, click **Actions** and select **Add formula**.

   ![]({{ site.baseurl }}/images/create-formula_in_answer.png "Create a new formula in an answer")

3. Enter the moving_average formula, providing a measure, a window, and one or more attributes.

    The example will return the average of revenue, within the commit date window size of 3. The window includes the previous, current, and next rows. The attributes are the ordering columns used to compute the moving average. The window is (current - Num1...Current + Num2) with both end points being included in the window. For example, "1,1" will have a window size of 3. To see periods in the past, use a negative number for the second endpoint, as in the example "moving_average(sales, 1, -1, date)".

    ![]({{ site.baseurl }}/images/moving_average_formula.png "Moving Average Formula")

4. Name the formula by clicking on its title and typing the new name. Click **Save**.

   The formula will appear in the search bar and in the table as its own column.

   ![]({{ site.baseurl }}/images/moving_average_table.png "Moving Average Table")

   A box displaying the moving average within the entire table will appear at the bottom.

5. Click on the box to toggle between aggregation types.
