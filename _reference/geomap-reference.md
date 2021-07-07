---
title: [Geo Map Reference]
last_updated: 5/21/2020
summary: "ThoughtSpot recognizes and supports a broad list of geographic regions and their subdivisions."
sidebar: mydoc_sidebar
toc: false
permalink: /:collection/:path.html
---
This reference lists supported countries and their subdivisions. ThoughtSpot renders these regions in geo maps.

You may have to make changes to your data to support geo maps. For example, you may be collecting data for locations in Washington County, Alabama, and also for locations in Washington County, Wisconsin. According to the 2010 Census, there are 31 distinct Washington Counties in the United States.

To account for multiple different geographical entities with the same name, you must be specific within your data. A value of *Washington County* without a state attached to it may result in incorrect or incomplete geo maps.

## Download the supported geo maps CSV file
You can download a CSV file containing all the supported values for geo map countries, codes, and subdivisions. Use this file to confirm that your own geographical values are in the right format, and that ThoughtSpot supports them. Download the CSV file <a href="{{ site.baseurl }}/downloads/geomaps-supported-countries-codes-subdivisions-6.0.csv" download="geomaps-supported-countries-codes-subdivisions-6.0.csv" target="_blank">here</a>.

{% include note.html content="The CSV file contains leading 0s where these zeros are present for ThoughtSpot at the beginning of zip/post code values. However, if you import this file into Excel or another spreadsheet tool, that tool may remove leading zeros, resulting in data that does not match ThoughtSpot's format." %}

## Supported countries and subdivisions
ThoughtSpot supports the following countries and their associated subdivisions:
<dl>
<dlentry>
<!--Since 5.2.0-->
<dt>Australia</dt>
<dd>
<details><summary><strong>State</strong></summary>
{% include content/geo/au-state.md %}
</details>
<details><summary><strong>Suburb</strong></summary>
{% include content/geo/au-suburb.md %}
</details>
<details><summary><strong>Postcode</strong></summary>
{% include content/geo/au-post-code.md %}
</details>
</dd>
</dlentry>

<!--Since 6.0.0-->
<dlentry>
<dt>Austria</dt>
<dd>
<details><summary><strong>State</strong></summary>
{% include content/geo/at-state.md %}
</details>
<details><summary><strong>District</strong></summary>
{% include content/geo/at-district.md %}
</details>
<details><summary><strong>Postal Code</strong></summary>
{% include content/geo/at-postal-code.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>Canada</dt>
<dd>
<details>
<summary><strong>Province and Territory</strong></summary>
{% include content/geo/ca-province-territory.md %}
</details>
<details>
<summary><strong>Census Divisions</strong></summary>
{% include content/geo/ca-census-division.md %}
</details>
<details>
<summary><strong>Postal Codes</strong></summary>
{% include content/geo/ca-postal-code.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>France</dt>
<dd>
<details><summary><strong>Region</strong></summary>
{% include content/geo/fr-region.md %}
</details>
<details><summary><strong>Department</strong></summary>
{% include content/geo/fr-department.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>Germany</dt>
<dd>
<details><summary><strong>State</strong></summary>
{% include content/geo/de-state.md %}
</details>
<details><summary><strong>District</strong></summary>
{% include content/geo/de-district.md %}
</details>
<details><summary><strong>Postal Code</strong></summary>
{% include content/geo/de-postal-code.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>Indonesia</dt>
<dd>
<details><summary><strong>Province and Territory</strong></summary>
{% include content/geo/id-province-territory.md %}
</details>
</dd>
</dlentry>

<!--Since 6.0.0-->
<dlentry>
<dt>Italy</dt>
<dd>
<details><summary><strong>Region</strong></summary>
{% include content/geo/it-region.md %}
</details>
<details><summary><strong>Province and Territory</strong></summary>
{% include content/geo/it-province-territory.md %}
</details>
<details><summary><strong>Postal Code</strong></summary>
{% include content/geo/it-postal-code.md %}
</details>
</dd>
</dlentry>

<!--Since 5.2.0-->
<dlentry>
<dt>Japan</dt>
<dd>
<details><summary><strong>Prefecture</strong></summary>
{% include content/geo/jp-prefecture.md %}
</details>
<details><summary><strong>PMC</strong></summary>
{% include content/geo/jp-pmc.md %}
</details>
</dd>
</dlentry>

<!--Since 6.0.0-->
<dlentry>
<dt>Poland</dt>
<dd>
<details><summary><strong>Province and Territory</strong></summary>
{% include content/geo/pl-province-territory.md %}
</details>
<details><summary><strong>County</strong></summary>
{% include content/geo/pl-county.md %}
</details>
<details><summary><strong>Postal Code</strong></summary>
{% include content/geo/pl-postal-code.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>Sweden</dt>
<dd>
<details><summary><strong>County</strong></summary>
{% include content/geo/se-county.md %}
</details>
<details><summary><strong>Municipality</strong></summary>
{% include content/geo/se-municipality.md %}
</details>
<!-- Since 5.3.0 -->
<details><summary><strong>Post Code</strong></summary>
{% include content/geo/se-post-code.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>South Africa</dt>
<dd>
<details><summary><strong>State</strong></summary>
{% include content/geo/za-state.md %}
</details>
<details><summary><strong>District</strong></summary>
{% include content/geo/za-district.md %}
</details>
</dd>
</dlentry>

<dlentry>
<dt>United States</dt>
<dd>
<details><summary><strong>State</strong></summary>
{% include content/geo/us-state.md %}
</details>
<details><summary><strong>County</strong></summary>
{% include content/geo/us-county.md %}
</details>
<details><summary><strong>Zip Code</strong></summary>
{% include content/geo/us-zip-code.md %}
</details>
</dd></dlentry>

<dlentry>
<dt>United Kingdom</dt>
<dd>
<details><summary><strong>County and Unitary Authority</strong></summary>
{% include content/geo/gb-county-unitary-authority.md %}
</details>
<details><summary><strong>Local Area District</strong></summary>
{% include content/geo/gb-local-area-district.md %}
</details>
<details><summary><strong>Zip Code</strong></summary>
{% include content/geo/gb-zip-code.md %}
</details>
</dd></dlentry>

</dl>
