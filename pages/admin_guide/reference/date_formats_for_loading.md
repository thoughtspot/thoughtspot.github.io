---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Date and time formats reference

This is a list of all the date and time formats you can load into ThoughtSpot, whether using data upload from the browser or tsload.

## Using ThoughtSpot Loader

For date data types, the default format is yearmonthday e.g. "Dec 30th, 2001" and is represented as 20011230. Use the date format specifications supported in the [strptime library function](http://man7.org/linux/man-pages/man3/strptime.3.html).

For time and datetime data types, the default is yearmonthday hour:minute:second e.g. Dec 30th, 2001 1:15:12 and is represented as 20011230 01:15:12. Use the datetime format specifications supported in the [strptime library function](http://man7.org/linux/man-pages/man3/strptime.3.html).

## Using data upload from a browser

These date and time formats are supported in an Excel or CSV file when uploading via the browser:

-   1/30/2014
-   2014-01-30
-   2014-1-9
-   30-Jan-2014
-   2014-Jan-13
-   2014-01-30 10:32 AM
-   2014-01-30 14:52
-   2014-01-30 10:32:22
-   2014-01-30 10:32:22 AM
-   2014-01-30 10:32:22.0
-   2014-01-30 10:32:22.0 AM
-   2014-01-30 10:32:22.000
-   2014-01-30 10:32:22.000 AM
-   1/9/2014
-   30-Jan-14
-   01-Mar-02 \(assumes 2002\)
-   3/1/2002 10:32 AM
-   3/1/2002 14:52
-   3/1/2002 10:32:22
-   3/1/2002 10:32:22 AM
-   3/1/2002 10:32:22.0
-   3/1/2002 10:32:22.0 AM
-   3/1/2002 10:32:22.000
-   3/1/2002 10:32:22.000 AM
-   30-Jan-14 10:32 AM
-   30-Jan-14 14:52
-   30-Jan-14 10:32:22
-   30-Jan-14 10:32:22 AM
-   30-Jan-14 10:32:22.0
-   30-Jan-14 10:32:22.0 AM
-   30-Jan-14 10:32:22.000
-   30-Jan-14 10:32:22.000 AM
-   Fri Oct 04 2013 3:26 PM
-   Fri Oct 04 2013 13:46
-   Fri Oct 04 2013 10:32:22
-   Fri Oct 04 2013 10:32:22 AM
-   Fri Oct 04 2013 10:32:22.0
-   Fri Oct 04 2013 10:32:22.0 AM
-   Fri Oct 04 2013 10:32:22.000
-   Fri Oct 04 2013 10:32:22.000 AM
-   14:52
-   10:32 AM
-   10:32:22
-   10:32:22 AM
-   10:32:22.0
-   10:32:22.000
-   10:32:22.0 AM
-   10:32:22.000 AM

