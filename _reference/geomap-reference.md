---
title: [Geo Map Reference]
last_updated: 5/20/2020
summary: "ThoughtSpot recognizes and supports a broad list of geographic regions and their subdivisions."
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---
This reference lists supported countries and their subdivisions. ThoughtSpot renders these regions in geo maps.

| You may have to make changes to your data to support geo maps.<br/><br/>For example, you may be collecting data for locations in Washington County, Alabama, and also for locations in Washington County, Wisconsin.<br/><br/>According to the 2010 Census, there are 31 distinct Washington Counties in the United States.<br/><br/>To account for multiple different geographical entities with the same name, you must be specific within your data.<br/><br/>A value of *Washington County* without a state attached to it may result in incorrect or incomplete geo maps. | ![Washington Counties in United States]({{ site.baseurl }}/images/wa-county.png "Washington Counties in United States") |

We support the following countries and their associated subdivisions in geo maps:
<details>
<summary><b>United States</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;State, State abbreviations, State FIPS<br>
&nbsp;&nbsp;&nbsp;&nbsp;County, County FIPS<br>
&nbsp;&nbsp;&nbsp;&nbsp;Zip Code<br>
</details>
<details>
<summary><b>United Kingdom</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;County and Unitary Authority<br>
&nbsp;&nbsp;&nbsp;&nbsp;Local Area District<br>
&nbsp;&nbsp;&nbsp;&nbsp;Zip Code<br><!--Since 5.3.0>-->
</details>
<!--Since 5.2.0-->
<details>
<summary><b>Australia</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;State, State abbreviations<br>
&nbsp;&nbsp;&nbsp;&nbsp;Suburb<br>
&nbsp;&nbsp;&nbsp;&nbsp;Postcode<br>
</details>
<details>
<summary><b>Canada</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;Province and Territory, Province and Territory abbreviations<br>
&nbsp;&nbsp;&nbsp;&nbsp;Census Divisions<br>
&nbsp;&nbsp;&nbsp;&nbsp;Postal Code<br>
</details>
<details>
<summary><b>France</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;Region<br>
&nbsp;&nbsp;&nbsp;&nbsp;Department<br>
</details>
<details>
<summary><b>Germany</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;State<br>
&nbsp;&nbsp;&nbsp;&nbsp;District<br>
&nbsp;&nbsp;&nbsp;&nbsp;Postal Code<br>
</details>
<details>
<summary><b>Indonesia</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;Province and Territory<br>
</details>
<!--Since 5.2.0-->
<details>
<summary><b>Japan</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;Prefecture<br>
&nbsp;&nbsp;&nbsp;&nbsp;PMC<br>
</details>
<details>
<summary><b>Sweden</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;County<br>
&nbsp;&nbsp;&nbsp;&nbsp;Municipality<br>
&nbsp;&nbsp;&nbsp;&nbsp;Post Code<br><!--Since 5.3.0 -->
</details>
<details>
<summary><b>South Africa</b></summary>
&nbsp;&nbsp;&nbsp;&nbsp;State<br>
&nbsp;&nbsp;&nbsp;&nbsp;District<br>
</details>
