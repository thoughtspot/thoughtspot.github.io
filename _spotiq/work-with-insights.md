---
title: ["101: Do more with SpotIQ"]
tags:
keywords: "trend line","cross-correlation",outlier
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
At this point, you have done [the first set of SpotIQ tutorial tasks](overview.md), you've uploaded some
data and run your first SpotIQ analysis. You should be able to look at the
**INSIGHT** list and see when your analysis ran. This is important knowledge
because data changes, you'll want to run multiple analyzes on the same data.

In this section, you look at the results and see what insights SpotIQ
discovered. You'll learn about the basic types of analysis SpotIQ runs on data.

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

## Time and your insight data

You'll notice that when you first look at an insight there is an expiration date
in the upper right corner:

![]({{ site.baseurl }}/images/spotiq-expiration.png)

If the expiration time elapses, ThoughtSpot automatically removes the reports.

Insights also take space in the ThoughtSpot installation. A lot of people
creating insights can add up to a lot of data lying around. Just as water rising
in a bath tub can overflow or just cause a problem you have to wade through, too
much data can create a lot of old reports to sift through.

Another reason to expire an insight is time. Typically, business data is
changing every day if not more frequently. Any particular set of insights are
valid for data during a specific period of time. This doesn't mean old insights
can't provide information you can use, just that you are unlikely to get the
same insight twice.

If a set of insights look good, you can **Save** them and they are not removed
when they expire. Do this now, click **Actions > Save** from the menu:

![]({{ site.baseurl }}/images/spotiq-save.png)

Now your insights won't expire as you work with them!

## Data outliers

SpotIQ has three central insights it looks for, the first insight it looks for are
data outliers. An outlier is a value that is "far away" or that differs from the
other data.

Outliers can result from measurement or recording errors or they
could contain valuable information.  For example, one store might sell
significantly more towels in one week out of the year because there was a flood
that week.

1. Scroll to the first carousel of data that SpotIQ created for you.  
2. Count the number of items in the carousel.

    You should see that SpotIQ found two outliers.

    ![]({{ site.baseurl }}/images/spotiq-outliers.png)

    In this case, SpotIQ is indicating that the **Total Imports** value is
    significantly higher than the other values in your set.

    Two facts about this outlier shouldn't surprise, you. The first fact is that a
    total exceeds all the other items in the data.  That just makes sense so this
    isn't a true outlier.

    The second fact is that SpotIQ insights are not always interesting. In this
    case the data included totals in the row data which caused nonsense outliers.
    You can use SpotIQ to fix this issue and go futher. More about this later in
    the tutorial.

## Looking for relationships (cross-correlation analysis)

Cross-correlation looks for and measures relationships between two quantitive,
continous information sets -- in our case two fields (columns) in our dataset.
Usually, you'll see a cross-correlation in your insights if your data includes
time or date data.

The result of a correlation analysis shows how strong and in what direction a
relationship between two data sets moves. The range is -1 to 1, the closer the
cross-correlation value is to 1, the more closely the information fields (data
elements) are correlated.

1. Scroll down your insight page, till you find the correlation results:
2. Page through the correlation category to the third insight:

   ![]({{ site.baseurl }}/images/spotiq-correlations.png)

    You can see that the over all total and the total category number values
    correlate very strongly. The correlation also looks for a _lag_ value.

      _In the business world the dependence of a variable Y (the dependent variable)
      on another variable X (the explanatory variable) is rarely instantaneous.
      Often, Y responds to X after a certain lapse of time. Such a lapse of time is
      called a lag._ [Good Data Help](https://goo.gl/XW2Tk1).


## Trends over time

A trend line is a straight or curved line that indicates the general pattern or
direction of a time series data (information in sequence over time). This can
help you to determine the general direction of a trend in  your data, such as
sales are climbing or customers are declining.

1. Scroll down to the **Insights from Trend Analysis** section.
2. Look for the **Total imports by year** result.

   ![]({{ site.baseurl }}/images/spotiq-trend.png)


## Where to go next

In this section, you explored some of the functionality of the **SpotIQ**
page.  In [the next section]({{ site.baseurl }}/spotiq/special-topics.html), you'll learn how to schedule SpotIQ to deliver insights on a regular basis.
