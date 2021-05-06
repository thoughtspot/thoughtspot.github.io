---
title: [Update a custom calendar]
last_updated: 5/5/2021
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After you create a custom calendar, you can update it by downloading it, editing it, and uploading it.

Examples of things you can change:
- Language used for days of the week, and month
- Quarter and fiscal year name prefixes
- Starting date of the year
- Starting dates of quarters
- Starting day of the month
- Starting day of the week
- Separator used in the calendar

## Updating a custom calendar

To update a custom calendar, do the following:

1. Click **Data** in the top navigation bar.

   The Data Objects page appears.

2. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select ![calendar icon]({{ site.baseurl }}/images/calendar.png){: .inline}  **Custom calendar**.

   The Custom calendar page appears.

3. Click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Download as CSV**.

4. Open the file in a text editor, and remove the first 3 lines (which contain metadata).

5. Make any other changes required, and save the file with a new name.

   {% include important.html content="You must save the updated file with a new name, or you will not be able to update the calendar." %}

6. On the Custom calendar page, click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} next to the custom calendar you want to update, and select **Update Calendar**.   

7. For Database, click the **Choose a database** menu, and select the database you want to use with your updated custom calendar.

8. For Schema, click the **Choose a schema** menu, and select the schema you want to use with your updated custom calendar.

9. Select **Upload new**.

10. Click {% include button-grey.html content="Upload" %}, select the file, and upload it.

11. If column names are defined in the header of your updated calendar, select **Column names are defined in header**.

12. For Separator, select the separator used in the updated calendar you are going to upload.

    Options include Comma ( , ), Pipe ( \| ), Semicolon ( ; ), and Tab.

13. Click {% include button.html content="Update" %}.

    The Custom calendar page appears again, with the message "Custom calendar created successfully!"

## Related information

[Create a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-create.html#)   
[Delete a custom calendar]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal-delete.html#)   
[Custom calendar overview]({{ site.baseurl }}/admin/ts-cloud/ts-cloud-embrace-cust-cal.html#)   
[Fiscal and Gregorian calendars]({{ site.baseurl }}/advanced-search/formulas/date-formulas.html#fiscal-and-gregorian-calendars)      
