---
title: [Cable reference]
last_updated: [10/31/2019]
summary: "Learn the differences between fiber and DAC cables."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---


{: id="fiber-cables"}
### Fiber Cables
Fiber cables can be run long distances to the switch. If you decide to use fiber cables, you need multi mode fiber (MMF) 850nm cables with duplex LC connectors. Refer to [Fiber Cables example]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#smc-fiber-cables) to see what they look like.

{: id="smc-fiber-cables"}
![Fiber Cables example]({{ site.baseurl }}/images/smc-fiber-cables.png "These are fiber cables.")

Fiber cables require gigabit interface converters (GBIC), SFP+ form factor. Refer to [GBIC example]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#smc-gbic) to see what they look like.

{: id="smc-gbic"}
![GBIC example]({{ site.baseurl }}/images/smc-gbic.png "This is a gigabit interface converter.")

You must plug the GBIC into a 10GBe data port on the back of the appliance before you plug in the fiber cables. Refer to [Plugging in a GBIC]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#gbic-arrangement) for more information.

{: id="gbic-arrangement"}
![Plugging in a GBIC]({{ site.baseurl }}/images/smc-gbic-arrangement.png "This is how to plug in a GBIC.")

You must then plug the fiber cables into the GBIC. Refer to [Plugging in the fiber cables]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#smc-fiber-arrangement) for more information.

{: id="smc-fiber-arrangement"}
![Plugging in the fiber cables]({{ site.baseurl }}/images/smc-fiber-arrangement.png "This is how to plug in the fiber cables.")

{: id="dac-cables"}
### DAC Cables
Copper can only be run short distances to the switch. An SFP+ is already attached to the cable. Refer to [DAC Cables example]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#smc-dac-cables) to see what they look like.

{: id="smc-dac-cables"}
![DAC Cables example]({{ site.baseurl }}/images/smc-dac-cables.png "This is what a direct attach copper cable looks like.")

You can connect a DAC cable directly to the 10GBe data port. Refer to [Plugging in the DAC cables]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html#smc-dac-arrangement) for more information.

{: id="smc-dac-arrangement"}
![Plugging in the DAC cables]({{ site.baseurl }}/images/smc-dac-arrangement.png "This is how to plug in a direct attach copper cable.")

**Note** Cables do not come with the appliance.
