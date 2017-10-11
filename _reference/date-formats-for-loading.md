---
title: [Date and time formats reference]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This is a list of all the date and time formats you use with ThoughtSpot. You
define data formats in two contexts, when loading data and when modeling data.
Users load data:

- using data upload from the browser
- through `tsload` command
- through data connect

Data loading formats do not change how data is displayed in tables and charts.
Data modeling controls how data is displayed in search and their resulting
answers.

## Data loading formats

For date data types, the default format is `yearmonthday` , for example,  `Dec 30th, 2001` and is represented as `20011230`. Use the date format specifications supported in the [strptime library function](http://man7.org/linux/man-pages/man3/strptime.3.html).

For time and datetime data types, the default is `yearmonthday hour:minute:second`, for example,  `Dec 30th, 2001 1:15:12` and is represented as 20011230 01:15:12. Use the datetime format specifications supported in the [strptime library function](http://man7.org/linux/man-pages/man3/strptime.3.html).

## Data modeling formats

A user with administrative rights can configure data modeling for data on one or
all files. You can set number, date, and currency display formats. These formats
define how these value types display in tables and charts. See the _Admin Guide_
for more information about data modeling settings.

Using data modeling, you can use string contains {2:substring}tructions such as the following:

-   `MM/dd/yyyy`
-   `MMM` (for abbreviated month format)
-   `DD/MM/yyyy`
-   `MM/dd/yyyy HH:mm`
-   `DD/MM/yyyy HH:mm`

These constructions allow you to model dates with these possible formats:

{% include content/data-modeling-formats.md %}
