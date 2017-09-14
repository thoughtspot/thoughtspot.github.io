<table>
<colgroup>
   <col style="width:15%" />
   <col style="width:50%" />
   <col style="width:35%" />
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
      <td>to_bool</td>
      <td>Returns the input as a boolean (true or false).</td>
      <td><code class="highlighter-rouge">to_bool (0) = false</code><br><code class="highlighter-rouge">to_bool (married)</code></td>
    </tr>
    <tr>
      <td>to_date</td>
      <td>Accepts a date represented as an integer or text string, and a second string parameter that can include strptime date formatting elements. Replaces all the valid strptime date formatting elements with their string counterparts and returns the result. Does not accept epoch formatted dates as input.</td>
      <td><code class="highlighter-rouge">to_date (date_sold, '%Y-%m-%d')</code></td>
    </tr>
    <tr>
      <td>to_double</td>
      <td>Returns the input as a double.</td>
      <td><code class="highlighter-rouge">to_double ('3.14') = 3.14</code><br><code class="highlighter-rouge">to_double (revenue * .01)</code></td>
    </tr>
    <tr>
      <td>to_integer</td>
      <td>Returns the input as an integer.</td>
      <td><code class="highlighter-rouge">to_integer ('45') + 1 = 46</code><br><code class="highlighter-rouge">to_integer (price + tax - cost)</code></td>
    </tr>
    <tr>
      <td>to_string</td>
      <td>Returns the input as a text string.</td>
      <td><code class="highlighter-rouge">to_string (45 + 1) = '46'</code>
      <br><code class="highlighter-rouge">to_string (revenue - cost)</code></td>
    </tr>
  </tbody>
</table>
