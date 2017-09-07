---
title: [Cable networking]
tags:
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
---
This section reviews the types of cables needed for 10GbE networking and how to plug them in. There are three types of cables to consider for 10GbE networking:

-   Fiber
-   Direct Attach Copper \(DAC\)
-   Category 6a \(not supported by ThoughtSpot\)

## Option 1 - Fiber cables

Fiber can be run long distances to the switch.

 ![](/pages/images/fiber.png "Fiber cables")

These cables require gigabit interface converters \(GBICs\), SFP+ form factor.

**Remember:** ThoughtSpot does not supply cables or GBICs

![](/pages/images/gbics.png "GBICs")

The GBIC must be plugged into a data port on the back of the appliance before plugging in the fiber cables.

![](/pages/images/plug_in_gbic.png "Plugging in a GBIC")

The fiber cables must then be plugged into the GBIC.

![](/pages/images/plug_in_fiber_cables.png "Plugging in fiber cables")

## Option 2 - DAC/Twinax cables

Copper can only be run short distances to the switch. An SFP+ is attached to the cable.

![](/pages/images/dac_twinax.png "DAC/Twinax cables")

Here is how you would plug in a DAC cable.

![](/pages/images/plug_in_dac.png "Plugging in DAC cables")

## Non-option - Category 6a cables \(not supported by ThoughtSpot\)

There are no adapters for these cables. The 10GbE NIC \(Network Interface Card\) used on the ThoughtSpot appliance is not compatible with this type of cable/connection.

![](/pages/images/cat_6a_cable.png "Category 6a
    cables")

**Parent topic:** [Cable networking and installation](/pages//pages/appliance/setup/overview.html)
