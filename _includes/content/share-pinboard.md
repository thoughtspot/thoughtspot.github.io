{% include image.html file="sharing-pinboards.gif" title="Save and share pinboards" alt="Learn how to save and share pinboards in ThoughtSpot." caption="Save and share pinboards" %}

When you share a pinboard, you share a live link to the pinboard that reflects the latest version of it. When someone else views the pinboard you shared with them, they see the most recently saved version with the most recent data.

You do not have to be an administrator or the owner to share saved pinboards. Any user can share them, based on the access levels the user has.

You can share a pinboard from the list of pinboards on [the main pinboards page]({{ site.baseurl }}#share-mainpinboardpage), or from [the pinboard itself]({{ site.baseurl }}#share-pinboardpage).

{: id="share-mainpinboardpage"}
## Share from the Pinboards page
To share a pinboard from the main pinboard page, follow these steps.

1. Configure the pinboard to look as it must appear when you share it.

2. Save the pinboard by clicking the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and selecting **Save**.

    {% include image.html file="sharing-pinboardsave.png" title="Save the pinboard" alt="Save the pinboard by clicking the three-dot ellipsis icon and selecting save." caption="Save the pinboard" %}

3. Click **Pinboards** on the bar at the top of your screen.

    {% include image.html file="sharing-mainpinboardpage.png" title="The top menu bar" alt="Click Pinboards on the main menu bar." caption="The top menu bar" %}    

2. Select the pinboard you want to share from the list of pinboards by hovering over it and clicking the empty check box that appears.

3. Click **Share**.

    {% include image.html file="sharing-pinboard-mainpageshare.png" title="Share the pinboard" alt="Select the pinboard you want to share and click the share button at the top left of the page." caption="Share the pinboard" %}

6. [Specify permissions]({{ site.baseurl }}#specify-permissions).  

{: id="share-pinboardpage"}
## Share from within a pinboard
To share a pinboard from within the pinboard, follow these steps.

1. Configure the pinboard to look as it must appear when you share it.

2. Save the pinboard by clicking the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and selecting **Save**.

3. Click the sharing icon ![sharing icon]({{ site.baseurl }}/images/icon-share copy-20px.png){: .inline}.

    {% include image.html file="sharing-pinboardshareicon.png" title="Click the sharing icon" alt="Click the sharing icon to open the sharing dialog box." caption="Click the sharing icon" %}

5. [Specify permissions]({{ site.baseurl }}#specify-permissions).

{: id="specify-permissions"}
## Specify permissions
5. After you click **Share**, the sharing dialog box appears.

    {% include image.html file="sharing-modal.png" title="The sharing dialog box" alt="The sharing window pops up once you save your pinboard and click share." caption="The sharing dialog box" %}

4. Enter users or groups with whom you want to share this pinboard in the text box.

    {% include image.html file="sharing-textbox.png" title="Enter users or groups" alt="Enter users or groups to share your pinboard" caption="Enter users or groups" %}  

    Note that you can only enter whitelisted email addresses. Whitelisted email domains appear when you click on the info button ![]({{ site.baseurl }}/images/icon-info.png){: .inline}.

    {% include tip.html content="If you want to hide the whitelisted email domains for your company, or otherwise customize them, contact ThoughtSpot support." %}

5. Configure the level of access by selecting from the drop-down list. You can select:
    -   **Can View** to provide read-only access. If the user doesn't have access to the underlying worksheet, they can only view the shared pinboard.
    -   **Can Edit** to allow modification. Enables renaming or deleting the shared pinboard. If a user with edit privileges modifies a shared pinboard, the pinboard saves their changes.

    {% include image.html file="sharing-permissions.png" title="Specify permissions" alt="Configure the level of access by choosing 'can view' or can edit'" caption="Specify permissions" %}  

    If the selected group or user does not have access to the underlying data, you must enable access to the worksheet, view, or table. A yellow warning symbol ![]({{ site.baseurl }}/images/icon-warning-yellow-20px.png){: .inline} appears. If you click on it, it tells you to enable access:

    {% include image.html file="sharing-enabledata.png" title="Enable data access" alt="ThoughtSpot advises you to enable data access." caption="Enable data access" %}  

    Refer to [share uploaded data]({{ site.baseurl }}/end-user/data-view/share-user-imported-data.html).

6. To stop sharing with a user or group, click the **x** icon ![]({{ site.baseurl }}/images/icon-delete-20px.png){: .inline}.

    {% include image.html file="sharing-delete.png" title="Stop sharing" alt="Click the 'x' icon to delete a user or group." caption="Stop sharing" %}  

6. You can send an email notification and an optional message:

    {% include image.html file="sharing-notifmessage.png" title="Send notification" alt="Send a notification email and add an optional message." caption="Send notification" %}  

6. Click **Share**.

    {% include image.html file="sharing-share.png" title="Share your pinboard" alt="Click share to share your pinboard with the selected groups and users." caption="Share your pinboard" %}  
