---
title: ["SpotIQ 101: Review insights"]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
---
At this point, you have done [the first set of SpotIQ tutorial tasks](), you've uploaded some
data and run your first SpotIQ analysis. You should be able to look at the
**INSIGHT** list and see when your analysis ran. This is important knowledge
because data changes, you'll want to run multiple analyses on the same data.

In this section, you look at the results and see what insights SpotIQ discovered.


## View results of an analysis

1. If you haven't already, log into the ThoughtSpot application.
2. Select the **INSIGHTS > Results** page.
3. Look for results from your **Warehouse_and_Retail_Sales** analysis and click on the **NAME**.
   The application opens the SpotIQ insights.

   ![]({{ site.baseurl }}/images/spotiq-in-sights.png)

   The first panel provides information about the analysis.

4. Click on the small **i** to see a summary of the SpotIQ analysis.

   ![]({{ site.baseurl }}/images/spotiq-details.png)

   You can tell that SpotIQ ran through 20 combinations and discovered 14
   insights. The first looked for an insight in a combination of the `retail
   transfers` and `item type` columns in the **Warehouse_and_Retail_Sales** data
   and discovered nothing. The next to columns `retail transfers` and `supplier`
   did yield some insights.

5. Close the details panel and look at the corresponding insight SpotIQ produced.

   You can see that SpotIQ found the seven highest suppliers out of 317.

## Modify an insight

You can also modify the charts you see in your results.

1. Scroll down the page and locate the **Total MONTH by ITEM TYPE** pie chart.

   The pie chart is a bit difficult to read because of some small slices.

2. Click on the chart menu to display the options.

    ![]({{ site.baseurl }}/images/spotiq-details.png)

    You can see that there are several things you can do to this chart, you can
    download the chart, edit it, or even run another SpotIQ analysis on it.
    You'll learn more about this later.

3. Choose **Edit**.

   The system displays a dialog with a layout familiar to any user that has run
   a ThoughtSpot search or worked with a result. This is dialog reveals the
   **Search** syntax used to generate the insight. You can use this dialog to do
   all the things you would normally do with a search.

4. Select the chart icon and choose **Area** to change the chart display.

   The chart display becomes an area.

5. Change the chart to `sort by item type` either using the drop down in the
table X axis or by typing the filter directly in the search bar.

    The chart display becomes sorted.

    ![]({{ site.baseurl }}/images/spotiq-chartalter.png)

    You can actually use this dialog to modify the search that produced the
    insight just as you would any other search. You can also save the results as
    an entirely new worksheet.

6. Choose **Actions > Update**.
7. Dismiss the dialog by pressing the **X**.

    The chart with your changes now appears in the **INSIGHTS** list.

## Presenting the INSIGHTS

You can present SpotIQ insights in several ways. You can present an individual
result or all of them at once. You can package all the insights in a PDF. This
is useful for passing a packet of results.

1. Locate the **Actions** menu on the corner of the **INSIGHTS** page.
2. Choose **Actions > Download as PDF** from the menu.

   The system downloads a file containing all the insights. Keep in mind this is
   file can be very large if there are a lot of insights found in your data.

Groups of charts that appear in a carousel can be presented as a group. To do
this, do the following:

1. Scroll down to the first carousel in the list.
2. Roll over the right corner of the menu to reveal the menu.

   ![]({{ site.baseurl }}/images/spotiq-carousel.png)

3. Choose **Present**  or **Copy link** item from the menu.


 Each individual chart has a **Download**, **Present**, or **Copy link** action
 you can also take.

## Where to go next

In this section, you explored some of the functionality of the **INSIGHTS**
page. You learned how you can edit an insight to customize how it looks or even
the **Search** syntax behind it.  In [the next
section](/pages/spotiq/special-topics.html), you'll learn how to schedule SpotIQ
to deliver insights on a regular basis.
