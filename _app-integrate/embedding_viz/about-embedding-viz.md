---
title: [About Embedding]
tags:
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Embedding allows you to display a pinboard from ThoughtSpot on your own Web page, Web portal, or application. You can also enable full embedding, which allows you to create content in an embedded environment. When using Embedding, authentication is achieved through SAML.

After authentication, a URL is provided to call the desired visualization and populate it into an iframe.

When using this method, the visualization is rendered within an iframe on your Web page, portal, or application.

## Authentication

Before you can embed a visualization, you must authenticate to ThoughtSpot using SAML with the [JavaScript API](../JSAPI/about-JS-API.html#).

## Cross Domain Verification

When using Embedding, you will use cross domain verification. This protects your data, so that another website cannot use the same URL to embed the visualization in its own Web pages. The procedure for [enabling the JavaScript API](../JSAPI/enable-JS-API.html#) authentication includes information on how to enable this.
