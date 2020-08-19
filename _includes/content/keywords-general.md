<table>
   <colgroup>
      <col style="width:15%" />
      <col style="width:20%" />
      <col style="width:65%" />
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Keyword</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody class="tbody">
      <tr id="top-n">
         <td>top <i>n</i></td>
         <td>Generates the top <strong>n</strong> from a sorted result</td>
         <td>
          <ul><li><code><b>top 10</b> sales rep revenue</code></li>
          <li><code><b>top</b> sales rep by count sales for average revenue > 10000</code></li>
          <li><code>sales rep average revenue for each region <b>top</b> </code></li> </ul>
         </td>
      </tr>
      <tr id="top-n-by">
         <td>top <i>n</i> <i>measure1</i> by <i>attribute</i>|<i>measure2</i></td>
         <td>Calculates top <strong>n</strong>, then sorts the top items by another measure or attribute.<br/>Contrast with <a href="#top-n">top <em>n</em></a> (swaps the order of operations)</td>
         <td>
          <ul><li><code><b>top 10</b> sales rep revenue <b>by</b> profit margin</code></li>
          </ul>
         </td>
      </tr>
      <tr>
         <td>bottom <i>n</i></td>
         <td>Generates the bottom <strong>n</strong> from a sorted result</td>
         <td>
            <ul><li><code><b>bottom 25</b> customer by revenue for each sales rep</code></li>
            <li><code><b>bottom</b> revenue average</code></li>
            <li><code><b>bottom</b> revenue by state</code></li>
            <li><code>customer by revenue for each sales rep <b>bottom</b></code></li></ul>
         </td>
      </tr>
      <tr>
         <td>sort by</td>
         <td>Sorts the result set by an attribute or measure.</td>
         <td>
            <ul>
            <li><code>revenue by state <b>sort by</b> average revenue</code></li>
            <li><code>revenue by customer <b>sort by</b> region</code></li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>
{% include note.html content="When using the <b>top</b> or <b>bottom</b> keywords without specifying a number (<b><i>n</i></b>), the number defaults to 10." %}
