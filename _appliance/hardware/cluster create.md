---
title: [Using the cluster create command]
last_updated: [10/30/2019]
summary: "Learn how to use the cluster create command to install your appliance."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{: id="using-cluster-create"}
## Using the cluster create command
To install your appliance, you must install the cluster using the release tarball (estimated time 1 hour).
1. **Download the release tarball** Download the release tarball from the download link sent by ThoughtSpot Support. If you have not received a link to download the release tarball, open a support ticket at [ThoughtSpot Support](https://support.thoughtspot.com) to access the release tarball.  
2.  **Copy the release tarball** In your Terminal (Apple) or using [Winscp](https://winscp.net/eng/index.php) (Windows application), copy the downloaded release tarball to /home/admin/ and run the cluster installer as shown below. To copy the release tarball, run the command `scp 0.0.tar.gz admin@hostname:/home/admin/`, where '0.0' is replaced by your release number and 'hostname' is your hostname. For example, `6.0.tar.gz admin@ThoughtSpot:/home/admin`.  

**Note** ThoughtSpot recommends that you start the session using [screen](https://linux.die.net/man/1/screen), so you do not lose your progress if you lose your connection at any point.
3. **Run the `cluster create` command** Run `tscli cluster create` in your terminal.
2. **Specify your installation information** Fill out the cluster name, cluster ID, email alert preferences and the IP’s of the nodes at the prompts specified in [Parameters of the cluster create command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html).
3. **Wait for output** You may need to wait about 15 seconds before you see any output. The installer is unpacking files and copying them over to the nodes, which can take a few seconds.

**Note:** Make sure that you do not edit any part of the installer file except the sections specified in [Parameters of the cluster create command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html). Deleting colons, commas, or other parts of the code could cause setup to fail.

Refer to [Parameters of the cluster create command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html) for further information. Below shows the output of the install command, `tscli cluster create`.

{: id="run-installer"}

### Run the Installer
```
$ tscli cluster create <release>   
EX: tscli cluster create 5.0.tar.gz

################################################################
#                                                              #
#               Welcome to ThoughtSpot installer               #
#                                                              #
################################################################

Enter a name for the cluster (alphanumeric characters only): thoughtspot-cluster  
Enter cluster ID: 1909X00001  
Enter IP addresses of all hosts in the cluster (space separated):
<mark192.168.7.70  
Enter email addresses for alerts (space separated, "later" to skip): prod-alerts@thoughtspot.com company@example.com

################################################################

  Unpacking release

################################################################

2018-09-30 23:02:20,504 Installing release on all machines  
2018-09-30 23:02:20,504 Pushing release to all hosts  
2018-09-30 23:02:20,504 Installing release on all hosts in parallel  
2018-09-30 23:02:20,504 Pushing release to localhost  
2018-09-30 23:02:20,969 Installing release on localhost  
2018-09-30 23:04:32,741 Release installer finished on localhost  
2018-09-30 23:04:32,741 Release installed on all hosts  
2018-09-30 23:04:32,742 Preparing for reboot

################################################################

  Rebooting cluster

################################################################

2018-09-30 23:04:32,843 Rebooting node. Run tscli cluster status after reboot to know the progress

Broadcast message from root@ip-192-168-7-70(Sun 2018-09-30 23:04:32 UTC):

The system is going down for reboot at Sun 2018-09-30 23:05:32 UTC!
```

## References
* [Installing the Super Micro Computer]({{ site.baseurl }}/appliance/hardware/installing%20the%20smc.html)
* [Installing Amazon Web Services]({{ site.baseurl }}/appliance/hardware/installing-aws.html)
* [Parameters of the cluster create command]({{ site.baseurl }}/appliance/hardware/parameters-cluster-create.html)
