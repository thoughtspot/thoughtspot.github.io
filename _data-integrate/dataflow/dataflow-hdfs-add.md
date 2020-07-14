---
title: [Add an HDFS connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to the HDFS file system using ThoughtSpot DataFlow.

Follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the File **Connection type**, the rest of the connection properties appear.

   Depending on your choice of authentication mechanism, you may use different properties.


   <details>
     <summary>See the <strong>Create connection</strong> screen for HDFS</summary>
     <p>
      <img src="../../images/dataflow-hdfs-create.png" alt="Add a connection to HDFS" /></p>
   </details>

   <details>
     <summary>See the <strong>Create connection</strong> screen for HDFS with DFS-HA enabled</summary>
     <p>
      <img src="../../images/dataflow-hdfs-dfs-ha-create.png" alt="Add a connection to HDFS with DFS-HA" /></p>
   </details>

   <details>
     <summary>See the <strong>Create connection</strong> screen for HDFS with DFS-HA enabled, and Kerberos authentication</summary>
     <p>
      <img src="../../images/dataflow-hdfs-dfs-ha-kerberos-create.png" alt="Add a connection to HDFS with DFS-HA and Kerberos authentication" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-connection-type)<br/>Choose the Google BigQuery connection type.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-user)<br/>Specify the user to connect to HDFS file system. This user must have data access privileges. For Hive security with simple, LDAP, and SSL authentication only.
   * [Hadoop distribution ]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hadoop-distribution-)<br/>Provide the distribution of Hadoop being connected to<br/>Mandatory field.
   * [Distribution version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-distribution-version)<br/>Provide the version of the Distribution chosen above<br/>Mandatory field.
   * [Hadoop conf path]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hadoop-conf-path)<br/>By default, the system picks the Hadoop configuration files from the HDFS. To override, specify an alternate location. Applies only when using configuration settings that are different from global Hadoop instance settings.
   * [HDFS HA configured]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hdfs-ha-configured)<br/>Enables High Availability for HDFS<br/>Optional field.
   * [HDFS name service]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hdfs-name-service)<br/>The logical name of given to HDFS nameservice. <br/>Mandatory field. For HDFS HA only.
   "* [HDFS name node IDs]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hdfs-name-node-ids)<br/>Provides the list of NameNode IDs separted by comma and DataNodes use this property to determine all the NameNodes in the cluster.
   XML property name is <code>dfs.ha.namenodes.<em>dfs.nameservices</em></code>. For HDFS HA only."
   * [RPC address for namenode1]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-rpc-address-for-namenode1)<br/>To specify the fully-qualified RPC address for each listed NameNode and defined as <code>dfs.namenodes.rpc-address.<em>dfs.nameservices</em>.<em>name_node_ID_1></em></code>. For HDFS HA only.
   * [RPC address for namenode2]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-rpc-address-for-namenode2)<br/>To specify the fully-qualified RPC address for each listed NameNode and defined as <code>dfs.namenode.rpc-address.<em>dfs.nameservices</em>.<em>name_node_ID_2</em></code>. For HDFS HA only.
   * [DFS host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-dfs-host)<br/>Specify the DFS hostname or the IP address<br/>Mandatory field. For when <em>not</em> using HDFS HA.
   * [DFS port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-dfs-port)<br/>Speciffy the associated DFS port<br/>Mandatory field. For when <em>not</em> using HDFS HA.
   * [Default HDFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-default-hdfs-location)<br/>Specify the location for the default source/target location<br/>Mandatory field.
   * [Temp HDFS location]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-temp-hdfs-location)<br/>Specify the location for creating temp directory<br/>Mandatory field.
   * [HDFS security authentication]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hdfs-security-authentication)<br/>Select the type of security being enabled <br/>Mandatory field.
   * [Hadoop RPC protection]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hadoop-rpc-protection)<br/>Hadoop cluster administrators control the quality of protection using the configuration parameter hadoop.rpc.protection<br/>Mandatory field. For DFS security authentication with Kerberos only.
   * [Hive principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-hive-principal)<br/>Principal for authenticating hive services <br/>Mandatory field.
   * [User principal]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-user-principal)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)<br/>Mandatory field.
   * [User keytab]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-user-keytab)<br/>To authenticate via a key-tab you must have supporting key-tab file which is generated by Kerberos Admin and also requires the user principal associated with Key-tab ( Configured while enabling Kerberos)<br/>Mandatory field.
   * [KDC host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-kdc-host)<br/>Specify KDC Host Name where as KDC (Kerberos Key Distribution Center) is a service than runs on a domain controller server role (Configured from Kerbores configuration-/etc/krb5.conf )<br/>Mandatory field.
   * [Default realm]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdfs-reference.html#dataflow-hdfs-conn-default-realm)<br/>A Kerberos realm is the domain over which a Kerberos authentication server has the authority to authenticate a user, host or service (Configured from Kerbores configuration-/etc/krb5.conf )<br/>Mandatory field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-hdf-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
