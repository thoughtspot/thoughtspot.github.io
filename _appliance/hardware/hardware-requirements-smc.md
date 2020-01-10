---
title: [Hardware Requirements]
last_updated: [1/9/2020]
summary: "Learn about your SMC hardware before deploying ThoughtSpot."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="about-hardware"}
## About the Hardware
You can deploy ThoughtSpot on two different appliance hardware platforms: Haswell and Skylake. Both of the platforms provide the same performance. Refer to [Haswell and Skylake hardware details]({{ site.baseurl }}#hardware-details) for details on their physical differences.

{: id="hardware-details"}
| Details | Haswell | Skylake |
| --- | --- | --- |
| <strong>Dimensions</strong> | 2 RU chassis (17.25" x 3.47" x 28.5" (WxHxD)) | 2 RU chassis (17.6" x 3.47" x 28.75" (WxHxD)) |
| <strong># of nodes</strong> | Populated with 1 to 4 nodes | Populated with 1 to 4 nodes |
| <strong>Node specifications</strong> | Each node is independent and consists of a server board (removable from rear), 1x 200GB SSD, 3x 2TB HDD | Each node is independent and consists of a server board (removable from rear), 1x 240GB SSD, 3x 2TB HDD |
| <strong>Max power consumption</strong> | 2000 W | 2200 W |
| <strong>Required power input</strong> | 200-240V / 11.8 - 9.8A / 50-60Hz (C13 / C14 power cords)| 220-240 VAC  50-60 Hz (C13 / C14 power cords)|

{: id="haswell-front-back-diagrams"}
## Haswell front and back views
These images show the front and back views of each appliance.

The nodes on the back of both appliances are in a reverse N shape, with Node A at the bottom right and Node D at the top left.

{: id="haswell-front-back"}

{% include image.html file="smc-haswell-front-view.png" title="The front of the Haswell appliance" alt="The front of the Haswell appliance" caption="Haswell front view" %}

{% include image.html file="smc-haswell-back-view.png" title="The back of the Haswell appliance" alt="The back of the Haswell appliance" caption="Haswell back view" %}
The Haswell appliance shown here is not fully populated, as it only has three nodes. Your appliance may be populated with 1-4 nodes, depending on the ordered configuration. If you order less than four nodes, ThoughtSpot fills the empty slot with a filler panel.

{: id="skylake-front-back-diagrams"}
## Skylake front and back views

{: id="skylake-front-back"}
{% include image.html file="smc-skylake-front-view.png" title="The front of the Skylake appliance" alt="The front of the Skylake appliance" caption="Skylake front view" %}

{% include image.html file="smc-skylake-back-view.png" title="The back of the Skylake appliance" alt="The back of the Skylake appliance" caption="Skylake back view" %}
The Skylake appliance shown here is fully populated with four nodes.

## Connect the appliance
Next, [connect the appliance.]({{ site.baseurl }}/appliance/hardware/connect-appliance-smc.html)
