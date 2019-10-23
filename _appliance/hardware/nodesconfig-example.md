---
title: [The nodes.config file]
last_updated: [10/23/2019]
summary: "Learn how to use the get.config command and the nodes.config file to install  your super micro computer."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="using-nodes.config"}
## Using the nodes.config file
As you install the Super Micro Computer appliance, you must configure the nodes.
1. Run `tscli cluster get-config |& tee nodes.config` in your terminal.
2. Add network information for the nodes, as shown in the [Autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example#autodiscovery-of-one-node-example). Fill in the areas specified in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) with your specific network information.
3. If you have  additional nodes, complete each node within the `nodes.config` file as shown in the [Autodiscovery of one node example]({{ site.baseurl }}/appliance/hardware/nodesconfig-example#autodiscovery-of-one-node-example). [Autodiscovery of one node]({{ site.baseurl }}/appliance/hardware/nodesconfig-example#node-autodiscovery) shows the `nodes.config` file before you fill in your specific information.

**Note:** Make sure that you do not edit any part of the nodes.config file except the sections explained in [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html). Deleting quotation marks, commas, or other parts of the code could cause setup to fail.

 See [Parameters of the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html) to understand the parameters in the file.

{: id="node-autodiscovery"}

### Autodiscovery of one node
```
$ tscli cluster get-config |& tee nodes.config  
{  
 "ClusterId": ""  
 "ClusterName": ""  
 "DataNetmask": ""  
 "DataGateway": "",  
 "IPMINetmask": "",  
 "IPMIGateway": "",  
 "Timezone": "",  
 "NTPServers": "",  
 "DNS": “”,  
  "SearchDomains": "",  
  "Nodes": {  	  
     "ac:1f:6b:8a:77:f6": {  
   "NodeId": "ac:1f:6b:8a:77:f6",  
  "Hostname": "",  
   "DataIface": {  
   "Name": "eth2",  
    "IPv4": "",  
  },  
  "IPMI": {  
    "IPv4": ""  
  }
  }
}
}
```
{: id="example-node-autodiscovery"}

### Autodiscovery of one node example
```
$ vim nodes.config    
{  
"ClusterId": "190905X0001",  
  "ClusterName": "TS-Company",  
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
