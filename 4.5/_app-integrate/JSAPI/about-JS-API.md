---
title: [Using the JavaScript API]
keywords: REST,API,data,"REST API",javascript,library,cors
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot JavaScript API (JS API) allows you to use your ThoughtSpot
instance within your own Web application. The JS API has methods that allow you
to:

-   Authenticate to ThoughtSpot.
-   Embed visualizations from ThoughtSpot in your Web page using iframes.
-   Use the ThoughtSpot REST API to get data from ThoughtSpot and use it in your Web page.

You can <a href="{{"/release/downloads.html" | prepend: site.baseurl }}" target="_blank">download the ThoughtSpot JavaScript library</a> from our Egnyte server.

{% include note.html content="To use the JS API in your Web page, you must have the access and permissions to
update the code of the web page or application." %}

## Browser Support

The JS API works in the following browsers:

|Browser|Versions|
|-------|--------|
|Internet Explorer|11|
|Firefox|38 or later|
|Google Chrome|47 or later|
|Safari|9 or later|

**Internet Explorer 10**

Microsoft introduced a compatibility mode in Internet Explorer 10, which
displays your page using the version of Internet Explorer that is most
compatible with the current page. Since we do not support any version below 11,
this feature can sometimes break the code. There are two ways to force the
emulation of Internet Explorer to the most up to date version:

-   Add a Custom Response Header

    This is the recommended approach since it is more robust, offers more
    control, and has a lower risk of introducing a bug to your code. The header
    name should be set to "X-UA-Compatible" and the value should be set to
    "IE=Edge". The response header should be based on the server it is set on
    and the technology being used.

-   Add a Meta Tag

    The following meta tag should be added to your header: `<meta
    http-equiv="X-UA-Compatible" content="IE=Edge" \>`. This tag must be the
    first tag in the header section of the page.


## Cross-Origin HTTP Requests (CORS)

Collecting user credentials from one application (domain) and sending them to
another (such as ThoughtSpot) can present security vulnerabilities such as a
phishing attack. Cross-origin or cross-domain verification closes this vulnerability.

When you use the JavaScript API, your client makes a call from your own Web
page, portal, or application to ThoughtSpot. The domains of your client and
ThoughtSpot will be different. So, you'll need to enable cross-origin HTTP
requests from your client application to the ThoughtSpot application. This
protects your data, so that another actor cannot use the same URL to embed the
visualization in its own Web pages.

Your cluster's CORS configuration controls which domains are allowed to use your
client code to authorize users. It also prevents other people from copying your
code and running it on their site.  For example, if your Web site is hosted on
the domain `example.com`, you would enable CORS for that domain. Similarly, if
you want to test your code locally, you'll also need to add the origin for your
local server as well, for example: `http://localhost:8080.` Though, it is a good
idea to disable the `localhost` access after your testing is complete.

To enable CORS between your client applications and your ThoughtSpot instance. ,
you must work with <a href="mailto:support@thoughtspot.com">ThoughtSpot
Support</a>.
