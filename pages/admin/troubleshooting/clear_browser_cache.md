---
title: [Clear the browser cache]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
You might occasionally see unexpected behavior that is due to the Web browser caching information from ThoughtSpot. In this case, clearing the browser cache and reloading the page should resolve the problem.

You can usually resolve these situations by clearing the browser cache:

-   During a ThoughtSpot session, the browser suddenly displays a white screen and reloading does not fix the problem. This is due to a self-signed SSL certificate that has timed out during the session.
-   When accessing the Help Center, you see a login screen. This is due to a problem during automatic authentication in the Help Center, after which the bad login gets cached by the browser.

To resolve any of these situations, clear the browser cache:

1.   Clear the browser cache. This works a little differently on individual browser versions and operating systems. For example, when using Chrome, to get to the browser cache settings, navigate to:

    ```
    chrome://settings/clearBrowserData
    ```

     ![](../../images/chrome_clear_cache.png "Clear the browser cache")

2.   Click **Clear browsing data**. This is the name of the button on Chrome. The name may vary slightly on other browsers.
3.   Reload the page. For example, on Chrome you would click the **Reload** icon:

     ![](../../images/browser_reload.png "Reload the page")

4.   Now the problem should be fixed, and the page will appear as expected.

**Parent topic:** [About troubleshooting](../../admin/troubleshooting/troubleshooting_intro.html)
