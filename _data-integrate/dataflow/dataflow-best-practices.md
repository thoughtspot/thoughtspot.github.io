---
title: [DataFlow best practices]
last_updated: 08/03/2020
summary: "Here are some recommendations when working with DataFlow."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

- Open port 9000.
- Allocate minimum disk space of approximately 5 GB in the <code>/etc/thoughtspot/</code> directory.
- Some data sources, such as Snowflake, Amazon S3, Google Cloud Storage, and Azure Blob Storage, temporarily store data as local files before loading into the internal ThoughtSpot database. These sources require additional disk space, depending on how much data is in the source.
