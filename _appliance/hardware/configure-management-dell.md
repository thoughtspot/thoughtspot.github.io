---
title: [Configure the Dell Management Settings]
summary: "Configure the management settings for Dell before you can deploy ThoughtSpot."
last_updated: 2/7/2020
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Input your specific network information to configure the management settings for your Dell appliance. Refer to [Dell Management Configuration](#dell-idrac-config). If you need additional guidance, view [Dell Support](https://www.dell.com/support/home/us/en/04/product-support/product/dell-xc6420/overview) for this product.

1. **Open the iDRAC settings modal** Before the node boots, a screen appears on your monitor with several options. Click F2 to open the Bios setup menu.
3. **Select iDRAC** In the Bios setup screen, there are several options. Select **iDRAC settings** to configure your iDRAC management settings.

    ![Select iDRAC settings]({{ site.baseurl }}/images/dell-idracsettings.png "Select iDRAC settings")

4. **Select network configuration** From the iDRAC settings options, select **network**.  

    ![Select network]({{ site.baseurl }}/images/dell-select-network.png "Select network")

5. **Fill out the iDRAC settings form** Add your specific network information for the IP address, Gateway, and Netmask in the empty boxes. DNS information is optional. <a href="{{ site.baseurl }}/site-survey.pdf" download>Download</a> and fill out the ThoughtSpot site survey for a quick reference, and ask your network administrator for help if you have not filled out the site survey yet.
    {% include warning.html content="If you configure DNS servers, you must only configure two servers. ThoughtSpot does not support configuration of three DNS servers." %}
* For **Enable IPv4**, select **enabled**.
* For **Enable DHCP**, select **disabled**.
6. **Save changes and reboot** Follow the prompts on the monitor to save changes to the management settings form, exit, and reboot the system.
7. **Log into ThoughtSpot** After the system reboots, the login page appears. Log in as an administrator. Ask your network administrator if you do not know the admin credentials.

{: id="dell-idrac-config"}
![Dell iDRAC configuration]({{ site.baseurl }}/images/dell-idracconfig.png "Dell iDRAC configuration")

## Configure nodes
Next, [configure nodes.]({{ site.baseurl }}/appliance/hardware/configure-nodes-dell.html)
