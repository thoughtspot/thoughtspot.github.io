<table>
<colgroup>
   <col style="width:5%" />
   <col style="width:45%" />
   <col style="width:50%" />
</colgroup>
  <thead>
    <tr>
      <th>Operator</th>
      <th>Description</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr id="and">
      <td><code>and</code></td>
      <td>Returns <code>true</code> when both conditions are <code>true</code>, otherwise returns <code>false</code>.</td>
      <td><code class="highlighter-rouge">(1 = 1) and (3 &gt; 2) = true</code><br><code class="highlighter-rouge">lastname = 'smith' and state ='texas'</code>
      {% include note.html content="Not available for row-level security (RLS) formulas." %}
      </td>
    </tr>
    <tr id="if-then-else">
      <td><code>if…then…else</code></td>
      <td>Conditional operator</td>
      <td><code class="highlighter-rouge">if (3 &gt; 2) then 'bigger' else 'not bigger'</code><br><code class="highlighter-rouge">if (cost &gt; 500) then 'flag' else 'approve'</code></td>
    </tr>
    <tr id="ifnull">
      <td><code>ifnull</code></td>
      <td>Returns the first value if it is not <code>null</code>, otherwise returns the second value.</td>
      <td><code class="highlighter-rouge">ifnull (cost, 'unknown')</code></td>
    </tr>
    <tr id="in">
      <td><code>in</code></td>
      <td>Takes a column name and a list of values. It checks each column value against the list of values in the formula, and returns <code>true</code> if the column value matches one of the values in the formula.</td>
      <td><code class="highlighter-rouge"> state in { 'texas' , 'california' }</code></td>
    </tr>
    <tr id="isnull">
      <td><code>isnull</code></td>
      <td>Returns <code>true</code> if the value is <code>null</code>.</td>
      <td><code class="highlighter-rouge">isnull (phone)</code></td>
    </tr>
    <tr id="not">
      <td><code>not</code></td>
      <td>Returns <code>true</code> if the condition is <code>false</code>, otherwise returns <code>false</code>.</td>
      <td><code class="highlighter-rouge">not (3 &gt; 2) = false</code><br><code class="highlighter-rouge">not (state = 'texas')</code></td>
    </tr>
    <tr id="or">
      <td><code>or</code></td>
      <td>Returns <code>true</code> when either condition is <code>true</code>, otherwise returns <code>false</code>.</td>
      <td><code class="highlighter-rouge">(1 = 5) or (3 &gt; 2) = true</code><br><code class="highlighter-rouge">state = 'california' or state ='oregon'</code></td>
    </tr>
  </tbody>
</table>
