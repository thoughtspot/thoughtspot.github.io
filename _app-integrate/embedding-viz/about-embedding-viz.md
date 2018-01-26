---
title: [About Embedding]
keywords: embedding,authentication,SAML
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Embedding allows you to embed all or part of ThoughtSpot in another application.

<table>
<colgroup>
   <col style="width:25%">
   <col style="width:75%">
</colgroup>
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Full</td>
    <td>Embeds the entire ThoughtSpot application including menu bars. Full navigation is supported.</td>
  </tr>
  <tr>
    <td>Page-level</td>
    <td>Embeds pages without the menus bars or page-level navigation. This is useful where you want to limit the inclusion to a portion of ThoughtSpot. For example, you may only embed the <strong>Search</strong> or the <strong>Answers</strong> page.</td>
  </tr>
  <tr>
    <td>Object-level</td>
    <td>Embed a single visualization in your application. Content is created in ThoughtSpot and then that content is embedded. The content is rendered within an <code>iframe</code>. This returns a JSON object that includes the underlying data.</td>
  </tr>
</table>

You can also use the ThoughtSpot data APIs to request data from ThoughtSpot.

## Authentication

You can control what type of authentication you use between your client
application and ThoughtSpot.

### No Authentication

You can simply not set up authentication. This would require the user to
_already be logged into ThoughtSpot_ before interacting with the embed. This is only useful when testing your client. You would not use this in production.

### SAML

Before you can embed all or part of ThoughtSpot, you must authenticate to
ThoughtSpot using SAML with the the public REST API call. After authentication,
a URL is provided to call the desired visualization and populate it into an
`iframe`.

You must [configure SAML]({{
site.baseurl}}/admin/setup/configure-SAML-with-tscli.html) on your ThoughtSpot
instance before using this method.

### Trusted authentication service

A ThoughtSpot installation can enable support for token-based authentication
service. This allows an installation to use a central authentication service
rather than using ThoughtSpot to authenticate. In this architecture, ThoughtSpot
provides the service with a token that allows it to authenticate on behalf of
users.

A trusted authenticator application or service obtains a token from ThoughtSpot.
This token is used to obtain trust from other, third-party client applications
that need access to ThoughtSpot. In the scenario below, the trust authenticator
forwards requests for ThoughtSpot data from client applications to ThoughtSpot.

![]({{ site.baseurl }}/images/authentication.png "Authentication flow")


A user already logged into client-application interacts with a ThoughtSpot embed
point which causes the following processes:

1. The client-side application requests a user token from the trusted authenticator.
2. The trusted authenticator requests user token from ThoughtSpot.
3. ThoughtSpot verifies the authenticator and returns a user token.
4. The authenticator returns the user token to the client.
5. The client forwards the user token to ThoughtSpot.
6. ThoughtSpot validates the token and returns information commensurate with that authenticated user's authorization.


## Cross-Origin HTTP Requests (CORS)

Collecting user credentials from one application (domain) and sending them to
another (such as ThoughtSpot) can present security vulnerabilities such as a
phishing attack. Cross-origin or cross-domain verification closes this vulnerability.

When embedding, you must enable CORS between your client application domain and
the ThoughtSpot domain. This protects your data, so that another actor cannot
use the same URL to embed the visualization in its own Web pages.
