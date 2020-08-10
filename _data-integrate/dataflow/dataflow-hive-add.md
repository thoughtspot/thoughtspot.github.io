---
title: [Add a Hive database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Hive database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the Hive **Connection type**, the rest of the connection properties appear.

   <details>
     <summary>See the <strong>Create connection</strong> screen for Hive</summary>
     <p>
      <img src="../../images/dataflow-hive-create.png" alt="Create Hive connection" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-connection-type)<br/>Choose the Hive connection type.
   * [HiveServer2 HA configured]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hiveserver2-ha-configured)<br/>Specify this option if using HiveServer2 High Availability.
   * [HiveServer2 zookeeper namespace]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hiveserver2-zookeeper-namespace)<br/>Specify zookeeper namespace as hivesever2. This is the default value. Only when using Hiveserver2 HA.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-host)<br/>Specify the hostname or the IP address of the Hadoop system Only when <em>not</em> using Hiveserver2 HA.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-port)<br/>Specify the port. Only when <em>not</em> using Hiveserver2 HA.
   * [Hive security authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-security-authentication)<br/>Specifies the type of security protocol to connect to the instance. Based on the type of security select the authentication type and provide details.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user)<br/>Specify the user to connect to Hive. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-password)<br/>Specify the password.
   * [Trust store]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-trust-store)<br/>Specify the trust store name for authentication For SSL and Kerberos authentication only.
   * [Trust store password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-trust-store-password)<br/>Specify the password for the trust store For SSL and Kerberos authentication only.
   * [Hive transport mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-transport-mode)<br/>Applicable only for hive process engine. This specifies the network protocol used for communicating between hive nodes.
   * [HTTP path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-http-path)<br/>This is specified as an option when http transport mode is selected For HTTP transport mode only.
   * [Hadoop distribution ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-distribution-)<br/>Provide the Hadoop distribution of the connection
   * [Distribution version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-distribution-version)<br/>Provide the version of the Hadoop distribution
   * [Hadoop conf path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-conf-path)<br/>By default, the system picks the Hadoop configuration files from the HDFS. To override, specify an alternate location. Applies only when using configuration settings that are different from global Hadoop instance settings.
   * [DFS HA configured]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-ha-configured)<br/>Specify if using High Availability for DFS.
   * [DFS name service]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-name-service)<br/>Specify the logical name of the HDFS nameservice.
   * [DFS name node IDs]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-name-node-ids)<br/>Specify a comma-separated list of NameNode IDs. System uses this property to determine all NameNodes in the cluster. XML property name is <code>dfs.ha.namenodes.<em>dfs.nameservices</em></code>.
   * [RPC address for namenode1]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-rpc-address-for-namenode1)<br/>Specify the fully-qualified RPC address for each listed NameNode. Defined as <code>dfs.namenode.rpc-address.<em>dfs.nameservices</em>.<em>name node ID 1</em></code>. For DFS HA and Hadoop Extract only.
   * [RPC address for namenode2]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-rpc-address-for-namenode2)<br/>Specify the fully-qualified RPC address for each listed NameNode. Define as <code>dfs.namenode.rpc-address.<em>dfs.nameservices</em>.<em>name node ID 2</em></code>.
   * [DFS host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-host)<br/>Specify the DFS hostname or the IP address.
   * [DFS port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-port)<br/>Specify the associated DFS port.
   * [Default DFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-default-dfs-location)<br/>Specify the location for the default source/target location.
   * [Temp DFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-temp-dfs-location)<br/>Specify the location for creating temp directory.
   * [DFS security authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-security-authentication)<br/>Select the type of security being enabled.
   * [Hadoop RPC protection]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-rpc-protection)<br/>Hadoop cluster administrators control the quality of protection using the configuration parameter <code>hadoop.rpc.protection</code>.
   * [Hive principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-principal)<br/>Principal for authenticating hive services
   * [User principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user-principal)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)
   * [User keytab]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user-keytab)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)
   * [KDC host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-kdc-host)<br/>Specify KDC Host Name where as KDC (Kerberos Key Distribution Center) is a service than runs on a domain controller server role (Configured from Kerbores configuration-/etc/krb5.conf )
   * [Default realm]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-default-realm)<br/>A Kerberos realm is the domain over which a Kerberos authentication server has the authority to authenticate a user, host or service (Configured from Kerbores configuration-/etc/krb5.conf )
   * [Queue name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-queue-name)<br/>Specify the queue name followed by a coma separated form in yarn.scheduler.capacity.root.queues.  For Hadoop Extract only.
   * [YARN web UI port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-web-ui-port)<br/>Yarn Providing web UI for yarn RM and by default 8088 in use For Hadoop Extract only.
   * [Zookeeper quorum host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-zookeeper-quorum-host)<br/>Specify the value of hadoop.registry.zk.quorum from yarn-site.xml Only when <em>not</em> using Hiveserver2 HA.
   * [Yarn timeline webapp host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-host)<br/>Specify the ip adress of yarn timeline service web application
   * [Yarn timeline webapp port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-port)<br/>Specify the port associated with the yarn timeline service web application
   * [Yarn timeline webapp version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-version)<br/>Specify the version associated with the yarn timeline service web application
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
