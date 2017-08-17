---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About date formulas

Date formulas allow you to apply date related functions to your formulas.

Date formulas are useful when you want to compare data collected between two date periods.

The date functions include:

|Function|Description|Examples|
|--------|-----------|--------|
|add\_days|Returns the result of adding the specified number of days to the given date.| -   `add_days (01/30/2015, 5) = 02/04/2015`
-   `add_days (invoiced, 30)`

 |
|date|Returns the date portion of a given date.| -   `date (home visit)`

 |
|day|Returns the number (1-31) of the day for the given date.| -   `day (01/15/2014) = 15`
-   `day (date ordered)`

 |
|day\_number\_of\_week|Returns the number (1-7) of the day in a week for the given date with 1 being Monday and 7 being Sunday.| -   `day_number_of_week (01/30/2015) = 6`
-   `day_number_of_week (shipped)`

 |
|day\_number\_of\_year|Returns the number (1-366) of the day in a year for the given date.| -   `day_number_of_year (01/30/2015) = 30`
-   `day_number_of_year (invoiced)`

 |
|day\_of\_week|Returns the day of the week for the given date.| -   `day_of week (01/30/2015) = Friday`
-   `day_of_week (serviced)`

 |
|diff\_days|Subtracts the second date from the first date and returns the result in number of days, rounded down if not exact.| -   `diff_days (01/15/2014, 01/17/2014) = -2`
-   `diff_days (purchased, shipped)`

 |
|diff\_time|Subtracts the second date from the first date and returns the result in number of seconds.| -   `diff_time (01/01/2014, 01/01/2014) = -86,400`
-   `diff_time (clicked, submitted)`

 |
|hour\_of\_day|Returns the hour of the day for the given date.| -   `hour_of_day (received)`

 |
|is\_weekend|Returns true if the given date falls on a Saturday or Sunday.| -   `is_weekend (01/31/2015) = true`
-   `is_weekend (emailed)`

 |
|month|Returns the month from the given date.| -   `month (01/15/2014) = January`
-   `month (date ordered)`

 |
|month\_number|Returns the number (1-12) of the month for the given date.| -   `month_number (09/20/2014) = 9`
-   `month_number (purchased)`

 |
|now|Returns the current timestamp.| -   `now ()`

 |
|start\_of\_month|Returns the date for the first day of the month for the given date.| -   `start_of_month ( 01/31/2015 ) = Jan FY 2015`
-   `start_of_month (shipped)`

 |
|start\_of\_quarter|Returns the date for the first day of the quarter for the given date.| -   `start_of_quarter ( 09/18/2015 ) = Q3 FY 2015`
-   `start_of_quarter (sold)`

 |
|start\_of\_week|Returns the date for the first day of the week for the given date.| -   `start_of_week ( 06/01/2015 ) = 05/30/2015 Week`
-   `start_of_week (emailed)`

 |
|start\_of\_year|Returns the date for the first day of the year for the given date.| -   `start_of_year ( 02/15/2015 ) = FY 2015`
-   `start_of_year (joined)`

 |
|time|Returns the time portion of a given date.| -   `time (3/1/2002 10:32) = 10:32`
-   `time (call began)`

 |
|year|Returns the year from the given date.| -   `year (01/15/2014) = 2014`
-   `year (date ordered)`

 |


 ## Calculate date formulas

 Calculating date formulas is useful when you want to compare data from different date periods.

 Here are some examples of using date formulas:

 ### Example 1

 The following example shows you how to create formulas that you can use to compare data from this week to last week.

 1.  The formula for this week is week ( today () ) - week (date).
 2.  The formula for last week is diff\_days ( week ( today ) ) , week ( date ) ).

 ### Example 2

 The following example shows you how to calculate the percent increase from the last date period to this period in terms of revenue.

 1.  Create the formula, this week revenue = sum ( if ( this week ) then revenue else 0 ).
 2.  Then create the formula, last week revenue = sum ( if (last week ) then revenue else 0 ).
 3.  Now you can use [nested formulas](../../complex_searches/about_nested_formulas.html#) to calculate the percent increase by creating a parent formula, percent increase = ( ( last week revenue - this week revenue) / last week revenue ) \* 100.
