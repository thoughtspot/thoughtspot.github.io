---
title: [tscli internal command reference]
tags:
keywords: tbd
last_updated: tbd
sidebar:
---

### alert

`tscli alert dedup [-h] --period` *`PERIOD`*

Sets up dedup (deduplication) for alerts in seconds. The cluster will not generate the same alert again
during this *`PERIOD`*.

### cgroups

`tscli cgroups set-mode [-h] {lmctfy,ictlu}`

Set the mode for `cgroups` management. Primarily used for supporting reverting to
pre-3.3 releases if there's a failure in updating to 3.3. For example, if the
system has been upgraded to `ictlu`, old Orion may no longer run. By switching
`cgroups` mode to `lmctfy`, old Orion can still run allowing the update to be
retried on a functioning cluster.

### cluster

* `tscli --adv cluster config` Prints the cluster configuration.
* `tscli --adv cluster cpu-usage` Prints the cpu loadavg of all nodes in the cluster.
* `tscli cluster delete [-h] [--hosts` *`HOSTS*`]` Deletes the remaining state of a partial cluster.

  * `--hosts` *`HOSTS`*  Comma separated list of hosts in the cluster. Needed in rare troubleshooting
  cases when this state has been lost from a prior attempt at cluster deletion.
  (default: None)

* `tscli --adv cluster desc` Returns the descriptor for this cluster.
* `tscli --adv cluster edit-config` Edits the cluster configuration.
* `tscli --adv cluster memory-capacity`

  Prints the current memory capacity of the cluster, in MB. Note that the
  returned value is not the amount of free memory in the cluster.

* `tscli cluster restore-internal [-h] [--release` *`RELEASE`*`] [--withpacks`
*`WITHPACKS`*`]` *`backupdir`*`

   Restores a cluster using the backup. This method uses the current `tscli` for the entire cluster restoration work. It does not extract and handover the work to the `tscli` present in the release tarball. This method is not intended to be called directly, but is used by the `cluster restore` command internally.

* `tscli cluster set-id [-h]` *`cluster_id`* Sets the cluster *`cluster_id`*.
* `tscli --adv cluster show-id` Prints the cluster ID.
* `tscli cluster tsinhouse [-h] {enable,disable}` Enables/disables the tsinhouse flag and takes the associated action.
* `tscli cluster update` *`release`*

   Updates an existing cluster using the release file specified by *`release`*.
   This command is used by ThoughtSpot Support when updating a cluster to a new
   release.

* `tscli --adv cluster update-internal`

  Updates the Orion state. It is not intended to be called directly, instead it
  is only intended to be called by snapshot restore.

### config

* `tscli config delete [-h] --key` *`KEY`* Deletes a key in the configuration store.
* `tscli config get [-h] --key` *`KEY`* `[--type` *`TYPE`*`]` Gets the value for a key in the configuration store.
* `tscli config set [-h] --key`  *`KEY`* `[--type` *`TYPE`*`] [--value` *`VALUE`*`]` Sets a key in the configuration store.


### dictionary

* `tscli --adv dictionary disable` Disable dictionary optimizations.
* `tscli --adv dictionary enable` Enable dictionary optimizations.

### disk

`tscli disk replace [-h] drive_name`

Restores the HDFS after the disk replacement.

### graphite-metrics

```
graphite-metrics [-h] {disable-collection,enable-collection,show}
```

This subcommand has the following actions:

* `tscli --adv graphite-metrics disable-collection` Disables the graphite metrics collection. This operation will delete existing
metrics.
* `tscli --adv graphite-metrics enable-collection` Enables the graphite metrics collection.
* `tscli --adv graphite-metrics show [-h] --name` *`NAME`* Prints the given graphite metric in JSON format.

### hdfs

* `tscli --adv hdfs dfs` Invokes the HDFS dfs command.
* `tscli --adv hdfs dfsadmin` Invokes the HDFS dfsadmin command.
* `tscli --adv hdfs du path`

   Computes the total size of the file or directory at path. It does not include
   the size of snapshots in the calculation.

* `tscli hdfs leave-safemode [-h] [--timeout TIMEOUT]` Command to get hdfs namenodes out of safemode.

  * `--timeout` *`TIMEOUT`*  Timeout waiting for the command to finish. (default: `5`)

* `tscli --adv hdfs push_config` Pushes HDFS configuration from Zookeeper to all nodes.

### ldap

`tscli ldap remove-cert [-h]` *`name`*

Removes the installed LDAP related SSL certificate.

### metrics

* `tscli --adv metrics flush` Flushes all metrics into falcon.
* `tscli metrics list [-h] [--name NAME]` Lists the Metric Names.
* `tscli metrics show [-h] --name` `NAME` `--aggregation` `AGGREGATION` `[--grouping`
`GROUPING``] [--node` `NODE``] [--since` `SINCE``] [--from` `FROM``] [--to` `TO``] [--csv]
[--date_as_epoch]`

  Prints the Metrics. This takes the following arguments:

  * `--name` `NAME` Prints all metrics containing name. (default: None)
  * `--aggregation` `AGGREGATION` Must be one of `min`, `max`, `avg`, `sum`. Required. (default: None)
  * `--grouping` `GROUPING` Must be one of detailed, hourly, daily, weekly, monthly, quarterly, yearly. Default is daily. (default: None)
  * `--node` `NODE` Prints only metrics from nodes containing node name. (default: None)
  * `--since` `SINCE` Grab metrics from this time window in the past. Should be a human readable duration string, e.g. `4h` (4 hours), `30m` (30 minutes), `1d` (1 day). Default `30d`
  * `--from` `FROM` Begin timestamp, must be of the form: `yyyymmdd-HH:MM` (default: None)
  * `--to` `TO`  End timestamp, must be of the form: `yyyymmdd-HH:MM` (default: None)
  * `--csv` Prints the metrics in CSV format. (default: False)
  * `--date_as_epoch` Prints timestamp in Epoch format. (default: False)

### monitoring

`tscli monitoring elk [-h] {enable,delete}`

A utility to enable and disable all services associated with Elk stack.

### node

* `tscli node add [-h]` *`nodes`* Adds new nodes to a running cluster.
* `tscli --adv node remove` *`ip`* Removes a healthy or deceased node from a running cluster.

  {% include note.html content="At this time, this procedure should only be run under the supervision of an Orion team member." %}

* `tscli --adv node restart-services` Restarts all services on the localhost.

### release

`tscli release install [-h] [--release` *`RELEASE`*`]`

Installs a `RELEASE` on the localhost. Reinstalls current release  if not
specified (default: None)

### service

* `tscli service add-gflag [-h] service_task_name key value` Adds override to add a `gflag` to an existing service.

   For example:

  `tscli --adv service add-gflag falcon.worker falcon_preserve_case true`

  You need to also run:

  `tscli --adv service add-gflag falcon_manager.falcon_manager falcon_preserve_case true`

  This command restarts the Falcon process. You can set the following service tasks:

  <table>
   <colgroup>
      <col style="width:25%" />
      <col style="width:25%" />
      <col style="width:50%" />
   </colgroup>
   <tr>
      <th>Service Task Name</th>
      <th>Key</th>
      <th>Description</th>
   </tr>
   <tr>
      <td><code>falcon.worker</code></td>
      <td><code>falcon_preserve_case</code></td>
      <td>Enables case configuration. The default is false.</td>
   </tr>
   <tr>
      <td><code>infaagent.infaagent</code></td>
      <td><code>agent_max_memory</code></td>
      <td>Sets the max memory for the Agent JVM for ThoughtSpot Data Connect. max_memory is the max memory allowed. 4g is the default value.</td>
   </tr>
   <tr>
      <td><code>infaagent.infaagent</code></td>
      <td><code>bypass_ssl</code></td>
      <td>Allows you to bypass SSL check during ThoughtSpot connection create for,ThoughtSpot Data Connect. It is set to false by default.</td>
   </tr>
   <tr>
      <td><code>infaagent.infaagent</code></td>
      <td><code>max_concurrent_loads</code></td>
      <td>Sets the max number of loads to run concurrently for ThoughtSpot Data,Connect. 4 is the default value.</td>
   </tr>
   <tr>
      <td><code>infaagent.infaagent</code></td>
      <td><code>max_memory</code></td>
      <td>Sets the max memory for the load task for ThoughtSpot Data Connect. 50g is the default.</td>
   </tr>
   <tr>
      <td><code>timely.timely</code></td>
      <td><code>max_scheduled_jobs</code></td>
      <td>Sets the max scheduled jobs (both pinboard and Data Connect) for a cluster. 50 is the default.</td>
   </tr>
  </table>


* `tscli --adv service add-javaopt`

  Adds override to add a java option to an existing service. For example:

  `tscli --adv service add-javaopt tomcat.tomcat D orion.authenticatedIdleTimeoutMs value`

   Sets authenticated idle timeout of a user. Defaults to 3 hours. Use this
   command to set configurable session timeout.

   <table>
    <colgroup>
       <col style="width:15%" />
       <col style="width:10%" />
       <col style="width:25%" />
       <col style="width:50%" />
    </colgroup>
    <tr>
         <th>Service Task Name</th>
         <th>Java Opt Type</th>
         <th>Key</th>
         <th>Description</th>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.authenticatedIdleTimeoutMs</code></td>
         <td>Sets authenticated idle timeoutof a user. Defaults to 3 hours. Use this command to set configurable sessiontimeout.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.customBrandingEnabled</code></td>
         <td>Enables Style Customization.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.customBrandingFont CustomizationEnabled</code></td>
         <td>Enables Font Customization.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.defaultQuarterStartMonth</code></td>
         <td>Sets a custom fiscal month value on a cluster. Specify the calendar number of the month. For example, if it's February, enter,`2`.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.enableAggrWsTableJoin</code></td>
         <td>Allows you to join an aggregated worksheet with a base table. This facilitates,group aggregations with filters exposing aggregate data while securing,unaggregated data worksheets composed of aggregated worksheets and base tables.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.enableWorksheetOverAggrWorksheet</code></td>
         <td>Allows you to create a worksheet on top of an aggregated worksheet.</td>
      </tr>
      <tr>
         <td><code>tomcat.tomcat</code></td>
         <td><code>D</code></td>
         <td><code>orion.frontendHost</code></td>
         <td>Sets the host for front end access.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.frontendPort</code></td>
         <td>Sets the port for front end access.</td>
      </tr>
      <tr>
        <td><code>tomcat.tomcat</code></td>
        <td><code>D</code></td>
         <td><code>orion.frontendScheme</code></td>
         <td>Sets the scheme for front end access. Scheme is either http or,https.</td>
      </tr>
      <tr>
        <td><code>tomcat.tomcat</code></td>
        <td><code>D</code></td>
         <td><code>orion.FullEmbedConfiguration.alertBarHidden</code></td>
         <td>Disables error messages for the ThoughtSpot full embed use case and propagates,them to the parent app. This allows the error messages to be displayed in the,customer's UI appropriately. The command is set to false by default.</td>
      </tr>
      <tr>
        <td><code>tomcat.tomcat</code></td>
        <td><code>D</code></td>
         <td><code>orion.FullEmbedConfiguration.alertBarHidden-primaryNavHidden</code></td>
         <td>Hides the top navigation bar for the ThoughtSpot full embed use case. The,command is set to true by default.</td>
      </tr>
      <tr>
        <td><code>tomcat.tomcat</code></td>
        <td><code>D</code></td>
         <td><code>orion.FullEmbedConfiguration.powered FooterHidden</code></td>
         <td>Adds the ThoughtSpot logo to the rendered iFrames in an embedded use case.,This is automatically turned on if the Style Customization flag, full embed,mode, or any embedded pinboard, chart, or table is enabled. Customers with an,Extended Enterprise license have the choice to turn this feature off. The,command is set to false by default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.geoMapConfig.dataBatchSize</code></td>
         <td>This flag allows you to increase the number of data points of a visualization.,The default data points limit is 5,000 for geo charts, 10,000 for pivot,tables, and 1,000 for everything else.></td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.informaticaCloudConfig.use TimelyForScheduling</code></td>
         <td>Enables pre/post script execution in Data Connect.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.rememberedSessionIdleTimeoutMs</code></td>
         <td>Sets remembered session idle timeout of a user. Defaults to forever [-1]. Use,this command to set configurable session timeout.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReportingConfig.enabled</code></td>
         <td>Enables scheduled pinboards, which is disabled in prod clusters by default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReporting Config.maxRecipientLimit</code></td>
         <td>Sets the recipient limit on scheduled pinboard jobs. 1000 recipients is the default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReportingConfig.maxTotalAttachment SizeInMb</code></td>
         <td>Sets the email attachment size limit for scheduled pinboards. 25 MB is the default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReportingConfig.tablePrintData BatchSize</code></td>
         <td>Sets the table row limit in PDFs reports for scheduled pinboards. 100 rows is the,default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReportingConfig.thresholdSizeInMbToZip</code></td>
         <td>Sets the max size limit before switch CSV attachments as zips. 25 MB is the default.</td>
      </tr>
      <tr>
      <td><code>tomcat.tomcat</code></td>
      <td><code>D</code></td>
         <td><code>orion.scheduledReportingConfig.whitelistedDomains</code></td>
         <td>Sets the email whitelist for scheduled pinboard recipients. Specify the email,domains you would like to add, surrounded by single quotations, such as,thoughtspot.com,gmail.com.</td>
      </tr>
   </table>

* `tscli --adv service addresses` Prints the addresses for a service.
* `tscli --adv service delete` Deletes a given service.
* `tscli --adv service delete-gflag` Adds override to delete a `gflag` from an existing service.
* `tscli --adv service delete-javaopt`

   Deletes a java option from an existing service. For example, to unset the
   fiscal month value override, you can run the following command:

   `tscli --adv service delete-javaopt tomcat.tomcat D
    orion.defaultQuarterStartMonth .`

    This command disables title casing:

    `tscli --adv service delete-javaopt tomcat .tomcat D
    orion.dataformatconfig.should formatdata`

    You should run this command in conjunction with the `falcon_preserve_case`
    commands to enable case configuration.

* `tscli --adv service delete-pack` Deletes override for a given pack.
* `tscli --adv service delete-service-override` Deletes any override for service config disable, stopds and disables given service.
* `tscli --adv service disable` Stops and disables given service.
* `tscli --adv service enable` Enables service, does not start it (use `tscli service
start` for that).
* `tscli --adv service get-config` Prints the configuration for a service.
* `tscli --adv service get-pack` Gets override for a given pack.
* `tscli --adv service list-overrides` Lists the existing overrides of a service.
* `tscli --adv service ls` Lists all services.
* `tscli --adv service pin` Pin service to given nodes.
* `tscli --adv service push` Pushes the configuration for a service.
* `tscli --adv service restart` Restarts the service.
* `tscli --adv service set-pack` Sets override for a given pack.
* `tscli --adv service set-service-override` Sets override for service config (read from stdin).
* `tscli --adv service show-pin` Show the current status of pinning of this service.
* `tscli --adv service start` Starts the service.
* `tscli --adv service start-all` Starts all services.
* `tscli --adv service status` Prints the status of the service.
* `tscli --adv service stop` Stops the service.
* `tscli --adv service stop-all` Stops all service.
* `tscli --adv service unpin` Unpin service from a fixed set of nodes, allowing it to be scheduled anywhere in the cluster.

### snapshot

* `tscli snapshot restore` *`name`* `[--allow_release_change]`

    Restores a cluster using the named snapshot. If `--allow_release_change` is
    specified, allows restoration to a snapshot at a different release.

* `tscli --adv statsdb update` Updates statsdb on the cluster.
* `tscli --adv zoo fix-local-datadir` Fixes Zookeeper data on the local host.
