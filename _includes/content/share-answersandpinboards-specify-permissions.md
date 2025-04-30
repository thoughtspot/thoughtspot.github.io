5. After you click the **Share** icon, the sharing dialog box appears.

    ![The sharing dialog box]({{ site.baseurl }}/images/sharing-modal.png "The sharing dialog box")

4. Enter users or groups with whom you want to share this object in the text box. To stop sharing with a user or group, click the **x** icon next to the **Permissions** dropdown for that user or group.

    Note that you can only enter email addresses whose domains are in your list of allowed domains. These domains appear when you click on the info button ![]({{ site.baseurl }}/images/icon-information-10px.png){: .inline}.

    {% include tip.html content="If you want to hide the allowed email domains for your company, or otherwise customize them, contact ThoughtSpot support." %}

5. Configure the level of access by selecting from the drop-down list. You can select:
    -   **Can View** to provide read-only access. If the user doesn't have access to the underlying worksheet, they can only view the shared object.
    -   **Can Edit** to allow modification. Enables renaming or deleting the shared object. If a user with edit privileges modifies a shared object, the object saves their changes.

6. If the selected group or user does not have access to the underlying data, you must enable access to the worksheet, view, or table. A black warning symbol appears when you try to share with a user who does not have underlying data access. If you click on it, it tells you to enable access:

    ![Warning: enable data access]({{ site.baseurl }}/images/sharing-enabledata.png "Warning: enable data access")

    {: id="share-underlying-data"}
    If you own the underlying data source, you can enable access through the sharing dialog box. If you do not own the data source, ThoughtSpot emails the owner of the data source or your ThoughtSpot administrator to ask them to share the data.

    To enable access, select **Give view access to underlying data sources** at the bottom of the dialog box. You can click on the arrow to view the data sources.

    ![Enable data access]({{ site.baseurl }}/images/sharing-data-source-access.png "Enable data access")

    After you enable access, the warning symbol turns into a green checkmark.

6. You can choose to send an email notification and an optional message.

7. If your ThoughtSpot environment is embedded, select **Embedded link format** to generate a URL for your host application context. This option allows you to ensure that the links to the object in email notifications go to the appropriate application URL.

5. You can also copy a direct link to the Answer, Pinboard, or visualization within a Pinboard that you are sharing, and separately send that link to users after you share the object with them. Simply click the **Copy link** button at the bottom of the sharing dialog box.

    {: id="share-direct-link"}
    Note that sending users this link does not share the object with them. You must also share the object by clicking the **Share** button at the bottom of the dialog box.

    ![Share an object and send the link to users you shared with]({{ site.baseurl }}/images/share-copy-link.png "Share an object and send the link to users you shared with")

6. Click **Share**.
