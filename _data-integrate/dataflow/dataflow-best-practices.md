---
title: [DataFlow requirements and guidelines]
last_updated: 08/24/2020
summary: "Here are some requirements and guidelines for working with DataFlow."
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---

## Requirements

- You must open port 9000. See [Network ports]({{ site.baseurl }}/appliance/ports.html).
- Allocate minimum disk space of approximately 5 GB in the <code>/etc/thoughtspot/</code> directory.

## Guidelines

- Some data sources, such as Snowflake, Amazon S3, Google Cloud Storage, and Azure Blob Storage, temporarily store data as local files before loading into the internal ThoughtSpot database. These sources require additional disk space, depending on how much data is in the source.
- The DataFlow TQL editor supports the following commands:  
  - `ALTER TABLE`: rename, add, and remove columns. Modify column datatypes. Add and remove primary and foreign keys.  
  - `CREATE DATABASE`  
  - `CREATE SCHEMA`  
  - `DELETE FROM <table> [WHERE...]`  
  - `UPDATE <table> ... SET ... [WHERE ...]`  

  For details on these TQL commands, see the [TQL reference]({{ site.baseurl }}/reference/sql-cli-commands.html).
