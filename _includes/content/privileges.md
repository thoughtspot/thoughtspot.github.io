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
      <td><strong>Can administer ThoughtSpot</strong></td>
      <td>Can manage Users and Groups and has view and edit access to all data. Users with this privilege can also download a saved answer.</td>
    </tr>
    <tr>
      <td><strong>Can download data</strong></td>
      <td>Can download data from search results and Liveboards.</td>
    </tr>
    <tr>
      <td><strong>Can share with all users</strong></td>
      <td>Can see the names of and share with users outside of the groups the user belongs to. Members of groups with this privilege can also share with groups marked as
      <strong>NOT SHAREABLE</strong>.</td>
    </tr>
    <tr>
      <td><strong>Can manage data</strong></td>
      <td>Can create connections. To view or edit other people's connections, you must have the <strong>Can administer ThoughtSpot</strong> privilege. <br>Can create worksheets and views.<br>Note that to edit a worksheet or a view created by another user, you must have the <strong>Edit</strong> permission on that object, and it must be shared with you.</td>
    </tr>
    <tr>
      <td><strong>Can use experimental features</strong></td>
      <td>Can access trial and experimental features that ThoughtSpot makes available to early adopters.</td>
    </tr>
    <tr id="schedule-pinboards">
      <td><strong>Can schedule Liveboards</strong></td>
      <td>Can create Liveboard schedules and edit their own scheduled jobs.</td>
    </tr>
    <tr>
      <td><strong>Has SpotIQ privilege</strong></td>
      <td>Can use the SpotIQ feature.<br>If this privilege is not enabled for the user, they can still see "Did you know" SpotIQ insights on the ThoughtSpot home page.</td>
    </tr>
    <tr>
      <td><strong>Can administer and bypass RLS</strong></td>
      <td><p>Users in groups with this privilege (directly or through group inheritance):</p>
<ul>      <li>Are exempt from row-level security (RLS) rules.</li>
      <li>Can add/edit/delete existing RLS rules.</li>
      <li>Can check or uncheck Bypass RLS on a worksheet.</li></ul>

      <p>Your installation configuration may enable or disable the availability of this privilege. By default, it is enabled. Administrators or groups with the privilege <b>Can administer ThoughtSpot</b> can grant this privilege.</p> </td>
    </tr>
    <tr>
      <td><strong>Has Developer privilege</strong></td>
      <td>Can access and use the <a href="{{ site.baseurl }}/admin/ts-cloud/spotdev-portal.html">Developer Portal</a> to explore the ThoughtSpot APIs and developer tools, and build web applications with ThoughtSpot content.</td>
    </tr>
    <tr id="read-only">
      <td><strong>Cannot create or update Liveboards</strong></td>
      <td><p>Users are limited to viewing and exploring curated Liveboards (and Answers). They cannot copy, edit, download, or share them.</p>
      <p>This privilege is designed to support embedded implementations, and is not available by default. <a href="{{ site.baseurl }}/appliance/contact.html">Contact ThoughtSpot Support</a> to enable it.</p>
      <p>See <a href="{{ site.baseurl }}/end-user/introduction/pinboard-granular-permission.html">Granular access to Liveboards</a> for a deeper discussion of this privilege, and an implementation example.</p></td>
    </tr>
  </tbody>
</table>
