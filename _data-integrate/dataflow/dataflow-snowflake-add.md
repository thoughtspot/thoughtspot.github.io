---
title: [Add a Snowflake connection]
last_updated: 6/20/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Snowflake database using ThoughtSpot DataFlow.

To add a new connection to Snowflake, follow these steps:

1. Click **Connections** in the top navigation bar.

2. In the **Connections** interface, click **Add connection** in the top right corner.

3. In the **Create Connection** interface, enter the **Connection name**, and select the **Connection type**.

4. After you select the Snowflake **Connection type**, the rest of the connection properties appear.

   ![Enter connection details]({{ site.baseurl }}/images/dataflow-snowflake-create.png "Enter connection details")

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-type)<br/>Choose the Snowflake connection type.<br/>Mandatory field.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-user)<br/>Specify the user to connect to Snowflake. This user must have data access privileges to the databases.<br/>Mandatory field.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-password)<br/>Specify the password.<br/>Mandatory field.
   * [Account]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-account)<br/>Specify the account to connect to the Snowflake database.<br/>Mandatory field.
   * [Warehouse]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-warehouse)<br/>Choose the warehouse of databases.<br/>Mandatory field.
   * [Keep connection alive]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-keep-connection-alive)<br/>Specify if system must force the user to log in again after a period of inactivity.<br/><ul><li>When <code>TRUE</code>, Snowflake keeps the session active indefinitely, even if there is no user activity.</li><li>When set to <code>FALSE</code> user must log in after four hours of inactivity.</li></ul><br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#connection-properties).
