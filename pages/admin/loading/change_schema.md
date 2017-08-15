---
title: [Change the schema]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
After you've created a schema and loaded data, you may find yourself wishing you'd set things up a little differently. You can make changes to the schema, such as changing the primary key, relationships to other tables, and sharding.

Making changes to a schema after data has been loaded and users have created worksheets or pinboards on the tables requires care, so that you don't lose the relationship between the objects created in ThoughtSpot and the underlying tables. If you follow the procedures here, your tables will retain their relationships to the objects created on top of them:

-   [Change the primary key for a table](change_primary_key.html#).
-   [Change a relationship between tables](change_relationships_tql.html#).
-   [Change sharding on a table](change_sharding.html#).

-   **[Change the primary key for a table](../../admin/loading/change_primary_key.html)**  
Use this procedure to change the primary key for a table. But use it with caution, particularly if you are changing to a primary key for which values are not unique.
-   **[Change a relationship between tables](../../admin/loading/change_relationships_tql.html)**  
Use this procedure to remove a relationship between tables or define a new one. This operation works for both kinds of relationships: foreign key or generic relationship.
-   **[Change sharding on a table](../../admin/loading/change_sharding.html)**  
You can change the sharding on a table or remove it altogether (creating a replicated table) using this procedure. This procedure preserves the data within the table.
-   **[About data type conversion](../../admin/loading/about_data_type_conversion.html)**  
You can convert the data in a column from one data type to another by issuing a TQL command. There are some details you should be aware of when doing a data type conversion.

**Parent topic:** [Load and manage data](../../admin/loading/loading_intro.html)
