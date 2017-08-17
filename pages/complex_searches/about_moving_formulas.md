---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About moving formulas

Moving formulas are aggregate formulas that allow you to calculate the average, max, min, or sum of your data over a predetermined interval, or window, with an adjustable range.

Each of the moving formulas accepts a measure, two integers to define the window, and one or more attributes. And each returns the aggregate of the measure over the given window. Moving formulas can be used to smooth out any irregularities in your data to easily recognize trends. The larger the interval you set, the more the peaks and valleys are smoothed out. While the smaller the interval, the closer the moving averages are to the actual data points.

The moving formulas include:

|Function|Description|Examples|
|--------|-----------|--------|
|moving\_average|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. Returns the average of the measure over the given window. The attributes are the ordering columns used to compute the moving average. The window is (current - Num1...Current + Num2) with both end points being included in the window. For example, "1,1" will have a window size of 3. To see periods in the past, use a negative number for the second endpoint, as in the example "moving\_average(sales, 1, -1, date)".| -   `moving_average (revenue, 2, 1, customer region)`

 |
|moving\_max|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. Returns the maximum of the measure over the given window. The attributes are the ordering columns used to compute the moving maximum. The window is (current - Num1...Current + Num2) with both end points being included in the window. For example, "1,1" will have a window size of 3. To see periods in the past, use a negative number for the second endpoint, as in the example "moving\_max(sales, 1, -1, date)".| -   `moving_max (complaints, 1, 2, store name)`

 |
|moving\_min|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. Returns the minimum of the measure over the given window. The attributes are the ordering columns used to compute the moving minimum. The window is (current - Num1...Current + Num2) with both end points being included in the window. For example, "1,1" will have a window size of 3. To see periods in the past, use a negative number for the second endpoint, as in the example "moving\_min(sales, 1, -1, date)".| -   `moving_min (defects, 3, 1, product)`

 |
|moving\_sum|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. Returns the sum of the measure over the given window. The attributes are the ordering columns used to compute the moving sum. The window is (current - Num1...Current + Num2) with both end points being included in the window. For example, "1,1" will have a window size of 3. To see periods in the past, use a negative number for the second endpoint, as in the example "moving\_sum(sales, 1, -1, date)".| -   `moving_sum (revenue, 1, 1, order date)`

 |

-   **[Calculate the moving average](../../pages/complex_searches/search_using_the_moving_function.html)**  
You can use the moving formulas to compute a measure within a moving window of your data, usually defined by time.

**Parent topic:** [About aggregate formulas](../../pages/complex_searches/aggregation_formulas.html)

