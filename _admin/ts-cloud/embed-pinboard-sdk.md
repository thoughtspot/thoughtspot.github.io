---
title: [Embed pinboards]
last_updated: 3/3/2021
summary: "The PinboardEmbed package allows you to embed a ThoughtSpot pinboard in your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

This page explains, through an example, how to embed a ThoughtSpot Pinboard in your Web page, portal, or application.

## Import the PinboardEmbed package

Import the PinboardEmbed SDK library to your application environment:

``` javascript
import { PinboardEmbed, AuthType, init } from @thoughtspot/visual-embed-sdk';
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

``` javascript
const pinboardEmbed = new PinboardEmbed(
   document.getElementById('ts-embed'),
   {
    frameParams: {
       width: 100%,
       height: 100%,
   },
    disabledActions: [],
    disabledActionReason: '<reason for disabling>'
    hiddenActions: [],
    pinboardId: '<%=pinboardGUID%>',
    runtimeFilters: [],
   },

});
```
**`frameParams`**  
Sets the `width` and `height` dimensions to render the iframe containing the pinboard.

**`fullHeight`**  
*Boolean*. Adjusts the height of the embedded widget to fit the entire pinboard.

**`disabledActions`** *optional*  
*Array of strings*. The action menu items to be disabled on the Pinboards page.

For example, to disable the **Present** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `present` string in the `disabledActions` attribute.

```javascript
disabledActions: Action.present
```
For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

**`hiddenActions`** *optional*  
*Array of strings*. Hides the menu items from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png.

For example, to hide **Add filters** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `addFilter` string in the `hiddenActions` attribute.

```javascript
hiddenActions: Action.addFilter
```
For a complete list of action menu items and the corresponding strings to use for  hiding menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

**`disabledActionReason`** *optional*  
*String*. Reason for disabling an action on the visualizations page.

**`pinboardId`**  
*String*. The GUID of the pinboard.

**`runtimeFilters`** *optional*  
Runtime filters to be applied on a pinboard visualization when the page loads.

Runtime filters provide the ability to filter data at the time of retrieval. Runtime filters allow you to apply a filter to a visualization in a pinboard and pass filter specifications in the URL query parameters.

For example, to sort values equal to `red` in the `Color` column for a visualization in a pinboard, you can pass the runtime filter in the URL query parameters as shown here:

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

For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filters.html).

## Render the embedded pinboard

Construct the URL for the embedded pinboard and render the embedded content:

``` javaScript
  pinboardEmbed.render();
```

## Subscribe to events

Register event handlers and subscribe to events triggered by the embedded pinboard:

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
-   Try accessing a pinboard embedded in your application.
-   Verify the rendition.
-   If you have disabled a menu item, verify if the menu command is disabled on the **Pinboards** page.
-   Verify the runtime filters.

## Code sample

``` javascript
import { PinboardEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';

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
        pinboardId: 'f4a4e205-3b43-4b77-8ec0-8723da49ce1d',
        },
    });

pinboardEmbed.render();
```
