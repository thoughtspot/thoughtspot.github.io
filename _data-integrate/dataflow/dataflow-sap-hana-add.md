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

    <details>
      <summary>See the <strong>Create connection</strong> screen for SAP HANA</summary>
        <p>
        <img src="../../images/dataflow-sap-hana-create.png" alt="Create SAP HANA connection" /></p>
    </details>

    * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
    * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-connection-type)<br/>Choose the SAP HANA connection type.<br/>Mandatory field.
    * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-host)<br/>Specify the hostname or the IP address of the Sap Hana system<br/>Mandatory field.
    * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-port)<br/>Specify the port associated with the Sap Hana system<br/>Mandatory field.
    * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-user)<br/>Specify the user id that will be used to connect to the Sap Hana system. This user should have necessary privileges to access the data in the databases.<br/>Mandatory field.
    * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-password)<br/>Specify the password for the User<br/>Mandatory field.
    * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#dataflow-sap-hana-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.<br/>Mandatory field.
    
   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-sap-hana-reference.html#connection-properties).

5. Click **Create connection**.   
