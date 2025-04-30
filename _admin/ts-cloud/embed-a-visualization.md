---
title: [Embed a visualization]
last_updated: 4/3/2021
summary: "Use the PinboardEmbed package to embed a ThoughtSpot visualization in your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This page explains how to embed a ThoughtSpot visualization, such as tables and charts, in your Web page, portal, or application.

## Import the PinboardEmbed package

Import the visualization SDK library to your application environment:

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';
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
    *String*. Authentication type. You can set the `authType` attribute to one of the following values:

    -   `Basic`                                      
        Allows authenticating and logging in a user using the ThoughtSpot `/tspublic/v1/session/login` API. The API request passes `username` and `password` parameters to obtain an authentication token. For more information, see [session APIs]({{ site.baseurl }}/reference/api/session-api.html).

        {% include warning.html content="Do not use this authentication method in production environments." %}

    -   `SSO`                                                    
        Sets SAML SSO as the authentication method. Federated users can authenticate with their SSO credentials to access the embedded ThoughtSpot content.

    -   `None`                                                        
        Requires no authentication. The user must already be logged in to ThoughtSpot before interacting with the embedded content.

        {% include warning.html content="Do not use this authentication method in production environments." %}

    -   `AuthServer`                                      
        Enables trusted authentication method. To use the trusted authentication method, specify the trusted authentication server in the `authEndpoint` attribute or use the `getAuthToken` method.

        -   `authEndpoint` *Optional*                  
            *String*. The endpoint URL of the authentication server. When the `authEndPoint` attribute is defined, a GET request is sent to the authentication endpoint, which returns the authentication token as plaintext in its API response. This attribute is not required if `getAuthToken` is used.
        -   `username`                                         
            *String*. The username of the ThoughtSpot user.            
        -   `getAuthToken` *Optional*
            A function that invokes the trusted authentication endpoint and returns a `Promise` string that resolves to the authentication token. This attribute is not required if `authEndpoint` is used.  

              ```
              getAuthToken: () => Promise.resolve(token)
              ```

## Construct the embed content

``` javaScript
const pinboardEmbed = new PinboardEmbed(
   document.getElementById('ts-embed'),
   {
     frameParams: {
       width: '100%',
       height: '100%',
   },
     disabledActions: [],
     disabledActionReason: '<reason for disabling>',
     hiddenActions: [],
     pinboardId: '<%=pinboardGUID%>',
     vizId: '<%=vizGUID%>',
     runtimeFilters: [],
   },
});
```

**`frameParams`**  
Sets the `width` and `height` dimensions to render the iframe containing the visualization. You can set the `width` and `height` attribute values in pixels or as a percentage.

**`disabledActions`** *optional*  
*Array of strings*. Disables the specified action menu items from the **More** menu! [more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png) on the visualization page.

For example, to disable the **Change Title** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `EditTitle` action menu string in the `disabledActions` attribute.

```javascript
disabledActions: Action.EditTitle
```

For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and and you want to disable this custom action, make sure you specify the ID of the custom action in the `disabledActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `disabledActions` attribute to disable this action on the visualization page." %}

**`disabledActionReason`** *optional*  
*String*. Reason for disabling an action on the visualization page.
**`hiddenActions`** *optional*  
*Array of strings*. Hides the menu items from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png) on the visualization page.

For example, to hide **Download As PDF** action from the **More** menu! [more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `DownloadAsPdf` action menu string in the `hiddenActions` attribute.

```javascript
hiddenActions: Action.DownloadAsPdf
```
For a complete list of action menu items and the corresponding strings to use for  hiding menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and you want to hide this custom action, make sure you specify the ID of the custom action in the `hiddenActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `hiddenActions` attribute to hide this action on the visualization page." %}

**`vizId`**  
*String*. The Global Unique Identifier (GUID) of the visualization.

**`pinboardId`**  
*String*. The GUID of the pinboard to which the visualization is pinned.

**`runtimeFilters`** *optional*  
Runtime filters to be applied when the embedded visualization loads.

Runtime filters provide the ability to filter data at the time of retrieval. Runtime filters allow you to apply a filter to a visualization by passing filter specifications in the URL query parameters.

For example, to sort values equal to `red` in the `Color` column for a visualization, you can pass the Runtime Filters in the URL query parameters as shown here:

```javascript
  runtimeFilters: [{
  columnName: 'color',
  operator: RuntimeFilterOp.EQ,
  values: [ 'red' ]
  }]

```
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

For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filters.html).

## Render the embedded visualization

Construct the URL for the embedded visualization and render the embedded content:

``` javaScript
pinboardEmbed.render();
```

## Subscribe to events

Register event handlers for the events triggered by the embedded visualization:

``` javascript
  pinboardEmbed.on(EmbedEvent.init, showLoader)
  pinboardEmbed.on(EmbedEvent.load, hideLoader)
  pinboardEmbed.on(EmbedEvent.Error)
```
If you have added a [custom action]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html), register an event handler to manage the events triggered by the custom action:

``` javascript
 pinboardEmbed.on(EmbedEvent.customAction, payload => {
      const data = payload.data;
      if (data.id === 'insert Custom Action ID here') {
          console.log('Custom Action event:', data.columnsAndData);
      }
  })
```
For a complete list of event types that you can register, see  [EmbedEvent]((https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/embedevent.html).

## Test the embedded workflow

-   Load the client application.
-   Try accessing a visualization embedded in your application.
-   Verify the rendition.
-   If you have disabled a menu item on a visualization page, verify if the menu command is disabled.
-   Verify the runtime filters.

## Code sample

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';
init({
       thoughtSpotHost: '<%=tshost%>',
       authType: AuthType.None,
   });
const pinboardEmbed = new PinboardEmbed(document.getElementById('ts-embed'),
   {
       frameParams: {
           width: '100%',
           height: '100%',
       },
       pinboardId: '6294b4fc-c289-412a-b458-073fcf6e4516',
       vizId: '28b73b4a-1341-4535-ab71-f76b6fe7bf92',
   },
   });
pinboardEmbed.render();
```
