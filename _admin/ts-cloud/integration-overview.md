---
title: [Integration guidelines]
last_updated: 3/3/2021
summary: "Before embedding, analyze your integration requirements, choose an embedding approach, and explore the APIs."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Embedding ThoughtSpot content allows you to build search-driven analytics and visualizations into your application. Embedding an external application requires a thorough understanding of your business requirements, software limitations, and tools needed for enable seamless navigation between multiple interfaces.

ThoughtSpot recommends that you browse through the following guidelines before you begin.

## Decide what to embed

Analyze your business requirements and choose the embedding approach that best suits your needs.

For example, you may need a single chart displayed as a wallboard, or you may want your customers to access reports on their own data.
The first example could involve modifying a single HTML page, while the latter example may require working with a development team and adding several different workflows to your web application.

Based on your integration needs, determine if you want to embed a portion of the ThoughtSpot application, or all of it.

## Try it out

The ThoughtSpot SpotDev portal provides a playground for developers to explore the embed functions. The **Playground** provides a preview of the code sample that developers can use to embed search analytics, visualizations, pinboards, and the full ThoughtSpot application. Developers can leverage the interactive coding experience to evaluate the ThoughtSpot embed functionality.

For more information, see - [SpotDev portal]({{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html).

## Define application workflows

ThoughtSpot offers a suite of APIs and developer toolkits to enable the integration of ThoughtSpot content in external applications.
The ThoughtSpot Visual Embed SDK includes Javascript libraries for programmatically embedding search, pinboards, visualizations, and full ThoughtSpot application.

In addition to the Visual Embed SDK, ThoughtSpot provides a set of data APIs to fetch data from the ThoughtSpot application. For example, you can construct a search answer using the data APIs and use this link to embed search answers with your application.

Irrespective of the method you use for embedding, you must define your application workflows to enable seamless navigation between the host and embedded interfaces.

## Define user roles and privileges

The ThoughtSpot application integration involves several workflows that require specific privileges:

|  User Role| Purpose|                                                                           
|------------------------|--------------------------------|
| ThoughtSpot admin | ThoughtSpot administrator privileges to define the authentication workflow and create user groups. Access control in ThoughtSpot is managed through the users and groups that are stored locally on ThoughtSpot, even if the users are authenticated using SSO or Trusted Authentication. To provide access to content or system privileges, admin users must create users and groups in ThoughtSpot. For more information, see [Managing Users]({{ site.baseurl }}/admin/ts-cloud/users.html) and [Managing groups]({{ site.baseurl }}/admin/ts-cloud/groups.html).|                                                                     
| Host application admin | Admin privileges to modify the interfaces of your host application. For example, configuring SAML SSO authentication support on your IdP may require admin privileges. |
| Developer  | Application developers with privileges to integrate ThoughtSpot components into a host application. Developer users can also configure custom actions to the embedded visualizations and pinboards.|

## Choose an authentication method

To authenticate users that request access to the embedded content, you can use one of the following authentication services:

- [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html)  
ThoughtSpot supports Security Assertion Markup Language (SAML) Single Sign-On (SSO) or trusted authentication service. To provide a seamless login experience for your application users, you can configure SSO and enable SAML authentication, so that the federated users are automatically authenticated to ThoughtSpot.
With SAML authentication, your host application users can access ThoughtSpot content with their SSO credentials.
ThoughtSpot administrators can set up SAML SSO either using the TSCLI command line or the **Admin** console in the ThoughtSpot application.

- [Trusted Authentication]({{ site.baseurl }}/admin/ts-cloud/trusted-authentication.html)  
Trusted authentication is a token-based authentication service that uses a central authentication service to authenticate ThoughtSpot users. In a trusted authentication workflow, ThoughtSpot provides the authentication service with a token for a given ThoughtSpot user. This token is used for obtaining trust from the third-party client applications before granting access to ThoughtSpot content.
For authenticating embed users, 

## Define security settings

Collecting user credentials from one application (domain) and sending them to another application (such as ThoughtSpot) can present security vulnerabilities. Cross-origin or cross-domain verification prevents such security risks.

Before embedding, you must enable Cross-Origin Resource Sharing (CORS) between your client application domain and the ThoughtSpot domain for a secure exchange of data and resources. CORS allows an application to make an HTTP request and safely access resources and data from another application in a different domain. Enabling CORS also protects your data, so that another actor cannot use the same URL to embed the visualization in their Web pages.

For more information, see [Configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).
