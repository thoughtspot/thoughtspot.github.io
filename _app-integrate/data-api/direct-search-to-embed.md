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

Data retrieved using the Direct Search-to-Embed API is returned as JSON (JavaScript Object Notation). You will need to parse the JSON to get the data values you need, generally using JavaScript in the receiving application.

Use this procedure to construct the call to the Direct Search-to-Embed API:

1. [Enable the JavaScript API (JS API)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) on the receiving page of the target application.

2. [Authenticate to ThoughtSpot]({{ site.baseurl }}/app-integrate/JSAPI/about-JS-API.html#) on the receiving page of the target application.

3. Select an object (such as a search bar or dropdown list) in the web page from which you want to initiate the search from your third party application. When the desired action is triggered, you'll pass the search string to the data push function in the ThoughtSpot API.

4. Construct the call to the data push function, passing in the search terms.

5. Now when a user initiates the action, their search is submitted to ThoughtSpot.

6. The search results will arrive formatted at JSON. So you'll need to create functions on your application to parse the search results and display them or initiate some action within your application.
