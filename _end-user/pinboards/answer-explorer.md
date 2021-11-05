---
title: Answer Explorer
summary: Answer Explorer provides you with AI-guided exploration of Answers within Liveboards, so you can more easily find valuable and actionable information inside your data.
last_updated: 11/04/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Answer Explorer, ThoughtSpot's AI-guided exploration of answers and headline metrics within Liveboards, provides you with valuable suggestions on how to explore and understand your data, based on two main criteria. The Answer Explorer AI considers both popularity and personalization. The feature suggests ways to answer questions that are relevant to many other users, and takes your own ThoughtSpot history into account. Answer Explorer helps you better understand your data and get to actionable insights faster with just a click.

You can access Answer Explorer from any answer or headline metric in a Liveboard. Click the **Explore** button that appears when you hover over any answer or headline.

The answer expands to fill your screen, and the **Explore this data** menu appears, on the **Filters** screen.

![Explore this data]({{ site.baseurl }}/images/explore-fullscreen.png "Explore this data")

You can explore your data in several different ways, using [filters](#explore-filters), [adding](#explore-add) or [replacing](#explore-replace) attributes or measures, or [comparing](#explore-comparisons) attribute values.

Note that when you explore a headline, you can only use Answer Explorer to [filter](#explore-filters) on it.

![Use Answer Explorer to filter headline metrics]({{ site.baseurl }}/images/explore-filters-headlines.png "Use Answer Explorer to filter headline metrics")

Answer Explorer's AI updates its suggestions every time you add something new to your visualization. If you add a suggested filter, Answer Explorer then suggests new filters, comparisons, and columns to add or replace, based on that new filter in your chart. For example, in a retail data set, you might choose to add a filter for the **west** region. Answer Explorer might then suggest you **add** your data's *store state* column, since you are interested in how your stores perform based on location. In this way, Answer Explorer's suggestions become more relevant for you as you continue to use the feature.

After you make a change to your answer, you may want to go back to an earlier version of your answer. You can click the Back icon ![]({{ site.baseurl }}/images/icon-arrow-left-10px.png){: .inline} to go back one step, or the Reset icon ![]({{ site.baseurl }}/images/icon-reset-10px.png){: .inline} to go back to the original answer.

{: id="explore-filters"}
## Filters
Use **Filters** to narrow down your search result to only include the data you want to see. Answer Explorer uses sophisticated technology to show only the most relevant suggestions. Click on a suggested filter to add it to your visualization.

{% include note.html content="In Answer Explorer, you can only filter on <strong>attribute</strong> columns, not <strong>measures</strong>." %}

### Add your own filters

If you want to filter on a column value that Answer Explorer did not suggest, you can add your own filter, using the **Filters** search bar.

1. Click on the search bar under **Add your own**.

    ![Click on the filter search bar]({{ site.baseurl }}/images/explore-filter-adhoc.png "Click on the filter search bar")

2. Choose an attribute column to filter on. For example, if you are a store manager for the **east** region, you may want to see monthly sales specific to the east region. You would choose to filter on the **store region** column.

    ![Choose a column to filter on]({{ site.baseurl }}/images/explore-filter-choose-column.png "Choose a column to filter on")

3. Choose the filter operator: either *equals* or *does not equal*.

    ![Choose the filter operator]({{ site.baseurl }}/images/explore-filter-operator.png "Choose the filter operator")

4. Choose the column value you would like to filter on.

    ![Choose the column value to filter on]({{ site.baseurl }}/images/explore-filter-column-value.png "Choose the column value to filter on")

{: id="explore-add"}
## Add attributes or measures
Under the **add** tab, add attributes or measures to visualize your data with more detail. For example, add *Store State* to see which states have the best sales. Add *gross profit margin* to view both sales and gross profit margin by month.

![Add attributes or measures]({{ site.baseurl }}/images/explore-add-measure.png "Add attributes or measures")

### Add your own attributes or measures

If you want to add an attribute or measure that Answer Explorer did not suggest, you can add your own, using the **Add column** search bar.

1. Click on the search bar under **Add your own**.

2. Choose a column to add to your visualization.

{: id="explore-replace"}
## Replace attributes or measures
Under the **replace** tab, replace one attribute or measure with another. For example, if your answer has a time attribute, you can easily change from *monthly* to *quarterly*, and so on.

![Change time attribute]({{ site.baseurl }}/images/explore-replace-time.png "Change time attribute")

### Choose your own attributes or measures to replace

If you want to replace an attribute or measure that Answer Explorer did not suggest, you can choose your own, using the **Replace column** search bar.

1. Click on the search bar under **Choose what to replace**.

2. Choose an attribute or measure in your visualization to replace.

3. Click on the **Replace with your own** search bar that appears.

4. Choose an attribute or measure to add to your visualization.

{: id="explore-comparisons"}
## Compare attribute values
Under the **compare** tab, you can easily perform a *versus* analysis. For example, Answer Explorer might suggest you compare your best- and worst-performing products, or one store region to another.

![Compare attribute values]({{ site.baseurl }}/images/explore-compare.png "Compare attribute values")

### Choose your own values to compare

If you want to compare values that Answer Explorer did not suggest, you can choose your own, using the **comparisons** search bar.

1. Click on the search bar under **Compare your own**.

2. Choose an attribute column whose values you would like to compare. For example, choose **department** if you would like to compare your bakery and produce departments.

3. Select the column values you would like to compare.

## Drill down with Answer Explorer
You can Drill down from within Answer Explorer. When you Drill down in Answer Explorer, you have the option of going back one step at a time, using the Back icon ![]({{ site.baseurl }}/images/icon-arrow-left-10px.png){: .inline}. You cannot go back one step at a time if you Drill down on an answer in a Liveboard, without using Answer Explorer.

See [Drill down]({{ site.baseurl }}/complex-search/drill-down.html).

## Save your new answer
When you find a valuable insight using Answer Explorer, you may want to save that answer as it appears, instead of trying to recreate it in the **Search** bar.
1. Click the **More** menu icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline}.
2. Select **copy and edit**.
3. **Save** your new answer within ThoughtSpot and continue working with it.
3. Alternatively, select **Download** to download an image of your current visualization.

You can also **pin** the current answer to any Liveboard you have **edit** access to. Click the **pin** icon ![]({{ site.baseurl }}/images/icon-pin.png){: .inline} and select a Liveboard.

Otherwise, the answer returns to its original state when you exit the **Explore** menu by clicking the *X* icon.
