---
title: [Join tables]
last_updated: 5/22/2020
summary: "Create joins between your tables to improve the accuracy of your Search."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

With joins, you can make a single search retrieve rich data and dimensional information across multiple tables of your database.

If your database uses any table joins, they appear in ThoughtSpot.

## About joins

<script src="https://fast.wistia.com/embed/medias/vyffltai66.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_vyffltai66 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

## Create a table join

1. Click **Data** in the top menu and choose **Tables**.

2. Find your table through browsing, Search, or selecting the appropriate Tag(s).

3. To select the table for adding joins, click its name in the list. You will see the **Columns** view of the table.

{% include note.html content="Generally, creating a many-to-one join from a fact table to a dimension table simplifies your search." %}

4. Select the **Joins** tab. The list of existing joins from the table appears.

![]({{ site.baseurl }}/images/table-add-joins.png "Add a join to a table")

5. Click **+ Add join**. The **Create join** page appears.

![]({{ site.baseurl }}/images/table-create-join.png "Create a join from a table")
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

6. Under **Table 1**, choose the table you want to create a join from (origin table).

7. Under **Table 2**, choose the destination table or View for the other end of the join. This is usually a dimension table.

8. Choose the matching columns under each table. These columns must use the same data type.

9. [Optional] You can select multiple columns for the same join. To add another pair of matching columns to the join definition, click **+Add columns**.

10. Specify the join type; see [Join types]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-type).

11. Specify the join cardinality; see [Cardinality]({{ site.baseurl }}/admin/worksheets/add-joins.html#join-cardinality).

12. Click **Create join**.

You can now see the updated view of the schema.
You can also see the detailed information about all **Joins**. Note that after creating the join, you may change its name, type, or cardinality by clicking the edit icon. If you want to change the data source or column being joined, you must delete the join and create a new one.

Proceed to create all necessary table joins, to support your data requirements.

**Congratulations!** Your search can now pull data from all joined tables.

## Next steps
Next, [create Worksheets]({{ site.baseurl }}/admin/ts-cloud/worksheet-create.html).

## Additional resources

As you develop your expertise with joins and schema, we recommend the following ThoughtSpot U course:

- <a href="https://training.thoughtspot.com/1-setting-up-joins" target="_blank">Setting up joins</a>

See other training resources at <br />
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
