---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# tscli --advcommand reference

The tscli command line interface is an administration interface for the ThoughtSpot instance. Use tscli to take snapshots \(backups\) of data, apply updates, stop and start the services, and view information about the system.

## Internal only

This section contains both public and internal only commands. Use these commands with extreme caution, and do not shared them with customers or third parties.

## tscli syntax

Usage for tscli is:

```
tscli [-h] [--helpfull] [--verbose] [--noautoconfig]
           [--autoconfig] [--yes] [--cluster <cluster>]
           [--zoo <zookeeper>] \[--username username\] \[--identity\_file identity\_file\]
           {alert, backup, callhome, cgroups, cluster, command, config, disk,
           etl, event, feature, fileserver, firewall,
           graphite-metrics, hdfs, ldap, logs,
           metrics, monitoring, nas,
           node, os, release, saml, security, service,
           smtp, snapshot, ssl, statsdb, storage,
           support, zoo} ...
```

## tscli commands

|Command|Description|
|-------|-----------|
| ```
tscli [<command>] -h
```

 |Shows help, optionally for the specified command.|
| ```
tscli alert count
```

 |Shows counts of generated alerts by type.|
| ```
tscli --adv alert dedup
```

 |Sets up dedup for alerts. The cluster will not generate the same alert again during this period.|
| ```
tscli alert info
```

 |Lists all alerts.|
| ```
tscli alert list
```

 |Lists the generated alerts.|
| ```
tscli alert off
```

 |Disables all alerts from the cluster.|
| ```
tscli alert on
```

 |Enables alerts from the cluster.|
| ```
tscli alert silence --name <alert\_name>
```

 |Silences the alert with `<alert\_name>`. For example, DISK\_ERROR. Silenced alerts are still recorded in postgres, however emails are not sent out.|
| ```
tscli alert status
```

 |Shows the status of cluster alerts.|
| ```
tscli alert unsilence-name <alert\_name>
```

 |Unsilences the alert with `<alert\_name>`. For example, DISK\_ERROR.|
| ```
tscli backup create
   [--mode {full|light|dataless}]
   <name> <directory>
```

 |Same as the `tscli snapshot backup` command.Pulls a snapshot and saves it as a backup where:

-   `<name>` is the name of the snapshot to pull out as a backup.
-   `<directory>` is the new directory that will be created for the backup. This directory must not already exist.

Use `--mode` to specify the [type of backup](../backup_restore/backups_and_snapshots.html#).

|
| ```
tscli.par backup create [-h]
   [--mode {full|light|dataless}]
   [--type {full|incremental}][--base BASE]
   [--storage_type {local|nas}][--remote]
   <name> <directory>
```

 |Same as the `tscli snapshot backup` command. This backup creation method make backups a part of the cluster so that they can be managed using tscli commands.Pulls a snapshot and saves it as a backup where:

-   Use `--mode` to specify the [type of backup](../backup_restore/backups_and_snapshots.html#).
-   `--type` should always be full.
-   `--base` should not be set. This parameter is reserved for incremental backups.
-   `--remote` is a switch to use the cluster-linked backup method. The backup taken in this way will be on the node where the orion master is running. It therefore requires the cluster to be running.
-   `--storage_type` is only valid if you turn on `[--remote]` switch. You can choose from local or nas. For local, the backup will be taken on the node where the active orion master is runing.
-   `<name>` is the name of the snapshot to pull out as a backup.
-   `<directory>` is the new directory that will be created for the backup. This directory must not already exist.

|
| ```
tscli --adv cluster delete --hosts
  <IP1>,<IP2>,<IP3>,...
```

 |Deletes the remaining state of a partial cluster.|
| ```
tscli backup delete <name>
```

 |Deletes the named backup.|
| ```
tscli.par backup delete [-h] <id>
```

 |This command deletes backups generated with `tscli.par backup create [-h]`. Use `tscli backup ls` to find the backup id for each backup. The backup metadata is removed from the cluster, and the backup directory is deleted from the node.|
| ```
tscli --adv edit-periodic-config
```

 |Edit periodic backup config.|
| ```
tscli backup disable-periodic
```

 |Disables periodic backups. Restarts the cluster when applied.|
| ```
tscli backup list-policy
```

 |Shows a list of present backup policies.|
| ```
tscli backup ls
```

 |Lists available backups and their size.|
| ```
tscli backup mirror-status
```

 |Checks whether the current cluster is running in mirror mode or not.|
| ```
tscli backup periodic-config <name>
```

 |Shows the periodic backup <name\> configuration.|
| ```
tscli backup periodic-status
```

 |Shows the periodic backup <name\> status.|
| ```
tscli backup restore
  [--release <release>]
   <backupdir>
```

 |Restores a cluster using the backup from the directory specified by <backupdir\>, from the release file optionally specified by `<release>`.|
| ```
tscli backup
   set-periodic
   --at <hour1, hour2, ...>
   --directory <directory>
   [--num_backups <num\_backups>]
   [--mode {full|light|dataless}]
```

 |Enables or updates a periodic full backup configuration where: -   `<hour1, hour2, ...>` is the list of times at which to take backups daily. Comma separated string of hour of day specified as HH using a 24 hour clock \(e.g. 01, 13, 23\).
-   `<directory>` is the directory where backups are to be written.
-   `<num\_backups>` is the number of backups to keep archived.

Use `--mode` to specify the [type of backup](../backup_restore/backups_and_snapshots.html#).

|
| ```
tscli backup
   start-mirror <directory>
   <node1, node2, ...>
   <cluster\_name> <cluster\_id>
```

 |Starts a mirror cluster which will continuously pull backups generated from a primary cluster where:-   `<directory>` is the directory where backups from the primary cluster are written \(usually a SAN or NFS mounted drive\).
-   `<node1, node2, ...>` is a comma separated list of IP addresses of the nodes in the mirror cluster.
-   `<cluster\_name>` is the cluster name of the mirror cluster.
-   `<cluster\_id>` is the ID of the mirror cluster.

Used only in systems specifically architected for disaster recovery.|
| ```
tscli backup stop-mirror
```

 |Stops mirroring on the local cluster. Used only in systems specifically architected for disaster recovery.|
| ```
tscli backup-policy create
```

 |Prompts an editor for you to edit the parameters of the backup policy.|
| ```
tscli backup-policy delete <name>
```

 |Deletes the backup policy with <name\>.|
| ```
tscli backup-policy disable <name>
```

 |Disables the policy <name\>.|
| ```
tscli backup-policy enable <name>
```

 |Enables the policy <name\>.|
| ```
tscli backup-policy ls 
```

 |List backup policies.|
| ```
tscli backup-policy show <name>
```

 |Show the policy <name\>.|
| ```
tscli backup-policy status <name>
```

 |Enables the policy <name\>.|
| ```
tscli backup-policy update <name>
```

 |Prompts an editor for you to edit the policy <name\>.|
| ```
tscli callhome disable
```

 |Turns off the periodic call home feature.|
| ```
tscli callhome enable
   --customer_name <customer\_name>
```

 |Enables the "call home" feature, which sends usage statistics to ThoughtSpot Support every six hours via the secure file server. Before using this command for the first time, you need to set up the file server connection using `tscli fileserver configure`.

The parameter `<customer\_name\>` takes the form `Shared/<customer\_name>/stats`.

[Contact ThoughtSpot](../misc/contact.html#) if you do not know the customer name to specify.|
| ```
tscli callhome generate-bundle
   --d <directory> --since <num\_of\_daysd>
```

 |Generates a tar file of the cluster metrics and writes it to the specified directory where:-   `<num\_of\_daysd>` is how far back you'd like to generate the tar file from in days. For example, `<30d>`. If this parameter is not specified, the command will collect stats from the last 15 days by default. Once the stats are collected, the data gets backfilled in dogfood for all the missing dates.

|
| ```
tscli --adv cgroups set-mode
```

 |Set the mode for cgroups management. Primarily used for supporting reverting to pre-3.3 releases if there's a failure in updating to 3.3. For example, if the system has been upgraded to ictlu, old Orion may no longer run. By switching cgroups mode to lmctfy, old Orion can still run allowing the update to be retried on a functioning cluster.|
| ```
tscli --adv cluster config
```

 |Prints the cluster configuration.|
| ```
tscli --adv cluster cpu-usage
```

 |Prints the cpu loadavg of all nodes in the cluster.|
| ```
tscli cluster create <release>
```

 |Creates a new cluster from the release file specified by `<release>`. This command is used by ThoughtSpot Support when installing a new cluster. Example:```
$ tscli cluster create 2.0.4.tar.gz
```

|
| ```
tscli --adv cluster delete
```

 |Deletes the cluster.|
| ```
tscli --adv cluster desc
```

 |Returns the descriptor for this cluster.|
| ```
tscli --adv cluster edit-config
```

 |Edits the cluster configuration.|
| ```
tscli --adv cluster memory-capacity
```

 |Prints the current memory capacity of the cluster, in MB. Note that the returned value is not the amount of free memory in the cluster.|
| ```
tscli --adv cluster report
```

 |Generates the cluster report.|
| ```
tscli cluster restore
   --release <release\_tarball>
   <backupdir>
```

 |Restores a cluster using the backup in the specified directory `<backupdir>`. If you're restoring from a dataless backup, you must supply the release tarball for the corresponding software release.|
| ```
tscli --adv cluster restore-internal
```

 |Restores a cluster using the backup. This method uses the current tscli for the entire cluster restoration work. It does not extract and handover the work to the tscli present in the release tarball. This method is not intended to be called directly, but is used by the 'cluster restore' command internally.|
| ```
tscli --adv cluster resume
```

 |Resumes a paused upgrade.|
| ```
tscli --adv cluster set-id
```

 |Sets the cluster ID.|
| ```
tscli --adv cluster show-id
```

 |Prints the cluster ID.|
| ```
tscli cluster start
```

 |Starts the cluster.|
| ```
tscli cluster status
```

 |Gives the status of the cluster, including release number, date last updated, number of nodes, pending tables time, and services status.|
| ```
tscli cluster stop
```

 |Pauses the cluster \(but does not stop storage services\).|
| ```
tscli --adv cluster tsinhouse
```

 |Enables/disables the tsinhouse flag and takes the associated action.|
| ```
tscli cluster update <release>
```

 |Updates an existing cluster using the release file specified by `<release>`. This command is used by ThoughtSpot Support when updating a cluster to a new release.|
| ```
tscli --adv cluster update-internal
```

 |Updates the Orion state. It is not intended to be called directly, instead it is only intended to be called by snapshot restore.|
| ```
tscli command run
```

 |Runs a command on all nodes.|
| ```
tscli --adv config delete
```

 |Deletes the key in the configuration store.|
| ```
tscli --adv config get
```

 |Gets the value for the key in the configuration store.|
| ```
tscli --adv config set
```

 |Sets the key in the configuration store.|
| ```
tscli --adv disk replace
```

 |Restores the HDFS after the disk replacement.|
| ```
tscli etl change-password
  --admin_username <admin\_user>
  --username <Informatica\_user>
```

 |Changes the Informatica Cloud account password used by ThoughtSpot Data Connect.Required parameters are:

-   `--admin_username <admin\_user>` specifies the Administrator username for ThoughtSpot.
-   `--username <Informatica\_user>` specifies the username for the Informatica Cloud.

|
| ```
tscli etl disable-lw
```

 |Disables ThoughtSpot Data Connect.|
| ```
tscli etl download-agent
```

 |Downloads the ThoughtSpot Data Connect agent to the cluster.|
| ```
tscli etl enable-lw
  --admin_username <admin\_user>
  --username <Informatica\_user>
  --thoughtspot_url <URL>
  \[--org\_id <informatica\_org\_id\>\]
  \[--groupname <groupname\>\]
  [--pin_to <IP\_address>]
  [--proxy_host <proxy\_server\_hostname>]
  [--proxy_port <proxy\_server\_port>]
```

 |Enables ThoughtSpot Data Connect. Some parameters are given below, but you should contact ThoughtSpot Support for assistance in setting this up.Required parameters are:

-   `--admin_username <admin\_user>` specifies the Administrator username for ThoughtSpot.
-   `--username <Informatica\_user>` specifies the username for the Informatica Cloud.
-   `--thoughtspot_url <URL>` specifies the URL for ThoughtSpot
-   `--org_id <informatica\_org\_id>` specifies the Informatica id of the organization \(company\). For ThoughtSpot, this is 001ZFA.NOTE: org\_id shouldn't include the prefix "Org". For example, if on Informatica cloud, the orgid is Org003XYZ, then use only 003XYZ.

Optional parameters are:-   `--groupname <groupname>` specifies the name of the secure agent group to use.
-   `--pin_to <IP\_address>` specifies the IP address to pin to. If you specify an IP to pin to, that node becomes sticky to the Informatica agent, and will always be used. Defaults to the public IP address of the localhost where this command was run.
-   `--proxy_host <proxy\_server\_hostname>` and `--proxy_port <proxy\_server\_port>` specifies the proxy details.

|
| ```
tscli etl show-lw
```

 |Shows the status of ThoughtSpot Data Connect. It also returns the Informatica username and OrgId.|
| ```
tscli event list 
   [--include <all|config|notification>] 
   [--since <hours,minutes,days>
   | --from <yyyymmdd-HH:MM> 
   --to <yyyymmdd-HH:MM>] 
   [--detail] 
   [--summary_contains
   <'string1'| 'string2' ...>]
   [--detail_contains 
   <'string1'| 'string2' ...>]
   [--attributes
   <key1='value1'|
   key2='value2' ...>]
```

 | Optional parameters are:

-   `--include` specifies the type of events to include, and can be `all`, `config`, or `notification`.
-   `--detail` returns the events in a detail format rather than a tabular summary, which is the default.
-   `--summary_contains <'string1'| 'string2' ...>` specifies a string to check for in the event summary. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--detail_contains <'string1'| 'string2' ...>` specifies a string to check for in the detail. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.
-   `--attributes <key1='value1'| key2='value2' ...>` specifies attributes to match as key=value pairs. Separate multiple attributes with |. Events that match all specified key/value pairs will be returned. Put single quotes around the value\(s\).

And a time window made up of either:

-   `--since <hours,minutes,days>` is a time in the past for where the event audit begins, ending at the present time. Specify a human readable duration string, e.g. 4h \(4 hours\), 30m \(30 minutes\), 1d \(1 day\).

Or both:

-   `--from <yyyymmdd-HH:MM>` is a timestamp for where to begin the event audit. It must be of the form: yyyymmdd-HH:MM.
-   `--to <yyyymmdd-HH:MM>` is a timestamp for where to end the event audit. It must be of the form: yyyymmdd-HH:MM.

 |
| ```
tscli feature get-all-config
```

 |Gets the configured features in a cluster. The command will return a list of features, such as custom branding, Data Connect, and call home, and tell you whether they are enabled or disabled.|
| ```
tscli fileserver configure
   --user <user\_name>
   [--password <password>]
```

 |Configures the secure file server username and password for file upload/download and the call home feature. You only need to issue this command once, to set up the connection to the secure file server. You only need to reissue this command if the password changes. The parameter `<password>` is optional. If a password is not specified, you will be prompted to enter it.|
| ```
tscli fileserver
   download-release <release>
   [--user <user_name>
   --password <password>]
```

 |Downloads the specified release file and its checksum. Specify the release by number, to the second decimal point \(e.g. 3.1.0, 3.0.5, etc.\). You may optionally specify the `--user` and `--password` to bypass the credentials that were specified when configuring the file server connection with `tscli fileserver configure`. Before using this command for the first time, you need to set up the file server connection using `tscli fileserver configure`.

|
| ```
tscli fileserver purge-config
```

 |Removes the file server configuration.|
| ```
tscli fileserver show-config
```

 |Shows the file server configuration.|
| ```
tscli fileserver upload
   --file_name <file>
   --server_dir_path <path>
   [--user <user_name>
   --password <password>]
```

 |Uploads the file specified to the directory specified on the secure file server. The `<path>` parameter specifies the directory to which you want to upload the file. It is based on your customer name, and takes the form `/Shared/support/<customer\_name>`. If you don't know the path to specify, [Contact ThoughtSpot](../misc/contact.html#). You may optionally specify the `--user` and `--password` to bypass the credentials that were specified when configuring the file server connection with `tscli fileserver configure`. Before using this command for the first time, you need to set up the file server connection using `tscli fileserver configure`.

|
| ```
tscli firewall close-ports
```

 |Closes given ports through firewall on all nodes. Takes a list of ports to close, comma separated. Only closes ports which were previously opened using "open-ports". Ignores ports which were not previously opened with "open-ports" or were already closed.|
| ```
tscli firewall disable
```

 |Disable firewall.|
| ```
tscli firewall enable
```

 |Enable firewall.|
| ```
tscli firewall open-ports <ports>
```

 |Opens given ports through firewall on all nodes. Takes a list of ports to open, comma separated. Ignores ports which are already open. Some essential ports are always kept open \(e.g. ssh\), they are not affected by this command or by "close-ports".|
| ```
tscli firewall status
```

 |Shows whether firewall is currently enabled or disabled.|
| ```
tscli --adv graphite-metrics
   disable-collection
```

 |Disables the graphite metrics collection. This operation will delete existing metrics.|
| ```
tscli --adv graphite-metrics
   enable-collection
```

 |Enables the graphite metrics collection.|
| ```
tscli --adv graphite-metrics show
```

 |Prints the given graphite metric in JSON format.|
| ```
tscli --adv hdfs dfs
```

 |Invokes the HDFS dfs command.|
| ```
tscli --adv hdfs dfsadmin
```

 |Invokes the HDFS dfsadmin command.|
| ```
tscli --adv hdfs du
```

 |Computes the total size of the file or directory at path. It does not include the size of snapshots in the calculation.|
| ```
tscli --adv hdfs push-config
```

 |Pushes HDFS configuration from Zookeeper to all nodes.|
| ```
tscli ldap add-cert
   <name> <certificate>
```

 |Adds an SSL certificate for LDAP. Use only if LDAP has been configured without SSL and you wish to add it. Use `<name>` to supply an alias for the certificate you are installing.|
| ```
tscli ldap configure
```

 |Configures LDAP using an interactive script. You can see detailed instructions for setting up LDAP in [About LDAP integration](../setup/about_LDAP.html#).|
| ```
tscli ldap purge-configuration
```

 |Purges \(removes\) any existing LDAP configuration.|
| ```
tscli --adv ldap remove-cert
```

 |Removes the installed LDAP related SSL certificate.|
| ```
tscli logs collect 
  --include <selector | glob> 
  [--exclude <selector | glob>] 
  [--since <hours,minutes,days> 
  | --from <yyyymmdd-HH:MM> 
  --to <yyyymmdd-HH:MM>] 
  [--out <path>]
  [--maxsize <size\_in\_MB\_or\_GB>]
  [--sizeonly]
```

 |Extracts logs from the cluster. Does not include any logs that have been deleted due to log rotation.Required parameters are:

-    `--include <selector | glob>` is a comma separated list of logs to include. Each entry is either a selector \(one of all, orion, system, or ts\) or a glob for matching files. Anything starting with `/` is assumed to be a glob pattern and interpreted via `find(1)`. Other entries are ignored. TIP: put single quotes around the parameter value to prevent undesired glob expansion.

And a time window made up of either:

-   `--since <hours,minutes,days>` is a time in the past for where log collection begins, ending at the present time. Specify a human readable duration string, e.g. 4h \(4 hours\), 30m \(30 minutes\), 1d \(1 day\).

Or both:

-   `--from <yyyymmdd-HH:MM>` is a timestamp for where to begin log collection. It must be of the form: yyyymmdd-HH:MM.
-   `--to <yyyymmdd-HH:MM>` is a timestamp for where to end log collection. It must be of the form: yyyymmdd-HH:MM.

Optional parameters are:

-   `--exclude <selector | glob>` is a comma separated list of logs to exclude. Each entry is either a selector \(one of orion, system, or ts\) or a glob for matching files. Anything starting with `/` is assumed to be a glob pattern and interpreted via `find(1)`.
-   `--out <path>` is the location where log tarball is written. If not specified, the tarball will be written in /tmp.
-   `--maxsize` is the maximum size to allow. Only fetches logs if the total size is smaller that this value. Can be specified in megabytes or gigabytes, e.g. 100MB, 10GB.
-   `--sizeonly` means do not collect logs. Just report the size.

|
| ```
tscli logs runcmd --cmd command>
   [--include selector | glob>]
   [--exclude selector | glob>]
   [--since hours,minutes,days>
   | --from yyyymmdd-HH:MM>
   --to yyyymmdd-HH:MM>]
   [--outfile <path>]
   [--outdir <directory\_path>]
   [--cmd_infmt [C | U]]
   [--cmd_outfmt [C | U]]
```

 |Runs a Unix command on logs in the cluster matching the given constraints. Results are reported as text dumped to standard out, the specified output file, or as tarballs dumped into the specified directory.Required parameters are:

-   `--cmd <command>` is a Unix command to be run on the selected logs. Use single quotes to escape spaces, etc. Language used to specify the command has following rules.
    1.  A logfile and its corresponding result file can be referenced using the keywords SRCFILE and DSTFILE. E.g. 'cp SRCFILE DSTFILE'
    2.  If there is no reference to DSTFILE in the command, '\> DSTFILE' will be appended to the command for output redirection. E.g. 'du -sch SRCFILE' gets automatically translated to 'du -sch SRCFILE \> DSTFILE'
    3.  If there is no reference to SRCFILE, the content of the log is streamed tot he command using a pipe. E.g. 'tail -n100 | grep ERROR' gets automatically translated to 'cat SRCFILE | tail -n100 | grep ERROR \> DSTFILE'
-   `--include <selector | glob>` is a comma separated list of logs to include. Each entry is either a selector \(one of all, orion, system, or ts\) or a glob for matching files. Anything starting with `/` is assumed to be a glob pattern and interpreted via `find(1)`. Other entries are ignored. TIP: put single quotes around the parameter value to prevent undesired glob expansion.

And a time window made up of either:

-   `--since <hours,minutes,days>` is a time in the past for where log collection begins, ending at the present time. Specify a human readable duration string, e.g. 4h \(4 hours\), 30m \(30 minutes\), 1d \(1 day\).

Or both:

-   `--from <yyyymmdd-HH:MM>` is a timestamp for where to begin log collection. It must be of the form: yyyymmdd-HH:MM.
-   `--to <yyyymmdd-HH:MM>` is a timestamp for where to end log collection. It must be of the form: yyyymmdd-HH:MM.

Optional parameters are:

-   `--exclude <selector | glob>` is a comma separated list of logs to exclude. Each entry is either a selector \(one of orion, system, or ts\) or a glob for matching files. Anything starting with `/` is assumed to be a glob pattern and interpreted via `find(1)`.
-   `--outfile <path>` is the file path for printing all the results. By default, results get printed to stdout.

-   `--outdir <directory\_path>` is the directory path for dumping results from each node, with their original directory structure. This may be used as an alternative to printing output to outfile/stdout.

-   `--cmd_infmt [C | U]` specifies if the input file should be compressed \(C\) or uncompressed \(U\) before running the command. Don't use this flag if the command works on both.

-   `--cmd_outfmt [C | U]` specifies if the output file generated by the command will be compressed \(C\) or uncompressed \(U\). Don't use this flag if the output file will be of the same format as the input file.


|
| ```
tscli map-tiles enable
```

 |Enables ThoughtSpot's map tiles, which are used when constructing geomap charts. If you don't have interest access, you must download the map tiles tar and md5 files. Then you must append the following to the tscli command `--offline --<tar\_file> --md5 <md5\_file>`, where `<tar\_file>` and `<md5\_file>` are the locations of the two files.|
| ```
tscli --adv metrics flush
```

 |Flushes all metrics into falcon.|
| ```
tscli --adv metrics list
```

 |Lists the Metric Names.|
| ```
tscli --adv metrics show
```

 |Prints the Metrics.|
| ```
tscli --adv monitoring elk
```

 |A utility to enable and disable all services associated with Elk stack.|
| ```
tscli monitoring set-config
   --email <email>
   --clear_email
   --heartbeat_interval
   <heartbeat\_interval>
   --heartbeat_disable
   --report_interval
   <report\_interval>
   --report_disable
```

 |Sets the monitoring configuration. Parameters are:

-   `--email <email>` is a comma separated list \(no spaces\) of email addresses where the cluster will send monitoring information.

-   `--clear_email` disables emails by clearing the email configuration.

-   `--heartbeat_interval <heartbeat\_interval>` is the heartbeat email generation interval in seconds. Must be greater than 0.

-   `--heartbeat_disable` disables heartbeat email generation.

-   `--report_interval <report\_interval>` sets the cluster report email generation interval in seconds. Must be greater than 0.

-   `--report_disable` disables cluster report email generation.


|
| ```
tscli monitoring show-config
```

 |Shows the monitoring configuration.|
| ```
tscli nas mount-cifs
   --server <server\_CIFS\_address>
   --path_on_server <path>
   --mount_point <target>
   --username <user>
   --password <password>
   --uid <uid>
   --gid <gid>
```

 |Mounts a CIFS device on all nodes.Parameters are:

-   `--server <server\_CIFS\_address>` is the device address.
-   `--path_on_server <path>` is the path on the server to mount \(source\).
-   `--mount_point <target>` is the location where the CIFS device should be mounted \(target\).
-   `--username <user>` is the username with which to connect to the CIFS device.
-   `--password <password>` is the CIFS password.
-   `--uid <uid>` is the uid that will own all files or directories on the mounted filesystem, when the server does not provide ownership information. See the man page for mount.cifs for more details.
-   `--gid <gid>` is the gid that will own all files or directories on the mounted filesystem, when the server does not provide ownership information. See the man page for mount.cifs for more details.

|
| ```
tscli nas mount-nfs
   --server <server\_NFS\_address>
   --path_on_server <path>
   --mount_point <target>
```

 |Mounts a NFS device on all nodes.Parameters are:

-   `--server <server\_NFS\_address>` is the device address.
-   `--path_on_server <path>` is the path on server to mount \(source\).
-   `--mount_point <target>` is the location where the NFS device should be mounted \(target\).

|
| ```
tscli nas unmount
   --dir <directory>
```

 |Unmounts all devices from the specified directory location.|
| ```
tscli network set-config 2> config.json
```

 |Configures the IP, hostname, IPMI, and timezone of a cluster. This command should only be performed by SREs for customer systems. Once the JSON has been edited with the desired values, the configuration can be updated using the command: `cat config.json | tscli network set-config`|
| ```
tscli --adv node add
```

 |Adds new nodes to a running cluster.|
| ```
tscli node ls
```

 |Lists all nodes in the cluster.|
| ```
tscli --adv node remove <ip>
```

 |Removes a healthy or deceased node from a running cluster.**Attention:** At this time, this procedure should only be run under the supervision of an Orion team member.

|
| ```
tscli --adv node restart-services
```

 |Restarts all services on the localhost.|
| ```
tscli os find-package
   <package\_name>
```

 |Lists all packages and versions included in the product image whose name contains `<package\_name>`. Package names you can specify are:-   alert
-   backup
-   callhome
-   cluster
-   event
-   fileserver
-   firewall
-   ldap
-   logs
-   monitoring
-   node
-   os
-   release
-   smtp
-   snapshot
-   ssl
-   storage
-   support

|
| ```
tscli os list-packages
```

 |Lists all packages and versions included in the product image.|
| ```
tscli release
   info <release>
```

 |Prints information about the release contained in the specified release file.|
| ```
tscli --adv release install
```

 |Installs the releases on the localhost.|
| ```
tscli saml configure
```

 |Configures SAML.|
| ```
tscli saml
   purge-configuration
```

 |Purges any existing SAML configuration.|
| ```
tscli scheduled-pinboards
```

 |Enables scheduled pinboards, which is disabled in prod clusters by default.|
| ```
tscli security
   clear-min-tls-version
```

 |Clears any customizations for the minimum TLS version to support.|
| ```
tscli security
   set-min-tls-version
   {1.0|1.1|1.2}
```

 |Sets the minimum SSL version to be supported by the ThoughtSpot application. Please ensure that client browsers are enabled for this version or newer. It is recommended that you set the version to 1.2.|
| ```
tscli security ssl-off
```

 |Disables SSL authentication for the ThoughtSpot application.|
| ```
tscli security ssl-on
```

 |Enables SSL authentication for the ThoughtSpot application.|
| ```
tscli security ssl-status
```

 |Shows whether of SSL authentication is enabled or disabled for the ThoughtSpot application.|
| ```
tscli security tls-status
```

 |Prints the status of TLS support.|
| ```
tscli --adv service add-gflag
```

 |Adds override to add a gflag to an existing service.|
| ```
tscli --adv service add-gflag falcon.worker
   falcon_preserve_case true
```

 |Enables case configuration. You need to also run `tscli --adv service add-gflag falcon_manager.falcon_manager falcon_preserve_case true`. It will restart the Falcon process.|
| ```
tscli --adv service add-gflag falcon_manager
   .falcon_manager falcon_preserve_case true
```

 |Enables case configuration. You need to also run `tscli --adv service add-gflag falcon.worker falcon_preserve_case true`. It will restart the Falcon process.|
| ```
tscli --adv service add-gflag
   infaagent.infaagent
   agent_max_memory <max\_memory>
```

 |Sets the max memory for the Agent JVM for ThoughtSpot Data Connect where:-   `<max\_memory>` is the max memory allowed. 4g is the default value.

|
| ```
tscli --adv service add-gflag
   infaagent.infaagent
   bypass_ssl true
```

 |Allows you to bypass SSL check during ThoughtSpot connection create for ThoughtSpot Data Connect. It is set to false by default.|
| ```
tscli --adv service add-gflag
   infaagent.infaagent
   max_concurrent_loads <max\_loads>
```

 |Sets the max number of loads to run concurrently for ThoughtSpot Data Connect where:-   `<max\_loads>` is the max number of concurrent loads allowed. 4 is the default value.

|
| ```
tscli --adv service add-gflag
   infaagent.infaagent
   max_memory <max\_memory>
```

 |Sets the max memory for the load task for ThoughtSpot Data Connect where:-   `<max\_memory>` is the max memory allowed. 50g is the default.

|
| ```
tscli --adv service add-gflag
   timely.timely
   max_scheduled_jobs <jobs>
```

 |Sets the max scheduled jobs \(both pinboard and Data Connect\) for a cluster where:-   `<jobs>` is the max number of allowed jobs. 50 is the default.

|
| ```
tscli --adv service add-javaopt
```

 |Adds override to add a java option to an existing service.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.authenticatedIdleTimeoutMs
   <value>
```

 |Sets authenticated idle timeout of a user. Defaults to 3 hours. Use this command to set configurable session timeout.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.customBrandingEnabled
   true
```

 |Enables Style Customization.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.customBrandingFont
   CustomizationEnabled true
```

 |Enables Font Customization.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.defaultQuarterStartMonth
   <month\_number>
```

 |Sets a custom fiscal month value on a cluster where:-   `<month\_number>` is the calendar number of the month. For example, if it's February, enter 2.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.enableAggrWsTableJoin true
```

 |Allows you to join an aggregated worksheet with a base table. This facilitates-   group aggregations with filters
-   exposing aggregate data while securing unaggregated data
-   worksheets composed of aggregated worksheets and base tables

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.enableWorksheetOverAggrWorksheet
   true
```

 |Allows you to create a worksheet on top of an aggregated worksheet.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.frontendHost <host>
```

 |Sets the host for front end access.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.frontendPort <port>
```

 |Sets the port for front end access.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.frontendScheme
   <scheme>
```

 |Sets the scheme for front end access where:-   `<scheme>` is either http or https.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.FullEmbed
   Configuration.alertBarHidden
   true
```

 |Disables error messages for the ThoughtSpot full embed use case and propagates them to the parent app. This allows the error messages to be displayed in the customer's UI appropriately. The command is set to false by default.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.FullEmbed
   Configuration.alertBar
   Hidden-primaryNavHidden
   true
```

 |Hides the top navigation bar for the ThoughtSpot full embed use case. The command is set to true by default.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.FullEmbed
   Configuration.powered
   FooterHidden true
```

 |Adds the ThoughtSpot logo to the rendered iFrames in an embedded use case. This is automatically turned on if the Style Customization flag, full embed mode, or any embedded pinboard, chart, or table is enabled. Customers with an Extended Enterprise license have the choice to turn this feature off. The command is set to false by default.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.geoMapConfig.dataBatchSize <limit>
```

 |This flag allows you to increase the number of data points of a visualization. The default data points limit is 5,000 for geo charts, 10,000 for pivot tables, and 1,000 for everything else.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.informatica
   CloudConfig.use
   TimelyForScheduling true
```

 |Enables pre/post script execution in Data Connect.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.rememberedSessionIdleTimeoutMs
   <value>
```

 |Sets remembered session idle timeout of a user. Defaults to forever \[-1\]. Use this command to set configurable session timeout.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.enabled true
```

 |Enables scheduled pinboards, which is disabled in prod clusters by default.|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.maxRecipientLimit
   <recipients>
```

 |Sets the recipient limit on scheduled pinboard jobs where:-   `<recipients>` is the max number of allowed recipients for a scheduled pinboard job. 1000 recipients is the default.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.maxTotalAttachment
   SizeInMb <size>
```

 |Sets the email attachment size limit for scheduled pinboards where:-   `<size>` is the max allowed attachment size in MB. 25 MB is the default.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.tablePrintData
   BatchSize <rows>
```

 |Sets the table row limit in PDFs for scheduled pinboards where:-   `<rows>` is the max number of rows allowed to be displayed for tables in PDF reports. 100 rows is the default.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.thresholdSizeInMbToZip
   <size>
```

 |Sets the max size limit before switch CSV attachments as zips where:-   `<size>` is the max allowed attachment size in MB. 25 MB is the default.

|
| ```
tscli --adv service add-javaopt
   tomcat.tomcat D
   orion.scheduledReporting
   Config.whitelistedDomains
   <'domains'>
```

 |Sets the email whitelist for scheduled pinboard recipients where:-   `<'domains'>` is the email domains you would like to add, surrounded by single quotations, such as `'thoughtspot.com,gmail.com'`

|
| ```
tscli --adv service addresses
```

 |Prints the addresses for a service.|
| ```
tscli --adv service delete
```

 |Deletes a given service.|
| ```
tscli --adv service delete-gflag
```

 |Adds override to delete a gflag from an existing service.|
| ```
tscli --adv service delete-javaopt
```

 |Deletes a java option from an existing service. For example, to unset the fiscal month value override, you can run the following command: `tscli --adv service delete-javaopt tomcat.tomcat D orion.defaultQuarterStartMonth`.|
| ```
tscli --adv service delete-javaopt tomcat
   .tomcat D orion.dataformatconfig.should
   formatdata
```

 |Disables title casing. You should run this command in conjunction with the `falcon_preserve_case` commands to enable case configuration.|
| ```
tscli --adv service delete-pack
```

 |Deletes override for a given pack.|
| ```
tscli --adv service
   delete-service-override   
```

 |Deletes any override for service config disable Stops and disables given service.|
| ```
tscli --adv service disable
```

 |Stops and disables given service.|
| ```
tscli --adv service enable
```

 |Enables service, does not start it \(use "tscli service start" for that\).|
| ```
tscli --adv service get-config
```

 |Prints the configuration for a service.|
| ```
tscli --adv service get-pack
```

 |Gets override for a given pack.|
| ```
tscli --adv service list-overrides
```

 |Lists the existing overrides of a service.|
| ```
tscli --adv service ls
```

 |Lists all services.|
| ```
tscli --adv service pin 
```

 |Pin service to given nodes.|
| ```
tscli --adv service push
```

 |Pushes the configuration for a service.|
| ```
tscli --adv service restart
```

 |Restarts the service.|
| ```
tscli --adv service set-pack
```

 |Sets override for a given pack.|
| ```
tscli --adv service set-service-override
```

 |Sets override for service config \(read from stdin\).|
| ```
tscli --adv service show-pin
```

 |Show the current status of pinning of this service.|
| ```
tscli --adv service start
```

 |Starts the service.|
| ```
tscli --adv service start-all
```

 |Starts all services.|
| ```
tscli --adv service status
```

 |Prints the status of the service.|
| ```
tscli --adv service stop
```

 |Stops the service.|
| ```
tscli --adv service stop-all
```

 |Stops all service.|
| ```
tscli --adv service unpin 
```

 |Unpin service from a fixed set of nodes, allowing it to be scheduled anywhere in the cluster.|
| ```
tscli smtp
   reset-canonical-mapping
```

 |Deletes the current postmap mapping.|
| ```
tscli smtp
   set-canonical-mapping
   <new\_key> <new\_value>
```

 |Sets a new postmap mapping.|
| ```
tscli smtp set-mailfromname
   <email\_address>
```

 |Sets the mailname, from which email alerts are sent, for the cluster.|
| ```
tscli smtp set-mailname
   <domain>
```

 |Sets the mailname, where email alerts are sent, for the cluster.|
| ```
tscli smtp
   set-relayhost <IP\_address>
```

 |Sets the relayhost for SMTP \(email\) sent from the cluster.|
| ```
tscli smtp show-canonical-mapping
```

 |Shows the current postmap mapping.|
| ```
tscli smtp show-mailfromname
```

 |Shows the mailname, from which email alerts are sent, for the cluster.|
| ```
tscli smtp show-mailname
```

 |Shows the mailname, where email alerts are sent, for the cluster.|
| ```
tscli smtp show-relayhost
```

 |Shows the relayhost for SMTP \(email\) sent from the cluster. If there is no relayhost configured, the command shows "NOT FOUND".|
| ```
tscli snapshot backup
   [--mode {full|light|dataless}]
   <name> <directory>
```

 |Same as the `tscli backup create` command.Pulls a snapshot and saves it as a backup where:

-   `<name>` is the name of the snapshot to use.
-   `<directory>` is the new directory that will be created for the backup. This directory must not already exist.

Use `--mode` to specify the [type of backup](../backup_restore/backups_and_snapshots.html#).

|
| ```
tscli snapshot
   create <name> <reason>
```

 |Creates a new snapshot with the name and reason provided. This command does not accept periods \(.\), but does accept dashes \(-\).|
| ```
tscli snapshot delete <name>
```

 |Deletes the named snapshot.|
| ```
tscli snapshot ls
```

 |Lists available snapshots and their size.|
| ```
tscli snapshot restore
   <name>
   [--allow_release_change]
```

 |Restores a cluster using the named snapshot. If `--allow_release_change` is specified, allows restoration to a snapshot at a different release.|
| ```
tscli snapshot-policy disable
```

 |Disables the automatic snapshot policy.|
| ```
tscli snapshot-policy show
```

 |Shows the automatic snapshot policy.|
| ```
tscli snapshot-policy enable
```

 |Enables the automatic snapshot policy.|
| ```
tscli snapshot-policy update
```

 |Updates the automatic snapshot policy.|
| ```
tscli ssl add-cert
   <key> <certificate>
```

 |Adds SSL certificate, key pair.|
| ```
tscli ssl off
```

 |Disables SSL. Disabling SSL will stop users from seeing a security warning when accessing ThoughtSpot from a browser if there is no SSL certificate installed.|
| ```
tscli ssl on
```

 |Enable SSL. If SSL is enabled and there is no certificate, users will see a security warning when accessing ThoughtSpot from a browser.|
| ```
tscli ssl rm-cert
```

 |Removes the existing SSL certificate, if any.|
| ```
tscli ssl status
```

 |Shows whether SSL authentication is enabled or disabled.|
| ```
tscli --adv statsdb update
```

 |Updates statsdb on the cluster.|
| ```
tscli storage gc
   [--log_age <hours>]
   [--localhost_only>]
```

 | Before issuing this command, you must stop the cluster using `tscli cluster stop`. After garbage collection has completed, you can restart the cluster with `tscli cluster start`.

 Garbage collects unused storage. Accepts these optional flags:

  `--log_age <*hours*>` 

 Specifies the number of elapsed hours after which logs will be deleted. Default is 24 hours.

 `--localhost_only`

 If used, only the logs on the localhost will be removed. If not specified, the command acts on the entire cluster.

 The command frees space in these directories:

```
/tmp
/usr/local/scaligent/logs/
/export/logs/orion
/export/logs/oreo
/export/logs/hadoop
/export/logs/zookeeper
cores
```

 |
| ```
tscli support restart-remote
```

 |Restarts remote support.|
| ```
tscli support rm-admin-email
```

 |Removes the email address for contacting the customer administrator. Replaces it with the default ThoughtSpot Support email address.|
| ```
tscli support rm-admin-phone
```

 |Removes the phone number for contacting the customer administrator. Replaces it with the default ThoughtSpot Support phone number.|
| ```
tscli support
   set-admin-email <email>
```

 |Sets the email address for contacting the customer administrator. If you would like to display a blank email address, issue the command `tscli support set-admin-email ' '`.|
| ```
tscli support
   set-admin-phone <phone\_number>
```

 |Sets the phone number for contacting the customer administrator. Specify a phone number using any value \(e.g. +1 800-508-7008 Ext. 1\). If you would like to display a blank phone number, issue the command `tscli support set-admin-phone ' '`.|
| ```
tscli support set-remote
   --addr <support\_address>
   --user <support\_user>
```

 |Configures the cluster for remote support through SSH tunneling, where `<support\_address>` is the address of support, e.g. tunnel.thoughtspot.com, and `<support\_user>` is the support username.|
| ```
tscli support
   show-admin-email
```

 |Shows the email address for customer administrator, if set.|
| ```
tscli support
   show-admin-phone
```

 |Shows the phone number for customer administrator, if set.|
| ```
tscli support
   show-remote
```

 |Prints the status and configuration of remote support.|
| ```
tscli support
   start-remote
```

 |Starts remote support.|
| ```
tscli support
   stop-remote
```

 |Stops remote support.|
| ```
tscli --adv zoo fix-local-datadir
```

 |Fixes Zookeeper data on the local host.|

|Argument|Description|
|--------|-----------|
|`--verbose`|Turns on verbose logging to the console. By default, logs are written to both the console and log files, with the log files containing the highest verbosity log messages.|
|`--helpfull`|Shows the full help text for all command sections.|
|`--noautoconfig`|Will prompt for a `y` or `n` for each configuration question.|
|`--autoconfig`|Automatically configure properties of the cluster when possible. User may still be prompted for certain inputs.|
|`--yes`|Same as `--autoconfig`. Automatically configure properties of the cluster when possible. User may still be prompted for certain inputs.|
|`--cluster <cluster\_name>`|Optional. Used to designate the cluster to operate on by name, if it is not detected automatically.|
|`--zoo <zookeeper\_servers>`|Optional. Used to provide a comma-separated list of Zookeeper servers, when a cluster is not detected automatically.|
|`--username <username>` |Username for machine access \(default: admin\)|
|`--identity_file <identity\_file>`|SSH identity file for SSH access to machines. If not specified, assumes passwordless SSH is available. \(default: None\)|

**Parent topic:** [Reference](../../admin/reference/intro_reference.html)

