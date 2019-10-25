---
title: [tscli command reference]
last_updated: 10/24/2019
summary: "The ThoughtSpot command line interface, or tscli, is an administration interface for the cluster. Use tscli to take snapshots (backups) of data, apply
updates, stop and start the services, and view information about the system.
This reference defines each subcommand."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The command returns `0` on success, and a non-zero exit codes on failure.
The `tscli` command logs errors to the `stderr` directory.

{: id="tscli-command"}
## How to use the tscli command

The `tscli` command has the following syntax:

<pre>
tscli [-h]
      [--helpfull]
      [--verbose]
      [--noautoconfig]
      [--autoconfig]
      [--yes]
      [--cluster ]
      [--zoo ]
      {access, alert, ansible, backup, backup-policy, calendar, callhome, cassandra,
       cluster, command, dr-mirror, etl, event, feature, fileserver,
       firewall, hdfs, ipsec, ldap, logs, map-tiles, monitoring, nas,
       node, notification, onboarding, patch, rpackage, saml, scheduled-pinboards, set, smtp, snapshot,
       snapshot-policy, socialproof spot, sssd, ssl, storage, support,
       tokenauthentication}
</pre>

The `tscli` command has several subcommands, such as `alert`, `backup`, and so on.

Issue subcommands using the following format:

```
tscli [subcommand]
```

Subcommands have their own additional options and actions, such as `tscli backup
create` or `tscli backup delete`.  

Each subcommand may have several options.

To view help for a subcommand, type `-h` after the subcommand option:

```
tscli [subcommand] -h
```
{: id="tscli-subcommands"}
## tscli subcommands

This section lists each subcommand and its syntax.

{: id="tscli-access"}
### access

```
tscli access [-h] {list}
```

This subcommand has the following option:

<dl>
  <dlentry>
    <dt><code>tscli access list</code></dt>
    <dd>Lists objects by last access time, with the following parameters:
    <dl>
  <dlentry>
    	<dt><code>--type TYPE</code></dt>
    	<dd>Type of object, either answer or pinboard.</dd>
  </dlentry>
  <dlentry>
  <dt><code>--limit	LIMIT</code></dt>
    <dd><p>The number of objects to fetch.</p>
      <p>The default is 30.</p> </dd>
  </dlentry>
  <dlentry>
  <dt><code>--offset OFFSET</code></dt>
    <dd><p>Offset to use to skip objects for batched results.</p>
    <p>
      The default is 0.
      </p></dd>
  </dlentry>
  <dlentry>
  <dt><code>--ascending</code></dt>
    <dd><p>
      Sorts the answers by access time ascending.
      </p>
    <p>
      The default is <code>True</code>.
      </p></dd>
  </dlentry>
</dl>
</dd>
  </dlentry>
</dl>

{: id="tscli-alert"}
### alert

```
tscli alert [-h] {count,info,list,off,on,refresh,silence,status,unsilence}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli alert count</code></dt>
    <dd>Lists counts of generated alerts by type.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert info</code></dt>
    <dd>Lists all alerts. Add <code>silenced</code> to list only silenced alerts, <code>active</code> to list only active alerts, or <code>detailed</code> to get detailed alert information.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert list</code></dt>
    <dd>Lists the generated alerts, with these parameters:
    <dl>
    <dlentry>
    <dt><code>--limit LIMIT</code></dt>
    <dd>Specifies the number of recent alerts to display.</dd>
    </dlentry>
    <dlentry>
    <dt><code>--since SINCE</code></dt>
    <dd>Lists all alerts raised since a specified time period, in the form of a human readable duration string, such as 4h (4 hours) or 4m (4 minutes).</dd>
    </dlentry>
    </dl>
    </dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert off</code></dt>
    <dd>Disables all alerts from the cluster in the cluster's timezone.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert on</code></dt>
    <dd>Enables alerts from the cluster.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert refresh</code></dt>
    <dd>Refreshes alert metadata on the cluster.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert silence --name NAME</code></dt>
    <dd>Silences the alert with <code>NAME</code>. For example, <code>DISK_ERROR</code>. Silenced alerts are still recorded in postgres, however emails are not sent out.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert status</code></dt>
    <dd>Shows the status of cluster alerts.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli alert unsilence --name  NAME</code></dt>
    <dd>Unsilences the alert with <code>NAME</code>. For example, <code>DISK_ERROR</code>.</dd>
   </dlentry>
</dl>   

{: id="tscli-ansible"}
### ansible

```
tscli ansible [-h] {checkout,commit} [--local]
```

This subcommand has the following options:

   <dl>
     <dlentry>
       <dt><code>tscli ansible checkout --host HOST</code></dt>
       <dd>Checks out Ansible playbook with the target <code>HOST</code> that is running the ts_ansible service.</dd>
     </dlentry>

     <dlentry>
       <dt><code>tscli ansible commit --host HOST</code></dt>
       <dd>Commits Ansible playbooks with the target <code>HOST </code> that is running the ts_ansible service.</dd>
     </dlentry>
</dl>

   Use this subcommand to install and configure third-party software on the ThoughtSpot cluster.  

   For details, see these articles:

   - [About third party security and monitoring software]({{ site.baseurl}}/admin/data-security/about-secure-monitor-sw.html#)
   - [Installing third party security and monitoring software]({{ site.baseurl}}/admin/data-security/install-secure-monitor-sw.html#)

{: id="tscli-backup"}
### backup

```
tscli backup [-h] {create,delete,ls,restore}
```

  This subcommand has the following options:

  <dl>
    <dlentry>
      <dt><code>tscli backup create [-h] [--mode {full,light,dataless}] [--type {full,incremental}] [--base BASE] <br>[--storage_type {local,nas}] [--remote] [--no-orion-master]</code></dt>
      <dd>
        <p>Pulls a snapshot and saves it as a backup, with these parameters:</p>

        <dl>
          <dlentry>
           <dt><code>--mode {full,light,dataless}</code></dt>
            <dd><p>Mode of backups.</p>
            <p>
              The default is <code>full</code>.
              </p></dd></dlentry>
          <dlentry>
            <dt><code>--type {full,incremental}</code></dt>
            <dd>
              <p>Type of backup.</p>
              <p><strong>Note:</strong> <code>incremental</code> is not implemented.</p>
              <p>The default setting is <code>full</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--base BASE</code></dt>
            <dd>
              <p>Based snapshot name for incremental backup.</p>
              <p><strong>Note:</strong> Because <code>incremental</code> is not implemented,  neither is this option.</p>
              <p>There is no default setting.</p></dd></dlentry>
          <dlentry>
            <dt><code>--storage_type {local,nas}</code></dt>
            <dd>
              <p>Storage type of output directory.</p>
              <p>The default setting is <code>local</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--remote</code></dt>
            <dd>
              <p>Takes backup through orion master.</p>
              <p>The default setting is <code>True</code>.</p></dd>
            <dlentry>
            <dt><code>--no-orion-master</code></dt>
             <dd> <p>
                Determines whether orion master is available during backup.
              </p>
               <p>
                 The default is <code>False</code>.
               </p></dd>
            </dlentry>
          </dlentry>
          </dl>
      </dd>

      </dlentry>

    <dlentry>
      <dt><code>tscli backup delete <em>name</em></code></dt>
      <dd>Deletes the named backup.</dd>
    </dlentry>

    <dlentry>
      <dt><code>tscli backup ls</code></dt>
      <dd>Lists all backups taken by the system.</dd>
    </dlentry>

    <dlentry>
      <dt><code>tscli backup restore</code></dt>
      <dd>Restores cluster using backup, with the following parameters:
      <dl>
        <dlentry>
        <dt><code>--release RELEASE</code></dt>
          <dd>Restore the cluster on a specific release number.</dd>
        </dlentry>
        <dlentry>
        <dt><code>--disable_rotate_keys</code></dt>
          <dd><p>
            Disables cluster rotate key configurations.
            </p>
          <p>
            The default is <code>False</code>.
            </p></dd>
        </dlentry>
        <dlentry>
        <dt><code>--enable_cloud_storage</code></dt>
          <dd>Determines whether to enable Cloud Storage setup.</dd>
        </dlentry>
        <dlentry>
        <dt>--heterogeneous</dt>
          <dd><p>
            Should be set for heterogeneous clusters.
            </p>
          <p>
            The default is <code>False</code>.
            </p></dd>
        </dlentry>
        </dl>
      </dd>
    </dlentry>
  </dl>

{: id="tscli-backup-policy"}
### backup-policy

```
tscli backup-policy [-h] {create,delete,disable,enable,ls,show,status,update}
```

Manages the backup policy.

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli backup-policy create</code></dt>
    <dd>Prompts an editor for you to edit the parameters of the backup policy.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy delete <em>name</em></code></dt>
    <dd>Deletes the backup policy with <em>name</em>.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy disable <em>name</em></code></dt>
    <dd>Disables the policy <em>name</em>.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy enable <em>name</em></code></dt>
    <dd>Enables the policy <em>name</em>.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy ls</code></dt>
    <dd>List backup policies.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy show <em>name</em></code></dt>
    <dd>Show the policy <em>name</em>.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy status <em>name</em></code></dt>
    <dd>Enables the policy <em>name</em>.</dd></dlentry>

  <dlentry>
    <dt><code>tscli backup-policy update <em>name</em></code></dt>
    <dd>Prompts an editor for you to edit the policy <em>name</em>.</dd></dlentry>
</dl>

{: id="tscli-callhome"}
### callhome

```
tscli callhome [-h] {disable,enable,generate-bundle}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli callhome disable</code></dt>
    <dd>Turns off the periodic call home feature.</dd></dlentry>

  <dlentry>
    <dt><code>tscli callhome enable --customer_name <em>customer_name</em></code></dt>
    <dd>
      <p>Enables the "call home" feature, which sends usage statistics to ThoughtSpot.</p>
      <p>This feature is enabled by default.</p>
      <p>The parameter <code>customer_name</code> takes the form  <code>Shared/<em>customer_name</em>/stats</code>.</p></dd></dlentry>

  <dlentry>
    <dt><code>tscli callhome generate-bundle  --d <em>directory</em> --since <em>DAYS</em></code></dt>
    <dd>
      <p>These are the parameters:</p>
      <dl>
        <dlentry>
          <dt><code>--d D</code></dt>
          <dd><p>Destination folder for the tar file.</p>
            <p>There is no default setting.</p></dd></dlentry>
        <dlentry>
          <dt><code>--since <em>DAYS</em></code></dt>
          <dd>
            <p>Grab <code>callhome</code> data from this time window in the past.</p>
            <p>This should be a human-readable duration string, such as <code>4h</code> (4 hours), <code>30m</code> (30 minutes), <code>1d</code> (1day).</p>
            <p>This option generates a <code>tar</code> file of the cluster metrics and
      writes it to the specified directory, where  <code>DAYS</code> is how many days back the file must start.</p>
            <p>The default setting is <code>7</code> days.</p></dd>
            </dlentry>
            </dl>
            </dd>
  </dlentry>
</dl>

{: id="tscli-cassandra"}
### cassandra

```
tscli cassandra [-h] {backup,restore}
```

Backs up cassandra.

This subcommand has the following options:

<dl>
<dlentry>
  <dt><code>tscli cassandra backup</code></dt>
  <dd>Take a backup of cassandra.</dd></dlentry>
<dlentry>
    <dt><code>tscli cassandra restore</code></dt>
    <dd>Restore cassandra from a backup.</dd></dlentry>
</dl>

{: id="tscli-cluster"}
### cluster

```
tscli cluster [-h] {abort-reinstall-os,check,create,get-config,load,
                    reinstall-os,report,restore,resume-reinstall-os,
                    resume-update,set-config,set-min-resource-spec,
                    show-resource-spec,start,status,stop,update,
                    update-hadoop}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli cluster abort-reinstall-os</code></dt>
    <dd>Abort in-progress reinstall.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster check --includes {all,disk,zookeeper,hdfs,orion-cgroups,orion-oreo}</code></dt>
    <dd>
      <p>Check the status nodes in the cluster.</p>
      <p>You must specify a component to check.</p></dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster create <em>release</em></code></dt>
    <dd>
      <p>Creates a new cluster from the release file specified by <code><em>release</em></code>.</p>
      <p>Used by ThoughtSpot Support when installing a new cluster. For example, <code>tscli cluster create 5.3.2.tar.gz</code>.</p></dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster get-config</code></dt>
    <dd>
      <p>Get current cluster network and time configuration. Prints JSON configuration to <code>stdout.</code></p>
      <p>If the system cannot be connected to all interfaces, the command returns an error but continues to function.</p></dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster load</code></dt>
    <dd>Load state from specified backup onto existing cluster.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster reinstall-os</code></dt>
    <dd>Reinstall OS on all nodes of the cluster.</dd></dlentry>

<dlentry>
    <dt><code>tscli cluster report</code></dt>
    <dd>Generate cluster report.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster restore --release <em>release_tarball</em> <em>backupdir</em></code></dt>
    <dd>Restores a cluster using the backup in the specified directory <em>backupdir</em>. If you're restoring from a dataless backup, you must supply the release tarball for the corresponding software release.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster resume-reinstall-os</code></dt>
    <dd>Resume in-progress reinstall.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster resume-update</code></dt>
    <dd>Resume in-progress updates.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster set-config</code></dt>
    <dd>Set cluster network and time configuration. Takes JSON configuration from stdin.</dd></dlentry>

  <dlentry>
    <dt><code>tscli cluster set-min-resource-spec</code></dt>
    <dd>Sets min resource configuration of the cluster.</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster show-resource-spec</code></dt>
    <dd>Prints default or min.</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster start</code></dt>
    <dd>Start cluster.</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster status</code></dt>
    <dd>Gives the status of the cluster, including release number, date last updated, number of nodes, pending tables time, and services status.</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster stop</code></dt>
    <dd>Pauses the cluster (but does not stop storage services).</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster update</code></dt>
    <dd>Update existing cluster.</dd></dlentry>
  <dlentry>
    <dt><code>tscli cluster update-hadoop</code></dt>
    <dd>Updates Hadoop/Zookeeper on the cluster.</dd></dlentry>

</dl>


{: id="tscli-command"}
### command

```
tscli command [-h] {run}
```

Command to run on all nodes.

This subcommand has the following option:
<dl>
  <dlentry>
    <dt><code>tscli command run [-h] [--nodes <em>NODES</em>] --dest_dir <em>DEST_DIR</em> [--copyfirst <em>COPYFIRST</em>] [--timeout <em>TIMEOUT</em>] <em>command</em></code></dt>
  <dd>
    <p>These are the parameters:</p>
    <dl>
    <dlentry>
      <dt><code>--nodes <em>NODES</em></code></dt>
      <dd>
        <p>Space-separated IPs of nodes where to run the command.</p>
        <p>The default setting is <code>all</code>.</p></dd></dlentry>
    <dlentry>
      <dt><code>--dest_dir <em>DEST_DIR</em></code></dt>
      <dd>
        <p>Directory to save the files that contain the output from each node.</p>
        <p>This is a mandatory parameter.</p></dd></dlentry>
    <dlentry>
      <dt><code>--copyfirst <em>COPYFIRST</em></code></dt>
      <dd>
        <p>Copy the executable to required nodes first.</p>
        <p>The default setting is <code>False</code>.</p></dd></dlentry>
    <dlentry>
      <dt><code>--timeout <em>TIMEOUT</em></code></dt>
      <dd>
        <p>Timeout waiting for the command to finish.</p>
        <p>The default setting is <code>60</code>.</p></dd></dlentry>
    </dl>
  </dd>
 </dlentry>
</dl>

{: id="tscli-dr-mirror"}
###  dr-mirror

```
tscli dr-mirror [-h] {start,status,stop}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli dr-mirror start</code></dt>
    <dd>Starts a mirror cluster which will continuously recover from a primary cluster.</dd></dlentry>
  <dlentry>
    <dt><code>tscli dr-mirror status</code></dt>
    <dd>Checks whether the current cluster is running in mirror mode.</dd></dlentry>
  <dlentry>
    <dt><code>tscli dr-mirror stop</code></dt>
    <dd>Stops mirroring on the local cluster.</dd></dlentry>
</dl>

{: id="etl"}
### etl

```
tscli etl [-h] {change-password,disable-lw,download-agent,enable-lw,show-lw}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli etl change-password --admin_username <em>admin_user</em> --username <em>Informatica_user</em></code></dt>
    <dd>
      <p>Changes the Informatica Cloud account password used by ThoughtSpot Data Connect.</p>
      <p>Required parameters are:</p>

      <dl>
        <dlentry>
          <dt><code>--admin_username <em>admin_user</em></code></dt>
          <dd>Specifies the Administrator username for ThoughtSpot.</dd></dlentry>
        <dlentry>
          <dt><code>--username <em>Informatica_user</em></code></dt>
          <dd>Specifies the username for the Informatica Cloud.</dd></dlentry>
      </dl></dd></dlentry>

  <dlentry>
    <dt><code>tscli etl disable-lw</code></dt>
    <dd>Disables ThoughtSpot Data Connect.</dd></dlentry>

  <dlentry>
    <dt><code>tscli etl download-agent</code></dt>
    <dd>Downloads the ThoughtSpot Data Connect agent to the cluster.</dd></dlentry>

  <dlentry>
    <dt><code>tscli etl enable-lw [-h] --username <em>USERNAME</em> --thoughtspot_url <em>THOUGHTSPOT_URL</em> --admin_username <em>ADMIN_USERNAME</em> [--groupname <em>GROUPNAME</em>] --org_id <em>ORG_ID</em> [--pin_to  <em>PIN_TO</em>] [--proxy_host <em>PROXY_HOST</em>] [--proxy_port <em>PROXY_PORT</em>] [--proxy_username <em>PROXY_USERNAME</em>] [--max_wait <em>MAX_WAIT</em>]</code></dt>

    <dd>
      <p>Contact ThoughtSpot Support for assistance in setting this up.</p>
      <p>Required parameters are:</p>

      <dl>
        <dlentry>
          <dt><code>--username <em>USERNAME</em></code></dt>
          <dd>Username for Informatica Cloud</dd></dlentry>
        <dlentry>
          <dt><code>--thoughtspot_url <em>THOUGHTSPOT_URL</em></code></dt>
          <dd>URL to reach thoughtspot.</dd></dlentry>
        <dlentry>
          <dt><code>--admin_username <em>ADMIN_USERNAME</em></code></dt>
          <dd>Admin username for ThoughtSpot</dd></dlentry>
        <dlentry>
          <dt><code>--groupname <em>GROUPNAME</em></code></dt>
          <dd></dd></dlentry>
        <dlentry>
          <dt><code>--org_id <em>ORG_ID</em></code></dt>
          <dd>Specifies the Informatica <code>id</code> of the company.<!--For ThoughtSpot, this is `001ZFA`. `org_id` shouldn't include the prefix `Org`. For example, if on Informatica cloud, the `orgid` is `Org003XYZ`, then use only--></dd></dlentry>
        <dlentry>
          <dt><code>--pin_to <em>PIN_TO</em></code></dt>
          <dd>Specifies the IP address to pin to. If you specify an IP to pin to, that node becomes sticky
      to the Informatica agent, and will always be used. Defaults to the public IP
      address of the localhost where this command was run.</dd></dlentry>
        <dlentry>
          <dt><code>--proxy_host <em>PROXY_HOST</em></code></dt>
          <dd>Proxy server host for network access.</dd></dlentry>
        <dlentry>
          <dt><code>--proxy_port <em>PROXY_PORT</em></code></dt>
          <dd>Proxy server port.</dd></dlentry>
        <dlentry>
          <dt><code>--proxy_username <em>PROXY_USERNAME</em></code></dt>
          <dd>Proxy server username.</dd></dlentry>
        <dlentry>
          <dt><code>--max_wait <em>MAX_WAIT</em></code></dt>
          <dd>Maximum time in seconds to wait for Data Connect agent to start.</dd></dlentry>
      </dl></dd></dlentry>

  <dlentry>
     <dt><code>tscli etl show-lw</code></dt>
     <dd>
       <p>Shows the status of ThoughtSpot Data Connect.</p>
       <p>It also returns the Informatica username and OrgId.</p></dd></dlentry>

</dl>
{: id="tscli-event"}

### event
```
tscli event [-h] {list}
```
This subcommand and its options manage event notifications.

This subcommand has the following option:

<dl>
  <dlentry>
    <dt><code>tscli event list [-h] [--include <em>INCLUDE</em>] [--since <em>SINCE</em>] [--from <em>FROM</em>] [--to <em>TO</em>] [--limit <em>LIMIT</em>] [--detail] [--summary_contains <em>SUMMARY_CONTAINS</em>] [--detail_contains <em>DETAIL_CONTAINS</em>] [--attributes <em>ATTRIBUTES</em>]</code></dt>

    <dd>
      <p>The <code>event</code> subcommand accepts these optional flags:</p>

      <dl>

        <dlentry>
          <dt><code>--include <em>INCLUDE</em></code></dt>
          <dd>Options are all, config, notification. Default config. (default: config)</dd></dlentry>
        <dlentry>
          <dt><code>--since <em>SINCE</em></code></dt>
          <dd>Grab events from this time window in the past. Should be a human readable duration string, such as <code>4h</code> (4 hours), <code>30m</code> (30 minutes), <code>1d</code> (1 day).</dd></dlentry>
        <dlentry>
          <dt><code>--from <em>FROM</em></code></dt>
          <dd>Begin timestamp. Must be of the form: <code>yyyymmdd-HH:MM</code>.</dd></dlentry>
        <dlentry>
          <dt><code>--to <em>TO</em></code></dt>
          <dd>End timestamp. Must be of the form: <code>yyyymmdd-HH:MM</code>.</dd></dlentry>
        <dlentry>
          <dt><code>--limit <em>LIMIT</em></code></dt>
          <dd>
            <p>Maximum number of events to fetch.</p>
            <p>The default setting is <code>0</code>.</p></dd></dlentry>
        <dlentry>
          <dt><code>--detail</code></dt>
          <dd>
            <p>Print events in detail format. This is not tabular. Default is a tabular summary.</p>
            <p>The default setting is <code>False</code>.</p></dd></dlentry>
        <dlentry>
          <dt><code>--summary_contains <em>SUMMARY_CONTAINS</em></code></dt>
          <dd>Summary of the event will be checked for this string. Multiple strings to check for can be specified by separating them with <code>|</code> (pipe). The event is returned if it <code>matchesALL</code>. Put single quotes around the param value to prevent undesired glob expansion.</dd></dlentry>
        <dlentry>
          <dt><code>--detail_contains <em>DETAIL_CONTAINS</em></code></dt>
          <dd>Details of the event will be checked for this string. Multiple strings to check for can be specified by separating them with <code>|</code> (pipe). The event is returned if it <code>matches ALL</code>. Put single quotes around the param value to prevent undesired glob expansion.</dd></dlentry>
        <dlentry>
          <dt><code>--attributes <em>ATTRIBUTES</em></code></dt>
          <dd>Specify attributes to match as key=value. Multiple strings to check for can be specified by separating them with <code>|</code> (pipe). The event is returned if it <code>matches ALL</code>. Put single quotes around the param value to prevent undesired glob expansion.</dd></dlentry>
        </dl>
      </dd></dlentry>
  </dl>    

{: id="tscli-feature"}
### feature

```
tscli feature [-h] {get-all-config}
```
This subcommand has the following option:

<dl>
  <dlentry>
    <dt><code>tscli feature get-all-config</code></dt>
    <dd>Gets the configured features in a cluster. The command returns a list of features, such as custom branding, Data Connect, and call home, and informs whether they are enabled or disabled.</dd></dlentry>
</dl>

{: id="tscli-fileserver"}
### fileserver

```
tscli fileserver [-h] {configure,download-release,purge-config,show-config,upload}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli fileserver configure [-h] --user <em>USER</em> [--password <em>PASSWORD</em>]</code></dt>
    <dd>
      <p>Configures the secure file server username and password for file upload/download, and the call home feature.</p>
      <p>You only have to issue this command one time, to set up the connection to the secure file server. Reissue this command if the password changes.</p>
      <p>The parameter <code>PASSWORD</code> is optional. If a password is not specified, you will be prompted to enter it.</p></dd></dlentry>
  <dlentry>
    <dt><code>tscli fileserver download-release [-h] [--user <em>USER</em>] [--password <em>PASSWORD</em>] <em>release</em></code></dt>
    <dd>
      <p>Downloads the specified release file, including its checksum, and verifies the integrity of release bundle.</p>
      <p>You must specify the exact release number, such as <code>5.1.3</code>. </p>
      <p>Before using this command for the first time, you must set up the file server connection using <code>tscli fileserver configure</code>. You can then work with a member of the ThoughtSpot Support team becuase a privileged <code>user</code> and a corresponding <code>password</code> must be specified to download releases.</p></dd></dlentry>
  <dlentry>
    <dt><code>tscli fileserver purge-config</code></dt>
    <dd>Removes the file server configuration.</dd></dlentry>
  <dlentry>
    <dt><code>tscli fileserver show-config</code></dt>
    <dd>Shows the file server configuration.</dd></dlentry>

  <dlentry>
    <dt><code>tscli fileserver upload [-h] [--user <em>USER</em>] [--password <em>PASSWORD</em>] --file_name <em>FILE_NAME</em> --server_dir_path <em>SERVER_DIR_PATH</em></code></dt>

    <dd>
      <p>Uploads the specified file to the directory specified on the secure file server.</p>
      <p>You may optionally specify the <code>user</code> and <code>password</code> to bypass the
  credentials specified when configuring the file server connection with
  <code>tscli fileserver configure</code>. Before using this command for the first time, you
  must set up the file server connection using <code>tscli fileserver configure</code>.</p>

      <p>This uses the following flags:</p>

      <dl>

       <dlentry>
         <dt><code>--user <em>USER</em></code></dt>
         <dd>Username of the fileserver.</dd></dlentry>
       <dlentry>
         <dt><code>--password <em>PASSWORD</em></code></dt>
         <dd>Password of the fileserver. This is required and the command prompts you for it if you do not supply it.</dd></dlentry>
       <dlentry>
         <dt><code>--file_name <em>FILE_NAME</em></code></dt>
         <dd>Local file to upload.</dd></dlentry>
       <dlentry>
         <dt><code>--server_dir_path <em>SERVER_DIR_PATH</em></code></dt>
         <dd>Directory path on fileserver. The <code>SERVER_DIR_PATH</code> parameter specifies the directory for file upload. It is based on customer name, and takes the form <code>/Shared/support/<em>customer_name</em></code>.</dd></dlentry>
   </dl>
   </dd></dlentry>
</dl>

{: id="tscli-firewall"}
### firewall

```
tscli firewall [-h] {close-ports,disable,enable,open-ports,status}
```
This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli firewall close-ports</code></dt>
    <dd>
      <p>Closes specified ports through firewall on all nodes.</p>
      <p>Accepts a comma-separated list of ports. Only closes ports that were previously opened using <code>open-ports</code>, and ignores ports that were not opened with <code>open-port</code>, or closed ports.</p>
      <p>Some essential ports are always kept open, such as <code>ssh</code>; they are not affected by this command
  or by <code>open-ports</code>.</p></dd></dlentry>
  <dlentry>
    <dt><code>tscli firewall disable</code></dt>
    <dd>Disable firewall.</dd></dlentry>
   <dlentry>
     <dt><code>tscli firewall enable</code></dt>
     <dd>Enable firewall.</dd></dlentry>
   <dlentry>
     <dt><code>tscli firewall open-ports --ports <em>ports</em></code></dt>
     <dd>
       <p>Opens specified ports through a firewall on all nodes.</p>
       <p>Accepts a comma-separated list of ports.</p>
       <p>Ignores open ports.</p>
       <p>Some essential ports are always kept open, such as <code>ssh</code>; they are not affected by this command
   or by <code>close-ports</code>.</p></dd></dlentry>

   <dlentry>
     <dt><code>tscli firewall status</code></dt>
     <dd>Shows whether firewall is currently enabled or disabled.</dd></dlentry>
</dl>

{: id="tscli-hdfs"}
### hdfs

```
tscli hdfs [-h] {leave-safemode}
```

This subcommand has the following option:

<dl>
  <dlentry>
    <dt><code>tscli hdfs leave-safemode</code></dt>
    <dd>Command to get HDFS <code>namenodes</code> out of <code>safemode</code>.</dd>
  </dlentry></dl>

{: id="tscli-ispec"}
### ipsec

```
tscli ipsec [-h] {disable,enable,status}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli ipsec disable</code></dt>
    <dd>Disable IPSec</dd></dlentry>
  <dlentry>
    <dt><code>tscli ipsec enable</code></dt>
    <dd>Enable IPSec</dd></dlentry>
  <dlentry>
    <dt><code>tscli ipsec status</code></dt>
    <dd>Show IPSec status on all nodes</dd></dlentry>
</dl>

{: id="tscli-ldap"}
### ldap

```
tscli ldap [-h] {add-cert,configure,purge-configuration}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli ldap add-cert <em>name</em> <em>certificate</em></code></dt>
    <dd>Adds an SSL certificate for LDAP. Use only if LDAP has been configured without
  SSL and you wish to add it. Use <code>name</code> to supply an alias for the
  certificate you are installing.</dd></dlentry>

  <dlentry>
    <dt><code>tscli ldap configure</code></dt>
    <dd>Configures LDAP using an interactive script.</dd></dlentry>

  <dlentry>
    <dt><code>tscli ldap purge-configuration</code></dt>
    <dd>Purges (removes) any existing LDAP configuration.</dd></dlentry>
</dl>

{: id="tscli-logs"}
### logs

```
tscli logs [-h] {collect,runcmd}
```

Manages the logging behavior.

This subcommand has the following options:

<dl>

  <dlentry>
    <dt><code>tscli logs collect [-h] [--include <em>INCLUDE</em>] [--exclude <em>EXCLUDE</em>] [--since <em>SINCE</em>] [--from <em>FROM</em>] [--to <em>TO</em>] [--out <em>OUT</em>] [--maxsize <em>MAXSIZE</em>] [--sizeonly] [--nodes <em>NODES</em>]</code></dt>
    <dd>
      <p>Extracts logs from the cluster. Does not include any logs that have been deleted due to log rotation.</p>
      <p>These parameters have the following values:</p>
      <dl>
        <dlentry>
          <dt><code>--include <em>INCLUDE</em></code></dt>
          <dd>Specifies a comma separated list of logs to include. Each entry is either a
    "selector" or a glob for matching files. Selectors must be among: `all`,
    `orion`, `system`, `ts`. Anything starting with `/` is assumed to be a glob
    pattern, and it is interpreted through `find(1)`. Other entries are ignored. Put single
    quotes around the param value to prevent undesired glob expansion (default:
    `all`)</dd></dlentry>

        <dlentry>
          <dt><code>--exclude <em>EXCLUDE</em></code></dt>
          <dd>Comma separated list of logs to exclude. Applies to the list selected by
  <code>--include</code>. Params are interpreted just like in <code>--include</code>.</dd></dlentry>

       <dlentry>
         <dt><code>--since <em>SINCE</em></code></dt>
         <dd>Grab logs from this time window in the past. Should be a human-readable duration string, such as <code>4h</code> (4 hours), <code>30m</code> (30 minutes), <code>1d</code> (1 day). (default:
    None)</dd></dlentry>

      <dlentry>
        <dt><code>--from <em>FROM</em></code></dt>
        <dd>Timestamp where collection begins; must be of the form <code>yyyymmdd-HH:MM</code>.</dd></dlentry>                
      <dlentry>
        <dt><code>--to <em>TO</em></code></dt>
        <dd>Timestamp where collection ends; must be of the form <code>yyyymmdd-HH:MM</code>.</dd></dlentry>
      <dlentry>
        <dt><code>--out <em>OUT</em></code></dt>
        <dd>
          <p>Tarball path for writing logs from each node.</p>
          <p>The default setting is <code>/tmp/logs.tar.gz</code>.</p></dd></dlentry>
      <dlentry>
        <dt><code>--maxsize <em>MAXSIZE</em></code></dt>
        <dd>Only fetch logs if size is smaller that this value. Can be specified in megabytes or gigabytes, such as <code>100MB</code>, <code>10GB</code>.</dd></dlentry>
      <dlentry>
              <dt><code>--sizeonly</code></dt>
              <dd>
                <p>Do not collect logs. Just report the size.</p>
                <p>The default setting is <code>False</code>.</p></dd></dlentry>
      <dlentry>
        <dt><code>--nodes <em>NODES</em></code></dt>
        <dd>Comma separated list of nodes from where to collect logs.  Skip this to use all nodes.</dd></dlentry>
      </dl>
    </dd></dlentry>

  <dlentry>
    <dt><code>tscli logs runcmd [-h] --cmd <em>CMD</em> [--include <em>INCLUDE</em>] [--exclude <em>EXCLUDE</em>]
   [--since <em>SINCE</em>] [--from <em>FROM</em>] [--to <em>TO</em>] [--outfile <em>OUTFILE</em>] [--outdir <em>OUTDIR</em>] [--cmd_infmt <em>CMD_INFMT</em>] [--cmd_outfmt <em>CMD_OUTFMT</em>] [--nodes <em>NODES</em>]</code></dt>

   <dd>
     <p>Runs a Unix command on logs in the cluster matching the given constraints.  Results are reported as text dumped to standard out, the specified output file, or as tarballs dumped into the specified directory.</p>
    <p>Accepts these optional flags:</p>
    <dl>
    <dlentry>
      <dt><code>--cmd <em>CMD</em></code></dt>
      <dd>
        <p>Unix-Command to be run on the selected logs. Use single quotes to escape
    spaces etc. Note the language used to specify CMDSTR has following rules.</p>
        <ul>
          <li>A logfile and its corresponding result file can be referred by keywords <code>SRCFILE</code> and
    <code>DSTFILE</code>. For example, <code>cp SRCFILE DSTFILE</code>.</li>
          <li>Without any reference to <code>DSTFILE</code> in CMDSTR, <code>DSTFILE</code> will be appended to CMDSTR for output redirection. For example, <code>du -sch SRCFILE</code> gets auto-transtalted to <code>du -sch SRCFILE > DSTFILE</code>.</li>
          <li>Without any reference to SRCFILE, content of log is streamed to CMDSTR by pipe. For example,
    <code>tail -n100 | grep ERROR</code> gets auto-transtalted to <code>cat SRCFILE | tail -n100 |
    grep ERROR > DSTFILE</code>.</li></ul></dd></dlentry>

    <dlentry>
      <dt><code>--include <em>INCLUDE</em></code></dt>
      <dd>
        <p>Comma-separated list of logs to include,each entry is either a "selector" or
    a glob for matching files.</p>
        <p>Selectors must be one of <code>all</code>, <code>orion</code>, <code>system</code>,
    <code>ts</code>.</p>
        <p>Anything that starts with <code>/</code> (forward slash) is assumed to be a glob pattern and
    interpreted through <code>find(1)</code>. Other entries are ignored.</p>
         <p><strong>TIP:</strong> use single quotes around the parameter value to prevent undesired glob expansion.</p>
         <p>The default setting is <code>all</code>.</p></dd></dlentry>

    <dlentry>
      <dt><code>--exclude <em>EXCLUDE</em></code></dt>
      <dd>Comma separated list of logs to exclude. Applies to the list selected by
    <code>--include</code>. Params are interpreted just like in <code>--include</code>.</dd></dlentry>

    <dlentry>
      <dt><code>--since <em>SINCE</em></code></dt>
      <dd>Grab logs from this time window in the past. Should be a human-readable duration string, such as <code>4h</code> (4 hours), <code>30m</code> (30 minutes), <code>1d</code> (1 day).</dd></dlentry>

    <dlentry>
      <dt><code>--from <em>FROM</em></code></dt>
      <dd>Timestamp where collection begins; must be of the form <code>yyyymmdd-HH:MM</code>.</dd></dlentry>

    <dlentry>
      <dt><code>--to <em>TO</em></code></dt>
      <dd>Timestamp where collection ends; must be of the form <code>yyyymmdd-HH:MM</code>.</dd></dlentry>

    <dlentry>
      <dt><code>--outfile <em>OUTFILE</em></code></dt>
      <dd>File path for printing all results. By default printed to <code>stdout</code></dd></dlentry>

    <dlentry>
      <dt><code>--outdir <em>OUTDIR</em></code></dt>
      <dd>Directory path for writing results with original directory structure from each node. Used as an alternative to printing output to <code>outfile/stdout</code>.</dd></dlentry>

    <dlentry>
      <dt><code>--cmd_infmt <em>CMD_INFMT</em></code></dt>
      <dd>Specify if the input file should be compressed or uncompressed before running <code>CMD</code>. <code>C</code> for compressed, <code>U</code> for uncompressed. Don't use this flag if <code>CMD</code> works on both.</dd></dlentry>

    <dlentry>
      <dt><code>--cmd_outfmt <em>CMD_OUTFMT</em></code></dt>
      <dd>Specify if <code>OUTFILE</code> generated by <code>CMD</code> should be compressed or uncompressed. <code>C</code> for compressed, <code>U</code> for uncompressed. Don't use this flag if output file is of the same format as the input file.</dd></dlentry>

    <dlentry>
      <dt><code>--nodes <em>NODES</em></code></dt>
      <dd>Comma separated list of nodes where to run command. Skip this to use all nodes.</dd></dlentry>
   </dl>
  </dd></dlentry></dl>

{: id="tscli-tiles"}
### map-tiles

```
tscli map-tiles [-h] {disable,enable,status}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli map-tiles enable [-h] [--online] [--offline] [--tar TAR] [--md5 <em>MD5</em>]</code></dt>
    <dd>
      <p>Enables ThoughtSpot's map tiles, used when constructing geomap charts.</p>
      <p>If you don't have interest access, you must download the map tiles tar and md5 files, and append the following to the <code>tscli</code> command:</p>

      <dl>
        <dlentry>
          <dt><code>--online</code></dt>
          <dd>
            <p>Download <code>maptiles</code> tar from internet.</p>
            <p>The default setting is <code>True</code></p></dd></dlentry>
        <dlentry>
          <dt><code>--offline</code></dt>
          <dd>
            <p>Using <code>maptiles</code> tar from local disk.</p>
            <p>The default setting is <code>False</code></p></dd></dlentry>
        <dlentry>
          <dt><code>--tar <em>TAR</em></code></dt>
          <dd>Specified tar file for map-tiles.</dd></dlentry>
        <dlentry>
          <dt><code>--md5 <em>MD5</em></code></dt>
          <dd>Specified md5 file for map-tiles.</dd></dlentry>
      </dl>

    </dd></dlentry>  

  <dlentry>
    <dt><code>tscli map-tiles disable</code></dt>
    <dd>Disable map-tiles functionality.</dd></dlentry>

  <dlentry>
    <dt><code>tscli map-tiles status</code></dt>
    <dd>Check whether map-tiles are enabled.</dd></dlentry>

</dl>

{: id="tscli-monitoring"}
### monitoring

```
tscli monitoring [-h] {set-config,show-config}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli monitoring set-config [-h] [--email EMAIL] [--clear_email] [--heartbeat_interval HEARTBEAT_INTERVAL] [--heartbeat_disable] [--report_interval REPORT_INTERVAL] [--report_disable]</code></dt>
    <dd>
      <p>Sets the monitoring configuration.</p>
      <p>The <code>monitoring</code> subcommand accepts the following optional flags:</p>

      <dl>
        <dlentry>
          <dt><code>--email <em>EMAIL</em></code></dt>
          <dd>Comma separated list (no spaces) of email addresses where the cluster will send monitoring information.</dd></dlentry>
        <dlentry>
          <dt><code>--clear_email</code></dt>
          <dd>Disable emails by clearing email configuration. (default: False)</dd></dlentry>
       <dlentry>
         <dt><code>--heartbeat_interval <em>HEARTBEAT_INTERVAL</em></code></dt>
         <dd>Heartbeat email generation interval in seconds. Should be greater than 0.</dd></dlentry>
       <dlentry>
         <dt><code>--heartbeat_disable</code></dt>
         <dd>Disable heartbeat email generation. (default: False)</dd></dlentry>
       <dlentry>
         <dt><code>--report_interval <em>REPORT_INTERVAL</em></code></dt>
         <dd>
           <p>Cluster report email generation interval in seconds.</p>
           <p>Should be greater than <code>0</code>.</p></dd></dlentry>
       <dlentry>
         <dt><code>--report_disable</code></dt>
         <dd>
           <p>Disable cluster report email generation.</p>
           <p>The default setting is <code>False</code>.</p></dd></dlentry>

      </dl>
    </dd></dlentry>

    <dlentry>
      <dt><code>tscli monitoring show-config</code></dt>
      <dd>Shows the monitoring configuration.</dd></dlentry>

</dl>

{: id="tscli-nas"}
### nas

```
tscli nas [-h] {ls,mount-cifs,mount-nfs,unmount}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli nas ls [-h]</code></dt>
    <dd>List mounts managed by NAS mounter service.</dd></dlentry>

 <dlentry>
    <dt><code>tscli nas mount-cifs [-h] --server <em>SERVER</em> [--path_on_server <em>PATH_ON_SERVER</em>] --mount_point <em>MOUNT_POINT</em>--username <em>USERNAME</em> --password <em>PASSWORD</em> [--uid <em>UID</em>] [--gid <em>GID</em>] [--options <em>OPTIONS</em>]</code></dt>
    <dd>

    <p>Mounts a CIFS device on all nodes.</p>
    <p>Accepts the following optional flags:</p>

    <dl>
      <dlentry>
      <dt><code>--server <em>SERVER</em></code></dt>
      <dd>
        <p>IP address or DNS name of CIFS service.</p>
        <p>For example, <code>10.20.30.40</code>.</p></dd></dlentry>

     <dlentry>
       <dt><code>--path_on_server <em>PATH_ON_SERVER</em></code></dt>
       <dd>
         <p>Filesystem path on the CIFS source server to mount NAS.</p>
         <p>For example, <code>/a</code>.</p>
         <p>The default setting is <code>/</code> (forward slash).</p></dd></dlentry>

     <dlentry>
       <dt><code>--mount_point <em>MOUNT_POINT</em></code></dt>
       <dd>
         <p>Directory on all cluster nodes where to mount the NFS filesystem on the target.</p>
         <p>If this directory does not exist, the command creates it. If this directory already exists, the command uses it for mounting.</p>
         <p>For example, <code>/mnt/external</code>.</p></dd></dlentry>

      <dlentry>
        <dt><code>--username <em>USERNAME</em></code></dt>
        <dd>Username to connect to the CIFS filesystem</dd></dlentry>

      <dlentry>
        <dt><code>--password <em>PASSWORD</em></code></dt>
        <dd>CIFS password for <code>--username</code></dd></dlentry>

      <dlentry>
        <dt><code>--uid <em>UID</em></code></dt>
        <dd>
          <p>The <em>UID</em> that owns all files or directories on the mounted filesystem when the server does not provide ownership information.</p>
          <p>See <code>man mount.cifs</code> for more details.</p>
          <p>The default setting is <code>1001</code>.</p></dd></dlentry>

      <dlentry>
        <dt><code>--gid <em>GID</em></code></dt>
        <dd>
          <p>The <code>GID</code> that owns all files or directories on the mounted filesystem when the server does not provide ownership information.</p>
          <p>See <code>man mount.cifs</code> for more details.</p>
          <p>The default is <code>1001</code>.</p></dd></dlentry>

      <dlentry>
        <dt><code>--options <em>OPTIONS</em></code></dt>
        <dd>
          <p>Other command-line options to forward to the <code>mount.cifs</code> command.</p>
          <p>The default setting is <code>noexec</code>.</p></dd></dlentry>
     </dl>

    </dd></dlentry>

  <dlentry>
    <dt><code>tscli nas mount-nfs [-h] --server <em>SERVER</em> [--protocol <em>PROTO</em> --path_on_server <em>PATH_ON_SERVER</em>] --mount_point <em>MOUNT_POINT</em> [--options <em>OPTIONS</em>]</code></dt>
    <dd>
      <p>Mounts a NFS device on all nodes.</p>
      <p>Accepts the following optional flags:</p>

      <dl>
        <dlentry>
          <dt><code>--server <em>SERVER</em></code></dt>
          <dd>IP address or DNS name of NFS service. For example, <code>10.20.30.40</code>.</dd></dlentry>
        <dlentry>
          <dt><code>--path_on_server <em>PATH_ON_SERVER</em></code></dt>
          <dd>
            <p>Filesystem path on the NFS source server.</p>
            <p>For example, <code>/a/b/c/d</code>.</p>
            <p>The default setting is <code>/</code>.</p></dd></dlentry>

        <dlentry>
          <dt><code>--mount_point <em>MOUNT_POINT</em></code></dt>
          <dd>
            <p>Directory on all cluster nodes of the target system.</p>
            <p>If this directory does not exist, the command creates it. If this directory already exists, the command uses it for mounting.</p>
            <p>For example, <code>/mnt/external</code>.</p></dd></dlentry>

        <dlentry>
          <dt><code>--options <em>OPTIONS</em></code></dt>
          <dd>
            <p>Command-line options to mount.</p>
            <p>The default setting is <code>noexec</code>.</p></dd></dlentry>
        <dlentry>
          <dt><code>--protocol <em>PROTO</em></code></dt>
          <dd>
            <p>One of <code>nfs</code> or <code>nfs4</code>.</p>
            <p>The default is <code>nfs</code>.</p></dd></dlentry>
       </dl>
       </dd>
       </dlentry>

  <dlentry>
    <dt><code>tscli nas unmount [-h] --dir <em>DIR</em></code></dt>
    <dd>
      <p>Unmounts all devices from the specified directory, <code>DIR</code>.</p>
      <p>This command returns an error if nothing is currently mounted on this directory through <code>tscli nas mount</code>.</p></dd></dlentry>

</dl>

{: id="tscli-node"}
### node

```
tscli node [-h] {check,ls,reinstall-os,resume-reinstall-os,status}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli node check [-h] [--select {reinstall-preflight}] [--secondary <em>SECONDARY</em>]</code></dt>
    <dd>
      <p>Run checks per node.</p>
      <p>Accepts the following flags:</p>

      <dl>
        <dlentry>
          <dt><code>--select {reinstall-preflight}</code></dt>
          <dd>
            <p>Select the type of node check</p>
            <p>The default setting is <code>reinstall-preflight</code>.</p></dd></dlentry>
        <dlentry>
          <dt><code>--secondary <em>SECONDARY</em></code></dt>
          <dd>
            <p>Secondary drive for <code>reinstall-preflight</code>.</p>
            <p>The default setting is <code>sdd</code>.</p></dd></dlentry>
      </dl>
    </dd></dlentry>

   <dlentry>
      <dt><code>tscli node ls [-h] [--type {all,healthy,not-healthy}]</code></dt>
      <dd>
        <p>Filter by node state.</p>
        <p>The default setting is <code>all</code>.</p>
      </dd></dlentry>

   <dlentry>
      <dt><code>tscli node reinstall-os [-h] [--secondary <em>SECONDARY</em>] [--cluster]</code></dt>
      <dd>
        <p>Reinstall OS on a node.</p>
        <p>Accepts the following flags:</p>

        <dl>
          <dlentry>
            <dt><code>--secondary <em>SECONDARY</em></code></dt>
            <dd>
              <p>Secondary drive for reinstall.</p>
              <p>The default setting is <code>sdd</code>.</p></dd></dlentry>
          <dlentry>
          <dt><code>--cluster</code></dt>
          <dd>
            <p>The node part of a cluster.</p>
            <p>The default setting is <code>False</code>.</p></dd></dlentry>
        </dl>
     </dd></dlentry>

   <dlentry>
    <dt><code>tscli node resume-reinstall-os</code></dt>
    <dd>Resume in-progress reinstall</dd></dlentry>

</dl>

{: id="tscli-onboarding"}
### onboarding

```
tscli onboarding [-h] {configure,purge-configuration}
```

Onboarding helps application administrators to bulk update user information.
In particular, it configures various in-app email options.

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli onboarding --help</code></dt>
    <dd>Prints help for the onboarding configuration</dd></dlentry>
  <dlentry>
    <dt><code>tscli onboarding configure</code></dt>
    <dd>
      <p>Configures the onboarding through series of steps.</p>
      <p>Asks the user to provide information necessary for onboarding-related functionality, such as the following:</p>
      <ol>
        <li>Company name</li>
        <li>Product name</li>
        <li>
          <p>Should welcome emails be enabled?</p>
          <ul>
            <li>Send welcome emails to new users</li>
            <li>Support email</li>
            <li>Custom message to include in emails</li>
            <li>URL of the ThoughtSpot instance</li>
            <li>URL of the ThoughtSpot documentation</li>
          </ul></li></ol></dd></dlentry>
  <dlentry>
    <dt><code>tscli onboarding purge-configuration</code></dt>
    <dd>This command removes all onboarding configuration.</dd></dlentry>
</dl>

{: id="tscli-patch"}
### patch

```
tscli patch [-h] {apply,ls,resume-apply,resume-rollback,rollback}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli patch apply [-h] [<em>release</em>]</code></dt>
    <dd>
      <p>Apply the patch on an existing cluster.</p>
      <p>Accepts the following flag:</p>
      <dl>
        <dlentry>
          <dt><code>release</code></dt>
          <dd>The relative path to the patch tar ball.</dd></dlentry></dl>
      </dd></dlentry>

    <dlentry>
      <dt><code>tscli patch ls [-h]  [--applied] [--rolled_back] [--service <em>SERVICE</em>] [--md5 <em>MD5</em>] [--history]</code></dt>
      <dd>
        <p>Lists the patches currently applied.</p>
        <p>Accepts the following flags:</p>

        <dl>
          <dlentry>
            <dt><code>--applied</code></dt>
            <dd>
              <p>Show only the patches applied since last full release.</p>
              <p>The default setting is <code>False</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--rolled_back</code></dt>
            <dd>
              <p>Show only the patches rolled back since last full release.</p>
              <p>The default setting is <code>False</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--service <em>SERVICE</em></code></dt>
            <dd>
              <p>Show patches filtered by service.</p>
              <p>The default setting is <code>None</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--md5 <em>MD5</em></code></dt>
            <dd>
              <p>Shows the details of the patch specified.</p>
              <p>The default setting is <code>None</code>.</p></dd></dlentry>
          <dlentry>
            <dt><code>--history</code></dt>
            <dd>
              <p>Shows the history of all patch apply/rollback release.</p>
              <p>The default setting is <code>False</code>.</p></dd></dlentry>
        </dl>
        </dd></dlentry>

    <dlentry>
      <dt><code>tscli patch resume-apply [-h]</code></dt>
      <dd>Resume patch apply</dd></dlentry>

    <dlentry>
      <dt><code>tscli patch resume-rollback [-h]</code></dt>
      <dd>Resume patch roll-backup</dd></dlentry>

    <dlentry>
      <dt><code>tscli patch rollback [-h]</code></dt>
      <dd>Rollback the patch from an existing cluster</dd></dlentry>

</dl>    

{: id="tscli-rpackage"}
### rpackage

```
tscli rpackage [-h] {add,delete,list}
```

Manages R packages available to SpotIQ.

This subcommand has the following options:

<dl>
<dt><code>tscli rpackage add [-h] [--repo <em>REPO</em>] [--timeout <em>TIMEOUT</em>] [--dest_dir <em>DEST_DIR</em>] [--nodes <em>NODES</em>] <em>package_name</em></code></dt>
<dd>
<p>Command to add an R package, <code>package_name</code>, to the cluster.</p>
<p>Accepts the following flags:</p>
<dl>
<dt><code>--repo <em>REPO</em></code></dt>
<dd>Specify the url of a specific repository to download packages.</dd>
<dt><code>-timeout  <em>REPO</em></code></dt>
<dd>Timeout waiting for the R Package to be installed (default: 60)</dd>
<dt><code>--dest_dir <em>REPO</em></code></dt>
<dd>Directory where output of this command will be placed</dd>
<dt><code>--nodes <em>NODES</em></code></dt>
<dd>
<p>Space-separated list of IPs for nodes where to run the command.</p>
<p>The default setting is <code>all</code>.</p>
</dd>
<dt><code>tscli rpackage add [-h] [--timeout <em>TIMEOUT</em>] [--dest_dir <em>DEST_DIR</em>] [--nodes <em>NODES</em>] <em>package_name</em></code></dt>
<dd>
<p>Command to delete an installed R package from the cluster.</p>
<p>Accepts the following flags:</p>
<dl>
<dt><code>--timeout <em>REPO</em></code></dt>
<dd>
<p>Timeout waiting before removing the R package.</p>
<p>The default is 60</p>
</dd>
<dt><code>--dest_dir <em>REPO</em></code></dt>
<dd>Directory where to save the output of this command.</dd>
<dt><code>--nodes <em>NODES</em></code></dt>
<dd>
<p>Space-separated list of node IPs where to run the command.</p>
<p>The default setting is <code>all</code>.</p>
</dd>
</dl>
</dd>
<dt><code>tscli rpackage list [-h] [--detailed]</code></dt>
<dd>List all R packages installed on the cluster.</dd>
</dl>
</dd>
</dl>

{: id="tscli-saml"}
### saml

```
tscli saml [-h] {configure,purge-configuration}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli saml configure [-h]</code></dt>
    <dd>Configures SAML.</dd></dlentry>
  <dlentry>
    <dt><code>tscli saml purge-configuration</code></dt>
    <dd>Purges any existing SAML configuration.</dd></dlentry>
</dl>

To see a list of prerequisites, refer to [Configure SAML]({{ site.baseurl }}/admin/setup/configure-SAML-with-tscli.html).

{: id="tscli-scheduled-pinboards"}
### scheduled-pinboards

```
tscli scheduled-pinboards [-h] {disable,enable}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli scheduled-pinboards disable [-h]</code></dt>
    <dd>Disable scheduled pinboards for this cluster.</dd></dlentry>
  <dlentry>
    <dt><code>tscli scheduled-pinboards enable [-h]</code></dt>
    <dd>Enables scheduled pinboards, which is disabled in prod clusters by default.</dd></dlentry>
  </dl>

{% include note.html content="When you enable scheduled pinboards, you should
also configure a whitelist of intended email domains. Contact ThoughtSpot
Support for help on how to configure a whitelist." %}

{: id="tscli-smtp"}
###  smtp

```
tscli smtp [-h] {remove-mailfromname,remove-mailname,remove-relayhost,remove-saslcredentials,reset-canonical-mapping,set-canonical-mapping,set-mailfromname,set-mailname,set-relayhost,set-saslcredentials,show-canonical-mapping,show-mailfromname,show-mailname,show-relayhost}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli smtp remove-mailfromname</code></dt>
    <dd>Removes current cluster mail from name.</dd></dlentry>
  <dlentry>
    <dt><code>tscli smtp remove-mailname</code></dt>
    <dd>Removes current cluster mail name.</dd></dlentry>
<dlentry>
    <dt><code>tscli smtp remove-relayhost</code></dt>
  <dd>Removes current cluster relay host.</dd></dlentry>
<dlentry>
    <dt><code>tscli smtp remove-saslcredentials</code></dt>
  <dd>Clears SASL credentials and disables SMTP AUTH.</dd></dlentry>

<dlentry>
    <dt><code>tscli smtp reset-canonical-mapping</code></dt>
  <dd>Deletes the current postmap mapping.</dd></dlentry>

<dlentry>
  <dt><code>tscli smtp set-canonical-mapping [-h] <em>new_key</em> <em>new_value</em></code></dt>
  <dd>Sets a new Postmap mapping.</dd></dlentry>
<dlentry>
  <dt><code>tscli smtp set-mailfromname <em>mailfromname</em></code></dt>
  <dd>Sets the name and an email address from where email alerts are sent for the cluster.</dd></dlentry>
<dlentry>
  <dt><code>tscli smtp set-mailname <em>mailname</em></code></dt>
  <dd>Sets the mailname and a domain from where email alerts are sent for the cluster.</dd></dlentry>
<dlentry>
  <dt><code>tscli smtp set-relayhost [-h] [--force <em>FORCE</em>] relayhost</code></dt>
  <dd>
    <p>Sets the Relay Host for SMTP (email) sent from the cluster.</p>
    <p>Accepts the following flag:</p>
      <dl>
        <dlentry>
        <dt><code>--force <em>FORCE</em></code></dt>
          <dd><p>Set even if relay host is not accessible.</p>
            <p>The default setting is <code>False</code>.</p></dd></dlentry>
    </dl>
  </dd></dlentry>
<dlentry>
    <dt><code>tscli smtp set-saslcredentials</code></dt>
  <dd>Sets SASL credentials and enables SMTP AUTH</dd></dlentry>

<dlentry>
  <dt><code>tscli smtp show-canonical-mapping</code></dt>
  <dd>Shows the current postmap mapping.</dd></dlentry>
<dlentry>
    <dt><code>tscli smtp show-mailfromname</code></dt>
  <dd>Shows the mailname, from which email alerts are sent, for the cluster.</dd></dlentry>
<dlentry>
    <dt><code>tscli smtp show-mailname</code></dt>
  <dd>Shows the mailname, where email alerts are sent, for the cluster.</dd></dlentry>
<dlentry>
    <dt><code>tscli smtp show-relayhost</code></dt>
  <dd>
    <p>Shows the  for SMTP (email) sent from the cluster.</p>
    <p>If there a relay host is not configured, the command returns <code>NOT FOUND</code>.</p></dd></dlentry>
   </dl>

{: id="tscli-snapshot"}
### snapshot

```
tscli snapshot [-h] {backup,create,delete,ls,pin,restore,unpin,update-ttl}
```

To learn more about snapshots and backups, see the [Understand the backup strategies]({{ site.baseurl }}/admin/backup-restore/choose-strategy.html) documentation.

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli snapshot backup [-h] [--mode {full,light,dataless}] [--type {full,incremental}] [--base <em>BASE</em>] [--storage_type {local,nas}] [--remote] <em>name</em> <em>out</em></code></dt>
  <dd>
    <p>Pull snapshot out as a backup.</p>
    <p>Accepts the following flags:</p>
      <dl>
        <dlentry>
          <dt><code>--mode {full,light,dataless}</code></dt>
          <dd>Mode of backups. (default: `full`)</dd></dlentry>
        <dlentry>
          <dt><code>name</code></dt>
          <dd>Name of snapshot to pull out as a backup. To list all snapshots, run `tscli snapshot ls`.</dd></dlentry>
        <dlentry>
          <dt><code>out</code></dt>
          <dd>Directory where backup will be written, must not already exist.</dd></dlentry>
        <dlentry>
          <dt><code>--type {full,incremental}</code></dt>
          <dd>
            <p>Type of backup.</p>
            <p>Incremental backup is not implemented.</p>
            <p>The default setting is <code>full</code>.</p>
        </dd></dlentry>
      <dlentry>
        <dt><code>--base <em>BASE</em></code></dt>
        <dd>
          <p>Based snapshot name for incremental backup.</p>
          <p>Incremental backup not implemented yet.</p>
        </dd></dlentry>
      <dlentry>
        <dt><code>storage_type {local,nas}</code></dt>
        <dd>Storage type of output directory. (default: `local`)</dd></dlentry>
      <dlentry>
        <dt><code>--remote</code></dt>
        <dd>Take backup through Orion master. (default: `True`)</dd></dlentry></dl>
    </dd></dlentry>
  <dlentry>
    <dt><code>tscli snapshot create [-h] <em>name</em> <em>reason</em> <em>ttl</em></code></dt>
    <dd>
      <p>Creates a new snapshot with the specified <code>name</code> and <code>reason</code>.</p>
      <p>This command does not accept <code>.</code> (periods). It does accept <code>-</code> (dashes or hyphens).</p>
      <p>The <code>ttl</code> parameter is the number of days after which this snapshot is automatically deleted. A value of <code>-1</code> disables automatic deletion.</p>
   </dd>
</dlentry>
<dlentry>
  <dt><code>tscli snapshot pin [-h] <em>name</em></code></dt>
  <dd>Pins a snapshot so it cannot be deleted or garbage collected.</dd></dlentry>
<dlentry>
  <dt><code>tscli snapshot delete [-h] <em>name</em></code></dt>
  <dd>Deletes the named snapshot.</dd></dlentry>
<dlentry>
  <dt><code>tscli snapshot ls [-h]</code></dt>
  <dd>Lists available snapshots.</dd></dlentry>
<dlentry>
  <dt><code>tscli snapshot restore [-h] [--allow_release_change] [--only_service_state] <em>name</em></code></dt>
  <dd>
    <p>Restores cluster to an existing snapshot.</p>
    <p>Accepts the following flags:</p>
    <dl>
      <dlentry>
        <dt><code>--allow_release_change</code></dt>
        <dd>Allow restoration to a snapshot at a different release. (default: `False`)</dd></dlentry>
      <dlentry>
        <dt><code>--only_service_state</code></dt>
        <dd>Restore only service state. (default: `False`)</dd></dlentry></dl></dd></dlentry>
<dlentry>
  <dt><code>tscli snapshot unpin [-h] <em>name</em></code></dt>
  <dd>Unpin a snapshot so it can be deleted or garbage-collected</dd></dlentry>
<dlentry>
  <dt><code>tscli snapshot update-ttl [-h] [--disable <em>DISABLE</em>] <em>name</em> <em>ttl</em></code></dt>
  <dd><p>Updates manual snapshot garbage collection policy.</p>
    <p>Accepts the following flags:</p>
    <dl>
      <dlentry>
        <dt><code>name</code></dt>
        <dd>Specifies which snapshot to update.</dd></dlentry>
      <dlentry>
        <dt><code>ttl</code></dt>
        <dd>Extends the manual snapshot</dd></dlentry>
      <dlentry>
        <dt><code>ttl</code></dt>
        <dd><p>This is the "time-to-live" value.</p>
          <p>Use a positive value to increase <code>ttl</code>. Use negative values to decrease it.</p></dd></dlentry>
      <dlentry>
        <dt><code>--disable <em>DISABLE</em></code></dt>
        <dd><p>Disable manual snapshot garbage collection.</p>
          <p>Setting this value to `True` will override any `ttl` value. (default: False)</p></dd></dlentry></dl></dd></dlentry>
</dl>

{: id="tscli-snapshot-policy"}
### snapshot-policy

```
tscli snapshot-policy [-h] {disable,enable,show,update}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli snapshot-policy disable [-h]</code></dt>
    <dd>Disable snapshot policy.</dd></dlentry>
  <dlentry>
    <dt><code>tscli snapshot-policy enable -h</code></dt>
    <dd>Enable specified snapshot policy.</dd></dlentry>
  <dlentry>
    <dt><code>tscli snapshot-policy show [-h]</code></dt>
    <dd>Show snapshot policy.</dd></dlentry>
  <dlentry>
    <dt><code>tscli snapshot-policy update [-h] [--config <em>CONFIG</em>]</code></dt>

    <dd>
      <p>Update periodic snapshot config. This takes the following parameter</p>
      <dl>
        <dlentry>
          <dt><code>--config <em>CONFIG</em></code></dt>
          <dd>Text format of periodic backup policy config.</dd></dlentry></dl>
    </dd></dlentry>          
</dl>

{: id="tscli-spot"}
### spot

```
tscli spot [-h] {enable}
```

Enables Spot integration.  

This subcommand has the following option:

<dl>
  <dlentry>
    <dt><code>tscli spot enable [-h] --token <em>TOKEN</em> --thoughtspot_url <em>THOUGHTSPOT_URL</em> [--cache_timeout <em>CACHE_TIMEOUT</em>]</code></dt>
    <dd>
      <p>The <code>spot</code> subcommand accepts the following optional flags:</p>

      <dl>
        <dlentry>
          <dt><code>--token <em>TOKEN</em></code></dt>
          <dd>Slack authorization token for Spot bot. This is required. You receive this token when your Slack administrator adds the Spot application.</dd></dlentry>

      <dlentry>
        <dt><code>--thoughtspot_url <em>THOUGHTSPOT_URL</em></code></dt>
        <dd>
          <p>URL for the ThoughtSpot application.</p>
          <p>This is required.</p></dd></dlentry>
      <dlentry>
        <dt><code>--cache_timeout <em>CACHE_TIMEOUT</em></code></dt>
        <dd>
          <p>Internal cache timeout.</p>
          <p>The default setting is <code>60000</code>.</p></dd></dlentry>
     </dl></dd></dlentry>

</dl>

{: id="tscli-ssl"}
### ssl

```
tscli ssl [-h] {add-cert,clear-min-tls-version,off,on,rm-cert,set-min-tls-version,status,tls-status}
```        
This subcommand manages the SSL configuration.

To use SSL, the following ports must be open:
- 443
- 80

This subcommand has the following options:

<dl>

  <dlentry>
    <dt><code>tscli ssl add-cert [-h] <em>key</em> <em>certificate</em></code></dt>
    <dd>Adds an SSL certificate, key pair.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl clear-min-tls-version [-h]</code></dt>
    <dd>Clears any customizations for the minimum TLS version to support.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl off</code></dt>
    <dd>Disables SSL. Disabling SSL will stop users from seeing a security warning
    when accessing ThoughtSpot from a browser if there is no SSL certificate
    installed.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl on [-h]</code></dt>
    <dd>If SSL is enabled and there is no certificate, users will see a security warning when accessing ThoughtSpot from a browser.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl rm-cert</code></dt>
    <dd>Removes the existing SSL certificate, if any.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl set-min-tls-version [-h] {1.0,1.1,1.2}</code></dt>
    <dd>Sets the minimum supported TLS version. Sets the minimum SSL version to be supported by the ThoughtSpot application. Please ensure that client browsers are enabled for this version or newer.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl status</code></dt>
    <dd>Shows whether SSL authentication is enabled or disabled.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli ssl tls-status [-h]</code></dt>
    <dd>Prints the status of TLS support.</dd>
  </dlentry>

</dl>

{: id="tscli-sssd"}

### sssd

```
tscli sssd {enable, disable, set-sudo-group, clear-sudo-group}
```

This subcommand uses system security services daemon (SSSD), and has the following options:

<dl>

<dlentry>
  <dt><code>tscli sssd enable --user <em>USER</em> --domain <em>DOMAIN</em></code></dt>
  <dd>Enables system Active Directory (AD) user access on a single node. You will be
   prompted for password credentials. The user must have permission to join a
   computer or VM to the domain.</dd>
 </dlentry>

 <dlentry>
   <dt><code>tscli sssd disable</code></dt>
    <dd></dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli sssd set-sudo-group <em>ACTIVE_DIRECTORY_GROUP_NAME</em></code></dt>
    <dd>Allows <code>sudo</code> permissions for AD group.</dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli sssd clear-sudo-group <em>ACTIVE_DIRECTORY_GROUP_NAME</em></code></dt>
    <dd>Clears any set AD sudo group.</dd>
  </dlentry>

</dl>

For more about setting up Active Directory access, see [Enable Active Directory based access]({{ site.baseurl }}/admin/setup/active-directory-based-access.html).

{: id="tscli-storage"}
### storage

```
tscli storage [-h] {gc,df}
```

This subcommand has the following options:

<dl>

  <dlentry>
    <dt><code>tscli storage gc [-h] [--log_age <em>LOG_AGE</em>] [--force] [--localhost_only]</code></dt>
    <dd>
    Garbage collect unused storage.
    <p>Before issuing this command, you must stop the cluster using <code>=tscli
    cluster stop</code>.</p>
    <p>After garbage collection finishes, you can restart the cluster with <code>tscli cluster start</code>.</p>

    <p>This command frees space in the following directories:</p>

    <pre>/tmp
    /usr/local/scaligent/logs/
    /export/logs/orion
    /export/logs/oreo
    /export/logs/hadoop
    /export/logs/zookeeper
    cores</pre>

    <p>The <code>storage</code> subcommand accepts these optional flags:</p>

    <dl>

      <dlentry><dt><code>--log_age <em>LOG_AGE</em></code></dt>
        <p>Deletes logs older than these many hours. Use a non-zero value, becuase zero deletes all temporary files, including the ones that are closed temporarily, while they are passed from one component to the next.</p>
        <p>The default setting is <code>4</code>.</p>
      </dlentry>

      <dlentry><dt><code>--force</code></dt>
        <p>Forces deletion of all logs and temporary files regardless of age. This must
        only be run on a stopped cluster.</p>
        <p>The default setting is <code>False</code>.</p>
      </dlentry>

      <dlentry><dt><code>--localhost_only</code></dt>
        <p>If used, only the logs on the localhost will be removed. If not specified, the
           command acts on the entire cluster.</p>
      </dlentry>
    </dl>
    </dd>
  </dlentry>

  <dlentry>
    <dt><code>tscli storage df [--mode disk|hdfs]</code></dt>
    <dd>Checks the disk usage on the relevant mounts. Returns output similar to the Linux system command <code>df -h <em>directory</em></code>.</dd>
  </dlentry>

</dl>

{: id="tscli-support"}
### support

```
tscli support [-h]
   {bundle, restart-remote, rm-admin-email, rm-admin-phone, rm-feedback-email,
    set-admin-email, set-admin-phone, set-debug-ui-password, set-feedback-email,
    set-remote, show-admin-email, show-admin-phone, show-feedback-email,
    show-remote, start-remote, stop-remote}

```
This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli support bundle [-h] [--include <em>INCLUDE</em>] [--exclude <em>EXCLUDE</em>] [--list_selectors] [--since <em>SINCE</em>] [--from <em>FROM</em>] [--to <em>TO</em>] [--out <em>OUT</em>] [--nodes <em>NODES</em>]</code></dt>

   <dd>
      <dl>

        <dlentry>
          <dt><code>--include <em>INCLUDE</em></code></dt>
          <dd>
            <p>Comma-separated list of selectors to include. Each entry is
      either a "selector" or a glob for matching files. To see the list of valid
      selectors, run this command with <code>--list_selectors</code>. You may also specify <code>all</code> to get all selectors and logs, and <code>basic</code> to get only the basic selectors.</p>
            <p>Selectors can be used for logs collection: <code>all</code>, <code>orion</code>, <code>system</code>, <code>ts</code>, or the name of a service.</p>
            <p>Anything that starting with <code>/</code> (forward slash) is assumed to be a glob
      pattern, and it is interpreted through <code>find(1)</code>. Other entries are ignored.</p>
            <p><strong>TIP:</strong> Use single quotes around the param value to prevent undesired glob expansion. Use <code>all</code> to collect all selectors and all logs.</p>
            <p>The default setting is <code>all_but_logs</code>.</p></dd></dlentry>

        <dlentry>
          <dt><code>--exclude <em>EXCLUDE</em></code></dt>
          <dd>
            <p>Comma-separated list of selectors to exclude. Applies to the
      list selected by <code>--include</code>. Params are interpreted in the same manner as in <code>--include</code>.</p>
           <p>Use the special keyword <code>logs</code> to exclude logs collection altogether.</p>
           <p>There is no default setting.</p></dd></dlentry>

        <dlentry>
          <dt><code>--list_selectors</code></dt>
          <dd>
            <p>List the selectors available for <code>--include</code> and <code>--exclude</code>, and then exit.</p>
            <p>The default setting is <code>False</code>.</p></dd></dlentry>

        <dlentry>
          <dt><code>--since <em>SINCE</em></code></dt>
          <dd><p>Grabs logs from this time window in the past. Should be a human-readable duration string, such as <code>4h</code> (4 hours), <code>30m</code> (30 minutes), <code>1d</code> (1 day).</p>
          <p>There is no default setting.</p></dd></dlentry>

        <dlentry>
          <dt><code>--from <em>FROM</em></code></dt>
          <dd>
            <p>Timestamp when collection begins. Must be of the form: <code>yyyymmdd-HH:MM</code>.</p>
            <p>There is no default setting.</p></dd></dlentry>

        <dlentry>
          <dt><code>--to <em>TO</em></code></dt>
          <dd>
            <p>Timestamp when collection ends. Must be of the form: <code>yyyymmdd-HH:MM</code>.</p>
            <p>There is no default setting.</p></dd></dlentry>

        <dlentry>
          <dt><code>--out <em>OUT</em></code></dt>
          <dd>
            <p>Tarball path for dumping the support bundle.</p>
            <p>The default setting is <code>/tmp/support_bundle.tar.gz</code>.</p></dd></dlentry>

        <dlentry>
          <dt><code>--nodes <em>NODES</em></code></dt>
          <dd>
            <p>Comma separated list of nodes from where to collect logs. Skip this to use all
        nodes.</p>
            <p>There is no default setting.</p></dd></dlentry>

      </dl></dd></dlentry>

<dlentry>
  <dt><code>tscli support restart-remote</code></dt>
  <dd>Restarts remote support.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support rm-admin-email</code></dt>
  <dd>Removes the email address for contacting the customer administrator. Replaces it with the default ThoughtSpot Support email address.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support rm-feedback-email</code></dt>
  <dd>Removes the email address for product feedback. Replaces it with the default ThoughtSpot Support email address</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support rm-admin-phone</code></dt>
  <dd>Removes the phone number for contacting the customer administrator. Replaces it with the default ThoughtSpot Support phone number</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support rm-feedback-email</code></dt>
  <dd>Removes the email for sending feedback out of the system. To set a blank email address, issue the command <code>tscli support set-feedback-email</code>.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support set-admin-email <em>email</em></code></dt>
  <dd>Sets the email address for contacting the customer administrator. To display a blank email address, issue the command <code>tscli support set-admin-email</code>.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support set-feedback-email <em>email</em></code></dt>
  <dd>Sets the email address for sending feedback. To display a blank email address, issue the command <code>tscli support set-feedback-email</code>.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support set-admin-phone <em>phone_number</em></code></dt>
  <dd>Sets the phone number for contacting the customer administrator. Specify a phone number using any value, such as <code>+1 800-508-7008 Ext. 1</code>. To display a blank phone number, issue the command <code>tscli support set-admin-phone</code>.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support set-remote [-h] [--addr <em>ADDR</em>] [--user <em>USER</em>]</code></dt>
  <dd>Configures the cluster for remote support through SSH tunneling, where <em><code>ADDR</code></em> is the address of support, such as <code>tunnel.thoughtspot.com</code>, and <em><code>USER</code></em> is the support username.</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support show-admin-email</code></dt>
  <dd>Shows the email address for customer administrator, if set</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support show-feedback-email</code></dt>
  <dd>Shows the email address for product feedback, if set</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support show-admin-phone</code></dt>
  <dd>Shows the phone number for customer administrator, if set</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support show-remote</code></dt>
  <dd>Shows the status and configuration of remote support</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support start-remote</code></dt>
  <dd>Starts remote support</dd>
</dlentry>

<dlentry>
  <dt><code>tscli support stop-remote</code></dt>
  <dd>Stops remote support</dd>
</dlentry>
</dl>

{: id="tscli-tokenauthentication"}
### tokenauthentication

```
tscli cli tokenauthentication [-h] {disable,enable}
```

This subcommand has the following options:

<dl>
  <dlentry>
    <dt><code>tscli cli tokenauthentication enable</code></dt>
    <dd>Generates a token</dd>
  </dlentry>
<dlentry>
  <dt><code>tscli cli tokenauthentication disable</code></dt>
  <dd>Purges token login configuration</dd></dlentry>
</dl>
