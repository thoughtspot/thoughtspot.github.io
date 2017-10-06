---
title: [tscli command reference]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The `tscli` command line interface is an administration interface for the ThoughtSpot instance. Use `tscli` to take snapshots (backups) of data, apply updates, stop and start the services, and view information about the system. This reference defines each subcommand and what you can accomplish with it.

## How to use the tscli command

The `tscli` command has the following syntax:

```
tscli [-h] [--helpfull] [--verbose] [--noautoconfig]
           [--autoconfig] [--yes] [--cluster <cluster>]
           [--zoo <zookeeper>] [--username username] [--identity_file identity_file]
           {alert,backup,backup-policy,callhome,cluster,command,dr-mirror,etl,event,
             feature,fileserver,firewall,hdfs,ldap,logs,map-tiles,monitoring,nas,node,
             os,saml,scheduled-pinboards,smtp,snapshot,snapshot-policy,spot,ssl,storage,
             support}
```

The `tscli` command has several subcommands such as `alert`, `backup`, and so forth. You issue a subcommand using the following format:


```
tscli [subcommand ]
```

Subcommands have their own additional options and actions such as `tscli backup create` or `tscli backup delete` for example.  To view help for a subcommand:

```
tscli [subcommand] -h
```

A subcommand itself may have several options.

## tscli subcommands

This section lists each subcommand and its syntax.

### alert subcommand

```
tscli alert [-h] {count,info,list,off,on,refresh,silence,status,unsilence}
```

Use this subcommand to do the following:


* `tscli alert info` Lists all alerts.
* `tscli alert list` Lists the generated alerts.
* `tscli alert off` Disables all alerts from the cluster.
* `tscli alert on` Enables alerts from the cluster.
* `tscli alert silence --name <alert_name>`

    Silences the alert with *`alert_name`*. For example, DISK_ERROR. Silenced alerts are still recorded in postgres, however emails are not sent out.

* `tscli alert status` Shows the status of cluster alerts.

* `tscli alert unsilence-name` *`alert_name`*

   Unsilences the alert with `*`alert_name`*`. For example, `DISK_ERROR`.


### backup subcommand

```
tscli backup [-h] {create,delete,ls,restore}
```

Use this subcommand to do the following:


* `tscli backup create [-h] [--mode {full,light,dataless}]
                           [--type {full,incremental}] [--base BASE]
                           [--storage_type {local,nas}] [--remote]
                           name out`

    Pulls a snapshot and saves it as a backup where:

    * `--mode {full,light,dataless}`

        Mode of backups. To understand these diffrent modes see [Understand backup modes](/admin/backup-restore/backup-modes.html).

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
tscli backup-policy [-h] {create,delete,disable,enable,ls,show,status,update}
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
tscli callhome [-h] {disable,enable,generate-bundle}
```

Use this subcommand to do the following:

* `tscli callhome disable` Turns off the periodic call home feature.
* `tscli callhome enable --customer_name` *`customer_name`*`

    Enables the "call home" feature, which sends usage statistics to ThoughtSpot Support every six hours via the secure file server. Before using this command for the first time, you need to set up the file server connection using `tscli fileserver configure`.

    The parameter *`customer_name`* takes the form  ```Shared/*`customer_name`*/stats```.

* `tscli callhome generate-bundle`   --d *`directory`* `--since` *`DAYS`*

   * `--d D` Dest folder where tar file will be created. (default: None)
   * ` --since`  *`DAYS`*

      Grab callhome data from this time window in the past. Should be a human readable duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1 day). (default: None) Generates a tar file of the cluster metrics and writes it to the specified directory where  *`DAYS`* is how far back you'd like to generate the tar file from in days. For example, `30`. If this parameter is not specified, the command will collect stats from the last 15 days by default.


### cluster

```
tscli cluster [-h] {abort-reinstall-os,check,create,get-config,load,reinstall-os,report,restore,resume-reinstall-os,resume-update,set-config,set-min-resource-spec,show-resource-spec,start,status,stop,update,update-hadoop}
```

Use this subcommand to do the following:

* `tscli cluster abort-reinstall-os` Abort in-progress reinstall.
* `tscli cluster create` *`release`*

    Creates a new cluster from the release file specified by  `*`release`*`. This command is used by ThoughtSpot Support when installing a new cluster, for example, `tscli cluster create 2.0.4.tar.gz`

* `tscli cluster diagnose`  Diagnose all nodes in the cluster.
* `tscli cluster get-config` Get current cluster network and time configuration. Prints JSON configuration to stdout.
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
tscli command [-h] {run}
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
tscli dr-mirror [-h] {start,status,stop}
```

* `tscli dr-mirror start` Starts a mirror cluster which will continuously recover from a primary cluster.
* `tscli dr-mirror status` Checks whether the current cluster is running in mirror mode.
* `tscli dr-mirror stop` Stops mirroring on the local cluster.


### etl

```
tscli etl [-h] {change-password,disable-lw,download-agent,enable-lw,show-lw}
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
   * `--admin_username` *`ADMIN_USERNAME`* Admin username for Thoughtspot (default: None)
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
tscli event [-h] {list}
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
tscli feature [-h] {get-all-config}
```
This subcommand has the following actions:

`tscli feature get-all-config` Gets the configured features in a cluster. The command will return a list of features, such as custom branding, Data Connect, and call home, and tell you whether they are enabled or disabled.


### fileserver

```
tscli fileserver [-h] {configure,download-release,purge-config,show-config,upload}
```

This subcommand has the following actions:

* `tscli fileserver configure [-h] --user` *`USER`* `[--password ` *`PASSWORD`* `]` Configures the secure file server username and password for file upload/download and the call home feature. You only need to issue this command once, to set up the connection to the secure file server. You only need to reissue this command if the password changes. The parameter *`PASSWORD`* is optional. If a password is not specified, you will be prompted to enter it.
* `tscli fileserver download-release [-h] [--user` *`USER`*`] [--password` *`PASSWORD`*`]` *`release`* Downloads the specified release file and its checksum. Specify the release by number, to the second decimal point (e.g. 3.1.0, 3.0.5, etc.). You may optionally specify the `--user` and `--password` to bypass the credentials that were specified when configuring the file server connection with `tscli fileserver configure`. Before using this command for the first time, you need to set up the file server connection using `tscli fileserver configure`.
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
  * `--password` *`PASSWORD`* Password of fileserver (default: None)
  * `--file_name` *`FILE_NAME`* Local file that needs to be uploaded (default: None)
  * `--server_dir_path` *`SERVER_DIR_PATH`* Directory path on fileserver. (default: None) The *`SERVER_DIR_PATH`* parameter specifies the directory to which you want
    to upload the file. It is based on your customer name, and takes the form `/Shared/support/*`customer_name`*`.


### firewall

```
tscli firewall [-h] {close-ports,disable,enable,open-ports,status}
```

* `tscli firewall close-ports`

  Closes given ports through firewall on all nodes. Takes a list of ports to
  close, comma separated. Only closes ports which were previously opened using
  "open-ports". Ignores ports which were not previously opened with "open-ports"
  or were already closed.

* `tscli firewall disable` Disable firewall.
* `tscli firewall enable` Enable firewall.
* `tscli firewall open-ports *`ports`*`

   Opens given ports through firewall on all nodes. Takes a list of ports to
   open, comma separated. Ignores ports which are already open. Some essential
   ports are always kept open (e.g. `ssh`), they are not affected by this command
   or by `close-ports`.

* `tscli firewall status` Shows whether firewall is currently enabled or disabled.


### hdfs

```
tscli hdfs [-h] {leave-safemode}
```

This subcommand has the following actions:

`tscli hdfs leave-safemode`  Command to get HDFS namenodes out of safemode.

### ldap

```
tscli ldap [-h] {add-cert,configure,purge-configuration}
```

This subcommand has the following actions:

* `tscli ldap add-cert` *`name`* *`certificate`*

  Adds an SSL certificate for LDAP. Use only if LDAP has been configured without
  SSL and you wish to add it. Use `*`name`*` to supply an alias for the
  certificate you are installing.

* `tscli ldap configure`

   Configures LDAP using an interactive script. You can see detailed
   instructions for setting up LDAP in <a class="xref"
   href="/admin/setup/about-LDAP.html" title="Some companies use
   LDAP (Lightweight Directory Access Protocol) to manage user authentication.
   Using LDAP provides security and makes user management more
   centralized.">About LDAP integration</a>.

* `tscli ldap purge-configuration` Purges (removes) any existing LDAP configuration.


### logs

```
tscli logs [-h] {collect,runcmd}
```

This subcommand has the following actions:


* `tscli logs collect [-h] [--include` *`INCLUDE`*`] [--exclude` *`EXCLUDE`*`] [--since` *`SINCE`*`] [--from` *`FROM`*`] [--to` *`TO`*`] [--out` *`OUT`*`] [--maxsize` *`MAXSIZE`*`] [--sizeonly] [--nodes` *`NODES`*]

  Extracts logs from the cluster. Does not include any logs that have been
  deleted due to log rotation.

  These parameters have the following values:

  * `--include` *`INCLUDE`*

    Specifies a comma separated list of logs to include. Each entry is either a
    "selector" or a glob for matching files.Selectors must be among: `all`,
    `orion`, `system`, `ts`. Anything starting with `/` is assumed to be a glob
    pattern and interpreted via `find(1)`. Other entries are ignored. Put single
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
[--since` `SINCE``] [--from` *`FROM`*`] [--to` *`TO`*`] [--outfile` *`OUTFILE`*`] [--outdir` *`OUTDIR`*`]
[--cmd_infmt` *`CMD_INFMT`*`] [--cmd_outfmt` *`CMD_OUTFMT`*`] [--nodes` *`NODES`*`]`


  Runs a Unix command on logs in the cluster matching the given constraints.
  Results are reported as text dumped to standard out, the specified output
  file, or as tarballs dumped into the specified directory.


  * `--cmd` *`CMD`*           

    Unix-Command to be run on the selected logs. Use single quotes to escape
    spaces etc. Language used to specify CMDSTR has following rules.

    * A logfile and its corresponding result file can be referred by keywords `SRCFILE` &
    `DSTFILE`. eg. `cp SRCFILE DSTFILE`

    * Without any reference to DSTFILE in CMDSTR, `> DSTFILE` will be appended to CMDSTR for output redirection. eg `du
    -sch SRCFILE` gets auto- transtalted to `du -sch SRCFILE > DSTFILE`

    * Without any reference to SRCFILE, content of log is streamed to CMDSTR via pipe. eg.
    `tail -n100 | grep ERROR` gets auto-transtalted to `cat SRCFILE | tail -n100 |
    grep ERROR > DSTFILE` (default: None)

  * `--include` *`INCLUDE`*     

    Comma separated list of logs to include,each entry is either a "selector" or
    a glob for matching files.Selectors must be among: `all`, `orion`, `system`,
    `ts`. Anything starting with / is assumed to be a glob pattern and
    interpreted via `find(1)`. Other entries are ignored. TIP: put single quotes
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
tscli map-tiles [-h] {disable,enable}
```

This subcommand supports the following actions:

* `tscli map-tiles enable [-h] [--online] [--offline] [--tar TAR] [--md5 MD5]`

  Enables ThoughtSpot's map tiles, which are used when constructing geomap charts. If you don't have interest access, you must download the map tiles tar and md5 files. Then you must append the following to the `tscli` command.

  * `--online` Download `maptiles` tar from internet. (default: True)
  * `--offline`   Using `maptiles` tar from local disk. (default: False)
  * `--tar` *`TAR`*   Specified tar file for map-tiles. (default: )
  * `--md5` *`MD5`*   Specified md5 file for map-tiles. (default: )

* `tscli map-tiles disable ` Disable map-tiles functionality.

### monitoring

```
tscli monitoring [-h] {set-config,show-config}
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
tscli nas [-h] {ls,mount-cifs,mount-nfs,unmount}
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
    (target). This directory does not need to already exist. If this directory
    already exists, a new directory is not created and the existing directory is
    used for mounting. For example: `/mnt/external` (default: None)

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


* `tscli nas mount-nfs [-h] --server SERVER [--path_on_server PATH_ON_SERVER]
  --mount_point MOUNT_POINT [--options OPTIONS]`

  Mounts a NFS device on all nodes. Parameters are:

  * `--server` `SERVER` IP address or DNS name of NFS service. For example,` 10.20.30.40` (default: None)
  * `--path_on_server` `PATH_ON_SERVER` Filesystem path on the NFS server to mount (source). For example: `/a/b/c/d` (default: `/`)
  * `--mount_point` `MOUNT_POINT`

    Directory on all cluster nodes where the NFS filesystem should be mounted
    (target). This directory does not need to already exist. If this directory
    already exists, a new directory is not created and the existing directory is
    used for mounting. For example: `/mnt/external` (default: None)

  * `--options` `OPTIONS` Command-line options to forward to mount command (default: `noexec`).

* `tscli nas unmount [-h] --dir` *`DIR`*

    Unmounts all devices from the specified *`DIR`* (directory) location. This
    command returns an error if nothing is currently mounted on this directory
    via `tscli nas mount` (default: None)

### node

```
tscli node [-h] {check,ls,reinstall-os,status}
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


### os

```
tscli os [-h] {find-package,list-packages}
```

This subcommand supports the following actions:

* `tscli os find-package [-h] ` *`name`*

   Lists all packages and versions included in the product image whose name
   contains *`name`*. Package names you can specify are:

   - `alert`
   - `backup`
   - `callhome`
   - `cluster`
   - `event`
   - `fileserver`
   - `firewall`
   - `ldap`
   - `logs`
   - `monitoring`
   - `node`
   - `os`
   - `release`
   - `smtp`
   - `snapshot`
   - `ssl`
   - `storage`
   - `support`

* `tscli os list-packages [-h]` Lists all packages and versions included in the product image.

### saml

```
tscli saml [-h] {configure,purge-configuration}
```

This subcommand has the following actions:

* `tscli saml configure [-h]` Configures SAML. To see a list of prerequisites refer to [Configure SAML](/admin/setup/configure-SAML-with-tscli.html).
* `tscli saml purge-configuration` Purges any existing SAML configuration.

### scheduled-pinboards

```
tscli scheduled-pinboards [-h] {disable,enable}
```

This subcommand has the following actions:

* `tscli scheduled-pinboards disable [-h]` Disable scheduled pinboards for this cluster.
* `tscli scheduled-pinboards enable [-h]` Enables scheduled pinboards, which is disabled in prod clusters by default.


###  smtp

```
tscli smtp [-h] {reset-canonical-mapping,set-canonical-mapping,set-mailfromname,set-mailname,set-relayhost,show-canonical-mapping,show-mailfromname,show-mailname,show-relayhost}
```

This subcommand takes supports the following actions:

* `tscli smtp reset-canonical-mapping` Deletes the current postmap mapping.
* `tscli smtp set-canonical-mapping [-h]` *`new_key`* *`new_value`* Sets a new Postmap mapping.
* `tscli smtp set-mailfromname` *`mailfromname`* Sets the name, an email address, from which email alerts are sent, for the cluster.
* `tscli smtp set-mailname` *`mailname`* Sets the mailname, a domain, where email alerts are sent, for the cluster.
* `tscli smtp set-relayhost [-h] [--force FORCE] relayhost` Sets the Relay Host for SMTP (email) sent from the cluster.

  * `--force` *`FORCE`*  Set even if relay host is not accessible. (default: `False`)

* `tscli smtp show-canonical-mapping` Shows the current postmap mapping.
* `tscli smtp show-mailfromname` Shows the mailname, from which email alerts are sent, for the cluster.
* `tscli smtp show-mailname` Shows the mailname, where email alerts are sent, for the cluster.
* `tscli smtp show-relayhost` Shows the  for SMTP (email) sent from the cluster. If there is no Relay Host configured, the command returns `NOT FOUND`.

### snapshot

```
tscli snapshot [-h] {backup,create,delete,ls,restore,update-ttl}
```

Learn more about snapshots and backups see the [Understand the backup strategies](/admin/backup-restore/choose-strategy.html) documentation.
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

* `tscli snapshot delete [-h]` *`name`*  Deletes the named snapshot.
* `tscli snapshot ls [-h]` List available snapshots.
* `tscli snapshot restore [-h] [--allow_release_change] [--only_service_state]` *`name`* Restore cluster to an existing snapshot. This takes the following parameters:

  * `--allow_release_change` Allow restoration to a snapshot at a different release. (default: `False`)
  * `--only_service_state` Restore only service state. (default: `False`)

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
tscli spot [-h] {enable}
```

This subcommand supports the following actions:

`tscli spot [-h] {enable}` Enableds Spot integrtion.

### ssl

```
tscli ssl [-h] {add-cert,clear-min-tls-version,off,on,rm-cert,set-min-tls-version,status,tls-status}
```        


status              Shows whether of SSL authentication is enabled or
                    disabled for the ThoughtSpot application.
tls-status          Prints the status of TLS support



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

### storage

```
tscli storage [-h] {gc}
```

This subcommand supports the following actions:

`tscli storage gc [-h] [--log_age` *`LOG_AGE`* `] [--force] [--localhost_only]`

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


### support

```
tscli support [-h]
{restart-remote,rm-admin-email,rm-admin-phone,set-admin-email,set-admin-phone,set-remote,show-admin-email,show-admin-phone,show-remote,start-remote,stop-remote}

```

This subcommand supports the following actions:

* `tscli support restart-remote` Restarts remote support.
* `tscli support rm-admin-email` Removes the email address for contacting the customer administrator. Replaces it with the default ThoughtSpot Support email address.
* `tscli support rm-admin-phone` Removes the phone number for contacting the customer administrator. Replaces it with the default ThoughtSpot Support phone number.
* `tscli support set-admin-email` *`email`* Sets the email address for contacting the customer administrator. If you would like to display a blank email address, issue the command `tscli support set-admin-email ' '`.
* `tscli support set-admin-phone` *`phone_number`* Sets the phone number for contacting the customer administrator. Specify a phone number using any value (e.g. `+1 800-508-7008 Ext. 1`). If you would like to display a blank phone number, issue the command `tscli support set-admin-phone`.
* `tscli support set-remote [-h] [--addr` *`ADDR`*`] [--user` *`USER`*`]` Configures the cluster for remote support through SSH tunneling, where *`ADDR`* is the address of support, e.g. t`unnel.thoughtspot.com`, and *`USER`* is the support username.
* `tscli support show-admin-email` Shows the email address for customer administrator, if set.
* `tscli support show-admin-phone` Shows the phone number for customer administrator, if set.
* `tscli support show-remote` Shows the status and configuration of remote support.
* `tscli support start-remote` Starts remote support.
* `tscli support stop-remote` Stops remote support.
