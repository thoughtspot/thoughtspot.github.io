---
title: [Embed pinboard or visualization]
keywords: embed,sample,client,example
last_updated: tbd
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---

Visualizations and pinboards are embeddable as IFRAMEs and can be placed inside webpages and shared to authorized viewers. The embed URL also supports parameters that filter the visualization data.



1. Navigate to a pinboard within ThoughtSpot.
2. To embed a pinboard, click **Actions** > **Copy Link**, or to embed a visualization, click **Copy Link** in the vertical ellipsis menu next to the visualization.

   ![Embed a pinboard via "Copy Link" in the action menu](https://docs.thoughtspot.com/4.4/images/embed-link-1.png "Embed a pinboard via the action menu"){: style="max-width:300px"} ![Embed a visualization via "Copy Link" in the vertical ellipsis menu](https://docs.thoughtspot.com/4.5/images/spotiq-where-customize.png "Embed a visualization via "Copy Link" in the vertical ellipsis menu"){: style="max-width:300px"}
3. In the modal window that pops up, copy the URL.
4. Use the URL as the source for an IFRAME, setting the width and height attributes as desired. For example:

   `<iframe src="[https://thoughtspothost/viz/GUID](https://thoughtspothost/viz/GUID)" width="800" height="800"></code>`

{% include_relative _authorization_and_filters.md %}
