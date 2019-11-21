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
<td>Data center with proper cooling</td></tr>

<tr>
<td>&#10063;</td>
<td>AC power</td></tr>

<tr>
<td>&#10063;</td>
<td>10G connection: SFP+ for switch side</td></tr>

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

* Connect to switches **only** the nodes you want in your cluster. Power off or disconnect any other nodes or appliances, to prevent accidental configuration of incorrect nodes.
    {% include note.html content="You need at least three nodes for high availability (HA). Each appliance can have up to four nodes." %}
* You must connect all nodes, even if using only one node, to a 10GbE switch.

### Step 2: Connect iDRAC ports
Connect the iDRAC management ports of each node to the management switch. If you need help finding the ports, see [Appliance Port Location](#appliance-port-location).

### Step 3: Connect a keyboard and monitor
Connect a keyboard and monitor to the appliance. You need these to initially configure the appliance, and you can disconnect them later. Use the adapter Dell provides. Plug it into the Display Port shown in [Appliance Port Location](#appliance-port-location), and plug the monitor in on the other side of the adapter.

**Dell-provided display to VGA adapter**

![Plug the monitor and keyboard into the display port using the adapter.]({{ site.baseurl }}/images/dell-monitor-adapter.png "Plug the monitor and keyboard into the display port using the adapter.")

### Step 4: Turn on nodes
Turn on power for the nodes by pressing the power button for each one; see [Appliance Power Button](#appliance-power-button).

{: id="appliance-power-button"}
**Appliance Power Button**

![The power buttons are on the front of the Dell appliance.]({{ site.baseurl }}/images/dell-power-button.png "The power buttons for the nodes are on the front of the appliance. There is one power button for each node.")

{% include note.html content="There is one power button for each node." %}

## Configure the management settings
Next, input your specific network information to configure the management settings. Refer to [Dell Management Configuration](#dell-idrac-config).

1. **Open the iDRAC settings modal** Before the node boots, a screen appears on your monitor with several options. Click F11 to enter the Boot Manager.
2. **Press F2** Click F2 when the option is available.
3. **Select iDRAC** In the Bios setup screen, there are several options. Select **iDRAC**.
4. **Select network configuration** From the iDRAC settings options, select **network**.  
5. **Fill out the iDRAC settings form** Add your specific network information for the IP address, Gateway, and Netmask in the empty boxes. Refer to your ThoughtSpot site survey for a quick reference, and ask your network administrator for help if you have not filled out the site survey yet. Refer to [Parameters of the nodes.config file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html#parameters-nodes.config) for definitions of the fields in the form.
* For **Enable IPv4**, select **enabled**.
* For **Enable DHCP**, select **disabled**.
* For **Enable IPv6**, select **disabled**.
6. **Save changes and reboot** Follow the prompts on the monitor to save changes to the management settings form, exit, and reboot the system.
7. **Log into ThoughtSpot** When the system reboots, the login page appears. Log in as an administrator. The username is *admin*, and the password is *th0ughtSp0t*.

{: id="dell-idrac-config"}

**Dell Management Configuration**

![Configure the management settings with your monitor and keyboard]({{ site.baseurl }}/images/dell-idrac-config.png "Use the monitor and keyboard that you connected earlier to add your network information in the iDRAC network settings modal.")

{: id="install-cluster"}
## Install Cluster
Next, install the cluster using the release tarball (est. time 1 hour). Make sure you can connect to ThoughtSpot remotely. If you can, you can run the installer on your local computer.

If you do not have a link to download the release tarball, open a support ticket at [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to access the release tarball.

### 1. Run the Installer
1. Copy the downloaded release tarball to `/home/admin` with the command `scp 0.0.tar.gz admin@hostname:/home/admin/file-name`.
* Replace '0.0' with your release number.
* Replace 'hostname' with your specific hostname.
* Replace 'file-name' with the name of the tarball file.
```
  $ scp 0.0.tar.gz admin@hostname:/home/admin/file-name
```
2. Run `tscli cluster create <release>`.
3. Edit the ouput with your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

The cluster installer automatically reboots all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes. Log into any node to check the current cluster status, using the command `tscli cluster status`.

### 2. Check Cluster Health
Once the cluster is installed, check its status with the `tscli cluster status` command.

### Cluster Status
```
$ tscli cluster status
Cluster: RUNNING
Cluster name    : thoughtspot
Cluster id      : 1234X11111
Number of nodes : 3
Release         : 6.0
Last update     = Wed Oct 16 02:24:18 2019
Heterogeneous Cluster : False
Storage Type    : HDFS

Database: READY
Number of tables in READY state: 2185
Number of tables in OFFLINE state: 0
Number of tables in INPROGRESS state: 0
Number of tables in STALE state: 0
Number of tables in ERROR state: 0

Search Engine: READY
Has pending tables. Pending time = 1601679ms
Number of tables in KNOWN_TABLES state: 1934
Number of tables in READY state: 1928
Number of tables in WILL_REMOVE state: 0
Number of tables in BUILDING_AND_NOT_SERVING state: 0
Number of tables in BUILDING_AND_SERVING state: 128
Number of tables in WILL_NOT_INDEX state: 0
```

### 3. Finalize Installation
After the cluster status changes to "Ready," log into the ThoughtSpot application on your browser. Follow these steps:
1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https:<IP-address>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning to proceed:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot login page appears.
5. In the [ThoughtSpot login window]({{ site.baseurl }}/appliance/hardware/installing-dell.html#ts-login), enter admin credentials, and click **Sign in**.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
![ThoughtSpot's login window]({{ site.baseurl }}/images/ts-login-page.png "Log into ThoughtSpot. Enter Username, Password, and click Sign in. You may select Remember me option.")

## References
Use these references for successful installation and administration of ThoughtSpot.

* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [Cable Reference]({{ site.baseurl }}/appliance/hardware/cable-reference.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
