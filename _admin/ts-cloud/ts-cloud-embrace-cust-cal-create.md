---
title: [Create a custom calendar]
last_updated: 5/5/2021
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Before you begin

Make sure you have the required permissions to create a table in the database of the cloud data warehouse of the connection.

## Methods of creating a custom calendars

You can use one of the following methods of creating a custom calendar:
- Create a calendar
- Upload a calendar
- Use an existing table

## Creating a custom calendar

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

12. For Start day of the week, click the menu and select a day.

13. For Quarter name prefix, enter the prefix you'd like to use for quarter numbers.

    Example: *Q*

14. For Year name prefix, enter the prefix you'd like to use for years.   

    Example: *FY*

15. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

## Uploading a file for a custom calendar

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

   You can create a new calendar, upload a file to create

8. Select **Upload File**.

   ![]({{ site.baseurl }}/images/custom-cal-upload.png)

9. For Table, enter a name for the table that will be created for your custom calendar.

10. For File, click the **Upload** button, select the file, and click **Open**.

11. For Separator, select delimiter format used in your calendar file.

    Supported delimiters include: Comma(,), Pipe(|), and Tab.

17. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

## Use an existing table for a custom calendar

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

6. Select **Existing Table**.

   ![]({{ site.baseurl }}/images/custom-cal-table.png)

7. For Table, select an external table to use for creating your custom calendar.

8. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"           

## Related information

[Update a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update.html#)   
[Delete a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-delete.html#)   
[Custom calendar overview]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html#)   
[Fiscal and Gregorian calendars]({{ site.baseurl }}/advanced-search/formulas/date-formulas.html#fiscal-and-gregorian-calendars)
