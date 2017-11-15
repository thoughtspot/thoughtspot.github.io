---
title: [About full embed]
keywords: SAML,security,"active directory",authenticate
last_updated: tbd
summary: "Full embedding enhances our existing external sharing functionality. It allows you to create content in an embedded environment."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can embed the full search experience into an iframe with different navigation views and toggle options. Before you can enable full embed, you need to [enable the JavaScript API \(JS API\)]({{ site.baseurl }}/app-integrate/JSAPI/enable-JS-API.html#) and authenticate to ThoughtSpot.

Embedded content creation gives you the ability to:

-   create answers and pinboards
-   share objects with users
-   upload data and refresh uploaded data
-   relate uploaded data with existing worksheets

You won't be able to:

-   create worksheets, both regular and aggregated.
-   modify profiles.
-   view the Help Center.

## Demo code for sample full embed app \(thoughtspot/blink/app/embed.html\)

```
<!doctype html>
<html lang="en" style="height: 100%; width: 100%">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width">
<meta charset="utf-8">

<title>ThoughtSpot Embed App</title>
<script type="text/javascript" src="api/api.min.js"></script>
<script type="text/javascript">
function updateIframeUrl(id) {
var iframeUrl = "/?embedApp=true#/";
if (id === 'homepage') {
iframeUrl = "/?embedApp=true#/";
} else if (id === 'search') {
iframeUrl = "/?embedApp=true#/answer";
} else if (id === 'answerList') {
iframeUrl = "/?embedApp=true#/answers";
} else if (id === 'pinboardList') {
iframeUrl = "/?embedApp=true#/pinboards";
} else if (id === 'data') {
iframeUrl = "/?embedApp=true#/data/tables";
}
document.getElementById('ts-embed').setAttribute('src', iframeUrl);
}

function onCallback(event) {
console.log(event.data);
}
window.thoughtspot.subscribeToAlerts("http://localhost:8000", onCallback);

</script>
</head>
<body style="height: 100%; width: 100%">
<button onclick="updateIframeUrl('homepage')">Homepage</button>
<button onclick="updateIframeUrl('search')">Search</button>
<button onclick="updateIframeUrl('answerList')">Answer list</button>
<button onclick="updateIframeUrl('pinboardList')">Pinboard list</button>
<button onclick="updateIframeUrl('data')">Data</button>

<iframe id="ts-embed" src="/?embedApp=true#/" height="80%" width="80%"></iframe>
</body>
</html>
```

The function `updateIframeUrl(id)` reflects the logic to change the src URL of the iframe when you click on different navigation buttons.

## Configure ThoughtSpot navigation bar

To hide the primary navigation, configure this:

* Make sure the app is in an `<iframe/>` .
* Set the `embedApp` flag as true. This flag determines if the application is embedded.
* Set the `primaryNavHidden` flag as true (the default). This flag determines navigation
visibility.

If either flag is `false`, the primary navigation will appear.

## Additional notes

Here are some additional notes about the full embed feature:

-   You can call `thoughtspot.<customerURL>.com/#/answer` and use that to access the search functionality.
-   You can call `thoughtspot.<customerURL>.com/#/pinboards` and use that to access saved pinboards.
-   ThoughtSpot can disable error messages within the ThoughtSpot iFrame and provide APIs to you to access those messages, and display them in your UI appropriately. This is done by suppressing error messages in the UI, and passing their details along to window.postMessage function, which your parent app can listen to. Hidden messages can be viewed in the console logs. Contact ThoughtSpot Support if you would like to enable this feature.
-   You can use SAML for authentication against ThoughtSpot within the iFrame.
-   ThoughtSpot can hide the top navigation within the ThoughtSpot app. Contact ThoughtSpot Support to request this modification.
-   ThoughtSpot can hide the expandable left panel that shows data sources and fields within the current data source. Contact ThoughtSpot Support to request this modification.
