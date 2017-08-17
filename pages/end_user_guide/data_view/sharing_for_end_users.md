---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About sharing

Whenever you are working in ThoughtSpot, you are in your own private environment until you share your work with others. This applies to searches, pinboards, and any data you upload.

## Objects you can share

This is a list of objects a regular, non-administrator user can share. Administrators have more granular control over data security.

You can share with groups and with individual people. You can share several different types of objects:

|Object type|Description|Default security model|Sharing procedure|
|-----------|-----------|----------------------|-----------------|
|Uploaded data|Data that was uploaded using a Web browser.|Only the user who uploaded the data (and any user with administrator privileges) has access to it by default. They can share a table (or selected columns) with other people or groups.|[Share uploaded data](share_user_imported_data.html#)|
|Pinboards|A pinboard of saved search results.|Anyone who can view a pinboard can share it.|[Share a pinboard](../../data_security/share_pinboards.html#)|
|Answers|The result of a single search.|Anyone who can view an answer can share it.|[Share answers](../../data_security/share_answers.html#)|

-   **[Share a pinboard](../../../admin/data_security/share_pinboards.html)**  
You do not have to be an administrator or the owner to share saved pinboards. Any user can share them, based on the access levels the user has.
-   **[Share answers](../../../admin/data_security/share_answers.html)**  
You do not have to be an administrator or the owner, to share saved answers. Any user can share them, based on the access levels the user has.
-   **[Share uploaded data](../../../pages/end_user_guide/data_view/share_user_imported_data.html)**  
If you upload a spreadsheet, you can share **Can View** or **Can Edit** privileges with other people, who can further share them with others.
-   **[Revoke access (unshare)](../../../admin/data_security/unshare.html)**  
You may need to revoke access to an object (table, worksheet, or pinboard) that you have previously shared. Unsharing an object is very similar to sharing it.

**Parent topic:** [Working with data](../../../pages/end_user_guide/data_view/data_intro_end_user.html)

