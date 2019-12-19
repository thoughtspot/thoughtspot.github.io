---
title: [Parameters of the nodes.config file]
last_updated: [12/19/2019]
summary: "Learn the parameters of the nodes.config file to install  your cloud or hardware appliance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="using-nodes.config"}
## Using the nodes.config file
As you install your appliance, you must configure the nodes.

1. Run the configuration command in your terminal.
```
    $ tscli cluster get-config |& tee nodes.config
```
2. Add network information for your nodes in the `nodes.config` file output, as demonstrated in [the nodes.config file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html) example. Fill in the areas specified in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html#parameters-nodes.config) with your specific network information.
3. If you have  additional nodes, complete each node within the nodes.config file in [the `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html) example.

Do not edit any part of the nodes.config file except the sections explained in [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html#parameters-nodes.config). If you delete quotation marks, commas, or other parts of the code, setup may fail.

See [Parameters of `nodes.config`]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html#parameters-nodes.config) to understand the parameters in the file.

{: id="parameters-nodes.config"}

### Parameters of the nodes.config file

**ClusterId**	The ID of your cluster, in the form yymmX0000, where yymm refers to the year and month you are creating the cluster, X functions as a separator, and 0000 is the number of the cluster, as in 0001 and 0002. For example, 1909X0001.

**ClusterName**	Name your cluster, using dashes instead of spaces. For example, TS-Company.

**DataNetmask**	The IP of the data netmask, in the form 000.000.000.000. For example, 255.255.252.0.

**DataGateway**	The IP of the data gateway, in the form 000.000.000.000. For example, 192.168.4.1.  

**IPMINetmask**	The IP of the Intelligent Platform Management Interface (IPMI) netmask, in the form 000.000.000.000. For example, 255.255.252.0.  

**IPMIGateway**	The IP of the Intelligent Platform Management Interface (IPMI) gateway, in the form 000.000.000.000. For example, 192.168.4.1.   

**Timezone**	The timezone you are setting up the hardware in, in the form Country/City. For example, America/Los_Angeles. To find your timezone and a city you can use to identify it, use [this timezone map](https://www.timeanddate.com/time/map/).

**NTPServers**	The address of your company’s Network Time Protocol (NTP) server. If your company does not have an NTP server, you can use one of ThoughtSpot’s, as listed in [the nodes.config]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html#autodiscovery-of-one-node-example) example under NTPServers. For example, 0.centos.pool.ntp.org.  

**DNS**	The address of your company’s Domain Name Server (DNS). For example, 192.168.2.200,8.8.8.8.  

**SearchDomains**	The domain of your company or organization, in the form example.company.com.   

**Hostname**	The name of the host server. For example, Thoughtspot-server1.   

**IPv4**	The main IP address, associated with DataNetmask and DataGateway, in the form 000.000.000.000. For example, 192.168.7.70.  

**IPMI IPv4**	A secondary IP address, associated with the IPMINetmask and IPMIGateway, in the form 000.000.000.000. For example, 192.168.5.70.

## References
* [Installing the Super Micro Computer]({{ site.baseurl }}/appliance/hardware/installing-the-smc.html)
* [Installing Amazon Web Services]({{ site.baseurl }}/appliance/hardware/installing-aws.html)
* [The `nodes.config` file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example.html)
