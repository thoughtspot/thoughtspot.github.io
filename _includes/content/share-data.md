{: id="share-datatab"}
## Share from the Data tab
To share a table, worksheet, or view from the **Data** tab, follow these steps.

1. Click **Data** on the top navigation bar.

2. Hover over the dataset you want to share and select it by clicking the empty checkbox that appears.

3. Click **Share**.

    ![Share the data]({{ site.baseurl }}/images/sharing-data.png "Share the data")

4. If you are sharing a table, select **Entire Table** or **Specific Columns**. To use Column Level Security (CLS), select **Specific Columns**, and only share the columns the users or groups should have access to.

    ![Specify sharing type]({{ site.baseurl }}/images/sharing-datacolumns.png "Specify sharing type")

5. If you select **Specific Columns**, select the column(s) you want to share, and add the users or groups you want to share the column(s) with. Use this option for Column Level Security (CLS). If you select **Entire Table**, skip to step 6.

    {% include note.html content="You cannot click multiple columns at once. You must input the users or groups with whom you want to share for each column." %}

6. Click **+ Add users or groups** and select the users and groups with whom you want to share.

    ![Add users or groups]({{ site.baseurl }}/images/sharing-data-addusers.png "Add users or groups")

7. [Specify permissions](#specify-permissions).

{: id="share-dataset"}
## Share from within the dataset
To share a table, worksheet, or view from within the dataset, follow these steps.
1. Navigate to the dataset you want to share.

2. Click the ellipsis icon ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and then click **Share**.

    ![Share the data]({{ site.baseurl }}/images/sharing-data-in-dataset.png "Share the data")

3. Select the users or groups with whom you want to share.<br>
    You can only share the entire dataset. You cannot share individual columns. To share individual columns, share a table [from the **Data** tab]({{site.baseurl }}#share-datatab). You cannot share individual columns for Worksheets or Views.

4. [Specify permissions](#specify-permissions).

{% include content/share-data-specify-permissions.md %}
