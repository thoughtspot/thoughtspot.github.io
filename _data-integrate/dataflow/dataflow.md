---
title: [DataFlow]
last_updated: 07/29/2020
summary: "With DataFlow, you can move data into ThoughtSpot from most databases."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
<div class="grid-container-opener">

  <div class="grid-child">
    <img src="{{ "/images/dataflow-sm.png" | prepend: site.baseurl  }}" alt="ThoughtSpot DataFlow"></div>
  <div class="grid-child">
    <p class="text-opener">
      <strong>Easily load data into ThoughtSpot’s in-memory engine</strong>
<br/>&bull;&nbsp;&nbsp;Graphical, code-free, analyst-friendly experience
<br/>&bull;&nbsp;&nbsp;Support for the most popular data sources
</p>
    <p class="text-opener">With ThoughtSpot DataFlow, you can schedule sync to refresh your data, and your visuals are always current.</p>
    </div>
  <div class="grid-child">&nbsp;</div>
</div>

If your company maintains large sources of data externally, you can use ThoughtSpot DataFlow to easily ingest just the relevant information, and then query that data and use ThoughtSpot's analysis and visualization features. And after you configure scheduled refresh, your analysis visuals are always current.

## Port requirements for DataFlow

To use DataFlow, the following ports must be open on your network:
- 9000
- 9001
- 9002
- 9003
- 9005
- 9010

For more information, see [Required ports for inbound and outbound cluster access]({{ site.baseurl }}/appliance/firewall-ports.html#required-ports-for-inbound-and-outbound-cluster-access).

See
- [Key features]({{ site.baseurl }}/data-integrate/dataflow/dataflow-key-features.html)
- [How DataFlow works]({{ site.baseurl }}/data-integrate/dataflow/dataflow-workflow.html)
- [DataFlow Home page]({{ site.baseurl }}/data-integrate/dataflow/dataflow-home.html)
- [Best practices]({{ site.baseurl }}/data-integrate/dataflow/dataflow-best-practices.html)
- Supported [databases]({{ site.baseurl }}/data-integrate/dataflow/dataflow-databases.html), [filesystems]({{ site.baseurl }}/data-integrate/dataflow/dataflow-filesystems.html), and [applications]({{ site.baseurl }}/data-integrate/dataflow/dataflow-applications.html)
- [DataFlow administration]({{ site.baseurl }}/data-integrate/dataflow/dataflow-administration.html), in particular [managing users]({{ site.baseurl }}/data-integrate/dataflow/dataflow-user-management.html) and [configuring email service]({{ site.baseurl }}/data-integrate/dataflow/dataflow-mail-setup.html)
