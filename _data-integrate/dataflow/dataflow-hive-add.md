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
     <summary><strong>Create connection</strong> interface for Hive</summary>
     <p>
      <img src="../../images/dataflow-hive-create.png" alt="Create Hive connection" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#)<br/>Choose the Azure Synapse connection type.<br/>Mandatory field.
   * [HiveServer2 HA configured]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hiveserver2-ha-configured)<br/>Specify this option if using HiveServer2 High Availability.<br/>Mandatory field.
   * [HiveServer2 zookeeper namespace]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hiveserver2-zookeeper-namespace)<br/>Specify zookeeper namespace as hivesever2. This is the default value.<br/>Mandatory field. Only when using Hiveserver2 HA.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-host)<br/>Specify the hostname or the IP address of the Hadoop system<br/>Mandatory field. Only when <em>not</em> using Hiveserver2 HA.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-port)<br/>Specify the port.<br/>Mandatory field. Only when <em>not</em> using Hiveserver2 HA.
   * [Hive security authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-security-authentication)<br/>Specifies the type of security protocol to connect to the instance. Based on the type of security select the authentication type and provide details.<br/>Mandatory field.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user)<br/>Specify the user to connect to Hive. This user must have data access privileges.<br/>Mandatory field. For simple, LDAP, and SSL authentication only.
   * [Trust store]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-trust-store)<br/>Specify the trust store name for authentication<br/>Mandatory field. For SSL and Kerberos authentication only.
   * [Trust store password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-trust-store-password)<br/>Specify the password for the trust store<br/>Mandatory field. For SSL and Kerberos authentication only.
   * [Hive transport mode]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-transport-mode)<br/>Applicable only for hive process engine. This specifies the network protocol used for communicating between hive nodes. <br/>Mandatory field.
   * [HTTP path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-http-path)<br/>This is specified as an option when http transport mode is selected<br/>Mandatory field. For HTTP transport mode only.
   * [Hadoop distribution ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-distribution-)<br/>Provide the distribution of Hadoop being connected to<br/>Mandatory field.
   * [Distribution version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-distribution-version)<br/>Provide the version of the Distribution chosen above<br/>Mandatory field.
   * [Hadoop conf path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-conf-path)<br/>By default Diyotta picks the Hadoop configuration files from the HDFS. In order to override this, specify an alternate location to pick the files. This is normally done if Diyotta should use different configuration settings than that set globally for the Hadoop instance.<br/>Mandatory field.
   * [DFS HA configured]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-ha-configured)<br/>Enables High Availability for DFS<br/>Optional field. For Hadoop Extract only.
   * [DFS name service]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-name-service)<br/>The logical name of given to HDFS nameservice. <br/>Mandatory field. For DFS HA and Hadoop Extract only.   * [DFS name node ID's]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-name-node-id's)<br/>Provides the list of NameNode IDs separted by comma and DataNodes use this property to determine all the NameNodes in the cluster. XML property name is dfs.ha.namenodes.<dfs.nameservices><br/>Optional field. For DFS HA and Hadoop Extract only.
   * [RPC address for namenode1]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-rpc-address-for-namenode1)<br/>To specify the fully-qualified RPC address for each listed NameNode and defined as dfs.namenode.rpc-address.<dfs.nameservices>.<name node ID 1><br/>Mandatory field. For DFS HA and Hadoop Extract only.
   * [RPC address for namenode2]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-rpc-address-for-namenode2)<br/>To specify the fully-qualified RPC address for each listed NameNode and defined as dfs.namenode.rpc-address.<dfs.nameservices>.<name node ID 2><br/>Mandatory field. For DFS HA and Hadoop Extract only.
   * [DFS host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-host)<br/>Specify the DFS hostname or the IP address<br/>Mandatory field. For Hadoop Extract only, when <em>not</em> using DFS HA.
   * [DFS port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-port)<br/>Specify the associated DFS port<br/>Mandatory field. For Hadoop Extract only, when <em>not</em> using DFS HA.
   * [Default DFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-default-dfs-location)<br/>Specify the location for the default source/target location<br/>Mandatory field. For Hadoop Extract only.
   * [Temp DFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-temp-dfs-location)<br/>Specify the location for creating temp directory<br/>Mandatory field. For Hadoop Extract only.
   * [DFS security authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-dfs-security-authentication)<br/>Select the type of security being enabled <br/>Mandatory field. For Hadoop Extract only.
   * [Hadoop RPC protection]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hadoop-rpc-protection)<br/>Hadoop cluster administrators control the quality of protection using the configuration parameter hadoop.rpc.protection<br/>Mandatory field. When using Kerberos DFS security authentication <em>and</em> Hadoop Extract.
   * [Hive principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-hive-principal)<br/>Principal for authenticating hive services <br/>Mandatory field.
   * [User principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user-principal)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)<br/>Mandatory field.
   * [User keytab]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-user-keytab)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)<br/>Mandatory field.
   * [KDC host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-kdc-host)<br/>Specify KDC Host Name where as KDC (Kerberos Key Distribution Center) is a service than runs on a domain controller server role (Configured from Kerbores configuration-/etc/krb5.conf )<br/>Mandatory field.
   * [Default realm]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-default-realm)<br/>A Kerberos realm is the domain over which a Kerberos authentication server has the authority to authenticate a user, host or service (Configured from Kerbores configuration-/etc/krb5.conf )<br/>Mandatory field.
   * [Queue name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-queue-name)<br/>Specify the queue name followed by a coma separated form in yarn.scheduler.capacity.root.queues. <br/>Mandatory field. For Hadoop Extract only.
   * [YARN web UI port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-web-ui-port)<br/>Yarn Providing web UI for yarn RM and by default 8088 in use<br/>Mandatory field. For Hadoop Extract only.
   * [Zookeeper quorum host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-zookeeper-quorum-host)<br/>Specify the value of hadoop.registry.zk.quorum from yarn-site.xml<br/>Mandatory field. Only when <em>not</em> using Hiveserver2 HA.
   * [Yarn timeline webapp host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-host)<br/>Specify the ip adress of yarn timeline service web application <br/>Mandatory field.
   * [Yarn timeline webapp port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-port)<br/>Specify the port associated with the yarn timeline service web application <br/>Mandatory field.
   * [Yarn timeline webapp version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#dataflow-hive-conn-yarn-timeline-webapp-version)<br/>Specify the version associated with the yarn timeline service web application <br/>Mandatory field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hive-reference.html#connection-properties).

5. Click **Create connection**.   
