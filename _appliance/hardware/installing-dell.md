---
title: [Deploying on the Dell appliance]
summary: "Follow these steps to deploy ThoughtSpot on your Dell appliance."
last_updated: 12/13/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Before you can install a ThoughtSpot cluster on your Dell appliance, you must configure your nodes.

Follow these steps to configure nodes.

<table>
<tr>
<td>&#10063;</td>
<td><a href="installing-dell#installation-prerequisites">Step 1: Complete installation prerequisites</a></td></tr>
<tr>
<td>&#10063;</td>
<td><a href="installing-dell#about-hardware">Step 2: Learn about the hardware</a></td></tr>
<tr>
<td>&#10063;</td>
<td><a href="installing-dell#connect-the-appliance">Step 3: Connect the appliance</a></td></tr>
<tr>
<td>&#10063;</td>
<td><a href="installing-dell#management-config">Step 4: Configure the management settings</a></td></tr>
<tr>
<td>&#10063;</td>
<td><a href="installing-dell#configure-nodes">Step 5: Configure nodes on the command line</a></td></tr>

</table>

{: id="installation-prerequisites"}
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
<td>10GbE network cables, either direct attach copper (DAC) or fiber. See <a href="cable-networking.html">Cable Reference</a>.</td></tr>

<tr>
<td>&#10063;</td>
<td>10bps switch for connection to the iDRAC (Out of Band Management) port</td></tr>

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

{: id="about-hardware"}
## About the Hardware
These pictures show the front and back view of the Dell C6420 appliance.

**Appliance Front View**

![The front of the Dell appliance]({{ site.baseurl }}/images/dell-front-view.png "This is the front of the Dell C6420 appliance.")

**Appliance Back View**

![The back of the Dell appliance]({{ site.baseurl }}/images/dell-back-view.png "This is the back of the Dell C6420 appliance.")

{: id="connect-the-appliance"}
## Connect the Appliance

After you rack and stack the appliance, you can begin to configure it. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#appliance-step-1">Step 1: Connect switches to 10GbE ports</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#appliance-step-2">Step 2: Connect iDRAC ports</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#appliance-step-3">Step 3: Connect a keyboard and monitor</a></td>
  </tr>  
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#appliance-step-4">Step 4: Turn on nodes</a></td>
  </tr>
</table>  

{: id="appliance-step-1"}
### Step 1: Connect switches to 10GbE ports
Connect the 10GbE port of each node, as illustrated in [Appliance Port Location](#appliance-port-location), to the 10GbE switches on your own rack using either fiber or DAC cables.

 Refer to the [Cable reference]({{ site.baseurl }}/appliance/hardware/cable-networking.html) for information on the cable types:
 * [Fiber Cables]({{ site.baseurl }}/appliance/hardware/cable-networking.html#fiber-cables)
 * [DAC Cables]({{ site.baseurl }}/appliance/hardware/cable-networking.html#dac-cables)

 {% include note.html content="Ask your hardware vendor for more details about what they supply and what you need to buy." %}

{: id="appliance-port-location"}
**Appliance Port Location**
![The data and management ports are on the back of the Dell appliance.]({{ site.baseurl }}/images/dell-port-location.png "The iDRAC management port, the 10GbE Data port, and the Display port are on the back of the appliance. The Display port requires a dongle that Dell provides.")

* Connect to switches **only** the nodes you want in your cluster. Power off or disconnect any other nodes or appliances, to prevent accidental configuration of incorrect nodes.
    {% include note.html content="You need at least three nodes for high availability (HA). Each appliance can have up to four nodes." %}
* You must connect all nodes, even if using only one node, to a 10GbE switch.

{: id="appliance-step-2"}
### Step 2: Connect iDRAC ports
Connect the iDRAC management ports of each node to the management switch. If you need help finding the ports, see [Appliance Port Location](#appliance-port-location).

{: id="appliance-step-3"}
### Step 3: Connect a keyboard and monitor
Connect a keyboard and monitor to the appliance. You need these to initially configure the appliance, and you can disconnect them later. Use the adapter Dell provides. Plug it into the Display Port shown in [Appliance Port Location](#appliance-port-location), and plug the monitor in on the other side of the adapter.

**Dell-provided display to VGA adapter**

![Plug the monitor and keyboard into the display port using the adapter.]({{ site.baseurl }}/images/dell-monitor-adapter.png "Plug the monitor and keyboard into the display port using the adapter.")

{: id="appliance-step-4"}
### Step 4: Turn on nodes
Turn on power for the nodes by pressing the power button for each one; see [Appliance Power Button](#appliance-power-button).

{: id="appliance-power-button"}
**Appliance Power Button**

![The power buttons are on the front of the Dell appliance.]({{ site.baseurl }}/images/dell-power-button.png "The power buttons for the nodes are on the front of the appliance. There is one power button for each node.")

{% include note.html content="There is one power button for each node." %}

{: id="management-config"}
## Configure the management settings
Next, input your specific network information to configure the management settings. Refer to [Dell Management Configuration](#dell-idrac-config). If you need additional guidance, view [Dell Support](https://www.dell.com/support/home/us/en/04/product-support/product/dell-xc6420/overview) for this product.

1. **Open the iDRAC settings modal** Before the node boots, a screen appears on your monitor with several options. Click F11 to enter the Boot Manager.
2. **Press F2** Click F2 when the option to do so appears on your screen.
3. **Select iDRAC** In the Bios setup screen, there are several options. Select **iDRAC** to configure your iDRAC settings.
4. **Select network configuration** From the iDRAC settings options, select **network**.  
5. **Fill out the iDRAC settings form** Add your specific network information for the IP address, Gateway, and Netmask in the empty boxes. DNS information is optional. Refer to your ThoughtSpot site survey for a quick reference, and ask your network administrator for help if you have not filled out the site survey yet.
* For **Enable IPv4**, select **enabled**.
* For **Enable DHCP**, select **disabled**.
* For **Enable IPv6**, select **disabled**.
6. **Save changes and reboot** Follow the prompts on the monitor to save changes to the management settings form, exit, and reboot the system.
7. **Log into ThoughtSpot** When the system reboots, the login page appears. Log in as an administrator. Ask your network administrator if you do not know the admin credentials.

{: id="dell-idrac-config"}
{% include image.html file="dell-idrac-config.png" title="Dell iDRAC configuration" alt="Use the monitor and keyboard that you connected earlier to add your network information in the iDRAC network settings modal." caption="Dell Management Configuration" %}

{: id="configure-nodes"}
## Configure nodes on the command line
Once you have connected the appliance, a command line appears on your console. Configure the nodes on this command line. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#node-step-1">Step 1: Get a template for network configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#node-step-2">Step 2: Prepare node configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#node-step-3">Step 3: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-dell#node-step-4">Step 4: Confirm node configuration</a></td>
  </tr>
</table>

{: id="node-step-1"}
### Step 1: Get a template for network configuration
Make sure you have logged into your cluster. If you have not, use admin credentials to log into your cluster. Then, run the `tscli cluster get-config` command to get a template for network configuration for the new cluster. Redirect it to the file `nodes.config`.<br>
You can find more information on this process in the [`nodes.config` file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

{: id="node-step-2"}
### Step 2: Prepare node configuration
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.<br>
If you have additional nodes, complete each node within the nodes.config file in the same way.

Do not edit any part of the `nodes.config` file except the sections described in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). If you delete quotation marks, commas, or other parts of the code, it may cause setup to fail.

{: id="node-step-3"}
### Step 3: Configure the nodes
Configure the nodes in the `nodes.config` file using the `set-config` command.

Run the configuration command: `$ cat nodes.config | tscli cluster set-config`.<br>
If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}#set-config-error-recovery).<br>
After you run the node configuration command, your output appears similar to the following:
    ```
    $ cat nodes.config | tscli cluster set-config

    Connecting to local node-scout
    Setting up hostnames for all nodes
    Setting up networking interfaces on all nodes
    Setting up hosts file on all nodes
    Setting up IPMI configuration
    Setting up NTP Servers
    Setting up Timezone
    Done setting up ThoughtSpot
  ```

{: id="node-step-4"}
### Step 4: Confirm node configuration
Use the `get-config` command to confirm node configuration.<br>
Your output may look similar to the following:
```
$ tscli cluster get-config

{
  "ClusterId": "",
  "ClusterName": "",
  "DataNetmask": "255.255.252.0",
  "DataGateway": "192.168.4.1",
  "IPMINetmask": "255.255.252.0",
  "IPMIGateway": "192.168.4.1",
  "Timezone": "America/Los_Angeles",
  "NTPServers": "0.centos.pool.ntp.org,1.centos.pool.ntp.org,2.centos.pool.ntp.org,3.centos.pool.ntp.org",
  "DNS": "192.168.2.200,8.8.8.8",
  "SearchDomains": "example.company.com",
  "Nodes": {
	"ac:1f:6b:8a:77:f6": {
  	"NodeId": "ac:1f:6b:8a:77:f6",
  	"Hostname": "Thoughtspot-server1",
  	"DataIface": {
    	"Name": "eth2",
    	"IPv4": "192.168.7.70"
  	},
  	"IPMI": {
    	"IPv4": "192.168.5.70"
  	}
	}
  }
}
```

## Install ThoughtSpot software
Next, [install your ThoughtSpot clusters]({{ site.baseurl }}/appliance/hardware/dell-cluster-install.html).

{% include content/install/install-cluster-error-recovery.md %}

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
```
    $ tscli cluster create 6.0.tar.gz
```
3. Edit the ouput with your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

The cluster installer automatically reboots all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which takes a few minutes. Log into any node to check the current cluster status, using the command `tscli cluster status`.

### 2. Check Cluster Health
Once the cluster is installed, check its status with the `tscli cluster status` command.

**Cluster Status**
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
* [Cable Reference]({{ site.baseurl }}/appliance/hardware/cable-networking.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
