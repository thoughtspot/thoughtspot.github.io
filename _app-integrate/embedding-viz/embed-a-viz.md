---
title: [Embed pinboard or visualization]
keywords: embedd,sample,client,example
last_updated: tbd
sidebar: mydoc_sidebar
toc: true
permalink: /:collection/:path.html
---
The page explains, through an example, how to embed a visualization (table or
chart) or pinboard from ThoughtSpot in your own static Web page, portal, or
application. To build this sample, you need to have access to a text editor and
a ThoughtSpot instance with a visualization. You should also have some
experience working with Javascript.

## Get the link for an entire pinboard or single visualization

This procedure assumes the pinboard with the visualization you want to embed
already exists. If the pinboard or visualization doesn't exist, create it now
before continuing.

1. Log in to ThoughtSpot from a browser.
2. Navigate to a visualization on the **Pinboard** tab.
3. Open a pinboard.
3. Copy the URL for the entire pinboard and for a single visualization.

   If the object is a pinboard, click **Actions > Copy Link**.

   ![]({{ site.baseurl }}/images/embed-link-1.png "Pinboard Link")

   The format for the link is:  `<protocol>:<host>:<port>/#/embed/viz/<pinboardID>`

   For a vizualization in a pinboard, click **Actions > Copy Link**.

   ![]({{ site.baseurl }}/images/embed-link-2.png "Visualization Link")

   The format for the link is:  `<protocol>:<host>:<port>/#/embed/viz/<pinboardID>/<vizualizationId>`

## Edit the test.html

You need to edit the page in your application or web page where you want to
embed a ThoughtSpot pinboard or visualization. For this example, you'll edit an
<a href="{{"/download/test.html" | prepend: site.baseurl }}" target="_blank"><code>test.html</code></a>  file.

1. Create an empty directory called `test`.
2. Save the `test.html` file to the `test` directory.
3. Download <a href="{{"/release/downloads.html" | prepend: site.baseurl }}" target="_blank">Download</a> the ThoughtSpot JavaScript library.
4. Place the Javascript library in an `api` directory co-located with the `index.html` file.
5. Edit the `test.html` file in your favorite editor.
6. Scroll down to the `Variables` section (about linke 37).

    ```JavaScript
    var protocol = "THOUGHSPOT_PROTOCOL"; // The protocol that appears in the pinboard/visualization link
    var hostPort = "HOST_PORT";   // Hostport info for ThoughtSpot app. Ex: <host>:<port> or <host>

    // Use Actions > Copy link from a pinboard or a visualization in a pinboard to get a link for embedding
    var pinboardId = "PINBOARD_ID"; // A pinboard ID to embed. <protocol>:<host>:<port>/#/embed/viz/<pinboardID>
    var vizualizationId = "VIZUALIZATON_ID"; // A visualization ID to embed. <protocol>:<host>:<port>/#/embed/viz/<pinboardID>/<vizualizationId>
    ```
7. Edit each variable in the section and replace it with the IDs you copied from the pinboard.

   For example, your URL may look similar to the following:

    `http://172.18.202.35:8088/#/embed/viz/061457a2-27bc-43a9-9754-0cd873691bf0/9985fccf-b28d-4262-b54b-29619a38348e`

    This is a link copied from an individual visualization, the format is:

    `<protocol>:<host>:<port>/#/embed/viz/<pinboardID>/<vizualizationId>`

    The protocol (`http` or `https`) of your client and your ThoughtSpot instance
    should match. You'll use this identifier in the next part.

7. Save your changes and close the file.


## Enable CORS on your ThoughtSpot instance

You must work with ThoughtSpot support to enable CORS on your ThoughtSpot
instance. If you don't do this, you will receive an error message when
`test.html` attempts to load the embedded objects.


## Test the example page

You are almost ready to view your embedded pinboard and visualization. The fastest way to run a webserver and test the code is using Python's `simplehttpserver`.  If you have Python on your system you already have the `simplehttpserver`. You can also just copy the `test` directory to an existing web server.

1. Log into ThoughtSpot.

   In production, you would have added authentication code to your client. You
   haven't done that with this system. So, before you test, you'll login to the
   ThoughtSpot. Successfully logging in causes the system to create a session
   and an authentication key. Your browser has this information and so when you
   load the `test.html` page in another tab, you won't need to authenticate
   again.

2. Change to your `test` directory.
3. Start the `simplehttpserver` web server.

    ```
     python -m SimpleHTTPServer 8000
    ```

4. Open your browser's **Developer** tools.

5. Navigate to the test page in your browser.

    http://localhost:8000/test.html

    You should see something similar to the following:

    ![]({{ site.baseurl }}/images/embed-3.png "Working embedded")

6. Check the console.

    Success is appears in the console with a message similar to this:

    ```
    test.html:60 Initialization successful.
    test.html:113 http://172.18.202.35:8088/#/embed/viz/061457a2-27bc-43a9-9754-0cd873691bf0
    test.html:129 http://172.18.202.35:8088/#/embed/viz/061457a2-27bc-43a9-9754-0cd873691bf0/9985fccf-b28d-4262-b54b-29619a38348e
    ```

## Troubleshooting embeds

If your embeds don't load, open the developer tools on your browser.  Look for
errors in the page loading, usually on the **Console** tab. If you see an error
similar to:

```
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Typically you see this if the cross domain (CORS) setting was not completed correctly on
your ThoughtSpot cluster. Contact <a
href="mailto:support@thoughtspot.com">support@thoughtspot.com</a> for more help.
