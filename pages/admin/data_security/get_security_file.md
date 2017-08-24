---
title: [Obtain the security file]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
Before you can make changes to the security file, you need to download it using the ThoughtSpot Web interface to access ThoughtSpot. Then you will be able to edit it using Microsoft Excel or a similar spreadsheet editing tool.

To obtain the security file:

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#) as the admin user.
2.   Click on the **Admin** icon, on the top navigation bar.

    ![](../../shared/conrefs/../../images/admin_icon.png)

3.   Click on **Data Security**.
4.   Click **Download security.xls**.

    ![](../../images/download_security_file.png)

5.   Save it to your machine.
6.   Open the security file in Excel or a text editor.
    -   If you are using Excel, you may see a warning message. Click "Yes" to proceed.

         ![](../../images/warning_open_security_excel.png)

    -   If your security file includes multi-byte characters, edit the file using vi or vim. This is because security files containing multi-byte characters must be saved as UTF-8 encoded. Otherwise you won't be able to upload them after making your edits.

**Parent topic:** [About Legacy Row Level Security](../../admin/data_security/about_legacy_row_security.html)
