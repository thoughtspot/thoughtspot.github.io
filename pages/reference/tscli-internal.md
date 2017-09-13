
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

  {% include content/serviceflag.md %}

* `tscli --adv service add-javaopt`

  Adds override to add a java option to an existing service. For example:

  `tscli --adv service add-javaopt tomcat.tomcat D orion.authenticatedIdleTimeoutMs value`

   Sets authenticated idle timeout of a user. Defaults to 3 hours. Use this
   command to set configurable session timeout.

   {% include content/javaopt.md %}

* `tscli --adv service addresses` Prints the addresses for a service.
* `tscli --adv service delete` Deletes a given service.
* `tscli --adv service delete-gflag` Adds override to delete a `gflag` from an existing service.
* `tscli --adv service delete-javaopt`

    Deletes a java option from an existing service. For example, to unset the
    fiscal month value override, you can run the following command:

    `tscli --adv service delete-javaopt tomcat.tomcat D
    orion.defaultQuarterStartMonth .`

* `tscli --adv service delete-javaopt tomcat .tomcat D
orion.dataformatconfig.should formatdata`

    Disables title casing. You should run this command in conjunction with the
    falcon_preserve_case commands to enable case configuration.

* `tscli --adv service delete-pack` Deletes override for a given pack.
* `tscli --adv service delete-service-override`

   Deletes any override for service config disable Stops and disables given
   service.

* `tscli --adv service disable` Stops and disables given service.

* `tscli --adv service enable`

            tscli service start" for
            that).

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
