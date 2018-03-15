---
title: [Search using growth over time]
tags: [keywords,time]
keywords: tbd
last_updated: tbd
summary: "You can show growth over time by using the growth of keyword in your search. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The `growth of` keyword compares the data from different date periods, and
returns a percentage of growth.

## Growth over time search

To search using growth over time:

1. Type growth of into the search bar, and choose a measure you're interested in seeing the growth of.

     ![]({{ site.baseurl }}/images/growth_of_suggestions.png "Growth of suggestions")

    You will see a list of suggestions to choose from based on your sources. You
    can also type a different column name containing numeric data to compare.

2. Type `by`, followed by a date column name.

    The growth is calculated as a positive or negative percentage, for each
    period relative to the last period in the series. A line chart is a good
    way to display your data, but the waterfall chart is especially effective
    to show growth.

   ![]({{ site.baseurl }}/images/growth_of_waterfall_chart.png "Growth of  total sales waterfall chart")


4. You can also do year-over-year analysis, which compares each time period to the corresponding time period in the prior year.

    This type of growth analysis is more common in retail and other seasonal
    businesses. To do this, type monthly year-over-year after your growth of phrase
    in the search bar.

    ![]({{ site.baseurl }}/images/growth_of_year_over_year.png "Growth of by monthly year-over-year")

    This compares data between the same month from different years. For example,
    it will allow you to compare sales from June of this year to the sales from
    June of last year. Note that for the first year, values are labeled as
    "\{Blank\}" in the Data View since there are no previous data to compare
    them to.

    Add an attribute to your search see the breakdown of how each grouping of
    the attribute contributed to the overall growth of your measure.

5. Click **Configure Chart** and add your attribute to the Legend field.

   ![]({{ site.baseurl }}/images/growth_of_attribute_breakdown.png "Growth of broken up by category")

    It looks like Q4, FY 15 was a much more productive period for a number of
    categories compared to a year ago.

## Date buckets and period calculations

Growth query now supports more hierarchical date buckets and period
calculations. The growth query syntax is as follows:


`growth of <measure_column> by <date_column> <bucket> <period-over-period>`

where the <bucket> and <period-over-period> can be from the following table:

| |year-over-year||quarter-over-quarter||month-over-month||week-over-week||day-over-day||
|yearly| | | | | |
|quarterly|YES| | | | |
|monthly|YES|YES| | | |
|weekly|YES|YES|YES| | |
|daily|YES|YES|YES|YES| |
|hourly| | | | |YES|
