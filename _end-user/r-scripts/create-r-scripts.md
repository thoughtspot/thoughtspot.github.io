---
title: [Create and share R scripts]
tags: [r-scripts,customize]
keywords: R
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Write a custom script

To add a custom R script, start by running a search, then click the **R** icon on the toolbar.

![]({{ site.baseurl }}/images/r-icon.png)

Add your script into the **Custom R Script** dialog.

The following example script loads the `ggplot2` visualization package, labels
the columns inside of the ThoughtSpot generated data frame object (`df`), and
runs a K-Means clustering algorithm.

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

When we run this script on the results of our original `sales date` search, we
get the following visualization as a PNG.

![]({{ site.baseurl }}/images/r-custom-script.png)

## Save and share your script

To save a script, choose **Save as** from the ellipses "more options" menu on the script.

![]({{ site.baseurl }}/images/r-save-script.png)

To share a script, choose **Share** from the ellipses "more options" menu

![]({{ site.baseurl }}/images/r-share-script.png)

## Related information

* [Using R Analysis in ThoughtSpot for Time Series Forecasting](https://www.thoughtspot.com/codex/using-r-analysis-thoughtspot-time-series-forecasting) (blog post by Antony Chen of ThoughtSpot)

* [R Project for Statistical Computing](https://www.r-project.org/)
