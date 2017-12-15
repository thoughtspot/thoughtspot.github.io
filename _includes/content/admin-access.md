Each ThoughtSpot appliance comes pre-built with three default users. You should
talk with a ThoughtSpot Customer Success Engineer or ThoughtSpot support, to get
the password for each user.  The default users are:

<table>
<colgroup>
  <col width="15%">
  <col width="15%">
    <col width="70%">
</colgroup>
  <tr>
    <th>Type</th>
    <th>Username</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Shell user</td>
    <td><code>admin</code></td>
    <td>Used for work that requires sudo or root privileges. Does not exist for application login. Logs for this user are found in <code>/usr/local/scaligent/logs</code> logs</td>
  </tr>
  <tr>
    <td>Shell user</td>
    <td><code>thoughtspot</code></td>
    <td>Used for command line work that does not require sudo or root privileges. For example, these users can use <code>tsload</code>, <code>tql</code>, and check the cluster status. Does not exist for application login.  Logs for this user are found under <code>/tmp</code>.</td>
  </tr>
  <tr>
    <td>Application user</td>
    <td><code>tsadmin</code></td>
    <td>Access through a Web browser.</td>
  </tr>
</table>
<p>&nbsp;</p>
Both the `admin` and `thoughtspot` user can SSH into the appliance. Once on the
appliance, either user can do any of the following:

* [tscli]({{ site.baseurl }}/reference/tscli-command-ref.html)
* [tsload]({{ site.baseurl }}/reference/sql-cli-commands.html)
* [tql]({{ site.baseurl }}/admin/loading/use-data-importer.html)


The `thoughtspot` user is restricted to `tscli` commands that do not require
`sudo` or root privileges.
