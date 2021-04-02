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
* [Table column summaries]({{ site.baseurl }}/end-user/search/about-tables.html#ADD ANCHOR): Conditional and number formatting for table column summaries. No client-side summaries (headlines). Instead, you can pin the column summaries to Pinboards as headlines. Column summaries are aligned with their respective columns and are part of the table, although you can configure their number and conditional formatting separately.
* [Improved Formula Editor]({{ site.baseurl }}/complex-search/how-to-add-formula.html): The new formula editor is bigger, allows new lines, and contains integrated help.
* [Table configuration]({{ site.baseurl }}/end-user/search/about-tables.html): Conditional formatting is now part of the **Table configuration** panel instead of being a separate modal. Conditional formatting for attributes is now available for tables. You can now set the content density and theme (outline, row, or zebra) of your table.
* [Chart configuration]({{ site.baseurl }}/end-user/search/apply-conditional-formatting.html#conditional-formatting-table): Conditional formatting for chart measures is now part of the **Chart configuration** panel instead of being a separate modal.
* [Back button](ADD LINK): Go back 1 step each time you make a change in an Answer (for example, when you add a new column to the search, drill down, or sort).
* [SpotIQ analyze]({{ site.baseurl }}/spotiq/customization.html): Cleaner, more intuitive UI for SpotIQ analyze of Answer data points, surfacing the most useful workflows and allowing advanced customization.

{: id="toggle-on-off"}
## Turn the new Answer experience on or off
The new Answer experience is on by default. You can turn it on or off individually from your profile.

To turn the new Answer experience on or off, follow these steps:

1. Navigate to your profile: select the **Profile** icon at the top right of your screen, and select **Profile**.

2. Scroll down to the **Experience manager**.

3. To turn the new Answer experience on, select **New experience**. To turn it off, select **Classic experience**.

    ![Toggle new answer experience on or off]({{ site.baseurl }}/images/new-answer-experience-toggle.png "Toggle new answer experience on or off")

## Behavior of new Answer experience features
The new Answer experience is the first part of ThoughtSpot's move to a new stack. The new stack is still in progress, which has implications for the behavior of [new Answer experience features](#new-features). Some of these new features currently only work on searches and Answers, on the **Search** page and on the **Answers** page. For example, you may notice that the SpotIQ Analyze modal looks different when you analyze a data point from a Pinboard visualization rather than from an Answer or search. The following new features only work on searches and Answers:

- New SpotIQ analyze modal. On the Pinboards page, you see the old modal.

{: id="limitations"}
## Limitations
The following features are not available with the new Answer experience. If you would like your company to be able to use these features, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html) to turn the new Answer experience off for your company. Alternatively, you can turn it on or off individually from your profile.

* [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html)
* **Send feedback**: The option to send product feedback, from the more options menu ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} on an Answer or search
* [Replay search]({{ site.baseurl }}/end-user/search/replay-search.html)
* [Learn how to use ThoughtSpot Pinboard]({{ site.baseurl }}/admin/system-monitor/monitor-pinboards.html)
* [Multiple join path resolution within a search](ADD RELEASE NOTE LINK): when you try to search on columns with no defined join path, or more than one possible join path, the system no longer allows you to define the join path within the search. Instead, the system now prompts you to resolve this issue and avoid confusion or incorrect data by creating a Worksheet with the correct join path
