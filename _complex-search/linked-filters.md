---
title: [Linked Pinboard filters]
last_updated: 10/14/2020
summary: "You can link columns from multiple Worksheets, to create one Pinboard filter for visualizations that come from different Worksheets."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you create and share a Pinboard, your users may want to filter the visualizations on the Pinboard, to only see data that is relevant to their role. The head of customer experience in the North America region may only want to see the data on customers in North America, in a Pinboard that represents global customer data. However, the Pinboard may be built on multiple Worksheets: Sales and NPS, for example. To create one filter that filters both visualizations built on the Sales Worksheet, and the visualizations built on the NPS Worksheet, you can link the Worksheet columns, at the Pinboard level.

To filter Pinboards based on one Worksheet, see [Pinboard filters]({{ site.baseurl }}/complex-search/pinboard-filters.html).

## Configure linked filters
To configure linked Pinboard filters, follow these steps. Note that you can link the Worksheet columns at the Pinboard level ***without*** actually filtering the Pinboard. This is useful if you would like your users to be able to choose their own filters for the Pinboard.

{% include note.html content="When you create linked Pinboard filters, you link Worksheet columns at the Pinboard level. You do not globally link the Worksheet columns. You must create linked filters separately, for each Pinboard." %}

1. Navigate to the Pinboard you would like to filter, or [create a new Pinboard]({{ site.baseurl }}/admin/ts-cloud/pinboard-compose.html).

2. First, you must add primary Pinboard filters. If you do not add primary filters, the **Configure filters** option does not appear in the **more options menu** ![]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}.

3. To add a primary Pinboard filter, select the **more options menu** ![]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} at the top right, and select **Add filters**.

4. In the **Add filters** side panel, search for columns you would like to filter on, or open the Worksheets the columns are in and click on the correct columns. In this example, we will create a linked **Customer region** filter. To create a filter without actually filtering the Pinboard, click **Done** after you choose the column you would like to filter on, instead of specifying values to include or exclude.

    ![Add filters]({{ site.baseurl }}/images/add-filters.png "Add filters")

5. After you add a filter, it appears on the Pinboard filters bar, below the Pinboard name.

6. Now we can create a linked filter. Select the **more options menu** ![]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} at the top right, and select **Configure filters**.

    ![Configure filters]({{ site.baseurl }}/images/configure-filters.png "Configure filters")

7. The **Configure filter** modal appears. The side menu contains every primary filter column for the Pinboard. In this case, we only added one filter: **Customer region**. So, **Customer region** is the only column in the side menu.

    ![Configure filters modal]({{ site.baseurl }}/images/configure-filters-modal.png "Configure filters modal")

8. The **Primary Worksheet** and **Primary Filter** text boxes contain the Worksheet and column that the Pinboard is already filtering on. To link the **Customer region** filter across Worksheets, we must specify the **Linked worksheet** and **Linked filter**. Click on the **Select Worksheet** dropdown, and choose the Worksheet that contains the column you would like to filter on. In this case, the Pinboard only uses one other Worksheet: **Formula Worksheet**.

9. After you select the **Linked Worksheet**, you can select the column to filter on. In this case, we are filtering on **Customer region**.

    ![Choose linked filter]({{ site.baseurl }}/images/choose-linked-filter.png "Choose linked filter")

10. To link another Worksheet's **Customer region** column to this filter, click **+ Link filter**. In this case, the Pinboard only uses two Worksheets, so the **+ Link filter** option is unavailable.

11. To specify visualizations to apply the filter to, scroll down to **Applicable to**. You can select the **All** option, or only choose certain visualizations.

    ![Specify filtered visualizations]({{ site.baseurl }}/images/filter-applicable-to-not-all.png "Specify filtered visualizations")

    You can specify which visualizations a filter should apply to, even if it is not a multi-Worksheet linked filter.

12. Click **Done**. You can see that all of the visualizations in the Pinboard, or each visualization that you specified, has data specific to the **America** customer region. There is now one **Customer region** filter for the two Worksheets in this Pinboard. You or viewers of the Pinboard can change the customer region to any of the other regions in the **Customer region** column.

    ![Configure filters - done]({{ site.baseurl }}/images/configure-filters-done.png "Configure filters - done")

## Limitations of linked filters
ThoughtSpot expects the values in the Worksheet columns you link to have the same names. You can only use the values of the Primary Filter to filter the Pinboard visualizations, so if the value names are different in the Linked Filter, you are unable to filter visualizations based on the Linked Worksheet.

For example, in the configuration example above, *TCPH WS* is the Primary Worksheet, and the **Customer Region** column from that Worksheet is the Primary Filter. One of the customer regions in the *TCPH WS* might be **North America**, but the name of that customer in the Linked Worksheet, *Formula Worksheet*, might be **NA**. In the filter value selection modal, you only see the value from the Primary Worksheet, **North America**. You do not see **NA**. If you filter based on **North America**, ThoughtSpot filters only the visualizations based on the Primary Worksheet.
