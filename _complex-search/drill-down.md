---
title: [Drill down into your data]
last_updated: 1/13/2020
summary: "Drill down into the Answers ThoughtSpot delivers to gain deeper insights into the many layers of your data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you drill down, you can see more information about the columns within
your search. Move easily from a more general view of your information to a more specific representation at a click.

You can drill down in both tables and chart visualizations, either from an Answer or from an Answer inside a Pinboard. You can also use the [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) feature and get its AI-guided exploration of an answer within a Pinboard.

## Drill down on an Answer

1. Right-click the chart object (such as a column on a bar chart, or a section of a pie chart) or data point of interest in your answer.

2. Select **Drill down**.<br>
This limits the data you are exploring to that particular data point or chart object.
    {% include image.html file="drilldown-table.png" title="Drill down from a data point" alt="You can drill down from just one data point, in either table or visualization mode." caption="Drill down from a data point" %}
    {% include image.html file="drilldown-chart.png" title="Drill down from a chart object" alt="You can drill down from a column in your data, in either table or visualization mode." caption="Drill down from a chart object" %}

2. A list of dimensions appears. You can only drill down on dimensions, not on measures. Click any of the options to gain deeper insight into your data.

    {% include image.html file="drilldown-diettype.png" title="Drill down dimensions" alt="A list of dimensions, or column names, that you can drill down on appears. Select one to drill down." caption="Drill down dimensions" %}

    For example, if you choose to drill down on *dairy* by *diet type*, the following chart appears, showing dairy sales by diet type:

    {% include image.html file="drilldown-example.png" title="Dairy sales by diet type" alt="Drill down on the dairy column and select diet type to see a chart showing dairy sales by diet type" caption="Dairy sales by diet type" %}

    You can continue to drill down in the data until you run out of relevant dimensions.

    To change the Answer to a previous version, you can remove the corresponding filter.

## Drill down within a pinboard
When you drill down on an Answer within a pinboard, it works similarly to drilling down on the Answer itself. You cannot go back one step at a time, but you can reset the Answer when you finish drilling down. To return to the original answer, click the blue reset icon ![]({{ site.baseurl }}/images/icon-drill-down-20px.png){: .inline} at the bottom right corner of the Answer.

{% include image.html file="drilldown-pinboard.png" title="Reset your Answer" alt="Click the blue reset icon at the bottom right corner of the Answer to return to the original Answer." caption="Reset your Answer" %}

## Drill down with Answer Explorer
You can also drill down using the [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) feature. Answer Explorer provides AI-guided exploration of an answer within a pinboard. When you drill down normally, you cannot go back one step at a time to see an earlier version of your visualization. You have to delete filters from the search bar, or start your search again. If you drill down with Answer Explorer, you can use the *go back one step* feature.

As you drill down on an answer using Answer Explorer, use the back arrow ![]({{ site.baseurl }}/images/icon-arrow-left-20px.png){: .inline} to go back one step at a time. Click the reset icon ![]({{ site.baseurl }}/images/icon-reset-20px.png){: .inline} to go back to the original answer.

If you want to go back one step while drilling down, [add your answer to a pinboard]({{ site.baseurl }}/end-user/pinboards/about-pinboards.html#add-an-answer-to-a-pinboard) so you can use Answer Explorer.

## Save and share your new answer
When you find a valuable insight using Drill down, you may want to save that Answer instead of trying to recreate it in the **Search** bar later.
1. Click the ellipsis icon ![]({{ site.baseurl }}/images/icon-more-20px.png){: .inline}.
2. Select **copy and edit** to save your new Answer within ThoughtSpot and continue working with it.
3. Alternatively, select **Download** to download an image of your current visualization.

You can also [share the Answer]({{ site.baseurl }}/end-user/pinboards/share-answers.html) by clicking the sharing icon ![]({{ site.baseurl }}/images/icon-share copy-20px.png){: .inline}. Otherwise, the Answer returns to its original state when you exit the page.

## Share your data
If you own a pinboard or answer, you can drill down to the data beneath.
Users you share a pinboard or answer with can also drill down provided they _also_
have access to the data on which the board was based. If you do not have access to a pinboard or answer's underlying data source, you cannot drill down. See [overview of sharing]({{ site.baseurl }}/end-user/data-view/sharing-for-end-users.html) to share your answers, pinboards, or data.
