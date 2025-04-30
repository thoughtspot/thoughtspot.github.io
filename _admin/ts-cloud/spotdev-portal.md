---
title: [ThoughtSpot SpotDev portal]
last_updated: 3/3/2021
summary: "ThoughtSpot SpotDev portal is a developers' playground for exploring APIs, building sample content, and viewing developer documentation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot SpotDev portal <span class="label label-beta">Beta</span> allows you to explore the ThoughtSpot APIs and developer tools, and build your web applications with ThoughtSpot content.
The SpotDev portal enables business application owners and developers to learn about ThoughtSpot APIs, and evaluate ThoughtSpot features available for integration.

## Access SpotDev portal

To access SpotDev portal, follow these steps:

1.  Sign in to your ThoughtSpot Cloud application instance.

2.  Navigate to the **SpotDev** tab.

If you are not an existing ThoughtSpot user, sign up for a free trial to evaluate embedding workflows.

## Find your way around

The SpotDev portal includes several sections to assist you through your embedding journey.

**Home**    
The **Home** page of the SpotDev portal provides a pictorial view of the ThoughtSpot features that you can integrate with your applications.
The home page also includes links to the **Developer Guides** and the **Playground** to preview the toolkit.

**Guide**  
The **Guide** menu displays the *ThoughtSpot Embed Developer Documentation*. The documentation portal provides step-by-step instructions on using ThoughtSpot SDK and APIs to integrate ThoughtSpot features.

**Playground**  
The **Playground** provides an API playground to explore the following ThoughtSpot features.

-   Search
-   Visualizations
-   Pinboards
-   Full application

**Customizations**  
For ThoughtSpot users with administrator and developer privileges, the SpotDev portal displays the following customization settings:

-   **Styles**  
    A set of customization controls for white-labeling and rebranding the embedded ThoughtSpot content.

-   **Actions**  
    Configuration settings for creating custom actions for the embedded pinboards and visualizations.

-   **Settings**  
    Security controls for accessing embedded content from external applications.

## Explore the APIs

ThoughtSpot provides a set of APIs, SDK, and developer tools to integrate search analytics, data insights, visualizations, pinboards, and even the entire ThoughtSpot application in an external application, portal, or business solution.
The **Playground** allows developers to preview the code, test it, and familiarize themselves with the application controls.

### Search

To explore the search embed API and preview the code:

1.  Go to **Playground** > **Search**.

2.  Select a data source or a saved search answer.

3.  If required, enable the **User experience customization** settings.

    **Collapse data panel**  
    Minimizes the data panel on the left navigation bar.

    **Hide data panel**
    Hides the default data panel.

    **Hide chart or table**  
    Hides the visualizations displayed as search results.

    **Modify available actions**  
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), or the menu bar in the search answer page.

    For example:

    - To disable the **Replay Search** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute to `replaySearch`:
      ````
        disabledActions: ['replaySearch']
      ````
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.

    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
      ````
        hiddenActions: ['replaySearch']
      ````
    For a complete list of action menu items and the corresponding text strings to use for disabling or hiding these menu items, see the **Actions** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

    **Enable Search Assist**  
    Enables the Search Assist feature that helps users with simple search scenarios. Search Assist allows you to create a custom onboarding experience for your users by demonstrating how to search data from the example queries created on your worksheet.

    **Add search tokens**  
    Enables constructing a search query using search tokens.

    In the following example, to fetch the total revenue data by shipping mode, the `searchQuery` string uses the [Column]({{ site.baseurl }}/reference/api/search-data-api.html#column) search token:
    ````
      searchQuery: "[Revenue] by [Shipmode]"
    ````
    For more information on the search tokens and query string components, see [Components of a search query]({{ site.baseurl }}/reference/api/search-data-api.html#components).

4.  Click **Run**.

### Visualization

To explore the API for embedding visualizations:

1.  Go to **Playground** > **Visualization**.

2.  Select a pinboard or visualization.

3.  If required, enable the **User experience customization** settings.

    **Modify available actions**   
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png) on the visualizations page.

    For example:

    - To disable the **Download** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute to `download`:
      ````
        disabledActions: ['download']
      ````
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.

    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
      ````
        hiddenActions: ['download']
      ````     
     For a complete list of action menu items and the corresponding text strings to use for disabling or hiding menu items, see the **Actions** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

    **Set runtime filters**     
    Applies Runtime Filters to a visualization.  
    Runtime filters provide the ability to filter data at the time of retrieval.   
    To apply Runtime Filters, pass the `columnName`, `operator`, and `value` parameters in the `runtimeFilters` attribute.

    For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filter.html).
4.  Click **Run**.

### Pinboard

To explore the Pinboard API:

1.  Go to **Playground** &gt; **Pinboard**.

2.  Select a pinboard.

3.  If required, enable the **User experience customization** settings.

    **Modify available actions**  
    Disables or hides the specified action menu items in the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), or the menu bar on the **Pinboards** page.

    For example:  
    - To disable the **Download As PDF** action menu item from the **More** menu ![the more options menu]({{ site.baseurl }}/images/icon-more-10px.png), set the value of the `disabledActions` attribute as `downloadAsPdf`:                 
    ````
      disabledActions: ['downloadAsPdf']
    ````
    - To display a tooltip for the disabled menu item, specify the reason for disabling the menu item in the `disabledActionReason` attribute.
    - To hide an action menu item, specify the action text string in the `hiddenActions` attribute:
    ````
      hiddenActions: ['downloadAsPdf']
    ````

    For a complete list of action menu items and the corresponding strings to use for disabling or hiding menu items, see the **Actions** page of the **Visual Embed SDK Reference Guide** on the **SpotDev** portal.

    **Set runtime filters**   

    Applies Runtime Filters to a visualization in a pinboard.             
    Runtime filters provide the ability to filter data at the time of retrieval.         
    To apply Runtime Filters, pass the `columnName`, `operator`, and `value` parameters in the `runtimeFilters` attribute.

    For more information, see [Apply a Runtime Filter]({{ site.baseurl }}/admin/ts-cloud/apply-runtime-filter.html).

4. Click **Run**.

### Full Application

To explore the API for embedding full application:

1.  Go to **Playground** > **Full app**.

2.  Select a tab to set a default page view for embedded application users.

3.  If required, enable the **User experience customization** settings.

    **Hide navigation bar**  
    Hides the ThoughtSpot top navigation bar.

4.  Click **Run**.

## Customize embedded content

-   To [white-label and rebrand the embedded ThoughtSpot content]({{ site.baseurl }}/admin/ts-cloud/customize-style-spotdev.html), click **Customizations** > **Styles**.
-   To [add custom actions]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html) to the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png) on the  visualization and pinboards page, go to **Customizations** > **Actions**.
-   If you are a ThoughtSpot admin user and you want to [configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html), such as enabling CORS, setting up trusted authentication service, or whitelisting client application domains, go to **Customizations** > **Settings**.
