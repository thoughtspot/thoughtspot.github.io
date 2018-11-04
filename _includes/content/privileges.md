<table>
<colgroup>
<col width="25%" />
<col width="75%" />
</colgroup>
  <thead>
    <tr>
      <th>Privilege</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Has administration privileges</strong></td>
      <td>Can manage Users and Groups and has view and edit access to all data. Users with this privilege can also download a saved answer. </td>
    </tr>
    <tr>
      <td><strong>Can upload user data</strong></td>
      <td>Can upload their own data from the application's <strong>Data</strong> page using <strong>Actions > Upload data</strong>.</td>
    </tr>
    <tr>
      <td><strong>Can download data</strong></td>
      <td>Can download data from search results and pinboards.</td>
    </tr>
    <tr>
      <td><strong>Can share with all users</strong></td>
      <td>Can see the names of and share with users outside of the groups the user belongs to. Members of groups with this privilege can also share with groups marked as
      <strong>NOT SHAREABLE</strong>.</td>
    </tr>
    <tr>
      <td><strong>Can manage data</strong></td>
      <td>Can create a worksheet. Can also create an aggregated worksheet from the results of a search by selecting <strong>Save as worksheet</strong>. Can also use ThoughtSpot Data Connect, if it is enabled on your cluster.</td>
    </tr>
    <tr>
      <td><strong>Can schedule pinboards</strong></td>
      <td>Can create pinboard schedules and edit their own scheduled jobs.</td>
    </tr>
    <tr>
      <td><strong>Has Spot IQ privilege</strong></td>
      <td>User can use SpotIQ's auto analyze function.</td>
    </tr>
    <tr>
      <td><strong>Can Administer and Bypass RLS</strong></td>
      <td><p>Users in groups with this privilege (directly or via group inheritance):</p>
<ul>      <li>Are exempt from row-level security (RLS) rules.</li>
      <li>Can add/edit/delete existing RLS rules.</li>
      <li>Can check or uncheck Bypass RLS on a worksheet.</li></ul>

      <p>Your installation configuration may enable or disable the availability of this privilege. By default, it is enabled. Administrators or groups with the  <b>Has administration privilege</b> can grant this privilege.</p> </td>
    </tr>
  </tbody>
</table>
