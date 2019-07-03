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

### Generate a custom calendar template

Using a custom calendar template as your starting point ensures that you are using a format that is compatible with ThoughtSpot.

To generate a custom calendar template, do the following:

1. SSH as admin into your ThoughtSpot cluster: `ssh admin@<cluster-ip-address or hostname>`.

2. Run the `tscli calendar generate` command using the following syntax:

  `tscli calendar generate --name <calendar_name> --start_date <MM/DD/YYYY> --end_date <MM/DD/YYYY> --username <cluster_admin_username>`

  Example:
  `tscli calendar generate --name my_calendar --start_date 07/01/2019 --end_date 06/30/2020 --username tsadmin`

  This generates a calendar template file in .csv format. In the above example: **my_calendar.csv**.

3. Exit your SSH session.

### Edit the custom calendar template

1. Download the .csv file to your computer using following syntax:
`scp admin@<cluster-ip-address>:/home/admin/<calendar_name> /<Local directory on your computer>/.`

  Example (on Mac OS):
  `scp admin@172.18.144.217:/home/admin/my_calendar.csv /Users/john.smith/Desktop/.`
2. Open the .csv file in a text editor or spreadsheet program and edit the file to ensure the date and quarter columns are formatted correctly:
  - The Date column must use the format: **MM/DD/YYYY**
  - The Quarter column must display the correct quarter number for each day of the year.

    {% include note.html content="By default, a generated calendar displays quarter numbers based on the Gregorian calendar (which starts on January 1st). If your custom calendar begins any other date, you must adjust the quarter numbers to align with your calendar. For example: If your custom calendar begins on April 1st, the calendar would incorrectly show April, May and June as quarter 2. You would need to correct this to indicate those months are quarter 1 and correct the subsequent months to have the correct quarter." %}
  - (Optional, but highly recommended). To enhance searchability, ThoughtSpot recommends adding a “Q” before each quarter number. Example: **Q1**.
  - Make any other changes needed to the calendar (for example translating months or days into a different language.)

 Example calendar with the fiscal year beginning on April 1:

      ![]({{ site.baseurl }}/images/custom_cal.png)

3. Save your calendar as a .csv file so that there are no carriage returns.

  {% include note.html content="Carriage returns prevent you from adding your calendar into ThoughtSpot. Microsoft Excel, for example, adds carriage returns. If you use Excel, you’ll need to remove the carriage returns by opening your .csv file in a text editor and saving it as a .csv with UNIX line breaks." %}

   Example: `my_calendar.csv`

### Add the custom calendar to your cluster

1. Upload the .csv file to your ThoughtSpot cluster using the following syntax:
`scp admin@<cluster-ip-address>:/home/admin/<calendar_name> /<Local directory on your computer>/.`

  Example (on Mac OS):
  `scp /Users/john.smith/Desktop/my_calendar.csv admin@172.18.144.217:/home/admin`

2. SSH as admin into your ThoughtSpot cluster: `ssh admin@<cluster-ip-address or hostname>`.

3. Run the `tscli calendar create` command using the following syntax:
   `tscli calendar create --file_path <file path of csv> --name <calendar name> --username <username>`

   Example:
   `tscli calendar create --file_path /home/admin/my_calendar.csv --name my_calendar --username admin`

### (Optional) Set a custom calendar as the default calendar for a cluster

To set your custom calendar as the default calendar for your cluster, contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#).

## Using a custom calendar

To use a custom calendar, do the following:

1. Sign in to your ThoughtSpot cluster and click **DATA**.

2. On the DATA page, click the name of a worksheet, table or view.

3. Under COLUMN NAME, find a column where you want to use your custom calendar and scroll right until you see the CALENDAR TYPE column.

    {% include note.html content="The column must use the DATE or DATE_TIME data type." %}

4. In the CALENDAR TYPE column for the column you chose, double-click the existing calendar name, and then select your custom calendar.

5. Click **Save Changes**.
