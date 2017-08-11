---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# Link tables using relationships

You can link tables by creating relationships between their columns. Linked tables can be searched together or combined into a worksheet for easy searching. Tables that have no relationship between their columns can not be combined in a single search.

There are two ways to create relationships between tables:

1.  [Create a constraint using TQL.](../loading/constraints.html#)
2.  [Create a relationship through the web interface.](create_new_relationship.html#)

The two methods create the same kind of relationship both from an end user perspective and an administrative perspective.

Both types of relationships exist within the database. You can also generate a script through TQL that contains all relationships, whether create via the web interface or in TQL.

Relationships created through either method can be managed either via TQL or by going to the **Relationships** page when viewing data in the **Date Modeling** section in the ThoughtSpot application. You can view, modify, or delete relationships in either place.

You may create relationships using a mixture of TQL and the web interface, but the relationships you create cannot form a circular relationship, or "cycle". If you attempt to create a relationship that would complete a cycle, you will see a message saying that the relationship could not be added because it conflicts with another existing relationship.

-   **[Create a relationship](../../admin/data_modeling/create_new_relationship.html)**  
You can quickly create a relationship \(or link\) between tables that allows you to combine them in a single search. Choose a column to join on that both tables contain \(e.g. employee ID or product key\).
-   **[Delete a relationship](../../admin/data_modeling/delete_relationship.html)**  
If you created a relationship \(link\) between tables using the Web interface, you can also delete it from the Web interface. But if the relationship was created using TQL, you must also use TQL to delete it.

**Parent topic:** [Model, link, and tag your data for searching](../../admin/data_modeling/about_data_modeling_intro.html)

