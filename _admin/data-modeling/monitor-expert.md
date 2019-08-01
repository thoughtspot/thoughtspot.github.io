---
title: ["Monitor expert requests"]
keywords: searchiq,expert,ask an expert
tags: [expert,SearchIQ]
last_updated: 08/01/2019
summary: "You can check the status of **Ask and Expert** requests, both as a requestor and as an expert."
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---

Within ThoughtSpot, use these steps to monitor user expert requests.

1. In the top right corner, click the **?** (help) menu.
2. In the drop-down, select **Expert Requests**.
image.png
In the Expert interface, there are options for both "I am Requester" and "I am Expert" flows.
Note that the requests are categorized into All, Resolved, and Unresolved.
image.png
Q2.  EMAIL necessary for notifications. Also,
Same interface, on the I am Expert tab.
image.png
If your users occasionally struggle to answer a specific question, build a chart you have in mind, or find something in your data, you can enable **Ask an expert**. This lets them request help from someone in your organization.

The request goes to the person in your company who knows the data source very well, and how to search it in ThoughtSpot. When the request is answered, the user will be able to see the result in the **Answers** listing in ThoughtSpot.

You can see how an end user experiences **Ask an expert** [here]({{ site.baseurl }}/end-user/search/ask-an-expert.html).

## Add an expert to a data source

Adding an expert is what enables **Ask an expert** to work in your ThoughtSpot instance. Until you do these steps, users won't see the prompt to **Ask an expert** when using that data source.

To add an expert to a data source:

1. Let the expert(s) know that to expect user questions through email.
   If your expert(s) don't have an email in ThoughtSpot, they must [check in ThoughtSpot for requested answers]({{ site.baseurl }}/end-user/search/answer-expert-question.html).

2. Click on the name of the worksheet or table from the **Data** page.

3. Click the ellipsis (three dot) icon in the upper right side of the page and select **Manage experts**.

4. Make your selections and click **Save**.

## Related information  

- [Model the data for searching](semantic-modeling.html#)
- [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html)
