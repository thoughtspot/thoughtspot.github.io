<dl>
    <dlentry id="administer-ts">
      <dt>Can administer ThoughtSpot</dt>
      <dd>Can manage Users and Groups and has view and edit access to all data. Users with this privilege can also download a saved Answer. </dd>
    </dlentry>
    <dlentry id="upload-user-data">
      <dt>Can upload user data</dt>
      <dd>Can upload their own data from the application's <strong>Data</strong> page using <strong>Actions > Upload data</strong>.</dd>
    </dlentry>
    <dlentry id="download-data">
      <dt>Can download data</dt>
      <dd>Can download data from search results and pinboards.</dd>
    </dlentry>
    <dlentry id="share">
      <dt>Can share with all users</dt>
      <dd>Can see the names of and share with users outside of the groups the user belongs to. Members of groups with this privilege can also share with groups marked as
      <strong>NOT SHARABLE</strong>.</dd>
    </dlentry>
    <dlentry id="manage-data">
      <dt>Can manage data</dt>
      <dd>Can create worksheets and views. Can create Embrace connections.<br>Note that to edit a worksheet or a view created by another user, you must have the **Edit** permission on that object, and it must be shared with you.</dd>
    </dlentry>
    <dlentry id="experimental">
      <dt>Can use experimental features</dt>
      <dd>Can access trial and experimental features that ThoughtSpot makes available to early adopters.</dd>
    </dlentry>
    <dlentry id="custom-r">
      <dt>Can invoke Custom R Analysis <span class="label label-beta">De-support 7.2</span></dt>
      <dd>Can access R scripts to further explore search answers. Includes options to invoke R scripts on visualizations, create and share custom scripts, and share the results of R analysis as answers and pinboards.</dd>
    </dlentry>
    <dlentry id="schedule-pinboards">
      <dt>Can schedule pinboards</dt>
      <dd>Can create and edit Pinboard schedules for other users and groups. Without this privilege, users can only create Pinboard schedules for themselves. This feature is not available by default. <a href="{{ site.baseurl }}/appliance/contact.html">Contact ThoughtSpot Support</a> to enable it.</dd>
    </dlentry>
    <dlentry id="spotiq">
      <dt>Has SpotIQ privilege</dt>
      <dd>Can use the SpotIQ feature.<br>If this privilege is not enabled for the user, but Insights are enabled on the cluster (this is off by default), they can still see "Did you know" SpotIQ insights on the ThoughtSpot home page.</dd>
    </dlentry>
    <dlentry id="bypass-rls">
      <dt>Can administer and bypass RLS</dt>
      <dd><p>Users in groups with this privilege (directly or through group inheritance):</p>
          <ul>      
            <li>Are exempt from row-level security (RLS) rules.</li>
            <li>Can add/edit/delete existing RLS rules.</li>
            <li>Can check or uncheck Bypass RLS on a worksheet.</li></ul>
      <p>Your installation configuration may enable or disable the availability of this privilege. By default, it is enabled. Administrators or groups with the privilege <strong>Can administer ThoughtSpot</strong> can grant this privilege.</p></dd>
    </dlentry>
    <dlentry id="read-only">
      <dt>Cannot create or update Pinboards</dt>
      <dd><p>Users are limited to viewing and exploring curated Pinboards (and Answers). They cannot copy, edit, download, or share them.</p>
      <p>This privilege is designed to support embedded implementations, and is not available by default. <a href="{{ site.baseurl }}/appliance/contact.html">Contact ThoughtSpot Support</a> to enable it.</p>
      <p>See <a href="{{ site.baseurl }}/end-user/introduction/pinboard-granular-permission.html">Granular access to Pinboards</a> for a deeper discussion of this privilege, and an implementation example.</p></dd>
    </dlentry>
  </dl>
