---
title: [Sync users and groups from LDAP]
last_updated: 5/10/2021
summary: "Use this procedure to synchronize your ThoughtSpot system with an LDAP server through Active Directory or OpenLDAP."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot provides a script that allows you to sync your Active Directory or OpenLDAP users and groups within ThoughtSpot so you can assign the proper privileges. You can sync new users who are assigned to existing ThoughtSpot groups within Active Directory or OpenLDAP, programmatically assigning them the privileges of those groups. When you sync new groups, you must manually assign them privileges in the ThoughtSpot [group administration interface]({{ site.baseurl }}/admin/ts-cloud/groups.html).

This Active Directory or OpenLDAP sync script is not the same as LDAP authentication. However, if your [SAML SSO]({{ site.baseurl }}/admin/ts-cloud/authentication-integration) is properly set up, and your IdP is synced with your LDAP, new AD or OpenLDAP users that you add using this script can authenticate using SAML SSO.

## Prerequisites

Before synchronizing users and groups, collect the following information and materials:

- Download the [LDAP sync script](https://github.com/thoughtspot/community-tools/tree/master/python_tools/ldap_sync_python_api){: target="_blank"} from ThoughtSpot's community tools Github repository. Modify it or create your own as necessary.

- A computer with access to the ThoughtSpot APIs, as well as your Active Directory or OpenLDAP environment.

-   Domain or IP address and port of the server where your ThoughtSpot instance is running.

    The location of the ThoughtSpot instance must be in the following format: `http(s)://<IP-address>:<port>` or `http(s)://<domain>`.

-   Credentials (username and password) for a user with administrator privileges in the front-end for your ThoughtSpot instance.

-   URL of the LDAP server, or hostport.

    For example, `ldap://<IP-address>:<port>`

-   Login username and password for the LDAP system.

    An example username would be `moo_100@ldap.thoughtspot.com`

-   Distinguished Name (DN) for the base to start searching for users in the LDAP system.

    For example, `DC=ldap,DC=thoughtspot,DC=com`

-  LDAP filter string, if you would like to limit the script's search for new or modified users and groups to a specific set. For example, `(|(CN=TestGroupAlpha)(CN=TestGroupBeta))`

## Fetch users and groups from LDAP

There are two ways for you to fetch users and groups from LDAP and populate them
into your ThoughtSpot system:

-   Run the synchronization script in [interactive mode](#interactive), which walks you through the process
-   Run the synchronization script in [script mode](#script), which allows you to input your own shorthand script commands

{% include note.html content="When you run the synchronization script, you perform a one-time sync. You must schedule a recurring sync using a cron job or your own scheduling tool to keep your ThoughtSpot users up to date with your users in LDAP." %}

{: id="interactive"}
### Run in interactive mode

To run the LDAP sync script in interactive mode:

2. Run the command to start the script. You must run this command from a machine that you downloaded the script onto. The machine must also have access to your Active Directory or OpenLDAP environment.

    ```
    python3 syncUsersAndGroups.py interactive
    ```

3. Answer the prompts using the information you collected above. Specify `2` for the `scope` if you would like to sync all groups, including subgroups. For example:

    ```
    Complete URL of TS server in format "http(s)://<domain>": http://<my_company.thoughtspot.com>
    Disable SSL authentication to TS server (y/n): y
    Login username for ThoughtSpot system: <admin_username>
    Login password for ThoughtSpot system: <admin_password>
    Complete URL of server where LDAP server is running in format ldap(s)://<host>:<port>: ldap://192.168.2.48:389
    Login username for LDAP system: moo_100@ldap.thoughtspot.com
    Login password for LDAP system: 12345
    Syncs user and groups between LDAP and TS systems (y/n): y
    Delete entries in ThoughtSpot system that are not currently in LDAP tree being synced (y/n): n
    Distinguished name for the base to start searching groups in LDAP System: DC=ldap,DC=thoughtspot,DC=com
    Scope to limit the search to (choice number)
    0:base Searching only the entry at the base DN
    1:one Searching all entries on level under the base DN - but not including the base DN
    2:tree Searching of all entries at all levels under and including the specified base DN: 2
    ```

    ```
    Filter string to apply the search to: (|(CN=TestGroupAlpha)(CN=TestGroupBeta))
    ```

    Answering this prompt is optional. If left blank, the script uses the default value of `'(CN=*)'`.

    ```
    Apply sync recursively, i.e. Iterates through group members and creates member groups, users and relationships in a recursive way. (y/n): n
    ```

    This prompt is asking if you would like to include group members even if they do not belong to the current sub tree that is being synced.

4. To check that the sync was successful, navigate to the Admin Console in your ThoughtSpot application by selecting **Admin** from the top navigation bar. Select either **Users** or **Groups**. Your new users or groups should be the latest items in the list of users or groups. To view the most recently added or updated users or groups, sort by **Created**.

{: id="script"}
### Run in script mode
To input your own shorthand script commands:

Issue the Python script commands, supplying all this information, following this format example. Refer to the [`syncUsersAndGroups.py` command-line switches](#sync-script-switches) for information on each parameter.

```
python3 syncUsersAndGroups.py script \
–-ts_hostport <ts_hostport> \
--disable_ssl \
--ts_uname <ts_username> \
--ts_pass <ts_password> \
--ldap_hostport '<ldap_hostport>' \
--ldap_uname '<ldap_username>' \
--ldap_pass '<ldap_password>' \
--sync \
--basedn 'DC=ldap,DC=thoughtspot,DC=com' \
--filter_str '(|(CN=TestGroupAlpha)(CN=TestGroupBeta))' \
--include_nontree_members \
--user_identifier <user_identifier> \
--authdomain_identifier <authdomain_identifier> \
--email_identifier <email_identifier>
```

The flags from `--basedn` to `--email_identifier` target sub trees under the DC called TestGroupAlpha and TestGroupBeta, and iterate through them recursively to create/sync users, groups, and their relationships in the ThoughtSpot system.

To check that the sync was successful, navigate to the Admin Console in your ThoughtSpot application by selecting **Admin** from the top navigation bar. Select either **Users** or **Groups**. Your new users or groups should be the latest items in the list of users or groups. To view the most recently added or updated users or groups, sort by **Created**.

{: id="sync-script-switches"}
**`syncUsersAndGroups.py` command-line switches**

The following table provides a description of each command-line switch available for the `syncUsersAndGroups` python script.

  <table width="100%" border="0">
  <col width="260">
  <col width="900">
	  <tbody>
	    <tr>
	      <th scope="col">Switch</th>
	      <th scope="col">Description</th>
        </tr>
        <tr>
  	      <td><code>--ts_hostport &lt;ts_hostport&gt;</code></td>
  	      <td>ThoughtSpot cluster host port.</td>
          </tr>  
	    <tr>
	      <td><code>--disable_ssl</code></td>
	      <td>Controls the communication between the sync script and the ThoughtSpot cluster. It disables SSL communications between the script and the cluster ONLY, and prevents the need to provide SSL certs during the script execution in order to create users and groups.</td>
        </tr>
	    <tr>
	      <td><code>--ts_uname</code></td>
	      <td>ThoughtSpot admin username. Can be any front-end user with administrator privileges.</td>
        </tr>
	    <tr>
	      <td><code>--ts_pass</code></td>
	      <td>ThoughtSpot admin password. Must be the corresponding password for the <code>--ts_uname</code>, which can be any front-end user with administrator privileges.</td>
        </tr>
		<tr>
	      <td><code>--ldap_hostport</code></td>
	      <td>AD/LDAP/OpenLDAP server port that is queried. Default is 389.</td>
        </tr>
    <tr>
        <td><code>--ldap_type</code></td>
        <td><p>Specifies if you are using Active Directory (AD) or OpenLdap.</p><p>The default is <code>AD</code>.</p></td>
    </tr>
		<tr>
	      <td><code>--ldap_uname</code></td>
	      <td>Username for the LDAP/AD/OpenLDAP server.</td>
        </tr>
		<tr>
	      <td><code>--ldap_pass &lt;ldap_password&gt;</code></td>
	      <td>Password for the LDAP/AD/OpenLDAP server.</td>
        </tr>
		<tr>
	      <td><code>--sync</code></td>
	      <td>Syncs users and groups which match the <code>basedn</code> and <code>filter_str</code> queries to your ThoughtSpot cluster.</td>
        </tr>
		<tr>
	      <td><code>--purge</code></td>
	      <td>Purges any users or groups that exist in ThoughtSpot, but not in AD or OpenLDAP.</td>
        </tr>
    <tr>
      <td><code>--purge_users</code></td>
      <td>Purges any users that exist in ThoughtSpot, but not in AD or OpenLDAP.</td>
    </tr>
    <tr>
      <td><code>--purge_groups</code></td>
      <td>Purges any groups that exist in ThoughtSpot, but not in AD or OpenLDAP.</td>
    </tr>
		<tr>
	      <td><code>--basedn</code></td>
	      <td>Place in the directory that will be searched for users.</td>
        </tr>
		<tr>
	      <td><code>--filter_str</code></td>
	      <td>Further filters results from your base DN.</td>
        </tr>
		<tr>
	      <td><code>--include_nontree_members</code></td>
	      <td>Includes group members from LDAP/AD/OpenLDAP even if they do not belong to the current subtree that is being synced.</td>
        </tr>
    <tr>
        <td><code>--user_identifier &lt;user_identifier&gt;</code></td>
        <td>User name identifier key for user creation or sync.</td>
        </tr>	 
    <tr>
        <td><code>--authdomain_identifier &lt;authdomain_identifier&gt;</code></td>
        <td>Override domain name to be appended to user identifier in user name.</td>
      </tr>
    <tr>
        <td><code>--email_identifier &lt;email_identifier&gt;</code></td>
        <td>Email identifier key for user creation or sync.</td>
      </tr>	 
    <tr>
        <td><code>--debug</code></td>
        <td>Provides additional logs in case of failure or other errors.</td>
    </tr>
    <tr>
        <td><code>--member_str</code></td>
        <td><p>Provide the member string for AD or OpenLdap.</p><p>The default is <code>member</code>.</p></td>
    </tr>	  
    <tr>
        <td><code>--upsert_group</code></td>
        <td>Upserts groups during sync. By default, this script only inserts, but does not update.</td>
    </tr>	  
    <tr>
        <td><code>--upsert_user</code></td>
        <td>Upserts users during sync. By default, this script only inserts, but does not update.</td>
    </tr>	  	            
  </tbody>
</table>
