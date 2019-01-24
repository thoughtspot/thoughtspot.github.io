---
title: [Set entity categories for SearchIQ ]
keywords: tbd
last_updated: tbd
summary: "You can specify a per column entity category to help SearchIQ."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

[SearchIQ]({{ site.baseurl}}/end-user/search/about-searchiq.html) is a search
experience that allows you to ask more natural questions, similar to the way you
might talk to a person.

If you have access to tables and worksheets for data modeling purposes, you can
specify columns entity types for different columns in your data sources which
support the SearchIQ user experience.

## About the Entity Categories

| Category            | Description                                          |
| :---                | :---                                                 |
| PERSON              | Contains data about people, relevant to questions about "who?" |
| PLACE               | Contains data about location, relevant to questions about "where?" |
| TIME                | Contains data about dates or times, relevant to questions about "when?" |
| PRODUCT             | Contains data about products|
| ZIP_CODE            | Contains zip code data, relevant to questions like "where?" or "what zip code?"|
| LAT_LONG            | Contains positional geo data, relevant to questions like "where?"|
| COMPANY_ORG         | Contains data about a company or organization |
| NUM_TYPES           | Contains numerical data |

## Set Entity Categories

To specify entity categories:

1. Click **Data** in the top menu, and choose **Tables** or **Worksheets**.

2. Click on the name of your table or worksheet.

3. On the **Columns** tab, find the COLUMN NAMES for which you want to specify entity categories, and scroll to the right to find `ENTITY CATEGORY`.

4. Use the drop-down menu to set the `ENTITY CATEGORY` to the type you want.

5. Click **SAVE CHANGES** in the upper right.


## Related information

* [SearchIQ]({{ site.baseurl}}/end-user/search/about-searchiq.html)

* [Overview of data modeling settings]({{ site.baseurl}}/admin/data-modeling/data-modeling-settings.html)
