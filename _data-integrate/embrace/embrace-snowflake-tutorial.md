---
title: [Snowflake Partner Connect Tutorial]
last_updated: 2/21/2020
toc: true
summary: "Explore this tutorial to learn how to model your data after connecting to your Snowflake database."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Though it is recommended to create your table joins in Snowflake, before you create a connection in ThoughtSpot, you can easily create joins in ThoughtSpot.  

The following example shows how the joins were created in the Sales table of the Retail Sales worksheet, available in your try.thoughtspot.com account.

## Creating table joins

The joins in the Sales table were created by doing the following:

1. Click **Data** in the top navigation bar.

2. Click the **Tables** tab at the top of the page.

3. Click the **Sales** table.

   The Columns view of the Sales table appears.

4. Click the **Schema** tab.  

5. Click **+Add join**.

   The Add Join window appears.

6. In the Add Join window, use the drop-down menus to make the following selections:
   - For Destination Table, select **Products**.
   - For Source Columns, select **Product_Key**.
   - For Destination Columns, select **Product_Key**.

   ![]({{ site.baseurl }}/images/snow-add-join.png "Add Join for Products")

7. Click **Next**.

8. Enter the name _Product_Key - Product_Key_, a description for your join (optional), and click **Next**.

   ![]({{ site.baseurl }}/images/snow-add-join-name.png "Join Name Products")

   The first join is created. Now you will add the other joins.

9. Click **+Add join**.

10. In the Add Join window, use the drop-down menus to make the following selections:
    - For Destination Table, select **Customers**.
    - For Source Columns, select **Customer_Key**.
    - For Destination Columns, select **Customer_Key**.

    ![]({{ site.baseurl }}/images/snow-add-join2.png "Add Join for Customers")

11. Click **Next**.

12. Enter the name _Customer_Key - Customer_Key_, a description for your join (optional), and click **Next**.

    ![]({{ site.baseurl }}/images/snow-add-join-name2.png "Join Name Customers")

13. Click **+Add join**.

14. In the Add Join window, use the drop-down menus to make the following selections:
    - For Destination Table, select **Stores**.
    - For Source Columns, select **Store_Key**.
    - For Destination Columns, select **Store_Key**.

    ![]({{ site.baseurl }}/images/snow-add-join3.png "Add Join for Stores")

15. Click **Next**.

16. Enter the name _Store_Key-Store_Key_, a description for your join (optional), and click **Next**.

    ![]({{ site.baseurl }}/images/snow-add-join-name3.png "Join Name Stores")

17. Click **+Add join**.

18. In the Add Join window, use the drop-down menus to make the following selections:
    - For Destination Table, select **Dates**.
    - For Source Columns, select **Date_Key**.
    - For Destination Columns, select **Date_Key**.

    ![]({{ site.baseurl }}/images/snow-add-join4.png "Add Join for Dates")

19. Click **Next**.

20. Enter the name _Date_Key - Date_Key_, a description for your join (optional), and click **Next**.

    ![]({{ site.baseurl }}/images/snow-add-join-name4.png "Join Name Dates")

    Now that all four table joins are created, the schema looks like this:

    ![]({{ site.baseurl }}/images/snow-schema.png "schema")

### Searching joined tables

You can easily search the joined tables, without having to create a worksheet.

To search the joined tables, do the following:

1. Click **Search**.

2. Click the _Retail Sales_ data source, and click **Choose sources**.

3. Select all the tables you just joined (Customers, Dates, Products, Sales, and Stores) and click **Close**.

4. In the search bar, enter **sales_dollar_amount**, **store_region**, and **monthly**.

   ![]({{ site.baseurl }}/images/snow-search-results.png "search results")

### Best practices for data modeling

Here are some examples of how you can model your data to enhance searchability:

- Change column names
- Add synonyms for columns

In the following example, the _Sales_Dollar_Amount_ column was renamed to Sales and the synonyms of _Revenue_ and _Dollars_ were added.

   ![]({{ site.baseurl }}/images/snow-model-best.png "search results")

These are just a couple of examples of things you can do.

For more information about data modeling, see:

- [Overview of data modeling settings]({{ site.baseurl }}/admin/data-modeling/data-modeling-settings.html)

## Related information

- [Embrace overview]({{ site.baseurl }}/data-integrate/embrace/embrace-intro.html)
- [Add a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-add.html)
- [Modify a Snowflake connection]({{ site.baseurl }}/data-integrate/embrace/embrace-snowflake-modify.html)
