---
title: [Prerequisites]
last_updated: [1/13/2020]
summary: "Complete these prerequisites before installing your ThoughtSpot clusters on the SMC appliance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="installation-prerequisites"}
## Installation Prerequisites

Ensure that you have the following items, information, and understanding of policies before you begin deploying ThoughtSpot on your SMC appliance.

<table>
<tr>
<td>&#10063;</td>
<td><a href="/appliance/hardware/connect-appliance-smc.html#haswell-port-location">Appliance Port Location</a>, to locate data and IPMI ports.</td></tr>

<tr>
<td>&#10063;</td>
<td>Data center with proper environment controls, such as cooling.</td></tr>

<tr>
<td>&#10063;</td>
<td>AC power</td></tr>

<tr>
<td>&#10063;</td>
<td>10GbE switch, with enabled IPv6 broadcast and multicast. You need one switch for each cluster, with one port for each node on the cluster.</td></tr>
<tr>
<td>&#10063;</td>
<td>10GbE network cables, either direct attach copper (DAC) or fiber. Refer to the <a href="cable-networking.html">Cable reference</a> for more information to decide between the two types.</td></tr>

<tr>
<td>&#10063;</td>
<td>100Mbps or 1Gbps switch for IPMI, for Out of Band Management. You need one for each cluster.</td></tr>

<tr>
<td>&#10063;</td>
<td>Cat5 network cables, for IPMI management port use. You need one for each node.</td></tr>

<tr>
<td>&#10063;</td>
<td>Rack space of 2U or 3.5 inches for each appliance, and a power strip</td></tr>

<tr>
<td>&#10063;</td>
<td>VGA Monitor and USB keyboard</td></tr>

<tr>
<td>&#10063;</td>
<td>10G connection: SFP+ for the switch side</td></tr>

<tr>
<td>&#10063;</td>
<td>Networking information: IP addresses for data & management NICs, for up to 2 DNS servers, up to 4 NTP servers and for the default gateway. You also need to know the timezone for your cluster. Typically, your timezone is where most of the people who will use the product are.  Contact your network administrator for this information, and fill out the ThoughtSpot site survey so that you have a quick reference before beginning the install process.</td></tr>

<tr>
<td>&#10063;</td>
<td><a href="/appliance/firewall-ports.html">Network policies</a>, to determine the ports you need to have open for your cluster.</td></tr>
</table>

## Review hardware requirements
Next, [review hardware requirements]({{ site.baseurl }}/appliance/hardware/hardware-requirements-smc.html).
