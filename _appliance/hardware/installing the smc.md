---
title: [Installing the Super Micro Computer]
last_updated: [10/16/2019]
summary: "Learn how to install the Super Micro Computer (SMC) Appliance."
sidebar: mydoc_sidebar
permalink: /appliance/super-micro-computer/install.html
---
{: id="Installation-Prerequisites"}
## Installation Prerequisites

Ensure that you have the following items, information, and understanding of policies before you proceed:

<table>
<tr>
<td>&#10063;</td>
<td>Appliance quick start guide, to locate IPMI and data network ports. See <a href="#smc-appliance-location-ports">Appliance Port Location</a>.</td></tr>
<tr>
<td>&#10063;</td>
<td>10GbE switch, with enabled IPv6 broadcast and multicast</td></tr>
<tr>
<td>&#10063;</td>
<td>10GbE network cables, either direct attach copper (DAC) or fiber</td></tr>

<tr>
<td>&#10063;</td>
<td>100Mbps or 1Gbps switch for IPMI, for Out of Band Management</td></tr>

<tr>
<td>&#10063;</td>
<td>Cat5 network cables</td></tr>

<tr>
<td>&#10063;</td>
<td>Rack space and power strip</td></tr>

<tr>
<td>&#10063;</td>
<td>Monitor and keyboard</td></tr>

<tr>
<td>&#10063;</td>
<td>Networking information, for data, management IPs, DNS, timezone, and default gateway IP. Contact your network administrator for this information, and fill out the ThoughtSpot site survey so that you have a quick reference.</td></tr>

<tr>
<td>&#10063;</td>
<td>Network policies</td></tr>
</table>

See [Network policies]({{ site.baseurl }}/appliance/firewall-ports.html).

{: id="Configure-Nodes"}
## Configure Nodes

After you rack and stack the appliance, you can begin to configure it. If needed, review the [Hardware Appliance Overview]({{ site.baseurl }}/appliance/hardware/inthebox.html).

{: id="Connect-the-Appliance"}
### Connect the Appliance

Follow these steps to connect the appliance. Refer to [Appliance Port Location](smc-appliance-location-ports) and [Appliance Power Button](smc-appliance-power-button).

1. **Connect switches to 10GbE ports** Connect the 10GbE port of each node, as illustrated in [Appliance Port Location](smc-appliance-location-ports), to the 10GbE switches on your own rack.

     #### Appliance Port Location: The back of the SMC appliance
Depending on which version of the SMC appliance you have, Haswell or Skylight, your 10GbE ports will be in a different spot on the back of the appliance. Here is a picture of the back of each appliance.

    {: id="smc-appliance-haswell-location-ports"}
     ![The back of the SMC Haswell appliance]({{ site.baseurl }}/images/smc-appliance-haswell-location-ports.png "The 10GbE ports are on the back of the SMC Haswell appliance")

    {: id="smc-appliance-skylight-location-ports"}
    ![The back of the SMC Skylight appliance]({{ site.baseurl }}/images/smc-appliance-skylight-location-ports.png "The 10GbE ports are on the back of the SMC Skylight appliance")
    * Connect to the switch **only** the appliances (4 nodes each) that you want to use in the cluster.  
    * You must power off or disconnect from the switch all other appliances or nodes. This prevents accidental configuration of incorrect nodes.  
    * You must connect all nodes, even if using only one node, to a 10G switch. Verify that the connection is valid by pinging the gateway. To ping the gateway, enter `ping <default gateway IP>`. Ask your network administrator for your default gateway IP if you have not already listed it in your ThoughtSpot site survey.


2. **Connect IPMI ports** Connect the IPMI port of each node to the management switch; see [Appliance Port Location](smc-appliance-location-ports).

3. **Turn on nodes** Turn on the power for the nodes by pressing the power button; see [Appliance Power Button](smc-appliance-power-button). Note that there is one power button for each node.

#### Appliance Power Button: The front of the SMC appliance

{: id="smc-appliance-power-button"}
![The power button on the front of an SMC appliance]({{ site.baseurl }}/images/smc-appliance-power-button.png "The power button is at the front of the appliance")

4. **Log in** Connect the keyboard and the mouse to the appliance, and log in using the *admin* user credentials for the console.

{: id="Configure-Node-in-Terminal"}
### Configure Nodes in Terminal

1. **Change to the `install` directory** In your terminal, change directory to `/home/admin/install` by running the command `cd /home/admin/install` You may have to use the `home/admin` directory if your `/install` subdirectory does not exist.

2. **Run the `get-config` command** Run the `tscli cluster get-config` command to get a list of the nodes that must be configured for the new cluster, and redirect it to the file `nodes.config`.  More information on this procedure can be found in the [nodes.config file reference]({{ site.baseurl }}/appliance/super-micro-computer-nodes-config.html).


3. **Configure the network of nodes** Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/super-micro-computer-nodes-config.html#example-node-autodisovery) in the [nodes.config file reference]({{ site.baseurl }}/appliance/super-micro-computer-nodes-config.html). Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/super-micro-computer/parameters-nodes.config.html) with your specific network information. If you have  additional nodes, complete each node within the nodes.config file in the same way. Make sure that you do not edit any part of the nodes.config file except the sections explained in [Parameters of `nodes.config`](parameters-nodes.config). Deleting quotation marks, commas, or other parts of the code could cause setup to fail.



4. **The `set-config` command** Configure the nodes in the `nodes.config` file using the `set-config` command [(set-config)](set-config-command). Run `$ cat nodes.config | tscli cluster set-config`.

{: id="set-config-command"}

#### Set-config
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
#### Set-config error recovery
If the set-config fails with the following warning, restart the node-scout service by running `sudo systemctl restart node-scout`[(Restart node-scout service)](node-scout-restart).

{: id="node-scout-restart"}

#### Restart node-scout service
If you have this error, restart the node-scout.
```

Connecting to local node-scout WARNING: Detected 0 nodes, but found configuration for only 1 nodes.  
Continuing anyway. Error in cluster config validation: [] is not a valid link-local IPv6 address for node: 0e:86:e2:23:8f:76 Configuration failed.
Please retry or contact support.
```
Restart node-scout with the following command, then retry the [set-config command](set-config-command).

`$ sudo systemctl restart node-scout`

The command output should be the following:
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


5. **The `get-config` command** Confirm the node configuration with the `get-config` command [(Confirm node configuration)](confirm-node-config).

{: id=confirm-node-config}
#### Confirm node configuration
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
{: id="cluster-install"}
## Install Cluster
All nodes have now been configured. Next, you must install the cluster using the release tarball (est. time 1 hour). Make sure you can connect to ThoughtSpot remotely. If you can, you can run the installer on your local computer. If you have not received a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to access the release tarball.

{: id="run-installer"}
### 1. Run the Installer  
Copy the downloaded release tarball to /home/admin. Then you can run the `tscli cluster create` command and edit the output with your specific cluster information. For more information on this process, refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/super-micro-computer/cluster-create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/super-micro-computer/parameters-cluster-create.html).


The cluster installation will automatically reboot all the nodes after the install. Wait at least 15 minutes for the installation process to complete. The system is rebooting, which will take a few minutes. Log into any node to check the current cluster status, using the command `tscli cluster status`.

### 2. Check Cluster Health
Once the cluster is installed, check its status with the `tscli cluster status` command [(Cluster Status)](check-cluster-health).

{: id="check-cluster-health"}

#### Cluster Status
```
$ tscli cluster status

Cluster: RUNNING  
Cluster name    : thoughtspot-cluster  
Cluster id      : 1111X000000  
Number of nodes : 1  
Release         : 5.0  
Last update     = Thu Nov 15 20:25:29 2018

Database: READY  
Number of tables in READY state: 1732  
Number of tables in STALE state: 0  
Number of tables in INPROGRESS state: 0  
Number of tables in ERROR state: 0

Search Engine: READY  
Has pending tables. Pending time = 256393ms  
Number of tables in KNOWN_TABLES state: 1546  
Number of tables in READY state: 1546  
Number of tables in WILL_REMOVE state: 0  
Number of tables in BUILDING_AND_NOT_SERVING state: 0  
Number of tables in BUILDING_AND_SERVING state: 1546  
Number of tables in WILL_NOT_INDEX state: 2
```
### 3. Finalize Installation

Once the cluster status shows “Ready,” log in to the ThoughtSpot application following the steps below.

* Start a browser from a user’s laptop
* Enter https://IP-of-any-node/
* You may need to bypass the security warning: Click the **Advanced** button and then click **Proceed**
* Verify that the ThoughtSpot login page appears [(ThoughtSpot's login page)](ts-login)
* Enter *tsadmin* Login and *admin* password credentials and verify the user can log in successfully

{: id="ts-login"}
#### ThoughtSpot's login page

![ThoughtSpot's login page]({{ site.baseurl }}/images/ts-login-page.png "Log in to ThoughtSpot")

## References
Use these references for successful installation and administration of ThoughtSpot.

* [The `nodes.config` file]({{ site.baseurl }}/appliance/super-micro-computer/nodes.config/html)
* [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/super-micro-computer/parameters-nodes-config.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/super-micro-computer/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl}}/appliance/super-micro-computer/parameters-cluster-create.html)
* [ThoughtSpot Documentation](https://docs.thoughtspot.com)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
