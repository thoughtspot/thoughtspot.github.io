---
title: [ThoughtSpot Developer portal]
last_updated: 4/3/2021
summary: "The ThoughtSpot Developer portal allows developer users to explore the embed APIs, preview code snippets, and view developer documentation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot Developer portal allows you to explore the ThoughtSpot APIs and developer tools, and build your web applications with ThoughtSpot content. The portal enables business application owners and developers to learn about ThoughtSpot APIs, and evaluate ThoughtSpot features that are available for integration.
The portal also allows authorized users to customize and rebrand the look and feel of the UI and configure custom actions in an embedded visualization or pinboard.


## Access Developer portal
To access the Developer portal, follow these steps:

1.  Log in to your ThoughtSpot application instances.
2.  Navigate to the **Develop** tab.
    The **Develop** tab in the ThoughtSpot application is available only for  ThoughtSpot users with admin or developer privileges.
    For more information on configuring a user group with developer privileges, see the [ThoughtSpot Developer Documentation](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=user-roles).

    {% include note.html content="If you are not a ThoughtSpot user and you want to evaluate the Visual Embed SDK and APIs, you can register for a free trial and access the Developer portal on the free trial cluster." %}

## Find your way around

The Developer portal includes several sections to assist you through your embedding journey.

**Home**    
The **Home** page of the Developer portal provides a pictorial view of the ThoughtSpot features that you can integrate with your applications.
The homepage also includes links to the **Developer Guides** and  **Playground** to preview the code snippet.

**Guide**  
The **Guide** menu displays the *ThoughtSpot Embed Developer Documentation*. The documentation portal provides step-by-step instructions on how to use the ThoughtSpot Visual Embed SDK and REST APIs to integrate ThoughtSpot features into your application.

**Playground**  
The **Playground** provides an API playground to explore the following ThoughtSpot features.

-   Search
-   Visualizations
-   Pinboards
-   Full application

**Customizations**  
For ThoughtSpot users with administrator and developer privileges, the Developer portal displays the following customization menu items:
-   **Styles**  
    A set of customization controls for white-labeling and rebranding the embedded ThoughtSpot content.
-   **Actions**  
    Configuration settings for creating custom actions in the ThoughtSpot UI to trigger workflows in your application, or invoke a URL with ThoughtSpot data as the payload.

-   **Settings**  
    Security controls to define access to the embedded ThoughtSpot content from external applications.

{% include note.html content="The **Customization** settings are available only for the ThoughtSpot developer or admin users." %}
## Explore the Visual Embed APIs

The **Playground** allows developers to try the Visual Embed APIs, preview the code, test it, and familiarize themselves with the application controls.

{% include note.html content="If you have added a custom action and you want to disable or hide this custom action on a Playground page by using the **Modify available actions** checkbox, make sure you specify the ID of the custom action in the `disabledActions` and `hiddenActions` attribute." %}

### Search
To embed search:

1.  Go to **Playground** &gt; **Search**.

2.  Select a data source or a saved search answer.

3.  If required, enable the **User experience customization** settings.

    **Collapse data panel**  
    Minimizes the data panel on the left navigation bar.

    **Hide data panel**
    Hides the default data panel. You can use this function to create a custom data panel when embedding the search module in your application.

    **Hide chart or table**  
    Hides the visualizations displayed as search results. You can use this function to create your own visualization when embedding search in your application.

    **Modify available actions**  
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), or the menu bar in the search answer page. You can use this function to restrict user access to certain features, or to remove the menu items that are not applicable to your application context.
    - To disable an action menu item, specify the menu string in the `disabledActions` attribute. For example, to disable the **Replay Search** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), specify the **Replay Search** action menu string in the `disabledActions` attribute as shown here:

      ```
      disabledActions: [Action.ReplaySearch]
      ```
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.

    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
      ```
      hiddenActions: [Action.ReplaySearch]
      ```

      For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

    **Add search tokens**  
    Enables constructing a search query using search tokens.

    In the following example, to fetch the total revenue data by shipping mode, the `searchQuery` string uses the [Column]({{ site.baseurl }}/reference/api/search-data-api.html#column) search token:
    ```
    searchQuery: "[Revenue] by [Shipmode]"
    ```
    For more information on the search tokens and query string components, see [Components of a search query]({{ site.baseurl }}/reference/api/search-data-api.html#components).

    **Handle custom actions**  
    Allows you to view the code for a custom action event. If the embedded instance has a custom action, use this checkbox to view the event generated by the custom action and send ThoughtSpot data as a payload.

4.  Click **Run**.

### Visualization
To embed a visualization:

1.  Go to **Playground** > **Visualization**.

2.  Select a pinboard or visualization.

3.  If required, enable the **User experience customization** settings.

    **Modify available actions**   
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png) on the visualization page. You can use this function to restrict user access to certain features, or to remove the menu items that are not applicable to your application context.
    - To disable an action menu item, specify the menu string in `disabledActions` attribute. For example, to disable the **Download** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute to `Action.Download`:
      ```
      disabledActions: [Action.Download]
      ```
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.

    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
      ```
      hiddenActions: [Action.Download]
      ```    
    For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).

    **Set runtime filters**     
    Applies Runtime Filters to a visualization.  
    Runtime filters provide the ability to filter data at the time of retrieval.   
    To apply Runtime Filters, pass the `columnName`, `operator`, and `value` parameters in the `runtimeFilters` attribute.

    ``` javascript
     runtimeFilters: [{
       columnName: 'color',
       operator: 'EQ',
       values: [ 'red' ]
     }]
    ```

    For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filter.html).

    **Handle custom actions**  
    Allows you to view the code for a custom action event. If the embedded instance has a custom action, use this checkbox to view the event generated by the custom action and send ThoughtSpot data as a payload.
4.  Click **Run**.

### Pinboard

To embed a pinboard:

1.  Go to **Playground** &gt; **Pinboard**.

2.  Select a pinboard.

3.  If required, enable the **User experience customization** settings.

    **Modify available actions**  
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), or the menu bar on the **Pinboards** page. You can use this function to restrict user access to certain features, or to remove the menu items that are not applicable to your application context.
    - To disable an action menu item, specify the menu string in the `disabledActions` attribute. For example, to disable the **Download As PDF** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute as `Action.DownloadAsPdf`:                 
    ```
      disabledActions: [Action.DownloadAsPdf]
    ```
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.
    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
    ```
      hiddenActions: [Action.DownloadAsPdf]
    ```
    For a complete list of action menu items and the corresponding strings to use for disabling menu items, see [Actions](https://docs.thoughtspot.com/visual-embed-sdk/release/typedoc/enums/action.html/enums/action.html).                                          

    **Set runtime filters**   
    Applies Runtime Filters to a visualization in a pinboard.             
    Runtime filters provide the ability to filter data at the time of retrieval.         
    To apply Runtime Filters, pass the `columnName`, `operator`, and `value` parameters in the `runtimeFilters` attribute.

    ``` javascript
     runtimeFilters: [{
       columnName: 'Revenue',
       operator: 'EQ',
       values: [ 100000 ]
      }]
    ```

    For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filter.html).

    **Handle custom actions**  
    Allows you to view the code for a custom action event. If the embedded instance has a custom action, use this checkbox to view the event generated by the custom action and send ThoughtSpot data as a payload.

4. Click **Run**.

### Full Application

To embed the full ThoughtSpot application:

1.  Go to **Playground** &gt; **Full app**.

2.  Select a tab to set a default page view for embedded application users.

3.  If required, enable **User experience customization** settings.

    **Modify available actions**  
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), or the menu bar on the **Pinboards** page.
    -  To disable an action menu item, specify the menu string in the `disabledActions` attribute. For example, to disable the **Download** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute as `Action.Share`:
    ```
    disabledActions: [Action.Share]
    ```
    -   To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.
    -   To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
      ```
      hiddenActions: [Action.Share]
      ```
    For a complete list of action menu items and the corresponding strings to use for disabling or hiding menu items, see [Actions]({{visualEmbedSDKPrefix}}/enums/action.html).

    **Show navigation bar**  
    Displays the ThoughtSpot top navigation bar. By default, the navigation bar is hidden.

    **Navigate to URL**
    Allows you to define a specific URL path for loading a ThoughtSpot page. If a particular ThoughtSpot page is set as a homepage using the `pageID` attribute and the URL path is also defined in the `path` attribute, the path definition takes precedence.

    **Set runtime filters**  
    Enables Runtime Filters on a visualization in a pinboard.
    Runtime filters provide the ability to filter data at the time of retrieval.
    To apply Runtime Filters, pass the `columnName`, `operator`, and `value` parameters in the `runtimeFilters` attribute.

    ``` javascript
    runtimeFilters: [{
      columnName: 'Revenue',
      operator: 'EQ',
      values: [ 100000 ]
     }]
    ```
    For more information, see [Apply a Runtime Filter](https://cloud-docs.thoughtspot.com/admin/ts-cloud/apply-runtime-filter.html).


## Customize embedded content

-   To [white-label and rebrand the embedded ThoughtSpot content]({{ site.baseurl }}/admin/ts-cloud/customize-style-spotdev.html), click **Customizations** > **Styles**.
-   To [add custom actions]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html) to the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png) on a visualization or pinboards page, go to **Customizations** > **Actions**.
-   If you are a ThoughtSpot admin user and you want to configure security settings, such as [CORS and CSP domains]({{ site.baseurl }}/admin/ts-cloud/security-settings.html), [trusted authentication service]({{ site.baseurl }}/admin/ts-cloud/trusted-authentication.html), and [SAML redirect domains]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html), go to **Customizations** &gt; **Settings**.
