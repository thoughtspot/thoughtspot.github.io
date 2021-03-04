---
title: [Get started with Visual Embed SDK]
last_updated: 3/3/2021
summary: "Import the Visual Embed SDK and get started with embedding ThoughtSpot in your application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot Visual Embed SDK is a JavaScript library that enables you to embed ThoughtSpot components in web pages. The library provides modular packages for embedding ThoughtSpot functions such as search, visualizations, pinboards, and the full ThoughtSpot application.

This section lists the tasks you need to complete before embedding ThoughtSpot content in your applications.

## Prerequisites

-   Verify if the ThoughtSpot admin has enabled the authentication service.

    ThoughtSpot supports SAML SSO and trusted authentication services.

-   Verify if CORS is enabled.

-   Verify if the same-site cookie setting is set to `none`.

-   Verify if your host application domain is whitelisted for CORS and CSP.

-   If you want to rebrand and white-label the embedded content or add custom actions to the embedded visualizations, you will require access to SpotDev. Make sure you have administrator or developer privileges to access the **Customizations** menu in the **SpotDev** tab.

## Prepare your project environment

The Visual Embed SDK is available for installation as a Node Package Manager (NPM) package.

If NPM is not installed, [install NPM](https://www.npmjs.com/get-npm){:target="_blank"}.

## Install the Visual Embed SDK

The latest version of the Visual Embed SDK is available at [https://www.npmjs.com/package/@thoughtspot/embed-sdk](https://www.npmjs.com/package/@thoughtspot/embed-sdk){:target="_blank"}.

To install the SDK, run the following command at the command line:

``` shell
npm install @thoughtspot/embed-sdk
```

## Import the JavaScript library

In your .html page, include the JavaScript file in the `<script>` tag under `<head>`:

``` html
<script type="text/javascript" src="<file-location>/<file-name>.js"></script>
```

## Import the embed package

Based on integration requirements, import any of the following embed packages and build your code.

-   [SearchEmbed]({{ site.baseurl }}/admin/ts-cloud/embed-search.html)

-   [PinboardEmbed]({{ site.baseurl }}/admin/ts-cloud/embed-pinboard-sdk.html)

-   [AppEmbed]({{ site.baseurl }}/admin/ts-cloud/full-app-embed.html)
