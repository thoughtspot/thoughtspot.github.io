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

   Depending on your choice of authentication mechanism, you may use different properties.

   <details>
     <summary>Create connection interface for IBM Db2, <strong>no authentication</strong></summary>
     <p>
      <img src="../../images/dataflow-ibm-db2-no-auth-create.png" alt="add an IBM Db2 connection without authentication" /></p>
   </details>

   <details>
     <summary>Create connection interface for IBM Db2, <strong>SSL authentication</strong></summary>
     <p>
      <img src="../../images/dataflow-ibm-db2-ssl-create.png" alt="add an IBM Db2 connection with SSL authentication" /></p>
   </details>    

   <details>
     <summary>Create connection interface for IBM Db2, <strong>LDAP authentication</strong></summary>
     <p>
      <img src="../../images/dataflow-ibm-db2-ldap-create.png" alt="add an IBM Db2 connection with LDAP authentication" /></p>
   </details>

   <details>
     <summary>Create connection interface for IBM Db2, <strong>Kerberos authentication</strong></summary>
     <p>
      <img src="../../images/dataflow-ibm-db2-kerberos-create.png" alt="add an IBM Db2 connection with Kerberos authentication" /></p>
   </details>

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-connection-type)<br/>Choose the IBM Db2 connection type.<br/>Mandatory field.
   * [Platform]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-platform)<br/>An environment in which a data point is executed. Specify LUW, iSeries, or Mainframe.<br/>Optional field.
   * [Host]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-host)<br/>Specify the hostname or the IP address of the Db2 system<br/>Mandatory field.
   * [Port]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-port)<br/>Specify the port associated to the Db2 system.<br/>Mandatory field.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-user)<br/>Specify the user to connect to IBM Db2. This user must have data access privileges.<br/>Mandatory field.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-password)<br/>Specify the password.<br/>Mandatory field.
   * [Database]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-database)<br/>Collection of information that is organized so that it can be easily accessed, managed and updated.<br/>Mandatory field.
   * [Database alias]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-conn-database-alias)<br/>Specify database alias for easy identification.<br/>Mandatory field.
   * [Version]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-version)<br/>Specify the Db2 version being connected to<br/>Optional field.
   * [Code page]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#dataflow-ibm-db2-sync-code-page)<br/>A standardized code in which characters are represented for computer storage and transmission by the numbers 0 through 127. Select either ASCII or EBCDIC.<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-ibm-db2-reference.html#connection-properties).

5. Click **Create connection**.   
