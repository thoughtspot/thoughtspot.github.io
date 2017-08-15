---
title: [Formula reference]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
ThoughtSpot allows you to create derived columns in worksheets using formulas. This reference lists the various operators and functions you can use to create formulas.

You can also see this list of operators and examples from within the Formula Builder by selecting **Formula Assistant**.

## Aggregate functions

These functions can be used to aggregate data.

|Function|Description|Examples|
|--------|-----------|--------|
|average|Returns the average of all the values of a column.| -   `average (revenue)`

 |
|count|Returns the number of rows in the table containing the column.| -   `count (product)`

 |
|cumulative\_average|Takes a measure and one or more attributes. Returns the average of the measure, accumulated by the attribute\(s\) in the order specified.| -   `cumulative_average (revenue, order date, state)`

 |
|cumulative\_max|Takes a measure and one or more attributes. Returns the maximum of the measure, accumulated by the attribute\(s\) in the order specified.| -   `cumulative_max (revenue, state)`

 |
|cumulative\_min|Takes a measure and one or more attributes. Returns the minimum of the measure, accumulated by the attribute\(s\) in the order specified.| -   `cumulative_min (revenue, campaign)`

 |
|cumulative\_sum|Takes a measure and one or more attributes. Returns the sum of the measure, accumulated by the attribute\(s\) in the order specified.| -   `cumulative_sum (revenue, order date)`

 |
|group\_average|Takes a measure and one or more attributes. Returns the average of the measure grouped by the attribute\(s\).| -   `group_average (revenue, customer region, state)`

 |
|group\_count|Takes a measure and one or more attributes. Returns the count of the measure grouped by the attribute\(s\).| -   `group_count (revenue, customer region)`

 |
|group\_max|Takes a measure and one or more attributes. Returns the maximum of the measure grouped by the attribute\(s\).| -   `group_max (revenue, customer region)`

 |
|group\_min|Takes a measure and one or more attributes. Returns the minimum of the measure grouped by the attribute\(s\).| -   `group_min (revenue, customer region)`

 |
|group\_stddev|Takes a measure and one or more attributes. Returns the standard deviation of the measure grouped by the attribute\(s\).| -   `group_stddev (revenue, customer region)`

 |
|group\_sum|Takes a measure and one or more attributes. Returns the sum of the measure grouped by the attribute\(s\).| -   `group_sum (revenue, customer region)`

 |
|group\_unique\_count|Takes a measure and one or more attributes. Returns the unique count of the measure grouped by the attribute\(s\).| -   `group_unique_count (product , supplier)`

 |
|group\_variance|Takes a measure and one or more attributes. Returns the variance of the measure grouped by the attribute\(s\).| -   `group_variance (revenue, customer region)`

 |
|max|Returns the maximum value of a column.| -   `max (sales)`

 |
|min|Returns the minimum value of a column.| -   `min (revenue)`

 |
|moving\_average|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is \(current - Num1...Current + Num2\) with both end points being included in the window. For example, "1,1" will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the average of the measure over the given window. The attributes are the ordering columns used to compute the moving average.| -   `moving_average (revenue, 2, 1, customer region)`

 |
|moving\_max|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is \(current - Num1...Current + Num2\) with both end points being included in the window. For example, "1,1" will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the maximum of the measure over the given window. The attributes are the ordering columns used to compute the moving maximum.| -   `moving_max (complaints, 1, 2, store name)`

 |
|moving\_min|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is \(current - Num1...Current + Num2\) with both end points being included in the window. For example, "1,1" will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the minimum of the measure over the given window. The attributes are the ordering columns used to compute the moving minimum.| -   `moving_min (defects, 3, 1, product)`

 |
|moving\_sum|Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is \(current - Num1...Current + Num2\) with both end points being included in the window. For example, "1,1" will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the sum of the measure over the given window. The attributes are the ordering columns used to compute the moving sum.| -   `moving_sum (revenue, 1, 1, order date)`

 |
|stddev|Returns the standard deviation of all values of a column.| -   `stddev (revenue)`

 |
|sum|Returns the sum of all the values of a column.| -   `sum (revenue)`

 |
|unique count|Returns the number of unique values of a column.| -   `unique count (customer)`

 |
|variance|Returns the variance of all the values of a column.| -   `variance (revenue)`

 |

## Conversion functions

These functions can be used to convert data from one data type to another. Conversion to or from date data types is not supported.

|Function|Description|Examples|
|--------|-----------|--------|
|to\_bool|Returns the input as a boolean \(true or false\).| -   `to_bool (0) = false`
-   `to_bool (married)`

 |
|to\_date|Accepts a date represented as an integer or text string, and a second string parameter that can include strptime date formatting elements. Replaces all the valid strptime date formatting elements with their string counterparts and returns the result. Does not accept epoch formatted dates as input.| -   `to_date (date_sold, '%Y-%m-%d')`

 |
|to\_double|Returns the input as a double.| -   `to_double ('3.14') = 3.14`
-   `to_double (revenue * .01)`

 |
|to\_integer|Returns the input as an integer.| -   `to_integer ('45') + 1 = 46`
-   `to_integer (price + tax - cost)`

 |
|to\_string|Returns the input as a text string.| -   `to_string (45 + 1) = '46'`
-   `to_string (revenue - cost)`

 |

## Date functions

|Function|Description|Examples|
|--------|-----------|--------|
|add\_days|Returns the result of adding the specified number of days to the given date.| -   `add_days (01/30/2015, 5) = 02/04/2015`
-   `add_days (invoiced, 30)`

 |
|date|Returns the date portion of a given date.| -   `date (home visit)`

 |
|day|Returns the number \(1-31\) of the day for the given date.| -   `day (01/15/2014) = 15`
-   `day (date ordered)`

 |
|day\_number\_of\_week|Returns the number \(1-7\) of the day in a week for the given date with 1 being Monday and 7 being Sunday.| -   `day_number_of_week (01/30/2015) = 6`
-   `day_number_of_week (shipped)`

 |
|day\_number\_of\_year|Returns the number \(1-366\) of the day in a year for the given date.| -   `day_number_of_year (01/30/2015) = 30`
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
|month\_number|Returns the number \(1-12\) of the month for the given date.| -   `month_number (09/20/2014) = 9`
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

## Mixed functions

These functions can be used with text and numeric data types.

|Function|Description|Examples|
|--------|-----------|--------|
|!=|Returns true if the first value is not equal to the second value.| -   `3 != 2 = true`
-   `revenue != 1000000`

 |
|<|Returns true if the first value is less than the second value.| -   `3 < 2 = false`
-   `revenue < 1000000`

 |
|<=|Returns true if the first value is less than or equal to the second value.| -   `1 <= 2 = true`
-   `revenue <= 1000000`

 |
|=|Returns true if the first value is equal to the second value.| -   `2 = 2 = true`
-   `revenue = 1000000`

 |
|\>|Returns true if the first value is greater than the second value.| -   `3 > 2 = true`
-   `revenue > 1000000`

 |
|\>=|Returns true if the first value is greater than or equal to the second value.| -   `3 >= 2 = true`
-   `revenue >= 1000000`

 |
|greatest|Returns the larger of the values.| -   `greatest (20, 10) = 20`
-   `greatest (q1 revenue, q2 revenue)`

 |
|least|Returns the smaller of the values.| -   `least (20, 10) = 10`
-   `least (q1 revenue, q2 revenue)`

 |

## Number functions

|Function|Description|Examples|
|--------|-----------|--------|
|\*|Returns the result of multiplying both numbers.| -   `3 * 2 = 6`
-   `price * taxrate`

 |
|+|Returns the result of adding both numbers.| -   `1 + 2 = 3`
-   `price + shipping`

 |
|-|Returns the result of subtracting the second number from the first.| -   `3 - 2 = 1`
-   `revenue - tax`

 |
|/|Returns the result of dividing the first number by the second.| -   `6 / 3 = 2`
-   `markup / retail price`

 |
|^|Returns the first number raised to the power of the second.| -   `3 ^ 2 = 9`
-   `width ^ 2`

 |
|abs|Returns the absolute value.| -   `abs (-10) = 10`
-   `abs (profit)`

 |
|acos|Returns the inverse cosine in degrees.| -   `acos (0.5) = 60`
-   `acos (cos-satellite-angle)`

 |
|asin|Returns the inverse sine \(specified in degrees\).| -   `asin (0.5) = 30`
-   `asin (sin-satellite-angle)`

 |
|atan|Returns the inverse tangent in degrees.| -   `atan (1) = 45`
-   `atan (tan-satellite-angle)`

 |
|atan2|Returns the inverse tangent in degrees.| -   `atan2 (10, 10) = 45`
-   `atan2 (longitude, latitude)`

 |
|cbrt|Returns the cube root of a number.| -   `cbrt (27) = 3`
-   `cbrt (volume)`

 |
|ceil|Returns the smallest following integer.| -   `ceil (5.9) = 6`
-   `ceil (growth rate)`

 |
|cos|Returns the cosine of an angle \(specified in degrees\).| -   `cos (63) = 0.45`
-   `cos (beam angle)`

 |
|cube|Returns the cube of a number.| -   `cube (3) = 27`
-   `cube (length)`

 |
|exp|Returns Euler's number \(~2.718\) raised to a power.| -   `exp (2) = 7.38905609893`
-   `exp (growth)`

 |
|exp2|Returns 2 raised to a power.| -   `exp2 (3) = 8`
-   `exp2 (growth)`

 |
|floor|Returns the largest previous integer.| -   `floor (5.1) = 5`
-   `floor (growth rate)`

 |
|ln|Returns the natural logarithm.| -   `ln (7.38905609893) = 2`
-   `ln (distance)`

 |
|log10|Returns the logarithm with base 10.| -   `log10 (100) = 2`
-   `log10 (volume)`

 |
|log2|Returns the logarithm with base 2 \(binary logarithm\).| -   `log2 (32) = 5`
-   `log2 (volume)`

 |
|mod|Returns the remainder of first number divided by the second number.| -   `mod (8, 3) = 2`
-   `mod ( revenue , quantity )`

 |
|pow|Returns the first number raised to the power of the second number.| -   `pow (5, 2) = 25`
-   `pow (width, 2)`

 |
|random|Returns a random number between 0 and 1.| -   `random ( ) = .457718`
-   `random ( )`

 |
|round|Returns the first number rounded to the second number \(the default is 1\).| -   `round (35.65, 10) = 40`
-   `round (battingavg, 100)`

 |
|safe\_divide|Returns the result of dividing the first number by the second. If the second number is 0, returns 0 ​instead of NaN \(not a number\).| -   `safe_divide (12, 0) = 0`
-   `safe_divide (total_cost, units)`

 |
|sign|Returns +1 if the number is greater than zero, -1 if less than zero, 0 if zero.| -   `sign (-250) = -1`
-   `sign (growth rate)`

 |
|sin|Returns the sine of an angle \(specified in degrees\).| -   `sin (35) = 0.57`
-   `sin (beam angle)`

 |
|spherical\_distance|Returns the distance in km between two points on Earth.| -   `spherical_distance (37.465191, -122.153617, 37.421962, -122.142174) = 4,961.96`
-   `spherical_distance (start_latitude, start_longitude, start_latitude, start_longitude)`

 |
|sq|Returns the square of a numeric value.| -   `sq (9) = 81`
-   `sq (width)`

 |
|sqrt|Returns the square root.| -   `sqrt (9) = 3`
-   `sqrt (area)`

 |
|tan|Returns the tangent of an angle \(specified in degrees\).| -   `tan (35) = 0.7`
-   `tan (beam angle)`

 |

## Operators

|Operator|Description|Examples|
|--------|-----------|--------|
|and|Returns true when both conditions are true, otherwise returns false.| -   `(1 = 1) and (3 > 2) = true`
-   `lastname = 'smith' and state ='texas'`

 |
|if...then...else|Conditional operator.| -   `if (3 > 2) then 'bigger' else 'not bigger'`
-   `if (cost > 500) then 'flag' else 'approve'`

 |
|ifnull|Returns the first value if it is not null, otherwise returns the second.| -   `ifnull (cost, 'unknown')`

 |
|isnull|Returns true if the value is null.| -   `isnull (phone)`

 |
|not|Returns true if the condition is false, otherwise returns false.| -   `not (3 > 2) = false`
-   `not (state = 'texas')`

 |
|or|Returns true when either condition is true, otherwise returns false.| -   `(1 = 5) or (3 > 2) = true`
-   `state = 'california' or state ='oregon'`

 |

## Text functions

|Function|Description|Examples|
|--------|-----------|--------|
|concat|Returns the two values as a concatenated text string.| -   `concat ( 'hay' , 'stack' ) = 'haystack'`
-   `concat (last_name , first_name`\)

 |
|contains|Returns true if the first string contains the second string, otherwise returns false.| -   `contains ('broomstick', 'room') = true`
-   `contains (product, 'trial version')`

 |
|edit\_distance|Accepts two text strings. Returns the edit distance \(minimum number of operations required to transform one string into the other\) as an integer. Works with strings under 1023 characters.| -   `edit_distance ('attorney', 'atty') = 4`
-   `edit_distance (color, 'red')`

 |
|edit\_distance\_with\_cap|Accepts two text strings and an integer to specify the upper limit cap for the edit distance \(minimum number of operations required to transform one string into the other\). If the edit distance is less than or equal to the specified cap, returns the edit distance. If it is higher than the cap, returns the cap plus 1. Works with strings under 1023 characters.| -   `edit_distance_with_cap ('pokemon go', 'minecraft pixelmon', 3) = 4`
-   `edit_distance_with_cap (event, 'burning man', 3)`

 |
|similar\_to|Accepts a document text string and a search text string. Returns true if relevance score \(0-100\) of the search string with respect to the document is greater than or equal to 20. Relevance is based on edit distance, number of words in the query, and length of words in the query which are present in the document.| -   `similar_to ('hello world', 'hello swirl') = true`
-   `similar_to (current team, drafted by)`

 |
|similarity|Accepts a document text string and a search text string. Returns the relevance score \(0-100\) of the search string with respect to the document. Relevance is based on edit distance, number of words in the query, and length of words in the query which are present in the document. If the two strings are an exact match, returns 100.| -   `similarity ('where is the burning man concert', 'burning man') = 46`
-   `similarity (tweet1, tweet2)`

 |
|spells\_like|Accepts two text strings. Returns true if they are spelled similarly and false if they are not. Works with strings under 1023 characters.| -   `spells_like ('thouhgtspot', 'thoughtspot') = true`
-   `spells_like (studio, distributor)`

 |
|strlen|Returns the length of the text.| -   `strlen ('smith') = 5`
-   `strlen (lastname)`

 |
|strpos|Returns the numeric position \(starting from 0\) of the first occurrence of the second string in the first string, or -1 if not found.| -   `strpos ('haystack_with_needles', 'needle') = 14`
-   `strpos (complaint, 'lawyer')`

 |
|substr|Returns the portion of the given string, beginning at the location specified \(starting from 0\), and of the given length.| -   `substr ('persnickety', 3, 7) = snicket`
-   `substr (lastname, 0, 5)`

 |

**Parent topic:** [Reference](../../admin/reference/intro_reference.html)
