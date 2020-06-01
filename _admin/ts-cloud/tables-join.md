---
title: [Join tables]
last_updated: 5/22/2020
summary: "Create joins between your tables to"
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

With joins, you can make a single search retrieve rich data and dimensional information across multiple tables of your database.

If your database uses any table joins, they appear in ThoughtSpot.

## About joins

<script src="https://fast.wistia.com/embed/medias/vyffltai66.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_vyffltai66 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

## Select origin table

![Select tables]({{ site.baseurl }}/images/join-tables.gif "Select source table for the join")

1. **Select the connection**:

   - On the top bar, click **Data**.
   - Click **Connections**.
   - Select and click on your connection.

2. The **Connection** details include the listing of all tables in the connection.

3. Select the **fact table**, so the join direction points from _many_ to _one_. This is important.

4. In the table detail view, select the **Schema** option.

5. If your connection already has joins between tables, they appear in the **Schema** and **Joins** interface.

6. To specify a new join, click **+ Add join**.


## Create the join

![Create the join]({{ site.baseurl }}/images/join-create.gif "Create the join")

1. After you click **+ Add join**, the **Add join** interface appears.

2. The _Source Table_ of the join is set.

3. Select the _Destination Table_. This is usually a dimension table.

3. Under the _Source Table_, select the _Source Column_ that connects the two tables.

4. The _Destination Table_, select the _Destination Column_ that matches the _Source Column_. Note that the match is for the data; it does not matter if the columns have the same name.

5. Click **Next**.

6. Specify the **Join Name**, and optionally, the **Join Description**.

7. Click **Next**.

You can now see the updated view of the **Schema**. The direction of the join is from the fact table to the dimension table.

You can also see the detailed information about all **Joins**. Note that you can change the name and description of the joins, and you can delete these joins. However, you cannot change their type, or their direction direction.

Proceed to create all necessary table joins, to support your data requirements.

**Congratulations!** Your search can now pull data from all joined tables.

## Next steps
Next, [create Worksheets]({{ site.baseurl }}/admin/ts-cloud/worksheet-create.html).

## Additional resources

[![ThoughtSpot University]({{ site.baseurl }}/images/ts-u.png)](https://training.thoughtspot.com/)

As you develop your expertise with joins and schema, we recommend the following course:

- <a href="hhttps://training.thoughtspot.com/1-setting-up-joins">Creating Joins</a>
