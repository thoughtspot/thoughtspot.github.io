---
title: [tscli --advcommand reference]
tags:
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
The tscli command line interface is an administration interface for the ThoughtSpot instance. Use tscli to take snapshots (backups) of data, apply updates, stop and start the services, and view information about the system.

## Internal only

This section contains both public and internal only commands. Use these commands with extreme caution, and do not shared them with customers or third parties.

## tscli syntax

Usage for tscli is:

```
tscli [-h] [--helpfull] [--verbose] [--noautoconfig]
           [--autoconfig] [--yes] [--cluster <cluster>]
           [--zoo <zookeeper>] [--username username] [--identity_file identity_file]
           {alert,backup,backup-policy,callhome,cluster,command,dr-mirror,etl,event,
             feature,fileserver,firewall,hdfs,ldap,logs,map-tiles,monitoring,nas,node,
             os,saml,scheduled-pinboards,smtp,snapshot,snapshot-policy,spot,ssl,storage,
             support} ...
```

## tscli commands

<table style="font-size:90%;frame:border;rules:all;cellspacing:0;cellpadding:4;">
   <colgroup>
      <col style="width:25%">
      <col style="width:75%">
   </colgroup>
   <thead >
      <tr>
         <th>Command</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>tscli [&lt;<var>command</var>&gt;] -h</code>
         </td>
         <td>Shows help, optionally for the specified command.</td>
      </tr>
      <tr>
         <td><code>tscli alert count</code></td>
         <td>Shows counts of generated alerts by type.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert info</code>
         </td>
         <td>Lists all alerts.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert list</code>
         </td>
         <td>Lists the generated alerts.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert off</code>
         </td>
         <td>Disables all alerts from the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert on</code>
         </td>
         <td>Enables alerts from the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert silence --name &lt;<var>alert_name</var>&gt;</code>
         </td>
         <td>Silences the alert with <code>&lt;<var>alert_name</var>&gt;</code>.
            For example, DISK_ERROR. Silenced alerts are still recorded in postgres, however
            emails are not sent out.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli alert status</code>
         </td>
         <td>Shows the status of cluster alerts.</td>
      </tr>
      <tr>
         <td>
            <code>tscli alert unsilence-name &lt;<var>alert_name</var>&gt;</code>
         </td>
         <td>Unsilences the alert with
            <code>&lt;<var>alert_name</var>&gt;</code>. For example, DISK_ERROR.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup create
            [--mode {full|light|dataless}]
            &lt;<var>name</var>&gt; &lt;<var>directory</var>&gt;</code>
         </td>
         <td>
            Same as the <code>tscli snapshot backup</code> command.
            <div>
               Pulls a
               snapshot and saves it as a backup where:
               <ul>
                  <li class="li"><code>&lt;<var>name</var>&gt;</code> is the name of the snapshot
                     to pull out as a backup.
                  </li>
                  <li class="li"><code>&lt;<var>directory</var>&gt;</code> is the new directory
                     that will be created for the backup. This directory must not already
                     exist.
                  </li>
               </ul>
            </div>
            <p>Use <code>--mode</code> to specify the <a class="xref" href="../backup_restore/backups_and_snapshots.html#concept_ifh_xkx_ds" title="A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.">type of
               backup</a>.
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli.par backup create [-h]
            [--mode {full|light|dataless}]
            [--type {full|incremental}][--base BASE]
            [--storage_type {local|nas}][--remote]
            &lt;<var>name</var>&gt; &lt;<var>directory</var>&gt;</code>
         </td>
         <td>
            Same as the <code>tscli snapshot backup</code> command. This backup
            creation method make backups a part of the cluster so that they can be managed
            using tscli commands.
            <div>
               Pulls a snapshot and saves it as a backup where:
               <ul>
                  <li class="li">Use <code>--mode</code> to specify the <a class="xref" href="../backup_restore/backups_and_snapshots.html#concept_ifh_xkx_ds" title="A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.">type of backup</a>.</li>
                  <li class="li"><code>--type</code> should always be <var>full</var>.</li>
                  <li class="li"><code>--base</code> should not be set. This parameter is reserved for
                     incremental backups.
                  </li>
                  <li class="li"><code>--remote</code> is a switch to use the cluster-linked backup
                     method. The backup taken in this way will be on the node where the orion
                     master is running. It therefore requires the cluster to be running.
                  </li>
                  <li class="li"><code>--storage_type</code> is only valid if you turn on
                     <code>[--remote]</code> switch. You can choose from local or nas. For
                     local, the backup will be taken on the node where the active orion master is
                     runing.
                  </li>
                  <li class="li"><code>&lt;<var>name</var>&gt;</code> is the name of the snapshot
                     to pull out as a backup.
                  </li>
                  <li class="li"><code>&lt;<var>directory</var>&gt;</code> is the new directory
                     that will be created for the backup. This directory must not already
                     exist.
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup delete &lt;<var>name</var>&gt;</code>
         </td>
         <td>Deletes the named backup.</td>
      </tr>
      <tr>
         <td>
            <code>tscli.par backup delete [-h] &lt;<var>id</var>&gt;</code>
         </td>
         <td>This command deletes backups generated with <code>tscli.par backup create
            [-h]</code>. Use <code>tscli backup ls</code> to find the backup id for
            each backup. The backup metadata is removed from the cluster, and the backup
            directory is deleted from the node.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup ls</code>
         </td>
         <td>List all backups taking by system.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup restore</code>
         </td>
         <td> Restore cluster using backup.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup disable-periodic</code>
         </td>
         <td>Disables periodic backups. Restarts the cluster when applied.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup list-policy</code>
         </td>
         <td>Shows a list of present backup policies.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup ls</code>
         </td>
         <td>Lists available backups and their size.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup mirror-status</code>
         </td>
         <td>Checks whether the current cluster is running in mirror mode or not.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup periodic-config &lt;<var>name</var>&gt;</code>
         </td>
         <td>Shows the periodic backup &lt;<var>name</var>&gt; configuration.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup periodic-status</code>
         </td>
         <td>Shows the periodic backup &lt;<var>name</var>&gt; status.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup
            set-periodic
            --at &lt;<var>hour1</var>, <var>hour2</var>, ...&gt;
            --directory &lt;<var>directory</var>&gt;
            [--num_backups &lt;<var>num_backups</var>&gt;]
            [--mode {full|light|dataless}]</code>
         </td>
         <td>
            Enables or updates a periodic full backup configuration where:
            <ul>
               <li class="li"><code>&lt;<var>hour1</var>, <var>hour2</var>,
                  ...&gt;</code> is the list of times at which to take backups daily. Comma
                  separated string of hour of day specified as HH using a 24 hour clock (e.g.
                  01, 13, 23).
               </li>
               <li class="li"><code>&lt;<var>directory</var>&gt;</code> is the directory where
                  backups are to be written.
               </li>
               <li class="li"><code>&lt;<var>num_backups</var>&gt;</code> is the number of
                  backups to keep archived.
               </li>
            </ul>
            <p>Use <code>--mode</code> to specify the <a class="xref" href="../backup_restore/backups_and_snapshots.html#concept_ifh_xkx_ds" title="A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.">type of
               backup</a>.
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup
            start-mirror &lt;<var>directory</var>&gt;
            &lt;<var>node1</var>, <var>node2</var>, ...&gt;
            &lt;<var>cluster_name</var>&gt; &lt;<var>cluster_id</var>&gt;</code>
         </td>
         <td>
            Starts a mirror cluster which will continuously pull backups generated from a
            primary cluster where:
            <ul>
               <li class="li"><code>&lt;<var>directory</var>&gt;</code> is the directory where
                  backups from the primary cluster are written (usually a SAN or NFS mounted
                  drive).
               </li>
               <li class="li"><code>&lt;<var>node1</var>, <var>node2</var>,
                  ...&gt;</code> is a comma separated list of IP addresses of the nodes in the
                  mirror cluster.
               </li>
               <li class="li"><code>&lt;<var>cluster_name</var>&gt;</code> is the cluster name of
                  the mirror cluster.
               </li>
               <li class="li"><code>&lt;<var>cluster_id</var>&gt;</code> is the ID of the mirror
                  cluster.
               </li>
            </ul>
            Used only in systems specifically architected for disaster recovery.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup stop-mirror</code>
         </td>
         <td>Stops mirroring on the local cluster. Used only in systems specifically
            architected for disaster recovery.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy create</code>
         </td>
         <td>Prompts an editor for you to edit the parameters of the backup
            policy.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy delete &lt;<var>name</var>&gt;</code>
         </td>
         <td>Deletes the backup policy with &lt;<var>name</var>&gt;.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy disable &lt;<var>name</var>&gt;</code>
         </td>
         <td>Disables the policy &lt;<var>name</var>&gt;.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy enable &lt;<var>name</var>&gt;</code>
         </td>
         <td>Enables the policy &lt;<var>name</var>&gt;.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy ls </code>
         </td>
         <td>List backup policies.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy show &lt;<var>name</var>&gt;</code>
         </td>
         <td>Show the policy &lt;<var>name</var>&gt;.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy status &lt;<var>name</var>&gt;</code>
         </td>
         <td>Enables the policy &lt;<var>name</var>&gt;.</td>
      </tr>
      <tr>
         <td>
            <code>tscli backup-policy update &lt;<var>name</var>&gt;</code>
         </td>
         <td>Prompts an editor for you to edit the policy
            &lt;<var>name</var>&gt;.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli callhome disable</code>
         </td>
         <td>Turns off the periodic call home feature.</td>
      </tr>
      <tr>
         <td>
            <code>tscli callhome enable
            --customer_name &lt;<var>customer_name</var>&gt;</code>
         </td>
         <td>
            Enables the "call home" feature, which sends usage statistics to <span class="ph">ThoughtSpot Support</span> every six hours via the secure file server.
            <p>Before using this command for
               the first time, you need to set up the file server connection using
               <code>tscli fileserver configure</code>.
            </p>
            <p>The parameter
               <code><var>&lt;customer_name&gt;</var></code> takes the form
               <code>Shared/&lt;<var>customer_name</var>&gt;/stats</code>.
            </p>
            <a class="xref" href="../misc/contact.html#reference_otr_lhw_34" title="You can contact ThoughtSpot by phone, mail, email, or by filing a support ticket.">Contact ThoughtSpot</a> if you do not know
            the customer name to specify.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli callhome generate-bundle
            --d &lt;<var>directory</var>&gt; --since &lt;<var>num_of_days</var>d&gt;</code>
         </td>
         <td>
            Generates a tar file of the cluster metrics and writes it to the specified
            directory where:
            <ul>
               <li class="li"><code>&lt;<var>num_of_days</var>d&gt;</code> is how far back you'd
                  like to generate the tar file from in days. For example,
                  <code>&lt;<var>30</var>d&gt;</code>. If this parameter is not
                  specified, the command will collect stats from the last 15 days by default.
                  Once the stats are collected, the data gets backfilled in dogfood for all the
                  missing dates.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster abort-reinstall-os</code>
         </td>
         <td>
            Abort in-progress reinstall.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster create &lt;<var>release</var>&gt;</code>
         </td>
         <td>
            Creates a new cluster from the release file specified by
            <code>&lt;<var>release</var>&gt;</code>. This command is used by <span class="ph">ThoughtSpot Support</span> when installing a new cluster.
            Example:
            <code>$ tscli cluster create 2.0.4.tar.gz</code>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster diagnose</code>
         </td>
         <td>
            Diagnose all nodes in the cluster.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster get-config</code>
         </td>
         <td>
         Get current cluster network and time configuration. Prints JSON configuration to stdout.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster load</code>
         </td>
         <td>
             Load state from given backup onto existing cluster
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster reinstall-os </code>
         </td>
         <td>
         Reinstall OS on all nodes of the cluster.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster report</code>
         </td>
         <td> Generate cluster report.</td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster restore
            --release &lt;<var>release_tarball</var>&gt;
            &lt;<var>backupdir</var>&gt;</code>
         </td>
         <td>Restores a cluster using the backup in the specified directory
            <code>&lt;<var>backupdir</var>&gt;</code>. If you're restoring from a
            dataless backup, you must supply the release tarball for the corresponding
            software release.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster resume-reinstall-os</code>
         </td>
         <td> Resume in-progress reinstall.</td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster resume-update</code>
         </td>
         <td>Resume in-progress updates.</td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster set-config </code>
         </td>
         <td>Set cluster network and time configuration. Takes JSON configuration from stdin.
          </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster set-min-resource-spec</code>
         </td>
         <td>Sets min resource configuration of the cluster
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster show-resource-spec </code>
         </td>
         <td>Prints default or min.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster start</code>
         </td>
         <td>Start cluster.
         </td>
      </tr>      
      <tr>
         <td>
            <code>tscli cluster status</code>
         </td>
         <td>Gives the status of the cluster, including release number, date last updated,
            number of nodes, pending tables time, and services status.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster stop</code>
         </td>
         <td>Pauses the cluster (but does not stop storage services).</td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster update</code>
         </td>
         <td>Update existing cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli cluster update-hadoop </code>
         </td>
         <td> Updates Hadoop/Zookeeper on the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli command run </code>
         </td>
         <td>Command to run a command on all nodes.</td>
      </tr>
      <tr>
         <td>
            <code>tscli dr-mirror start</code>
         </td>
         <td>Starts a mirror cluster which will continuously recover
                       from a primary cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli dr-mirror status </code>
         </td>
         <td> Checks whether the current cluster is running in mirror mode.</td>
      </tr>
      <tr>
         <td>
            <code>tscli dr-mirror stop</code>
         </td>
         <td>Stops mirroring on the local cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli etl change-password
            --admin_username &lt;<var>admin_user</var>&gt;
            --username &lt;<var>Informatica_user</var>&gt;</code>
         </td>
         <td>
            Changes the Informatica Cloud account password used by <span class="ph">ThoughtSpot Data Connect</span>.
            <div id="reference_vpy_zh5_m4__p_sht_vkx_fv">
               Required parameters are:
               <ul>
                  <li class="li"><code>--admin_username &lt;<var>admin_user</var>&gt;</code>
                     specifies the Administrator username for <span class="ph">ThoughtSpot</span>.
                  </li>
                  <li class="li"><code>--username &lt;<var>Informatica_user</var>&gt; </code>
                     specifies the username for the Informatica Cloud.
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli etl disable-lw</code>
         </td>
         <td>Disables <span class="ph">ThoughtSpot Data Connect</span>.</td>
      </tr>
      <tr>
         <td>
            <code>tscli etl download-agent</code>
         </td>
         <td>Downloads the <span class="ph">ThoughtSpot Data Connect</span> agent to the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli etl enable-lw
            --admin_username &lt;<var>admin_user</var>&gt;
            --username &lt;<var>Informatica_user</var>&gt;
            --thoughtspot_url &lt;<var>URL</var>&gt;<span class="ph"><span class="ph">
            [--org_id &lt;<var>informatica_org_id</var>&gt;]</span><span class="ph props_audience_internal">
            [--groupname &lt;<var>groupname</var>&gt;]</span></span>
            [--pin_to &lt;<var>IP_address</var>&gt;]
            [--proxy_host &lt;<var>proxy_server_hostname</var>&gt;]
            [--proxy_port &lt;<var>proxy_server_port</var>&gt;]</code>
         </td>
         <td>
            Enables <span class="ph">ThoughtSpot Data Connect</span>. Some parameters are given below, but you should contact <span class="ph">ThoughtSpot Support</span> for assistance in setting this up.
            <div>
               Required parameters are:
               <ul>
                  <li class="li"><code>--admin_username &lt;<var>admin_user</var>&gt;</code>
                     specifies the Administrator username for <span class="ph">ThoughtSpot</span>.
                  </li>
                  <li class="li"><code>--username &lt;<var>Informatica_user</var>&gt; </code>
                     specifies the username for the Informatica Cloud.
                  </li>
                  <li class="li"><code>--thoughtspot_url &lt;<var>URL</var>&gt;</code> specifies
                     the URL for <span class="ph">ThoughtSpot</span>
                  </li>
                  <li class="li"><code>--org_id &lt;<var>informatica_org_id</var>&gt;</code>
                     specifies the Informatica id of the organization (company). <span class="ph props_audience_internal">For <span class="ph">ThoughtSpot</span>, this is 001ZFA. </span>NOTE: org_id shouldn't include the prefix "Org".
                     For example, if on Informatica cloud, the orgid is Org003XYZ, then use only
                     003XYZ.
                  </li>
               </ul>
            </div>
            Optional parameters are:
            <ul>
               <li class="li props_audience_internal"><code>--groupname
                  &lt;<var>groupname</var>&gt;</code> specifies the name of the secure
                  agent group to use.
               </li>
               <li class="li"><code>--pin_to &lt;<var>IP_address</var>&gt;</code> specifies the
                  IP address to pin to. If you specify an IP to pin to, that node becomes sticky
                  to the Informatica agent, and will always be used. Defaults to the public IP
                  address of the localhost where this command was run.
               </li>
               <li class="li"><code>--proxy_host &lt;<var>proxy_server_hostname</var>&gt;</code>
                  and <code>--proxy_port &lt;<var>proxy_server_port</var>&gt;</code>
                  specifies the proxy details.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli etl show-lw</code>
         </td>
         <td>Shows the status of <span class="ph">ThoughtSpot Data Connect</span>. It also returns the Informatica username and OrgId.</td>
      </tr>
      <tr>
         <td>
            <code>tscli event list
            [--include &lt;all|config|notification&gt;]
            [--since &lt;<var>hours,minutes,days</var>&gt;
            | --from &lt;<var>yyyymmdd-HH:MM</var>&gt;
            --to &lt;<var>yyyymmdd-HH:MM</var>&gt;]
            [--detail]
            [--summary_contains
            &lt;'<var>string1</var>'| '<var>string2</var>' ...&gt;]
            [--detail_contains
            &lt;'<var>string1</var>'| '<var>string2</var>' ...&gt;]
            [--attributes
            &lt;<var>key1</var>='<var>value1</var>'|
            <var>key2</var>='<var>value2</var>' ...&gt;]</code>
         </td>
         <td>
            <div>
               Optional parameters are:
               <ul>
                  <li class="li"><code>--include</code> specifies the type of events to include, and can be
                     <code>all</code>, <code>config</code>, or
                     <code>notification</code>.
                  </li>
                  <li class="li"><code>--detail</code> returns the events in a detail format rather than a tabular summary, which is the default.</li>
                  <li class="li"><code>--summary_contains &lt;'<var>string1</var>'| '<var>string2</var>' ...&gt;</code> specifies a string to check for in the event summary. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.</li>
                  <li class="li"><code>--detail_contains &lt;'<var>string1</var>'| '<var>string2</var>' ...&gt;</code> specifies a string to check for in the detail. Enclose strings in single quotes, and separate multiple strings with |. Events that match all specified strings will be returned.</li>
                  <li class="li"><code>--attributes &lt;<var>key1</var>='<var>value1</var>'|
                     <var>key2</var>='<var>value2</var>' ...&gt;</code>
                     specifies attributes to match as key=value pairs. Separate multiple attributes
                     with |. Events that match all specified key/value pairs will be returned. Put
                     single quotes around the value(s).
                  </li>
               </ul>
               And a time window made up of either:
               <ul>
                  <li class="li"><code>--since &lt;<var>hours,minutes,days</var>&gt;</code> is a time in the past for where the event audit begins, ending at the present time. Specify a human readable duration string, e.g. 4h (4 hours), 30m (30 minutes), 1d (1 day).</li>
               </ul>
               Or both:
               <ul>
                  <li class="li"><code>--from &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a timestamp for where to begin the event audit. It must be of the form: yyyymmdd-HH:MM.</li>
                  <li class="li"><code>--to &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a timestamp for where to end the event audit. It must be of the form: yyyymmdd-HH:MM.</li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli feature get-all-config</code>
         </td>
         <td>Gets the configured features in a cluster. The command will return a list of
            features, such as custom branding, Data Connect, and call home, and tell you
            whether they are enabled or disabled.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli fileserver configure
            --user &lt;<var>user_name</var>&gt;
            [--password &lt;<var>password</var>&gt;]</code>
         </td>
         <td>Configures the secure file server username and password for file
            upload/download and the call home feature. You only need to issue this command
            once, to set up the connection to the secure file server. You only need to reissue
            this command if the password changes. The parameter
            <code>&lt;<var>password</var>&gt;</code> is optional. If a password
            is not specified, you will be prompted to enter it.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli fileserver
            download-release &lt;<var>release</var>&gt;
            [--user &lt;user_name&gt;
            --password &lt;password&gt;]</code>
         </td>
         <td>
            Downloads the specified release file and its checksum. Specify the release by
            number, to the second decimal point (e.g. 3.1.0, 3.0.5, etc.). You may optionally
            specify the <code>--user</code> and <code>--password</code> to bypass the
            credentials that were specified when configuring the file server connection with
            <code>tscli fileserver configure</code>.
            <p>Before using this command for
               the first time, you need to set up the file server connection using
               <code>tscli fileserver configure</code>.
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli fileserver purge-config</code>
         </td>
         <td>Removes the file server configuration.</td>
      </tr>
      <tr>
         <td>
            <code>tscli fileserver show-config</code>
         </td>
         <td>Shows the file server configuration.</td>
      </tr>
      <tr>
         <td>
            <code>tscli fileserver upload
            --file_name &lt;<var>file</var>&gt;
            --server_dir_path &lt;<var>path</var>&gt;
            [--user &lt;user_name&gt;
            --password &lt;password&gt;]</code>
         </td>
         <td>
            Uploads the file specified to the directory specified on the secure file
            server. The <code>&lt;<var>path</var>&gt;</code> parameter specifies the
            directory to which you want to upload the file. It is based on your customer name,
            and takes the form
            <code>/Shared/support/&lt;<var>customer_name</var>&gt;</code>. If you
            don't know the path to specify, <a class="xref" href="../misc/contact.html#reference_otr_lhw_34" title="You can contact ThoughtSpot by phone, mail, email, or by filing a support ticket.">Contact ThoughtSpot</a>. You may optionally specify
            the <code>--user</code> and <code>--password</code> to bypass the
            credentials that were specified when configuring the file server connection with
            <code>tscli fileserver configure</code>.
            <p>Before using this command for
               the first time, you need to set up the file server connection using
               <code>tscli fileserver configure</code>.
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli firewall close-ports</code>
         </td>
         <td>Closes given ports through firewall on all nodes. Takes a list of ports to
            close, comma separated. Only closes ports which were previously opened using
            "open-ports". Ignores ports which were not previously opened with "open-ports" or
            were already closed.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli firewall disable</code>
         </td>
         <td>Disable firewall.</td>
      </tr>
      <tr>
         <td>
            <code>tscli firewall enable</code>
         </td>
         <td>Enable firewall.</td>
      </tr>
      <tr>
         <td>
            <code>tscli firewall open-ports &lt;<var>ports</var>&gt;</code>
         </td>
         <td>Opens given ports through firewall on all nodes. Takes a list of ports to
            open, comma separated. Ignores ports which are already open. Some essential ports
            are always kept open (e.g. ssh), they are not affected by this command or by
            "close-ports".
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli firewall status</code>
         </td>
         <td>Shows whether firewall is currently enabled or disabled.</td>
      </tr>
      <tr>
         <td>
            <code>tscli hdfs leave-safemode</code>
         </td>
         <td>Command to get hdfs namenodes out of safemode.</td>
      </tr>
      <tr>
         <td>
            <code>tscli ldap add-cert
            &lt;<var>name</var>&gt; &lt;<var>certificate</var>&gt;</code>
         </td>
         <td>Adds an SSL certificate for LDAP. Use only if LDAP has been configured
            without SSL and you wish to add it. Use
            <code>&lt;<var>name</var>&gt;</code> to supply an alias for the
            certificate you are installing.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli ldap configure</code>
         </td>
         <td>Configures LDAP using an interactive script. You can see detailed
            instructions for setting up LDAP in <a class="xref" href="../setup/about_LDAP.html#concept_dpj_yqd_bq" title="Some companies use LDAP (Lightweight Directory Access Protocol) to manage user authentication. Using LDAP provides security and makes user management more centralized.">About LDAP integration</a>.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli ldap purge-configuration</code>
         </td>
         <td>Purges (removes) any existing LDAP configuration.</td>
      </tr>
      <tr>
         <td colspan="2">
            <code>tscli logs collect
            --include &lt;<var>selector</var> | <var>glob</var>&gt;
            [--exclude &lt;<var>selector</var> | <var>glob</var>&gt;]
            [--since &lt;<var>hours,minutes,days</var>&gt;
            | --from &lt;<var>yyyymmdd-HH:MM</var>&gt;
            --to &lt;<var>yyyymmdd-HH:MM</var>&gt;]
            [--out &lt;<var>path</var>&gt;]
            [--maxsize &lt;<var>size_in_MB_or_GB</var>&gt;]
            [--sizeonly]
            [--nodes NODES]
            </code>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            Extracts logs from the cluster. Does not include any logs that have been
            deleted due to log rotation.
            <p>Required parameters are:</p>
            <ul>
               <li class="li">
                  <code>--include &lt;<var>selector</var> |
                  <var>glob</var>&gt;</code> is a comma separated list of logs to
                  include. Each entry is either a selector (one of all, orion, system, or ts) or
                  a glob for matching files. Anything starting with <code>/</code> is
                  assumed to be a glob pattern and interpreted via <code>find(1)</code>.
                  Other entries are ignored. TIP: put single quotes around the parameter value
                  to prevent undesired glob expansion.
               </li>
            </ul>
            <div>
               And a time window made up of either:
               <ul>
                  <li class="li"><code>--since &lt;<var>hours,minutes,days</var>&gt;</code> is a
                     time in the past for where log collection begins, ending at the present
                     time. Specify a human readable duration string, e.g. 4h (4 hours), 30m (30
                     minutes), 1d (1 day).
                  </li>
               </ul>
            </div>
            <div>
               Or both:
               <ul>
                  <li class="li"><code>--from &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a
                     timestamp for where to begin log collection. It must be of the form:
                     yyyymmdd-HH:MM.
                  </li>
                  <li class="li"><code>--to &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a
                     timestamp for where to end log collection. It must be of the form:
                     yyyymmdd-HH:MM.
                  </li>
               </ul>
            </div>
            <p>Optional parameters are:</p>
            <ul>
               <li class="li"><code>--exclude &lt;<var>selector</var> |
                  <var>glob</var>&gt;</code> is a comma separated list of logs to
                  exclude. Each entry is either a selector (one of orion, system, or ts) or a
                  glob for matching files. Anything starting with <code>/</code> is assumed
                  to be a glob pattern and interpreted via <code>find(1)</code>.
               </li>
               <li class="li"><code>--out &lt;<var>path</var>&gt;</code> is the location where
                  log tarball is written. If not specified, the tarball will be written in
                  /tmp.
               </li>
               <li class="li"><code>--maxsize</code> is the maximum size to allow. Only fetches logs
                  if the total size is smaller that this value. Can be specified in megabytes or
                  gigabytes, e.g. 100MB, 10GB.
               </li>
               <li class="li"><code>--sizeonly</code> means do not collect logs. Just report the
                  size.
               </li>
               <li class="li"><code>--nodes NODES</code> Comma separated list of nodes from where to collect logs.
                     Skip this to use all nodes. (default: None)
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli logs runcmd --cmd <var>command</var>&gt;
            [--include <var>selector</var> | <var>glob</var>&gt;]
            [--exclude <var>selector</var> | <var>glob</var>&gt;]
            [--since <var>hours,minutes,days</var>&gt;
            | --from <var>yyyymmdd-HH:MM</var>&gt;
            --to <var>yyyymmdd-HH:MM</var>&gt;]
            [--outfile &lt;<var>path</var>&gt;]
            [--outdir &lt;<var>directory_path</var>&gt;]
            [--cmd_infmt [C | U]]
            [--cmd_outfmt [C | U]]
            [--nodes NODES]</code>
         </td>
         <td>
            Runs a Unix command on logs in the cluster matching the given constraints.
            Results are reported as text dumped to standard out, the specified output file, or
            as tarballs dumped into the specified directory.
            <p>Required parameters are:</p>
            <div>
               <ul>
                  <li class="li">
                     <code>--cmd &lt;<var>command</var>&gt;</code> is a Unix command
                     to be run on the selected logs. Use single quotes to escape spaces, etc.
                     Language used to specify the command has following rules.
                     <ol class="ol" id="reference_vpy_zh5_m4__ol_zbl_sbg_wv">
                        <li class="li">A logfile and its corresponding result file can be referenced using
                           the keywords SRCFILE and DSTFILE. E.g. 'cp SRCFILE DSTFILE'
                        </li>
                        <li class="li">If there is no reference to DSTFILE in the command, '&gt; DSTFILE' will
                           be appended to the command for output redirection. E.g. 'du -sch
                           SRCFILE' gets automatically translated to 'du -sch SRCFILE &gt;
                           DSTFILE'
                        </li>
                        <li class="li">If there is no reference to SRCFILE, the content of the log is
                           streamed tot he command using a pipe. E.g. 'tail -n100 | grep ERROR'
                           gets automatically translated to 'cat SRCFILE | tail -n100 | grep ERROR
                           &gt; DSTFILE'
                        </li>
                     </ol>
                  </li>
                  <li class="li"><code>--include &lt;<var>selector</var> |
                     <var>glob</var>&gt;</code> is a comma separated list of logs to
                     include. Each entry is either a selector (one of all, orion, system, or ts)
                     or a glob for matching files. Anything starting with <code>/</code> is
                     assumed to be a glob pattern and interpreted via <code>find(1)</code>.
                     Other entries are ignored. TIP: put single quotes around the parameter value
                     to prevent undesired glob expansion.
                  </li>
               </ul>
            </div>
            <div>
               And a time window made up of either:
               <ul>
                  <li class="li"><code>--since &lt;<var>hours,minutes,days</var>&gt;</code> is a
                     time in the past for where log collection begins, ending at the present
                     time. Specify a human readable duration string, e.g. 4h (4 hours), 30m (30
                     minutes), 1d (1 day).
                  </li>
               </ul>
            </div>
            <div>
               Or both:
               <ul>
                  <li class="li"><code>--from &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a
                     timestamp for where to begin log collection. It must be of the form:
                     yyyymmdd-HH:MM.
                  </li>
                  <li class="li"><code>--to &lt;<var>yyyymmdd-HH:MM</var>&gt;</code> is a
                     timestamp for where to end log collection. It must be of the form:
                     yyyymmdd-HH:MM.
                  </li>
               </ul>
            </div>
            <p>Optional parameters are:</p>
            <ul>
               <li class="li"><code>--exclude &lt;<var>selector</var> |
                  <var>glob</var>&gt;</code> is a comma separated list of logs to
                  exclude. Each entry is either a selector (one of orion, system, or ts) or a
                  glob for matching files. Anything starting with <code>/</code> is assumed
                  to be a glob pattern and interpreted via <code>find(1)</code>.
               </li>
               <li class="li">
                  <p><code>--outfile &lt;<var>path</var>&gt;</code> is the file path
                     for printing all the results. By default, results get printed to stdout.
                  </p>
               </li>
               <li class="li">
                  <p><code>--outdir &lt;<var>directory_path</var>&gt;</code> is the
                     directory path for dumping results from each node, with their original
                     directory structure. This may be used as an alternative to printing output
                     to outfile/stdout.
                  </p>
               </li>
               <li class="li">
                  <p><code>--cmd_infmt [C | U]</code> specifies if the input file should be
                     compressed (C) or uncompressed (U) before running the command. Don't use
                     this flag if the command works on both.
                  </p>
               </li>
               <li class="li">
                  <p><code>--cmd_outfmt [C | U]</code> specifies if the output file
                     generated by the command will be compressed (C) or uncompressed (U). Don't
                     use this flag if the output file will be of the same format as the input
                     file.
                  </p>
               </li>
               <li class="li"><p><code>--nodes NODES</code> Comma separated list of nodes from where to collect logs.
                     Skip this to use all nodes. (default: None)</p>
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli map-tiles enable</code>
         </td>
         <td>Enables <span class="ph">ThoughtSpot</span>'s map tiles, which are used when constructing geomap charts. If you don't have
            interest access, you must download the map tiles tar and md5 files. Then you must
            append the following to the tscli command <code>--offline
            --&lt;<var>tar_file</var>&gt; --md5
            &lt;<var>md5_file</var>&gt;</code>, where
            <code>&lt;<var>tar_file</var>&gt;</code> and
            <code>&lt;<var>md5_file</var>&gt;</code> are the locations of the two
            files.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli monitoring set-config
            --email &lt;<var>email</var>&gt;
            --clear_email
            --heartbeat_interval
            &lt;<var>heartbeat_interval</var>&gt;
            --heartbeat_disable
            --report_interval
            &lt;<var>report_interval</var>&gt;
            --report_disable</code>
         </td>
         <td>
            Sets the monitoring configuration.
            <p>Parameters are:</p>
            <ul>
               <li class="li">
                  <p><code>--email &lt;<var>email</var>&gt;</code> is a comma separated
                     list (no spaces) of email addresses where the cluster will send monitoring
                     information.
                  </p>
               </li>
               <li class="li">
                  <p><code>--clear_email</code> disables emails by clearing the email
                     configuration.
                  </p>
               </li>
               <li class="li">
                  <p><code>--heartbeat_interval
                     &lt;<var>heartbeat_interval</var>&gt;</code> is the heartbeat email
                     generation interval in seconds. Must be greater than 0.
                  </p>
               </li>
               <li class="li">
                  <p><code>--heartbeat_disable</code> disables heartbeat email
                     generation.
                  </p>
               </li>
               <li class="li">
                  <p><code>--report_interval &lt;<var>report_interval</var>&gt;</code>
                     sets the cluster report email generation interval in seconds. Must be
                     greater than 0.
                  </p>
               </li>
               <li class="li">
                  <p><code>--report_disable</code> disables cluster report email
                     generation.
                  </p>
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli monitoring show-config</code>
         </td>
         <td>Shows the monitoring configuration.</td>
      </tr>
      <tr>
         <td>
            <code>tscli nas mount-cifs
            --server &lt;<var>server_CIFS_address</var>&gt;
            --path_on_server &lt;<var>path</var>&gt;
            --mount_point &lt;<var>target</var>&gt;
            --username &lt;<var>user</var>&gt;
            --password &lt;<var>password</var>&gt;
            --uid &lt;<var>uid</var>&gt;
            --gid &lt;<var>gid</var>&gt;</code>
         </td>
         <td>
            Mounts a CIFS device on all nodes.
            <p>Parameters are:</p>
            <div>
               <ul>
                  <li class="li"><code>--server &lt;<var>server_CIFS_address</var>&gt;</code> is
                     the device address.
                  </li>
                  <li class="li"><code>--path_on_server &lt;<var>path</var>&gt;</code> is the path
                     on the server to mount (source).
                  </li>
                  <li class="li"><code>--mount_point &lt;<var>target</var>&gt;</code> is the
                     location where the CIFS device should be mounted (target).
                  </li>
                  <li class="li"><code>--username &lt;<var>user</var>&gt;</code> is the username
                     with which to connect to the CIFS device.
                  </li>
                  <li class="li"><code>--password &lt;<var>password</var>&gt;</code> is the CIFS
                     password.
                  </li>
                  <li class="li"><code>--uid &lt;<var>uid</var>&gt;</code> is the uid that will
                     own all files or directories on the mounted filesystem, when the server does
                     not provide ownership information. See the man page for mount.cifs for more
                     details.
                  </li>
                  <li class="li"><code>--gid &lt;<var>gid</var>&gt;</code> is the gid that will
                     own all files or directories on the mounted filesystem, when the server does
                     not provide ownership information. See the man page for mount.cifs for more
                     details.
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli nas mount-nfs
            --server &lt;<var>server_NFS_address</var>&gt;
            --path_on_server &lt;<var>path</var>&gt;
            --mount_point &lt;<var>target</var>&gt;</code>
         </td>
         <td>
            Mounts a NFS device on all nodes.
            <p>Parameters are:</p>
            <div>
               <ul>
                  <li class="li"><code>--server &lt;<var>server_NFS_address</var>&gt;</code> is
                     the device address.
                  </li>
                  <li class="li"><code>--path_on_server &lt;<var>path</var>&gt;</code> is the path
                     on server to mount (source).
                  </li>
                  <li class="li"><code>--mount_point &lt;<var>target</var>&gt;</code> is the
                     location where the NFS device should be mounted (target).
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli nas unmount
            --dir &lt;<var>directory</var>&gt;</code>
         </td>
         <td>Unmounts all devices from the specified directory location.</td>
      </tr>
      <tr>
         <td>
            <code>tscli node ls</code>
         </td>
         <td>Lists all nodes in the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli os find-package
            &lt;<var>package_name</var>&gt;</code>
         </td>
         <td>
            Lists all packages and versions included in the product image whose name
            contains <code>&lt;<var>package_name</var>&gt;</code>. Package names you
            can specify are:
            <ul>
               <li class="li">alert</li>
               <li class="li">backup</li>
               <li class="li">callhome</li>
               <li class="li">cluster</li>
               <li class="li">event</li>
               <li class="li">fileserver</li>
               <li class="li">firewall</li>
               <li class="li">ldap</li>
               <li class="li">logs</li>
               <li class="li">monitoring</li>
               <li class="li">node</li>
               <li class="li">os</li>
               <li class="li">release</li>
               <li class="li">smtp</li>
               <li class="li">snapshot</li>
               <li class="li">ssl</li>
               <li class="li">storage</li>
               <li class="li">support</li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli os list-packages</code>
         </td>
         <td>Lists all packages and versions included in the product image.</td>
      </tr>
      <tr>
         <td>
            <code>tscli release
            info &lt;<var>release</var>&gt;</code>
         </td>
         <td>Prints information about the release contained in the specified release
            file.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli saml configure</code>
         </td>
         <td>Configures SAML.</td>
      </tr>
      <tr>
         <td>
            <code>tscli saml
            purge-configuration</code>
         </td>
         <td>Purges any existing SAML configuration.</td>
      </tr>
      <tr>
         <td>
            <code>tscli scheduled-pinboards</code>
         </td>
         <td>Enables scheduled pinboards, which is disabled in prod clusters by
            default.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli security
            clear-min-tls-version</code>
         </td>
         <td>Clears any customizations for the minimum TLS version to support.</td>
      </tr>
      <tr>
         <td>
            <code>tscli security
            set-min-tls-version
            {1.0|1.1|1.2}</code>
         </td>
         <td>Sets the minimum SSL version to be supported by the <span class="ph">ThoughtSpot</span> application. Please ensure that client browsers are enabled for this version or
            newer. It is recommended that you set the version to 1.2.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli security ssl-off</code>
         </td>
         <td>Disables SSL authentication for the <span class="ph">ThoughtSpot</span> application.</td>
      </tr>
      <tr>
         <td>
            <code>tscli security ssl-on</code>
         </td>
         <td>Enables SSL authentication for the <span class="ph">ThoughtSpot</span> application.</td>
      </tr>
      <tr>
         <td>
            <code>tscli security ssl-status</code>
         </td>
         <td>Shows whether of SSL authentication is enabled or disabled for the <span class="ph">ThoughtSpot</span> application.</td>
      </tr>
      <tr>
         <td>
            <code>tscli security tls-status</code>
         </td>
         <td>Prints the status of TLS support.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp
            reset-canonical-mapping</code>
         </td>
         <td>Deletes the current postmap mapping.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp
            set-canonical-mapping
            &lt;<var>new_key</var>&gt; &lt;<var>new_value</var>&gt;</code>
         </td>
         <td>Sets a new postmap mapping.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp set-mailfromname
            &lt;<var>email_address</var>&gt;</code>
         </td>
         <td>Sets the mailname, from which email alerts are sent, for the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp set-mailname
            &lt;<var>domain</var>&gt;</code>
         </td>
         <td>Sets the mailname, where email alerts are sent, for the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp
            set-relayhost &lt;<var>IP_address</var>&gt;</code>
         </td>
         <td>Sets the relayhost for SMTP (email) sent from the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp show-canonical-mapping</code>
         </td>
         <td>Shows the current postmap mapping.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp show-mailfromname</code>
         </td>
         <td>Shows the mailname, from which email alerts are sent, for the
            cluster.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp show-mailname</code>
         </td>
         <td>Shows the mailname, where email alerts are sent, for the cluster.</td>
      </tr>
      <tr>
         <td>
            <code>tscli smtp show-relayhost</code>
         </td>
         <td>Shows the relayhost for SMTP (email) sent from the cluster. If there is no
            relayhost configured, the command shows "NOT FOUND".
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot backup
            [--mode {full|light|dataless}]
            &lt;<var>name</var>&gt; &lt;<var>directory</var>&gt;</code>
         </td>
         <td>
            Same as the <code>tscli backup create</code> command.
            <div>
               Pulls a snapshot
               and saves it as a backup where:
               <ul>
                  <li class="li"><code>&lt;<var>name</var>&gt;</code> is the name of the snapshot
                     to use.
                  </li>
                  <li class="li"><code>&lt;<var>directory</var>&gt;</code> is the new directory
                     that will be created for the backup. This directory must not already
                     exist.
                  </li>
               </ul>
            </div>
            <p>Use <code>--mode</code> to specify the <a class="xref" href="../backup_restore/backups_and_snapshots.html#concept_ifh_xkx_ds" title="A backup is a procedure that stores a snapshot outside of a ThoughtSpot cluster. You can use a backup to restore a cluster to a prior state, a differently configured appliance, or move it to from an appliance to a virtual cluster or vice versa. Other advanced administrative operations also use backups.">type of
               backup</a>.
            </p>
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot
            create &lt;<var>name</var>&gt; &lt;<var>reason</var>&gt;</code>
         </td>
         <td>Creates a new snapshot with the name and reason provided. This command does
            not accept periods (.), but does accept dashes (-).
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot delete &lt;<var>name</var>&gt;</code>
         </td>
         <td>Deletes the named snapshot.</td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot ls</code>
         </td>
         <td>Lists available snapshots and their size.</td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot-policy disable</code>
         </td>
         <td>Disables the automatic snapshot policy.</td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot-policy show</code>
         </td>
         <td>Shows the automatic snapshot policy.</td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot-policy enable</code>
         </td>
         <td>Enables the automatic snapshot policy.</td>
      </tr>
      <tr>
         <td>
            <code>tscli snapshot-policy update</code>
         </td>
         <td>Updates the automatic snapshot policy.</td>
      </tr>
      <tr>
         <td>
            <code>tscli ssl add-cert
            &lt;<var>key</var>&gt; &lt;<var>certificate</var>&gt;</code>
         </td>
         <td>Adds SSL certificate, key pair.</td>
      </tr>
      <tr>
         <td>
            <code>tscli ssl off</code>
         </td>
         <td>Disables SSL. Disabling SSL will stop users from seeing a security warning
            when accessing <span class="ph">ThoughtSpot</span> from a browser if there is no SSL certificate installed.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli ssl on</code>
         </td>
         <td>Enable SSL. If SSL is enabled and there is no certificate, users will see a
            security warning when accessing <span class="ph">ThoughtSpot</span> from a browser.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli ssl rm-cert</code>
         </td>
         <td>Removes the existing SSL certificate, if any.</td>
      </tr>
      <tr>
         <td>
            <code>tscli ssl status</code>
         </td>
         <td>Shows whether SSL authentication is enabled or disabled.</td>
      </tr>
      <tr>
      <td>
         <code>tscli storage gc
         [--log_age &lt;<var>hours</var>&gt;]
         [--localhost_only&gt;]</code>
      </td>
      <td>
         <p>Before issuing this command, you must stop the cluster using <code>tscli
            cluster stop</code>. After garbage collection has completed, you can restart
            the cluster with <code>tscli cluster start</code>.
         </p>
         <p>Garbage collects unused storage. Accepts these optional flags:</p>
         <p>
            <code>--log_age &lt;<em class="ph i">hours</em>&gt;</code>
         </p>
         <p>Specifies the number of elapsed hours after which logs will be deleted. Default
            is 24 hours.
         </p>
         <p><code>--localhost_only</code></p>
         <p>If used, only the logs on the localhost will be removed. If not specified, the
            command acts on the entire cluster.
         </p>
         <div>
            The command frees space in these
            directories:
            <code>/tmp
            /usr/local/scaligent/logs/
            /export/logs/orion
            /export/logs/oreo
            /export/logs/hadoop
            /export/logs/zookeeper
            cores</code>
         </div>
      </td>
      </tr>
      <tr>
         <td>
            <code>tscli support restart-remote</code>
         </td>
         <td>Restarts remote support.</td>
      </tr>
      <tr>
         <td>
            <code>tscli support rm-admin-email</code>
         </td>
         <td>Removes the email address for contacting the customer administrator. Replaces
            it with the default <span class="ph">ThoughtSpot Support</span> email address.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli support rm-admin-phone</code>
         </td>
         <td>Removes the phone number for contacting the customer administrator. Replaces
            it with the default <span class="ph">ThoughtSpot Support</span> phone number.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            set-admin-email &lt;<var>email</var>&gt;</code>
         </td>
         <td>Sets the email address for contacting the customer administrator. If you
            would like to display a blank email address, issue the command <code>tscli
            support set-admin-email ' '</code>.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            set-admin-phone &lt;<var>phone_number</var>&gt;</code>
         </td>
         <td>Sets the phone number for contacting the customer administrator. Specify a
            phone number using any value (e.g. +1 800-508-7008 Ext. 1). If you would like to
            display a blank phone number, issue the command <code>tscli support
            set-admin-phone ' '</code>.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli support set-remote
            --addr &lt;<var>support_address</var>&gt;
            --user &lt;<var>support_user</var>&gt;</code>
         </td>
         <td>Configures the cluster for remote support through SSH tunneling, where
            <code>&lt;<var>support_address</var>&gt;</code> is the address of
            support, e.g. tunnel.thoughtspot.com, and
            <code>&lt;<var>support_user</var>&gt;</code> is the support
            username.
         </td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            show-admin-email</code>
         </td>
         <td>Shows the email address for customer administrator, if set.</td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            show-admin-phone</code>
         </td>
         <td>Shows the phone number for customer administrator, if set.</td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            show-remote</code>
         </td>
         <td>Prints the status and configuration of remote support.</td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            start-remote</code>
         </td>
         <td>Starts remote support.</td>
      </tr>
      <tr>
         <td>
            <code>tscli support
            stop-remote</code>
         </td>
         <td>Stops remote support.</td>
      </tr>
   </tbody>
</table>

## Internal

{% include content/tscli-internal.md %}
