---
title: [ThoughtSpot Cloud requirements and support]
last_updated: 11/05/2021
summary: "Information about features, and how to sign up."
toc: true
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

## Supported regions
ThoughtSpot Cloud is now available in the following regions:
* US East (N. Virginia)
* US West (Oregon)
* Sydney
* Ireland
* Frankfurt
* Singapore

## Requirements

- Outbound port 443 must be open.
- If you are going to use Snowflake with ThoughtSpot Cloud, and you have a network policy set in Snowflake, you must add the outbound IP address of your ThoughtSpot Cloud instance to the whitelist inside your Snowflake network policy. [Contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) for assistance.

## Supported features

ThoughtSpot Cloud supports the following connections:
- Snowflake
- Google BigQuery
- Amazon Redshift
- Azure Synapse
- Oracle ADW
- Starburst
- Databricks

## Unsupported features

ThoughtSpot Cloud does not support the following:
- Loading data using tsload
- Data cannot be migrated to another ThoughtSpot cluster, but you can migrate Liveboards, answers, views, tables, and worksheets.  

    For migration details, see [Scriptability]({{ site.baseurl }}/admin/ts-cloud/scriptability.html).

## Restrict cluster access only to certain IP addresses
By default, frontend access to your ThoughtSpot Cloud cluster(s) is open to all source IPs. You have the option to restrict access only to certain IP addresses. To restrict access, gather the following information, and [contact ThoughtSpot Support](https://community.thoughtspot.com/customers/s/contactsupport){: target="_blank"}:

- **Cluster name(s)**/ fqdn (fully-qualified domain name). For example, `abcd.thoughtspot.cloud`
- **Source IP(s)** ( Public IP) in CIDR notation. For example, `10.10.10.10/32`

Send this information to [ThoughtSpot Support](https://community.thoughtspot.com/customers/s/contactsupport){: target="_blank"} and ask them to restrict cluster access to only the IP(s) you specified.

## How to sign up

To sign up for ThoughtSpot Cloud, talk to your ThoughtSpot contact.
