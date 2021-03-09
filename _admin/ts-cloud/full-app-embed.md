---
title: [Embed full application]
last_updated: 3/3/2021
summary: "Use the AppEmbed package to embed full ThoughtSpot application in your host application."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Full embedding allows you to integrate the full ThoughtSpot content in a host application.

Full embedded ThoughtSpot content gives your users the ability to perform many essential tasks:

-   create answers and pinboards

-   share objects with other users

-   upload data, and refresh uploaded data

-   relate uploaded data to existing worksheets

## Limitations

In a fully embedded application instance, users  cannot perform the following tasks:

-   create worksheets

-   create views

-   modify profiles

-   view the Help Center


## Embedding workflow
Complete the following steps to embed the full ThoughtSpot application.

### Import the AppEmbed package

Import the AppEmbed SDK library to your application environment:

``` javascript
import { AppEmbed, Page, AuthType, init } from '@thoughtspot/embed-sdk';
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

### Create an instance of the AppEmbed object

Create an instance of the AppEmbed object and pass the iframe parameters for the application pages.

``` javascript
const appEmbed = new AppEmbed(
    document.getElementById('ts-embed'),
    {
        frameParams: {
            width: '100%',
            height: '100%',
        },
    });
```

**`frameParams`**  
Sets the `width` and `height` dimensions to render the pages in the web application.

**`showPrimaryNavbar`**  
*Boolean*. Shows or hides the ThoughtSpot navigation bar.

### Construct the URL and render the application

Construct the URL of the embedded ThoughtSpot application to load within the web page.
Render the embedded content and pass the `pageID` parameter for setting a page as an active tab when the application loads.

``` javascript
    appEmbed.render({
      Page.Data
 });
```

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


### Subscribe to events

Register event handlers to subscribe to events triggered by the ThoughtSpot Search function:

``` javascript
 appEmbed.on(EventType.init, showLoader)
 appEmbed.on(EventType.load, hideLoader)

```

### Test the embedded workflow

To verify the ThoughtSpot application integration, perform the following tasks:

-   Load your application.

-   Verify if the page you set as the active tab opens when you load the application.

-   Verify if the tabs are displayed correctly.

-   Verify if the page view parameters, such as hiding or showing the data source panel, function as expected.

-   If you have disabled a menu item from the search visualizations page, verify if the menu command is disabled.

## Code sample

``` javascript
import { AppEmbed, Page, AuthType, init } from '@thoughtspot/embed-sdk';

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
    });

appEmbed.render({
    Page.Data
});
```
