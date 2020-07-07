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

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-connection-type)<br/>Choose the SAP Adaptive Server Enterprise connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-host)<br/>Specify the hostname or the IP address of the Sybase system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-port)<br/>Specify the port associated to the Sybase system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-user)<br/>Specify the user id that will be used to connect to the Sybase system. This user needs the necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#dataflow-sap-adaptive-server-enterprise-conn-version)<br/>Specify the version of Sybase you are using<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-adaptive-server-enterprise-reference.html#connection-properties).

5. Click **Create connection**.   
