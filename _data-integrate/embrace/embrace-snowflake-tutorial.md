---
title: [Snowflake Partner Connect Tutorial]
last_updated: 2/21/2020
toc: true
summary: "Explore this tutorial to learn how to model your data after connecting to your Snowflake database."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If the tables in your Snowflake connection do not have joins, you can easily create joins in ThoughtSpot. This allows you to build a relationship between those tables, and use ThoughtSpot to ask questions and get answers, right away.

## Joining tables in a Snowflake connection

To join tables in a Snowflake connection, do the following:

1. Click **Data** in the top navigation bar.

2. Click the **Connections** tab at the top of the page.

3. Click the name of your Snowflake connection.

   ![]({{ site.baseurl }}/images/select-connection.png "select Connection")

4. Click the **Sales** table.

   The Columns view of the Sales table appears.

5. Click the **Schema** tab.  

6. Click **+Add join**.

   The Add Join window appears.

7. In the Add Join window, use the drop-down menus to make the following selections:
   - For Destination Table, select **Products**.
   - For Source Columns, select **Product_Key**.
   - For Destination Columns, select **Product_Key**.

8. Click **Next**.

9. Enter the name _Product Key - Product key_, a description for your join (optional), and click **Next**.

   The first join is created. Now you will add the other joins.

10. Click **+Add join**.

11. In the Add Join window, use the drop-down menus to make the following selections:
   - For Destination Table, select **Customers**.
   - For Source Columns, select **Customer_Key**.
   - For Destination Columns, select **Customer_Key**.

12. Click **Next**.

13. Enter the name _Customer Key - Customer key_, a description for your join (optional), and click **Next**.

14. Click **+Add join**.

15. In the Add Join window, use the drop-down menus to make the following selections:
   - For Destination Table, select **Stores**.
   - For Source Columns, select **Store_Key**.
   - For Destination Columns, select **Store_Key**.

16. Click **Next**.

17. Enter the name _Store Key_, a description for your join (optional), and click **Next**.

18. Click **+Add join**.

19. In the Add Join window, use the drop-down menus to make the following selections:
   - For Destination Table, select **Dates**.
   - For Source Columns, select **Date_Key**.
   - For Destination Columns, select **Date_Key**.

20. Click **Next**.

21. Enter the name _Sales - Date_, a description for your join (optional), and click **Next**.

    Now that all four table joins are created, the schema looks like this:

    <insert screenshot of schema>

### Searching joined tables

You can easily search the joined tables.

To search the tables, do the following:

1. Click **Search**.

2. Click the _Retail Sales_ data source, and click **Choose sources**.

3. Select all the tables you just joined (Customers, Dates, Products, Sales, and Stores) and click **Close**.

4. In the search bar, enter **sales_dollar_amount**, **store_region**, and **monthly**.

<screenshot example of search results>

### Best practices for data modeling

Here are some examples of how you can model your data to enhance searchability:

- Change column names
- Add synonyms for columns

In the following example, the _Sales_Dollar_Amount_ column was renamed to Sales and the synonyms of _Revenue_ and _Dollars_ were added.

<screenshot example>

These are just a couple of examples of things you can do.

For more information about data modeling, see:
- [Overview of data modeling settings]({{ site.baseurl }}/admin/data-modeling/data-modeling-settings.html)


## Related information

- [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html)
- [Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)
- [Modify a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-modify.html)
