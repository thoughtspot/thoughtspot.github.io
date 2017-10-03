---
title: [Data Caching]
tags:
keywords: data,clsuter,memory,inport,tsload
last_updated: tbd
summary: "ThoughtSpot does all analysis against data in memory to help achieve
fast results across millions and billions of records of data."
sidebar: mydoc_sidebar
---
ThoughtSpot caches data as relational tables in memory. The tables can be
sourced from different data sources and joined together. ThoughtSpot has four
ways to get data into the cluster:

![]({{ site.baseurl }}/images/DataCaching.png)

ThoughtSpot provides a JDBC and ODBC driver that can be used to write data to
ThoughtSpot. This is useful for customers who already have an existing
ETL process or tool and want to extend it to populate the ThoughtSpot cache.

Data Connect is a ThoughtSpot add-on that connects to a wide variety of data
sources and pulls data into ThoughtSpot.

You can use the `tsload` command line tool to bulk load delimited data with very
high throughput. Finally, individual users can upload smaller (< 50MB)
spreadsheets or delimited files.

Which approach you use depends on your environment and data needs.

The following table shows the tradeoffs between different data caching options.
Many implementations use a variety of approaches. For example, a solution with a
large amount of initial data and smaller daily increments might use tsload to
load the initial data and then use the JDBC driver with an ETL tool for
incremental loads.

<table>
  <tr>
    <th>JDBC/ODBC</th>
    <th>Data Connect</th>
    <th>tsload</th>
  </tr>
  <tr>
    <td>
    <ul>
    <li>Have an ETL load, for example, Informatica, SSIS, and so forth.</li>
    <li>Have available resources to create and manage ETL.</li>
    <li>Have smaller daily loads.</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Purchased as an add-on.</li>
    <li>Source data is well formed for ThoughtSpot or it can be modified prior to being loaded.</li>
    <li>Have smaller daily loads.</li>
    </ul>
    </td>
    <td>
    <ul>
    <li>Initial data load.</li>
    <li>When JDBC/ODBC and Data Connect are not options.</li>
    <li>When there are large recurring daily loads.</li>
    <li>Higher throughput but can add I/O costs.</li>
    </ul>
    </td>
  </tr>
</table>
