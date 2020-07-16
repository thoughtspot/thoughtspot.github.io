---
title: [Add an IBM Db2 database connection]
last_updated: 7/6/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to an IBM Db2 database using ThoughtSpot DataFlow.

Follow these steps:


{% include content/dataflow/add-database-connection.md %}

4. After you select the IBM Db2 **Connection type**, the rest of the connection properties appear.

   <details>
     <summary>See the <strong>Create connection</strong> screen for IBM Db2</summary>
       <p>
       <img src="../../images/dataflow-ibm-db2-create.png" alt="Create IBM Db2 connection" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-connection-type)<br/>Choose the IBM Db2 connection type.
   * [Platform]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-platform)<br/>An environment in which a data point is executed. Specify LUW, iSeries, or Mainframe.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-host)<br/>Specify the hostname or the IP address of the Db2 system<br/>Mandatory field.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-port)<br/>Specify the port associated to the Db2 system.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-user)<br/>Specify the user to connect to IBM Db2. This user must have data access privileges.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-password)<br/>Specify the password.
   * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.
   * [Database alias]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-database-alias)<br/>Specify database alias for easy identification.
   * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-version)<br/>Specify the Db2 version being connected to<br/>Optional field.
   * [Code page]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-code-page)<br/>A standardized code in which characters are represented for computer storage and transmission by the numbers 0 through 127. Select either ASCII or EBCDIC.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
