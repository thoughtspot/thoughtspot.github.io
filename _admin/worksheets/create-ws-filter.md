---
title: [Add a filter to a worksheet]

last_updated: 12/16/2020
summary: "You can add filters to a worksheet to limit the data users can access from the worksheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add filters to a worksheet to limit the data it contains. This is useful when you have underlying tables that store more data than is necessary for the types of analyses the worksheet is intended for. You can also use worksheet filters to provide data security, when you want different groups of users to be able to see different data without relying on row level security.

Note that starting in release 6.2, you can export and import Worksheets with filters [using a flat `TML` file]({{ site.baseurl }}/admin/scriptability/scriptability.html), which allows for optional modification of any Worksheet properties, including filters. If you are on a release prior to 6.2, you can migrate Worksheets using a flat file format, but you cannot migrate Worksheets with filters.

Refer to [Migrate and restore objects]({{ site.baseurl }}/admin/scriptability/scriptability.html) to add a filter to a Worksheet through the TML file.

To add a filter to a worksheet through the user interface:

1. Click **Data** in the top menu bar, find your worksheet, and click its name.

2. Click the **Edit Worksheet** button.

     ![Edit a worksheet]({{ site.baseurl }}/images/worksheet-edit.png "Edit a worksheet")

3. Hover over **Filters** on the left menu and click **+**.

4. Choose the column you want to filter on.

     ![Choose a worksheet column to filter on]({{ site.baseurl }}/images/worksheet-choose-filter-column.png "Choose a worksheet column to filter on")

5. Select the values to include in your answer.

     ![Specify values to include]({{ site.baseurl }}/images/worksheet-choose-filters.png "Specify values to include")

6. If you want to exclude values, click **Exclude** and choose values to exclude.

7. Click **Done**.

   If there are too many values, you can use the filter search bar to find the ones you want.

## Use aggregate formulas as Worksheet filters
Starting in ThoughtSpot release 6.2, you can use an [aggregate formula]({{ site.baseurl }}/complex-search/aggregation-formulas.html) as a Worksheet filter. This is useful when, for example, you only want your results to show a measure when the related attribute is greater than some number, or vice versa. You may only want to see `sales` when the `unique customer count` is greater than 1, or you may only want to see a `customer` if the associated `sales` is greater than 0. Rather than add that formula to every search, you can create a filter at the Worksheet level.

To add an aggregated formula to a Worksheet, follow these steps:
1. [Create an aggregate formula in a Worksheet]({{ site.baseurl }}/admin/worksheets/create-formula.html).
2. Add the formula to Worksheet as a filter, as shown in steps 1-7 above. Instead of choosing a column to filter on, search for and choose your aggregate formula.
3. Specify conditions in which the filter should apply. Here, we have chosen to only display `gross profit` when it is greater than $1,000,000. The following conditional statements are acceptable: `is greater than`, `is greater than or equal to`, `is less than`, `is less than or equal to`, `is between`, `is in`, or `is not in`.

    ![Specify conditions for aggregate formula filter]({{ site.baseurl }}/images/aggregate-formula-filter-condition.png "Specify conditions for aggregate formula filter")

4. Click **Done**, and **save** the Worksheet.
