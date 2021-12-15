---
title: [Create a custom calendar]
last_updated: 5/5/2021
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Before you begin

You must have administrator-level permissions to create a table in the database of the cloud data warehouse of the connection.

## Methods of creating a custom calendar

You can use one of the following methods to create a custom calendar:
- Create a calendar
- Upload a file
- Use an existing table

## Creating a custom calendar

You can create one of the following calendar types:
- Month offset
- Four Four Five
- Four Five Four
- Five Four Four

If you need to create a different type of calendar, including one that uses a different language for the names of months or days of the week, you must upload your custom calendar file. In this case, ThoughtSpot suggests you first create a calendar in one of the supported calendar types to use as a template, by following the steps below. After that, you can download and [update]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update.html#update-cal) it to your specific requirements.

To create a custom calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline} **Custom calendar**.

   The Custom calendar page appears.

3. Click **Create Custom Calendar**.

   The Create Custom Calendar dialog appears.

   ![]({{ site.baseurl }}/images/cust-cal-embrace.png)

4. For Calendar Name, enter a name for your calendar.

   {% include note.html content="The calendar name must be unique in the cluster." %}

5. Click the **Choose Connection** menu, and select the connection where you want to use your custom calendar.

6. For Database, click the **Choose a database** menu, and select the database you want to use with your custom calendar.

7. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your custom calendar.

6. Make sure **Create** is selected.

7. For Table, enter a name for the table that will be created for your custom calendar.

8. For Start Date, enter the date you want your custom calendar to start.

    {% include important.html content="Both Start Date and End Date must be in *MM/DD/YYYY* format." %}

9. For End Date, enter the date you want your custom calendar to end.

10. For Calendar Type, click the **Choose a calendar type** menu, and select the type of calendar you want to create. Possible types include:
- MONTH_OFFSET
- FOUR_FOUR_FIVE
- FOUR_FIVE_FOUR
- FIVE_FOUR_FOUR

11. For Monthly offset, click the menu and select a month.

12. For Start day of week, click the menu and select a day.

13. For Quarter name prefix, enter the prefix you'd like to use for quarter numbers.

    Example: *Q*

14. For Year name prefix, enter the prefix you'd like to use for years.   

    Example: *FY*

15. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

    Your custom calendar appears in the list of calendars.

## Uploading a file for a custom calendar

This option provides you the ability to upload a calendar file. You can [update]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update.html#updating-the-calendar-file) an existing calendar by downloading it, making changes to it, and then uploading it.

To upload a file to use as a custom calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline} **Custom calendar**.

   The Custom calendar page appears.

3. Click **Create Custom Calendar**.

   The Create Custom Calendar dialog appears.

   ![]({{ site.baseurl }}/images/cust-cal-embrace.png)

4. For Calendar Name, enter a name for your calendar.

   {% include note.html content="The calendar name must be unique in the cluster." %}

5. Click the **Choose Connection** menu, and select the connection where you want to use your custom calendar.

6. For Database, click the **Choose a database** menu, and select the database you want to use with your custom calendar.

7. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your custom calendar.

8. Select **Upload File**.

   ![]({{ site.baseurl }}/images/custom-cal-upload.png)

9. For Table, enter a name for the table that will be created for your custom calendar.

10. For File, click the **Upload** button, select the file, and click **Open**.

11. For Separator, select delimiter format used in your calendar file.

   Supported delimiters include: Comma(`,`), Pipe(`|`), Semicolon(`;`), and Tab.

10. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

    Your custom calendar appears in the list of calendars.

## Use an existing table for a custom calendar

This option provides you the ability to use an external table in your connection as a calendar.

To use an external table as a custom calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline} **Custom calendar**.

   The Custom calendar page appears.

3. Click **Create Custom Calendar**.

   The Create Custom Calendar dialog appears.

   ![]({{ site.baseurl }}/images/cust-cal-embrace.png)

4. For Calendar Name, enter a name for your calendar.

   {% include note.html content="The calendar name must be unique in the cluster." %}

5. Click the **Choose Connection** menu, and select the connection where you want to use your custom calendar.

6. For Database, click the **Choose a database** menu, and select the database you want to use with your custom calendar.

7. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your custom calendar.

8. Select **Existing Table**.

   ![]({{ site.baseurl }}/images/custom-cal-table.png)

9. For Table, select an external table to use for creating your custom calendar.

10. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

    Your custom calendar appears in the list of calendars.

## Using your custom calendar in your connection

After you create your custom calendar, you must specify where to use it in your connection.

To use your custom calendar, do the following:

1. Sign in to your ThoughtSpot cluster and click **Data** > **Connections**.

2. Click the name of the connection where you want to use your calendar.

3. Click the name of the table where you want to use your calendar.

4. Find the column where you want to use your calendar.

   {% include note.html content="The column must use the DATE or DATE_TIME data type." %}

5. Refresh the page to make sure your custom calendar is available.

5. Scroll horizontally to the CALENDAR TYPE column.

6. In the CALENDAR TYPE column for the column(s) you chose, double-click the existing calendar name (example: "None"), and then select your custom calendar.

7. Click **Save Changes**.

   Now, date-related searches in the selected table use your custom calendar.

   After creating a custom calendar, you easily look at it to confirm it is set up the way you want. For details, see [View a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-create.html#view-cust-cal).

## (Optional) Set a custom calendar as the default calendar for your cluster

To set your custom calendar as the default calendar for your cluster, contact [ThoughtSpot Support]({{ site.baseurl }}/end-user/help-center/contact.html).

{: id="view-cust-cal"}
## View a custom calendar

After creating a custom calendar, you can easily open it from the ThoughtSpot UI to look at its configuration.

To view a custom calendar, do the following:

1. Sign in to your ThoughtSpot cluster.

2. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline} **Custom calendar**.

   The Custom calendar page appears.

3. Click the name of the custom calendar you want to view.

   Your custom calendar opens in a window displaying all columns and rows. You can scroll through these to verify your calendar is set up the way you want.

4. When you're done viewing your calendar, close the window by clicking **Done**.

## Related information

[Update a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update.html#)   
[Delete a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-delete.html#)   
[Custom calendar overview]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html#)   
[Fiscal and Gregorian calendars]({{ site.baseurl }}/advanced-search/formulas/date-formulas.html#fiscal-and-gregorian-calendars)
