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
    <tr>
      <td><code>and</code></td>
      <td>Returns true when both conditions are true, otherwise returns false.</td>
      <td><code class="highlighter-rouge">(1 = 1) and (3 &gt; 2) = true</code><br><code class="highlighter-rouge">lastname = 'smith' and state ='texas'</code>
      {% include note.html content="Not available for row level security (RLS) formulas." %}
      </td>
    </tr>
    <tr>
      <td><code>if…then…else</code></td>
      <td>Conditional operator.</td>
      <td><code class="highlighter-rouge">if (3 &gt; 2) then 'bigger' else 'not bigger'</code><br><code class="highlighter-rouge">if (cost &gt; 500) then 'flag' else 'approve'</code></td>
    </tr>
    <tr>
      <td><code>ifnull</code></td>
      <td>Returns the first value if it is not null, otherwise returns the second.</td>
      <td><code class="highlighter-rouge">ifnull (cost, 'unknown')</code></td>
    </tr>
    <tr>
      <td><code>isnull</code></td>
      <td>Returns true if the value is null.</td>
      <td><code class="highlighter-rouge">isnull (phone)</code></td>
    </tr>
    <tr>
      <td><code>not</code></td>
      <td>Returns true if the condition is false, otherwise returns false.</td>
      <td><code class="highlighter-rouge">not (3 &gt; 2) = false</code><br><code class="highlighter-rouge">not (state = 'texas')</code></td>
    </tr>
    <tr>
      <td><code>or</code></td>
      <td>Returns true when either condition is true, otherwise returns false.</td>
      <td><code class="highlighter-rouge">(1 = 5) or (3 &gt; 2) = true</code><br><code class="highlighter-rouge">state = 'california' or state ='oregon'</code></td>
    </tr>
  </tbody>
</table>
