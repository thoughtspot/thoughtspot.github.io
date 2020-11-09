---
title: [Add an SAP HANA database connection]
last_updated: 7/7/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an SAP HANA database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the SAP HANA **Connection type**, the rest of the connection properties appear.

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-connection-name)<br/>Name your connection.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-connection-type)<br/>Choose the SAP HANA connection type.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-host)<br/>Specify the hostname or the IP address of the Sap Hana system
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-port)<br/>Specify the port associated with the Sap Hana system
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-user)<br/>Specify the user id that will be used to connect to the Sap Hana system. This user should have necessary privileges to access the data in the databases.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-password)<br/>Specify the password for the User
    * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.
    * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
