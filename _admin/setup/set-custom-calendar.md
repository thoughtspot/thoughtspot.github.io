---
title: [Set up a custom calendar]
keywords: [fiscal calendar, fiscal calendar year, custom calendar]
tags: [dates]
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
By default, ThoughtSpot's fiscal calendar begins on January 1st. If your company's
calendar starts on a different date, you can set a custom calendar that ensures
ThoughtSpot date searches reflect your fiscal calendar.

[Date formulas with the `fiscal` option specified]({{ site.baseurl }}/advanced-search/formulas/date-formulas.html#fiscal-and-gregorian-calendars)
will also reflect the fiscal year you set here.

When you create a custom calendar, you designate the month, day and year on which your
company's fiscal year begins and ends. When using your custom calendar, searches like **this quarter** or **q3**, will conform to the fiscal quarter defined by the calendar in use. When you make this change, existing pinboards that use your new custom calendar change to reflect that calendar. Because of this,  you should alert your users of the change and how it affects both current and saved searches.

## Setting up a custom calendar

Before you create your custom calendar, you must enable the custom calendar feature for your ThoughtSpot cluster.

### Enabling the custom calendar feature

To enable the custom calendar feature for your cluster, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

### Creating a custom calendar

To create your custom calendar, do the following:

1. Create your calendar as a table using the following required columns:
   ```
date
day_of_week
month
quarter
year
day_number_of_week
week_number_of_month
week_number_of_quarter
week_number_of_year
is_weekend
```
Example calendar with the fiscal year beginning on April 1:

      ![]({{ site.baseurl }}/images/custom_cal.png)

2. Save your calendar as a .csv file.

   Example: `my-calendar.csv`

3. SSH as admin into the cluster where you want to install your custom calendar.

   Example: `ssh admin@<hostname_or_IP>`

4. Upload your .csv file to the `home/admin directory`.

5. Add the new custom calendar to your cluster, by running the following command:
   `tscli calendar create --file_path <file path of csv> --name <calendar name> --username <username>`

   Example:
   `tscli calendar create --file_path /home/admin/my_calendar.csv --name my_calendar --username admin`

### (Optional) Setting a custom calendar as the default calendar for a cluster

To set your custom calendar as the default calendar for your cluster, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

## Using a custom calendar

To use a custom calendar, do the following:

1. Sign in to your ThoughtSpot cluster and click **DATA**.

2. On the DATA page, click the name of a worksheet, table or view.

3. Under COLUMN NAME, find a column where you want to use your custom calendar and scroll right until you see the CALENDAR TYPE column.

    {% include note.html content="The column must use the DATE or DATETIME data type." %}

4. In the CALENDAR TYPE column for the column you chose, double-click the existing calendar name, and then select your custom calendar.

5. Click **Save Changes**.
