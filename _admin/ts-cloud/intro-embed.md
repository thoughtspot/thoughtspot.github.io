---
title: [Embedded analytics]
last_updated: 4/3/2021
summary: "ThoughtSpot provides the Visual Embed SDK, REST APIs, and  developer tools to embed search, visualizations, pinboards, and the full ThoughtSpot experience in a third-party product or business solution."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot allows you to embed search-driven analytics and infuse insights into your application, website, portal, or product. By embedding ThoughtSpot, you can enrich your applications with ThoughtSpot’s analytical capabilities and provide a seamless experience for your application users as they navigate between your application interfaces.

ThoughtSpot provides the Visual Embed SDK to programmatically embed search-driven analytics, pinboards, visualizations, and even the entire ThoughtSpot application. ThoughtSpot also provides REST API services to programmatically query data, manage users and user sessions, push data to an external application, and other key functions.

## Embedding methods

You can use one of the following methods to embed ThoughtSpot into your host application:

**Using the Visual Embed SDK**  
You can install the Visual Embed SDK, import the Javascript library, and programmatically integrate ThoughtSpot application and its components.

The Visual Embed SDK includes separate libraries for embedding ThoughtSpot content, such as search, visualizations, pinboards, and the full application.

For more information, see [Embed content using Visual Embed SDK]({{ site.baseurl }}/admin/ts-cloud/visual-embed-sdk.html).

**Using REST APIs**  
You can use the REST APIs to programmatically query data from the ThoughtSpot application. You can also use REST APIs to manage users and perform other key functions.

For more information, see [Embed data using REST APIs]({{ site.baseurl }}/admin/ts-cloud/about-rest-apis.html).

## ThoughtSpot Developer portal

To facilitate faster application integration and assist developers, ThoughtSpot provides the Developer portal. The portal includes a playground for application developers to learn and explore the Visual Embed SDK components. Developers can interact with the embed modules, try integrating ThoughtSpot content in their applications, and view results instantly.

The portal provides customization settings to customize and rebrand the look and feel of your application. You can also add custom actions that can be invoked from the embedded UI and trigger your application or a URL with ThoughtSpot data as a payload.

You can access the Developer portal either from the ThoughtSpot website, or by using the **Develop** tab in the ThoughtSpot application. To access the **Develop** tab in the ThoughtSpot application, you need administrator or developer user privileges.

For more information, see [ThoughtSpot Developer portal]({{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html).

## UI customization and rebranding

If you have embedded the ThoughtSpot application in your host application, you can customize the look and feel of ThoughtSpot UI to match your organization’s branding guidelines.                               
You can customize the ThoughtSpot application UI by using the style customization settings in the Developer portal.

For more information, see [Customize embedded content]({{ site.baseurl }}/admin/ts-cloud/customize-style-spotdev.html).

## Custom actions

ThoughtSpot allows you to add custom actions to the embedded pinboards and visualizations.                                                    
For example, you can add a button to the ThoughtSpot UI that will trigger a workflow in your parent application.

For more information, see [Add custom actions]({{ site.baseurl }}/admin/ts-cloud/customize-actions-spotdev.html).
