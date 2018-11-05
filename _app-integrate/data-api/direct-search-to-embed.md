---
title: [Use the Direct Search-to-Embed API to pull data from ThoughtSpot]
keywords: REST,API,data,direct,pull
last_updated: 11/4/2018
summary: "This procedure shows how to use the Direct Search-to-Embed API to get data from ThoughtSpot"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The Direct Search-to-Embed API enables searching directly from an external application or web page to pull data from ThoughtSpot. This feature was introduced in ThoughtSpot 5.0. When using it, you can access data stored in ThoughtSpot directly. You do not need to save a search result to a pinboard and then reference it using the visualization's URL.

This direct to search embedding is useful when you want to allow an application to pull data directly from ThoughtSpot in an ad hoc fashion, but you do not want to embed the entire ThoughtSpot application.

To have the direct to search embedding functionality turned on, contact ThoughtSpot Support.

Data retrieved using the Direct Search-to-Embed API is returned as JSON (JavaScript Object Notation).

Before you can use the Direct Search-to-Embed API, you need to [enable the JavaScript API (JS API)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) and [authenticate to ThoughtSpot]({{ site.baseurl }}/app-integrate/JSAPI/about-JS-API.html#).

Use this procedure to construct the call to the Direct Search-to-Embed API:


REPLACE THE BELOW!!!






1. Log in to ThoughtSpot from a browser.

2. Navigate to the pinboard from which you want to get data. If it doesn't exist yet, create it now.

5. Construct the URL as follows: For a pinboard, the URL takes the form:

    ```
    https://<thoughtspot_server>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard_id>
    ```

    For a visualization, the URL takes the form:

    ```
    https://<thoughtspot_server>/callosum/v1/tspublic/v1/pinboarddata?id=<pinboard_id>&vizid=%5B<visualization_id>%5D
    ```

6. If you want to apply any filters to the data that will be returned, apply [Runtime Filters]({{ site.baseurl }}/app-integrate/runtime-filters/about-runtime-filters.html#).

7. Now your URL is complete, and you can use it to access the data directly via the HTTP POST method.
  The REST API returns the data formatted as JSON.

8. Retrieve the data from the JSON and display it in your Web page, Web portal, or application.
