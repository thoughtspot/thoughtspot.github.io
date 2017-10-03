---
title: [Make many model file edits]
tags:
keywords: tbd
last_updated: tbd
summary: "Edit the modeling file to edit your data settings."
sidebar: mydoc_sidebar
---
Properties of your data such as Column Names, Column Visibility, Column and Data Definition, Column Rank, etc. are defined in the modeling file. Use the model file when you want to edit many of these settings.

{% include tip.html content="If you just want to make one or two quick changes, it will be faster to [Model data in the ThoughtSpot application](model_data_in_UI.html#) instead." %}

## Overview of the modeling process

Data modeling is a three steps process:

1.  Download the model file.
2.  Change settings in the model file.
3.  Upload the edited model file.

You can edit the data modeling file using Microsoft Excel, vi/vim, or a compatible tool. In each row of the modeling file, all the data properties corresponding to a column from your data are listed. You can modify many of these properties by typing in the new value.

Remember these important guidelines when editing the model file:

-   Do not modify any value in a column which contains **DoNotModify** in the field under the column heading.
-   Make sure to keep the file in the same format as it had when you downloaded it (CSV text file).

## Download the model file

Before you can make changes to the model file, you need to download it. Then you can edit it using Microsoft Excel, vi/vim, or a similar text editing tool.

First, you'll download the model file, and then make changes to the appropriate [Data modeling settings](data_modeling_settings.html#). To obtain the model file:

1. Log in to ThoughtSpot from a browser as an Administrator user.
2. Click on the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click on **Business Data Model**.
4. Click **Download model.xls**.

    ![]({{ site.baseurl }}/images/download_model.png)

## Edit the file and change the settings

fter downloading the model file, you'll make changes to the settings using this procedure. Then you will upload the file again to apply your changes.

You can edit any of the values in the model file, except for those where the words **DoNotModify** appear below the column header. To make changes in the model file:

1. Open the model file you downloaded (model.xls) in Excel, vi/vim, or a text editor.
    -   If you are using Excel, you may see a warning message. Click **Yes** to proceed.

         ![]({{ site.baseurl }}/images/warning_open_model_excel.png)

    -   If your model file includes multi-byte characters, edit the file using vi or vim. This is because model files containing multi-byte characters must be saved as UTF-8 encoded. Otherwise you won't be able to upload them after making your edits.
2. Find the column you want to modify.
   Descriptions of the meanings of the columns are listed in [Data modeling settings](data_modeling_settings.html#).
3. Select the value you want to change.
4. Type in the new value.
5. After making all your changes, save the model file.
    -   If you are using Excel, you will see a message. Click **Yes** to save the file.

         ![]({{ site.baseurl }}/images/warning_save_model_excel.png)

    -   If your model file includes multi-byte characters, edit the file using vi or vim. This is because model files containing multi-byte characters must be saved as UTF-8 encoded. Otherwise you won't be able to upload them after making your edits.

## Upload the edited file

After you have made changes to the modeling file, you must upload it back to ThoughtSpot before the changes will take effect.

Save the model file in the same format as it was when you downloaded it. If you are using Microsoft Excel to edit the file, you will see a warning when attempting to save it. Click **Yes** and save the file.

 ![]({{ site.baseurl }}/images/warning_save_model_excel.png)

To upload the model file:

1. Log in to ThoughtSpot from a browser as an Administrator user.
2. Click on the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click on **Business Data Model**.
4. Click **BROWSE YOUR FILES** to upload the model.xls file, or drag and drop it in the zone.

    ![]({{ site.baseurl }}/images/upload_model.png)

    If you receive an error message upon uploading the file, check that it does not include any multi-byte characters (i.e. Japanese or other multi-byte language characters). If it does, you'll need to download the file again and make your edits using vi or vim. Note that you may choose to remove all the rows you have not changed from the model file before uploading it. If you upload a model file that includes only the changed rows, you won't lose any of the pre-existing model file settings. This is a good option if your model file is causing an error on upload, but you aren't sure where in the model file the problem is.

    As soon as the file is uploaded, ThoughtSpot performs any necessary re-indexing for you automatically. Your new settings will be reflected within a few minutes.


## Related information  

* [Data modeling settings](data_modeling_settings.html#)

* [Model data in the ThoughtSpot application](model_data_in_UI.html)
