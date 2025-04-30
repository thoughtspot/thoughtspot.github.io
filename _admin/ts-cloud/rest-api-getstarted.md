---
title: [Get started with REST APIs]
last_updated: 3/3/2021
summary: "To start embedding data using REST APIs, enable CORS and content security settings."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The REST API allows you to get data out of ThoughtSpot so you can embed it in a Web page, portal, or application.
To access REST APIs, you must authenticate through SAML SSO.
For more information on configuring SAML, see [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/configure-saml-spotdev.html).

## Cross-Domain Verification

To use REST APIs, you must enable CORS and whitelist your client application domains.
This protects your data, so that another website cannot use a URL to get data from ThoughtSpot.
For more information on enabling Cross-Origin Resource Sharing (CORS) and whitelisting application domains, see [Configure security settings]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

## Base URI

The base URI for the REST APIs calls includes the following:

-   The hostname or IP address of your ThoughtSpot application instance.

-   Port number

For example:

    https://<your-thoughtspot-hostname:port>

## API service name and version

For REST API calls, in addition to the base URI, append the API service name and the version number.

For example:

    https://<your-thoughtspot-hostname:port>/callosum/v1/
