---
title: [Configure ThoughtSpot Nodes on the SMC Appliance]
last_updated: [12/13/2019]
summary: "Configure your nodes before you can install your cluster(s)."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
After you connect the appliance, configure the nodes in your Mac or Windows terminal emulator. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-1">Step 1: SSH into your cluster</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-2">Step 2: Change to the <code>install</code> directory</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-3">Step 3: Get a template for network configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-4">Step 4: Prepare node configuration</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-5">Step 5: Configure the nodes</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="configure-nodes-smc#node-step-6">Step 6: Confirm node configuration</a></td>
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
3. If the output shows READY, and looks like the [cluster status output]({{ site.baseurl }}/appliance/hardware/smc-cluster-install.html#check-cluster-health) in the next article, your appliance is configured.
4. Skip to [Finalize installation]({{ site.baseurl }}/appliance/hardware/smc-cluster-install.html#step-3-finalize-installation).

If your status is not READY, continue with the installation process outlined below.

{: id="node-step-1"}
## Step 1: SSH into your cluster
SSH into your cluster with admin credentials.

1. Run the command `ssh admin@<cluster-IP>` or `ssh admin@<hostname>` on the command line.<br>
    Replace `clusterIP` or `hostname` with your specific network information.
```
    $ ssh admin@<clusterIP>
```
2. Enter your admin password when prompted.<br>
    Ask your network administrator if you don't know the password.

{: id="node-step-2"}
## Step 2: Change to the `install` directory
In your terminal, change directory to `/home/admin/install` by running the command `cd /home/admin/install`. If your `/install` subdirectory does not exist, you may have to use the `/home/admin` directory.

    $ cd /home/admin/install  

{: id="node-step-3"}
## Step 3: Get a template for network configuration
Run the `tscli cluster get-config` command to get a template for network configuration. Redirect it to the file `nodes.config`. You can find more information on this process in the [nodes.config file reference]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html).

    $ tscli cluster get-config |& tee nodes.config

{: id="node-step-4"}
## Step 4: Prepare node configuration
1. Add your specific network information for the nodes in the `nodes.config` file, as demonstrated in the [autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example).
2. Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.<br>
If you have additional nodes, complete each node within the nodes.config file in the same way.

Edit only the parts of the nodes.config file that are explicitly discussed in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). If you delete quotation marks, commas, or other parts of the code, it may cause setup to fail.

{: id="node-step-5"}
## Step 5: Configure the nodes
Configure the nodes in the `nodes.config` file using the `set-config` command.

Run `$ cat nodes.config | tscli cluster set-config` in your terminal.<br>
If the command returns an error, refer to [set-config error recovery]({{ site.baseurl }}smc-cluster-install.html#set-config-error-recovery).

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
## Step 6: Confirm node configuration
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

## Install the cluster
Next, [install your cluster.]({{ site.baseurl }}/appliance/hardware/smc-cluster-install.html)
