---
title: [Embed data using REST APIs]
last_updated: 3/3/2021
summary: "You can use the REST APIs to programmatically fetch pinboard and visualization data from the ThoughtSpot application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To get data out from ThoughtSpot objects and embed it in a web page, portal, or application, you can use the data APIs. The data APIs return data as JSON (JavaScript Object Notation) objects.

## Embed pinboard or visualization data

To embed a pinboard or visualization, construct the URL for the REST API call:

1.  Log in to ThoughtSpot from a browser.

2.  Navigate to the pinboard from which you want to get data.

3.  Find the ID number of the object from which you want to fetch data.

    To embed a pinboard, click the ellipses icon![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png), and then select **Copy embed link**.

    To embed a visualization:

      1.  Navigate to the table or chart

      2.  Click the ellipses icon![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png) in the upper right corner of the table or chart.

      3.  Click **Copy embed link** icon.

4.  Copy the ID number from the link.
    Paste it somewhere so that you can use it later to construct the URL for the REST API call.

    If the object is a pinboard, copy the identifier that appears after `viz/`.

    ![copy link pinboard]({{ site.baseurl }}/images/copy_link_pinboard.png)

    For visualizations (table or chart), copy the IDs that appear after `viz/`.

    ![copy link viz pinboard part](./images/copy_link_viz_pinboard_part.png)

5.  Construct the URL.

    For a pinboard, the URL is as follows:

        https://<base-uri>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard_id>

    For a visualization, the URL is as follows:

        https://<base-uri>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard_id>&vizid=%5B<visualization_id>%5D

6.  To apply filters to the data, use runtime filters.

    For example, to sort values equal to `red` in the `Color` column for a visualization in a pinboard, you can pass the runtime filter in the URL query parameters as shown here:

        http://<base-uri>/callosum/v1/tspublic/v1/pinboarddata
        ?id=<pinboard_id>&vizid=%5B<visualization_id>%5D
        &col1=color&op1=EQ&val1=red

7.  After you construct the URL, send a POST request to get data from ThoughtSpot.

    The Data REST API returns the data formatted as JSON.

8.  Retrieve the data from the JSON and embed it in your Web page, Web portal, or application.
