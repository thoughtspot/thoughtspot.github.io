---
title: [DataFlow home]
last_updated: 06/29/2020
toc: true
summary: "The DataFlow Home interface reports all historical and upcoming syncing information."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

With a single glance, the Home interface for Dataflow reports the sync performance across your entire organization.

![Historical sync reports]({{ site.baseurl }}/images/dataflow-home.png "Historical sync reports")

1. The filters include the following:

   - **Sync period**:
      - _**Historical**_ (default) display includes the sync count, graphs, and charts.

      - _**Upcoming**_  display shows the list of connections that include the following columns: _Connection name_, _Table name_, _Next scheduled run_, _Repeat_, and _Last run time_ details. The date filter and the graphs details are not visible.

   - Date filter: _Last 24 hours_, _Last 7 days_, _Last 30 days_(default), or _All time_
   - User: _All_ or individual users
   - Connection: _All_ or individual connections
   - ThoughtSpot Table: _All_ or individual

2. **Key indicators**:

   - Total Syncs
   - Successful Syncs
   - Unsuccessful Syncs
   - Total Rows Loaded   

3. **Daily Syncs by Status** is an Area chart that shows _In Progress_, _Successful_, and _Unsuccessful_ syncs over time.

4. **Daily Rows Loaded by Connection** is a column chart that shows the number of rows loaded for each connection over time.

5. **Sync History** reports the following information for all connections:

   - Connection name
   - Table name
   - Last sync time
   - Rows retrieved
   - Time taken
   - Status
   - View log

6. **TQL editor** enables users to enter DDL commands to run on the internal database, such us `CREATE DATABSE ...` and similar.

7. **Search** enables users to find information on specific tables, by name.    
