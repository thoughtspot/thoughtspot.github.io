---
title: [Connectors reference]

toc: false
last_updated: tbd
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Here is a list of all of the external database connectors, and their connection credentials, that you need to save in ThoughtSpot Embrace. As you create a new external connection, you need specific connection information to establish seamless and secure connection with that database.

{% include note.html content="Keep watching this space for more external DB connection details that ThoughtSpot Embrace will support in future." %}

## Snowflake
 - **Connection name**: Mandatory. Enter a new Snowflake connection name.
 - **Description**: Optional. Provide a short description about the connection.
 - **AccountName**: Mandatory. Enter the account name associated with the Snowflake connection.
 - **User**: Mandatory. Enter the Snowflake account username.
 - **Password**: Mandatory. Enter the Snowflake account password.
 - **Role**: Mandatory. Specify the privilege of the user.
 - **Warehouse**: Mandatory. Specify the warehouse associated with the connection.
 - **Database**: Optional. Specify the database associated with the account.
 - **Schema**: Optional. Specify the schema associated with the database.

## Related articles
-   [Add a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/setup-a-new-connection.html)
-   [Modify a connection]({{ site.baseurl }}/data-integrate/embrace/getting-started/modify-a-connection.html)
