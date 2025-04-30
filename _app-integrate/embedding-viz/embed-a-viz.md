---
title: [Embed a visualization]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Embedding allows you to include a visualization \(table or chart\) or pinboard from ThoughtSpot in your own static Web page, Web portal, or application. Before you can embed a visualization, you need to [enable the JavaScript API \(JS API\)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) and authenticate to ThoughtSpot.

Use this procedure to construct the URL you will use to embed a visualization:

1. Log in to ThoughtSpot from a browser.
2. Navigate to the pinboard from which you want to get data.
  If it doesn't exist yet, create it now.
3. Find the link for the object you want to get the data from.
   If the object is:
    -   A pinboard, click **Actions** and select **Copy Link**.

        ![]({{ site.baseurl }}/images/copy_pinboard_link.png "The Actions menu")

    -   A visualization, click the **Copy Link** icon in the upper right corner of the table or chart.

        ![]({{ site.baseurl }}/images/copy_link.png "Copy link")

4. Copy the link shown, and paste it into the iframe in your Web page, Web portal, or application.
