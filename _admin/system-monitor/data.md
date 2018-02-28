---
title: [Data page]
keywords: data,system,monitor
tags: [indexing]
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
The **Data** page shows all the stored tables with details on the last update
time, time taken for auto-indexing, number of rows, etc.

 ![]({{ site.baseurl }}/images/control_center_data.png "Partial view of the System Health Center: Data")

## Database Status

The **Database Status** section has the following values:

<table>
    <colgroup>
    <col width="25%" />
    <col width="60%" />
    </colgroup>
    <thead>
       <tr class="header">
        <th>Status</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <p dir="ltr">READY</p>
        </td>
        <td>The data has been loaded.</td>
       </tr>
       <tr>
        <td>IN PROGRESS</td>
        <td>The data is still being loaded.</td>
       </tr>
       <tr>
        <td>STALE</td>
        <td>The data is not up to date.</td>
       </tr>
       <tr>
        <td>ERROR</td>
        <td>The table is invalid. Call Customer Support.</td>
       </tr>
       <tr>
        <td>Search</td>
        <td>
         <p dir="ltr">READY</p>
        </td>
        <td>The data is up to date and searchable.</td>
       </tr>
       <tr>
        <td>
         <p dir="ltr">NOT READY</p>
        </td>
        <td>The data is not ready to be searched.</td>
       </tr>
       <tr>
        <td>
         <p dir="ltr">DELETING INDEX</p>
        </td>
        <td>The table has already been deleted, but the index still exists due to the latency
         between the database and search engine.</td>
       </tr>
       <tr>
        <td>INDEXING DISABLED</td>
        <td>Either too many tokens exist in a column for it to be indexed, or indexing has been
         disabled manually.</td>
       </tr>
       <tr>
        <td>CREATING INDEX</td>
        <td>The index is being created.</td>
       </tr>
       <tr>
        <td>UPDATING INDEX</td>
        <td>A change has been made to indexing or the data, and the index is being updated to
         reflect it.</td>
       </tr>
       </tbody>
    </table>


## Search Status


<table>
    <colgroup>
    <col width="25%" />
    <col width="60%" />
    </colgroup>
    <thead>
       <tr class="header">
        <th>Status</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
    <tr>
     <td>
      <p dir="ltr">READY</p>
     </td>
     <td>The data is up to date and searchable.</td>
    </tr>
    <tr>
     <td>
      <p dir="ltr">NOT READY</p>
     </td>
     <td>The data is not ready to be searched.</td>
    </tr>
    <tr>
     <td>
      <p dir="ltr">DELETING INDEX</p>
     </td>
     <td>The table has already been deleted, but the index still exists due to the latency
      between the database and search engine.</td>
    </tr>
    <tr>
     <td>INDEXING DISABLED</td>
     <td>Either too many tokens exist in a column for it to be indexed, or indexing has been
      disabled manually.</td>
    </tr>
    <tr>
     <td>CREATING INDEX</td>
     <td>The index is being created.</td>
    </tr>
    <tr>
     <td>UPDATING INDEX</td>
     <td>A change has been made to indexing or the data, and the index is being updated to
      reflect it.</td>
    </tr>
    </tbody>
 </table>
