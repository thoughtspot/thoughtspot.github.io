---
title: [Cable reference]
last_updated: [11/12/2019]
summary: "Learn the differences between fiber and DAC cables."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

You need either fiber or DAC cables to connect the Super Micro Computer appliance to the switches on your rack. Refer to [Installing the Super Micro Computer]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html).

{: id="fiber-cables"}
## Fiber Cables
Fiber cables can be run long distances to the switch. If you decide to use fiber cables, you need multi mode fiber (MMF) 850nm cables with duplex LC connectors. Refer to [Fiber Cables example]({{ site.baseurl }}/appliance/hardware/cable-reference.html#smc-fiber-cables) to see what they look like.

{: id="smc-fiber-cables"}
![These are fiber cables.]({{ site.baseurl }}/images/smc-fiber-cables.png "Fiber Cables example")

Fiber cables require gigabit interface converters (GBIC), SFP+ form factor. Refer to [GBIC example]({{ site.baseurl }}/appliance/hardware/cable-reference.html#smc-gbic) to see what they look like.

{: id="smc-gbic"}
![This is a gigabit interface converter.]({{ site.baseurl }}/images/smc-gbic.png "GBIC example")

You must plug the GBIC into a 10GbE data port on the back of the appliance before you plug in the fiber cables. Refer to [Plugging in a GBIC]({{ site.baseurl }}/appliance/hardware/cable-reference.html#gbic-arrangement) for more information.

{: id="gbic-arrangement"}
![This is how to plug in a GBIC.]({{ site.baseurl }}/images/smc-gbic-arrangement.png "Plugging in a GBIC")

You must then plug the fiber cables into the GBIC. Refer to [Plugging in the fiber cables]({{ site.baseurl }}/appliance/hardware/cable-reference.html#smc-fiber-arrangement) for more information.

{: id="smc-fiber-arrangement"}
![This is how to plug in the fiber cables.]({{ site.baseurl }}/images/smc-fiber-arrangement.png "Plugging in the fiber cables")

{: id="dac-cables"}
## DAC Cables
Copper can only be run short distances to the switch. An SFP+ is already attached to the cable. Refer to [DAC cables example]({{ site.baseurl }}/appliance/hardware/cable-reference.html#smc-dac-cables) to see what they look like.

{: id="smc-dac-cables"}
![This is what a direct attach copper cable looks like.]({{ site.baseurl }}/images/smc-dac-cables.png "DAC cables example")

You can connect a DAC cable directly to the 10GbE data port.

{% include note.html content="SFP+'s are not included with the appliance. You can order them separately." %}

## References
