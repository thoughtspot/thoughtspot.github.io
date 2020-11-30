---
title: [Scriptability overview]
last_updated: 10/20/2020
summary: Use ThoughtSpot's Scriptability to migrate or edit  Worksheets, Pinboards, Answers, Views, and tables in a human-readable format.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating Worksheets, Pinboards, Answers, Views, and tables.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The [Scriptability]({{ site.baseurl }}/admin/scriptability/scriptability.html) feature supports several scenarios that you may encounter:

- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster.

- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table.

- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates.

- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

You can download these objects in the form of a scriptable file in the [ThoughtSpot Scripting Language]({{ site.baseurl }}/admin/scriptability/tsl.html), or TSL.

Use Scriptability to export Worksheets, Views, tables, Pinboards, and Answers in a human-readable format. Refer to [Migrate or restore objects]({{ site.baseurl }}/admin/scriptability/scriptability.html).
