---
title: [Security settings for embedding]
last_updated: 3/3/2021
summary: "For secure exchange of data between the host and the embedded application instance, administrators must enable and whitelist domains for CORS and CSP."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Before you integrate ThoughtSpot content into your web application, configure security settings on ThoughtSpot to allow your application users to access the embedded content from web browsers. To configure security settings for embedding on the Developer portal, you need administrator or developer privileges.

## Add CSP visual embed host domains

To allow your host domain to set the `frame-ancestors` CSP policy header and embed a ThoughtSpot object within your application frame, add your domain as a CSP visual embed host.

To add a visual embed host:

1.  Log in to your ThoughtSpot application instance.

2.  Click the **Develop** tab.

3.  Go to **Customizations**, click **Settings**.

4.  In the **CSP visual embed hosts** text box, add one or several domains that you want to use to set `frame-ancestors` CSP policy header.

    You can add multiple domains as comma-separated values.

5.  Click **Save changes**.

## Allow domains for CSP connect-src

To allow JavaScript events triggered by the custom action URLs, add the domains of these to CSP connect-src list.

1.  Log in to your ThoughtSpot application instance.

2.  Click the **Develop** tab.

3.  Go to **Customizations**, click **Settings**.

4.  In the **CSP connect-src domains** text box, add one or several domains for the URLs that you want to invoke when triggering custom actions.

    You can add multiple domains as comma-separated values.

5.  Click **Save changes**.

## Allow domains for CORS

When you embed ThoughtSpot into your web pages, your host application calls ThoughtSpot from your Web page, portal, or application. If your host application and ThoughtSpot are in different domains, you must enable Cross-Origin HTTP Requests (CORS) for these domains for secure data exchange.

The CORS configuration for your cluster controls which domains can access and modify your embedded content. It also prevents code copying and deployment by unauthorized sites. For example, if your website is hosted on the `example.com` domain, you must enable CORS for that domain to allow your application users to access the embedded content. Similarly, to test your code locally, you can add the domain for your local server, such as `http://localhost:8080`. If you have added a localhost server, ThoughtSpot recommends that you disable the localhost access after testing.

To whitelist client application domains for CORS, follow these steps:

1.  Log in to your ThoughtSpot application instance.

2.  Click the **Develop** tab.

3.  Under **Customizations**, click **Settings**.

4.  In the **CORS whitelisted domains** text box, add the domains to the CORS whitelist.

    -   You can add multiple domains as comma-separated values.

    -   If you want to use REST APIs, make sure you add the client application domain from which you want to send API requests.

5.  Click **Save changes**.

{% include note.html content="After you add your domain to the CORS whitelist, the `Access-Control-Allow-Origin` header is added in the API responses sent by the ThoughtSpot application." %}
