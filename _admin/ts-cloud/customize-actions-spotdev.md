---
title: [Add custom actions]
last_updated: 4/3/2021
summary: "You can add custom actions to an embedded instance and view them in the menu options on pinboards and visualizations."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you embed ThoughtSpot visualizations and pinboards, you can access the menu options that are generally available for all ThoughtSpot instances. ThoughtSpot not just allows you to restrict user access to certain features or exclude the menu actions that are not applicable to your application context. It also allows you to add custom actions of your choice.


## Custom actions      
You can configure a custom action when you want to initiate an action in your application from the ThoughtSpot UI and provide the data requested by the user as a payload. When the custom action is clicked by the user, you can configure it to invoke a specific URL or a callback into your parent application.

You can add the custom action as a primary menu item, or as a menu command in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png) on the **Pinboards** and **Search Answers** page. You can also preview the position of the menu items when adding a custom action.

## Add a custom menu item

To add custom menu item:

1. Go to **Develop** &gt; **Customizations** &gt; **Actions**.

2. Click **Create action**.

3. Add a label for the custom action. For example, Billing Renewal.

4. Select the **URL** option.

5. Add the URL that you want to invoke when the user clicks the action label in the UI.            
   If you want to use a URL target for the custom action, make sure the URL you enter here is added to the [CORS and CSP whitelist]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

6. Specify an ID for the custom action.

   To disable or hide this custom action on a ThoughtSpot page using Visual Embed SDK, use this ID in the `disabledActions` or `hiddenActions` attribute.          
   For example, if you have created a custom action with the label as **Billing Renewal** and its ID as **billing-renewal**, use `billing-renewal` in the `disabledActions` or `hiddenActions` attribute in the SDK to disable or hide the custom action on a ThoughtSpot application page.   

7. Specify the position of the action button. You can set the action as a primary menu item, or as a menu command in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png).

8.  Select the ThoughtSpot application pages to which you want to add the menu item.

9.  Click **Add action**.

    The menu item is added to the ThoughtSpot application.
    The custom menu item is indicated with a custom tag to distinguish it from the default ThoughtSpot application actions.

8.  To view the action you just added, click **My actions**.

## Add a callback function

The callback custom action provides you with the flexibility to programmatically set up a function to request a call back to the parent application.

When the user clicks the callback action label in the UI, the Visual Embed SDK generates the `customAction` event with the callback ID, and ThoughtSpot sends the requested data as a payload.

To add a callback function:

1.  Go to **Develop** &gt; **Customizations** &gt; **Actions**.

2.  Click **Create action**.

3.  Add a label for the custom action.

4.  Select the **Callback** option.

5.  Add an ID for the callback function.

    This ID is used as a reference for the custom action in the Visual Embed SDK. You can use this ID to register a callback event, disable or hide the custom action on a ThoughtSpot application page.

5.  Specify the position of the action button. You can set the callback function as a primary action, or as a menu command in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png).

6.  Select the ThoughtSpot application pages to which you want to add the function.

7.  Click **Add action**.

8.  To view the action you just added, click **My actions**.
