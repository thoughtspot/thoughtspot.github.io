---
title: [Set up GCP for ThoughtSpot]
keywords: GCP
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you've determined your configuration options, set up your virtual machines
(VMs). The ThoughtSpot base image for booting the VMs and some other aspects of
system setup will be shared with you on GCP by ThoughtSpot.

## About the ThoughtSpot and Google Cloud Platform

ThoughtSpot uses a custom image to populate VMs on GCP. The base image is a Centos derived
image, which will be available to you in your Google Compute Engine project for
Boot disk options under Custom Images.

Ask ThoughtSpot Support for access to this image. We will need the Google account/email ID of the individual who will be signed into your organization's GCP console. We will share ThoughtSpot's GCP project with them so they can use the contained boot disk image for creating ThoughtSpot VMs.

### Overview

Before you can create a ThoughtSpot cluster, you need to provision VMs.  We'll
do this on Google Compute Engine, the GCP platform for [creating and running VMs](https).

In a nutshell, the required configuration ThoughtSpot is:

- 64 vCPU
- 416 GB RAM
- 250 GB SSD for the boot disk, provisioned with a ThoughtSpot base image
- Two 1 TB SSDs for data

The following topics walk you through this process.

###  Create an instance

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/).

2. Go to the Compute Engine dashboard, and select the associated ThoughtSpot project.

    ![]({{ site.baseurl }}/images/gcp-select-compute-engine-dash.png)

2. Select **VM instances** on the left panel and click **CREATE INSTANCE**.

3. Provide a name for the image, choose a region, choose number of CPUs (e.g., 8 vCPUs for a cluster), and click **Customize** to further configure CPUs and memory.

    ![]({{ site.baseurl }}/images/gcp-1-create-instance.png "Create GCP VM instance")

4. For **Machine type** set the following configuration:

    | Setting       | Value                |
    |------------   | -------------------- |
    | Cores         | `64 vCPU`            |
    | Memory        | `416 GB`             |
    | Extend memory | Enabled (checkmark)  |
    | CPU platform  | `Automatic` (or select one of the preferred CPU platforms, `Intel Skylake` or `Intel Broadwell`, if available)|

    ![]({{ site.baseurl }}/images/gcp-3-config-machine.png "Configure CPU and memory")

    ![]({{ site.baseurl }}/images/gcp-3-preferred-CPUs.png "Preferred CPU platforms")

5. Configure the Boot disk.

    a. Scroll down to the find the **Boot disk** section and click **Change**.

      ![]({{ site.baseurl }}/images/gcp-4-change-boot-disk.png "Change boot disk")

    b. Click **Custom Images** on the tabs at the top, select a ThoughtSpot base image and configure the boot disk as follows:

      | Setting         | Value                     |
      |------------     | --------------------      |
      | Image           | `ThoughtSpot`             |
      | Boot disk type  | `Standard persistent disk`|
      | Size (GB)       | `200`                     |

      ![]({{ site.baseurl }}/images/gcp-5-boot-disk-config-2018-01-11.png "Change boot disk")

      {% include note.html content="ThoughtSpot updates these base images with patches and enhancements. If more than one image is available, the latest one is always at the top of the list. Both will work, but we recommend using the latest image because it typically contains the latest security and maintenance patches."%}

      c. Click **Select** to save the boot disk configuration.

6.  Back on the main configuration page, click to expand the advanced configuration options
    (**Management, security, disks, networking, sole tenancy**).

    ![]({{ site.baseurl }}/images/gcp-6-save-boot-disk-expand-mgmt.png "Advanced disk config")

7.  Attach two 1 TB SSD drives. These drives will be used for the data storage.

    a. Click the **Disks** tab, and click **Add new disk**.

      ![]({{ site.baseurl }}/images/gcp-7-advanced-disk-config.png "Advanced disk config")

    b. Configure the following settings for each disk.

      | Setting      | Value                  |
      |------------  | ---------------------- |
      | Type         | `SSD persistent disk`  |
      | Source type  | `Blank disk`           |
      | Size (GB)    | `1024`                 |

      ![]({{ site.baseurl }}/images/gcp-8-advanced-blank-disk-config.png "Advanced disk config")

      ![]({{ site.baseurl }}/images/gcp-10-additional-disks.png "Additional data storage disks")

8. Customize the network settings as needed, preferably use your default VPC settings.

9. Repeat these steps to create the necessary number of such VMs.

## Prepare the VMs (ThoughtSpot Systems Reliability Team)

{% include important.html content="This procedure is typically done by a
ThoughtSpot Systems Reliability Engineer (SRE). Please consult
with your ThoughtSpot Customer Service or Support Engineer on these steps." %}

Before we can install a ThoughtSpot cluster, an administrator must log in to
each VM via SSH as user "admin" and complete the following preparation steps:

1. Run `sudo /usr/local/scaligent/bin/prepare_disks.sh` on every machine.
2. Configure each VM based on the site-survey.

## Launch the cluster

Upload the TS tarball to one of the machines and proceed with the normal
cluster creation process, using [tscli cluster create]({{ site.baseurl }}/reference/tscli-command-ref.html#cluster).
