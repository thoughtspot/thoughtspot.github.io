---
title: [Results that are tables]
tags: [keywords]
keywords: tbd
last_updated: tbd
summary: "Tables display your answer in a format similar to an Excel spreadsheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Your search results are not limited by the number of attributes or columns in
order to be presented as a table. You can have a table with just one attribute
or measure. When you choose to display your answer as a table, ThoughtSpot will
create the columns for you and any relevant headlines.

Sometimes when you view a table, the results will be aggregated (combined). For
example, if you only type "revenue", you'll see the total sum of all the revenue
the table contains as one combined number. If you include the keyword `monthly`,
the results will be aggregated by month. You can rearrange the column order of
your table among other search actions.

Every table gives you the option to rearrange the column order and change the
column widths.

## Rearrange column order

You can rearrange the column order of your table after adding all of your search terms.

To rearrange the column order:

1. While viewing your answer as a table, click the column header you would like to move.
2. Drag it across to its new position.

## Resize column widths

You can resize the column widths of your table after adding all of your search
terms. Any adjustments you make to the column widths of your table are saved
when you pin the table to a pinboard. To resize the column widths:

1. While viewing your answer as a table, hover over a column border in the column header row.
2. Click and drag the border to create your preferred column width.

## Sort columns

You can sort a table by column values by clicking on the column title. If you
hold down the SHIFT key you can click on multiple heads and sort on them in
turn.

{% include tip.html content="This same functionality is available on tables you
see elsewhere in ThoughtSpot. For example, a table in the **Data** page is also
sortable in this manner."%}

## About headlines (summary information)

Headlines display summary information of a table result. Headlines contain
summary information for each column of a table. They appear at the bottom of the
table in individual boxes.

 ![]({{ site.baseurl }}/images/headlines.png "Headlines at the bottom of a table")

ThoughtSpot automatically creates up to 20 headlines for each table. Your
ThoughtSpot configuration can be changed to accommodate more if needed.

You can modify how you'd like the value to be displayed by clicking the dropdown
on a headline and selecting a different type of aggregation. The usual available
aggregations are total, average, standard deviation, variance, minimum, and
maximum. There are also unique count and total count values available for the
appropriate columns.

To add a headline to a pinboard, hover over it and click the **Add to pinboard** icon.

 ![]({{ site.baseurl }}/images/pin_headline.png "Add a headline to a pinboard")

 You can decide whether or not to display headlines in your table results. To
 customize headlines, choose **Actions > Customize** summaries.
