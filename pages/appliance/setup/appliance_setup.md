---
title: [elephant]
tags: 
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
#  Install and start the appliance

The ThoughtSpot appliance comes pre-installed with all the required software.

Network settings on the appliance are required prior to using the appliance. Reference ThoughtSpot's site survey for the information specific to the customer's network environment that is required to configure the appliance.

If ThoughtSpot's site survey form was completed and returned to ThoughtSpot prior to the appliance being shipped, the appliance may be pre-configured for your network environment and ready to install and connect to your network.

If the network configuration was not pre-set, then this step must be done as part of the installation process.

If assistance is needed to determine the configuration status of the appliance, please contact ThoughtSpot Support.

To install and start the appliance and connect to your network:

1.   Refer to the Rack Install Guide to install the appliance securely in your data center. 
2.   Plug in the power cord, but do not turn the appliance on yet. \(See the figure of the **Location of the power and UID buttons on the control panel** for the power button location.\) 
3.   Connect the IPMI dedicated LAN port to a dedicated LAN for system management. 
4.   Connect the data port\(s\) on the back of the appliance to your 10GbE network switch. Only the one 10GbE port shown in the **Back of Node** figures below is active. Only one 10GbE port connection is needed. 

     ![](../images/node_diagram_ivy_bridge.png "Ivy Bridge port to use for 10 GbE") 

     ![](../images/node_diagram_internal.png "Haswell port to use for 10 GbE") 

5.   Turn on the appliance by pressing and releasing the power button for each node and allow time for the nodes to boot up completely. 

     ![](../images/rack_diagram4.png "Location of the power and UID buttons on the control panel") 

    **Note:** Each node has its own power and UID buttons. Turning the system off using the power button removes the main power, but keeps standby power supplied to the system. Therefore, you must unplug the AC power cord from any external power source before servicing. The power button for each node has a built-in LED which will turn green when the power is on.

    There is also a UID button, which is used to turn on or off the blue light function of the LED. Once the blue light is activated, the unit can be easily located in very large racks and server banks. A blue LED is also illuminated on the corresponding node, visible from the rear of the chassis.

6.   After the appliance has been turned on, verify that both LEDs \(IPMI and data NICs\) on each network card are lit. 
7.   Connect a keyboard and monitor to each node in turn. You should see a login prompt on the screen. If you don't see one or the screen isn't responsive, press the key combination control, alt, and F2 on your keyboard, which should allow you to attempt to log in. 
8.   Log in as username admin, using the default password. 
9.   Once logged in, run the following commands and capture the output at every stage: 

    ```
    sudo ipmitool lan print 1
    sudo ipmitool lan set 1 ipsrc static
    sudo ipmitool lan set 1 defgw ipaddr <IPMI_GATEWAY_ADDR>
    sudo ipmitool lan set 1 netmask <IPMI_VLAN_SUBNET_MASK>
    sudo ipmitool lan set 1 ipaddr <IPMI_NIC_IP_ADDR>
    sudo ipmitool lan print 1
    ```

10.  Run and capture the output of the following commands as well: 

    ```
    ifconfig eth0
    ifconfig eth1
    ifconfig eth2
    ifconfig eth3
    sudo ethtool eth0
    sudo ethtool eth1
    sudo ethtool eth2
    sudo ethtool eth3
    ```

11.  Share the output of all commands with the ThoughtSpot team who will then determine the next steps. 

**Parent topic:** [Cable networking and installation](../../appliance/setup/overview.html)

