---
title: [Embedded analytics with ThoughtSpot Everywhere]
last_updated: 4/3/2021
summary: "ThoughtSpot provides the Visual Embed SDK, REST APIs, and  developer tools to embed search, visualizations, pinboards, and the full ThoughtSpot experience in a third-party product or business solution."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot Everywhere provides a low-code embedded analytics platform for developers and product owners to build interactive data apps and incorporate ThoughtSpot functions and services directly into their apps, products, or services. Using ThoughtSpot Everywhere, you can embed search-driven analytics, infuse insights into your application, and enrich your website, portal, or product with ThoughtSpot’s analytical capabilities.

The ThoughtSpot Everywhere platform provides the Visual Embed SDK to allow your application users to programmatically embed search-driven analytics, pinboards, visualizations, and even the entire ThoughtSpot application. ThoughtSpot also provides REST API services to programmatically query data, manage users and user sessions, push data to an external application, and automate deployments.

## Embedding methods

You can use one of the following methods to embed ThoughtSpot into your host application:

**Using Visual Embed SDK**

You can install the Visual Embed SDK, import the Javascript library, and programmatically integrate the ThoughtSpot application and its components.
The Visual Embed SDK includes separate libraries for embedding ThoughtSpot content, such as search, visualizations, pinboards, and the full application.

For more information, see [Visual Embed SDK]({{ site.baseurl }}/admin/ts-cloud/visual-embed-sdk.html).

**Using REST APIs**  
You can use the REST APIs to programmatically query data from the ThoughtSpot application. You can also use REST APIs to manage users and perform other key functions.

For more information, see [REST APIs]({{ site.baseurl }}/admin/ts-cloud/about-rest-apis.html).

## ThoughtSpot Developer portal

To allow your application developers to experiment with the Visual Embed APIs, ThoughtSpot provides the Developer portal.

The portal includes a playground for developers to learn and explore the Visual Embed SDK components. Developers can interact with the embed modules, try integrating ThoughtSpot content in a fictional app, and view results instantly.

If you want to explore the embed APIs, you can access the Playground from the [ThoughtSpot Developers website](https://developers.thoughtspot.com/){: target="_blank"}.

If you are a ThoughtSpot user, you can access this portal by clicking the **Develop** tab in your ThoughtSpot application instance. To access the portal, you need administrator or developer privileges.

For authenticated ThoughtSpot users, the portal provides a set of customization controls to rebrand the look and feel of your application, insert custom buttons and actions, customize the format of system-generated links and URLs, and so on.

For more information, see [ThoughtSpot Developer Portal]({{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html).

## UI customization and rebranding

If you have embedded the ThoughtSpot application in your host application, you can customize the look and feel of ThoughtSpot UI to match your organization’s branding guidelines.

You can customize the ThoughtSpot application UI by using the style customization settings in the Developer portal.

For more information, see [Customization and rebranding]({{ site.baseurl }}/admin/ts-cloud/customization-rebranding.html).

## Custom actions

ThoughtSpot allows you to add custom actions to the embedded pinboards and visualizations.

For example, you can add a button to the ThoughtSpot UI that will trigger a workflow in your parent application.

For more information, see [Custom action configuration]({{ site.baseurl }}/admin/ts-cloud/custom-actions.html).
