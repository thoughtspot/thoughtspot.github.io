For all (online and offline) deployments of ThoughtSpot on a customer-managed OS like RHEL or Amazon Linux 2, you will need:
- The **Release tarball**, which contains the ThoughtSpot software binaries (`tar.gz`) of the release version you are installing or upgrading; for example, ThoughtSpot Release 6.0.4.
- The **Ansible tarball**, which contains a set of scripts for installing OS packages, dependencies, the ThoughtSpot CLI (tscli), and configuring your cluster (preparing the disks).
You can obtain these files from the <a href="https://thoughtspot.egnyte.com/" target="_blank">ThoughtSpot secure file sharing system</a>. We sent this information to you in our Welcome email. [Contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) if you experience difficulties accessing these files.

For offline deployments specifically, you must install the OS packages required by ThoughtSpot, in addition to the two tarballs mentioned above.

Refer to [Packages installed with ThoughtSpot for RHEL]({{ site.baseurl }}/appliance/rhel/rhel-packages.html) for the RHEL packages and [Packages installed with ThoughtSpot for Amazon Linux 2]({{ site.baseurl }}/appliance/amazon-linux-2/al2-packages.html) for the Amazon Linux 2 packages. [Contact the ThoughtSpot Support team]({{ site.baseurl }}/appliance/contact.html), if you need help with these dependencies. 
