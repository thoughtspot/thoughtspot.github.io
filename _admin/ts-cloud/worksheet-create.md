---
title: [Create Worksheets]
last_updated: 06/01/2020
summary: "To model your use case and optimize ThoughtSpot Search, create a worksheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Whenever you start a new analytics inquiry, the most important question to ask is **"What use case does this support?"**

We recommend that you keep the following points in mind as you select your use case, and then design a worksheet to support it.

Good **use cases** support:

- Actionable data, and measurable value
- Time value of answers
- Variability of questions
- Large addressable audience
- Large data volume, and need for granular analysis at variable levels
- Relational data that is modeled for analytical use

**Worksheets** provide a simplified view of your data for users to search. We designed them to directly support use cases, so they have the following advantages when compared to searching directly across tables:

- Optimize the Search experience
- Present only relevant data columns, to reduce information overload
- View flat presentation of combined data tables
- Rename columns and terms
- Enable change of numerical columns from measurement (default) to attribute
- Specify default aggregation functions
- Specify formatting and currency symbols
- Identify columns that contain geographical data
- Match the user vocabulary by mapping data to recognizable business concepts
- Standardize formulas for consistency and governance
- Give a user or group access to only part of the underlying data
- Give users a filtered set of data to search

Typically, you create one worksheet for each set of fact and dimension tables. For example, you may have a sales fact table and an inventory fact table. Each of these fact tables shares common dimensions like date, region, and store. In this scenario, you would create two worksheets: sales and inventory. The following diagram depicts the workflow for creating the sales worksheet.

![]({{ site.baseurl }}/images/workflow_create_worksheet.png "Create worksheet")

To simplify data modeling, ThoughtSpot supports automated worksheet creation during Setup. When creating a worksheet through the Setup tab, you can view suggested joins, and take advantage of data modeling best practices, making your data easier to search.

## Create a worksheet through Setup

To generate a worksheet through the Setup tab, follow these steps:

1. Complete Step 1 of Setup, <a href="{{ site.baseurl }}admin/ts-cloud/connect-data.html">setting up your connection</a>.

2. Click Step 2, *Model data and create a Worksheet.* Select *Create Worksheet* in the lower left corner. A list of the available fact tables from your connection appears.

3. By default, ThoughtSpot suggests the fact table with the largest number of rows. Select the box next to the fact table from which you would like to create your worksheet and click **Next**. <br/>

   {% include note.html content="After the worksheet is created, you will have the option to add more fact tables to its schema."%}

4. A list of the available dimension tables from your connection appears. Choose the dimension table(s) to join to your fact table and click *Next*. You can choose up to four dimension tables.

6. The joins interface appears, showing a join based on a column of data both tables contain. You can proceed with the suggested join, or click the column names to change the join.<br/>

   {% include note.html content="The default join type is Inner, which will yield all search results with matching values from the fact table and the dimension table. You can click the Venn diagram icon to change the join type."%}

7. Click *Next*. The columns view of your worksheet appears. You may notice that the column names have been changed to make them more easily searchable (for example, underscores may be replaced with spaces).

8. [Optional] Click *My Worksheet* to change the name of your worksheet.

9. [Optional] Click the column titles to change the names of your searchable columns. You can also click the blue check-box next to a column name to remove it from your worksheet.

10. [Optional] Click the data type under *Type* to change the recorded data type. For example, you can change a data type like Zipcode from ‘Measure’ to ‘Attribute’.

11. Click *Save worksheet*. Your worksheet is now available to search and share. <br/>

   {% include note.html content="Joins created in the setup of a worksheet are inherited at the table level. To remake your auto-generated worksheet through the Setup tab, you must first delete the worksheet, then delete the joins at the table level."%}


## Create a worksheet manually

<script src="https://fast.wistia.com/embed/medias/6zbrrirs8z.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_6zbrrirs8z popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

Follow these steps to create worksheets:

![Create a Worksheet]({{ site.baseurl }}/images/worksheet-create.gif "Create a Worksheet")

1. Under **Data**, see **Sources**. Click **+**.

2. The **Choose sources** interface appears. <br/>

   It contains the list of tables that in the connection.

3. Click on each table you plan to include in the worksheet.

4. At the top right corner of the interface, click **Close**.

5. Back on the **Data** interface, under **Sources**, note that the list of tables you selected appears.

6. Expand one of the tables by clicking the toggle icon.

7. Select the columns to include in the worksheet.

8. Click **+ Add columns**.

9. Notice that the table and its columns appear on the main pane of the interface.

10. Repeat for each table you plan to include in the worksheet. <br/>

    You can always navigate to a table you identified, and change the column selections.

11. After you finish selecting the tables and columns, click the **More** menu at the top right corner of the interface. <br/>

    Click **Save**.

12. In the **Save Worksheet** interface, enter the following values:

    - **Name** is the name of the worksheet. You can select it as a data source in your searches.

    - **Description** is optional; we recommend that you identify the supported use case here.<br/>

    Click **Save**.

13. **Congratulations!** You now have a worksheet to use as a data source for Searching and building standard formulas. <br/>

    We recommend that you customize the worksheet in the following manner:

    - **Rename columns** to make them user-readable.
    - **Change column type** default settings of numeric fields from measurement to attribute, when these numbers represent categorical information instead of measurements that are aggregated.
    - **Change aggregation** function for measurement columns. For example, columns that track life expectancy should use `AVERAGE` or `MAX`, and never use `SUM`.

***Next***, you can proceed to [Visualize Search results as Answers]({{ site.baseurl }}/admin/ts-cloud/visualize-search.html).


## Introduction to formulas

<script src="https://fast.wistia.com/embed/medias/6vq23v9us8.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_6vq23v9us8 popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

## Additional resources

As you develop your expertise with developing and customizing worksheets, we recommend the following ThoughtSpot U courses:

- <a href="https://training.thoughtspot.com/2-worksheet-design" target="_blank">Worksheet Design</a>
- <a href="https://training.thoughtspot.com/series/business-analyst/2-using-formulas" target="_blank">Using Formulas</a>

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
