---
title: [Embed full application]
last_updated: 4/3/2021
summary: "Use the AppEmbed package to embed the full ThoughtSpot application in your product, Webpage, or application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Full embedding allows you to integrate the full ThoughtSpot content in an application.

## Full application embedding
The full embedded ThoughtSpot content gives your users the ability to perform many essential tasks:
-   create answers and pinboards
-   share objects with other users
-   upload data, and refresh uploaded data
-   relate uploaded data to existing worksheets
-   Use search answers
-   Use SpotIQ

## Limitations

In a fully embedded application instance, users  cannot perform the following tasks:
-   create worksheets
-   create views
-   modify profiles
-   view the Help Center


## Full application embedding workflow
Complete the following steps to embed the full ThoughtSpot application.

### Import the AppEmbed package

Import the AppEmbed SDK library to your application environment:

``` javascript
import { AppEmbed, Page, AuthType, init } from '@thoughtspot/visual-embed-sdk';
```

### Add the embed domain

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
    -   `None`                                                        
        Requires no authentication. The user must already be logged in to ThoughtSpot before interacting with the embedded content.

        {% include warning.html content="Do not use this authentication method in production environments." %}
    -   `SSO`                                                    
        Sets SAML SSO as the authentication method. Federated users can authenticate with their SSO credentials to access the embedded ThoughtSpot content.
        -   `noRedirect` *Optional*                  
            *Boolean*. When set to `true`, it opens the SAML SSO authentication workflow in a pop-up window, instead of refreshing the application web page to direct users to the SAML login page.                     
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

### Create an instance of the AppEmbed object

Create an instance of the AppEmbed object and pass the parameters for the application page view.

``` javascript
const appEmbed = new AppEmbed(
document.getElementById('ts-embed'),
   {
     frameParams: {
        width: '100%',
        height: '100%',
    },
     disabledActions: [],
     disabledActionReason: '<reason for disabling>'
     hiddenActions: [],
     showPrimaryNavbar: true,
     pageId: Page.Data,
     path: '<url-string>',
     runtimeFilters: [],
    },
 });
```

**`frameParams`**  
Sets the `width` and `height` dimensions to render the pages in the web application. You can set the `width` and `height` attribute values in pixels or as a percentage.

**`disabledActions`**  
*Array of strings*. The action menu items to be disabled on the ThoughtSpot application pages.

For example, to disable the **download** action from the **More** (**…​**) menu on the pinboard or visualization page, specify the `Download` action menu string in the `disabledActions` attribute.

``` javascript
disabledActions: Action.Download
```
For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and you want to disable this custom action, make sure you specify the ID of the custom action in the `disabledActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `disabledActions` attribute to disable this action on a ThoughtSpot application page." %}

**`disabledActionReason`**  
*String*. Reason for disabling an action on a pinboard or visualization page. To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.

**`hiddenActions`**  
*Array of strings*. The action menu items to hide on a pinboard or visualization page.

For example, to hide the **Download** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `Download` action menu string in the `hiddenActions` attribute.

``` javascript
hiddenActions: Action.Download
```
For a complete list of action menu items and the corresponding strings to use for hiding menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and you want to hide this custom action, make sure you specify the ID of the custom action in the `hiddenActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `hiddenActions` attribute to hide this action on a ThoughtSpot application page." %}

**`showPrimaryNavbar`**  
*Boolean*. Shows or hides the ThoughtSpot navigation bar.

**`path`**  
*String*. The URL path of the ThoughtSpot application page to embed.

{% include warning.html content="When both `path` and `pageId` attributes are defined, the path definition takes precedence." %}

**`pageId`**  
*String*. The unique identifier for the ThoughtSpot application page. The following values are valid.

- `Page.Search`  
  Displays the search answers page when the application loads.
- `Page.Answers`  
   Displays the saved search answers (**Answers**) page when the application loads.
- `Page.Pinboards`  
   Displays the **Pinboards** page when the application loads.
- `Page.Data`  
   Displays the **Data** page when the application loads.
- `Page.Home`  
   Displays the **Home** page when the application loads.

**`runtimeFilters`** *optional*  
Runtime filters to be applied when the embedded visualization loads.

Runtime filters provide the ability to filter data at the time of retrieval. Runtime filters allow you to apply a filter to a visualization by passing filter specifications in the URL query parameters.

For example, to sort values equal to `100000` in the `Revenue` column for a visualization in a pinboard, you can pass the runtime filter in the URL query parameters as shown here:

``` javascript
  runtimeFilters: [{
     columnName: 'Revenue',
     operator: 'EQ',
     values: [ 100000 ]
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

### Construct the URL and render the application
Construct the URL of the embedded ThoughtSpot application to load within the web page.
Render the embedded content and pass the `pageID` parameter for setting a page as an active tab when the application loads.

``` javascript
 appEmbed.render();
```

### Subscribe to events

Register event handlers to subscribe to events triggered by the ThoughtSpot Search function:

```
 appEmbed.on(EmbedEvent.init, showLoader)
 appEmbed.on(EmbedEvent.load, hideLoader)
 appEmbed.on(EmbedEvent.Error)
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

### Test the embedded workflow

To verify the ThoughtSpot application integration, perform the following tasks:

-   Load your application.
-   Verify if the page you set as the active tab opens when you load the application.
-   Verify if the tabs are displayed correctly.
-   Verify if the page view parameters, such as hiding or showing the data source panel, function as expected.
-   If you have disabled a menu item on a ThoughtSpot application page, verify if the menu command is disabled.

## Code sample

``` javascript
import { AppEmbed, Page, AuthType, init } from '@thoughtspot/visual-embed-sdk';
init({
        thoughtSpotHost: '<%=tshost%>',
        authType: AuthType.None,
    });
const appEmbed = new AppEmbed(
      document.getElementById('ts-embed'),
      {
        frameParams: {
            width: '100%',
            height: '100%',
        },
        pageId: Page.Data,
      },
    });
appEmbed.render();
```
