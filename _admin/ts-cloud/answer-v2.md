---
title: [Answer V2 feature set]
summary: Answer V2 <span class="label label-beta">Beta</span> is a feature set that makes the experience of searching on data or viewing and interacting with Answers more powerful and intuititive. The Answer V2 feature set includes an improved Formula Editor, table summary configuration, and improved conditional formatting for charts, tables, and table summaries.
last_updated: 1/20/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Overview

Answer V2 is in **Beta**. This feature set is part of ThoughtSpot's move to a new stack. It is off by default for ThoughtSpot Cloud clusters. To turn it on or off at a cluster level, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html). If an administrator enables it for your cluster, you can turn it on or off [individually](#toggle-on-off) from the **Data** panel on the **Search** page. The Answer V2 feature set contains the following features:

{: id="answer-v2-features"}
* [Improved Formula Editor]({{ site.baseurl }}/complex-search/how-to-add-formula.html)
* [Table configuration]({{ site.baseurl }}/end-user/search/about-tables.html): conditional and number formatting for table summaries, improved conditional formatting for attributes and measures in table cells
* [Chart configuration]({{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#conditional-formatting-table): improved conditional formatting for measures in charts

{: id="toggle-on-off"}
## Turn Answer V2 on or off
You can turn the Answer V2 experience on or off individually from the **Data** panel on the **Search** page.

Answer V2 is off by default for ThoughtSpot Cloud clusters. To turn it on, follow these steps:

1. Select **Search** from the top navigation bar.

2. In the **Data** panel, select **Try Beta experience**. Click **Confirm**.

    ![Answer V2 -- try beta experience]({{ site.baseurl }}/images/answer-v2-turn-on.png " Answer V2 -- try beta experience")

    If the Data panel is not visible, expand it by clicking on the Data icon in the top right corner, under the ThoughtSpot logo.

You can turn the Answer V2 feature set back off from the Data panel under **Search**, by selecting **Switch to classic**.

To turn it on or off at a cluster level, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

## Behavior of Answer V2 features
This feature set is the first part of ThoughtSpot's move to a new stack. The new stack is still in progress, which has several implications for the behavior of [Answer V2 features](#answer-v2-features):

1. Answer V2 features currently only work on searches and Answers, on the **Search** page and on the **Answers** page. For example, if you perform conditional formatting on a table summary from the saved Answer, and then pin the summary to a Pinboard, you see the conditional formatting on the summary in the saved Answer, but ***not*** in the Pinboard. Similarly, the new version of the Formula Editor appears when you add a formula to a search, but not when you add a formula to a Worksheet.

2. [Answer V2 limitations](#limitations) only exist for searches and Answers, on the **Search** page and on the **Answers** page. For example, if you have an existing Pivot table or Sankey chart in a Pinboard, the visualization is still visible in the Pinboard, but you cannot create a new Pivot table or Sankey chart.

{: id="limitations"}
## Limitations
The following features are not available in the Beta version of Answer V2. If you would like your company to be able to use these features, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html) to turn Answer V2 off for your company. Alternatively, you can turn it on or off individually from the **Data** panel on the **Search** page.

* [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html)
* [R scripts]({{ site.baseurl }}/end-user/r-scripts/about-r-in-thoughtspot.html)
* [Query visualizer]({{ site.baseurl }}/end-user/search/about-attributes-and-measures.html#query-details)
* [Pivot tables]({{ site.baseurl }}/complex-search/about-pivoting-a-table.html)
* [Sankey charts]({{ site.baseurl }}/end-user/search/about-sankey-charts.html)
