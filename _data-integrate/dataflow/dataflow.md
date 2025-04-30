---
title: [DataFlow]
last_updated: 06/26/2020
toc: true
summary: "With DataFlow, you can move data into ThoughtSpot from most databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
If your company maintains large sources of data externally, you can use ThoughtSpot DataFlow to easily ingest just the relevant information, and then query that data and use ThoughtSpot's analysis and visualization features. And after you configure scheduled refresh, your analysis visuals are always current.

## Key features of DataFlow
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-native-connectors.png" | prepend: site.baseurl  }}" alt="Native connectors"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Native connectors</strong><br/>Support for dozens of the most common databases,<br/>data warehouses, file sources, and applications.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-point-click.png" | prepend: site.baseurl  }}" alt="Point and click"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Point-and-Click</strong><br/>Visual guided experience.<br/>No SQL or coding skills required.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-granular-selection.png" | prepend: site.baseurl  }}" alt="Granular selection"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Granular selection</strong><br/>Select only the table columns you want to load.<br/>No need to move entire data sets.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-load-incremental-data.png" | prepend: site.baseurl  }}" alt="Incremental data load"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Load incremental data</strong><br/>Option to add only new data to existing tables.<br/>Or you can overwrite existing tables completely.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-map-data.png" | prepend: site.baseurl  }}" alt="Incremental data load"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Data mapping</strong><br/>Flexibly map columns from the data source<br/>to columns in ThoughtSpot’s in-memory data store.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-schedule-sync.png" | prepend: site.baseurl  }}" alt="Schedule sync"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Sync scheduling</strong><br/>Define granular data sync schedules:<br/>monthly, weekly, daily, down to hourly intervals.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-tql-interface.png" | prepend: site.baseurl  }}" alt="TQL editor"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>TQL interface</strong><br/>Run custom commands in an embedded TQL editor.<br/>Create database objects, specify conditions, and validate data.</p>
    </div>
</div>
<div class="grid-container-key-feature">
  <div class="grid-child">
    <img src="{{ "/images/dataflow-alert-monitor.png" | prepend: site.baseurl  }}" alt="Alerts and monitoring"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Alerts and monitoring</strong><br/>Monitor data sync history, view execution logs,<br/>and get alerts when problems must be addressed.</p>
    </div>
</div>

## Administration

We recommend that you perform these tasks before sharing ThoughtSpot DataFlow access with your organization:

- [Manage DataFlow users]({{ site.baseurl }}/data-integrate/dataflow/dataflow-user-management.html)

- [Setup DataFlow mail]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mail-setup.html)

<!--## Supported databases

DataFlow supports the movement of data from the following external databases:
-->
