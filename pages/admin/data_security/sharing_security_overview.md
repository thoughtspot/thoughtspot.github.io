---
title: [Data security]
tags:
keywords: tbd
last_updated: tbd
summary: "Data security refers to which users can see which data in the ThoughtSpot application."
sidebar: mydoc_sidebar
---
Sharing and security settings govern what data a user can access and what they can do with the data. Admins can use these settings to regulate access to information and provide a personalized user experience.

## Users, groups, and privileges

Data security applies to users and groups. Users can be managed [manually](../users_groups/about_users_groups.html#) or through [LDAP](../setup/about_LDAP.html#). Each user can have membership in one or more groups.

Admins can make security settings that determine what users are allowed to do in ThoughtSpot. These settings are applied at the group level.

## Security model for sharing objects

You can share with groups and with individual users. Sharing of tables can be defined at the table, column, or row level. This provides flexibility in modeling your data security policy. Security and sharing settings apply to several different types of objects, each of which has its own security default settings and rules.

|Object type|Description|Default security model|Sharing procedure|
|-----------|-----------|----------------------|-----------------|
|Tables|The source data tables that have been loaded using ThoughtSpot Loader.|Administrator users have access to source tables. They can share a table with other users or groups.|[Share tables and columns](share_source_tables.html#)|
|Columns|The columns in the source data tables that have been loaded using ThoughtSpot Loader.|Administrator users have access to columns in the source tables. They can share selected columns with other users or groups.|[Share tables and columns](share_source_tables.html#)|
|Rows|The rows in the source data tables that have been loaded using ThoughtSpot Loader.|All rows in the source tables are shared with all users by default. You can hide rows from groups based on the values they contain.|[Define Legacy Row Level Security](row_security.html#)|
|Imported data|Data that was imported using a Web browser.|Only the user who imported the data (and any user with administrator privileges) has access to it by default. They can share a table (or selected columns) with other users or groups.|[Share tables and columns](share_source_tables.html#)|
|Worksheets|A worksheet created using a Web browser.|Only the creator of the worksheet (and any user with administrator privileges) has access to it by default. They can share a worksheet with other users or groups.|[Share worksheets](share_worksheets.html)|
|Pinboards|A pinboard of saved search results.|Anyone who can view a pinboard can share it.|[Share a pinboard](share_pinboards.html)|

## Row level security

ThoughtSpot includes robust [row level security](about_row_security.html#), which allows you to filter all objects users see based on conditions you set at the level of row values in base data tables.

## Related information

-   [Share tables and columns](../../admin/data_security/share_source_tables.html)  
-   [Share worksheets](../../admin/data_security/share_worksheets.html)  
-   [Share a pinboard](../../admin/data_security/share_pinboards.html)  
-   [Revoke access (unshare)](../../admin/data_security/unshare.html)  
-   [Row level security](../../admin/data_security/about_row_security.html)  
