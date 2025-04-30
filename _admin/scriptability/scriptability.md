---
title: [Scriptability]
last_updated: 7/21/2020
summary: Use ThoughtSpot's Scriptability to migrate or edit  Worksheets, Pinboards, and Answers in a human-readable format.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Scriptability for Answers and Pinboards is in <span class="label label-beta">Beta</span>. To enable Scriptable Answers and Pinboards, contact ThoughtSpot Support.

ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating [Worksheets]({{ site.baseurl }}/admin/worksheets/worksheet-export.html), [Pinboards]({{ site.baseurl }}/admin/scriptability/scriptability-pinboard.html), and [Answers]({{ site.baseurl }}/admin/scriptability/scriptability-answer.html).

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:

- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster.

- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table.

- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates.

- **Reusing existing objects to build new objects**, such as building two very similar objects based on a similar, pre-existing object.

You can download these objects in the form of a scriptable file in the ThoughtSpot Scripting Language, or TSL.

Use Scriptability to export Worksheets, Pinboards, and Answers in a human-readable format.

{% include content/tml-note.md %}
