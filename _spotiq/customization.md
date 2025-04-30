---
title: [Custom SpotIQ analysis]
tags:
keywords: SpotIQ,"best practices",invoke,search,customize,notifications,email
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Everywhere in ThoughtSpot where you can **Auto Analyze** with ThoughtSpot, you
can also configure a customized SpotIQ analysis. The customized analysis can be
a one-time customization or can apply to all future analysis of that particular
data source.

## Finding customization controls

Every menu or location where you can **Auto Analyze** with ThoughtSpot, you
can also choose **Custom Analyze**. It looks like this:

![]({{ site.baseurl }}/images/spotiq-where-customize.png)

Regardless of where you are in the ThoughtSpot UI, the SpotIQ **Customize
Analysis** dialog has the same layout. The columns, of course, are specific to
the data you launched the dialog from.

<video src="{{ site.baseurl }}/images/spotiq-custom-analysis.mp4" width="600" controls preload></video>

This dialog has three tabs, **Included columns**, **Excluded columns** , and **Customize Algorithms**. The **Customize Algorithms** is by far the most advanced panel.

 ![]({{ site.baseurl }}/images/spotiq-customize-algorithms.png)

The **SpotIQ** insights page has an option for this dialog and also an option to
customize a single analysis.

![]({{ site.baseurl }}/images/spotiq-customize-locations.png)

The **Improve Analysis** dialog always excludes a value from all future analysis.

Finally, you can also set some analysis options from your user **Profile**.

![]({{ site.baseurl }}/images/spotiq-profile-preferences.png)

You'll notice only one of these options is actually related to analysis. The
others relate to how you receive notifications about SpotIQ operations.

## Eliminate null values

Null values should be eliminated from your analysis.  

<table>
  <tr>
    <th>From next analysis</th>
    <th>From future analyses</th>
  </tr>
  <tr>
    <td>
    <!-- next -->
    <p>In the Search bar, add a filter <code><i>column</i>!= Null</code> to the search bar. Or choose <b>Exclude null values from current analysis</b>, using the <b>Customize algorithms</b> panel.</p>
    </td>
    <td>
    <!-- future -->
    Set <b>Exclude null values from my analysis</b> on your user <b>Profile</b> to exclude them from any future  SpotIQ analyses you do.
    </td>
  </tr>
</table>

## Exclude uninteresting column(s) in insight

You should always exclude columns you are not interested from your analysis.  

<table>
  <tr>
    <th>From next analysis</th>
    <th>From future analyses</th>
  </tr>
  <tr>
    <td>
    <!-- next -->
    <p>Exclude a column using <b>Improve Analysis</b> on a visualization. Or set the value through the <b>Excluded columns</b> tab of the <b>Customize Analysis</b> panel.</p>
    </td>
    <td>
    <!-- future -->
    Choose <b>Also exclude from all my future analysis</b> on the <b>Excluded columns</b> tab of the <b>Customize Analysis</b> panel. Alternatively, exclude using the <b>Improve Analysis</b> dialog on an insight that uses the column you want to exclude.
    </td>
  </tr>
</table>

## Include an interesting column

You can always includes columns that interest you in your analysis.  

<table>
  <tr>
    <th>From next analysis</th>
    <th>From future analyses</th>
  </tr>
  <tr>
    <td>
    <!-- next -->
    <p>Choose <b>Customize Analysis</b> and select to <b>Include columns</b> that you want to appear.</p>
    </td>
    <td>
    <!-- future -->
    Ensure **Index Priority** is between 8-10 on the column through data modeling.
    </td>
  </tr>
</table>


## Remove known date outliers

Your data may contain known outliers. For example, you are in the middle of a quarter and only want to analyize the previous quarter. Anything from the present quarter could contain an outlier.

<table>
  <tr>
    <th>From next analysis</th>
    <th>From future analyses</th>
  </tr>
  <tr>
    <td>
    <!-- next -->
    <p>In the Search bar, add a filter <code><i>date</i>< last time period</code> to the search bar.</p>  </td>
    <td>
    <!-- future -->
    Not applicable.
    </td>
  </tr>
</table>


## Too few insights

Your SpotIQ analysis may not provide you as many insights as you think it should.

<table style="border:1px;">
  <tr>
    <th>From next analysis</th>
    <th>From future analyses</th>
  </tr>
  <tr>
    <td>
    <!-- next -->
    <p>Choose <b>Customize Analysis</b> and <b>Customize algorithms</b> Decrease the <b>Multiplier for Outlier Detection</b> to a value closer to zero.
</p>
</td>
    <td>
    <!-- future -->
    Not applicable.
    </td>
  </tr>
</table>
