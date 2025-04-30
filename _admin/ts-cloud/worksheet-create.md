---
title: [Create Worksheets]
last_updated: 5/22/2020
summary: "To model your use case and optimize ThoughtSpot Search, create a Worksheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Whenever you start a new analytics inquiry, the most important question to ask is **"What use case does this support?"**

We recommend that you keep the following points in mind as you select your use case, and then design a Worksheet to support it.

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

## Create Worksheets

<script src="https://fast.wistia.com/embed/medias/6zbrrirs8z.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><span class="wistia_embed wistia_async_6zbrrirs8z popover=true popoverAnimateThumbnail=true popoverBorderColor=4E55FD popoverBorderWidth=2" style="display:inline-block;height:252px;position:relative;width:450px">&nbsp;</span>

Follow these steps to create Worksheets:

![Create a Worksheet]({{ site.baseurl }}/images/worksheet-create.gif "Create a Worksheet")

1. Under **Data**, see **Sources**. Click **+**.

2. The **Choose sources** interface appears.

   It contains the list of tables that in the connection.

3. Click on each table you plan to include in the Worksheet.

4. At the top right corner of the interface, click **Close**.

5. Back on the **Data** interface, under **Sources**, note that the list of tables you selected appears.

6. Expand one of the tables by clicking the toggle icon.

7. Select the columns to include in the Worksheet.

8. Click **+ Add columns**.

9. Notice that the table and its columns appear on the main pane of the interface.

10. Repeat for each table you plan to include in the worksheet.

    You can always navigate to a table you identified, and change the column selections.

11. After you finish selecting the tables and columns, click the **More** menu at the top right corner of the interface.

    Click **Save**.

12. In the **Save Worksheet** interface, enter the following values:

    - **Name** is the name of the Worksheet. You can select it as a data source in your searches.

    - **Description** is optional; we recommend that you identify the supported use case here.

    Click **Save**.

13. **Congratulations!** You now have a Worksheet to use as a data source for Searching and building standard formulas.

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
