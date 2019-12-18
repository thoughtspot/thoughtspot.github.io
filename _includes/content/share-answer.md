{% include image.html file="sharinganswers.gif" title="Save and share answers" alt="Learn how to save and share answers." caption="Save and share answers" %}

You do not have to be an administrator or the owner of an answer to share saved answers. Whenever you view an answer, you have the option of sharing it with others. The answer appears in its most recent state when you share it. For example, if you add a filter after saving the answer and then share it, the answer you share has that filter.

## Share an answer

To share an answer, follow these steps.

1. Configure the answer to look exactly like it must appear when you share it.
2. Save the answer by clicking the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and selecting **Save**.

    {% include image.html file="sharing-save-answer.png" title="Save an answer" alt="Click the ellipsis icon and then click save to save an answer." caption="Save an answer" %}

3. Share the answer by clicking the sharing icon ![sharing icon]({{ site.baseurl }}/images/icon-share copy-20px.png){: .inline}.

    {% include image.html file="sharing-share-icon.png" title="Share an answer" alt="To share an answer, click the share icon at the top right of your screen, next to the ellipsis icon." caption="Share an answer" %}

4. If you did not save the answer, ThoughtSpot prompts you to name and save the answer before sharing it.

    {% include image.html file="sharing-saveandshare.png" title="Save and share your answer" alt="Save the answer before you can share it. You can add an optional description." caption="Save and share your answer" %}

5. The sharing dialog box appears.

    {% include image.html file="sharing-modal.png" title="The sharing dialog box" alt="The sharing dialog box appears once you save your answer and click share." caption="The sharing dialog box" %}

4. Enter users or groups with whom you want to share this answer in the text box under **Share**.

    {% include image.html file="sharing-textbox.png" title="Enter users and groups" alt="Enter users and groups to share your answer." caption="Enter users and groups" %}

    Note that you can only enter whitelisted email addresses. Whitelisted email domains appear when you click on the info button ![]({{ site.baseurl }}/images/icon-info.png){: .inline}.

    {% include tip.html content="If you want to hide the whitelisted email domains for your company, or otherwise customize them, contact ThoughtSpot support." %}

5. Configure the level of access by selecting from the drop-down list. You can select:
    -   **Can View** to provide read-only access. If the user doesn't have access to the underlying worksheet, they can only view the shared answer.
    -   **Can Edit** to allow modification. Enables renaming or deleting the shared answer. If a user with edit privileges modifies a shared answer, the answer saves their changes.

    {% include image.html file="sharing-permissions.png" title="Specify permissions" alt="Configure the level of access by choosing 'can view' or 'can edit.'" caption="Specify permissions" %}

    If the selected group or user does not have access to the underlying data, you must enable access to the worksheet, view, or table. A yellow warning symbol appears ![]({{ site.baseurl }}/images/icon-warning-yellow-20px.png){: .inline}. If you click on it, it tells you to enable access:

    {% include image.html file="sharing-enabledata.png" title="Enable data access" alt="ThoughtSpot advises you to enable data access so users can view or edit a shared answer." caption="Enable data access" %}

    Refer to [share uploaded data]({{ site.baseurl }}/end-user/data-view/share-user-imported-data.html).

6. To stop sharing with a user or group, click the **x** icon ![]({{ site.baseurl }}/images/icon-delete-20px.png){: .inline}.

    {% include image.html file="sharing-delete.png" title="Stop sharing" alt="Click the 'x' icon to stop sharing with a user or group." caption="Stop sharing" %}

6. You can send a notification email and an optional message:

    {% include image.html file="sharing-notifmessage.png" title="Send notification" alt="You can send a notification email and add an optional message." caption="Send notification" %}

6. Click **Share**.

    {% include image.html file="sharing-share.png" title="Share your answer" alt="Click share to share your answer with the selected users and groups." caption="Share your answer" %}
