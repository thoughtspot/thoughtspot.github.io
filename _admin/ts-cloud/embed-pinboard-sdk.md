---
title: [Embed pinboards]
last_updated: 3/3/2021
summary: "The PinboardEmbed package allows you to embed ThoughtSpot pinboards in your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This page explains, through an example, how to embed a ThoughtSpot Pinboard in your Web page, portal, or application.

## Import the PinboardEmbed package

Import the pinboard SDK library to your application environment:

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/embed-sdk';
```

## Add the embed domain

To allow your client application to connect to ThoughtSpot:

1.  Configure the URL with ThoughtSpot hostname or IP address.

2.  Specify the authentication method to use for authenticating application users.

    ``` javascript
    init
        ({
            thoughtSpotHost:"https://<hostname>:<port>",
            authType: AuthType.SSO,
        });
    ```

    **`thoughtSpotHost`**   
    *String*.  Hostname or IP address of the ThoughtSpot application.

    **`authType`**    
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
 const pinboardEmbed = new PinboardEmbed("#embed", {
    frameParams: {
        width: 1280,
        height: 720
    },
    disabledActions: [],
    disabledActionReason: '<reason for disabling>'
    hiddenActions: [],
});
```
**`frameParams`**  
Sets the `width` and `height` dimensions to render the iframe containing the visualization.

**`disabledActions`** *optional*  
*Array of string*. Menu items from the list of actions to be disabled on the visualization page.

For example, to disable the **Present** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `present` string in the `disabledActions` attribute.
```javascript
disabledActions: Action.present
```
**`hiddenActions`** *optional*  
*Array of string*. Menu items from the list of actions to be hidden on the visualization page.

For example, to hide **Add filters** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `addFilter` string in the `hiddenActions` attribute.
```javascript
hiddenActions: Action.addFilter
```
**`disabledActionReason`** *optional*  
*String*. Reason for disabling an action on the visualizations page.

For a complete list of action menu items and the corresponding strings to use for disabling or hiding menu items, see the **Actions** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

## Render the embedded pinboard

Construct the URL for the embedded pinboard and render the embedded content:

``` javaScript
    pinboardEmbed.render({
    pinboardId: '<%=pinboardGUID%>',
    runtimeFilters: []
  });
```

**`pinboardId`**  
*String*. The GUID of the pinboard.

**`runtimeFilters`** *optional*  
Runtime filters to be applied on a pinboard visualization when the page loads.

Runtime filters provide the ability to filter data at the time of retrieval. Runtime filters allow you to apply a filter to a visualization in a pinboard and pass filter specifications in the URL query parameters.

For example, to sort values equal to `red` in the `Color` column for a visualization, you can pass the Runtime Filters in the URL query parameters as shown here:

```javascript
  runtimeFilters: [{
  columnName: 'color',
  operator: RuntimeFilterOp.EQ,
  values: [ 'red' ]
  }]

```
Runtime filters have several operators for filtering your embedded visualizations.

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

Register event handlers and subscribe to events triggered by the embedded pinboard:

``` javascript

  pinboardEmbed.on(EventType.init, showLoader)
  pinboardEmbed.on(EventType.load, hideLoader)

```

## Test the embedded workflow

-   Load the client application.

-   Try accessing a pinboard embedded in your application.

-   Verify the rendition.

-   If you have disabled a menu item, verify if the menu command is disabled on the **Pinboards** page.

-   Verify the runtime filters.

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
    pinboardId: 'f4a4e205-3b43-4b77-8ec0-8723da49ce1d',

});
```
