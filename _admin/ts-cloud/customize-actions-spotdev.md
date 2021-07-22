---
title: [Add custom actions]
last_updated: 5/8/2021
summary: "You can add custom actions to an embedded instance and view them in the menu options on pinboards and visualizations."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
When you embed ThoughtSpot visualizations and pinboards, you can access the menu options that are generally available for all ThoughtSpot instances. You can disable or exclude the menu commands that are not required for your application users. You can also add custom actions that are relevant to your application context.


## Custom actions      
You can configure a custom button or menu item to initiate an action in your application from the ThoughtSpot UI and provide the data requested by the user as a payload. You can configure it to invoke a specific URL or a callback into your parent application when a user clicks the custom action.

ThoughtSpot allows you to add a custom action as a primary button or as a menu command in the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} on the **Pinboards** and **Search Answers** pages. If you have the [New Answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html)  <span class="badge badge-update">Beta</span> enabled on your cluster, ThoughtSpot lets you add a custom action to the contextual menu for visualizations in the **Pinboards** or **Search Answers** page.


## Configure a custom action to send data to a URL

To add custom menu item:

1. Go to **Develop** &gt; **Customizations** &gt; **Actions**.

2. Click **Create action**.

3. Add a label for the custom action. For example, Send Survey.

4. Select the **URL** option.

5. Add the URL that you want to invoke when the user clicks the action label in the UI.            
   If you want to use a URL target for the custom action, make sure the URL you enter here is added to the [CORS and CSP whitelist]({{ site.baseurl }}/admin/ts-cloud/security-settings.html).

6. Specify an ID for the custom action.

   To disable or hide this custom action on a ThoughtSpot page using Visual Embed SDK, use this ID in the `disabledActions` or `hiddenActions` attribute.          
   For example, if you have created a custom action with the label as **Billing Renewal** and its ID as **billing-renewal**, use `billing-renewal` in the `disabledActions` or `hiddenActions` attribute in the SDK to disable or hide the custom action on a ThoughtSpot application page.   

7. To specify the position of the custom action button, select one of the following options:

    -   **Primary**                         
        Sets the custom action as a primary button.

    -   **Menu**                            
        Adds the custom action to the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png).

    -   **Context menu**                                            
        Adds the custom action as a menu item in the contextual menu. The users can access the contextual menu by right-clicking on a visualization.

    This option is available only if the [New Answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html) <span class="badge badge-update">Beta</span> is enabled on your cluster.

8.  Preview the position of the custom action.
9.  Select the ThoughtSpot application pages to which you want to add the menu item.
10.  Click **Add action**.

    The menu item is added to the ThoughtSpot application.
    The custom menu item is indicated with a custom tag to distinguish it from the default ThoughtSpot application actions.

11.  To view the action you just added, click **My actions**.

## Configure a callback custom action

The callback custom action provides you with the flexibility to programmatically set up a function to request a call back to the parent application.

WThoughtSpot allows you to programmatically set up a callback function from the parent application which triggers on the click of a custom action. For example, if you want to push insights from ThoughtSpot into your app or trigger an event to an external application, you can add a custom action in Thoughtspot and set up a callback in the parent application. When the user clicks this action on the **Answers** or **Pinboards** page, it initiates a callback to the parent application.

To add a callback custom action:

1.  Go to **Develop** &gt; **Customizations** &gt; **Actions**.

2.  Click **Create action**.

3.  Add a label for the custom action.

4.  Select the **Callback** option.

5.  Add an ID for the callback function.

    This ID is used as a reference for the custom action in the Visual Embed SDK. You can use this ID to register a callback event, disable or hide the custom action on a ThoughtSpot application page.

6. To specify the position of the custom action button, select one of the following options:

    - **Primary**                         
      Sets the custom action as a primary button.

    - **Menu**                            
      Adds the custom action to the **More** menu ![more options menu icon]({{ site.baseurl }}/images/icon-more-10px.png).

    - **Context menu**                                            
      Adds the custom action as a menu item in the contextual menu. The users can access the contextual menu by right-clicking on a visualization.

      This option is available only if the [New Answer experience]({{ site.baseurl }}/admin/ts-cloud/new-answer-experience.html) <span class="badge badge-update">Beta</span> is enabled on your cluster.

7.  Preview the position of the custom action.

8.  Select the ThoughtSpot application pages to which you want to add the function.

9.  Click **Add action**.

10. To view the action you just added, click **My actions**.
