---
title: [Link tables using relationships]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can link tables by creating relationships between their columns. Linked tables can be searched together or combined into a worksheet for easy searching. Tables that have no relationship between their columns can not be combined in a single search.

There are two ways to create relationships between tables:

1.  [Create a constraint using TQL.](../loading/constraints.html#)
2.  [Create a relationship through the web interface.](create-new-relationship.html#)

The two methods create the same kind of relationship both from an end user perspective and an administrative perspective.

Both types of relationships exist within the database. You can also generate a script through TQL that contains all relationships, whether create via the web interface or in TQL.

Relationships created through either method can be managed either via TQL or by going to the **Relationships** page when viewing data in the **Date Modeling** section in the ThoughtSpot application. You can view, modify, or delete relationships in either place.

You may create relationships using a mixture of TQL and the web interface, but the relationships you create cannot form a circular relationship, or "cycle". If you attempt to create a relationship that would complete a cycle, you will see a message saying that the relationship could not be added because it conflicts with another existing relationship.
