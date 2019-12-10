---
title: [Share uploaded data]
last_updated: 12/10/2019
summary: You can share uploaded data with others.
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
![Learn how to share data.]({{ site.baseurl }}/images/sharing-data.gif "Learn how to share data.")

If you upload a spreadsheet, you can share **Can View** or **Can Edit**
privileges with other people, who can further share them with others.

## Understand data sharing

Data that you upload from a Web browser is only visible to you and to the
administrator. You can share the entire uploaded table, or only some of its
columns.

By default, if you share only some table columns, users with access to those
columns cannot see the other columns' data in their searches. However, the data
can become visible if a worksheet or pinboard that _also contains_ those columns
is shared with these users.

If you want to prevent other users from revealing your excluded columns,
you can ask your administrator to enable a stricter behavior.

You can share data [from the **Data** tab]({{ site.baseurl }}#share-datatab), or [from within the table, worksheet, or view]({{ site.baseurl }}#share-dataset) that you want to share.

## How to share data

{: id="share-datatab"}
Follow these steps to share uploaded data from the **Data** tab.

1. Click **Data** on the top navigation bar.

2. Hover over the uploaded data you want to share and select it by clicking the empty checkbox that appears.

3. Click **Share**.

    ![Select the data you want to share and click the share icon.]({{ site.baseurl }}/images/sharing-data.png "Select the data you want to share and click the share icon.")

4. Select **Entire Table** or **Specific Columns**.

    ![Select either entire table or specific columns.]({{ site.baseurl }}/images/sharing-datacolumns.png "Select either entire table or specific columns.")

5. If you selected **Specific Columns**, select the column(s) you want to share. If you selected **Entire Table**, skip to step 6.

    {% include note.html content="You cannot click multiple columns at once. You must input the users or groups with whom you want to share for each column." %}

6. Click **+ Add users or groups** and select the users and groups with whom you want to share.

    ![Add users or groups]({{ site.baseurl }}/images/sharing-data-addusers.png "Add users or groups")

7. Configure the level of access by selecting from the dropdown list. You can select:
    -   **Can View** to provide read-only access. This enables viewing the table data and defining worksheets on the table.
    -   **Can Edit** to allow modification. This enables renaming, modifying, or deleting the entire table and adding or removing its columns.

    ![Select can view or can edit.]({{ site.baseurl }}/images/sharing-data-privileges.png "Select can view or can edit.")

8. Click **Add**.

9. Click **Done**.

10. The **Share settings updated** notification appears on the bottom of your screen.

    ![The Share settings updated notification]({{ site.baseurl }}/images/sharing-settingsupdated.png "The Share settings updated notification")

{: id="share-dataset"}
Follow these steps to share data from within the dataset.
1. Navigate to the dataset you want to share.

2. Click the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and then click **Share**.

    ![Click the ellipsis icon and then click Share.]({{ site.baseurl }}/images/sharing-data-in-dataset.png "Click the ellipsis icon and then click Share.")

3. Select the users or groups with whom you want to share.

    You can only share the entire table, worksheet, or view. You cannot share individual columns. To share individual columns, share [from the **Data** tab]({{site.baseurl }}#share-datatab).

4. Configure **Can view** or **Can edit** preferences.

4. Click **Add**.

5. Click **Done**.

6. The **Share settings updated** notification appears on the bottom of your screen.
