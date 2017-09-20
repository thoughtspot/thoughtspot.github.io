<table>
<colgroup>
   <col style="width:15%" />
   <col style="width:33%" />
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
      <td>add_days</td>
      <td>Returns the result of adding the specified number of days to the given date.</td>
      <td><code class="highlighter-rouge">add_days (01/30/2015, 5) = 02/04/2015</code><br><code class="highlighter-rouge">add_days (invoiced, 30)</code></td>
    </tr>
    <tr>
      <td>date</td>
      <td>Returns the date portion of a given date.</td>
      <td><code class="highlighter-rouge">date (home visit)</code></td>
    </tr>
    <tr>
      <td>day</td>
      <td>Returns the number (1-31) of the day for the given date.</td>
      <td><code class="highlighter-rouge">day (01/15/2014) = 15</code><br><code class="highlighter-rouge">day (date ordered)</code></td>
    </tr>
    <tr>
      <td>day_number_of_week</td>
      <td>Returns the number (1-7) of the day in a week for the given date with 1 being Monday and 7 being Sunday.</td>
      <td><code class="highlighter-rouge">day_number_of_week (01/30/2015) = 6</code><br><code class="highlighter-rouge">day_number_of_week (shipped)</code></td>
    </tr>
    <tr>
      <td>day_number_of_year</td>
      <td>Returns the number (1-366) of the day in a year for the given date.</td>
      <td><code class="highlighter-rouge">day_number_of_year (01/30/2015) = 30</code><br><code class="highlighter-rouge">day_number_of_year (invoiced)</code></td>
    </tr>
    <tr>
      <td>day_of_week</td>
      <td>Returns the day of the week for the given date.</td>
      <td><code class="highlighter-rouge">day_of week (01/30/2015) = Friday</code><br><code class="highlighter-rouge">day_of_week (serviced)</code></td>
    </tr>
    <tr>
      <td>diff_days</td>
      <td>Subtracts the second date from the first date and returns the result in number of days, rounded down if not exact.</td>
      <td><code class="highlighter-rouge">diff_days (01/15/2014, 01/17/2014) = -2</code><br><code class="highlighter-rouge">diff_days (purchased, shipped)</code></td>
    </tr>
    <tr>
      <td>diff_time</td>
      <td>Subtracts the second date from the first date and returns the result in number of seconds.</td>
      <td><code class="highlighter-rouge">diff_time (01/01/2014, 01/01/2014) = -86,400</code><br><code class="highlighter-rouge">diff_time (clicked, submitted)</code></td>
    </tr>
    <tr>
      <td>hour_of_day</td>
      <td>Returns the hour of the day for the given date.</td>
      <td><code class="highlighter-rouge">hour_of_day (received)</code></td>
    </tr>
    <tr>
      <td>is_weekend</td>
      <td>Returns true if the given date falls on a Saturday or Sunday.</td>
      <td><code class="highlighter-rouge">is_weekend (01/31/2015) = true</code><br><code class="highlighter-rouge">is_weekend (emailed)</code></td>
    </tr>
    <tr>
      <td>month</td>
      <td>Returns the month from the given date.</td>
      <td><code class="highlighter-rouge">month (01/15/2014) = January</code><br><code class="highlighter-rouge">month (date ordered)</code></td>
    </tr>
    <tr>
      <td>month_number</td>
      <td>Returns the number (1-12) of the month for the given date.</td>
      <td><code class="highlighter-rouge">month_number (09/20/2014) = 9</code><br><code class="highlighter-rouge">month_number (purchased)</code></td>
    </tr>
    <tr>
      <td>now</td>
      <td>Returns the current timestamp.</td>
      <td><code class="highlighter-rouge">now ()</code></td>
    </tr>
    <tr>
      <td>start_of_month</td>
      <td>Returns `MMM yyyy` for the first day of the month. Your installation configuration can override this setting so that it returns a different format such as `MM/dd/yyyy`. Speak with your ThoughtSpot administrator if you .</td>
      <td><code class="highlighter-rouge">start_of_month ( 01/31/2015 ) = Jan FY 2015</code><br><code class="highlighter-rouge">start_of_month (shipped)</code></td>
    </tr>
    <tr>
      <td>start_of_quarter</td>
      <td>Returns the date for the first day of the quarter for the given date.</td>
      <td><code class="highlighter-rouge">start_of_quarter ( 09/18/2015 ) = Q3 FY 2015</code><br><code class="highlighter-rouge">start_of_quarter (sold)</code></td>
    </tr>
    <tr>
      <td>start_of_week</td>
      <td>Returns the date for the first day of the week for the given date.</td>
      <td><code class="highlighter-rouge">start_of_week ( 06/01/2015 ) = 05/30/2015 Week</code><br><code class="highlighter-rouge">start_of_week (emailed)</code></td>
    </tr>
    <tr>
      <td>start_of_year</td>
      <td>Returns the date for the first day of the year for the given date.</td>
      <td><code class="highlighter-rouge">start_of_year ( 02/15/2015 ) = FY 2015</code><br><code class="highlighter-rouge">start_of_year (joined)</code></td>
    </tr>
    <tr>
      <td>time</td>
      <td>Returns the time portion of a given date.</td>
      <td><code class="highlighter-rouge">time (3/1/2002 10:32) = 10:32</code><br><code class="highlighter-rouge">time (call began)</code></td>
    </tr>
    <tr>
      <td>year</td>
      <td>Returns the year from the given date.</td>
      <td><code class="highlighter-rouge">year (01/15/2014) = 2014</code><br><code class="highlighter-rouge">year (date ordered)</code></td>
    </tr>
  </tbody>
</table>
