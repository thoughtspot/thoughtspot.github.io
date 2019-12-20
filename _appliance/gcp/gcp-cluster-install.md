---
title: [Install ThoughtSpot Clusters on GCP]
last_updated: [12/12/2019]
summary: "Learn how to install ThoughtSpot clusters on GCP."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Prerequisites
Before you can install your ThoughtSpot clusters on GCP, complete these prerequisites.
1. **Review configuration options** Refer to [GCP configuration options]({{ site.baseurl }}/appliance/gcp/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up GCP for ThoughtSpot]({{ site.baseurl }}/appliance/gcp/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.
4. **Configure nodes** Refer to [Configure ThoughtSpot Nodes on GCP]({{ site.baseurl }}/appliance/gcp/installing-gcp.html) to configure your nodes.

{: id="cluster-install"}
## Install ThoughtSpot Software
Install the cluster using the release tarball. The estimated installation time is one hour. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="gcp-cluster-install#cluster-step-1">Step 1: Run the installer</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="gcp-cluster-install#cluster-step-2">Step 2: Check cluster health</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="gcp-cluster-install#cluster-step-3">Step 3: Finalize installation</a></td>
  </tr>
</table>

Refer to your welcome letter from ThoughtSpot to find the link to download the release tarball. If you do not have a link, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to request access to the release tarball.

{: id="cluster-step-1"}
### Step 1: Run the installer
1. Copy the downloaded release tarball to `/home/admin` using the following command:
```
    $ scp <release-number>.tar.gz admin@<hostname>:/home/admin/<file-name>
```
Note the following parameters:
* `release-number` is the release number of your ThoughtSpot instance, such as 5.3, 6.0, and so on.
* `hostname` is your specific hostname.
* `file-name` is the name of the tarball file on your local computer.

2. Create the cluster.<br>
Run `tscli cluster create` to create the cluster.<br>
If you are using a gcs bucket for object storage, include the flag `--enable_cloud_storage=gcs`.
```
    $ tscli cluster create <release-number>.tar.gz --enable_cloud_storage=gcs
```

{% include content/install/cluster-steps1through3.md %}

## Related information
Use these references for successful installation and administration of ThoughtSpot:

* [the nodes.config file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the nodes.config file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the cluster create command]({{ site.baseurl }}/appliance/hardware/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [Deployment Overview]({{ site.baseurl }}/appliance/welcome-intro.html)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
