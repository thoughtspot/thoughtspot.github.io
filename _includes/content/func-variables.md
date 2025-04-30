


<table>
<colgroup>
<col width="20%" />
<col width="50%" />
<col width="30%" />
</colgroup>
   <tr>
      <td>Function</td>
      <td>Description</td>
      <td>Examples
      </td>
   </tr>
   <tr>
      <td><code>ts_groups</code></td>
      <td>Returns a list of all the groups the current logged in user belongs to. For
         any row, if the expression evaluates to true for any of the groups, the user can
         see that row.
      </td>
      <td><code>ts_groups = 'east'</code>
      </td>
   </tr>
   <tr>
      <td> <code>ts_username</code> </td>
      <td>Returns the user with the matching name.  </td>
      <td><code>ts_username != 'mark'</code>  </td>
   </tr>
</table>

{% include note.html content="You cannot use these variables (<code>ts_groups</code> and <code>ts_username</code>) within an expression. For example, <code>ts_groups = substr(rls_group_name, 0, 3)</code> is valid, but <code>substr(ts_groups,0,3) = rls_group_name</code> is NOT valid." %}
