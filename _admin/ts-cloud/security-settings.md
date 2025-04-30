---
title: [Security settings for embedding]
last_updated: 3/3/2021
summary: "For secure exchange of data between the host and the embedded application instance, administrators must enable and whitelist domains for CORS and CSP."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Before you integrate ThoughtSpot content into your web application, you need to configure security settings on ThoughtSpot to allow external application users to access the embedded content from web browsers.

To configure security settings in ThoughtSpot, you must have administrator privileges.

## Configure Cross-Origin HTTP Requests

When you embed ThoughtSpot into your web pages, your host application calls ThoughtSpot from your Web page, portal, or application. Web browsers may look for same-origin requests as a security measure. If your host application and ThoughtSpot are in different domains, you must enable Cross-Origin HTTP Requests (CORS) for secure data exchange.

The CORS configuration for your cluster controls which domains can access and modify your embedded content. It also prevents code copying and deployment by unauthorized sites. For example, if your website is hosted on the `example.com` domain, you must enable CORS for that domain to allow your web application users to access the embedded content. Similarly, to test your code locally, you can add the domain for your local server, such as `http://localhost:8080`. If you have added a localhost server, ThoughtSpot recommends that you disable the localhost access after testing.

### Enable CORS from the command line

From the ThoughtSpot command line, run the following command with the appropriate values:

``` console
 $ echo "https?://(mythoughtspot1.mycompany.com|.*:443|.*:8080|.*:80)" | tscli --adv config set --key "/config/nginx/corshosts"
```
<!---
### Enable CORS on ThoughtSpot UI

To enable CORS, follow these steps:

1.  Log in to ThoughtSpot.

2.  Click the **Admin** tab.

3.  Under **Settings**, click **Advanced**.

4.  Enable **Cross-Origin HTTP Requests (CORS)**.

5.  Click **Save Settings**.
--->

{% include note.html content="If CORS is enabled, ThoughtSpot adds `Access-Control-Allow-Origin` header in API responses." %}

## Configure content security settings

To prevent cross-site scripting attacks, ThoughtSpot recommends that you configure content security settings.
To allow only trusted domains, you must add the host application domain and other trusted domains to the CSP whitelist on the SpotDev **Settings** page.

## Enable same-site access

Some browsers, such as Google Chrome 80 (and newer), use the same-site cookie attributes to disable the use of third-party content. To access embedded Thoughtspot content in a web application from browsers, you must set the same-site attribute to `none`.

To set same-site access, execute the following command at the TSCLI command line:

``` console
$ tscli --adv service add-gflag nginx.nanny nginx_cookie_flag 'Secure SameSite=None'
```

## Whitelist domains for CORS and CSP

The ThoughtSpot embedding solution allows embedding ThoughtSpot content in a client application. To define which domains can embed and access ThoughtSpot visualizations and pinboards, you can create a list of allowed domains.

To whitelist client application domains, follow these steps:

1.  Log in to your ThoughtSpot application instance.

2.  Click the **SpotDev** tab.

3.  Under **Customizations**, click **Settings**.

4.  Add the domains that you want to whitelist for Cross-Origin Resource Sharing (CORS) and Content-Security Policy (CSP).s

    -   You can add multiple domains as comma-separated values.

    -   If you want to use REST APIs, make sure you add the client application domain from which you want to send API requests.

    -   If you want to add custom actions to your embedded instance, make sure you add the target URLs to this list.

5.  Click **Save changes**.
