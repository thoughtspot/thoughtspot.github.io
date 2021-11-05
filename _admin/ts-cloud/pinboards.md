---
title: [More about Liveboards and answers]
last_updated: 11/04/2021
summary: "Liveboards are the ThoughtSpot term for a dashboard. They group and manage related search result visuals."
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---

## Liveboards

***Liveboards*** act like live dashboards. They are collections of your related Answers, in the form of charts and tables, and your headline metrics.

You can pin charts, tables, and headlines to any Liveboard which you created, and those that have been shared with you with the **Edit** privilege. When you create a Liveboard, you can share it with other people with either the **View** or **Edit** privilege. Liveboards are interactive, allowing you to perform actions like [drilling down]({{ site.baseurl }}/complex-search/drill-down.html) on answers, [filtering]({{ site.baseurl }}/complex-search/pinboard-filters.html), excluding values, and [exploring]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html) answers or headlines.

### Sample Liveboard
This is an example of a Liveboard you might create or view, as a member of a retailer's **Sales** department:

![Sample Liveboard]({{ site.baseurl }}/images/business-user-sample-pinboard.png "Sample Liveboard")

Notice that you can explore any visualization, follow any headline, or perform a number of other actions using the **more options menu** at the top right corner of a visualization ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline}.

### Using filters
You can filter a Liveboard to only see the relevant data. Click the More icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} at the top right corner of the Liveboard, next to the **Follow** and **Share** buttons. Select **Add filters**. Note that you need access to the underlying data source to be able to filter a Liveboard.

Choose a column to filter on, and select values to **include** or **exclude**.

See [Liveboard filters]({{ site.baseurl }}/complex-search/pinboard-filters.html) for more information.

### Getting to insights
You can leverage Liveboards to gain insights into your data in several ways. [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html), ThoughtSpot's AI-guided exploration of answers and headline metrics within Liveboards, provides you with valuable suggestions on how to explore and understand your data. The feature suggests ways to answer questions that are relevant to many other users, and it takes into account your own ThoughtSpot history. Use Answer Explorer to filter an answer or headline, run comparisons, replace items in an answer, or add additional elements to an answer.

Liveboards always have the most current data. If you **follow** a Liveboard or a pinned headline metric, you can schedule regular updates on that Liveboard or pinned headline, and track its changes.

You can also **drill down** on any answer in a Liveboard. See [Drilling down](#drill).

{: id="drill"}
### Drilling down
When you drill down, you can see more information about the data within your search. You can drill down into a datapoint to get a finer grained view of that datapoint and the data behind it. Move easily from a general view of your information to a more specific representation of the data behind a datapoint at a click. For example, in a **revenue by department** search, you may notice that your **clothing** department has the highest revenue. You can drill down on **clothing** by **product name** to find out which products contribute to those high sales. There is no limit to how deep you can drill down.

You can drill down from within the **Answer Explorer** view in a Liveboard. This allows you to use the back button to go back one step at a time, and to see the Answer fill your screen.

### Presenting
Use the **Present** feature to present a Liveboard as a live slideshow with the latest data. You can answer questions instantly during your presentation by editing an answer, drilling down, filtering a visualization, or using Answer Explorer.

To present a Liveboard, click the More icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} at the top right corner of the Liveboard, and select **Present**.

Edit an answer during a presentation by clicking the **edit** ![]({{ site.baseurl }}/images/icon-edit-10px.png){: .inline} icon that appears in the upper right corner when you move your mouse.

### Downloading
You can download a Liveboard as a PDF, or as a [scriptable file]({{ site.baseurl }}/admin/ts-cloud/scriptability.html) for migration to another environment.

To download a Liveboard, click the More icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} at the top right corner of the Liveboard, and select **Download as PDF**. You can download the whole Liveboard, or just certain visualizations.

To export a scriptable file, click the More icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} at the top right corner of the Liveboard, and select **Export TML**. You can export Liveboard and the underlying data source, or worksheet, or just the Liveboard.

{% include note.html content="If you do not see the option to download the Liveboard as a PDF, your company may have removed the Liveboard download option. If you would like to download Liveboards, contact your ThoughtSpot administrator." %}

### Sharing Liveboards and answers
You can share Liveboards and answers with other ThoughtSpot users and groups, and send them a notification email. See the following video for details.

<script src="https://fast.wistia.com/embed/medias/7heqb1ujsx.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_7heqb1ujsx popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

See [Overview of Sharing]({{ site.baseurl }}/end-user/data-view/sharing-for-end-users.html).

{: id="answer"}
## Answers
Answers are saved search results. When you search on your data, your results appear in the form of a table or chart, depending on your search. There are many different types of charts. ThoughtSpot picks the chart type that best fits your search, but you can choose another chart type if you like. When you're done customizing a search result, you can save it as an answer, and pin it to a Liveboard. The answer always contains the latest data.

You can easily change a saved or pinned ***answer*** by customizing it to suit your needs.

### Change Visualizations

- **Change between table and chart** representation by toggling between the table ![chart]({{ site.baseurl }}/images/data-table-icon.png){: .inline} and chart ![chart]({{ site.baseurl }}/images/chart-generic-icon.png){: .inline} elements.
- [**Change chart type**]({{ site.baseurl }}/end-user/search/about-charts.html#choosing-a-chart) by selecting a different visual type from the chart catalog.

### Chart configuration

[**Configure the chart**]({{ site.baseurl }}/end-user/search/change-the-chart.html) by clicking the gear element: ![gear]({{ site.baseurl }}/images/gear-icon.png){: .inline}.

<script src="https://fast.wistia.com/embed/medias/y633w03qzm.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_y633w03qzm popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

* **[Add drag-and-drop chips]({{ site.baseurl }}/end-user/search/drag-and-drop.html)** automatically when adding new elements in search bar. These appear on the chart as "Not visualized", and you can move them into the axis area to visualize.
* **[Improve number formatting]({{ site.baseurl}}/end-user/search/show-data-labels.html#labels-one)** for data labels on the chart marks (bars, bubbles, lines), and on the axes. Can use numbers, percentages, currencies, and specified units, "as is" (auto mode), or change to millions, trillions, and billions (K, M, B). Can easily specify the number of decimal places.
* <strong>Independent control of each measure</strong> in a chart helps you reduce noise by applying labels only where you need it.
* **[Simple time bucketing]({{ site.baseurl }}/complex-search/change-the-view.html#change-the-date-bucketing-grouping)** lets you change granularity of time series.
* **[Intuitive color configuration]({{ site.baseurl }}/end-user/search/change-chart-colors.html)** enables you to quickly change color on the element or in the legend.
* **[Column renaming]({{ site.baseurl }}/end-user/search/column-renaming.html)** for pivot tables and regular chart tables
* **[Wrapping and clipping]({{ site.baseurl }}/end-user/search/about-tables.html#clip-wrap-text)** of text in a table.

## Related information

- [Download a Liveboard as PDF]({{ site.baseurl }}/end-user/pinboards/download-pinboard-pdf.html)
- [Present a Liveboard]({{ site.baseurl }}/end-user/pinboards/start-a-slideshow.html)
- [Liveboard filters]({{ site.baseurl }}/complex-search/pinboard-filters.html)
- [Drill down into your data]({{ site.baseurl }}/complex-search/drill-down.html)
- [Answer Explorer]({{ site.baseurl }}/end-user/pinboards/answer-explorer.html)
