---
title: [Join a table or View to another data source]
last_updated: 2/10/2021
summary: "Learn how to define joins between a table or View and another table, View, or Worksheet"
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Joining a table or View to another table, View, or Worksheet creates a relationship that allows them to be searched together. Choose a column to join on that both tables contain (e.g. employee ID or product key). This process creates a [generic join]({{ site.baseurl }}/admin/loading/constraints.html) between the table or View and the other table, View, or Worksheet on the column you specify.

You must have either the [**Can administrator ThoughtSpot** or the **Can manage data** privilege]({{ site.baseurl }}/admin/users-groups/about-users-groups.html) to create a join relationship. If you're not an administrator, you also need edit permissions on the table, View, or Worksheet.

When creating a join between the columns in two data sources, the linked columns must have the same data type, with the same meaning. That is, they must represent the same data. Normally, you can make this kind of link from a fact table column to a column in a dimension table that uniquely identifies a logical entity in your data such as Employee ID for a person, Product ID for a product, or Date Key for a specific date in a date lookup table.

To create a relationship through the Web interface:

1. Click **Data** in the top menu, and choose **Tables** or **Views**.

2. Find your table or View through browsing, Search, or selecting the appropriate Tag(s).

3. To select the table or View for adding joins, click its name in the list. You will see the **Columns** view of the data source.

4. Click the **Joins** tab. The list of existing joins appears.

  ![]({{ site.baseurl }}/images/table-add-joins.png "Create a join from a table")

5. Click **+Add Join**. The **Create Join** page appears.

  ![]({{ site.baseurl }}/images/table-create-join.png "Create a join from a table")
  <table>
    <tr>
      <th>Legend</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>1.</td>
      <td>Select the data source of your table or View, either <em>Embrace</em>, or <em>Falcon</em>.</td>
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

6. Under **Table 1**, choose the table you want to create a join from (origin table).

7. Under **Table 2**, choose the destination table or View for the other end of the join.

8. Choose the matching columns under each table. These columns must use the same data type. [Optional] You can select multiple columns for the same join. To add another pair of matching columns to the join definition, click **+Add columns**.

9. Specify the join type; see [Join types]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-type).

10. Specify the join cardinality; see [Cardinality]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-cardinality).

11. Click **Create join**.

12. Repeat these steps until all the joins you want to make have been created.

After creating the join, you may change its name, type, or cardinality by clicking the edit icon. If you want to change the data source or column being joined, you must delete the join and create a new one.

## Related Information

-   [Constraints]({{ site.baseurl }}/admin/loading/constraints.html)
