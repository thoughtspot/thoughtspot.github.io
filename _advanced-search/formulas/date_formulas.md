---
title: [About date formulas]
tags:
keywords: tbd
last_updated: tbd
toc: false
sidebar: mydoc_sidebar
---
Date formulas are useful when you want to compare data collected between two date periods. Date formulas allow you to apply date related functions to your formulas. The date functions include:

<table cellpadding="4" cellspacing="0" summary="" id="keyword_reference__table_ynp_tvj_tw" class="table" frame="border" border="1" rules="all">
   <colgroup>
      <col style="width:25%"/>
      <col style="width:30%"/>
      <col style="width:30%"/>
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody class="tbody">
      <tr>
         <td><code>add_days</code></td>
         <td>Returns the result of adding the specified number of days to the given date.</td>
         <td>
            <ul>
               <li><code>add_days (01/30/2015, 5) = 02/04/2015</code></li>
               <li><code>add_days (invoiced, 30)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>date</code></td>
         <td>Returns the date portion of a given date.</td>
         <td>
            <ul>
               <li><code>date (home visit)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>day</code></td>
         <td>Returns the number (1-31) of the day for the given date.</td>
         <td>
            <ul>
               <li><code>day (01/15/2014) = 15</code></li>
               <li><code>day (date ordered)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>day_number_of_week</code></td>
         <td>Returns the number (1-7) of the day in a week for the given date with 1 being Monday
            and 7 being Sunday.
         </td>
         <td>
            <ul>
               <li><code>day_number_of_week (01/30/2015) = 6</code></li>
               <li><code>day_number_of_week (shipped)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>day_number_of_year</code></td>
         <td>Returns the number (1-366) of the day in a year for the given date.</td>
         <td>
            <ul>
               <li><code>day_number_of_year (01/30/2015) = 30</code></li>
               <li><code>day_number_of_year (invoiced)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>day_of_week</code></td>
         <td>Returns the day of the week for the given date.</td>
         <td>
            <ul>
               <li><code>day_of week (01/30/2015) = Friday</code></li>
               <li><code>day_of_week (serviced)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>diff_days</code></td>
         <td>Subtracts the second date from the first date and returns the result in number of days,
            rounded down if not exact.
         </td>
         <td>
            <ul>
               <li><code>diff_days (01/15/2014, 01/17/2014) = -2</code></li>
               <li><code>diff_days (purchased, shipped)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>diff_time</code></td>
         <td>Subtracts the second date from the first date and returns the result in number of
            seconds.
         </td>
         <td>
            <ul>
               <li><code>diff_time (01/01/2014, 01/01/2014) = -86,400</code></li>
               <li><code>diff_time (clicked, submitted)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>hour_of_day</code></td>
         <td>Returns the hour of the day for the given date.</td>
         <td>
            <ul>
               <li><code>hour_of_day (received)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>is_weekend</code></td>
         <td>Returns true if the given date falls on a Saturday or Sunday.</td>
         <td>
            <ul>
               <li><code>is_weekend (01/31/2015) = true</code></li>
               <li><code>is_weekend (emailed)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>month</code></td>
         <td>Returns the month from the given date.</td>
         <td>
            <ul>
               <li><code>month (01/15/2014) = January</code></li>
               <li><code>month (date ordered)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>month_number</code></td>
         <td>Returns the number (1-12) of the month for the given date.</td>
         <td>
            <ul>
               <li><code>month_number (09/20/2014) = 9</code></li>
               <li><code>month_number (purchased)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>now</code></td>
         <td>Returns the current timestamp.</td>
         <td>
            <ul>
               <li><code>now ()</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>start_of_month</code></td>
         <td>Returns the date for the first day of the month for the given date.</td>
         <td>
            <ul>
               <li><code>start_of_month ( 01/31/2015 ) = Jan FY 2015</code></li>
               <li><code>start_of_month (shipped)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>start_of_quarter</code></td>
         <td>Returns the date for the first day of the quarter for the given date.</td>
         <td>
            <ul>
               <li><code>start_of_quarter ( 09/18/2015 ) = Q3 FY 2015</code></li>
               <li><code>start_of_quarter (sold)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>start_of_week</code></td>
         <td>Returns the date for the first day of the week for the given date.</td>
         <td>
            <ul>
               <li><code>start_of_week ( 06/01/2015 ) = 05/30/2015 Week</code></li>
               <li><code>start_of_week (emailed)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>start_of_year</code></td>
         <td>Returns the date for the first day of the year for the given date. </td>
         <td>
            <ul>
               <li><code>start_of_year ( 02/15/2015 ) = FY 2015</code></li>
               <li><code>start_of_year (joined)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>time</code></td>
         <td>Returns the time portion of a given date.</td>
         <td>
            <ul>
               <li><code>time (3/1/2002 10:32) = 10:32</code></li>
               <li><code>time (call began)</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td><code>year</code></td>
         <td>Returns the year from the given date.</td>
          <td>
            <ul>
               <li><code>year (01/15/2014) = 2014</code></li>
               <li><code>year (date ordered)</code></li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

## Calculate date formulas

Calculating date formulas is useful when you want to compare data from different date periods. Here are some examples of using date formulas:

### Example 1

The following example shows you how to create formulas that you can use to compare data from this week to last week.

- The formula for this week is: `week ( today () ) - week (date)`
- The formula for last week is: `diff_days ( week ( today ) ) , week ( date ) )`

### Example 2

The following example shows you how to calculate the percent increase from the last date period to this period in terms of revenue.

1. Create the formula: `this week revenue = sum ( if ( this week ) then revenue else 0 )`
2. Then create the formula: `last week revenue = sum ( if (last week ) then revenue else 0 )`
3. Use [nested formulas](../../complex_searches/about_nested_formulas.html#) to calculate the percent increase by creating a parent formula: `percent increase = ( ( last week revenue - this week revenue) / last week revenue ) \* 100`
