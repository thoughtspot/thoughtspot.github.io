---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About the REST API

The purpose of the REST API is to get data out of ThoughtSpot so you can use it in a Web page, portal, or application. When using the REST API, authentication is achieved through SAML.

After authentication, use the POST method to call a URL for the desired visualization or pinboard. A JSON \(JavaScript Object Notation\) representation of the data will be returned.

## Authentication

Before you can use the REST API, you must authenticate to ThoughtSpot using SAML with the [JavaScript API](../JS_API/about_JS_API.html#).

## Cross Domain Verification

You'll need to enable cross domain verification when using the REST API. This protects your data, so that another website cannot use a URL to get data from ThoughtSpot. The procedure for [enabling the JavaScript API](../JS_API/enable_JS_API.html#) includes information on how to enable this.

## REST API Capabilities

Use a POST method to access the URL, which calls the REST API. The data is returned as a JSON string. When using this method, you'll need to extract the data from the JSON file and render it on your Web page, portal, or application.

You can use the REST API to do things like:

-   Generate dynamic picklists on your Web page.
-   Display a single value.
-   Retrieve the data to populate a visualization drawn by your own renderer.

Remember that the data you retrieve from ThoughtSpot is live data, so whenever the Web page is rendered, the current value\(s\) will be shown.

## Public API reference

You can find more information on our public APIs in the [Reference guide](../reference/public_api_reference.html#).

-   **[Calling the REST API](../../application_integration/data_api/calling_rest_api.html)**  
To call the REST API, you'll specify a URL using the POST method, passing the ID numbers of the objects from which you want to obtain data.
-   **[Use the REST API to get data](../../application_integration/data_api/use_data_api_read.html)**  
This procedure shows how to use the REST API to get data out of ThoughtSpot, so you can use it in a Web page, portal, or application. The data will be returned as JSON \(JavaScript Object Notation\).

