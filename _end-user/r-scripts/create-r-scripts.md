---
title: [Create and share R scripts]
tags: [r-scripts,customize]
keywords: R
summary: "You can create and share your custom R scripts in ThoughtSpot."
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## How it works

An R script in ThoughtSpot consumes input from search results or _answers_ (both
the data and the schema), using the columns you select for the analysis.

ThoughtSpot auto generates a _data frame_ object for all selected columns. A
data frame is R’s representation of a table (a 2D data structure containing
rows and columns). The system-generated data frame has the variable name “DF”.
Data frames are used as parameters around which to build the script.

When columns are selected, ThoughtSpot sends that data to R as a list of values
(or _vectors_). A vector has a variable name of `.param` followed by some
number, based on the order in which the columns are selected.

When the script executes, it passes the information to the server to run the
analysis, and displays the answer as a visualization, in either PNG or CSV (table)
format.

As shown below, you can chain R analyses together by running another R script on
the answer to a previous script.

## Write a custom script

To add a custom R script, start by running a search, then click the **R** icon on the toolbar.

![]({{ site.baseurl }}/images/r-icon.png)

Add your script into the **Custom R Script** dialog, and set the [column bindings](#column-bindings) and [output type](#output-file-type) appropriately, as shown in the following examples.

![]({{ site.baseurl }}/images/r-png-basic.png)

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

## Column bindings and output file type

* Under **Select column(s) for R analysis**, you specify the data you want to send
  to R and how to send it. If you do not make any choices here, all columns in the
  search are selected in the order they appear in the search bar.

  In the examples above, `Monthly (Date)` is `.param0`, and `Sales` is `.param1`.
  To verify this, click the question mark icon next to **Select columns for R
  analysis** to see the “column bindings”. Reordering the columns changes the
  column bindings/params.

* Under **Output File Type** Select PNG or CSV, depending on the output details and in your script.

## K-Means clustering example scripts

This script loads the `ggplot2` visualization package, labels the columns inside
of the ThoughtSpot generated data frame object (`df`), and runs a K-Means
clustering algorithm.

```
####R SCRIPT####
 library(ggplot2)
 set.seed(20)
 df <- data.frame(.param0, .param1)
 cluster <- kmeans(df[1:2], 3, nstart = 20)
 cluster$cluster <- as.factor(cluster$cluster)
 png(file=#output_file#,width=400,height=350,res=72)
 print(ggplot(df, aes(.param0, .param1, color = cluster$cluster)) + geom_point())
```

When you run this script on the results of the original `sales date` search, you
get the following visualization as a PNG.

![]({{ site.baseurl }}/images/r-custom-script-png.png)

You can run another R script directly on this result to get CSV results:

```
###R SCRIPT####
set.seed(20);
df <- data.frame(.param0,.param1);
cluster <- kmeans(df[1:2], 3, nstart = 20);
df$Cluster <- as.factor(cluster$cluster);
colnames(df)[1] <- 'Sales';
colnames(df)[2] <- 'Zip Code';
write.csv(df, file=#output_file#, row.names=FALSE);
```
The script for CSV output generates a table:

![]({{ site.baseurl }}/images/r-custom-script-csv.png)

## Save and share your script

To save a script, choose **Save as** from the options menu (**...**) on
the script. After you name it and save it, your script will show in the **Load**
scripts dialog.

![]({{ site.baseurl }}/images/r-save-script.png)

To share a script, choose **Share** from the options menu (**...**).

![]({{ site.baseurl }}/images/r-share-script.png)


## More script examples

For some more example scripts, check out the blog post on
[Using R Analysis in ThoughtSpot for Time Series Forecasting](https://www.thoughtspot.com/codex/using-r-analysis-thoughtspot-time-series-forecasting),
or load one of the ThoughtSpot provided scripts:
* Binomial Logistic Regression
* K-Means Clustering Plot
* K-Means Clustering Table
* Time Series Outlier Detection
* Time Series Forecast

![]({{ site.baseurl }}/images/r-script-load-prebuilt.png)

## Related information

* [Using R Analysis in ThoughtSpot for Time Series Forecasting](https://www.thoughtspot.com/codex/using-r-analysis-thoughtspot-time-series-forecasting) (blog post by Antony Chen of ThoughtSpot)

* [R Project for Statistical Computing](https://www.r-project.org/)
