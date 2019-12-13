---
title: [Prerequisites]
last_updated: [12/13/2019]
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
<td>Appliance quick start guide, to locate IPMI and data network ports. See <a href="/appliance/hardware/connect-appliance-smc.html#appliance-port-location">Appliance Port Location</a>.</td></tr>

<tr>
<td>&#10063;</td>
<td>Data center with proper environment controls, such as cooling.</td></tr>

<tr>
<td>&#10063;</td>
<td>AC power</td></tr>

<tr>
<td>&#10063;</td>
<td>10GbE switch, with enabled IPv6 broadcast and multicast. You need one for each node.</td></tr>
<tr>
<td>&#10063;</td>
<td>10GbE network cables, either direct attach copper (DAC) or fiber. Refer to <a href="connect-appliance-smc.html#appliance-step-1">Step 1: Connect switches to 10GbE ports</a> for more information to decide between the two types.</td></tr>

<tr>
<td>&#10063;</td>
<td>100Mbps or 1Gbps switch for IPMI, for Out of Band Management. You need one for each node.</td></tr>

<tr>
<td>&#10063;</td>
<td>Cat5 network cables. You need one for each node.</td></tr>

<tr>
<td>&#10063;</td>
<td>Rack space of 2U or 3.5 inches for each appliance, and a power strip</td></tr>

<tr>
<td>&#10063;</td>
<td>Monitor and keyboard</td></tr>

<tr>
<td>&#10063;</td>
<td>10G connection: SFP+ for the switch side</td></tr>

<tr>
<td>&#10063;</td>
<td>Networking information: for data, management IPs, DNS, timezone, and default gateway IP. Contact your network administrator for this information, and fill out the ThoughtSpot site survey so that you have a quick reference before beginning the install process.</td></tr>

<tr>
<td>&#10063;</td>
<td><a href="/appliance/firewall-ports.html">Network policies</a>, to determine the ports you need to have open for your cluster.</td></tr>
</table>

## Review hardware requirements
Next, [review hardware requirements.]({{ site.baseurl }}/appliance/hardware/hardware-requirements-smc.html)
