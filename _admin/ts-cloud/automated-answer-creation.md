---
title: [Create answers in Setup]
last_updated: 12/14/2021
summary: "Use the auto-answer creation feature to experiment with creating an answer from a search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To simplify data modeling, ThoughtSpot supports automated answer creation during Setup, allowing you to create and save Search visualizations for future use. When creating answers through Setup, you can view suggested answers for the measures, attributes and dates you select, and make changes to the auto-created answers before you save them.

## Create answers in Setup

To see suggested Search visualizations in Setup, follow these steps:

1. Enter Setup by logging in for the first time, or by selecting **Profile** from the user icon at the top right of the screen and clicking **Revisit onboarding experience** under **Preferences**.

2. Proceed to Step 1 of Analyst Setup by choosing the analyst data tile. <br/>
 **I want to: set up data connections, define relationships, and create worksheets to help my team search and analyze data**.

2. Complete Step 1 of Setup, [setting up your connection]({{ site.baseurl }}/admin/ts-cloud/connect-data.html).

3. Complete Step 2 of Setup, [Model data and create a worksheet]({{ site.baseurl }}/admin/ts-cloud/worksheet-create-setup.html). Proceed to **Search and visualize**.

4. The **Select columns from worksheet** interface appears. Choose at least one measure and attribute from your data. We recommend you select multiple columns to generate more possible answers.<br/>
 {% include note.html content="If your data contains date information, you must select a date column as well as measure and attribute columns in order to generate your answers."%}

5. A list of your potential answers appears. To view each answer as a chart, click the answer title.

6. [Optional] Modify the selected answer by entering filters in the search bar and clicking **Go**. To save a modified answer, select **Save**.

7. Select **Go to setup checklist** from the top left corner of the screen to exit Setup. To save all auto-created answers, choose **Save answers and exit** from the window that appears.

8. To view the list of answers created from Setup, select **view answers** from the Setup tab, or select **Answers** from the navigation bar.


## Working with answers

<script src="https://fast.wistia.com/embed/medias/i8smdu5gws.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_i8smdu5gws popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

***Next steps:*** proceed to [Compose Liveboards from answers]({{ site.baseurl }}/admin/ts-cloud/pinboard-compose.html).
