<table>
<colgroup>
   <col style="width:8%" />
   <col style="width:42%" />
   <col style="width:50%" />
</colgroup>
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr id="sql_bool_aggregate_op">
      <td><code>sql_bool_aggregate_op</code></td>
      <td>Returns the boolean data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.
</td>
      <td><ul><li><code class="highlighter-rouge">sql_bool_aggregate_op ( "booland_agg ({0})" , is_delivered )</code></li></ul></td>
    </tr>
    <tr id="sql_bool_op">
      <td><code>sql_bool_op</code></td>
      <td>Returns the boolean data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_bool_op ( "is_decimal ({0})" , itemCount )</li><li>sql_bool_op ( "is_decimal ({0})" , itemCount )sql_bool_op ( "boolor ({0}, {1})" , 2 , 0 ) = True</li></ul></code></td>
    </tr>
    <tr id="sql_date_aggregate_op">
      <td><code>sql_date_aggregate_op</code></td>
      <td>Returns the date data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_date_aggregate_op ( "max ({0})" , orderdate )</li></ul></code></td>
    </tr>
    <tr id="sql_date_op">
      <td><code>sql_date_op</code></td>
      <td>Returns the date data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_date_op ( "previous_day ({0})" , ship_date )</li></ul></code></td>
    </tr>
    <tr id="sql_date_time_aggregate_op">
      <td><code>sql_date_time_aggregate_op</code></td>
      <td>Returns the timestamp data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_date_time_aggregate_op ( "max ({0})" , delivery_time )</li></ul></code></td>
    </tr>
    <tr id="sql_date_time_op">
      <td><code>sql_date_time_op</code></td>
      <td>Returns the timestamp data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_date_time_op ( "timestamp_sub ({0}, {1})" , sale_time , 'INTERVAL 30 MINUTE')</li></ul></code><code class="highlighter-rouge"></code></td>
    </tr>
    <tr id="sql_double_aggregate_op">
      <td><code>sql_double_aggregate_op</code></td>
      <td>Returns the double data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_double_aggregate_op ( "approx_percentile ({0}, {1})" , unrealised_gain , 0.99 )</li></ul></code></td>
    </tr>
    <tr id="sql_double_op">
      <td><code>sql_double_op</code></td>
      <td>Returns the double data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_double_op ( "acosh ({0})" , quantity )</li><li>sql_double_op ( "radians ({0})" , 180 ) = 3.141592654</li></ul></code></td>
    </tr>
    <tr id="sql_int_aggregate_op">
      <td><code>sql_int_aggregate_op</code></td>
      <td>Returns the int data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_int_aggregate_op ( "approx_count_distinct ({0})" , sale_volume )</li><li>sql_int_aggregate_op ( "bitand_agg({0}) OVER ( [ partition by {1} ] )" , user_permissions , user_type )</li></ul></code></td>
    </tr>
    <tr id="sql_int_op">
      <td><code>sql_int_op</code></td>
      <td>Returns the int data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_int_op ( "ceil ({0})" , itemCount )</li><li>sql_int_op ( "charindex ({0}, {1})" , "qwerty" , "rty" ) = 4</li></ul></code></td>
    </tr>
    <tr id="sql_string_aggregate_op">
      <td><code>sql_string_aggregate_op</code></td>
      <td>Returns the string data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_string_aggregate_op ( "min ({0})" , username )</li></ul></code></td>
    </tr>
    <tr id="sql_string_op">
      <td><code>sql_string_op</code></td>
      <td>Returns the string data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_string_op ( "soundex ({0})" , "Marks" )</li></ul></code></td>
    </tr>
    <tr id="sql_time_aggregate_op">
      <td><code>sql_time_aggregate_op</code></td>
      <td>Returns the time data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_time_aggregate_op ( "max (time ({0}))" , delivery_time )</li></ul></code></td>
    </tr>
    <tr id="sql_time_op">
      <td><code>sql_time_op</code></td>
      <td>Returns the time data type. The first argument takes the signature of the external function to be executed against the datasource. Subsequent arguments take the values to be passed to the external function.</td>
      <td><code class="highlighter-rouge"><ul><li>sql_time_op ( "time_from_parts ({0}, {1}, {2})" , 12 , 30 , 20 ) = 12:30:20</li></ul></code></td>
    </tr>
</tbody>
</table>
