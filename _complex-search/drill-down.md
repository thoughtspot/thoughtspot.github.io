---
title: [Drill down into your data]
last_updated: 1/10/2020
summary: "Drill down into the Answers ThoughtSpot delivers to gain deeper insights into the many layers of your data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you drill down, you see more information about the columns within
your search. If you own a pinboard or answer, you can drill down to the data beneath.
Users you share a pinboard or answer with can also drill down provided they _also_
have access to the data on which the board was based. See [overview of sharing]({{ site.baseurl }}/end-user/data-view/sharing-for-end-users.html) to share your answers, pinboards, or data.

You can drill down from both tables and visualizations. Select a column to drill down on, or a particular point. You can drill down from an answer, from an answer within a pinboard, or using the [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) feature, which provides AI-guided exploration of an answer within a pinboard. To drill down:

1. Right-click the column or data point of interest in your answer, and select **Drill down**. This limits the data you are exploring to that particular data point or column.
    {% include image.html file="drilldown-table.png" title="Drill down from a data point" alt="You can drill down from just one data point, in either table or visualization mode." caption="Drill down from a data point" %}
    {% include image.html file="drilldown-chart.png" title="Drill down from a column" alt="You can drill down from a column in your data, in either table or visualization mode." caption="Drill down from a column" %}

2. A list of dimensions you can drill down on appears. You can only drill down on dimensions, not on measures. Click any of the options to sort your data.

    {% include image.html file="drilldown-diettype.png" title="Drill down options" alt="A list of dimensions, or column names, that you can drill down on appears. Select one to drill down." caption="Drill down options" %}

    For example, if you choose to drill down on *dairy* by *diet type*, this chart appears, showing dairy sales by diet type:

    {% include image.html file="drilldown-example.png" title="Dairy sales by diet type" alt="Drill down on the dairy column and select diet type to see a chart showing dairy sales by diet type" caption="Dairy sales by diet type" %}

    You can continue to drill down to the lowest granularity possible.

## Drill down within a pinboard
When you drill down on an Answer from within a pinboard, it works similarly to drilling down from the Answer itself. You cannot go back one step at a time, but you can reset the Answer when you finish drilling down. To return to the original answer, click the blue reset icon ![]({{ site.baseurl }}/images/icon-drill-down-20px.png){: .inline} at the bottom right corner of the Answer.

## Drill down with Answer Explorer
You can also drill down from within the [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) feature. Answer Explorer provides AI-guided exploration of an answer from within a pinboard. When you drill down normally, you cannot go back one step if you want to see an earlier version of your visualization. You have to delete filters from the search bar, or start your search again. If you drill down with Answer Explorer, you can use the *go back one step* feature.

As you drill down on an answer using Answer Explorer, use the back button ![]({{ site.baseurl }}/images/icon-arrow-left-20px.png){: .inline} to go back one step at a time. Use the reset button![]({{ site.baseurl }}/images/icon-reset-20px.png){: .inline} to go back to the original answer.

If you want to be able to go back one step while drilling down, [add your answer to a pinboard]({{ site.baseurl }}/end-user/pinboards/about-pinboards.html#add-an-answer-to-a-pinboard) so you can use Answer Explorer.

## Save your new answer
When you find a valuable insight using Drill down, you may want to save that Answer instead of trying to recreate it in the **Search** bar later. Click the ellipsis icon ![]({{ site.baseurl }}/images/icon-more-20px.png){: .inline}. Select **copy and edit** to save your new Answer within ThoughtSpot and continue working with it, or select **Download** to download an image of your current visualization. You can also [share the Answer]({{ site.baseurl }}/end-user/pinboards/share-answers.html) by clicking the sharing icon ![]({{ site.baseurl }}/images/icon-share copy-20px.png){: .inline}. Otherwise, when you exit the page, the Answer returns to its original state.
