---
title: [DataFlow Tips]
last_updated: 03/30/2021
summary: "We have several tips for managing the data sync in your organization."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="truncate-table"}
## Truncate table

Use the `<a href="{{ site.baseurl }}/reference/data-importer-ref.html">--empty_target</a>` tsload option to truncate the table, and remove `delete` from the target query.

In "tsload options" sync parameter, the default is `--empty_target false`. You can change this by explicitly adding `--empty_target true`.
