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
         <!-- internal -->
         <td>
            <code>tscli --adv alert dedup</code>
         </td>
         <td>Sets up dedup for alerts. The cluster will not generate the same alert again
            during this period.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster delete --hosts
            &lt;<var>IP1</var>&gt;,&lt;<var>IP2</var>&gt;,&lt;<var>IP3</var>&gt;,...</code>
         </td>
         <td>Deletes the remaining state of a partial cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv edit-periodic-config</code>
         </td>
         <td>Edit periodic backup config.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli backup restore
            [--release &lt;<var>release</var>&gt;]
            &lt;<var>backupdir</var>&gt;</code>
         </td>
         <td>Restores a cluster using the backup from the directory specified by
            &lt;<var>backupdir</var>&gt;, from the release file optionally specified by
            <code class="ph codeph">&lt;<var>release</var>&gt;</code>.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cgroups set-mode</code>
         </td>
         <td>Set the mode for cgroups management. Primarily used for supporting reverting
            to pre-3.3 releases if there's a failure in updating to 3.3. For example, if the
            system has been upgraded to ictlu, old Orion may no longer run. By switching
            cgroups mode to lmctfy, old Orion can still run allowing the update to be retried
            on a functioning cluster.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster config</code>
         </td>
         <td>Prints the cluster configuration.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster cpu-usage</code>
         </td>
         <td>Prints the cpu loadavg of all nodes in the cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster delete</code>
         </td>
         <td>Deletes the cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster desc</code>
         </td>
         <td>Returns the descriptor for this cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster edit-config</code>
         </td>
         <td>Edits the cluster configuration.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster memory-capacity</code>
         </td>
         <td>Prints the current memory capacity of the cluster, in MB. Note that the
            returned value is not the amount of free memory in the cluster.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster restore-internal</code>
         </td>
         <td>Restores a cluster using the backup. This method uses the current tscli for
            the entire cluster restoration work. It does not extract and handover the work to
            the tscli present in the release tarball. This method is not intended to be called
            directly, but is used by the 'cluster restore' command internally.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster set-id</code>
         </td>
         <td>Sets the cluster ID.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster show-id</code>
         </td>
         <td>Prints the cluster ID.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster tsinhouse</code>
         </td>
         <td>Enables/disables the tsinhouse flag and takes the associated action.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli cluster update &lt;<var>release</var>&gt;</code>
         </td>
         <td>Updates an existing cluster using the release file specified by
            <code class="ph codeph">&lt;<var>release</var>&gt;</code>. This command is used by <span class="ph">ThoughtSpot Support</span> when updating a cluster to a new release.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv cluster update-internal</code>
         </td>
         <td>Updates the Orion state. It is not intended to be called directly, instead it
            is only intended to be called by snapshot restore.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv config delete</code>
         </td>
         <td>Deletes the key in the configuration store.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv config get</code>
         </td>
         <td>Gets the value for the key in the configuration store.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv config set</code>
         </td>
         <td>Sets the key in the configuration store.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv dictionary disable</code>
         </td>
         <td> Disable dictionary optimizations.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv dictionary enable</code>
         </td>
         <td>Enable dictionary optimizations.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv disk replace</code>
         </td>
         <td>Restores the HDFS after the disk replacement.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv graphite-metrics
            disable-collection</code>
         </td>
         <td>Disables the graphite metrics collection. This operation will delete existing
            metrics.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv graphite-metrics
            enable-collection</code>
         </td>
         <td>Enables the graphite metrics collection.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv graphite-metrics show</code>
         </td>
         <td>Prints the given graphite metric in JSON format.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv hdfs dfs</code>
         </td>
         <td>Invokes the HDFS dfs command.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv hdfs dfsadmin</code>
         </td>
         <td>Invokes the HDFS dfsadmin command.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv hdfs du</code>
         </td>
         <td>Computes the total size of the file or directory at path. It does not include
            the size of snapshots in the calculation.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv hdfs push-config</code>
         </td>
         <td>Pushes HDFS configuration from Zookeeper to all nodes.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv ldap remove-cert</code>
         </td>
         <td>Removes the installed LDAP related SSL certificate.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv metrics flush</code>
         </td>
         <td>Flushes all metrics into falcon.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv metrics list</code>
         </td>
         <td>Lists the Metric Names.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv metrics show</code>
         </td>
         <td>Prints the Metrics.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv monitoring elk</code>
         </td>
         <td>A utility to enable and disable all services associated with Elk
            stack.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli network set-config 2&gt; config.json</code>
         </td>
         <td>Configures the IP, hostname, IPMI, and timezone of a cluster. This command
            should only be performed by SREs for customer systems. Once the JSON has been
            edited with the desired values, the configuration can be updated using the
            command: <code class="ph codeph">cat config.json | tscli network set-config</code>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv node add</code>
         </td>
         <td>Adds new nodes to a running cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv node remove &lt;<var>ip</var>&gt;</code>
         </td>
         <td>
            Removes a healthy or deceased node from a running cluster.
            <div>
               <div class="note attention"><span class="attentiontitle">Attention:</span> At this time, this procedure should only be run under the
                  supervision of an Orion team member.
               </div>
            </div>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv node restart-services</code>
         </td>
         <td>Restarts all services on the localhost.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv release install</code>
         </td>
         <td>Installs the releases on the localhost.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag</code>
         </td>
         <td>Adds override to add a gflag to an existing service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag falcon.worker
            falcon_preserve_case true</code>
         </td>
         <td>Enables case configuration. You need to also run <code class="ph codeph">tscli --adv service
            add-gflag falcon_manager.falcon_manager falcon_preserve_case true</code>. It
            will restart the Falcon process.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag falcon_manager
            .falcon_manager falcon_preserve_case true</code>
         </td>
         <td>Enables case configuration. You need to also run <code class="ph codeph">tscli --adv service
            add-gflag falcon.worker falcon_preserve_case true</code>. It will restart the
            Falcon process.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag
            infaagent.infaagent
            agent_max_memory &lt;<var>max_memory</var>&gt;</code>
         </td>
         <td>
            Sets the max memory for the Agent JVM for <span class="ph">ThoughtSpot Data Connect</span> where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>max_memory</var>&gt;</code> is the max memory
                  allowed. 4g is the default value.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag
            infaagent.infaagent
            bypass_ssl true</code>
         </td>
         <td>Allows you to bypass SSL check during <span class="ph">ThoughtSpot</span> connection create for <span class="ph">ThoughtSpot Data Connect</span>. It is set to false by default.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag
            infaagent.infaagent
            max_concurrent_loads &lt;<var>max_loads</var>&gt;</code>
         </td>
         <td>
            Sets the max number of loads to run concurrently for <span class="ph">ThoughtSpot Data Connect</span> where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>max_loads</var>&gt;</code> is the max number of
                  concurrent loads allowed. 4 is the default value.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag
            infaagent.infaagent
            max_memory &lt;<var>max_memory</var>&gt;</code>
         </td>
         <td>
            Sets the max memory for the load task for <span class="ph">ThoughtSpot Data Connect</span> where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>max_memory</var>&gt;</code> is the max memory
                  allowed. 50g is the default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-gflag
            timely.timely
            max_scheduled_jobs &lt;<var>jobs</var>&gt;</code>
         </td>
         <td>
            Sets the max scheduled  jobs (both pinboard and Data Connect) for a cluster
            where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>jobs</var>&gt;</code> is the max number of allowed
                  jobs. 50 is the default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt</code>
         </td>
         <td>Adds override to add a java option to an existing service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.authenticatedIdleTimeoutMs
            &lt;value&gt;</code>
         </td>
         <td>Sets authenticated idle timeout of a user. Defaults to 3 hours. Use this
            command to set configurable session timeout.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.customBrandingEnabled
            true</code>
         </td>
         <td>Enables Style Customization.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.customBrandingFont
            CustomizationEnabled true</code>
         </td>
         <td>Enables Font Customization.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.defaultQuarterStartMonth
            &lt;<var>month_number</var>&gt;</code>
         </td>
         <td>
            Sets a custom fiscal month value on a cluster where:
            <div>
               <ul>
                  <li class="li"><code class="ph codeph">&lt;<var>month_number</var>&gt;</code> is the calendar
                     number of the month. For example, if it's February, enter
                     <var>2</var>.
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.enableAggrWsTableJoin true</code>
         </td>
         <td>
            Allows you to join an aggregated worksheet with a base table. This
            facilitates
            <ul>
               <li class="li">group aggregations with filters</li>
               <li class="li">exposing aggregate data while securing unaggregated data</li>
               <li class="li">worksheets composed of aggregated worksheets and base tables</li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.enableWorksheetOverAggrWorksheet
            true</code>
         </td>
         <td>Allows you to create a worksheet on top of an aggregated worksheet.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.frontendHost &lt;<var>host</var>&gt;</code>
         </td>
         <td>Sets the host for front end access.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.frontendPort &lt;<var>port</var>&gt;</code>
         </td>
         <td>Sets the port for front end access.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.frontendScheme
            &lt;<var>scheme</var>&gt;</code>
         </td>
         <td>
            Sets the scheme for front end access where:
            <div>
               <ul>
                  <li class="li"><code class="ph codeph">&lt;<var>scheme</var>&gt;</code> is either
                     <var>http</var> or <var>https</var>.
                  </li>
               </ul>
            </div>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.FullEmbed
            Configuration.alertBarHidden
            true</code>
         </td>
         <td>Disables error messages for the <span class="ph">ThoughtSpot</span> full embed use case and propagates them to the parent app. This allows the
            error messages to be displayed in the customer's UI appropriately. The command is
            set to false by default.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.FullEmbed
            Configuration.alertBar
            Hidden-primaryNavHidden
            true</code>
         </td>
         <td>Hides the top navigation bar for the <span class="ph">ThoughtSpot</span> full embed use case. The command is set to true by default.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.FullEmbed
            Configuration.powered
            FooterHidden true</code>
         </td>
         <td>Adds the <span class="ph">ThoughtSpot</span> logo to the rendered iFrames in an embedded use case. This is automatically
            turned on if the Style Customization flag, full embed mode, or any embedded
            pinboard, chart, or table is enabled. Customers with an Extended Enterprise
            license have the choice to turn this feature off. The command is set to false by
            default.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.geoMapConfig.dataBatchSize &lt;<var>limit</var>&gt;</code>
         </td>
         <td>This flag allows you to increase the number of data points of a
            visualization. The default data points limit is 5,000 for geo charts, 10,000 for
            pivot tables, and 1,000 for everything else.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.informatica
            CloudConfig.use
            TimelyForScheduling true</code>
         </td>
         <td>Enables pre/post script execution in Data Connect.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.rememberedSessionIdleTimeoutMs
            &lt;value&gt;</code>
         </td>
         <td>Sets remembered session idle timeout of a user. Defaults to forever [-1]. Use
            this command to set configurable session timeout.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.enabled true</code>
         </td>
         <td>Enables scheduled pinboards, which is disabled in prod clusters by
            default.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.maxRecipientLimit
            &lt;<var>recipients</var>&gt;</code>
         </td>
         <td>
            Sets the recipient limit on scheduled pinboard jobs where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>recipients</var>&gt;</code> is the max number of
                  allowed recipients for a scheduled pinboard job. 1000 recipients is the
                  default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.maxTotalAttachment
            SizeInMb &lt;<var>size</var>&gt;</code>
         </td>
         <td>
            Sets the email attachment size limit for scheduled pinboards where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>size</var>&gt;</code> is the max allowed attachment
                  size in MB. 25 MB is the default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.tablePrintData
            BatchSize &lt;<var>rows</var>&gt;</code>
         </td>
         <td>
            Sets the table row limit in PDFs for scheduled pinboards where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>rows</var>&gt;</code> is the max number of rows
                  allowed to be displayed for tables in PDF reports. 100 rows is the
                  default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.thresholdSizeInMbToZip
            &lt;<var>size</var>&gt;</code>
         </td>
         <td>
            Sets the max size limit before switch CSV attachments as zips where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;<var>size</var>&gt;</code> is the max allowed attachment
                  size in MB. 25 MB is the default.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service add-javaopt
            tomcat.tomcat D
            orion.scheduledReporting
            Config.whitelistedDomains
            &lt;'<var>domains</var>'&gt;</code>
         </td>
         <td>
            Sets the email whitelist for scheduled pinboard recipients where:
            <ul>
               <li class="li"><code class="ph codeph">&lt;'<var>domains</var>'&gt;</code> is the email domains you
                  would like to add, surrounded by single quotations, such as
                  <code class="ph codeph">'thoughtspot.com,gmail.com'</code>
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service addresses</code>
         </td>
         <td>Prints the addresses for a service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service delete</code>
         </td>
         <td>Deletes a given service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service delete-gflag</code>
         </td>
         <td>Adds override to delete a gflag from an existing service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service delete-javaopt</code>
         </td>
         <td>Deletes a java option from an existing service. For example, to unset the
            fiscal month value override, you can run the following command: <code class="ph codeph">tscli
            --adv service delete-javaopt tomcat.tomcat D
            orion.defaultQuarterStartMonth</code>.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service delete-javaopt tomcat
            .tomcat D orion.dataformatconfig.should
            formatdata</code>
         </td>
         <td>Disables title casing. You should run this command in conjunction with the
            <code class="ph codeph">falcon_preserve_case</code> commands to enable case
            configuration.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service delete-pack</code>
         </td>
         <td>Deletes override for a given pack.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service
            delete-service-override   </code>
         </td>
         <td>Deletes any override for service config disable Stops and disables given
            service.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service disable</code>
         </td>
         <td>Stops and disables given service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service enable</code>
         </td>
         <td>
            tscli service start" for
            that).
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service get-config</code>
         </td>
         <td>Prints the configuration for a service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service get-pack</code>
         </td>
         <td>Gets override for a given pack.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service list-overrides</code>
         </td>
         <td>Lists the existing overrides of a service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service ls</code>
         </td>
         <td>Lists all services.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service pin </code>
         </td>
         <td>Pin service to given nodes.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service push</code>
         </td>
         <td>Pushes the configuration for a service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service restart</code>
         </td>
         <td>Restarts the service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service set-pack</code>
         </td>
         <td>Sets override for a given pack.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service set-service-override</code>
         </td>
         <td>Sets override for service config (read from stdin).</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service show-pin</code>
         </td>
         <td>Show the current status of pinning of this service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service start</code>
         </td>
         <td>Starts the service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service start-all</code>
         </td>
         <td>Starts all services.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service status</code>
         </td>
         <td>Prints the status of the service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service stop</code>
         </td>
         <td>Stops the service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service stop-all</code>
         </td>
         <td>Stops all service.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv service unpin </code>
         </td>
         <td>Unpin service from a fixed set of nodes, allowing it to be scheduled anywhere
            in the cluster.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli snapshot restore
            &lt;<var>name</var>&gt;
            [--allow_release_change]</code>
         </td>
         <td>Restores a cluster using the named snapshot. If
            <code class="ph codeph">--allow_release_change</code> is specified, allows restoration to a
            snapshot at a different release.
         </td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv statsdb update</code>
         </td>
         <td>Updates statsdb on the cluster.</td>
      </tr>
      <tr>
         <!-- internal -->
         <td>
            <code>tscli --adv zoo fix-local-datadir</code>
         </td>
         <td>Fixes Zookeeper data on the local host.</td>
      </tr>
   </tbody>
</table>
