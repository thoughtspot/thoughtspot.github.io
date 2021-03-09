---
title: [Visual Embed SDK overview]
last_updated: 3/3/2021
summary: "ThoughtSpot Visual Embed SDK provides JavaScript packages for embedding ThoughtSpot search, visualizations, pinboards, and the full application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The Visual Embed SDK <span class="label label-beta">Beta</span> provides a set of JavaScript libraries to embed ThoughtSpot components in a host application.

You can use the Visual Embed SDK for the following purposes:

-   Embed specific components of ThoughtSpot application. For example, search bar, search answers page, pinboards, charts, and tables.

-   Embed the full ThoughtSpot application within a host application.

-   Render charts, visualizations, and pinboards.

## Visual Embed SDK libraries

The Visual Embed SDK includes the following Javascript libraries:

**SearchEmbed**    
For [embedding the ThoughtSpot search]({{ site.baseurl }}/admin/ts-cloud/embed-search.html) functionality.

**PinboardEmbed**  
For embedding a ThoughtSpot [visualization]({{ site.baseurl }}/admin/ts-cloud/embed-a-visualization.html) or [pinboard]({{ site.baseurl }}/admin/ts-cloud/embed-pinboard-sdk.html).

**AppEmbed**  
For embedding the [full ThoughtSpot application]({{ site.baseurl }}/admin/ts-cloud/full-app-embed.html) with or without the navigation bar.

## Configuration requirements for embedding

For information on security configuration requirements, see [Configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

## Optional settings for embedding

The URLs in data display as clickable links in ThoughtSpot tables.
By default, clicking on a link opens the URL in a separate tab.
However, there is a system-wide setting that can be changed to open the links within the context in which they appear.

Changing this setting opens the links.
Consider the possible link types, and how they open:

-   Link in search result table in ThoughtSpot.

    Same browser tab as ThoughtSpot application.

-   Link in table embedded in a DOM element.

    Same `<iframe>` that contains the table.

-   Link in full ThoughtSpot application embedded in a web page.

    Same `<iframe>` that contains the application.


## Browser support
Note the following support across browsers:

**Supported desktop browsers**  
Chrome, Edge, Firefox, and Opera

**Supported mobile browsers**  
Android webview, Chrome for Android, Firefox for Android, Opera for Android, and Samsung Internet

**NOT supported desktop browsers**  
Internet Explorer, Safari

**NOT supported mobile browser**  
Safari on iOS

## Authentication

You can use any of the following authentication services for authenticating application users who want to access the embedded content.

No Authentication  
This would require the user to be *already logged into ThoughtSpot*, before interacting with the client application.
You can use this authentication approach for testing environments.
Do not use this in a production environment.

[SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html)  
This method requires you to set up SAML SSO support on the ThoughtSpot admin console.

[Trusted Authentication]({{ site.baseurl }}/admin/ts-cloud/trusted-authentication.html)
This method requires you to enable token-based trusted authentication service.
In this authentication method, ThoughtSpot provides your client application service with a token that allows it to authenticate on behalf of users.

## Visual Embed SDK reference

For detailed information about the SDK contents, classes, functions, and methods:
1. Go SpotDev portal.
2. Navigate to **Guides** > **Visual Embed** > **Visual Embed SDK Reference**.
