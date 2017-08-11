---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Upload the edited model file

After you have made changes to the modeling file, you must upload it back to ThoughtSpot before the changes will take effect.

Save the model file in the same format as it was when you downloaded it. If you are using Microsoft Excel to edit the file, you will see a warning when attempting to save it. Click **Yes** and save the file.

 ![](../../images/warning_save_model_excel.png)

To upload the model file:

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#) as an Administrator user. 
2.   Click on the **Admin** icon, on the top navigation bar. 

    ![](../../shared/conrefs/../../images/admin_icon.png)

3.   Click on **Business Data Model**. 
4.   Click **BROWSE YOUR FILES** to upload the model.xls file, or drag and drop it in the zone. 

    ![](../../images/upload_model.png)

    If you receive an error message upon uploading the file, check that it does not include any multi-byte characters \(i.e. Japanese or other multi-byte language characters\). If it does, you'll need to download the file again and make your edits using vi or vim. Note that you may choose to remove all the rows you have not changed from the model file before uploading it. If you upload a model file that includes only the changed rows, you won't lose any of the pre-existing model file settings. This is a good option if your model file is causing an error on upload, but you aren't sure where in the model file the problem is.

    As soon as the file is uploaded, ThoughtSpot performs any necessary re-indexing for you automatically. Your new settings will be reflected within a few minutes.


**Parent topic:** [Model data in bulk in the modeling file](../../admin/data_modeling/edit_model_file.html)

