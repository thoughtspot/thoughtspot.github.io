# Upload the edited security file

After you have made changes to the security file, you must upload it back to ThoughtSpot before the changes will take effect.

To upload the security file:

1.   [Log in to ThoughtSpot from a browser](../setup/accessing.html#) as the admin user. 
2.   Click on the **Admin** icon, on the top navigation bar. 

    ![](../../shared/conrefs/../../images/admin_icon.png)

3.   Click on **Data Security**. 
4.   Click **BROWSE YOUR FILES** to upload the security.xls file, or drag and drop it in the zone. 

    ![](../../images/security_fie_upload.png)

    If you receive an error message upon uploading the file, check that it does not include any multi-byte characters \(i.e. Japanese or other multi-byte language characters\). If it does, you'll need to download the file again and make your edits using vi or vim.

    After the file is uploaded, ThoughtSpot is updated and the row level security changes are applied.


**Parent topic:** [About Legacy Row Level Security](../../admin/data_security/about_legacy_row_security.html)

