---
title: [Run prebuilt R scripts on answers]
tags: [r-scripts,customize]
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

1.  Click the **R** icon on the toolbar for any search result (answer).

    ![]({{ site.baseurl }}/images/r-icon.png)

    From here, you have options to write a custom script, or load a pre-built or
    ThoughtSpot provided script.

2. On the Analyze dialog, click the ellipses next to the **Custom R Script** panel, and choose **Load**.

    ![]({{ site.baseurl }}/images/r-load-prebuilt.png)

3. This brings up a list of prebuilt scripts, both ThoughtSpot provided and those created by programmers on your team.

    ![]({{ site.baseurl }}/images/r-load-list-of-scripts.png)

4. Select a script, then choose the columns you want to include in the analysis and the output file type (PNG or CSV).

    Note that the output file type must match the script.
