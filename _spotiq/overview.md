---
title: ["SpotIQ 101: Load and analyse data"]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This 101 walks you through a few simply SpotIQ workflows. When you have
completed the walk through, you will be able to use the core features of SpotIQ
in your ThoughtSpot installation.

## Prerequisites

Before you begin, make sure you can login into ThoughtSpot application. To
complete this tutorial, you need the ability to Log in into ThoughtSpot Ability
to upload a CSV file

## Get the sample data and some insights

You can use SpotIQ with any of the data in your system, not just CSV loaded data.

This tutorial uses a dataset containing a list of sales and movement data by
item and department.

1. Download the [Warehouse_and_Retail_Sales](/resources/Warehouse_and_Retail_Sales.csv) CSV file.
2. Save or move the file to a place on your local drive..

## Upload the data

1. If you haven't already, log into the ThoughtSpot application.
2. Go to the **DATA** tab and choose **Actions > Upload Data**.
3. Browse to the sample data file you downloaded or drag the file into the upload area.
4. Choose **Yes** for the **Are the column names already defined in the file header** setting.
5. Choose **Comma** for the **Are the files separated by?** setting.

   ![]({{ site.baseurl }}/images/spotiq-download.png)

6. Press **Next** for the **Set column names** page.
7. Set the **ITEM CODE** column to **TEXT** on the **Set column types** page.
8. Press **Upload**.
   The system presents you with a few choices.

    ![]({{ site.baseurl }}/images/spotiq-upload.png)

9. Choose **Auto Analyse** to build SpotIQ insights.

    Building insights can take time. How long depends on the data you are
    analyzing. The ThoughtSpot application displays an informational message.
    The message disappears after a moment.

    ![]({{ site.baseurl }}/images/spotiq-processing.png)


## Work with the INSIGHTS list

Each time SpotIQ does an analysis it generates a set of results. ThoughtSpots
keeps the results until the user that requested the analysis (or an admin),
deletes them. You can run SpotIQ on the same object multiple times. Each
analysis generates new results.

1. To check for the results of your analysis, select the **INSIGHTS** page.

   The **INSIGHTS** page allows you to see all results with data you have
   permission for. So the results lists shows **All** results or just **Yours**.

2. Select **Yours**.

   ![]({{ site.baseurl }}/images/spotiq-insights.png)

3. Look for results from your **Warehouse_and_Retail_Sales** data.

    SpotIQ labels each result with a **NAME**, **DESCRIPTION**, **STICKERS**,
    and **MODIFIED**. The **NAME** comes from the object that was analyzed which
    is referenced again in the **DESCRIPTION**. The combination of **NAME**,
    **DESCRIPTION**, and **MODIFIED** is unique.

4. Take a minute and review the **DESCRIPTION** and **MODIFIED** time.

   Not every SpotIQ analysis creates results. You can see information about each
   analysis as well as the results.

4. Select the **Analyses** link at the top of the page.

   Check the **STATUS** and also how long the **RESULT** took to generate. Since
   you go results, you can see that the analysis succeeded.

5. Select the **Analysis for Warehouse_and_Retail_Sales** and choose **Delete**.

   The information disappears from the **Analyses** list.

6. Choose **Results**.

   You should still see the your **Warehouse_and_Retail_Sales** run. Deleting
   information about an analyses run does not delete the actual results. You
   must delete each individually.

## Where to go next

At this point, you've created a set of insights using SpotIQ, in the next section you
[Review insights](/spotiq/work-with-insights.html) you created.
