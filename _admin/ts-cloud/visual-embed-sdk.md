---
title: [Visual Embed SDK overview]
last_updated: 4/3/2021
summary: "The ThoughtSpot Visual Embed SDK provides a JavaScript library for embedding ThoughtSpot search, visualizations, pinboards, and the full application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The Visual Embed SDK provides a Javascript library to embed ThoughtSpot elements in a host application.
You can use the Visual Embed SDK for the following purposes:
-   Embed specific components of the ThoughtSpot application; for example, search, pinboards, and visualizations.
-   Render full ThoughtSpot application within the host application.

## Visual Embed SDK APIs

The Visual Embed SDK includes the following embed modules:

**SearchEmbed**    
To [embed the ThoughtSpot search]({{ site.baseurl }}/admin/ts-cloud/embed-search.html) functionality.

**PinboardEmbed**  
To embed a ThoughtSpot [visualization]({{ site.baseurl }}/admin/ts-cloud/embed-a-visualization.html) or [pinboard]({{ site.baseurl }}/admin/ts-cloud/embed-pinboard-sdk.html).

**AppEmbed**  
To embed the [full ThoughtSpot application]({{ site.baseurl }}/admin/ts-cloud/full-app-embed.html) with or without the navigation bar.

## Configuration requirements for embedding

For information on configuration requirements, see the following sections:

-  [Integration guidelines]({{ site.baseurl }}/admin/ts-cloud/integration-overview.html)
-  [Security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

## Optional settings for embedding

The URLs in data appear as clickable links in ThoughtSpot tables.
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


## Authentication

You can use any of the following authentication services for authenticating application users who want to access the embedded content.

**Authentication with session REST API**                                            
In this method, you can send a POST request to the `/tspublic/v1/session/login` API to allow a user to log in to Thoughtspot.
{% include warning.html content="This authentication method is intended to be used in initial development and testing phases. Do not use this authentication method in a production environment." %}

**No Authentication**                
This would require the user to be *already logged into ThoughtSpot*, before interacting with the client application.
You can use this authentication approach for testing environments.
This authentication method is intended to be used in initial development and testing phases. Do not use this authentication method in a production environment.
{% include warning.html content="Do not use this authentication method in a production environment."

**SAML SSO**                       
This method requires you to set up [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html)  support on the ThoughtSpot admin console.

**Trusted Authentication**                                                                 
This method requires you to enable token-based [trusted authentication]({{ site.baseurl }}/admin/ts-cloud/trusted-authentication.html) service.
In this authentication method, ThoughtSpot provides your client application service with a token that allows it to authenticate on behalf of users.

## Visual Embed SDK reference

For detailed information about the SDK contents, classes, functions, and methods:
1. Go to ThoughtSpot Developer portal.
2. Navigate to **Guides** > **Visual Embed** > **Visual Embed SDK Reference**.
