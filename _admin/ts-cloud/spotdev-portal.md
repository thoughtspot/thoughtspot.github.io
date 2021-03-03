---
title: [ThoughtSpot SpotDev portal]
last_updated: 3/3/2021
summary: "ThoughtSpot SpotDev portal is a developers' playground for exploring APIs, building sample content, and viewing developer documentation."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The ThoughtSpot SpotDev portal allows you to explore the ThoughtSpot APIs and developer tools, and build your web applications with ThoughtSpot content.
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

1.  Go to **Playground** &gt; **Search**.

2.  Select a data source or a saved search answer.

3.  If required, enable the **User experience customization** settings.

    **Collapse data panel**  
    Minimizes the data panel on the left navigation bar.

    **Hide data panel**  
    Hides the default data source. You can use your worksheet as a data source from which your users can draw search results.

    **Hide chart or table**  
    Hides the visualizations displayed as search results.

    **Modify available actions**  
    Defines a list of actions to be disabled on the search answers page.

    **Enable Search Assist**  
    Enables the Search Assist feature that helps users with simple search scenarios. Search Assist allows you to create a custom onboarding experience for your users by demonstrating how to search data from the example queries created on your worksheet.

    **Add search tokens**  
    Sets search tokens in the search bar to programmatically construct a search query for your users.

    **Set runtime filters**  
    Applies filters on search data by passing filter criteria as parameters in the URL.

4.  Click **Run**.

### Visualization

To explore the API for embedding visualizations:

1.  Go to **Playground** > **Visualization**.

2.  Select a pinboard or visualization.

3.  If required, enable the **User experience customization** settings.

    **Modify available actions**  
    Defines a list of actions to be disabled on the visualizations page.

    **Set runtime filters**  
    Applies filters on visualization data by passing filter criteria as parameters in the URL.

4.  Click **Run**.

### Pinboard

To explore the Pinboard API:

1.  Go to **Playground** &gt; **Pinboard**.

2.  Select a pinboard.

3.  If required, enable the **User experience customization** settings.

    **Hide title**  
    Hides the title and the description of the pinboard.

    **Hide filter bar**  
    Hides the pinboard filters.

    **Modify available actions**  
    Defines a list of actions to be disabled on the **Pinboards** page, and each of the visualizations in the **Pinboards** page.

    **Set runtime filters**  
    Applies filters on pinboard data by passing filter criteria as parameters in the URL.

4.  Click **Run**.

### Full Application

To explore the API for embedding full application:

1.  Go to **Playground** > **Full app**.

2.  Select a tab to set a default page view for embedded application users.

3.  If required, enable the **User experience customization** settings.

    **Hide navigation bar**  
    Hides the ThoughtSpot top navigation bar.

    **Set runtime filters**  
    Applies filters on pinboard and visualization data by passing filter criteria as parameters in the URL.

4.  Click **Run**.

## Customize embedded content

-   To [white-label and rebrand the embedded ThoughtSpot content]({{ site.baseurl }}/admin/ts-cloud/customize-style-spotdev.html), click **Customizations** > **Styles**.

-   To [add custom actions]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html) to the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png) on visualizations and pinboards, go to **Customizations** > **Actions**.

-   If you are a ThoughtSpot admin user and you want to [configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html), such as enabling CORS, setting up trusted authentication service, or whitelisting client application domains, go to **Customizations** > **Settings**.
