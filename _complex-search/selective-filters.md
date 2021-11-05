---
title: [Selective Liveboard filters]
last_updated: 11/04/2021
summary: "Learn how to specify which Liveboard visualizations a Liveboard filter should apply to."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you create or view a Liveboard, you may want to filter the visualizations on the Liveboard, to only see data that is relevant to your role, for example. However, you may not want a filter to apply to every visualization in the Liveboard. For example, the head of sales in North America may want to filter most visualizations to only contain data about sales in North America, but may want to compare her sales to an unfiltered *global quarterly sales* metric.

You can apply Liveboard filters to specific visualizations from the **Configure filters** modal.

To learn more about Liveboard filters, refer to [Liveboard filters]({{ site.baseurl }}/complex-search/pinboard-filters.html) and [Linked Liveboard filters]({{ site.baseurl }}/complex-search/linked-filters.html).

## Configure selective filters
1. Navigate to the Liveboard you would like to filter, or [create a new Liveboard]({{ site.baseurl }}/admin/ts-cloud/pinboard-compose.html).

2. Add filters to the Liveboard. To create filters for visualizations based on one Worksheet, refer to [Liveboard filters]({{ site.baseurl }}/complex-search/pinboard-filters.html). To create one filter that filters visualizations based on more than one Worksheet, refer to [Linked Liveboard filters]({{ site.baseurl }}/complex-search/linked-filters.html).

3. Select the **more options menu** ![]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} at the top right, and select **Configure filters**.

    ![Configure filters]({{ site.baseurl }}/images/configure-filters.png "Configure filters")

4. The **Configure filter** modal appears. The side menu contains every primary filter column for the Liveboard. In this case, there is only one filter: **Customer region**. So, **Customer region** is the only column in the side menu. Select the filter you would like to configure from the side menu, if there is more than one filter.

    ![Configure filters modal]({{ site.baseurl }}/images/configure-filters-modal.png "Configure filters modal")

5. Scroll down to **Applicable to**. You can select the **All** option, or only choose certain visualizations.

    ![Specify filtered visualizations]({{ site.baseurl }}/images/filter-applicable-to-not-all.png "Specify filtered visualizations")

6. Select **Done**. ThoughtSpot applies the filter to the visualization(s) you specified.
