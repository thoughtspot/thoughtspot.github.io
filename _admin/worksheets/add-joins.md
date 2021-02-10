---
title: [Join a table&#44; View&#44; or Worksheet to another data source]
last_updated: 2/9/2021
summary: "Learn how to define joins between a table, View, or Worksheet and another table, view, or worksheet"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## About joins

A join combines columns from one or more sources in your data by using matching values. By defining relationships between your sources, you create a new, richer set of data that you can use to answer your business questions. Choose a column to join on that both data sources contain (e.g. employee ID or product key). This process creates a [generic join]({{ site.baseurl }}/admin/loading/constraints.html) between the source table or View, and the target table, View, or Worksheet on the column you specify.

{% include note.html content="If you want to create a primary key/foreign key relationship, you need to use TQL rather than the web interface." %}

For details on primary key/foreign key relationships in TQL, see [constraints]({{ site.baseurl }}/admin/loading/constraints.html).

{: id="join-type"}
### Join types

ThoughtSpot supports the following join types: Inner, Left Outer, Right Outer, and Full Outer. You can choose a join type when creating or editing a join through the ThoughtSpot web interface.

![]({{ site.baseurl }}/images/join-type-venn-diagrams.png "Venn diagram of join types")

ThoughtSpot defaults to the inner join type, which returns results for data with matching values in both the origin table (Table 1) and the target table (Table 2).

Left outer joins return results for all values from Table 1, and any matching values from Table 2.

Right outer joins return results for all values from Table 2, and any matching values from Table 1.

Full outer joins return results for all values from either Table 1 or Table 2.

{: id="join-cardinality"}
### Join cardinality

When creating the join, you must also identify its **cardinality**: Many:1, 1:Many, or 1:1.

A Many:1 cardinality defines a join where multiple values in the origin table (Table 1) correspond to one value within the target table (Table 2). A join between a product table and a product category table shows multiple products that match each category.

A 1:Many cardinality defines a join where one value in the origin table corresponds to multiple values within the target table.

A 1:1 cardinality defines a join where one value in the origin table corresponds to a single value within the target table (e.g. employee name and employee ID).

You must create a join between columns in two data sources that contain the same data type, with the same meaning. That is, they must represent the same data. Normally, you can make this kind of link from a fact table column to a column in a dimension table that uniquely identifies a logical entity in your data such as Employee ID for a person, Product ID for a product, or Date Key for a specific date in a date lookup table.


### Possible joins

You must have either the [**Can administer ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to create a join relationship. If you're not an administrator, you also need edit permissions on the table, View, or Worksheet.

See this list for information about which joins you can create, and what permissions these joins require.

{% include content/joins-definition-list.md %}

{% include note.html content="If you create joins at the table level, and then create a Worksheet that uses the columns from the table, the settings are inherited from the table at the point in time that the Worksheet is created. If you then go back and change the settings at the table level, your changes will not be reflected in the Worksheet. If you want the Worksheet to have the changes you made at the table level, you must drop those columns from the Worksheet and re-add them." %}

{: id="table-join"}
#### Creating a join from a table

{% include content/joins-create-table.md %}

#### Creating a join from a Worksheet or View

{% include content/joins-create-worksheet.md %}

### Modifying joins

ThoughtSpot allows you to edit the name, join type, and cardinality through the Web interface. To change the columns that define a join, you must delete the join and create a new one.

#### Editing a join from a table

{% include content/joins-edit-table.md %}

#### Editing a join from a Worksheet or View

{% include content/joins-edit-worksheet.md %}

#### Deleting a join

{% include content/joins-delete.md %}

## Related Information
-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
