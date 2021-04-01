---
title: [New Answer experience]
summary: Learn about ThoughtSpot's new Answer experience, and how to enable it.
last_updated: 4/1/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Overview

The new Answer experience contains multiple new features and feature enhancements. It is part of ThoughtSpot's move to a new stack. It is on by default for ThoughtSpot Cloud clusters. You can turn it on or off [individually](#toggle-on-off) from your profile, in the **Experience manager** at the bottom of your profile. The new Answer experience contains the following features:

{: id="new-features"}
* [Improved Formula Editor]({{ site.baseurl }}/complex-search/how-to-add-formula.html)
* [Table configuration]({{ site.baseurl }}/end-user/search/about-tables.html): improved conditional formatting for attributes and measures in table cells, settings for content density and table theme (outline, row, or zebra)
* [Chart configuration]({{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#conditional-formatting-table): improved conditional formatting for measures in charts
* [Back button](ADD LINK): go back 1 step each time you make a change in an Answer (for example, when you add a new column to the search, drill down, or sort)
* [Table column summaries]({{ site.baseurl }}/end-user/search/about-tables.html#ADD ANCHOR): conditional and number formatting for table column summaries. No client-side summaries (headlines). Instead, you can pin the column summaries to Pinboards as headlines. Column summaries are aligned with their respective columns and are part of the table, although you can configure their number and conditional formatting separately.
* [Multiple join path resolution](ADD RELEASE NOTE LINK): when you try to search on columns with no defined join path, or more than one possible join path, the system now prompts you to resolve this issue and avoid confusion or incorrect data by creating a Worksheet with the correct join path

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

{: id="limitations"}
## Limitations
The following features are not available in the Beta version of Answer V2. If you would like your company to be able to use these features, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html) to turn Answer V2 off for your company. Alternatively, you can turn it on or off individually from the **Data** panel on the **Search** page.

* [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html)
* [Query visualizer]({{ site.baseurl }}/end-user/search/about-attributes-and-measures.html#query-details)
* **Send feedback**: The option to send product feedback, from the more options menu ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} on an Answer or search
* [Replay search]({{ site.baseurl }}/end-user/search/replay-search.html)
