---
title: [Date and time formats reference]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This is a references for the date and time contexts and formats you can use with
ThoughtSpot. You define data formats in specific contexts and, depending on the
context, your choices in data formatting differ. You must understand date  and
time when you load data in these contexts:

- using data upload from the browser
- through `tsload` command
- through data connect or another extract, transform, load (ETL) tool

Data loading formats do not change how data is displayed in tables and charts.

The context where you _can control_ date and time formats is data modeling. Data
modeling controls how data is displayed in search and their resulting answers.

## Data loading formats via tsload

When loading via the `tsload` command you must specify `date` and `timestamp`
formats using the format specifications defined in the [`strptime` library function](http://man7.org/linux/man-pages/man3/strptime.3.html). Data is
imported based on the timezone of the node from which `tsload` is run.

For `date` data types, the default format is `%Y%m%d` which translates to
`yearmonthday`  For example, `Dec 30th, 2001` is represented as `20011230`.  For
`time` and `datetime` data types, the default is `%Y%m%d %H:%M:%S` which
translates to `yearmonthday hour:minute:second`, for example, `Dec 30th, 2001
1:15:12` is represented as `20011230 01:15:12`.

## Data modeling formats for browser data upload

These date and time formats are supported in a CSV file when uploading via the
browser. You cannot specify the date format; ThoughtSpot will pick the format
that fits your data best:

{% include content/data-modeling-formats.md %}

## Data loading formats via data connect or another ETL tool

Data that is loaded via ETL arrives through ODBC or JDBC connection. After you
extract the data from the source and before you load it into ThoughtSpot, you
must transform any date or timestamp into a valid format for ThoughtSpot. Once
transformed, no explicit data masking is required. See the data integration
guide for more details of loading data via ODBC and JDBC.

## Data modeling formats

A user with administrative rights can configure data modeling for data on one or
all files. You can set number, date, and currency display formats. These formats
define how these value types display in tables and charts. See the Admin Guide
for more information about data modeling settings. The following format strings
are available for use:

{% include content/data-modeling-strings.md %}
