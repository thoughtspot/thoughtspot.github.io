---
title: [Scriptability]
last_updated: 21/7/2020
summary: Use ThoughtSpot's Scriptability to migrate or edit  Worksheets, Pinboards, and Answers in a human-readable format.
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
ThoughtSpot developed its own scriptable approach for exporting, enhancing, and migrating Worksheets, Pinboards, and Answers.

You can model your data and build out sophisticated dashboards in your test environment, before deploying to all users.

The Scriptability feature supports several scenarios that you may encounter:

- **Migrating from a development environment to a production environment** by downloading files from the development cluster and uploading the same files into the production cluster.

- **Implementing metadata changes outside ThoughtSpot UI**, such as replacing the underlying tables for an object, or replacing a single column from one table with a column in another table.

- **Making bulk changes**, such as mass renaming of objects defined by Worksheets, and managing duplicates
You can download these objects in the form of a scriptable file in the ThoughtSpot Scripting Language, or TSL.

Use SpotApps to export Worksheets, Pinboards, and Answers in a human-readable format.
