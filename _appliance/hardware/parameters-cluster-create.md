---
title: [Parameters of the cluster create command]
last_updated: [10/30/2019]
summary: "Learn the parameters of the cluster create command."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{: id="using-cluster-create"}
## Using the cluster create command
To install your appliance, you must install the cluster.

1. **Copy the release tarball** Run `scp 0.0.tar.gz admin@hostname:/home/admin/`, filling in your specific information for the release number and the hostname. For example, `scp 6.0 admin@ThoughtSpot:/home/admin`.
1. **Run the `cluster create` command** Run `tscli cluster create` in your terminal.
2. **Fill out your specific information** Fill out the cluster name, cluster ID, email alert preferences and the IP’s of the nodes at the prompts specified in [Parameters of ThoughtSpot Installer]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html#parameters-cluster-create) below.

Refer to [Parameters of ThoughtSpot Installer]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html#parameters-cluster-create) for further information.
Refer to [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html) to see the expected output of the install command, `tscli cluster create`.

 **Note:** Make sure that you do not edit any part of the installer file except the sections specified in [Parameters of ThoughtSpot Installer]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html#parameters-cluster-create). Deleting colons, commas, or other parts of the code could cause setup to fail.

{: id="parameters-cluster-create"}

### Parameters of ThoughtSpot Installer

**Cluster Name** Name your cluster, using only letters and numbers. Instead of spaces, use dashes. For example, thoughtspot-cluster.

**Cluster ID** Enter the ID of your cluster, in the form yymmX0000, where yymm refers to the year and month you are setting up the cluster, X serves as a separator, and 0000 is the number of your cluster, as in 0001 and 0002.  For example, 1909X0001.

**Host IPs**	Enter the IP addresses of all cluster hosts, in the form 000.000.000.000. For example, 192.168.7.70. Use spaces instead of commas to separate multiple IP addresses.

**Email alerts**	Enter the email addresses you would like to receive alerts about this cluster, in the form company@example.com. The address prod-alerts@thoughtspot.com should remain, so that ThoughtSpot can be aware of the status of your cluster. Separate email addresses with a space.

## References
* [Installing the Super Micro Computer]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html)
* [Installing Amazon Web Services]({{ site.baseurl }}/appliance/hardware/installing-aws.html)
* [Using the `cluster create` command]({{ site.baseurl }}/appliance/hardware/cluster%20create.html)
