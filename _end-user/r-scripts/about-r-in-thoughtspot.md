---
title: [About R in ThoughtSpot]
tags: [r-scripts,customize]
keywords: R, "R scripts", "scripts"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

R is a popular open source programming language for statistical computing,
machine learning, and AI.

While the ability to run custom R scripts on ThoughtSpot data was available in
previous releases via SpotIQ custom analysis, as of version 5.0 users with R
privileges can now run R scripts directly on search results.

Analysts and data scientists proficient in R can create and share custom
scripts. Users can leverage custom scripts and ThoughtSpot provided scripts, run
pre-built R scripts on top of their search results, and share R visualizations
as answers and pinboards.

This topic explains how to use R in ThoughtSpot both from an end user and
scripting perspective, but is not meant as an R primer. To learn more about R
programming, a good place to start is [R Project for Statistical
Computing](https://www.r-project.org/). Also, Anthony Chen's blog post on
[Using R Analysis in ThoughtSpot for Time Series Forecasting](https://www.thoughtspot.com/codex/using-r-analysis-thoughtspot-time-series-forecasting)
is a nice introduction to writing R scripts in ThoughtSpot.

## How to access R scripts

Users with R script privileges can click the **R** icon on the toolbar for any search result (answer).

![]({{ site.baseurl }}/images/r-icon.png)

From here, you have options to write a custom script, or load a pre-built or
ThoughtSpot provided script.

![]({{ site.baseurl }}/images/r-load-or-write-script.png)

## Basic R script to generate CSV data

This is an example of a basic R script that generates CSV data.

```
write.csv(df,  #output_file#)
```

The generated data is displayed back as a table when you run the analysis:

![]({{ site.baseurl }}/images/r-csv-basic.png)

## Basic R script to generate a PNG graphic

This is an example of a basic R script that generates PNG data as output.

```
png(#output_file#)
plot(.param0, .param1)
```

The generated data is displayed back as a static PNG when you run the analysis:

![]({{ site.baseurl }}/images/r-png-basic.png)

## Column bindings

Under **Select columns for R analysis**, you specify the data you want to send
to R and how to send it. If you do not make any choices here, all columns in the
search are selected in the order they appear in the search bar.

When a column is selected, ThoughtSpot sends that data to R as a list of values
(or _vectors_). A vector has a variable name of `.param` followed by some
number, based on the order in which the columns are selected.

In the examples above, `Monthly (Date)` is `.param0`, and `Sales` is `.param1`.
To verify this, click the question mark icon next to **Select columns for R
analysis** to see the “column bindings”. Reordering the columns changes the
column bindings/params.

## Related information

* [Create and share R scripts](create-r-scripts.html#)

* [Save and share R visualizations](share-r-visualizations.html#)

* [Run an R analysis](use-r-analysis.html#)

* [SpotIQ custom analysis]({{ site.baseurl}}/spotiq/adv-customize-withr)
