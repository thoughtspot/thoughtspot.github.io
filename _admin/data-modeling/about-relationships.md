---
title: [Link tables using relationships]
summary: Learn how to link tables using relationships.
last_updated: 11/15/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can link tables by creating relationships between their columns. Linked tables can be searched together or combined into a worksheet for easy searching. Tables that have no relationship between their columns can not be combined in a single search.

There are two ways to create relationships between tables:

1.  [Create a constraint using TQL.]({{ site.baseurl }}/admin/loading/constraints.html#)
2.  [Create a relationship through the web interface.](create-new-relationship.html#)

The two methods create the same kind of relationship both from an end user perspective and an administrative perspective. When creating a relationship between two tables, the columns that form the link must be the exact same data type.  For example, a column of type `INT32` to another `INT32` column.

Both types of relationships exist within the database. You can also generate a script in TQL that contains all relationships, both the ones create in the web interface and the ones created in TQL.

Relationships created through either method can be managed either in TQL or by going to the **Relationships** page when viewing data in the **Date Modeling** section in the ThoughtSpot application. You can view, modify, or delete relationships in either place.

You may create relationships using a mixture of TQL and the web interface, but the relationships you create cannot form a circular relationship, or "cycle". If you attempt to create a relationship that would complete a cycle, you will see a message stating that the relationship could not be added because it conflicts with another existing relationship.
