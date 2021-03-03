---
title: [Embed ThoughtSpot search]
last_updated: 3/3/2021
summary: "The SearchEmbed package allows you to integrate the ThoughtSpot search function with your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The SearchEmbed package in the Visual Embed SDK enables external applications to search for data from one or several data sources.

## Import the JavaScript library

In your .html page, include the JavaScript file in the `<script>` tag under `<head>`:

``` javascript
<script type="text/javascript" src="<file-location>/<file-name>.js"></script>
```

## Import the SearchEmbed package

Import the SearchEmbed SDK library to your application environment:

``` javascript
import { SearchEmbed, AuthType, init } from '@thoughtspot/embed-sdk';
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
            authType: "SSO",
        });
    ```

    `thoughtSpotHost`   
    *String*.  Hostname or IP address of the ThoughtSpot application.

    `authType`    
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


## Create an instance of the search object

Create an instance of the SearchEmbed object and customize your search page view.

``` javascript
const SearchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'), {
    frameParams: {
        width: '100%',
        height: '100%'
    },
    collapseDataSources:false,
    hideDataSources: true,
    hideResults: false,
    enableSearchAssist: true,
    disabledActions: [],
    });
```

`frameParams`  
Sets the `width` and `height` dimensions to render the iframe in the web browser.

`collapseDataSources` *optional*   
*Boolean*. When set to true, collapses the list of data sources on the Data Source panel.

`hideDataSources` *optional*  
*Boolean*. When set to true, it hides the Data Source panel.

`hideResults` *optional*  
*Boolean*. When set to true, it hides charts and tables in search answers.

`enableSearchAssist` *optional*  
*Boolean*. When set to true, it enables search assistance.

`disabledActions` *optional*  
*String*. Disables the specified menu item from the list of actions in the search answer page.

For example, to hide the **Show underlying data** action from the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png), add `showUnderlyingData` to the `disabledActions` attribute.

`disabledActionReason` *optional*  
*String*. Indicates the reason for disabling an action from the search answer page view.

## Render the embedded search

Construct the URL of the embedded ThoughtSpot search object.
Render the embedded search and pass parameters such as data source ID.

``` javascript
searchEmbed.render({
    dataSources,
    searchQuery,
    answerId,
  }: SearchRenderOptions = {}): SearchEmbed {
     super.render();
     const src = this.getIFrameSrc(answerId, dataSources, searchQuery);
    this.renderIFrame(src, this.viewConfig.frameParams);
 return this;
    }
```

`dataSources`  
*String*. The Global Unique Identifier (GUID) of the data sources for searching data.

`answerID`  
*String*. The GUID of the search answers saved in a user profile.

`searchQuery`  
*String*. The search query string to use when the application loads.

## Subscribe to events

Register event handlers to subscribe to events triggered by the ThoughtSpot Search function:

``` javascript
 searchEmbed.on("init", showLoader)
 searchEmbed.on("load", hideLoader)
 searchEmbed.on("answerPageLoading", payload =>
    console.log("message received from embedded view" + JSON.stringify(payload))

// Functions to show or hide a loader while the iframe loads.
 function showLoader() {
    document.getElementById("loader").style.display = "block";
    }

 function hideLoader() {
    document.getElementById("loader").style.display = "none";
    }
```

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
    authType: "SSO",
});

const searchEmbed = new SearchEmbed(
    document.getElementById('ts-embed'),
    {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });

searchEmbed.render({});
```
