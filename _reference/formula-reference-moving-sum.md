---
title: [How to use the moving sum formula]
summary: Moving sum is a window aggregate formula, that adds the measurement over several contiguous time periods.
last_updated: 12/07/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

<table><tr><td>The moving sum formula takes a measure, two integers to define the size of aggregation window, and one or more attributes to specify the aggregation dimension. The window is `current - Num1 … Current + Num2`, with both end points included in the window. For example, “1,1” has a window size of 3.</td>
<td>See the corresponding training at <br />
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
</td></tr></table>

To define a window that begins before `Current`, specify a negative number for `Num2`.

The formula returns the sum of the measure over the given window. The attributes are the ordering columns used to compute the moving sum.

When used for dates, the syntax of the formula looks like this:

  <code>moving_sum (measure, leading_date_offset, trailing_date_offset, date)</code>

  <div id="live-try">
    <details>
      <summary><strong>Try using the moving sum formula</strong></summary>
      <p>Build a formula that shows a leading 7-day moving sum of daily sales for jackets:</p>
      <iframe src="https://10.87.90.250/livedocs/params/1" title="try formula" height="600px"  width="100%"  title="Try it on your own"></iframe>
    </details></div>
  <div id="live-validate">
    <details>
      <summary><strong>Compare your results to our answer</strong></summary>
      <p>There may be some variation in your formula, but it should look something like this:</p>
      <iframe src="https://10.87.91.144/livedocs/params/1" title="correct formula" height="600px"  width="100%"  title="Correct solution"></iframe>
    </details></div>

<!--
<div class="grid-container-two-halves">
<div class="grid-child" id="live-try">
  <details>
    <summary><strong>Try using the running sum formula</strong></summary>
    <p>Build a formula that shows a leading 7-day moving sum of daily sales for jackets:</p>
    <iframe src="https://10.87.90.250/livedocs/params/1" title="try formula" height="400px"  width="100%"  title="Try it on your own"></iframe>
  </details></div>
<div class="grid-child" id="live-validate">
  <details>
    <summary><strong>Compare your results to our answer</strong></summary>
    <p>There may be some variation in your formula, but it should look something like this:</p>
    <iframe src="https://10.87.91.144/livedocs/params/1" title="correct formula" height="400px"  width="100%"  title="Correct solution"></iframe>
  </details></div>
</div> -->        
