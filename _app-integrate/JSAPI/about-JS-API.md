---
title: [About the JavaScript API]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Use the ThoughtSpot JavaScript API to embed data or visualizations from ThoughtSpot in your own Web portal, application, or page.

## JavaScript API Capabilities

The ThoughtSpot JavaScript API \(JS API\) allows you to use your ThoughtSpot instance within your own Web application. The JS API has methods that allow you to:

-   Authenticate to ThoughtSpot.
-   Embed visualizations from ThoughtSpot in your Web page using iframes.
-   Use the ThoughtSpot REST API to get data from ThoughtSpot and use it in your Web page.

To use the JS API in your Web page, you must have the access and permissions to update the code of the Web page.

## Browser Support

The JS API works in the following browsers:

|Browser|Versions|
|-------|--------|
|Internet Explorer|11|
|Firefox|38 or later|
|Google Chrome|47 or later|
|Safari|9 or later|

**Internet Explorer 10**

Microsoft introduced a compatibility mode in Internet Explorer 10, which displays your page using the version of Internet Explorer that is most compatible with the current page. Since we do not support any version below 11, this feature can sometimes break the code. There are two ways to force the emulation of Internet Explorer to the most up to date version:

-   Add a Custom Response Header

    This is the recommended approach since it is more robust, offers more control, and has a lower risk of introducing a bug to your code. The header name should be set to "X-UA-Compatible" and the value should be set to "IE=Edge". The response header should be based on the server it is set on and the technology being used.

-   Add a Meta Tag

    The following meta tag should be added to your header: `<meta http-equiv="X-UA-Compatible" content="IE=Edge" \>`. This tag must be the first tag in the header section of the page.


## Cross-Origin HTTP Requests

Because you'll be making a call from your own Web page, portal, or application to ThoughtSpot, which has a different domain, you'll need to enable cross-origin HTTP requests. This controls what domains are allowed to use this code to authorize users and prevents other people from copying your code and running it on their site. For example, if your Web site is hosted on the domain example.com, you would need to set the following origin for your client ID: http://example.com. If you want to test your code locally, you'll also need to add the origin for your local server as well, for example: http://localhost:8080.
