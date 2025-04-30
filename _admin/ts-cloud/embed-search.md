---
title: [Embed ThoughtSpot search]
last_updated: 3/3/2021
summary: "The SearchEmbed package allows you to integrate the ThoughtSpot search function with your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The SearchEmbed package in the Visual Embed SDK enables external applications to search for data from one or several data sources.

## Import the SearchEmbed package

Import the SearchEmbed SDK library to your application environment:

``` javascript
import { SearchEmbed, AuthType, init } from '@thoughtspot/embed-sdk';
```

## Add the embed domain

To allow your client application to connect to ThoughtSpot:

1.  Configure the URL with ThoughtSpot hostname or IP address.

2.  Specify the authentication method to use for authenticating application users.

    ``` javascript
    init
        ({
            thoughtSpotHost:"https://<hostname>:<port>",
            authType: AuthType.None,
        });
    ```

    **`thoughtSpotHost`**   
    *String*.  Hostname or IP address of the ThoughtSpot application.

    **`authType`**    
    *String*. Authentication type. Valid values are:

    - `AuthServer`  
      Trusted authentication method. The trusted authentication method enables applications to exchange secure tokens and grant access to the embedded content. If this authentication method is used, define the `authEndpoint` attribute.
    - `authEndpoint`    
      *String*. The endpoint URL of the authentication server. his attribute is required if the `AuthType` is set to `AuthServer`.
    - `SSO`    
      SAML SSO authentication method. Users accessing the embedded content are authenticated with SAML SSO.
    - `None`  
      Requires no authentication. The user must already be logged in to ThoughtSpot before interacting with the embedded content.
      This approach is used only for testing client applications. Do not use this in production environments.


## Create an instance of the SearchEmbed class

Create an instance of the SearchEmbed object and customize your search page view.

``` javascript
    const searchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'), {
    frameParams: {
        width: '100%',
        height: '100%'
    },
    collapseDataSources:false,
    hideDataSources: false,
    hideResults: false,
    enableSearchAssist: true,
    disabledActions:[],
    hiddenActions: [],
    disabledActionReason: '<reason for disabling>'
    });

```

**`frameParams`**
Sets the `width` and `height` dimensions to render the iframe in the web browser.

**`collapseDataSources`** *optional*
*Boolean*. When set to true, collapses the list of data sources on the Data Source panel.

**`hideDataSources`** *optional*  
*Boolean*. When set to true, it hides the Data Source panel.

**`hideResults`** *optional*  
*Boolean*. When set to true, it hides charts and tables in search answers.

**`enableSearchAssist`** *optional*  
*Boolean*. When set to true, it enables the Search Assist feature. Search Assist allows you to create a custom onboarding experience for your users by demonstrating how to search data from the example queries created on your worksheet.

**`hiddenActions`**  
*Array of strings*. Hides the specified action menu items on the search answer page.

For example, to hide the **Replay Search** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `replaySearch` string in the `hiddenActions` attribute.
````javascript
hiddenActions: Action.replaySearch
````
**`disabledActions`** *optional*  
*Array of strings*. Disables the specified menu items from the list of actions in the search answer page.

For example, to disable the **Show underlying data** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png), specify the `showUnderlyingData` string in the `disabledActions` attribute.
````javascript
disabledActions: Action.showUnderlyingData
````
**`disabledActionReason`** *optional*  
*String*. Indicates the reason for disabling an action from the search answer page view.

For a complete list of action menu items and the corresponding strings to use for disabling or hiding menu items, see the **Actions** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

## Render the embedded search
Construct the URL of the embedded ThoughtSpot search object.
Render the embedded search and pass parameters such as data source ID.

``` javascript
 searchEmbed.render({
  dataSources: ['<%=datasourceGUID%>'],
  searchQuery: "<query-string>",
  answerId: "<%=savedAnswerGUID%>"
 })
```

**`dataSources`**  
*Array of strings*. The Global Unique Identifiers (GUIDs) of the data sources for running a search query on.

**`answerID`**
*String*. The GUID of the search answers saved in a user profile.

**`searchQuery`**  
*String*. The search query string to use when the application loads. You can use the following types of search tokens to construct a search query:

-   [Column]({{ site.baseurl }}/reference/api/search-data-api.html#column)
-   [Operator]({{ site.baseurl }}/reference/api/search-data-api.html#operator)
-   [Value]({{ site.baseurl }}/reference/api/search-data-api.html#value)
-   [Date Bucket]({{ site.baseurl }}/reference/api/search-data-api.html#date-bucket)
-   [Keyword]({{ site.baseurl }}/reference/api/search-data-api.html#keyword)
-   [Calendar]({{ site.baseurl }}/reference/api/search-data-api.html#calendar)

For example, to fetch revenue data by shipping mode, you can use the following search query string:
````javascript
  searchQuery: "[Revenue] by [Shipmode]"
````
## Subscribe to events

Register event handlers to subscribe to events triggered by the ThoughtSpot Search function:

``` javascript
 searchEmbed.on(EventType.init, showLoader)
 searchEmbed.on(EventType.load, hideLoader)
```
For a complete list of event types, see the **EventType** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

## Test the embedded workflow

To verify the ThoughtSpot Search integration, perform the following tasks:

-   Load your application.

-   Search for data from a data source.

-   Verify if the page view parameters, such as hiding or showing the data source panel, function as expected.

-   If you have disabled a menu item from the search answers page, verify if the menu command is disabled.

## Code sample

``` javascript
import { SearchEmbed, AuthType, init } from '@thoughtspot/embed-sdk';

init({
    thoughtSpotHost: "<%=tshost%>",
    authType: AuthType.SSO,
});

const searchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'),
    {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });

searchEmbed.render({
  dataSources: ['4f289824-e301-4001-ad06-8888f69c4748']
});
```
