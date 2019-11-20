---
title: [Installing the Dell appliance]
summary: "Learn how to install the Dell appliance."
last_updated: 11/20/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="Installation-Prerequisites"}
## Installation Prerequisites

Ensure that you have the following items, information, and understanding of policies before you begin installing your Dell 6420 appliance:

<table>
<tr>
<td>&#10063;</td>
<td>10gbE switch with IPv6 broadcast and multicast enabled. You need one switch per node.</td></tr>

<tr>
<td>&#10063;</td>
<td>10GbE network cables, either direct attach copper (DAC) or fiber. See <a href="cable-reference.html">Cable Reference</a>.</td></tr>

<tr>
<td>&#10063;</td>
<td>10bps switch for iDRAC (Out of Band Management)</td></tr>

<tr>
<td>&#10063;</td>
<td>Cat5 network cables</td></tr>

<tr>
<td>&#10063;</td>
<td>Rack space (2U or 3.5 inches per appliance) and a power strip</td></tr>

<tr>
<td>&#10063;</td>
<td>Monitor and keyboard</td></tr>

<tr>
<td>&#10063;</td>
<td>Networking information, for data, management IPs, DNS, timezone, and default gateway IP. Contact your network administrator for this information, and fill out the ThoughtSpot site survey so that you have a quick reference.</td></tr></table>

{: id="Connect-the-Appliance"}
## Connect the Appliance

After you rack and stack the appliance, you can begin to configure it.

### Step 1: Connect switches to 10GbE ports
Connect the 10GbE port of each node, as illustrated in [Appliance Port Location](#appliance-port-location), to the 10GbE switches on your own rack using either fiber or DAC cables.

 Refer to the [Cable reference]({{ site.baseurl }}/appliance/hardware/cable-reference.html) for information on the cable types:
 * [Fiber Cables]({{ site.baseurl }}/appliance/hardware/cable-reference.html#fiber-cables)
 * [DAC Cables]({{ site.baseurl }}/appliance/hardware/cable-reference.html#dac-cables)

 {% include note.html content="Ask your hardware vendor for more details about what they supply and what you need to buy." %}

 {: id="appliance-port-location"}
 **Appliance Port Location**
 ![The data and management ports are on the back of the Dell appliance.]({{ site.baseurl }}/images/dell-port-location.png "The iDRAC management port, the 10GbE Data port, and the Display port are on the back of the appliance. The Display port requires a dongle that Dell provides.")

 * Connect to switches **only** the nodes you want in your cluster. Power off or disconnect any other nodes.
    {% include note.html content="You need at least three nodes for high availability (HA). Each appliance can have up to four nodes." %}
