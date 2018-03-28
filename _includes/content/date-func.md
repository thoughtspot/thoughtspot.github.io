<table>
<colgroup>
   <col style="width:25%" />
   <col style="width:25%" />
   <col style="width:52%" />
</colgroup>
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>add_days</code></td>
      <td>Returns the result of adding the specified number of days to the given date.</td>
      <td><code class="highlighter-rouge">add_days (01/30/2015, 5) = 02/04/2015</code><br><code class="highlighter-rouge">add_days (invoiced, 30)</code></td>
    </tr>
    <tr>
      <td><code>date</code></td>
      <td>Returns the date portion of a given date.</td>
      <td><code class="highlighter-rouge">date (home visit)</code></td>
    </tr>
    <tr>
      <td><code>day</code></td>
      <td>Returns the number (1-31) of the day for the given date.</td>
      <td><code class="highlighter-rouge">day (01/15/2014) = 15</code><br><code class="highlighter-rouge">day (date ordered)</code></td>
    </tr>
    <tr>
      <td><code>day_number_of_week</code></td>
      <td>Returns the number (1-7) of the day in a week for the given date with 1 being Monday and 7 being Sunday.</td>
      <td><code class="highlighter-rouge">day_number_of_week (01/30/2015) = 6</code><br><code class="highlighter-rouge">day_number_of_week (shipped)</code></td>
    </tr>
    <tr>
       <td><code>day_number_of_quarter</code></td>
       <td>Returns the number of the day in a quarter for a given date.</td>
       <td><code class="highlighter-rouge">day_number_of_quarter (01/30/2015)</code></td>
    </tr>
    <tr>
       <td><code>day_number_of_week</code></td>
        <td>Returns the number of the day in a week for a given date.</td>
       <td><code class="highlighter-rouge">day_number_of_week(01/15/2014) > 3</code></td>
    </tr>
    <tr>
      <td><code>day_number_of_year</code></td>
      <td>Returns the number (1-366) of the day in a year for the given date.</td>
      <td><code class="highlighter-rouge">day_number_of_year (01/30/2015) = 30</code><br><code class="highlighter-rouge">day_number_of_year (invoiced)</code></td>
    </tr>
    <tr>
      <td><code>day_of_week</code></td>
      <td>Returns the day of the week for the given date.</td>
      <td><code class="highlighter-rouge">day_of week (01/30/2015) = Friday</code><br><code class="highlighter-rouge">day_of_week (serviced)</code></td>
    </tr>
    <tr>
      <td><code>diff_days</code></td>
      <td>Subtracts the second date from the first date and returns the result in number of days, rounded down if not exact.</td>
      <td><code class="highlighter-rouge">diff_days (01/15/2014, 01/17/2014) = -2</code><br><code class="highlighter-rouge">diff_days (purchased, shipped)</code></td>
    </tr>
    <tr>
      <td><code>diff_time</code></td>
      <td>Subtracts the second date from the first date and returns the result in number of seconds.</td>
      <td><code class="highlighter-rouge">diff_time (01/01/2014, 01/01/2014) = -86,400</code><br><code class="highlighter-rouge">diff_time (clicked, submitted)</code></td>
    </tr>
    <tr>
      <td><code>hour_of_day</code></td>
      <td>Returns the hour of the day for the given date.</td>
      <td><code class="highlighter-rouge">hour_of_day (received)</code></td>
    </tr>
    <tr>
      <td><code>is_weekend</code></td>
      <td>Returns true if the given date falls on a Saturday or Sunday.</td>
      <td><code class="highlighter-rouge">is_weekend (01/31/2015) = true</code><br><code class="highlighter-rouge">is_weekend (emailed)</code></td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>Returns the month from the given date.</td>
      <td><code class="highlighter-rouge">month (01/15/2014) = January</code><br><code class="highlighter-rouge">month (date ordered)</code></td>
    </tr>
    <tr>
      <td><code>month_number</code></td>
      <td>Returns the number (1-12) of the month for the given date.</td>
      <td><code class="highlighter-rouge">month_number (09/20/2014) = 9</code><br><code class="highlighter-rouge">month_number (purchased)</code></td>
    </tr>
    <tr>
       <td><code>month_number_of_quarter</code></td>
       <td>Returns the month (1-12) number for the given date in a quarter.</td>
       <td><code class="highlighter-rouge">>month_number_of_quarter (02/20/2018) > 9 </code></td>
    </tr>
    <tr>
      <td><code>now</code></td>
      <td>Returns the current timestamp.</td>
      <td><code class="highlighter-rouge">now ()</code></td>
    </tr>
    <tr>
      <td><code>start_of_month</code></td>
      <td>Returns <code>MMM yyyy</code> for the first day of the month. Your installation configuration can override this setting so that it returns a different format such as <code>MM/dd/yyyy</code>. Speak with your ThoughtSpot administrator for information on doing this.</td>
      <td><code class="highlighter-rouge">start_of_month ( 01/31/2015 ) = Jan FY 2015</code><br><code class="highlighter-rouge">start_of_month (shipped)</code></td>
    </tr>
    <tr>
      <td><code>start_of_quarter</code></td>
      <td>Returns the date for the first day of the quarter for the given date.</td>
      <td><code class="highlighter-rouge">start_of_quarter ( 09/18/2015 ) = Q3 FY 2015</code><br><code class="highlighter-rouge">start_of_quarter (sold)</code></td>
    </tr>
    <tr>
      <td><code>start_of_week</code></td>
      <td>Returns the date for the first day of the week for the given date.</td>
      <td><code class="highlighter-rouge">start_of_week ( 06/01/2015 ) = 05/30/2015 Week</code><br><code class="highlighter-rouge">start_of_week (emailed)</code></td>
    </tr>
    <tr>
      <td><code>start_of_year</code></td>
      <td>Returns the date for the first day of the year for the given date.</td>
      <td><code class="highlighter-rouge">start_of_year ( 02/15/2015 ) = FY 2015</code><br><code class="highlighter-rouge">start_of_year (joined)</code></td>
    </tr>
    <tr>
      <td><code>time</code></td>
      <td>Returns the time portion of a given date.</td>
      <td><code class="highlighter-rouge">time (3/1/2002 10:32) = 10:32</code><br><code class="highlighter-rouge">time (call began)</code></td>
    </tr>
    <tr>
       <td><code>week_number_of_month</code></td>
       <td>Returns the week number for the given date in a month.</td>
       <td><code class="highlighter-rouge">week_number_of_month(03/23/2017) = 3</code></td>
    </tr>
    <tr>
       <td><code>week_number_of_quarter</code></td>
       <td>Returns the week number for the given date in a quarter.</td>
       <td><code class="highlighter-rouge">week_number_of_quarter(04/03/2017)> 2 </code></td>
    </tr>
    <tr>
       <td><code>week_number_of_year</code></td>
       <td>Returns the week number for the given date in a year.</td>
       <td><code class="highlighter-rouge">week_number_of_year(04/03/2017) = 20 </code></td>
    </tr>
    <tr>
      <td><code>year</code></td>
      <td>Returns the year from the given date.</td>
      <td><code class="highlighter-rouge">year (01/15/2014) = 2014</code><br><code class="highlighter-rouge">year (date ordered)</code></td>
    </tr>
  </tbody>
</table>
