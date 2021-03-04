To create a join from a Worksheet:
1. To find your worksheet, click **Data** on the top menu, and choose **Worksheets**.
2. Find your Worksheet through browsing, Search, or selecting the appropriate Tag(s).
3. To select the Worksheet for adding joins, click its name in the list.
4. Click the **Joins** tab. The list of existing joins within the worksheet appears.
![]({{ site.baseurl }}/images/joins-within-worksheet.png "View existing joins within a worksheet")
5. To view the joins between the Worksheet and other data sources, click **Joins within this worksheet**, and choose **Joins from this worksheet**.
6. To start creating a join, click **+ Add Join** on the upper right side of the screen.
![]({{ site.baseurl }}/images/worksheet-add-join.png "Add a join worksheet")
7. In the **Add Join** dialog, choose the destination table or View for the other end of the join.
![]({{ site.baseurl }}/images/worksheet-join-dialog.png "Enter destination table in the join dialog")
8. Choose the matching columns under each table. These columns must use the same data type.
[Optional] You can select multiple columns for the same join. To add another pair of matching columns to the join definition, click **+ Add columns**.
9. Specify the join type; see [Join types](#join-type).
10. Specify the join cardinality; see [Cardinality](#join-cardinality).
11. Click **Create join**.
