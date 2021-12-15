---
title: [Create worksheets in Setup]
last_updated: 12/14/2021
summary: "To model your use case in analyst onboarding, create a worksheet."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

To simplify data modeling, ThoughtSpot supports automated worksheet creation during Setup. When creating a worksheet through the Setup tab, you can view suggested joins, and take advantage of data modeling best practices, making your data easier to search.

## About worksheets

Users are often unfamiliar with tables and how they relate to one another. A worksheet groups multiple related tables together in a logical way. Using worksheets has the following advantages:

* Pre-join multiple tables together.
* Give a user or group access to only part of the underlying data.
* Include a derived column using a formula.
* Rename columns to make the data easier to search.
* Build in a specific filter or aggregation.
* Give users a filtered set of data to search.

## Create a worksheet in Setup

To generate a worksheet through the Setup tab, follow these steps:

1. Enter Setup by logging in for the first time, or by selecting **Profile** from the user icon at the top right of the page and clicking **Revisit** under **Preferences**.

2. Complete Step 1 of Setup, [setting up your connection]({{ site.baseurl }}/admin/ts-cloud/connect-data.html).

3. Select Step 2, *Model data and create a Worksheet.*

4. Select *Create Worksheet* in the lower left corner. A list of the available fact tables from your connection appears.

5. By default, ThoughtSpot suggests the fact table with the largest number of rows. Select the box next to the fact table from which you would like to create your Worksheet and click **Next**.<br>

   {% include note.html content="After the worksheet is created, you will have the option to add more fact tables to its schema."%}

6. A list of the available dimension tables from your connection appears. Choose the dimension table(s) to join to your fact table and click *Next*. You can choose up to four dimension tables.

7. The joins interface appears, showing a join based on a column of data both tables contain. You can proceed with the suggested join, or click the column names to change the join.<br>

   {% include note.html content="The default join type is Inner, which will yield all search results with matching values from the fact table and the dimension table. You can click the Venn diagram icon to change the join type."%}

8. Select *Next*. The columns view of your worksheet appears. You may notice that the column names have been changed to make them more easily searchable (for example, underscores may be replaced with spaces).

9. [Optional] Click *My Worksheet* to change the name of your worksheet.

10. [Optional] Select the column titles to change the names of your searchable columns. You can also select the blue check-box next to a column name to remove it from your worksheet.

11. [Optional] Select the data type under *Type* to change the recorded data type. For example, you can change a data type like Zipcode from ‘Measure’ to ‘Attribute’.

12. Click *Save worksheet*. Your worksheet is now available to search and share. <br>

   {% include note.html content="Joins created in the setup of a worksheet are inherited at the table level. To remake your auto-generated worksheet through the Setup tab, you must first delete the worksheet, then delete the joins at the table level."%}

## Next steps

Proceed to [Search and visualize]({{ site.baseurl }}/admin/ts-cloud/automated-answer-creation.html) to complete Setup.
