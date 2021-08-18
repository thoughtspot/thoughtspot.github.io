---
title: [Custom actions]
last_updated: 8/18/2021
summary: "You can add custom actions to an embedded instance and view them in the menu options on visualizations."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You can insert custom buttons and menu actions into the ThoughtSpot’s UI to push insights from ThoughtSpot to your app or trigger an event to an external application from your host application. These custom actions allow your users to trigger actions on insights without leaving your application.

If your user account has the `Developer` privilege, you can create custom actions in the ThoughtSpot Developer portal. Users with edit access to a worksheet or visualization can add a custom action as a primary button or menu action.

## Configure custom actions

ThoughtSpot Developer Portal allows you to create, modify, and delete custom actions.

Based on your application requirements, users with Developer privilege can create the following types of actions:

- [Action to send data to a specific URL endpoint](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-action-url){:target="_blank"}.
- [Action that triggers a callback action to your host application to send ThoughtSpot data as payload](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-action-callback){:target="_blank"}.

## Add custom action to visualizations

If your ThoughtSpot instance has custom actions configured, users with edit privileges to a worksheet or visualization can assign any available action to a visualization page.

For example, you can add a custom action to the contextual menu that appears when you right-click on a chart or table. You can also add a custom action to all the new visualizations built from a specific worksheet.   

For more information, see [Custom actions in ThoughtSpot Developer Documentation](https://docs.thoughtspot.com/visual-embed-sdk/release/en/?pageid=custom-action-intro){:target="_blank"}.
