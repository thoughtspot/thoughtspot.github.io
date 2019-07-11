---
title: [Introduction to Embedding]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot Extended Enterprise Edition lets you give people outside of your company access to some ThoughtSpot capabilities within the context of an external application, website, or portal. We’ll call these people “external users”. For example, you could give external users access to data, search, search results, data visualizations, and/or pinboards.

External users cannot be granted administrative privileges or receive technical support from ThoughtSpot. All first line support is to be handled through your company or organization.

ThoughtSpot Extended Enterprise Edition includes these capabilities:

- [Full Application Embedding]({{ site.baseurl }}/app-integrate/embedding-viz/about-full-embed.html)

- [Embedded Charts and Pinboards]({{ site.baseurl }}/app-integrate/embedding-viz/embed-a-viz.html)

- [Data REST API]({{ site.baseurl }}/app-integrate/data-api/about-data-api.html)

- [Runtime Filters]({{ site.baseurl }}/app-integrate/runtime-filters/about-runtime-filters.html)

- [Metadata API]({{ site.baseurl }}/app-integrate/reference/metadata-api.html)

When you buy ThoughtSpot Extended Enterprise, the following rights and obligations apply:

1. External users may only access those elements that are exposed through ThoughtSpot public APIs. These include search, search results and data visualizations, saved pinboard and answers, SearchIQ, and SpotIQ.
2. External users may not be granted Administrator privileges such as the ability to create and modify users and groups.
3. External users are not permitting to copy or download the ThoughtSpot software.
4. You may not include external users in a group that has access to these privileges:
   - Can administer ThoughtSpot
   - Can administer and bypass RLS
5. The license for Extended Enterprise does not enable you to act as an MSP (Managed Service Provider). This means that you must not offer managed services to third parties that are based on the ThoughtSpot software.
6. As a company offering access to ThoughtSpot Extended Enterprise to external users, you are responsible for your own data policy and for complying with local laws and regulations concerning data privacy, such as GDPR and HIPAA.
7. If you are using one of these capabilities, a NPS (Net Promoter Score) survey will be offered to your external users. You may not disable this survey:
   - Application Embedding
   - Embedded Search

If you’re using one of these types of embedding, it is okay to disable the NPS survey:
   - Visualization Embedding
   - Pinboard Embedding

8. Deployments of ThoughtSpot Extended Enterprise must conform to the [logo restrictions listed here](https://brand.thoughtspot.com/d/Vtg4Zg2mqTbE/brand-guidelines).

   These are the branding elements you can change in ThoughtSpot Extended Enterprise:

   - [Logos & Favicon]({{ site.baseurl }}/app-integrate/custom-branding/upload-application-logos.html)
   - [Color Palettes]({{ site.baseurl }}/app-integrate/custom-branding/select-chart-color-palettes.html)
   - [Background Color]({{ site.baseurl }}/app-integrate/custom-branding/choose-background-color.html)
   - [Chart and Table Fonts]({{ site.baseurl }}/app-integrate/custom-branding/set-chart-and-table-visualization-fonts.html)
   - [Footer Text]({{ site.baseurl }}/app-integrate/custom-branding/change-the-footer-text.html)

9. You may not remove the *Powered by ThoughtSpot* logo that appears at the bottom right of the embedded application when using ThoughtSpot full application embed or embedding a pinboard. It is okay to remove the logo if you are embedding a single visualization.

Here are the top level topics on Embedding with Extended Enterprise:

* [Log in to the Linux shell using SSH]({{ site.baseurl }}/app-integrate/introduction/login-console.html)
* [Login credentials]({{ site.baseurl }}/app-integrate/introduction/logins.html)
* [Using the JavaScript API]({{ site.baseurl }}/app-integrate/JSAPI/about-JS-API.html)
* [SAML]({{ site.baseurl }}/app-integrate/SAML/about-SAML-integrations.html)
* [Data REST API]({{ site.baseurl }}/app-integrate/data-api/about-data-api.html)
* [Embed ThoughtSpot]({{ site.baseurl }}/app-integrate/embedding-viz/about-embedding-viz.html)
* [Runtime Filters]({{ site.baseurl }}/app-integrate/runtime-filters/about-runtime-filters.html)
* [Style Customization]({{ site.baseurl }}/app-integrate/custom-branding/perform-style-customization.html)
* [API Reference]({{ site.baseurl }}/app-integrate/reference/public-api-reference.html)
