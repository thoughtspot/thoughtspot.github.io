<table>
   <colgroup>
      <col style="width:15%" />
      <col style="width:20%" />
      <col style="width:65%" />
   </colgroup>
   <tr id="in">
     <th>Keyword</th>
     <th>Description</th>
     <th>Example</th>
   </tr>
   <tr>
     <td><em>attribute</em> in (<em>attribute</em> <em>subsearch</em>)</td>
     <td>Query in query search (intersection of two sets)<br/>Must match last attribute before keyword with first attribute inside subsearch.</td>
     <td><ul>
     <li><code><em>store name</em> <strong>in</strong> (top 10 <em>store name</em> by sales footwear)</code></li>
     <li><code>product name 2014 product name <strong>in</strong> (product name 2013) sales</code></li></ul></td>
   </tr>
   <tr id="not-in">
     <td><em>attribute</em> not in (<em>attribute</em> <em>subsearch</em>)</td>
     <td>Relative complement of two sets<br/>
     Must match last attribute before keyword with first attribute inside subsearch.</td>
     <td><ul>
     <li><code>product name 2014 product name <strong>not in</strong> (product name 2013) sales</code><br/>
     <br/>Find sales for all products ordered in 2014 that were not ordered in 2013</li></ul></td>
   </tr>
   Find all products ordered in 2014 that were not ordered in 2013
</table>
