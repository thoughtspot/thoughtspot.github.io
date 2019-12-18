![Learn how to save and share pinboards.]({{ site.baseurl }}/images/sharing-pinboards.gif "Learn how to save and share pinboards.")

When you share a pinboard, you share a live link to the pinboard that reflects the latest version of it. When someone else views the pinboard you shared with them, they see the most recently saved version with the most recent data.

You do not have to be an administrator or the owner to share saved pinboards. Any user can share them, based on the access levels the user has.

You can share a pinboard from the list of pinboards on [the main pinboards page]({{ site.baseurl }}#share-mainpinboardpage), or from [the pinboard itself]({{ site.baseurl }}#share-pinboardpage).

{: id="share-mainpinboardpage"}
## Share from the Pinboards page
Follow these steps to share a pinboard from the main pinboard page.

1. Configure the pinboard to look as it must appear when you share it.

2. Save the pinboard by clicking the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and selecting **Save**.

    ![Save the pinboard by clicking the ellipsis icon and selecting save.]({{ site.baseurl }}/images/sharing-pinboardsave.png "Save the pinboard by clicking the ellipsis icon and selecting save.")

3. Click **Pinboards** on the bar at the top of your screen.

    ![Click Pinboards on the main menu bar.]({{ site.baseurl }}/images/sharing-mainpinboardpage.png "Click Pinboards on the main menu bar.")

2. Select the pinboard you want to share from the list of pinboards by hovering over it and clicking the empty check box that appears.

3. Click **Share**.

    ![Select the pinboard you want to share and click the share button at the top left of the page.]({{ site.baseurl }}/images/sharing-pinboard-mainpageshare.png "Select the pinboard you want to share and click the share button at the top left of the page.")

6. [Specify permissions]({{ site.baseurl }}#specify-permissions).  

{: id="share-pinboardpage"}
## Share from within a pinboard
Follow these steps to share a pinboard from within the pinboard.

1. Configure the pinboard to look as it must appear when you share it.

2. Save the pinboard by clicking the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and selecting **Save**.

    ![Save the pinboard by clicking the ellipsis icon and selecting save.]({{ site.baseurl }}/images/sharing-pinboardsave.png "Save the pinboard by clicking the ellipsis icon and selecting save.")

3. Click the sharing icon ![sharing icon]({{ site.baseurl }}/images/icon-share copy-20px.png){: .inline}.

    ![Click the sharing icon to open the sharing dialog box.]({{ site.baseurl }}/images/sharing-pinboardshareicon.png "Click the sharing icon to open the sharing window modal.")

5. [Specify permissions]({{ site.baseurl }}/specify-permissions.html).

{: id="specify-permissions"}
## Specify permissions
5. After you click **Share**, the sharing dialog box appears.

    ![The sharing window pops up.]({{ site.baseurl }}/images/sharing-modal.png "The sharing window pops up once you save your pinboard and click share.")

4. Enter users or groups with whom you want to share this pinboard in the text box under **Share**.

    ![Enter users or groups]({{ site.baseurl }}/images/sharing-textbox.png "Enter users or groups to share your pinboard.")

    Note that you can only enter whitelisted email addresses. Whitelisted email domains appear when you click on the info button ![]({{ site.baseurl }}/images/icon-info.png){: .inline}.

    {% include tip.html content="If you want to hide the whitelisted email domains for your company, or otherwise customize them, contact ThoughtSpot support." %}

5. Configure the level of access by selecting from the drop-down list. You can select:
    -   **Can View** to provide read-only access. If the user doesn't have access to the underlying worksheet, they can only view the shared pinboard.
    -   **Can Edit** to allow modification. Enables renaming or deleting the shared pinboard. If a user with edit privileges modifies a shared pinboard, their changes will be saved to it.

    ![Choose 'can view' or 'can edit.']({{ site.baseurl }}/images/sharing-permissions.png "Choose 'can view' or 'can edit.'")

    If the selected group or user does not have access to the underlying data, you must enable access to the worksheet, view, or table. A yellow warning symbol appears ![]({{ site.baseurl }}/images/icon-warning-yellow-20px.png){: .inline}. If you click on it, it tells you to enable access:

    ![ThoughtSpot advises you to enable data access.]({{ site.baseurl }}/images/sharing-enabledata.png "ThoughtSpot advises you to enable data access.")

6. To delete a user or group, click the **x** icon ![]({{ site.baseurl }}/images/icon-delete-20px.png){: .inline}.

    ![Click the 'x' icon to delete a user or group.]({{ site.baseurl }}/images/sharing-delete.png "Click the 'x' icon to delete a user or group.")

6. You can send a notification and an optional message:

    ![Send a notification email and add an optional message.]({{ site.baseurl }}/images/sharing-notifmessage.png "Send a notification email and add an optional message.")

6. Click **Share**.

    ![Click share to share your pinboard with the selected groups and users.]({{ site.baseurl }}/images/sharing-share.png "Click share to share your pinboard with the selected groups and users.")   
