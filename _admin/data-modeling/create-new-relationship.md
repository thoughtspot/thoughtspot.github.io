---
title: [Join a table or View to another data source]
last_updated: 2/24/2021
summary: "Learn how to define joins between a table or View and another table, View, or Worksheet"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Joining a table or view to another table, view, or worksheet creates a relationship that allows them to be searched together. Choose a column to join on that both tables contain (e.g. employee ID or product key). This process creates a [generic join]({{ site.baseurl }}/admin/loading/constraints.html) between the table or view and the other table, view, or worksheet on the column you specify.

If you want to create a primary key/foreign key relationship, you need to [use TQL]({{ site.baseurl }}/admin/loading/constraints.html) rather than the web interface.

{% include note.html content="Defining a generic relationship in the UI rather than using a primary key/ foreign key join through TQL has no impact on performance. However, when creating relationships in the UI, you must ensure that you create it in the right direction: many to one. To create many-to-many joins, or to create joins using >, <, >=, or <=, use TQL." %}

You must have either the [**Can administer ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to create a join relationship. If you're not an administrator, you also need edit permissions on the table, view, or worksheet.

See this list for information about which joins you can create, and what permissions these joins require.

{% include content/joins-definition-list.md %}

When creating a join between the columns in two data sources, the linked columns must have the same data type, with the same meaning. That is, they must represent the same data. Normally, you can make this kind of link from a fact table column to a column in a dimension table that uniquely identifies a logical entity in your data such as Employee ID for a person, Product ID for a product, or Date Key for a specific date in a date lookup table.

To create a relationship through the Web interface:

1. To find your table or View, click **Data** in the top menu, and choose **Tables** or **Views**.

2. Click the name of your table or View.

3. Click **Joins**. You will see the list showing existing joins.

4. Click **+ Add Join** on the upper right side of the screen. The **Create Join** page appears.

   ![]({{ site.baseurl }}/images/table-create-join.png "Add join")
   <table>
     <tr>
       <th>Legend</th>
       <th>Action</th>
     </tr>
     <tr>
       <td>1.</td>
       <td>Select the data source of your table, either <em>Embrace</em>, or <em>Falcon</em>.</td>
     </tr>
     <tr>
       <td>2.</td>
       <td>Choose your connection from the dropdown <em>Connection</em> menu. You can only create joins between data sources uploaded through the same connection.</td>
     </tr>
     <tr>
       <td>3.</td>
       <td>[Optional] Click <em> Enter join name</em> to name your join. Note that ThoughtSpot automatically names joins using the following syntax: [OriginDataSourceName]_to_[DestinationDataSourceName]. You can always enter a more meaningful join name, either when creating, or when editing the join.</td>
     </tr>
   </table>
5. Under **Table 1**, choose the table or View you want to create a join from (origin table).

6. Under **Table 2**, choose the destination table or View for the other end of the join.

7. Choose the matching columns under each data source. These columns must use the same data type. [Optional] You can select multiple columns for the same join. To add another pair of matching columns to the join definition, click **+Add columns**.

8.  Specify the join type; see [Join types]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-type).

9. Specify the join cardinality; see [Cardinality]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-cardinality).

10. Click **Create join**.

After creating the join, you may change its name, type, cardinality and description by clicking the edit icon. If you want to change the data source or column being joined, you must delete the join and create a new one.

## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
