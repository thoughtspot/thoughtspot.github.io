---
title: [Add a Snowflake connection]
last_updated: 6/20/2020
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can add a connection to a Snowflake database using ThoughtSpot DataFlow.

To add a new connection to Snowflake, follow these steps:

{% include content/dataflow/add-database-connection.md %}

4. After you select the Snowflake **Connection type**, the rest of the connection properties appear.

   ![Enter connection details]({{ site.baseurl }}/images/dataflow-snowflake-create.png "Enter connection details")

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-name)<br/>Name your connection.<br/>Mandatory field.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-type)<br/>Choose the Snowflake connection type.<br/>Mandatory field.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-user)<br/>Specify the user to connect to Snowflake. This user must have data access privileges to the databases.<br/>Mandatory field.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-password)<br/>Specify the password.<br/>Mandatory field.
   * [Account]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-account)<br/>Specify the account to connect to the Snowflake database.<br/>Mandatory field.
   * [Warehouse]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-warehouse)<br/>Choose the warehouse of databases.<br/>Mandatory field.
   * [Keep connection alive]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-keep-connection-alive)<br/>Specify if system must force the user to log in again after a period of inactivity.<br/>&bull; When <code>TRUE</code>, Snowflake keeps the session active indefinitely, even if there is no user activity.<br/>&bull; When set to <code>FALSE</code> user must log in after four hours of inactivity.<br/>Optional field.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#connection-properties).

5. Click **Create connection**.   
