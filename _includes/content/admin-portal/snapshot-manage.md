{: id="admin-portal"}
## Manage snapshots through the Administration Portal
From the Administration Portal, you can [create manual snapshots](#admin-portal-create), [delete existing snapshots](#admin-portal-delete), and view the details for all your existing snapshots.

To manage or create snapshots using the Administration Portal, navigate to the Administration Portal by clicking on the **Admin** tab from the top navigation bar. Select **Snapshot** from the side navigation bar that appears.

![Admin Portal - Snapshot]({{ site.baseurl }}/images/admin-portal-snapshot.png "Admin Portal - Snapshot")

You can view snapshot details, such as **name**, **style** (manual or periodic), **status**, and the **date and time** a snapshot was scheduled.

{: id="admin-portal-create"}
### Create manual snapshots in the Administration Portal
To create a manual snapshot in the Administration Portal, follow these steps.

1. Click **Create** at the upper left side of your screen.

    ![Click create]({{ site.baseurl }}/images/admin-portal-snapshot-create.png "Click create")

2. Specify a **name** and a **time to live** for the snapshot.<br>
If you do not want the system to delete the snapshot automatically after a specified number of days, enter `-1` as the **time to live**.

    ![Specify parameters]({{ site.baseurl }}/images/admin-portal-snapshot-create-parameters.png "Specify parameters")

3. Click **OK**.

{: id="admin-portal-delete"}
### Delete snapshots in the Administration Portal
To delete a snapshot in the Administration Portal, follow these steps.

1. Click on the snapshot you would like to delete.

2. Select the **more options** menu icon ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} next to the snapshot name.

3. Click **remove**.

    ![Remove snapshot]({{ site.baseurl }}/images/admin-portal-snapshot-remove.png "Remove snapshot")
