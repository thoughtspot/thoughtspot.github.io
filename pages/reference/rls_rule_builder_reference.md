---
title: [Row level security rules reference]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
ThoughtSpot allows you to create row level security rules using expressions. If an expression evaluates to "true" for a particular row and group combination, that group will be able to see that row. This reference lists the various operators and functions you can use to create rules.

For information on how to use the row level security functions and operators, see [About Rule-Based Row Level Security](../data_security/new_row_level_security.html#). There is a special variable called ts\_groups, which you can use when creating row level security rules. It fetches a list of the groups that the currently logged in user belongs to. For each row, f the expression in the rule evaluates to 'true' for any one of these groups, that row will be shown to the user.

You can also see this list of operators and examples from within the Rule Builder by selecting **Rule Assistant**.

## Conversion functions

These functions can be used to convert data from one data type to another. Conversion to or from date data types is not supported.

|Function|Description|Examples|
|--------|-----------|--------|
|to\_bool|Returns the input as a boolean (true or false).| -   `to_bool (0) = false`

 |
|to\_double|Returns the input as a double.| -   `to_double ('3.14') = 3.14`

 |
|to\_integer|Returns the input as an integer.| -   `to_integer ('45') + 1 = 46`

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
|start\_of\_month|Returns the epoch for the first day of the month for the given date.| -   `start_of_month (01/31/2015) =1420099200`
-   `start_of_month (shipped)`

 |
|start\_of\_quarter|Returns the epoch for the first day of the quarter for the given date.| -   `start_of_quarter (09/18/2015) = 1441090800`
-   `start_of_quarter (sold)`

 |
|start\_of\_week|Returns the epoch for the first day of the week for the given date.| -   `start_of_week (05/30/2015) = 1432450800`
-   `start_of_week (paid)`

 |
|start\_of\_year|Returns the epoch for the first day of the fiscal year for the given date.| -   `start_of_year (02/15/2015) = 1420099200`
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
-   `ts_groups != public`

 |
|\>|Returns true if the first value is greater than the second value.| -   `3 > 2 = true`

 |
|\>=|Returns true if the first value is greater than or equal to the second value.| -   `3 >= 2 = true`

 |
|=|Returns true if the first value is equal to the second value.| -   `2 = 2 = true`
-   `ts_groups = region`

 |
|<|Returns true if the first value is less than the second value.| -   `3 < 2 = false`

 |
|<=|Returns true if the first value is less than or equal to the second value.| -   `3 >= 2 = true`

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
|asin|Returns the inverse sine (specified in degrees).| -   `asin (0.5) = 30`
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
|cos|Returns the cosine of an angle (specified in degrees).| -   `cos (63) = 0.45`
-   `cos (beam angle)`

 |
|cube|Returns the cube of a number.| -   `cube (3) = 27`
-   `cube (length)`

 |
|exp|Returns Euler's number (~2.718) raised to a power.| -   `exp (2) = 7.38905609893`
-   `exp (growth)`

 |
|exp2|Returns 2 raised to a power.| -   `exp2 (3) = 8`
-   `exp2 (growth)`

 |
|floor|Returns the largest previous integer.| -   `floor (5.1) = 5`
-   `floor (growth rate)`

 |
|greatest|Returns the larger of the values.| -   `greatest (20, 10) = 20`
-   `greatest (q1 revenue, q2 revenue)`

 |
|least|Returns the smaller of the values.| -   `least (20, 10) = 10`
-   `least (q1 revenue, q2 revenue)`

 |
|ln|Returns the natural logarithm.| -   `ln (7.38905609893) = 2`
-   `ln (distance)`

 |
|log10|Returns the logarithm with base 10.| -   `log10 (100) = 2`
-   `log10 (volume)`

 |
|log2|Returns the logarithm with base 2 (binary logarithm).| -   `log2 (32) = 5`
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
|round|Returns the first number rounded to the second number (the default is 1).| -   `round (35.65, 10) = 40`
-   `round (battingavg, 100)`

 |
|sign|Returns +1 if the number is greater than zero, -1 if less than zero, 0 if zero.| -   `sign (-250) = -1`
-   `sign (growth rate)`

 |
|sin|Returns the sine of an angle (specified in degrees).| -   `sin (35) = 0.57`
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
|tan|Returns the tangent of an angle (specified in degrees).| -   `tan (35) = 0.7`
-   `tan (beam angle)`

 |

## Operators

|Operator|Descriptions|Examples|
|--------|------------|--------|
|if...then...else|Conditional operator.| -   `if (3 > 2) then 'bigger' else 'not bigger'`
-   `if (country = 'USA') then 'US_group' = ts_groups else false`

 |
|isnull|Returns true if the value is null.| -   `isnull (phone)`

 |
|ifnull|Returns the first value if it is not null, otherwise returns the second.| -   `ifnull (cost, 'unknown')`

 |
|not|Returns true if the condition is false, otherwise returns false.| -   `not (3 > 2) = false`
-   `not (region contains 'west')`

 |
|or|Returns true when either condition is true, otherwise returns false.| -   `(1 = 5) or (3 > 2) = true`
-   `(ts_groups = region) or (ts_groups =state)`

 |

## Text functions

|Function|Description|Examples|
|--------|-----------|--------|
|concat|Returns the two values as a concatenated text string.| -   `concat ('hay', 'stack') = 'haystack'`
-   `concat (region , 'sales') = ts_groups`

 |
|contains|Returns true if the first string contains the second string, otherwise returns false.| -   `contains ('broomstick', 'room') = true`
-   `contains (country, 'US')`

 |
|strlen|Returns the length of the text.| -   `strlen ('smith') = 5`

 |
|strpos|Returns the numeric position (starting from 0) of the first occurrence of the second string in the first string, or -1 if not found.| -   `strpos ('haystack_with_needles', 'needle') = 14`

 |
|substr|Returns the portion of the given string, beginning at the location specified (starting from 0), and of the given length.| -   `substr ('persnickety', 3, 7) = 'snicket'`

 |

## Variables

These variables can be used in your expressions.

|Function|Description|Examples|
|--------|-----------|--------|
|ts\_groups|Returns the list all the groups the current logged in user belongs to. For any row, if the expression evaluates to true for any of the groups, the user can see that row.| -   `ts_groups = east`

 |

**Parent topic:** [Reference](../../reference/intro_reference.html)
