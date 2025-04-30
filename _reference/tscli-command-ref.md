---
title: [tscli command reference]
keywords: tbd
tags: [networking, tscli]
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The `tscli` command line interface is an administration interface for the
ThoughtSpot instance. Use `tscli` to take snapshots (backups) of data, apply
updates, stop and start the services, and view information about the system.
This reference defines each subcommand and what you can accomplish with it.

The command returns 0 upon success and a non-zero exit code upon failure.
Because the `tscli` command is typically running a command on multiple codes, an
error may be called at different points. As much as possible, the command
attempts to save errors to the `stderr` directory as configured on a node.

## How to use the tscli command

The `tscli` command has the following syntax:

```
tscli [-h] [--helpfull] [--verbose] [--noautoconfig]
           [--autoconfig] [--yes] [--cluster <cluster>]
           [--zoo <zookeeper>] [--username username] [--identity_file identity_file]
           {access,alert,ansible, backup,backup-policy,callhome,cassandra,cluster,command,dr-mirror,etl,event,feature,fileserver,firewall,hdfs,ipsec,ldap,logs,map-tiles,monitoring,nas,node,patch,rpackage,saml,scheduled-pinboards,smtp,snapshot,snapshot-policy,spot,sssd,ssl,storage,support,tokenauthentication}
```

The `tscli` command has several subcommands such as `alert`, `backup`, and so forth. You issue a subcommand using the following format:


```
tscli [subcommand ]
```

Subcommands have their own additional options and actions such as `tscli backup
create` or `tscli backup delete` for example.  To view help for a subcommand:

```
tscli [subcommand] -h
```

A subcommand itself may have several options.

## tscli subcommands

This section lists each subcommand and its syntax.

### access

```
tscli access [-h] {list} ...
```

Use this subcommand to do the following:

* `tscli access list` Lists objects by last access time.


### alert

```
tscli alert [-h] {count,info,list,off,on,refresh,silence,status,unsilence} ...
```

Use this subcommand to do the following:


* `tscli alert info` Lists all alerts.
* `tscli alert list` Lists the generated alerts.
* `tscli alert off` Disables all alerts from the cluster in the cluster's timezone.
* `tscli alert on` Enables alerts from the cluster.
* `tscli alert silence --name <alert_name>`

    Silences the alert with *`alert_name`*. For example, DISK_ERROR. Silenced alerts are still recorded in postgres, however emails are not sent out.

* `tscli alert status` Shows the status of cluster alerts.

* `tscli alert unsilence-name` *`alert_name`*

   Unsilences the alert with *`alert_name`*. For example, `DISK_ERROR`.

### ansible

   ```
   tscli ansible [-h] {checkout,commit} [--local] ...
   ```

   Use this subcommand to install and configure third party software on the ThoughtSpot cluster.

   For details, see:

   - [About third party security and monitoring software]({{ site.baseurl}}/admin/data-security/about-secure-monitor-sw.html#)
   - [Installing third party security and monitoring software]({{ site.baseurl}}/admin/data-security/install-secure-monitor-sw.html#)

### backup

```
tscli backup [-h] {create,delete,ls,restore} ...
```

Use this subcommand to do the following:

* `tscli backup create [-h] [--mode {full,light,dataless}] [--type {full,incremental}] [--base BASE] [--storage_type {local,nas}] [--remote] name out`

    Pulls a snapshot and saves it as a backup where:

    * `--mode {full,light,dataless}`

        Mode of backups. To understand these diffrent modes see [Understand backup modes]({{ site.baseurl }}/admin/backup-restore/backup-modes.html).

    * `--type {full,incremental}`
        Type of backup.(Incremental `incremental` is not implemented yet) (default: full)

    * `--base BASE`           

        Based snapshot name for incremental backup. (Not Implemented yet) (default: None)

    * `--storage_type {local,nas}`

        Storage type of output directory. (default: local)

    * `--remote`              
        Take backup through orion master. (default: True)

* `tscli backup delete *`name`*` Deletes the named backup.
* `tscli backup ls` List all backups taken by the system.
* `tscli backup restore` Restore cluster using backup.



### backup-policy

```
tscli backup-policy [-h] {create,delete,disable,enable,ls,show,status,update} ...
```

Use this subcommand to do the following:


* `tscli backup-policy create` Prompts an editor for you to edit the parameters of the backup policy.
* `tscli backup-policy delete` *`name`*  Deletes the backup policy with *`name`*.
* `tscli backup-policy disable` *`name`* Disables the policy *`name`*.
* `tscli backup-policy enable` *`name`* Enables the policy *`name`*.
* `tscli backup-policy ls` List backup policies.
* `tscli backup-policy show` *`name`* Show the policy *`name`*.
* `tscli backup-policy status` *`name`*  Enables the policy *`name`*.
* `tscli backup-policy update *`name`*` Prompts an editor for you to edit the policy *`name`*.


### callhome

```
tscli callhome [-h] {disable,enable,generate-bundle} ...
```

Use this subcommand to do the following:

* `tscli callhome disable` Turns off the periodic call home feature.
* `tscli callhome enable --customer_name` *`customer_name`*`

    Enables the "call home" feature, which sends usage statistics to ThoughtSpot
    This feature is enabled by default.

    The parameter *`customer_name`* takes the form  ```Shared/*`customer_name`*/stats```.

* `tscli callhome generate-bundle`   --d *`directory`* `--since` *`DAYS`*

   * `--d D` Dest folder where tar file will be created. (default: None)
   * ` --since`  *`DAYS`*

      Grab callhome data from this time window in the past. Should be a human
      readable duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1
      day). (default: None) Generates a tar file of the cluster metrics and
      writes it to the specified directory where  *`DAYS`* is how far back you'd
      like to generate the tar file from in days. For example, `30`. If this
      parameter is not specified, the command will collect the stats from the
      last `7` days by default.


### cassandra

```
tscli cassandra [-h] {backup,restore} ...
```

Use this subcommand to do the following:

* `tscli cassandra backup` Take a backup of cassandra
* `tscli cassandra restore` Restore cassandra from a backup


### cluster

```
tscli cluster [-h] {abort-reinstall-os,check,create,get-config,load,reinstall-os,report,restore,resume-reinstall-os,resume-update,set-config,set-min-resource-spec,show-resource-spec,start,status,stop,update,update-hadoop} ...
```

Use this subcommand to do the following:

* `tscli cluster abort-reinstall-os` Abort in-progress reinstall.
* `tscli cluster check --includes {all,disk,zookeeper,hdfs,orion-cgroups,orion-oreo}` Check the status nodes in the cluster.

   You must specify a component to check.

* `tscli cluster create` *`release`*

    Creates a new cluster from the release file specified by  *`release`*. This command is used by ThoughtSpot Support when installing a new cluster, for example, `tscli cluster create 2.0.4.tar.gz`

* `tscli cluster get-config` Get current cluster network and time configuration. Prints JSON configuration to stdout.
If for some reason the system cannot be connected to all interfaces, the command returns an error but continues to function.
* `tscli cluster load` Load state from given backup onto existing cluster
* `tscli cluster reinstall-os ` Reinstall OS on all nodes of the cluster.
* `tscli cluster report` Generate cluster report.
* `tscli cluster restore --release` *`release_tarball`* *`backupdir`*`

    Restores a cluster using the backup in the specified directory *`backupdir`*. If you're restoring from a dataless backup, you must supply the release tarball for the corresponding software release.

* `tscli cluster resume-reinstall-os` Resume in-progress reinstall.
* `tscli cluster resume-update` Resume in-progress updates.
* `tscli cluster set-config ` Set cluster network and time configuration. Takes JSON configuration from stdin.
* `tscli cluster set-min-resource-spec` Sets min resource configuration of the cluster
* `tscli cluster show-resource-spec` Prints default or min.
* `tscli cluster start` Start cluster.
* `tscli cluster status` Gives the status of the cluster, including release number, date last updated, number of nodes, pending tables time, and services status.
* `tscli cluster stop` Pauses the cluster (but does not stop storage services).
* `tscli cluster update` Update existing cluster.
* `tscli cluster update-hadoop` Updates Hadoop/Zookeeper on the cluster.

### command

```
tscli command [-h] {run} ...
```

Command to run a command on all nodes.

`tscli command run [-h] [--nodes` *`NODES`*`] --dest_dir` *`DEST_DIR`* `[--copyfirst`
*`COPYFIRST`*`] [--timeout` *`TIMEOUT`*`]` *`command`*

* `--nodes` *`NODES`*  Space separated IPs of nodes where you want to run the command. (default: `all`)
* `--dest_dir` *`DEST_DIR`*  Directory to save the files containing output from each nodes. (default: None)
* `--copyfirst` *`COPYFIRST`* Copy the executable to required nodes first. (default: `False`)
* `--timeout` *`TIMEOUT`* Timeout waiting for the command to finish. (default: `60`)

###  dr-mirror

```
tscli dr-mirror [-h] {start,status,stop} ...
```

* `tscli dr-mirror start` Starts a mirror cluster which will continuously recover from a primary cluster.
* `tscli dr-mirror status` Checks whether the current cluster is running in mirror mode.
* `tscli dr-mirror stop` Stops mirroring on the local cluster.


### etl

```
tscli etl [-h] {change-password,disable-lw,download-agent,enable-lw,show-lw} ...
```

* `tscli etl change-password --admin_username` *`admin_user`*  `--username` *`Informatica_user`*`

   Changes the Informatica Cloud account password used by ThoughtSpot Data Connect. Required parameters are:

   * `--admin_username` *`admin_user`* specifies the Administrator username for ThoughtSpot.
   * `--username` *`Informatica_user`* specifies the username for the Informatica Cloud.

* `tscli etl disable-lw` Disables ThoughtSpot Data Connect.
* `tscli etl download-agent` Downloads the ThoughtSpot Data Connect agent to the cluster.
* `tscli etl enable-lw [-h] --username` *`USERNAME`* `--thoughtspot_url` *`THOUGHTSPOT_URL`* `--admin_username` *`ADMIN_USERNAME`* `[--groupname` *`GROUPNAME`*`] --org_id` *`ORG_ID`* `[--pin_to `*`PIN_TO`*`] [--proxy_host` *`PROXY_HOST`*`] [--proxy_port` *`PROXY_PORT`*`] [--proxy_username` *`PROXY_USERNAME`* `] [--max_wait` *`MAX_WAIT`*`]`

    You should contact ThoughtSpot Support for assistance in setting this up. Required parameters are:

   * `--username` *`USERNAME`* Username for Informatica Cloud (default: None)
   * `--thoughtspot_url` *`THOUGHTSPOT_URL`* URL to reach thoughtspot. (default: None)
   * `--admin_username` *`ADMIN_USERNAME`* Admin username for ThoughtSpot (default: None)
   * `--groupname` *`GROUPNAME`*
   * `--org_id` *`ORG_ID`* specifies the Informatica `id` of the organization (company). For ThoughtSpot, this is `001ZFA`. `org_id` shouldn't include the prefix `Org`. For example, if on Informatica cloud, the `orgid` is `Org003XYZ`, then use only
   * `--pin_to` *`PIN_TO`* specifies the IP address to pin to. If you specify an IP to pin to, that node becomes sticky
      to the Informatica agent, and will always be used. Defaults to the public IP
      address of the localhost where this command was run.
   * `--proxy_host` *`PROXY_HOST`* Proxy server host for network access (default: )
   * `--proxy_port` *`PROXY_PORT`* Proxy server port (default: )
   * `--proxy_username` *`PROXY_USERNAME`* Proxy server username (default: )
   * `--max_wait` *`MAX_WAIT`*  Maximum time in seconds to wait for Data Connect agentto start (default: None)
* `tscli etl show-lw` Shows the status of ThoughtSpot Data Connect. It also returns the Informatica username and OrgId.

### event

```
tscli event [-h] {list} ...
```

This subcommand has the following actions:

`tscli event list [-h] [--include` *`INCLUDE`*`] [--since` *`SINCE`*`] [--from` *`FROM`*`] [--to` *`TO`*`] [--limit` *`LIMIT`*`] [--detail] [--summary_contains` *`SUMMARY_CONTAINS`*`] [--detail_contains` *`DETAIL_CONTAINS`*`] [--attributes` *`ATTRIBUTES`*`]`

  * `--include` *`INCLUDE`* Options are all, config, notification. Default config. (default: config)
  * `--since` *`SINCE`* Grab events from this time window in the past. Should be a human readable duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1 day). (default: None)
  * `--from` *`FROM`* Begin timestamp, must be of the form: `yyyymmdd-HH:MM` (default: None)
  * `--to` *`TO`* End timestamp, must be of the form: `yyyymmdd-HH:MM` (default: None)
  * `--limit` *`LIMIT`* Max number of events to fetch. (default: 0)
  * `--detail` Print events in detail format. This is not tabular. Default is a tabular summary. (default: False)
  * `--summary_contains` *`SUMMARY_CONTAINS`* Summary of the event will be checked for this string. Multiple strings to check for can be specified by separating them with `|` (event returned if it matchesALL). Put single quotes around the param value to prevent undesired glob expansion (default: None)
  * `--detail_contains` *`DETAIL_CONTAINS`* Details of the event will be checked for this string. Multiple strings to check for can be specified by separating them with `|` (event returned if it matches ALL). Put single quotes around the param value to prevent undesired glob expansion (default: None)
  * `--attributes` *`ATTRIBUTES`* Specify attributes to match as key=value. Multiple attributes to check for can be specified by separating them with `|` (event returned if it matches ALL). Put single quotes around the param value to prevent undesired glob expansion (default: None)


### feature

```
tscli feature [-h] {get-all-config} ...
```
This subcommand has the following actions:

`tscli feature get-all-config` Gets the configured features in a cluster. The command will return a list of features, such as custom branding, Data Connect, and call home, and tell you whether they are enabled or disabled.


### fileserver

```
tscli fileserver [-h] {configure,download-release,purge-config,show-config,upload} ...
```

This subcommand has the following actions:

* `tscli fileserver configure [-h] --user` *`USER`* `[--password ` *`PASSWORD`* `]` Configures the secure file server username and password for file upload/download and the call home feature. You only need to issue this command one time, to set up the connection to the secure file server. You only need to reissue this command if the password changes. The parameter *`PASSWORD`* is optional. If a password is not specified, you will be prompted to enter it.
* `tscli fileserver download-release [-h] [--user` *`USER`*`] [--password` *`PASSWORD`*`]` *`release`* Downloads the specified release file, including its checksum, and verifies the integrity of release bundle. You must specify the exact release number (e.g. 5.1.3). Before using this command for the first time, you must set up the file server connection using `tscli fileserver configure`. You will then work with a member of the ThoughtSpot Support team since a privileged `--user` (and corresponding `--password`) must be specified to download releases.
* `tscli fileserver purge-config` Removes the file server configuration.
* `tscli fileserver show-config` Shows the file server configuration.

* `tscli fileserver upload [-h] [--user` *`USER`*`] [--password` *`PASSWORD`*`] --file_name` *`FILE_NAME* `--server_dir_path` *`SERVER_DIR_PATH`*

  Uploads the file specified to the directory specified on the secure file server.
  You may optionally specify the `--user` and `--password` to bypass the
  credentials that were specified when configuring the file server connection with
  `tscli fileserver configure`. Before using this command for the first time, you
  need to set up the file server connection using `tscli fileserver configure`.

  Accepts these flags

  * `--user` *`USER`* Username of fileserver (default: None)
  * `--password` *`PASSWORD`* Password of fileserver (default: None). This is required and the command prompts you for it if you do not supply it.
  * `--file_name` *`FILE_NAME`* Local file that needs to be uploaded (default: None)
  * `--server_dir_path` *`SERVER_DIR_PATH`* Directory path on fileserver. (default: None) The *`SERVER_DIR_PATH`* parameter specifies the directory to which you want
    to upload the file. It is based on your customer name, and takes the form `/Shared/support/*`customer_name`*`.


### firewall

```
tscli firewall [-h] {close-ports,disable,enable,open-ports,status} ...
```

* `tscli firewall close-ports`

  Closes given ports through firewall on all nodes. Takes a list of ports to
  close, comma separated. Only closes ports which were previously opened using
  "open-ports". Ignores ports which were not previously opened with "open-ports"
  or were already closed.

* `tscli firewall disable` Disable firewall.
* `tscli firewall enable` Enable firewall.
* `tscli firewall open-ports` `--ports`  *`ports`*

   Opens given ports through firewall on all nodes. Takes a list of ports to
   open, comma separated. Ignores ports which are already open. Some essential
   ports are always kept open (e.g. `ssh`), they are not affected by this command
   or by `close-ports`.

* `tscli firewall status` Shows whether firewall is currently enabled or disabled.


### hdfs

```
tscli hdfs [-h] {leave-safemode} ...
```

This subcommand has the following actions:

`tscli hdfs leave-safemode`  Command to get HDFS namenodes out of safemode.


### ipsec

```
tscli ipsec [-h] {disable,enable,status} ...
```

This subcommand has the following actions:

`tscli ipsec disable`  Disable IPSec
`tscli ipsec enable`  Enable IPSec
`tscli ipsec status`  Show IPSec status on all nodes


### ldap

```
tscli ldap [-h] {add-cert,configure,purge-configuration} ...
```

This subcommand has the following actions:

* `tscli ldap add-cert` *`name`* *`certificate`*

  Adds an SSL certificate for LDAP. Use only if LDAP has been configured without
  SSL and you wish to add it. Use `*`name`*` to supply an alias for the
  certificate you are installing.

* `tscli ldap configure`

   Configures LDAP using an interactive script. You can see detailed
   instructions for setting up LDAP in [About LDAP integration]({{ site.baseurl }}/admin/setup/about-LDAP.html).

* `tscli ldap purge-configuration` Purges (removes) any existing LDAP configuration.


### logs

```
tscli logs [-h] {collect,runcmd} ...
```

This subcommand has the following actions:


* `tscli logs collect [-h] [--include` *`INCLUDE`*`] [--exclude` *`EXCLUDE`*`] [--since` *`SINCE`*`] [--from` *`FROM`*`] [--to` *`TO`*`] [--out` *`OUT`*`] [--maxsize` *`MAXSIZE`*`] [--sizeonly] [--nodes` *`NODES`*]

  Extracts logs from the cluster. Does not include any logs that have been
  deleted due to log rotation.

  These parameters have the following values:

  * `--include` *`INCLUDE`*

    Specifies a comma separated list of logs to include. Each entry is either a
    "selector" or a glob for matching files. Selectors must be among: `all`,
    `orion`, `system`, `ts`. Anything starting with `/` is assumed to be a glob
    pattern, and it is interpreted through `find(1)`. Other entries are ignored. Put single
    quotes around the param value to prevent undesired glob expansion (default:
    `all`)

  * `--exclude` *`EXCLUDE`*

    Comma separated list of logs to exclude. Applies to the list selected by
    --include. Params are interpreted just like in --include (default: None)

  * `--since` *`SINCE`*   

    Grab logs from this time window in the past. Should be a human readable
    duration string, e.g. 4h (4 hours), 30m (30 minutes), 1d (1 day). (default:
    None)

  * `--from` *`FROM`* Timestamp where collection begins, must be of the form: `yyyymmdd-HH:MM` (default: None)                 
  * `--to` *`TO`* Timestamp where collection ends, must be of the form: `yyyymmdd-HH:MM` (default: None)
  * `--out` *`OUT`*  Tarball path for dumping logs from each node (default: `/tmp/logs.tar.gz`)
  * `--maxsize` *`MAXSIZE`*  Only fetch logs if size is smaller that this value. Can be specified in megabytes/gigabytes, e.g. 100MB, 10GB. (default: None)
  * `--sizeonly ` Do not collect logs. Just report the size. (default: False)
  * `--nodes` *`NODES`*  Comma separated list of nodes from where to collect logs.  Skip this to use all nodes. (default: None)


* `tscli logs runcmd [-h] --cmd` `CMD [--include` *`INCLUDE`*`] [--exclude` *`EXCLUDE`*`]
[--since` `SINCE] [--from` *`FROM`*`] [--to` *`TO`*`] [--outfile` *`OUTFILE`*`] [--outdir` *`OUTDIR`*`]
[--cmd_infmt` *`CMD_INFMT`*`] [--cmd_outfmt` *`CMD_OUTFMT`*`] [--nodes` *`NODES`*`]`


  Runs a Unix command on logs in the cluster matching the given constraints.
  Results are reported as text dumped to standard out, the specified output
  file, or as tarballs dumped into the specified directory.


  * `--cmd` *`CMD`*           

    Unix-Command to be run on the selected logs. Use single quotes to escape
    spaces etc. Language used to specify CMDSTR has following rules.

    * A logfile and its corresponding result file can be referred by keywords `SRCFILE` &
    `DSTFILE`. For example, `cp SRCFILE DSTFILE`.

    * Without any reference to DSTFILE in CMDSTR, `> DSTFILE` will be appended to CMDSTR for output redirection. eg `du
    -sch SRCFILE` gets auto- transtalted to `du -sch SRCFILE > DSTFILE`

    * Without any reference to SRCFILE, content of log is streamed to CMDSTR by pipe. For example:
    `tail -n100 | grep ERROR` gets auto-transtalted to `cat SRCFILE | tail -n100 |
    grep ERROR > DSTFILE` (default: None)

  * `--include` *`INCLUDE`*     

    Comma separated list of logs to include,each entry is either a "selector" or
    a glob for matching files.Selectors must be among: `all`, `orion`, `system`,
    `ts`. Anything starting with / is assumed to be a glob pattern and
    interpreted through `find(1)`. Other entries are ignored. TIP: put single quotes
    around the param value to prevent undesired glob expansion (default: all)

  * `--exclude` *`EXCLUDE`*     

    Comma separated list of logs to exclude. Applies to the list selected by
    `--include`. Params are interpreted just like in `--include` (default: None)

  * `--since` *`SINCE`*         

    Grab logs from this time window in the past. Should be a human readable
    duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1 day). (default:
    None)

  * `--from` *`FROM`*  Timestamp where collection begins, must be of the form: `yyyymmdd-HH:MM` (default: None)

  * `--to ` *`TO`* Timestamp where collection ends, must be of the form: `yyyymmdd-HH:MM` (default: None)

  * `--outfile` *`OUTFILE`* File path for printing all the results. By default printed to stdout (default: None)

  * `--outdir` *`OUTDIR`*  Directory path for dumping results with original dir structure from each node. Used as an alternative to printing output to outfile/stdout (default: None)

  * `--cmd_infmt` *`CMD_INFMT`* Specify if the inputfile should be compressed/uncompressed before running `CMD`. `C`=compressed, `U`=uncompressed. Don't use this flag if `CMD` works on both (default: None)

  * `--cmd_outfmt` *`CMD_OUTFMT`* Specify if *`OUTFILE`* generated by `CMD` will be compressed/uncompressed. `C`=compressed, `U`=uncompressed. Don't use this flag if output file will be of same format as input file (default: None)

  * `--nodes` *`NODES`* Comma separated list of nodes where to run command. Skip this to use all nodes. (default: None)


### map-tiles

```
tscli map-tiles [-h] {disable,enable,status} ...
```

This subcommand supports the following actions:

* `tscli map-tiles enable [-h] [--online] [--offline] [--tar TAR] [--md5 MD5]`

  Enables ThoughtSpot's map tiles, which are used when constructing geomap charts. If you don't have interest access, you must download the map tiles tar and md5 files. Then you must append the following to the `tscli` command.

  * `--online` Download `maptiles` tar from internet. (default: True)
  * `--offline`   Using `maptiles` tar from local disk. (default: False)
  * `--tar` *`TAR`*   Specified tar file for map-tiles. (default: )
  * `--md5` *`MD5`*   Specified md5 file for map-tiles. (default: )

* `tscli map-tiles disable ` Disable map-tiles functionality.

* `tscli map-tiles status ` Check whether map-tiles is enabled.


### monitoring

```
tscli monitoring [-h] {set-config,show-config} ...
```

This subcommand has the following actions:

* `tscli monitoring set-config [-h] [--email EMAIL] [--clear_email] [--heartbeat_interval HEARTBEAT_INTERVAL] [--heartbeat_disable] [--report_interval REPORT_INTERVAL] [--report_disable]` Sets the monitoring configuration.

  * `--email` *`EMAIL`* Comma separated list (no spaces) of email addresses where the cluster will send monitoring information.
  * `--clear_email` Disable emails by clearing email configuration. (default: False)
  * `--heartbeat_interval` *`HEARTBEAT_INTERVAL`*  Heartbeat email generation interval in seconds. Should be greater than 0.
  * `--heartbeat_disable`   Disable heartbeat email generation. (default: False)
  * `--report_interval` *`REPORT_INTERVAL`* Cluster report email generation interval in seconds. Should be greater than 0.
  * `--report_disable` Disable cluster report email generation. (default: False)

* `tscli monitoring show-config` Shows the monitoring configuration.


### nas

```
tscli nas [-h] {ls,mount-cifs,mount-nfs,unmount} ...
```

This subcommand has the following actions:

* `tscli nas ls [-h]`  List mounts managed by NAS mounter service.

* `tscli nas mount-cifs [-h] --server` *`SERVER`* `[--path_on_server` *`PATH_ON_SERVER`* `]
--mount_point` *`MOUNT_POINT`* `--username` *`USERNAME`* `--password` *`PASSWORD`* `[--uid` *`UID`*`]
[--gid` *`GID`*`] [--options` *`OPTIONS`* `]`

  Mounts a CIFS device on all nodes.

  * `--server` *`SERVER`* IP address or DNS name of CIFS service. For example, `10.20.30.40` (default: None)

  * `--path_on_server` *`PATH_ON_SERVER`*  Filesystem path on the CIFS server to mount (source). For example: `/a` (default: `/`)

  * `--mount_point` *`MOUNT_POINT`*

    Directory on all cluster nodes where the NFS filesystem should be mounted
    (target). If this directory does not exist, the command creates it. If this directory
    already exists, the command uses it for mounting. For example: `/mnt/external` (default: None)

  * `--username` *`USERNAME`*   Username to connect to the CIFS filesystem as (default: None)
  * `--password` *`PASSWORD`*  CIFS password for `--username` (default: None)
  * `--uid` *`UID`*

      *`UID`* that will own all files or directories on the mounted filesystem when
      the server does not provide ownership information. See `man mount.cifs`
      for more details. (default: `1001`)

  * `--gid` *`GID`*             

    Gid that will own all files or directories on the mounted filesystem when
    the server does not provide ownership information. See `man mount.cifs` for
    more details. (default: `1001`)

  * `--options` *`OPTIONS`* Other command-line options to forward to `mount.cifs` command (default: `noexec`)

* `tscli nas mount-nfs [-h] --server SERVER [--protocol PROTO --path_on_server PATH_ON_SERVER]
  --mount_point MOUNT_POINT [--options OPTIONS]`

  Mounts a NFS device on all nodes. Parameters are:

  * `--server` `SERVER` IP address or DNS name of NFS service. For example,` 10.20.30.40` (default: None)
  * `--path_on_server` `PATH_ON_SERVER` Filesystem path on the NFS server to mount (source). For example: `/a/b/c/d` (default: `/`)
  * `--mount_point` `MOUNT_POINT`

    Directory on all cluster nodes where the NFS filesystem should be mounted
    (target). This directory does not have to already exist. If this directory
    already exists, a new directory is not created and the existing directory is
    used for mounting. For example: `/mnt/external` (default: None)

  * `--options` `OPTIONS` Command-line options to forward to mount command (default: `noexec`).
  * `--protocol PROTO` One of `nfs` or `nfs4`. The default is `nfs`.

* `tscli nas unmount [-h] --dir` *`DIR`*

    Unmounts all devices from the specified *`DIR`* (directory) location. This
    command returns an error if nothing is currently mounted on this directory
    through `tscli nas mount` (default: None)

### node

```
tscli node [-h] {check,ls,reinstall-os,resume-reinstall-os,status} ...
```

This subcommand has the following actions:

* `tscli node check [-h] [--select {reinstall-preflight}] [--secondary` *`SECONDARY`*`]`

  Run checks per node. Takes the following parameters:

  * `--select {reinstall-preflight}` Select the type of node check (default: `reinstall-preflight`)
  * `--secondary` *`SECONDARY`*  Secondary drive for `reinstall-preflight` (default: `sdd`)

* `tscli node ls [-h] [--type {all,healthy,not-healthy}]` Filter by node state (default: `all`)
* `tscli node reinstall-os [-h] [--secondary` *`SECONDARY`* `] [--cluster]` Reinstall OS on a node. This takes the following parameters:

  * `--secondary` *`SECONDARY`* Secondary drive to be used to carry to reinstall (default: `sdd`)
  * `--cluster` Is the node part of a cluster (default: `False`)
* `tscli node resume-reinstall-os` Resume in-progress reinstall


### [onboarding](#tscli-onboarding)

```
tscli onboarding
```
Onboarding helps application administrators to bulk update user information.
In particular, it configures various in-app email options.

```
tscli onboarding --help
```
This subcommand prints help for the onboarding configuration


```
tscli onboarding configure
```
This command configures the onboarding through series of steps. It asks the user
to provide information necessary for onboarding-related functionality, such as the following:
1. Company Name
2. Product name
3. Should welcome emails be enabled?
   - Send welcome emails to new users
   - Support email
   - Custom message to include in emails
   - URL of the ThoughtSpot instance
   - URL of the ThoughtSpot documentation

```
tscli onboarding purge-configuration
```

This command removes all onboarding configuration


### patch

```
tscli patch [-h] {apply,ls,resume-apply,resume-rollback,rollback} ...
```

This subcommand has the following actions:

* `tscli patch apply [-h] [` *`release`*`]`

  Apply the patch on an existing cluster. Takes the following parameters:

  * *`release`*  The relative path to the patch tar ball

* `tscli patch ls [-h]  [--applied] [--rolled_back] [--service SERVICE]
                      [--md5 MD5] [--history]` Lists the patches currently applied. This takes the following parameters:

  * `--applied` Show only the patches applied since last full release (default: ` False` )
  * `--rolled_back` Show only the patches rolled back since last full release (default: ` False` )
  * `--service SERVICE` Show patches filtered by service (default: ` None` )
  * `--md5 MD5` Shows the details of the patch specified (default: ` None` )
  * `--history` Shows the history of all patch apply/rollback release (default: ` False` )

* `tscli patch resume-apply [-h]`

  Resume patch apply

* `tscli patch resume-rollback [-h]`

  Resume patch roll-backup

* `tscli patch rollback [-h]`

  Rollback the patch from an existing cluster


### rpackage

```
tscli rpackage [-h] {add,delete,list} ...
```

Manages R packages available to SpotIQ.

* `tscli rpackage add [-h] [--repo` *`REPO`*`] [--timeout` *`TIMEOUT`*`] [--dest_dir` *`DEST_DIR`*`]
[--nodes` *`NODES`*`]` *`package_name`*  Command to add an R *`package_name`*  to the cluster. This command has the following options:

  * `--repo` *`REPO`*  Specify the url of a specific repo to download packages
  * `--timeout ` *`REPO`* Timeout waiting for the R Package to be installed (default: 60)
  * `--dest_dir` *`REPO`*  Directory where output of this command will be placed (default: None)
  * `--nodes` *`NODES`*  Space separated IPs of nodes where you want to run the command. (default: all).

* `tscli rpackage add [-h] [--timeout` *`TIMEOUT`*`] [--dest_dir` *`DEST_DIR`*`] [--nodes` *`NODES`*`]` *`package_name`* Command to delete an installed R package from the cluster. This command has the following options:

  * `--timeout ` *`REPO`* Timeout waiting for the R Package to be removed (default: 60)
  * `--dest_dir` *`REPO`*  Directory where output of this command will be placed (default: None)
  * `--nodes` *`NODES`*  Space separated IPs of nodes where you want to run the command. (default: all).

* `tscli rpackage list [-h] [--detailed]`  List all R packages installed on the cluster.


### saml

```
tscli saml [-h] {configure,purge-configuration}
```

This subcommand has the following actions:

* `tscli saml configure [-h]` Configures SAML. To see a list of prerequisites refer to [Configure SAML]({{ site.baseurl }}/admin/setup/configure-SAML-with-tscli.html).
* `tscli saml purge-configuration` Purges any existing SAML configuration.


### scheduled-pinboards

```
tscli scheduled-pinboards [-h] {disable,enable}
```

This subcommand has the following actions:

* `tscli scheduled-pinboards disable [-h]` Disable scheduled pinboards for this cluster.
* `tscli scheduled-pinboards enable [-h]` Enables scheduled pinboards, which is disabled in prod clusters by default.

{% include note.html content="When you enable scheduled pinboards, you should
also configure a whitelist of intended email domains. Contact ThoughtSpot
Support for help configuring a whitelist." %}

###  smtp

```
tscli smtp [-h] {remove-mailfromname,remove-mailname,remove-relayhost,remove-saslcredentials,reset-canonical-mapping,set-canonical-mapping,set-mailfromname,set-mailname,set-relayhost,set-saslcredentials,show-canonical-mapping,show-mailfromname,show-mailname,show-relayhost}
```

This subcommand takes supports the following actions:

* `tscli smtp remove-mailfromname` Removes current cluster mailfromname
* `tscli smtp remove-mailname` Removes current cluster mailname
* `tscli smtp remove-relayhost` Removes current cluster relayhost
* `tscli smtp remove-saslcredentials` Clears SASL credentials and disables SMTP AUTH

* `tscli smtp reset-canonical-mapping` Deletes the current postmap mapping.

* `tscli smtp set-canonical-mapping [-h]` *`new_key`* *`new_value`* Sets a new Postmap mapping.
* `tscli smtp set-mailfromname` *`mailfromname`* Sets the name, an email address, from which email alerts are sent, for the cluster.
* `tscli smtp set-mailname` *`mailname`* Sets the mailname, a domain, where email alerts are sent, for the cluster.
* `tscli smtp set-relayhost [-h] [--force FORCE] relayhost` Sets the Relay Host for SMTP (email) sent from the cluster.

  * `--force` *`FORCE`*  Set even if relay host is not accessible. (default: `False`)

* `tscli smtp set-saslcredentials` Sets SASL credentials and enables SMTP AUTH

* `tscli smtp show-canonical-mapping` Shows the current postmap mapping.
* `tscli smtp show-mailfromname` Shows the mailname, from which email alerts are sent, for the cluster.
* `tscli smtp show-mailname` Shows the mailname, where email alerts are sent, for the cluster.
* `tscli smtp show-relayhost` Shows the  for SMTP (email) sent from the cluster. If there is no Relay Host configured, the command returns `NOT FOUND`.

### snapshot

```
tscli snapshot [-h] {backup,create,delete,ls,pin,restore,unpin,update-ttl}
```

Learn more about snapshots and backups see the [Understand the backup strategies]({{ site.baseurl }}/admin/backup-restore/choose-strategy.html) documentation.
This subcommand supports the following actions:

* `tscli snapshot backup [-h] [--mode {full,light,dataless}] [--type
{full,incremental}] [--base` *`BASE`* `] [--storage_type {local,nas}] [--remote]` *`name`*
*`out`*

  Pull snapshot out as a backup. This takes the following parameters:

  * `--mode {full,light,dataless}` Mode of backups. (default: `full`)
  * *`name`* Name of snapshot to pull out as a backup. To list all snapshots, run `tscli snapshot ls`.
  * *`out`*  Directory where backup will be written, must not already exist.
  * `--type {full,incremental}` Type of backup.(Incremental backup is not implemented yet) (default: `full`)
  * `--base` *`BASE`* Based snapshot name for incremental backup. (Not Implemented yet) (default: None)
  * `--storage_type {local,nas}` Storage type of output directory. (default: `local`)
  * `--remote` Take backup through Orion master. (default: `True`)

* `tscli snapshot create [-h]` *`name`* *`reason`* *`ttl`*  

  Creates a new snapshot with the *`name`* and *`reason`* provided. This command
  does not accept `.` (periods), but does accept `-` (dashes). The `ttl`
  parameters is the number of days after which this snapshot will be
  automatically deleted. A value of `-1` disables automatic deletion.

* `tscli snapshot pin [-h]` *`name`*  Pins a snapshot so it cannot be deleted or garbage collected.
* `tscli snapshot delete [-h]` *`name`*  Deletes the named snapshot.
* `tscli snapshot ls [-h]` List available snapshots.
* `tscli snapshot restore [-h] [--allow_release_change] [--only_service_state]` *`name`* Restore cluster to an existing snapshot. This takes the following parameters:

  * `--allow_release_change` Allow restoration to a snapshot at a different release. (default: `False`)
  * `--only_service_state` Restore only service state. (default: `False`)

* `tscli snapshot unpin [-h]` *`name`*  Unpin a snapshot so it can be deleted or garbage collected.

* `tscli snapshot update-ttl [-h] [--disable` *`DISABLE`* `]` *`name`* *`ttl`*

  Updates manual snapshot garbage collection policy.

  * `name` Specifies which snapshot to update.  
  * `ttl` Extends the manual snapshot `ttl` (time-to-live) value. Use a positive value to increase `ttl`. Use negative value to decrease it.
  * `--disable` *`DISABLE`* Disable manual snapshot garbage collection. Setting this value to `True` will
    override any `ttl` value. (default: False)


### snapshot-policy

```
tscli snapshot-policy [-h] {disable,enable,show,update}
```

This subcommand supports the following actions:

* `tscli snapshot-policy disable [-h]` Disable snapshot policy.
* `tscli snapshot-policy enable -h` Enable specified snapshot policy.
* `tscli snapshot-policy show [-h]` Show snapshot policy.
* `tscli snapshot-policy update [-h] [--config` *`CONFIG`*`]` Update periodic snapshot config. This takes the following parameter:

   *  `--config` *`CONFIG`* Text format of periodic backup policy config (default: None)


### spot

```
tscli spot [-h] {enable} ...
```

Enables Spot integration.  This subcommand supports the following actions:

`tscli spot enable [-h] --token ` *`TOKEN`* `--thoughtspot_url` *`THOUGHTSPOT_URL`* `[--cache_timeout` *`CACHE_TIMEOUT`* `]`


* `--token ` *`TOKEN`*  Slack authroization token for Spot bot. This is required. You receive this token when your Slack administrator adds the Spot application.
* `--thoughtspot_url` *`THOUGHTSPOT_URL`* URL for the ThoughtSpot application. This is required.
* `--cache_timeout` *`CACHE_TIMEOUT`*  Internal cache timeout (default: `60000`)

### ssl

```
tscli ssl [-h] {add-cert,clear-min-tls-version,off,on,rm-cert,set-min-tls-version,status,tls-status} ...
```        

This subcommand supports the following actions:

* `tscli ssl add-cert [-h]` *`key`* *`certificate`* Adds an SSL certificate, key pair.
* `tscli ssl clear-min-tls-version [-h]` Clears any customizations for the minimum TLS version to support.
* `tscli ssl off`

    Disables SSL. Disabling SSL will stop users from seeing a security warning
    when accessing ThoughtSpot from a browser if there is no SSL certificate
    installed.

* `tscli ssl on [-h]` If SSL is enabled and there is no certificate, users will see a security warning when accessing ThoughtSpot from a browser.
* `tscli ssl rm-cert` Removes the existing SSL certificate, if any.
* `tscli ssl set-min-tls-version [-h] {1.0,1.1,1.2}` Sets the minimum supported TLS version. Sets the minimum SSL version to be supported by the ThoughtSpot application. Please ensure that client browsers are enabled for this version or newer.
* `tscli ssl status` Shows whether SSL authentication is enabled or disabled.
* `tscli ssl tls-status [-h]`  Prints the status of TLS support.

### sssd

```
tscli sssd {enable, disable, set-sudo-group, clear-sudo-group} ...
```

This subcommand uses system security services daemon (SSSD), and has the following actions:

* `tscli sssd enable --user` *`USER`* `--domain` *`DOMAIN`*

   Enables system Active Directory (AD) user access on a single node. You will be
   prompted for password credentials. The user must have permission to join a
   computer or VM to the domain.

* `tscli sssd disable`

  Disables system AD based access on a local node. Running this command will also remove the AD group from sudoers list.

* `tscli sssd set-sudo-group` *`ACTIVE_DIRECTORY_GROUP_NAME`*

   Allows `sudo` permissions for AD group.

* `tscli sssd clear-sudo-group` *`ACTIVE_DIRECTORY_GROUP_NAME`*

   Clears any set AD sudo group.

For more about setting up Active Directory access, see [Enable Active Directory based access]({{ site.baseurl }}/admin/setup/active-directory-based-access.html).

### storage

```
tscli storage [-h] {gc,df} ...
```

This subcommand supports the following actions:

* `tscli storage gc [-h] [--log_age` *`LOG_AGE`* `] [--force] [--localhost_only]`

    Garbage collect unused storage. Before issuing this command, you must stop the cluster using `tscli
    cluster stop`. After garbage collection has completed, you can restart
    the cluster with `tscli cluster start`.  The command frees space in these directories:

     * `/tmp`
     * `/usr/local/scaligent/logs/`
     * `/export/logs/orion`
     * `/export/logs/oreo`
     * `/export/logs/hadoop`
     * `/export/logs/zookeeper`
     * `cores`

    Accepts these optional flags:

    * `--log_age` *`LOG_AGE`*

      Delete logs older than these many hours. Use a non-zero value ideally. A
      zero value will cause all temporary files to be deleted, including say those
      which are just temporarily closed while they are being passed from one
      component to the next. (default: `4`)

    * `--force` Forces deletion of all logs and temporary files regardless of age. This must
    only be run on a stopped cluster. (default: False)

    * `--localhost_only` If used, only the logs on the localhost will be removed. If not specified, the
       command acts on the entire cluster.

* `tscli storage df [--mode disk|hdfs]`

   Checks the disk usage on the relevant mounts. Returns output similar to the Linux system command `df -h <directory>`.


### support

```
tscli support [-h]
{bundle,restart-remote,rm-admin-email,rm-admin-phone,rm-feedback-email,set-admin-email,set-admin-phone,set-debug-ui-password,set-feedback-email,set-remote,show-admin-email,show-admin-phone,show-feedback-email,show-remote,start-remote,stop-remote} ...

```

This subcommand supports the following actions:

* ` tscli support bundle [-h] [--include INCLUDE] [--exclude EXCLUDE] [--list_selectors] [--since SINCE] [--from FROM] [--to TO] [--out OUT] [--nodes NODES]`

  - `--include` *`INCLUDE`* Comma separated list of selectors to include, each entry is
    either a "selector" or a glob for matching files. To see the list of valid
    selectors, run this command with `--list_selectors`. You may also specify: "`all`
    to get all selectors and logs, and "basic" to get only the basic selectors.
    Selectors may also be selectors meant for logs collect: all, orion, system, ts,
    or the name of a service. Anything starting with / is assumed to be a glob
    pattern and interpreted through find(1). Other entries are ignored. TIP: put single
    quotes around the param value to prevent undesired glob expansion. Use "all" to
    collect all selectors and all logs (default: all_but_logs)

  - `--exclude` *`EXCLUDE`* Comma separated list of selectors to exclude. Applies to the
    list selected by `--include`. Params are interpreted just like in `--include`. Use
    the special keyword "logs" to exclude logs collection all together. (default:
    None)

  - `--list_selectors` List the selectors available for `--include` and
    `--exclude`, and then exit. (default: `False`)

  - `--since` *`SINCE`* Grab logs from this time window in the past. Should be a human readable duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1 day). (default: None)

  - `--from` *`FROM`*  Timestamp where collection begins, must be of the form:
    `yyyymmdd-HH:MM` (default: None)

  - `--to` *`TO`* Timestamp where collection ends, must be of the form:
    `yyyymmdd-HH:MM` (default: None)

  - `--out` *`OUT`* Tarball path for dumping the support bundle (default:
`/tmp/support_bundle.tar.gz`)

  - `--nodes` *`NODES`* Comma separated list of nodes from where to collect logs. Skip this to use all
nodes. (default: None)

* `tscli support restart-remote` Restarts remote support.
* `tscli support rm-admin-email` Removes the email address for contacting the customer administrator. Replaces it with the default ThoughtSpot Support email address.
* `tscli support rm-feedback-email` Removes the email address for product feedback. Replaces it with the default ThoughtSpot Support email address.
* `tscli support rm-admin-phone` Removes the phone number for contacting the customer administrator. Replaces it with the default ThoughtSpot Support phone number.
* `tscli support rm-feedback-email` Removes the email for sending feedback out of the system. If you would like to set a blank email address, issue the command `tscli support set-feedback-email ' '`.
* `tscli support set-admin-email` *`email`* Sets the email address for contacting the customer administrator. If you would like to display a blank email address, issue the command `tscli support set-admin-email ' '`.
* `tscli support set-feedback-email` *`email`* Sets the email address for sending feedback. If you would like to display a blank email address, issue the command `tscli support set-feedback-email ' '`.
* `tscli support set-admin-phone` *`phone_number`* Sets the phone number for contacting the customer administrator. Specify a phone number using any value (e.g. `+1 800-508-7008 Ext. 1`). If you would like to display a blank phone number, issue the command `tscli support set-admin-phone`.
* `tscli support set-remote [-h] [--addr` *`ADDR`*`] [--user` *`USER`*`]` Configures the cluster for remote support through SSH tunneling, where *`ADDR`* is the address of support, e.g. t`unnel.thoughtspot.com`, and *`USER`* is the support username.
* `tscli support show-admin-email` Shows the email address for customer administrator, if set.
* `tscli support show-feedback-email` Shows the email address for product feedback, if set.
* `tscli support show-admin-phone` Shows the phone number for customer administrator, if set.
* `tscli support show-remote` Shows the status and configuration of remote support.
* `tscli support start-remote` Starts remote support.
* `tscli support stop-remote` Stops remote support.


### tokenauthentication

```
tscli cli tokenauthentication [-h] {disable,enable}
```

* `tscli cli tokenauthentication enable` Generates a token.
* `tscli cli tokenauthentication disable` Purges token login configuration.
