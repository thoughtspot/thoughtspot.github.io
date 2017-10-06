---
title: [Share tables and columns]
tags:
keywords: tbd
last_updated: tbd
summary: "You can share an entire table, or only some of its columns."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
By default, when data is loaded using the ThoughtSpot Loader, ODBC, or JDBC, it is only visible to administrators. Data imported from a Web browser is visible to administrators and the user who uploaded it. Administrators and owners can share **Can View** or **Can Edit** privileges on tables with other users, who can further share them with others.

Use caution when sharing tables, because any objects created from them will have dependencies on the tables and their underlying structure. Objects created from tables can include worksheets, answers, and pinboards. This means that if a user wants to drop or modify a table, any object that depends upon it must be edited or removed first, to remove the dependency. For this reason, it is a best practice to only grant the **Edit** permission on tables to a small number of users.

{% include content/share_data.md %}
