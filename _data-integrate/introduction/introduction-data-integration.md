---
title: [Introduction to Data Integration]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This guide explains how to integrate ThoughtSpot with other data sources for loading data. It also includes information on installing and using the ThoughtSpot clients (ODBC, JDBC, and Informatica).

There are several ways to load data into ThoughtSpot, depending on your goals and where the data is located. You should also consider requirements for recurring loads when planning how best to bring the data into ThoughtSpot.

{% include note.html content="ThoughtSpot displays VARCHAR fields using lower case, regardless of what the original casing of your loaded data is." %}

Here are the options, with information on where to find the documentation for each method:

<table>
<colgroup>
   <col style="width:30%" />
   <col style="width:70%" />
</colgroup>
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ThoughtSpot Data Connect</td>
      <td>ThoughtSpot Data Connect is a web interface for connecting to databases and applications to move data into ThoughtSpot. You can choose which tables and columns to import and apply data transformations. You can also set up recurring loads. See the ThoughtSpot Data Connect Guide for details.</td>
    </tr>
    <tr>
      <td>ThoughtSpot Loader (tsload)</td>
      <td>ThoughtSpot Loader is a command line tool to load CSV files into an existing database schema in ThoughtSpot. This is the fastest way to load extremely large amounts of data, and it can be run in parallel. You can also use this method to script recurring loads. See the ThoughtSpot Administrator Guide for details.</td>
    </tr>
    <tr>
      <td>User Data Import</td>
      <td>Users can upload a spreadsheet through the web interface with User Data Import. This is useful for giving everyone easy access to loading small amounts of their own data. See the ThoughtSpot Administrator Guide for details.</td>
    </tr>
    <tr>
      <td><a href="/data-integrate/clients/about-odbc.html">ODBC</a></td>
      <td>ThoughtSpot provides an ODBC (Open Database Connectivity) driver to enable transferring data from your ETL tool into ThoughtSpot.</td>
    </tr>
    <tr>
      <td><a href="/data-integrate/clients/about-jdbc-driver.html">JDBC</a></td>
      <td>ThoughtSpot provides a JDBC (Java Database Connectivity) driver to enable transferring data from your ETL tool into ThoughtSpot.</td>
    </tr>
    <tr>
      <td><a href="/data-integrate/ssis/about-ssis.html">Connect to SSIS</a></td>
      <td>You can use the ODBC driver to connect to SSIS and import data into ThoughtSpot. Basic instructions are included in this guide.</td>
    </tr>
    <tr>
      <td><a href="/data-integrate/pentaho/about-pentaho.html">Connect to Pentaho</a></td>
      <td>You can use the JDBC driver to connect to Pentaho and import data into ThoughtSpot. Basic instructions are included in this guide.</td>
    </tr>
    <tr>
      <td><a href="/data-integrate/clients/about-informatica.html">Informatica Connector</a></td>
      <td>If your company uses Informatica, you can take advantage of the <a href="/data-integrate/clients/about-informatica.html">Informatica Connector</a>. This allows ThoughtSpot to become a target database, into which you can load data.</td>
    </tr>
  </tbody>
</table>
