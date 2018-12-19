---
title: [Advanced R Customizations]
tags: [spotiq,customize, r-scripts]
keywords: SpotIQ,"best practices",invoke,search,customize,notifications,email
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

Admins and users with the **Has SpotIQ** privilege can run an R script using the
**Custom Analysis** feature of SpotIQ. This means you can run an R script from
any point in ThoughtSpot where you find the **Custom Analysis** menu option.

The R language is an open source programming language used for statistical
computing. As such, knowledgable users can use R to perform sophisticated
analysis in a ThoughtSpot environment.

This section explains the feature and how to use it. It is not meant as an R
primer. To learn more about R and how to use it, visit the
[R Project for Statistical Computing](https://www.r-project.org/).  

## Understand R script requirements in ThoughtSpot

ThoughtSpot provides R running as a service within a ThoughtSpot cluster.
Permissions are restricted. This means the R script does not have permission to
issue system commands.

The ThoughtSpot cluster has pre-installed the basic R packages. If your script
requires a specific package, you must request your ThoughtSpot cluster admin to
install the package on your behalf.

ThoughtSpot internally transforms and binds an R script prior to sending it to
the cluster's R service. The system expects each script have a well-defined
structure which is the following:

```
####R SCRIPT####
<Fill script body>
####COLUMN BINDINGS (ONE PER LINE)####
<Fill column bindings here>
```

The scripts contains the column bindings with the answer results appearing as parameters
in the R script. ThoughtSpot expects for each `.param`_n_ in R your script must
provide a corresponding binding. The following pseudo code illustrates an R
script in a form suitable for ThoughtSpot:

```
####R SCRIPT####
df <- data.frame(.param0,.param1, ...);
...
write.csv(..., file=#output_file#, ...);
```

Notice that `.param0` refers to first column in column binding and `.param1`
refers to the second.  Should you need a third binding, you would use  `.param2`
and so forth.

The output of the script is either PNG or CSV. This example script uses
`#output_csv#` to emit data in a CSV (tabular) format. Use `#output_png#` to
emit data in PNG format.

Presently, error reporting is limited for R scripts in SpotIQ. You should
validate your R script independent of your ThoughtSpot environment. Once you are
sure they are free of syntax or other errors, then try the script in
ThoughtSpot.

## Try a Custom Analysis with R

The following illustrates how to run an R analysis on data that has a sales
column and a zip code column.

1. Sign in to ThoughtSpot and click **Search +**.
2. Click the Data button to the left of the search field to open the Data panel.
3. Click **Choose Sources**, select a source with sales and zip code data and, then click **CLOSE**.
   This example uses **Phone Sales** data.
4. Enter `sales store zip code` in the search bar and press **Return**.

   If your source contains the proper data, you should see something similar to
   the following:

   ![]({{ site.baseurl }}/images/spotiq-r1.png)

5. Click the three-dot **Actions** button and select **Custom Analyze**.

   ![]({{ site.baseurl }}/images/spotiq-r2.png)

   ThoughtSpot opens the **Customize analysis** dialog.

6. Choose the **Customize algorithms** tab.
7. In the **Select Algorithms** section, select the **Custom R Script** checkbox.

   Selecting this option deselects all the other options on this tab and displays
   the **Custom R Script** field.

   ![]({{ site.baseurl }}/images/spotiq-r3.png)

8. Enter this sample script in the field.

    ```
    ####R SCRIPT####
    library(ggplot2)
    set.seed(20)
    df <- data.frame(.param0, .param1)
    cluster <- kmeans(df[1:2], 3, nstart = 20)
    cluster$cluster <- as.factor(cluster$cluster)
    png(file=#output_file#,width=400,height=350,res=72)
    print(ggplot(df, aes(.param0, .param1, color = cluster$cluster)) + geom_point())
    ####COLUMN BINDINGS (ONE PER LINE)####
    Sales
    Zip Code
    ```
    This script binds `.param0` to `Sales` and `.param1` to the `Store Zip Code`
    column.

    You can see from the script that the output should be PNG
    (`#output_png#`).

8. Check your work.

   ![]({{ site.baseurl }}/images/spotiq-r5.png)


   * Make sure that both Sales and Store Zip Code columns are selected for R analysis.
   * Make sure PNG is selected as the output format.

9. Click **ANALYZE**.

   SpotIQ runs your analysis in the background.

10. To see the results of your newly triggered analysis, go to the SpotIQ page, click **Analyses**, and then click the name of your analysis.

    ![]({{ site.baseurl }}/images/spotiq-r4.png)

    You should see the results in PNG format similar to the following:

    ![]({{ site.baseurl }}/images/spotiq-r6.png)

You can run another R script directly on this result to get CSV results. Try this on your own. Here is the script to give you CSV output:

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

## Syntax help in the dialog

Use the **i** icon to see help for the R syntax.

![]({{ site.baseurl }}/images/spotiq-help.png)

## Related information

* [tscli rpackage]({{ site.baseurl }}/reference/tscli-command-ref.html#rpackage)
