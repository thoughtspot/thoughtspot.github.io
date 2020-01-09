---
title: [Install ThoughtSpot clusters in AWS]
last_updated: [1/8/2020]
summary: "Learn how to install ThoughtSpot clusters in AWS."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Prerequisites
Before you can install your ThoughtSpot clusters in AWS, complete these prerequisites.
1. **Review configuration options** Refer to [AWS configuration options]({{ site.baseurl }}/appliance/aws/configuration-options.html) for detailed instance specs.
2. **Create the instance** Refer to [Set up AWS for ThoughtSpot]({{ site.baseurl }}/appliance/aws/launch-an-instance.html) to create and launch your instance.
3. **Review required ports** Refer to [Network Policies]({{ site.baseurl }}/appliance/firewall-ports.html) to view the required ports for successful operation of ThoughtSpot.
4. **Configure nodes** Refer to [Configure ThoughtSpot nodes in AWS]({{ site.baseurl }}/appliance/aws/installing-aws.html) to configure your nodes.

{: id="cluster-install"}
## Install ThoughtSpot Software
Install the cluster using the release tarball. The estimated installation time is one hour. Follow the steps in this checklist.

<table>
  <tr>
    <td>&#10063;</td>
    <td><a href="aws-cluster-install#cluster-step-1">Step 1: Run the installer</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="aws-cluster-install#cluster-step-2">Step 2: Check cluster health</a></td>
  </tr>
  <tr>
    <td>&#10063;</td>
    <td><a href="aws-cluster-install#cluster-step-3">Step 3: Finalize installation</a></td>
  </tr>
</table>

Refer to your welcome letter from ThoughtSpot to find the link to download the release tarball. If you do not have a link, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to request access to the release tarball.

{: id="cluster-step-1"}
### Step 1: Run the installer
1. Copy the downloaded release tarball to `/home/admin` using the following command:
```
    $ scp -i key.pem <release-number>.tar.gz admin@<hostname>:/home/admin/<file-name>
```
Note the following parameters:
* `release-number` is the release number of your ThoughtSpot instance, such as 5.3, 6.0, and so on.
* `hostname` is your specific hostname.
* `file-name` is the name of the tarball file on your local computer.

2. Create the cluster.<br>
Run `tscli cluster create` to create the cluster.<br>
If you are using an s3 bucket for object storage, include the flag `--enable_cloud_storage=s3a`.
```
    $ tscli cluster create <release-number>.tar.gz --enable_cloud_storage=s3a
```

3. Edit the output with your specific cluster information.<br>
For more information on this process, refer to [Using the tscli cluster create command]({{ site.baseurl }}/appliance/hardware/cluster-create.html) and [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).

  The cluster installer automatically reboots all the nodes after a successful install. The `firewalld` service automatically turns on. At this time, the system is rebooting, which may take approximately 15 minutes.<br>
  Log into any node to check the current cluster status:
  ```
    $ tscli cluster status
  ```

{: id="cluster-step-2"}
### Step 2: Check cluster health
After the cluster installs, check its status using the `tscli cluster status` command.

Your output may look similar to the following:
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

{: id="cluster-step-3"}
### Step 3: Finalize installation

After the cluster status changes to `READY`, sign into ThoughtSpot on your browser.
Follow these steps:

1. Start a browser from your computer.
2. Enter your secure IP information on the address line.
    ```
    https://<VM-IP>
    ```
3. If you don't have a security certificate for ThoughtSpot, you must bypass the security warning:
  * Click **Advanced**
  * Click **Proceed**
4. The ThoughtSpot sign-in page appears.
5. In the [ThoughtSpot sign-in window]({{ site.baseurl }}#ts-login), enter admin credentials, and click **Sign in**.
  ThoughtSpot recommends changing the default admin password.

{: id="ts-login"}
{% include image.html file="ts-login-page.png" title="ThoughtSpot's sign-in window" alt="Sign into ThoughtSpot. Enter Username, Password, and click Sign in. You may select the Remember me option." caption="ThoughtSpot's sign-in window" %}


## Related information
Use these references for successful installation and administration of ThoughtSpot:

* [the nodes.config file]({{ site.baseurl }}/appliance/hardware/nodesconfig-example)
* [Parameters of the nodes.config file]({{ site.baseurl }}/appliance/hardware/parameters-nodesconfig.html)
* [Using the tscli cluster create command]({{ site.baseurl }}/appliance/hardware/cluster-create.html)
* [Parameters of the `cluster create` command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
* [Deployment Overview]({{ site.baseurl }}/appliance/welcome-intro.html)
* [Contact Support]({{ site.baseurl }}/appliance/contact.html)
