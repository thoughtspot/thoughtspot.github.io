There are three separate default administrator users:

|Login Type|User|Access Method|Password|
|----------|----|-------------|--------|
|OS user|`admin`|SSH. Used for work that requires sudo or root privileges. Does not exist for application login.|Contact ThoughtSpot to obtain the default password.|
|OS user |`thoughtspot`| SSH. Used for command line work that does not require sudo or root privileges. Does not exist for application login.  |Contact ThoughtSpot to obtain the default password.|
|Application user|`tsadmin`|Browser. Access through a Web browser and for non-sudo or root privilege work|Contact ThoughtSpot to obtain the default password. |


Both the `admin` and `thoughtspot` user can SSH into the appliance. Once on the
appliance, either user can do any of the following:

* [tscli]({{ site.baseurl }}/reference/tscli-command-ref.html)
* [tsload]({{ site.baseurl }}/reference/sql-cli-commands.html)
* [tql]({{ site.baseurl }}/admin/loading/use-data-importer.html)


The `thoughtspot` user is restricted to `tscli` commands that do not require
`sudo` or root privileges.
