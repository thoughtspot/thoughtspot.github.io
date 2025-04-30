
<table>
<colgroup>
   <col style="width:25%" />
   <col style="width:50%" />
   <col style="width:25%" />
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
      <td>average</td>
      <td>Returns the average of all the values of a column.</td>
      <td><code class="highlighter-rouge">average (revenue)</code></td>
    </tr>
    <tr>
      <td>count</td>
      <td>Returns the number of rows in the table containing the column.</td>
      <td><code class="highlighter-rouge">count (product)</code></td>
    </tr>
    <tr>
      <td>cumulative_average</td>
      <td>Takes a measure and one or more attributes. Returns the average of the measure, accumulated by the attribute(s) in the order specified.</td>
      <td><code class="highlighter-rouge">cumulative_average (revenue, order date, state)</code></td>
    </tr>
    <tr>
      <td>cumulative_max</td>
      <td>Takes a measure and one or more attributes. Returns the maximum of the measure, accumulated by the attribute(s) in the order specified.</td>
      <td><code class="highlighter-rouge">cumulative_max (revenue, state)</code></td>
    </tr>
    <tr>
      <td>cumulative_min</td>
      <td>Takes a measure and one or more attributes. Returns the minimum of the measure, accumulated by the attribute(s) in the order specified.</td>
      <td><code class="highlighter-rouge">cumulative_min (revenue, campaign)</code></td>
    </tr>
    <tr>
      <td>cumulative_sum</td>
      <td>Takes a measure and one or more attributes. Returns the sum of the measure, accumulated by the attribute(s) in the order specified.</td>
      <td><code class="highlighter-rouge">cumulative_sum (revenue, order date)</code></td>
    </tr>
    <tr>
      <td>group_average</td>
      <td>Takes a measure and one or more attributes. Returns the average of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_average (revenue, customer region, state)</code></td>
    </tr>
    <tr>
      <td>group_count</td>
      <td>Takes a measure and one or more attributes. Returns the count of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_count (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>group_max</td>
      <td>Takes a measure and one or more attributes. Returns the maximum of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_max (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>group_min</td>
      <td>Takes a measure and one or more attributes. Returns the minimum of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_min (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>group_stddev</td>
      <td>Takes a measure and one or more attributes. Returns the standard deviation of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_stddev (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>group_sum</td>
      <td>Takes a measure and one or more attributes. Returns the sum of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_sum (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>group_unique_count</td>
      <td>Takes a measure and one or more attributes. Returns the unique count of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_unique_count (product , supplier)</code></td>
    </tr>
    <tr>
      <td>group_variance</td>
      <td>Takes a measure and one or more attributes. Returns the variance of the measure grouped by the attribute(s).</td>
      <td><code class="highlighter-rouge">group_variance (revenue, customer region)</code></td>
    </tr>
    <tr>
      <td>max</td>
      <td>Returns the maximum value of a column.</td>
      <td><code class="highlighter-rouge">max (sales)</code></td>
    </tr>
    <tr>
      <td>min</td>
      <td>Returns the minimum value of a column.</td>
      <td><code class="highlighter-rouge">min (revenue)</code></td>
    </tr>
    <tr>
      <td>moving_average</td>
      <td>Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is (current - Num1…Current + Num2) with both end points being included in the window. For example, “1,1” will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the average of the measure over the given window. The attributes are the ordering columns used to compute the moving average.</td>
      <td><code class="highlighter-rouge">moving_average (revenue, 2, 1, customer region)</code></td>
    </tr>
    <tr>
      <td>moving_max</td>
      <td>Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is (current - Num1…Current + Num2) with both end points being included in the window. For example, “1,1” will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the maximum of the measure over the given window. The attributes are the ordering columns used to compute the moving maximum.</td>
      <td><code class="highlighter-rouge">moving_max (complaints, 1, 2, store name)</code></td>
    </tr>
    <tr>
      <td>moving_min</td>
      <td>Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is (current - Num1…Current + Num2) with both end points being included in the window. For example, “1,1” will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the minimum of the measure over the given window. The attributes are the ordering columns used to compute the moving minimum.</td>
      <td><code class="highlighter-rouge">moving_min (defects, 3, 1, product)</code></td>
    </tr>
    <tr>
      <td>moving_sum</td>
      <td>Takes a measure, two integers to define the window to aggregate over, and one or more attributes. The window is (current - Num1…Current + Num2) with both end points being included in the window. For example, “1,1” will have a window size of 3. To define a window that begins before Current, specify a negative number for Num2. Returns the sum of the measure over the given window. The attributes are the ordering columns used to compute the moving sum.</td>
      <td><code class="highlighter-rouge">moving_sum (revenue, 1, 1, order date)</code></td>
    </tr>
    <tr>
      <td>stddev</td>
      <td>Returns the standard deviation of all values of a column.</td>
      <td><code class="highlighter-rouge">stddev (revenue)</code></td>
    </tr>
    <tr>
      <td>sum</td>
      <td>Returns the sum of all the values of a column.</td>
      <td><code class="highlighter-rouge">sum (revenue)</code></td>
    </tr>
    <tr>
      <td>unique count</td>
      <td>Returns the number of unique values of a column.</td>
      <td><code class="highlighter-rouge">unique count (customer)</code></td>
    </tr>
    <tr>
      <td>variance</td>
      <td>Returns the variance of all the values of a column.</td>
      <td><code class="highlighter-rouge">variance (revenue)</code></td>
    </tr>
  </tbody>
</table>
