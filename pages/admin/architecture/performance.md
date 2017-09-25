---
title: [Performance considerations]
tags:
keywords: performance
last_updated: tbd
summary: "ThoughtSpot does all analysis against data in memory to help achieve
fast results across millions and billions of records of data."
sidebar: mydoc_sidebar
---
ThoughtSpot is configured and licensed by memory availability. However, there
are other considerations that will impact the performance of your solution. It’s
important to understand these considerations prior to implementation, since some
solutions will perform better than others.

Each node in a ThoughtSpot cluster has been found to perform ideally with less
than 250GB of data and fewer than .5 billion total rows of data. For schemas
that are particularly complex, performance is increased with even fewer rows of
data per node. Ways to reduce the total amount of data and rows of data include
limiting the amount of data (number of years, etc.) or combining long, but
narrow tables together.

It is recommended that worksheets have fewer than 1000 columns. For aggregate
worksheets, fewer than 50 columns are recommended.

Total rows in a result of a join can also have an impact. In general, it is
recommended that you have fewer than 10 billion rows in a many-to-many join.

For chasm trap scenarios (two or more fact tables joined via a shared dimension)
the following are recommended:

* No more than five fact tables in the worksheet.
* No more than two shared dimensions.
* No more than 10 million rows of data in a non-co-sharded dimension table.
* No more than 1 billion rows in a co-sharded dimension table.

For scheduled pinboards, ideal performance is to have 50 or fewer scheduled
pinboard jobs.

Finally, it is recommended that data be loaded no more frequently
than hourly to prevent excessive indexing of data.
