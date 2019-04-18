---
title: [Edit the SearchIQ mappings]
keywords: SearchIQ, "mappings file", teach
tags: [SearchIQ]
last_updated: 4/17/2019
summary: "Change SearchIQ language settings by editing the mapping file."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

SearchIQ uses language mappings to understand what users mean when they type a term in the search bar that doesn't occur in the data. Users can teach their language to SearchIQ using [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html).

As an administrator, you can see and change these language mappings using the mappings file. You will be able to get the mappings file if you have access to the
**ADMIN > Data Management** page. Editing this file allows you to
view and edit all the language mappings users have made at once, in bulk.

## Overview of the mapping process

The language mappings in SearchIQ are controlled by a CSV (comma separated values) file called the mapping file. The mapping file is saved with an .xls file extension, so you can open and edit it using Excel. To make these changes you will download the mapping file, change the mappings,
and upload your changes back into the system.

In each row of the mapping file, all the data properties corresponding to a
column from your data are listed. You can modify many of these properties by
typing in the new value. Remember these important guidelines when editing the
model file:

-   Do not modify any value in a column which contains **DoNotModify** in the field under the column heading.
-   Make sure to keep the file in the same format as it had when you downloaded it.

The model file contains a row for each column in your data set. It isn't unusual
to have tens of thousand of rows in this file. You can change all or a subset of
rows. You can edit the file to leave the heading rows and only those rows you
want to change. This can make the file more convenient to work with.

The model file must be saved as UTF-8 encoded. If your model file includes
multi-byte characters, make sure you save it in the correct format or you won't
be able to upload it after making your changes.

## Download the mapping file

Before you can make changes to the mapping file, you need to download it. Then,
you edit it using Microsoft Excel, vi/vim, or a similar text editing tool.

To obtain the model file:

1. Log in to ThoughtSpot from a browser as an Administrator user.
2. Click the **admin** tab in the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click **Data Management**, then click **Language Mappings**.
4. Click **Download model.xls**.

    ![]({{ site.baseurl }}/images/download_model.png)

## Edit the file and change the settings

You'll make changes to the settings using this procedure. To see a list of the
changes you can make, see [Data modeling settings](data-modeling-settings.html#). You can edit any of the values in the
model file, except for those where the words **DoNotModify** appear below the
column header. To make changes in the model file:

1. Open the model file you downloaded (`model.xls`) in Excel, vi/vim, or a text editor.

    If you are using Excel, you may see a warning message.

     ![]({{ site.baseurl }}/images/warning_open_model_excel.png)

    Click `YES` to proceed.

2. Find the column you want to modify.

   Descriptions of the meanings of the columns are listed in [Data modeling settings](data-modeling-settings.html#).

3. Select the value you want to change.
4. Type in the new value.
5. After making all your changes, save the model file.

    If you are using Excel, you will see a message. Click `YES` to save the file.

    ![]({{ site.baseurl }}/images/warning_save_model_excel.png)

    The model file must be saved as UTF-8 encoded. If your model file includes
    multi-byte characters, edit the file using vi or vim to ensure the file is
    saved in the correct format. Otherwise, you won't be able to upload it after
    making your edits.

## Upload the edited file

After you have made changes to the modeling file, you must upload it back to
ThoughtSpot before the changes will take effect. To upload the model file:

1. Log in to ThoughtSpot from a browser as an Administrator user.
2. Click the **Admin** icon, on the top navigation bar.

    ![]({{ site.baseurl }}/images/admin_icon.png)

3. Click **Data Management**, then click **Language Mappings**.
4. Click **Browse your files** to upload the model.xls file, or drag and drop it in the zone.

    ![]({{ site.baseurl }}/images/upload_model.png)

    If you receive an error message upon uploading the file, check that it does
    not include any multi-byte characters (for example, Japanese or other multi-byte
    language characters). If it does, you'll need to download the file again and
    make your edits using vi or vim.

    If you choose to remove all the rows you have not changed from
    the model file before uploading it. If you upload a model file that includes
    only the changed rows, you won't lose any of the pre-existing model file
    settings. This is a good option if your model file is causing an error on
    upload, but you aren't sure where in the model file the problem is.

As soon as the file is uploaded, ThoughtSpot performs any necessary re-indexing
for you automatically. Your new settings will be reflected within a few minutes.

## Related information  

* [Data modeling settings](data-modeling-settings.html#)
* [Change a table's data model](model-data-in-UI.html)
