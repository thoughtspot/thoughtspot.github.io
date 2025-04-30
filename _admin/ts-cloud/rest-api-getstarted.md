---
title: [Get started with REST APIs]
last_updated: 4/3/2021
summary: "To start embedding data using REST APIs, enable CORS and content security settings for your application domain."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

TThe REST API allows you to query data from ThoughtSpot and embed it in a Web page, portal, or application.
To access REST APIs, you must authenticate through SAML SSO.
For more information on configuring SAML, see [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html).

## Cross-Domain Verification
To query and modify ThoughtSpot objects using REST APIs, you must add your client application domain as an allowed domain for Cross-Origin Resource Sharing (CORS). When you add your host domain for CORS, ThoughtSpot adds the `access-control-allow-origin` header in its API responses.
For more information on whitelisting domains for CORS, see [Configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

## Base path
The base URI for the REST APIs calls includes the following:
-   The hostname or IP address of your ThoughtSpot application instance.
-   Port number
-   Name of the ThoughtSpot API service
-   The version number

For example, in the following URL, the base path is `https://<your-thoughtspot-hostname:port>/callosum/v1`

```
https://<your-thoughtspot-hostname:port>/callosum/v1/tspublic/v1/session/login
```
Note that the API endpoint and resource URLs in the REST API documentation pages omit the base path and show only the API endpoint URL.       
For example:
```
POST /tspublic/v1/session/login
```
