---
title: [Upgrading ThoughtSpot for RHEL and OEL]
last_updated: 3/23/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To upgrade your RHEL or OEL installation of ThoughtSpot, follow these steps:

1. Back up your ThoughtSpot cluster.
2. Pull the necessary security updates.
3. Download the release tarball to each cluster (for online clusters) or to your organization’s mirror repository (for offline clusters).
4. For offline clusters, run the `run_offline.sh` script from the Ansible tarball.
4.  Run the `tscli cluster update` command.
