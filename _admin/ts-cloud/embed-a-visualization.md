---
title: [Embed visualizations]
last_updated: 3/3/2021
summary: "Use the PinboardEmbed package to embed ThoughtSpot visualizations in your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This page explains how to embed a ThoughtSpot visualization, such as tables and charts, in your Web page, portal, or application.

## Import the JavaScript library

In your .html page, include the JavaScript file in the `<script>` tag under `<head>`:

``` javascript
<script type="text/javascript" src="<file-location>/<file-name>.js"></script>
```

## Import the PinboardEmbed package

Import the visualization SDK library to your application environment:

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/embed-sdk';
```

## Import styles

``` javascript
import "./styles.css"
```

## Add the embed domain

To allow your client application to connect to ThoughtSpot:

1.  Configure the URL with ThoughtSpot hostname or IP address.

2.  Specify the authentication method to use for authenticating application users.

    ``` javascript
    init
        ({
            thoughtSpotHost:"https://<hostname>:<port>",
            authType: "SSO"
        });
    ```

    `thoughtSpotHost`   
    *String*.  Hostname or IP address of the ThoughtSpot application.

    `authType`    
    *String*. Authentication type. Valid values are:

    - `AuthServer`  
      Trusted authentication method. The trusted authentication method enables applications to exchange secure tokens and grant access to the embedded content. If this authentication method is used, define the `authEndpoint` attribute.
    - `authEndpoint`    
      *String*. The endpoint URL of the authentication server. This attribute is required if the `AuthType` is set to `AuthServer`.  
    - `SSO`    
      SAML SSO authentication method. Users accessing the embedded content are authenticated with SAML SSO.
    - `None`  
      Requires no authentication. The user must already be logged in to ThoughtSpot before interacting with the embedded content.
      This approach is used only for testing client applications. Do not use this in production environments.

## Construct the embed content

``` javaScript
 const embed = new PinboardEmbed("#embed", {
    frameParams: {
        width: 1280,
        height: 720
    },
    disabledActions: [],
    hiddenActions: [],
});
```

`frameParams`  
Sets the `width` and `height` dimensions to render the iframe containing the visualization.

`disabledActions` *optional*  
*String*. Menu items from the list of actions to be disabled on the visualization page.

For example, to disable the **Change Title** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), add `editTitle` to the `disabledActions` attribute.

`hiddenActions` *optional*  
*String*. Menu items from the list of actions to be hidden on the visualization page.

For example, to hide **Download As PDF** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), add `downloadAsPdf` to the `hiddenActions` attribute.

`disabledActionReason` *optional*  
*String*. Reason for disabling an action on the visualizations page.

## Render the embedded visualization

Construct the URL for the embedded visualization and render the embedded content:

``` javaScript
  pinboardEmbed.render({
        pinboardId,
        vizId,
        runtimeFilters,
    }: PinboardRenderOptions): PinboardEmbed {
        super.render();

        const src = this.getIFrameSrc(pinboardId, vizId, runtimeFilters);
        this.renderV1Embed(src);

        return this;
    }
```

`vizId`  
*String*. The Global Unique Identifier (GUID) of the visualization.

`pinboardId` *optional*  
*String*. The GUID of the pinboard to which the visualization is pinned.

`runtimeFilters` *optional*  
Runtime filters to be applied when the embedded visualization loads.

Runtime filters provide the ability to filter data at the time of retrieval. Runtime filters allow you to apply a filter to a visualization by passing filter specifications in the URL query parameters.

For example, to sort values equal to `red` in the `Color` column for a visualization, you can pass the runtime filter in the URL query parameters as shown here:

    http://<thoughtspot_server>:<port>/
    ?col1=Color&op1=EQ>&val1=red#/embed/viz/<pinboard-id>/<viz_id>

Runtime filters have several operators you can use to filter your embedded visualizations.

| Operator      | Description                           | Number of Values |
|---------------|---------------------------------------|------------------|
| `EQ`          | equals                                | 1                |
| `NE`          | does not equal                        | 1                |
| `LT`          | less than                             | 1                |
| `LE`          | less than or equal to                 | 1                |
| `GT`          | greater than                          | 1                |
| `GE`          | greater than or equal to              | 1                |
| `CONTAINS`    | contains                              | 1                |
| `BEGINS_WITH` | begins with                           | 1                |
| `ENDS_WITH`   | ends with                             | 1                |
| `BW_INC_MAX`  | between inclusive of the higher value | 2                |
| `BW_INC_MIN`  | between inclusive of the lower value  | 2                |
| `BW_INC`      | between inclusive                     | 2                |
| `BW`          | between non-inclusive                 | 2                |

## Subscribe to events

Register event handlers to subscribe to events triggered by the embedded visualizations:

``` javascript
  //register event listeners for visualization loading event

  pinboardEmbed.on("init", showLoader)
  pinboardEmbed.on("load", hideLoader)
```

## Test the embedded workflow

-   Load the client application.

-   Try accessing a visualization embedded in your application.

-   Verify the rendition.

-   If you have disabled a menu item from the visualizations page, verify if the menu command is disabled.

-   Verify if the runtime filters are correctly applied.

## Code sample

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/embed-sdk';

init({
    thoughtSpotHost: '<%=tshost%>',
    authType: AuthType.None,
});

const pinboardEmbed = new PinboardEmbed(
    document.getElementById('ts-embed'),
    {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });

pinboardEmbed.render({
    pinboardId: '<%=pinboardGUID%>',
    vizId: '<%=vizGUID%>'
});
```
