---
title: [Configure ThoughtSpot Nodes on the Super Micro Computer Appliance]
last_updated: [12/12/2019]
summary: "Configure your nodes before you can install your cluster(s)."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Before you can install ThoughtSpot clusters on your SMC appliance, you must configure the nodes. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#installation-prerequisites">Step 1: Complete installation prerequisites</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#about-hardware">Step 2: Learn about the hardware</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#connect-the-appliance">Step 3: Connect the appliance</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#configure-nodes">Step 4: Configure nodes</a></td>
  </tr>
</table>

{: id="installation-prerequisites"}
## Installation Prerequisites

Ensure that you have the following items, information, and understanding of policies before you proceed:

<table>
<tr>
<td>&#10063;</td>
<td>Appliance quick start guide, to locate IPMI and data network ports. See <a href="#step-1-connect-switches-to-10gbe-ports">Appliance Port Location</a>.</td></tr>

<tr>
<td>&#10063;</td>
<td>Data center with proper cooling</td></tr>

<tr>
<td>&#10063;</td>
<td>AC power</td></tr>

<tr>
<td>&#10063;</td>
<td>10GbE switch, with enabled IPv6 broadcast and multicast. You need one per node.</td></tr>
<tr>
<td>&#10063;</td>
<td>10GbE network cables, either direct attach copper (DAC) or fiber. Refer to <a href="#step-1-connect-switches-to-10gbe-ports">Step 1: Connect switches to 10GbE ports</a> for more information to decide between the two types.</td></tr>

<tr>
<td>&#10063;</td>
<td>100Mbps or 1Gbps switch for IPMI, for Out of Band Management. You need one per node.</td></tr>

<tr>
<td>&#10063;</td>
<td>Cat5 network cables</td></tr>

<tr>
<td>&#10063;</td>
<td>Rack space (2U or 3.5 inches per appliance) and power strip</td></tr>

<tr>
<td>&#10063;</td>
<td>Monitor and keyboard</td></tr>

<tr>
<td>&#10063;</td>
<td>10G connection: SFP+ for switch side</td></tr>

<tr>
<td>&#10063;</td>
<td>Networking information, for data, management IPs, DNS, timezone, and default gateway IP. Contact your network administrator for this information, and fill out the ThoughtSpot site survey so that you have a quick reference before beginning the install process.</td></tr>

<tr>
<td>&#10063;</td>
<td>Network policies</td></tr>
</table>

See [Network policies]({{ site.baseurl }}/appliance/firewall-ports.html).

{: id="about-hardware"}
## About the Hardware
You can deploy ThoughtSpot on two different appliance hardware platforms: Haswell and Skylake. Both of the platforms provide the same performance. Refer to [Haswell and Skylake hardware details]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#hardware-details) for details on their physical differences.

{: id="hardware-details"}
| Details | Haswell | Skylake |
| --- | --- | --- |
| <strong>Dimensions</strong> | 2 RU chassis (17.25" x 3.47" x 28.5" (WxHxD)) | 2 RU chassis (17.6" x 3.47" x 28.75" (WxHxD)) |
| <strong># of nodes</strong> | Populated with 1 to 4 nodes | Populated with 1 to 4 nodes |
| <strong>Node specifications</strong> | Each node is independent and consists of a server board (removable from rear), 1x 200GB SSD, 3x 2TB HDD | Each node is independent and consists of a server board (removable from rear), 1x 240GB SSD, 3x 2TB HDD |
| <strong>Max power consumption</strong> | 2000 W | 2200 W |
| <strong>Required power input</strong> | 200-240V / 11.8 - 9.8A / 50-60Hz | 220-240 VAC  50-60 Hz |

{: id="hardware-front-back-diagrams"}
### Hardware front and back view diagrams
These pictures show the front and back views of each appliance.

{: id="haswell-front-back"}
**Haswell Front View**

![The front of the Haswell appliance]({{ site.baseurl }}/images/smc-haswell-front-view.png "The front of the Haswell appliance")

**Haswell Back View**

![The back of the Haswell appliance]({{ site.baseurl }}/images/smc-haswell-back-view.png "The back of the Haswell appliance")

{% include note.html content="The nodes on the back are in a reverse N shape, with Node A at the bottom right and Node D at the top left." %}

{% include note.html content="The Haswell appliance shown here is not fully populated, as it only has three nodes. Your appliance may be populated with 1-4 nodes, depending on the ordered configuration. If you order less than four nodes, ThoughtSpot fills the empty slot with a filler panel." %}

{: id="skylake-front-back"}
**Skylake Front View**

![The front of the Skylake appliance]({{ site.baseurl }}/images/smc-skylake-front-view.png "The front of the Skylake appliance")

**Skylake Back View**

![The back of the Haswell appliance]({{ site.baseurl }}/images/smc-skylake-back-view.png "The back of the Haswell appliance")

{% include note.html content="The nodes on the back are in a reverse N shape, with Node A at the bottom right and Node D at the top left." %}

{% include note.html content="The Skylake appliance shown here is fully populated with four nodes." %}

{: id="connect-the-appliance"}
## Connect the appliance

After you rack and stack the appliance, you can begin to configure it. If needed, review the [Hardware Appliance Overview]({{ site.baseurl }}/appliance/hardware/inthebox.html). Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#appliance-step-1">Step 1: Connect switches to 10GbE ports</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#appliance-step-2">Step 2: Connect IPMI ports</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#appliance-step-3">Step 3: Turn on nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#appliance-step-4">Step 4: Log in</a></td>
  </tr>
</table>

{: id="appliance-step-1"}
### Step 1: Connect switches to 10GbE ports
Connect the 10GbE port of each node, as illustrated in [Appliance Port Location]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#step-1-connect-switches-to-10gbe-ports), to the 10GbE switches on your own rack using either fiber or DAC cables.

 Refer to the [Cable reference]({{ site.baseurl }}/appliance/hardware/cable-reference.html) for information on the cable types:
 * [Fiber Cables]({{ site.baseurl }}/appliance/hardware/cable-reference.html#fiber-cables)
 * [DAC Cables]({{ site.baseurl }}/appliance/hardware/cable-reference.html#dac-cables)

 {% include note.html content="Ask your hardware vendor for more details about what they supply and what you need to buy." %}

{: id=appliance-port-location}
Depending on which version of the SMC appliance you have, Haswell or Skylake, your 10GbE ports are in a different spot on the back of the appliance. Here is a picture of the back of each appliance.

{: id="smc-appliance-haswell-location-ports"}
**Haswell appliance**

![The data and management ports are on the back of the SMC Haswell appliance.]({{ site.baseurl }}/images/smc-haswell-location-ports-new.png "The back of the SMC Haswell appliance")

{% include note.html content="The above image of the Haswell appliance has a GBIC plugged in next to the highlighted 10GbE data port." %}

{: id="smc-appliance-skylake-location-ports"}
**Skylake appliance**

![The data and management ports are on the back of the SMC Skylake appliance.]({{ site.baseurl }}/images/smc-appliance-skylake-location-ports.png "The back of the SMC Skylake appliance")

* Connect to switches **only** the appliances (4 nodes each) that you want to use in the cluster.  
* You must power off or disconnect from the switch all other appliances or nodes. This prevents accidental configuration of incorrect nodes.  
* You must connect all nodes, even if using only one node, to a 10G switch.
* Verify that the connection is valid by pinging the gateway:
  * Enter `ping <default-gateway-IP>`. Ask your network administrator for your default gateway IP if you have not already listed it in your ThoughtSpot site survey.
```  
    $ ping <default-gateway-IP>
```    

{: id="appliance-step-2"}
### Step 2: Connect IPMI ports
Connect the IPMI port of each node to the management switch. If you need help finding the ports, see [Appliance Port Location]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#step-1-connect-switches-to-10gbe-ports).

{: id="appliance-step-4"}
### Step 3: Turn on nodes
Turn on the power for the nodes by pressing the power button; see [Appliance Power Button]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#step-3-turn-on-nodes).

{: id="smc-appliance-power-button"}
| Haswell Appliance | &#32; &#32; &#32; | Skylake Appliance |
| ---- | ---- | ---- |
| ![The power button is at the front of the Haswell appliance.]({{ site.baseurl }}/images/smc-haswell-power-button-new.png "The power button on the front of the Haswell SMC appliance")| &#32; | ![The power button is at the front of the Skylake appliance]({{ site.baseurl }}/images/smc-appliance-skylake-power-button.png "The power button on the front of the Skylake SMC appliance") |

{% include note.html content="There is one power button for each node." %}

{: id="appliance-step-4"}
### Step 4: Log in
1. Connect a keyboard and the mouse to each node on the appliance.
2. You should see a login prompt on the screen. If you don't see one or the screen isn't responsive, press the key combination **control--alt--F2** on your keyboard, which should allow you to attempt to log in.
2. Log in using the admin user credentials for the console. If you do not know the admin credentials, ask your network administrator.

{: id="configure-nodes"}
## Configure nodes  
Once you have connected the appliance, configure the nodes in your Mac Terminal or Windows terminal emulator. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-1">Step 1: SSH into your cluster</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-2">Step 2: Change to the <code>install</code> directory</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-3">Step 3: Get a template for network configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-4">Step 4: Prepare node configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-5">Step 5: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="installing-the-smc#node-step-6">Step 6: Confirm node configuration</a></td>
  </tr>
</table>

If you completed ThoughtSpot's site survey form and returned it to [ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) before ThoughtSpot shipped the appliance, the appliance may be pre-configured for your network environment and ready to install and connect to your network.

If the network configuration was not pre-set, then this step must be done as part of the installation process.

Follow these steps to determine the configuration status of your appliance.
1. SSH into your cluster. Run `ssh admin@<cluster-IP>` or `ssh admin@<hostname>`.
```
    $ ssh admin@<clusterIP>
```
2. Run `tscli cluster status`.
```
    $ tscli cluster status
```
3. If the output shows READY, and looks like the [cluster status output]({{ site.baseurl }}#check-cluster-health) further on in this article, your appliance is configured.
4. Skip to [Finalize installation]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html#3-finalize-installation).

If your status is not READY, continue with the installation process outlined below.

{: id="node-step-1"}
### Step 1: SSH into your cluster
SSH into your cluster with admin credentials.

1. Run the command `ssh admin@<cluster-IP>` or `ssh admin@<hostname>` on the command line.<br>
    Replace `clusterIP` or `hostname` with your specific network information.
```
    $ ssh admin@<clusterIP>
```
2. Enter your admin password when prompted.<br>
    Ask your network administrator if you don't know the password.

{: id="node-step-2"}
### Step 2: Change to the `install` directory
In your terminal, change directory to `/home/admin/install` by running the command `cd /home/admin/install`. If your `/install` subdirectory does not exist, you may have to use the `/home/admin` directory.

    $ cd /home/admin/install  

{: id="node-step-3"}
### Step 3: Get a template for network configuration
Run the `tscli cluster get-config` command to get a template for network configuration. Redirect it to the file `nodes.config`. You can find more information on this process in the [nodes.config file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

{: id="node-step-4"}
### Step 4: Prepare node configuration
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.<br>
If you have additional nodes, complete each node within the nodes.config file in the same way.

Do not edit any part of the nodes.config file except the sections described in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). If you delete quotation marks, commas, or other parts of the code, it may cause setup to fail.

{: id="node-step-5"}
### Step 5: Configure the nodes
Configure the nodes in the `nodes.config` file using the `set-config` command.

Run `$ cat nodes.config | tscli cluster set-config` in your terminal.<br>
If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}#set-config-error-recovery).

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

{: id="node-step-6"}
### Step 6: Confirm node configuration
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
Next, [install your ThoughtSpot clusters]({{ site.baseurl }}/appliance/hardware/smc-cluster-install.html).

## Error recovery

{: id="set-config-error-recovery"}
### `Set-config` error recovery
If you get a warning about node detection when you run the `set-config` command, restart the node-scout service.

Your error may look something like the following:
```
Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```

Restart the node-scout service with the following command.
```
$ sudo systemctl restart node-scout
```

Ensure that you restarted the node-scout by running `sudo systemctl status node-scout`. Your output should specify that the node-scout service is active. It may look something like the following:
```
$ sudo systemctl status node-scout
  ● node-scout.service - Setup Node Scout service
    Loaded: loaded (/etc/systemd/system/node-scout.service; enabled; vendor preset: disabled)
    Active: active (running) since Fri 2019-12-06 13:56:29 PST; 4s ago
```    
Next, retry the set-config command.
```
$ cat nodes.config | tscli cluster set-config
```
The command output should no longer have a warning.

## References
Use these references for successful installation and administration of ThoughtSpot.

* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
