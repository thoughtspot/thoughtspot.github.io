---
title: [Liveboard filters]
summary: "You can apply filters to Liveboards as well as tables and charts."
last_updated: 11/04/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Filters, including bulk filters and exclude filters, can be applied to Liveboards just as with tables and charts. These kinds of filters apply to an entire Liveboard, making it easy to see only the data that you are interested in across the tables and charts within a Liveboard.

## When to use a Liveboard filter

Liveboard filters can be very useful when you want to apply the same filters to more than one related visualization. You can narrow the focus of your Liveboard for specific purposes or audiences.

When you apply a filter, the Liveboard is not automatically saved with your
filter applied. This is to encourage ad hoc filtering. Therefore, people with read-only access can create Liveboard filters. You must have edit access to the Liveboard, and view access (or higher) to the underlying data source in order to save a Liveboard filter.

Note that Liveboard filters only apply to the tables and charts that are based on worksheets. If a Liveboard also includes tables and charts that were created from underlying tables or on user uploaded data, the filters don’t apply to them.

To create one filter that filters visualizations based on multiple Worksheets, you can link the worksheet columns, at the Liveboard level. Refer to [Linked Liveboard filters]({{ site.baseurl }}/complex-search/linked-filters.html).

## Create a Liveboard filter

You can create a filter in the Liveboard view for any Liveboard. This allows you to easily manipulate the visualizations and view the modified presentation in one place.

Here is an example that shows you how to add a single filter to a Liveboard. To create a Liveboard filter:

1. Click the More icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select **Add filters**.

     ![]({{ site.baseurl }}/images/add_pinboard_filters.png "Add filters under Actions")

2. In the populated columns menu, click the **Add filter** icon next to the column you would like to filter on.

     ![]({{ site.baseurl }}/images/add_filters_menu.png "Add filters menu")

3. Select the values to include in your answer.

     ![]({{ site.baseurl }}/images/column_filter.png "Include column filters value box")

4. If you want to exclude values, click **Exclude** and choose values to exclude.

     ![]({{ site.baseurl }}/images/exclude_nulls.png "Exclude column filters value box")

5. Click **Done**.

  When you apply a filter, the Liveboard is not automatically saved with your filter applied to every object in the Liveboard that was created from a worksheet. Liveboard filters do not apply to tables and charts built directly on top of base tables.

## Apply filters to specific visualizations
You can apply filters to only certain visualizations that you specify. To specify the visualizations that a Liveboard filter should apply to, follow these steps, or refer to [Selective Liveboard filters]({{ site.baseurl }}/complex-search/selective-filters.html):

1. Select the **more options menu** ![]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} at the top right, and select **Configure filters**.

    ![Configure filters]({{ site.baseurl }}/images/configure-filters.png "Configure filters")

2. In the **Configure filters** modal, choose the filter you would like to update from the side menu.

3. Scroll down to **Applicable to**. You can select the **All** option, or only choose certain visualizations. You can also search for a visualization.

    ![Specify filtered visualizations]({{ site.baseurl }}/images/filter-applicable-to.png "Specify filtered visualizations")

## Edit a filter from the answer

Your applied filter will sit at the top of the Liveboard, where you can edit it in place:

![]({{ site.baseurl }}/images/select_filters.png "Select Filter Values")

Or delete it:

![]({{ site.baseurl }}/images/filter_appears.png "Applied Liveboard Filter")
