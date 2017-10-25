---
title: [Enable the JavaScript API]
tags:
keywords: API,javascript,enable,"JS API"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This procedure shows how to include the ThoughtSpot JavaScript API (JS API) in your web page, and then use it to authenticate to ThoughtSpot.

Your web page needs to authenticate by calling `window.thoughtspot.initialize` and waiting for the `onInitializationCallback` to be called before embedding any ThoughtSpot visualizations or making any ThoughtSpot REST API calls.

If your ThoughtSpot system is configured for Single Sign On \(SSO\), the JS API call `window.thoughtspot.initialize` can cause the entire Web page to be re-directed to your Identity Provider \(IDP\). This implies that you may not execute any of your application logic before `window.thoughtspot.initialize` has called your callback, because any possible redirection could interfere with your application logic. The recommended way of achieving this is to:

1. Place the JS API in the `<head>` section of the HTML on your Web page.
2. Ensure that the JS API script tag is the first script to be loaded in the page.
3. Ensure that you don’t embed any static ThoughtSpot visualizations in your HTML. In other words, you should generate the ThoughtSpot visualizations dynamically after `window.thoughtspot.initialize` has called your callback.

Note that `onAuthenticationExpiredCallback` is only available if you have at least one ThoughtSpot visualization iframe in your web page.

To enable the JS API:

1. Navigate to the Downloads page in the Help Center to download the ThoughtSpot JS API JavaScript file.
2. Include the ThoughtSpot JS API JavaScript file into your web page using an HTML include script like this in the `<head>` section:

    ```
    <script type=”text/javascript” src=”<protocol><your.thoughtspot.domain>/js/api/api.min.js”>
    ```

3. From your application code, authenticate to ThoughtSpot using a call to the JavaScript method `window.thoughtspot.initialize(onInitializationCallback, onAuthenticationExpiredCallback, <Hostname_or_IP>)` For example:

    ```
    <script type=”text/javascript”>
        thoughtspotHost = <hostname_or_ip_w/o_http>
        function setUpThoughtSpotAPI() {
            window.thoughtspot.initialize(
                function(isUserAuthenticatedToThoughtSpot) {
                       if (isUserAuthenticatedToThoughtSpot) {
                           // load an embedded ThoughtSpot visualization or
                           // make a ThoughtSpot data API call
                       } else {
                           // the current user into your system is not authenticated
                           // into your ThoughtSpot instance, case in any other way suitable
                           // to your application logic. Do NOT call setUpThoughtSpotAPI again
                           // here as that could create an infinite cycle.
                       }
                },
                function() {
                    // the user got logged out from ThoughtSpot, possibly because
                    // their session with ThoughtSpot expired, you can call setUpThoughtSpotAPI()
                    // again to re-authenticate the user or handle this case in any other way
                    // suitable to your application logic.
                },
                thoughtspotHost
            );
        }
    </script>
    ```

4. Set up CORS \(Cross-Origin HTTP Request\) to control what domains are allowed to use this code to authorize users:
    1. Log in to the Linux shell using SSH.
    2. Issue the command to set the domains that will be allowed to access ThoughtSpot using the JS API using this syntax:

        ```
        echo "https?://(localhost|.*:443)" | tscli --adv config set
             --key "/config/nginx/corshosts"
        ```

        When supplying an IP address, you have to escape the dots with a triple backslash \(\\\) as shown in this example:

        ```
        $ echo "https?://(localhost|10\\\.77\\\.20\\\.87:443)"
               | tscli --adv config set --key "/config/nginx/corshosts"
        ```

        By default this value is set to empty, to disallow any cross domain access.
        When this value is changed, the nginx service will be restarted automatically to reflect the change.

5. Now you're ready to either [embed a visualization]({{ site.baseurl }}/app-integrate/embedding-viz/embed-a-viz.html#) or [use the REST API to get data]({{ site.baseurl }}/app-integrate/data-api/use-data-api-read.html#) from ThoughtSpot and display it within your Web page or application.
6. Test your Web page or application.
  If your the page no longer works, check the JavaScript console on your Web browser. If you see this error message, it means that the CORS cross domain setting on nginix was not completed correctly:

    ```
    No 'Access-Control-Allow-Origin' header is present on the requested resource.
    ```

    If this happens, go back to the step in this procedure where you set up CORS.
