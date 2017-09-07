---
title: [Delete a relationship]
tags:
keywords: "delete,relationship,table"
last_updated: tbd
summary: "You can delete relationship (link) between tables through the application or TQL."
sidebar: mydoc_sidebar
---
You must have either administration privilege or modify access permission to the columns to delete a relationship. If you created a relationship (link) between tables using the Web interface, you can also delete it from the Web interface. But if the relationship was created using TQL, you must also use TQL to delete it.

To delete a relationship using [TQL](../reference/sql_cli_commands.html#), use an `ALTER TABLE...DROP FOREIGN KEY...` statement. To delete a relationship from the Web interface:

1. Click on the **DATA** icon on the top navigation bar and then on **Worksheets**.

    ![](../../shared/conrefs/../../images/data_icon_and_worksheets.png)

2. Click on the name of the data source you from which you want to remove the relationship.
3.  Select **Relationships**.

     ![](../../shared/conrefs/../../images/select_relationships.png "Select Relationships")

4. Find the relationship you want to delete, and click **Delete**.

     ![](../../images/relationship_delete.png "Delete a relationship")
