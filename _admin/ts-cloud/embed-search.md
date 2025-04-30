---
title: [Embed ThoughtSpot search]
last_updated: 3/3/2021
summary: "The SearchEmbed package allows you to integrate the ThoughtSpot search function with your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This topic provides instructions for embedding the ThoughtSpot search function. The embedded Search API enables external applications to search for data from one or several data sources.

## Import the SearchEmbed package

Import the SearchEmbed SDK library to your application environment:

``` javascript
import { SearchEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';
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


## Create an instance of the SearchEmbed class

Create an instance of the SearchEmbed object and customize your search page view.

``` javascript
const searchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'),
    {
      frameParams: {
        width: '100%',
        height: '100%',
    },
      answerId: "<%=savedAnswerGUID%>",
      dataSources: ['<%=datasourceGUID%>'],
      collapseDataSources: false,
      disabledActions: [],
      disabledActionReason: '<reason for disabling>',
      hiddenActions: [],
      hideDataSources: false,
      hideResults: false,
      searchQuery: "<query-string>",
    },
});
```

**`frameParams`**     
Sets the `width` and `height` dimensions to render the iframe in the web browser.

**`answerID`**      
*String*. The Global Unique Identifiers (GUID) of the search answers saved in a user profile.

**`dataSources`**  
*Array of strings*. The GUIDs of the data sources for running a search query on.

**`collapseDataSources`** *optional*      
*Boolean*. When set to true, it minimizes the Data Source panel.

**`disabledActions`** *optional*  
*Array of strings*. Disables the specified menu items from the list of actions on a search answer page. You can use this attribute to restrict user access to certain features.

For example, to disable the **Show underlying data** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `ShowUnderlyingData` action menu string in the `disabledActions` attribute.
````javascript
disabledActions: Action.ShowUnderlyingData
````
For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and you want to disable this custom action, make sure you specify the ID of the custom action in the `disabledActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `disabledActions` attribute to disable this action on the search answer page." %}

**`disabledActionReason`** *optional*  
*String*. Indicates the reason for disabling an action from the search answer page view.

**`hideDataSources`** *optional*  
*Boolean*. When set to true, it hides the Data Source panel.

**`hideResults`** *optional*  
*Boolean*. When set to true, it hides the default Data Source panel. Use this attribute if you want to create a custom data panel.

**`hiddenActions`**  
*Array of strings*. Hides the specified action menu items on a search answer page.  You can use this attribute to remove actions that are not applicable to your application context.

For example, to hide the **Replay Search** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `ReplaySearch` action menu string in the `hiddenActions` attribute.
````javascript
hiddenActions: Action.ReplaySearch
````

For a complete list of action menu items and the corresponding strings to use for hiding menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

{% include note.html content="If you have added a custom action and you want to hide this custom action, make sure you specify the ID of the custom action in the `hiddenActions` attribute. For example, if a custom action is created with the **Send Email** label and the ID is set as **send-email**, use `send-email` in the `hiddenActions` attribute to hide this action on the search answer page." %}

**`searchQuery`**  
*String*. The search query string to use when the application loads. You can use the following types of search tokens to construct a search query:

-   [Column]({{ site.baseurl }}/reference/api/search-data-api.html#Column)
-   [Operator]({{ site.baseurl }}/reference/api/search-data-api.html#Operator)
-   [Value]({{ site.baseurl }}/reference/api/search-data-api.html#Value)
-   [Date Bucket]({{ site.baseurl }}/reference/api/search-data-api.html#Date-Bucket)
-   [Keyword]({{ site.baseurl }}/reference/api/search-data-api.html#Keyword)
-   [Calendar]({{ site.baseurl }}/reference/api/search-data-api.html#Calendar)

For example, to fetch revenue data by shipping mode, you can use the following search query string:
``` javascript
  searchQuery: "[Revenue] by [Shipmode]"
```

## Render the embedded search
Construct the URL of the embedded ThoughtSpot search object.
Render the embedded search and pass parameters such as data source ID.

``` javascript
 searchEmbed.render();
```


## Subscribe to events

Register event handlers to subscribe to events triggered by the ThoughtSpot Search function:

```
  searchEmbed.on(EmbedEvent.init, showLoader)
  searchEmbed.on(EmbedEvent.load, hideLoader)
  searchEmbed.on(EmbedEvent.Error)
```
If you have added a [custom action]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html), register an event handler to manage the events triggered by the custom action:

``` javascript
 searchEmbed.on(EmbedEvent.customAction, payload => {
      const data = payload.data;
      if (data.id === 'insert Custom Action ID here') {
          console.log('Custom Action event:', data.columnsAndData);
      }
  })
```
For a complete list of event types that you can register, see  [EmbedEvent]((https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/embedevent.html).

## Test the embedded workflow

To verify the ThoughtSpot Search integration, perform the following tasks:
-   Load your application.
-   Search for data from a data source.
-   Verify if the page view parameters, such as hiding or showing the data source panel, function as expected.
-   If you have disabled a menu item on a search answer page, verify if the menu command is disabled.

## Code sample

``` javascript
import { SearchEmbed, AuthType, init } from '@thoughtspot/visual-embed-sdk';
init({
    thoughtSpotHost: "<%=tshost%>",
    authType: AuthType.SSO,
});
const searchEmbed = new SearchEmbed(document.getElementById('ts-embed'), {
    frameParams: {
        width: '100%',
        height: '100%',
    },
    dataSources: ['4f289824-e301-4001-ad06-8888f69c4748'],
},
});
searchEmbed.render();
```
