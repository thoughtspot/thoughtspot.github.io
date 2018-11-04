---
title: [Add a filter to a worksheet]
keywords: filter,worksheet
last_updated: 11/3/2018
summary: "You can add a filters to a worksheet to limit the data users can access from the worksheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Beginning in ThoughtSpot version 5.0, you can add filters to a worksheet to limit the data it contains. This is useful when you have underlying tables that store more data than in necessary for the types of analyses the worksheet is intended for. You can also use worksheet filters to provide data security, when you want different groups of users to be able to see different data without relying on row level security.

To add a filter to a worksheet:

1. Click **Data** in the top menu bar, find your worksheet, and click on its name.

2. Click the **Edit Worksheet** button.

     ![]({{ site.baseurl }}/images/edit_worksheet.png "Edit a worksheet")

3. Click **Filters** on the left menu and click **+**.

     ![]({{ site.baseurl }}/images/plus_worksheet_filter.png "Add a worksheet filter")

4. Choose the column you want to filter on.

     ![]({{ site.baseurl }}/images/ws-filter-choose-column.png "Choose worksheet column to filter on")

5. Select the values to include in your answer.

     ![]({{ site.baseurl }}/images/column_filter.png "Include filters value box")

6. If you want to exclude values, click **Exclude** and choose values to exclude.

     ![]({{ site.baseurl }}/images/exclude_nulls.png "Exclude filters value box")

7. Click **ADD FILTER**.

   If there are too many values, you can use the filter search bar to find the ones you want.
