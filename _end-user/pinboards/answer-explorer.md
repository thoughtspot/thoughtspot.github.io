---
title: Answer Explorer
summary: Answer Explorer provides you with AI-guided exploration of Answers within Pinboards, so you can more easily explore your data.
last_updated: 12/23/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can access **Answer Explorer** from any Answer in a Pinboard. **Answer Explorer** is only available for answers within Pinboards. Click the **Explore** button that appears when you hover over any Answer.

{% include image.html file="explore-button.png" title="The Explore button" alt="The Explore button appears when you hover over an Answer in a Pinboard." caption="The Explore button" %}

The Answer expands to fill your screen, and the **Explore this data** column appears.

{% include image.html file="explore-fullscreen.png" title="Explore this data" alt="After you click Explore, the Answer expands to full screen." caption="Explore this data" %}

You can explore your data in several different ways, using [filters]({{ site.baseurl }}#explore-filters), [breakdowns]({{ site.baseurl }}#explore-breakdowns), [metrics]({{ site.baseurl }}#explore-metrics), or [comparisons]({{ site.baseurl }}#explore-comparisons).

You can also Drill down from within **Answer Explorer**. When you Drill down in **Answer Explorer**, you have the option of going back one step at a time, using the Back icon ![]({{ site.baseurl }}/images/icon-arrow-left-20px.png){: .inline}.

Refer to [see the search behind a result]({{ site.baseurl }}/complex-search/drill-down.html).

{: id="explore-filters"}
## Filters
Use the **Filters** search bar to filter your data. Specify the column values you wish to see, such as *Age group=65+*, and press **Enter** or click **Add**.

You can also use the filtering suggestions **Answer Explorer** provides, if you do not know which filters to use. You can click **Show more** to see even more suggestions. If you click on a suggested filter, **Answer Explorer** adds that filter to your visualization.

After you add a filter or make any other change to your Answer, you may want to go back to an earlier version of your Answer. You can click the Back icon ![]({{ site.baseurl }}/images/icon-arrow-left-20px.png){: .inline} to go back one step, or the Reset icon ![]({{ site.baseurl }}/images/icon-reset-20px.png){: .inline} to go back to the original answer.

{: id="explore-breakdowns"}
## Breakdowns
Use **Breakdowns** to visualize your data, separated by an attribute. For example, break by *Store State* to see which states have the best sales. If your Answer has a time attribute, you can easily change from *daily* to *quarterly*, and so on.

{: id="explore-metrics"}
## Metrics
Use **Metrics** to add other available measures. For example, you can add *quantity* to view both total sales and total quantity by store region.

{% include image.html file="explore-metricsboth.png" title="Total sales and total quantity" alt="You can add another measure to your visualization." caption="Total sales and total quantity" %}

If you want to see *quantity* instead of *sales*, click **Show more** and select **Change sales to quantity**.

{% include image.html file="explore-metricsquantity.png" title="Total quantity by store region" alt="You can replace one measure with another in your visualization." caption="Total quantity by store region" %}

{: id="explore-comparisons"}
## Comparisons
Use **Comparisons** to easily perform a *versus* analysis. **Answer Explorer** might suggest you compare your best- and worst-performing products, for example.

## Save your new answer
When you find a valuable insight using **Answer Explorer**, you may want to save that Answer instead of trying to recreate it in the **Search** bar. Click the ellipsis icon ![]({{ site.baseurl }}/images/icon-more-20px.png){: .inline}. Select **copy and edit** to save your new Answer within ThoughtSpot and continue working with it, or select **Download** to download an image of your current visualization.
