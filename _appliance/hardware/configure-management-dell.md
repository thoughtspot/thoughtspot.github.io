---
title: [Configure the Dell Management Settings]
summary: "Configure the management settings for Dell before you can deploy ThoughtSpot."
last_updated: 12/16/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Input your specific network information to configure the management settings for your Dell appliance. Refer to [Dell Management Configuration](#dell-idrac-config). If you need additional guidance, view [Dell Support](https://www.dell.com/support/home/us/en/04/product-support/product/dell-xc6420/overview) for this product.

1. **Open the iDRAC settings modal** Before the node boots, a screen appears on your monitor with several options. Click F11 to enter the Boot Manager.
2. **Press F2** Click F2 when the option to do so appears on your screen.
3. **Select iDRAC** In the Bios setup screen, there are several options. Select **iDRAC** to configure your iDRAC management settings.
4. **Select network configuration** From the iDRAC settings options, select **network**.  
5. **Fill out the iDRAC settings form** Add your specific network information for the IP address, Gateway, and Netmask in the empty boxes. DNS information is optional. Refer to your ThoughtSpot site survey for a quick reference, and ask your network administrator for help if you have not filled out the site survey yet.
* For **Enable IPv4**, select **enabled**.
* For **Enable DHCP**, select **disabled**.
* For **Enable IPv6**, select **disabled**.
6. **Save changes and reboot** Follow the prompts on the monitor to save changes to the management settings form, exit, and reboot the system.
7. **Log into ThoughtSpot** After the system reboots, the login page appears. Log in as an administrator. Ask your network administrator if you do not know the admin credentials.

{: id="dell-idrac-config"}
{% include image.html file="dell-idrac-config.png" title="Dell iDRAC configuration" alt="Use the monitor and keyboard that you connected earlier to add your network information in the iDRAC network settings modal." caption="Dell Management Configuration" %}

## Configure nodes
Next, [configure nodes.]({{ site.baseurl }}/appliance/hardware/configure-nodes-dell.html)
