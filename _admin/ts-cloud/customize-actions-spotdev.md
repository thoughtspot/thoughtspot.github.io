---
title: [Add custom actions]
last_updated: 3/3/2021
summary: "You can add custom actions to an embedded instance and view them in the menu options on pinboards and visualizations."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you embed ThoughtSpot visualizations and pinboards, you can access the menu options that are generally available for all ThoughtSpot instances. ThoughtSpot allows you to add custom actions of your choice.

## Custom actions

You can configure custom actions when you want to initiate an action in your client application from the ThoughtSpot visualization page.

For example, you may search in ThoughtSpot for customers whose contracts are due for renewal in the next month. You could then trigger an action that brings up a web page from an external billing system. When the billing system is set up to read the data (list of names, emails, products, and renewal dates) from ThoughtSpot, it can add the price, generate an invoice for each customer, and send it by email.

Similarly, you can configure callback functions to send an event or action to the ThoughtSpot application.

The custom action is added either as a primary menu action on the menu bar, or as a menu item in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png) on the **Pinboards** and **Search Answers** page. You can also preview the position of the menu items when adding a custom action.

{% include note.html content="ThoughtSpot allows adding one custom menu item and one callback function for each application instance." %}

## Add a custom menu item

To add custom menu item:

1.  Go to **SpotDev** > **Customizations** > **Actions**.

2.  Click **Create new action**.

3.  Add a label for the menu item. For example, Billing Renewal.

4.  Add the URL of the application to which you want to attach the action.

    Make sure the URL you enter here is added to the [CORS and CSP whitelist]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

5.  Specify the position of the action button. You can set the action as a primary action, or as a menu command in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png).

6.  Select the ThoughtSpot application pages to which you want to add the menu item.

7.  Click **Add action**.

    The menu item is added to the ThoughtSpot application.
    A custom menu item is indicated with a custom tag to distinguish it from the default ThoughtSpot application actions.

8.  To view the action you just added, click **My actions**.

## Add a callback function

The callback custom action provides you with the flexibility to programmatically set up a function to request a call back from the parent application.

You can configure the callback function in the embedded pages to fetch data or a response from the ThoughtSpot application code. When your application user triggers a callback, the callback function sends out data to notify the ThoughtSpot application and fetches the requested data.

To add a callback function:

1.  Go to **SpotDev** > **Customizations** > **Actions**.

2.  Click **Add custom action item**.

3.  Add a label for the menu item.

4.  Add an ID for the callback function.

    Make sure you use the same ID to register the callback function on your host application.

5.  Specify the position of the action button. You can set the callback function as a primary action, or as a menu command in the **More** menu![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png).

6.  Select the ThoughtSpot application pages to which you want to add the function.

7.  Click **Add action**.

8.  To view the action you just added, click **My actions**.
