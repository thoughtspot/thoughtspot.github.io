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

   * [Connection name]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-name)<br/>Name your connection.
   * [Connection type]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-connection-type)<br/>Choose the Snowflake connection type.
   * [User]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-user)<br/>Specify the user to connect to Snowflake. This user must have data access privileges to the databases.
   * [Password]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-password)<br/>Specify the password.
   * [Account]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-account)<br/>Specify the account to connect to the Snowflake database.
   * [Warehouse]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-warehouse)<br/>Choose the warehouse of databases.
   * [Role]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-role)<br/>Specify the role that defines the set of privelleges assigned to a user or a user group.
   * [Keep connection alive]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-keep-connection-alive)<br/>Specify if system must force the user to log in again after a period of inactivity.<br/>&bull; When <code>TRUE</code>, Snowflake keeps the session active indefinitely, even if there is no user activity.<br/>&bull;  When set to <code>FALSE</code> user must log in after four hours of inactivity. Under **Advanced Options**.
   * [JDBC options]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#dataflow-snowflake-conn-jdbc-options)<br/>Specify the options associated with the JDBC URL.

   See [Connection properties]({{ site.baseurl }}/data-integrate/dataflow/dataflow-snowflake-reference.html#connection-properties) for details, defaults, and examples.

5. Click **Create connection**.   
