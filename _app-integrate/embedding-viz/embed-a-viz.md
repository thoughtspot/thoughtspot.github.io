---
title: [Embed a visualization]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Embedding allows you to include a visualization (table or chart) or pinboard
from ThoughtSpot in your own static Web page, Web portal, or application. Before
you can embed a visualization, you need to [enable the JavaScript API (JS
API)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) and
authenticate to ThoughtSpot.

The content on this page walks you through the process of creating an HTML page
with an embedded visualization. To build this sample, you need to have access to
a text editor and a ThoughtSpot instance with a visualization. You should also
have some experience working with Javascript.

## Get the link for a pinboard or visualization

This procedure assumes the pinboard or visualization you want already exists. If
it doesn't, create it now before continuing.

1. Log in to ThoughtSpot from a browser.
2. Navigate to a visualization on the **Answers** tab.
3. Copy the URL for the visualization or pinboard you want to embedd.

   If the object is a pinboard, click **Actions** and select **Copy Link**. For
   an individual answer, use the URL of the answer itself, for example:
   `https://THOUGHTSPOT_INSTANCE/#/saved-answer/b42128d4-ddef-4336-bb6d-59dd3887a447`.

4. Locate the visualizations ID (identifier).

   In this example, the `b42128d4-ddef-4336-bb6d-59dd3887a447` is the visualizations ID (identifier)

You'll use this identifier in the next part.

## Edit the index.html

You need to edit the page in your application or web page where you want to
embed a ThoughtSpot pinboard or visualization. For this example, you'll edit an
`index.html` file.

1. Create an empty directory called `test`.
2. Save the `index.html` file to the `test` directory.
3. Download <a href="{{"/release/downloads.html" | prepend: site.baseurl }}" target="_blank">Download</a> the ThoughtSpot JavaScript library.
4. Place the Javascript library in an `api` directory co-located with the `index.html` file.
5. Edit the `index.html` file in your favorite editor.

   ```HTML
   ```
6.
