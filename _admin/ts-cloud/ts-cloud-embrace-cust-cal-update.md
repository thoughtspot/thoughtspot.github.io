---
title: [Update a custom calendar]
last_updated: 5/5/2021
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After you create a custom calendar, you can update it the following ways:
- **Replace** it with a completely new calendar you create in the ThoughtSpot UI.
- **Upload** a comma, pipe, semicolon, or tab-delimited calendar file.
- Create a new calendar from an **Existing Table** that you specify.

Examples of things you can change:
- Language used for days of the week, and month
- Quarter and fiscal year name prefixes
- Starting date of the year
- Starting dates of quarters
- Starting day of the month
- Starting day of the week
- Separator used in the calendar

## Replacing a custom calendar

To replace your custom calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline}  **Custom calendar**.

   The Custom calendar page appears.

2. On the Custom calendar page, click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Update Calendar**.   

3. For Database, click the **Choose a database** menu, and select the database you want to use with your updated custom calendar.

4. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your updated custom calendar.

5. Select **Replace**.

6. For Table, enter a name for the table that will be created for your custom calendar.

7. For Start Date, enter the date you want your custom calendar to start.

    {% include important.html content="Both Start Date and End Date must be in *MM/DD/YYYY* format." %}

8. For End Date, enter the date you want your custom calendar to end.

9. For Calendar Type, click the **Choose a calendar type** menu, and select the type of calendar you want to create. Possible types include:
- MONTH_OFFSET
- FOUR_FOUR_FIVE
- FOUR_FIVE_FOUR
- FIVE_FOUR_FOUR

10. For Monthly offset, click the menu and select a month.

11. For Start day of the week, click the menu and select a day.

12. For Quarter name prefix, enter the prefix you'd like to use for quarter numbers.

    Example: *Q*

13. For Year name prefix, enter the prefix you'd like to use for years.   

    Example: *FY*

14. Click **Create**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

## Uploading a custom calendar

You can replace a custom calendar by uploading a calendar file in one of the following formats:
- Comma-separated
- Pipe-separated
- Tab-separated
- Semicolon-separated

### Creating or updating your calendar file

You can either create a new calendar file or download an existing one and make changes to it.

If you have created a new calendar file, go to [Uploading your calendar file]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update#upload-cal)

If you want to make changes to an existing calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline}  **Custom calendar**.

   The Custom calendar page appears.

3. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Download as CSV**.

4. Open the file in a text editor, and remove the first 3 lines (which contain metadata).

5. Make any other changes required, and save the file with a new name.

   {% include important.html content="You must save the updated file with a new name, or you will not be able to update the calendar." %}

6. Go to the next section to [upload your calendar file]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-update#upload-cal).

{: id="upload-cal"}
### Uploading your calendar file

To upload your new or updated calendar file, do the following:

1. On the Custom calendar page, click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Update Calendar**.   

2. For Database, click the **Choose a database** menu, and select the database you want to use with your updated custom calendar.

3. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your updated custom calendar.

4. Select **Upload File**.

5. Click **Upload**, select the file, and upload it.

6. For Separator, select the separator used in the updated calendar you are going to upload.

    Options include Comma ( , ), Pipe ( \| ), Semicolon ( ; ), and Tab.

7. Click **Update**.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

## Create a new calendar from an existing table

To create a new calendar from an existing table, do the following:

1. On the Custom calendar page, click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Update Calendar**.   

2. For Database, click the **Choose a database** menu, and select the database you want to use with your updated custom calendar.

3. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your updated custom calendar.

4. Select **Existing Table**.


5. For Table, select an external table to use for creating your custom calendar.

6. Click **Create**.

   The Custom calendar page appears again, with the message "Custom calendar created successfully!"


## Related information

[Create a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-create.html#)   
[Delete a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-delete.html#)   
[Custom calendar overview]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html#)   
[Fiscal and Gregorian calendars]({{ site.baseurl }}/advanced-search/formulas/date-formulas.html#fiscal-and-gregorian-calendars)      
