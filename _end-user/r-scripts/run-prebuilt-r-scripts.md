---
title: [Run prebuilt R scripts on answers]
tags: [r-scripts]
keywords: R
summary: "Anyone with R privileges can run an R analysis ThoughtSpot using provided scripts, you don't need to be an expert. "
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If you have R privileges on your ThoughtSpot instance, you can run R analyses on
search results, and save and share the resulting visualization with others. The
users you share visualizations with do not need R privileges.

## Run an R analysis

1.  Click the **R** icon ![R icon]({{ site.baseurl }}/images/r-icon-inline.png){: .inline}
on the toolbar for any search result (answer).

    ![]({{ site.baseurl }}/images/r-icon-marketspot.png)

    From here, you have options to write a custom script, or load a pre-built or
    ThoughtSpot provided script.

2. On the Analyze dialog, click the ellipses next to the **Custom R Script** panel, and choose **Load**.

    ![]({{ site.baseurl }}/images/r-load-prebuilt.png)

    This brings up a list of prebuilt scripts, both ThoughtSpot provided and those created by programmers on your team.

    ![]({{ site.baseurl }}/images/r-load-list-of-scripts.png)

4. Select a script, then choose the columns you want to include in the analysis and the output file type (PNG or CSV).

    Note that the output file type must match the script.

    For example, if you select one of the ThoughtSpot provided time series
    scripts, the comment at the top of the script provides guidance on what
    columns to select.

    ```
    # NOTE: Only two columns are needed for this analysis.
    # The first column should represent some date column
    # and the second should be some numeric measure column.
    ```

    Also, scroll through the script to identify whether it's coded to produce
    graphical (PNG) or tabular (CSV) output. The time series scripts are both set up
    to produce graphical output, as indicated by a line like this at the end of the
    scripts.

    ```
    png(#output_file#, width=1000);
    print(img);
    ```

5. Select **Run Analysis** to execute the script.

## Time Series Outlier Example

In this example, we ran an analysis for **Time Series Outlier Detection** on
search results that show sales totals by date.

![]({{ site.baseurl }}/images/r-run-time-series-outliers-script.png)

Note that we included a date column and a measure, and selected PNG as the
output to match what the script requires. The original search could have had
more columns than this, but you can always structure the analysis properly
by selecting only the date column and measure column you want to focus on.

In this case, no outliers were found, so the R visualization matches the
original search result line graph.

## Time Series Forecast Example

In this example, we ran a **Time Series Forecast** on the same search result.

![]({{ site.baseurl }}/images/r-run-time-forecast-script.png)
