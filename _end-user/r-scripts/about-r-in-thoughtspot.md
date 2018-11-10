---
title: [About R in ThoughtSpot]
tags: [r-scripts,customize]
keywords: R, "R scripts", "scripts"
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

R is an open source programming language used for statistical
computing. As such, knowledgable users can use R to perform sophisticated
analysis in a ThoughtSpot environment.

R is a popular language for machine learning statistics and AI
Enable users to leverage the power of R, create their own semantics and business logic on top of data using ThoughtSpot core
Enables SpotIQ team to leverage R internally to build their own custom logic (K means clustering, for example, has been built using R)
Acts both as a platform for extensibility and for ThoughtSpot
Data scientists and analysts can build visualizations using R, for end user consumers

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
write.csv(..., file=#output_csv#, ...);
```

Notice that `.param0` refers to first column in column binding and `.param1`
refers to the second.  Should you need a third binding, you would use  `.param2`
and so forth.

The output of the script is either PNG or CSV. This example script uses
`#output_csv#` to emit data in a CSV (tabular) format. Use `#output_png#` to
emit data in PNG format.

## TBD

## Related information

As always, you can also run custom R scripts on ThoughtSpot data using SpotIQ custom
analysis [SpotIQ custom analysis]({{ site.baseurl}}/spotiq/adv-customize-withr).
