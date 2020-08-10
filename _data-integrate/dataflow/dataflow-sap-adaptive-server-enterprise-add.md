---
title: [Add an SAP Adaptive Server Enterprise database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an SAP Adaptive Server Enterprise database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the SAP Adaptive Server Enterprise **Connection type**, the rest of the connection properties appear.

    <details>
      <summary>See the <strong>Create connection</strong> screen for SAP Adaptive Server Enterprise</summary>
        <p>
        <img src="../../images/dataflow-sap-adaptive-server-enterprise-create.png" alt="Create SAP Adaptive Server Enterprise connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-connection-type)<br/>Choose the SAP Adaptive Server Enterprise connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-host)<br/>Specify the hostname or the IP address of the Sybase system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-port)<br/>Specify the port associated to the Sybase system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-user)<br/>Specify the user id that will be used to connect to the Sybase system. This user needs the necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-password)<br/>Specify the password for the User
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-version)<br/>Specify the version of Sybase you are using
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
