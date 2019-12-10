---
title: [Set up GCP for ThoughtSpot]
summary: Set up your GCP virtual machines.
last_updated: 12/9/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

After you determine your configuration options, set up your virtual machines
(VMs). ThoughtSpot will share the ThoughtSpot base image for booting the VMs and some other aspects of system setup with you on [the GCP platform](https://console.cloud.google.com).

## About the ThoughtSpot and Google Cloud Platform

ThoughtSpot uses a custom image to populate VMs on GCP. The base image is a Centos derived
image. Find the ThoughtSpot custom image under Custom Images in **Boot Disk Options** within your Google Compute Engine project.

Ask your ThoughtSpot contact for access to this image. We need the Google account/email ID of the individual who will be signed into your organization's GCP console. We will share ThoughtSpot's GCP project with them so they can use the contained boot disk image to create ThoughtSpot VMs.

## Overview

Before you can create a ThoughtSpot cluster, you must set up your VMs. Use the Google Compute Engine (GCP) platform to create and run VMs.

The following topics walk you through this process.

## Prerequisites

1. Ensure that your **Network Service Tier** on the [Google Cloud Console](https://console.cloud.google.com/) is set to **Premium** for the best performance of all your VMs.
2. A ThoughtSpot cluster requires 10 Gb/s bandwidth (or better) between any two nodes. You must ensure this *before* creating a new cluster.

## Setting up your Google Cloud Storage (GCS) bucket

If you are going to deploy your cluster using the GCS-storage option, you must set up that bucket before you set up your cluster. Contact [ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html#) to find out if your specific cluster size will benefit from the GCS storage option. If you are not using GCS, skip this step and [create an instance]({{ site.baseurl }}#create-an-instance).

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/).

2. Go to the Storage dashboard from the navigation bar on the side of your screen.

3. Click **CREATE BUCKET**.

4. Enter a name for your bucket, and click **CONTINUE**.

5. For location type, select **Region**.

6. Use the Location drop-down menu to select the region where you are going to set up your instance.

7. Click **CONTINUE**.

6. For default storage class, make sure **Standard** is selected.

9. Click **CONTINUE**.

7. For access control model, make sure **Set permissions uniformly at bucket-level** is selected.

10. Click **CONTINUE**.

8. Do not edit the advanced settings.<br>
Leave Encryption set to **Google-managed key** and do not set a retention policy.

12. Click **CREATE**.

When you create your instance, make sure you set Storage to **Read Write** access.

## Create an instance

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/).

2. Click **Select a Project** from the top bar.

    ![Click Select a Project.]({{ site.baseurl }}/images/gcp-selectproj.png "Click Select a Project.")

3. Under **Select From** pick THOUGHTSPOT.COM.

4. Select the **thoughtspot.com** project.

    ![Select the ThoughtSpot project.]({{ site.baseurl }}/images/gcp-selectthoughtspot.png "Select the ThoughtSpot project.")

2. Go to the Compute Engine dashboard, and select the associated ThoughtSpot project.

    ![]({{ site.baseurl }}/images/gcp-select-compute-engine-dash.png)

2. Select **VM instances** on the left panel and click **CREATE INSTANCE**.

3. Provide a name for the instance.

4. Select the region you are creating the instance in.

5. Select the number of CPUs you need.<br>
Refer to [ThoughtSpot GCP instance types]({{ site.baseurl }}/appliance/gcp/configuration-options.html#thoughtspot-gcp-instance-types) to determine the number of CPUs your cluster needs.

6. Click **Customize** to further configure CPUs and memory.

    ![]({{ site.baseurl }}/images/gcp-1-create-instance.png "Create GCP VM instance")

4. Under **Machine type**, specify your configuration information.
Refer to [ThoughtSpot GCP instance types]({{ site.baseurl }}/appliance/gcp/configuration-options.html#thoughtspot-gcp-instance-types).

    Your configuration may look something like the following, but with your specific information.

    | Setting       | Value                |
    |------------   | -------------------- |
    | Cores         | `64 vCPU`            |
    | Memory        | `416 GB`             |
    | Extend memory | Enabled (checkmark)  |
    | CPU platform  | `Automatic` (or select one of the preferred CPU platforms, `Intel Skylake` or `Intel Broadwell`, if available)|

    ![]({{ site.baseurl }}/images/gcp-3-config-machine.png "Configure CPU and memory")

    ![]({{ site.baseurl }}/images/gcp-3-preferred-CPUs.png "Preferred CPU platforms")

5. Configure the Boot disk.

    a. Scroll down to the **Boot disk** section and click **Change**.

      ![]({{ site.baseurl }}/images/gcp-4-change-boot-disk.png "Change boot disk")

    b. Click **Custom Images** from the options under **Boot disk**.

    c. Select your ThoughtSpot project under **Show images from**.

    d. Select one of the ThoughtSpot base images. The image at the top of the list is the latest one.

    e. Configure the boot disk as follows:

      | Setting         | Value                     |
      |------------     | --------------------      |
      | Image           | `ThoughtSpot`             |
      | Boot disk type  | `Standard persistent disk`|
      | Size (GB)       | `250`                     |

      ![]({{ site.baseurl }}/images/gcp-5-boot-disk-config-2018-01-11.png "Change boot disk")

      {% include note.html content="ThoughtSpot updates these base images with patches and enhancements. If more than one image is available, the latest one is always at the top of the list. Both will work, but we recommend using the latest image because it typically contains the latest security and maintenance patches."%}

    f. Click **Select** to save the boot disk configuration.

6.  Back on the main configuration page, click to expand the advanced configuration options
    (**Management, security, disks, networking, sole tenancy**).

    ![]({{ site.baseurl }}/images/gcp-6-save-boot-disk-expand-mgmt.png "Advanced disk config")

7. Under **Networking**, open required ports.

    These are the minimum ports you must open.

      | Port    | Protocol   | Service                       |
      | ------- | ---------- | ----------------------------  |
      | 22    | SSH          |  Secure Shell access          |
      | 80    | HTTP         |  Web access                   |
      | 443   | HTTPS        |  Secure Web access            |
      | 12345 | TCP          |  ODBC and JDBC drivers access |
      | 2201  | HTTP         |  Cluster Debugging            |
      | 2101  | HTTP         |  Node daemon Debugging        |
      | 4001  | HTTP         |  Data Cache Debugging         |


7.  Attach two 1 TB SSD drives for data storage. If you are using GCS, attach only 1 SSD drive, with 500 GB instead of 1 TB.

    a. Click the **Disks** tab, and click **Add new disk**.

      ![]({{ site.baseurl }}/images/gcp-7-advanced-disk-config.png "Advanced disk config")

      You can select or unselect the **Deletion rule**, depending on your preferences.

    b. Configure the following settings for each disk. Refer to [ThoughtSpot GCP instance types]({{ site.baseurl }}/appliance/gcp/configuration-options.html#thoughtspot-gcp-instance-types) to determine the size in GB when you have GCS.

      | Setting      | Value                  |
      |------------  | ---------------------- |
      | Type         | `SSD persistent disk`  |
      | Source type  | `Blank disk`           |
      | Size (GB)    | `1024`                 |

      Under **Deletion rule**, select either **keep disk** or **delete disk**, depending on your preference.

      ![]({{ site.baseurl }}/images/gcp-8-advanced-blank-disk-config.png "Advanced disk config")

      ![]({{ site.baseurl }}/images/gcp-10-additional-disks.png "Additional data storage disks")

8. (For use with GCS only) In the Identity and API access section, make sure Service account is set to **Compute Engine default service account**, and under Access scopes, select **Set access for each API**.

9. (For use with GCS only) Scroll down to the Storage setting, and set it to one of the following options:
   - To use Google Cloud Storage (GCS) as persistent storage for your instance, select **Read Write**.
   - To only use GCS to load data into ThoughtSpot, select **Read Only**.

10. Customize the network settings as needed. Use your default VPC settings, if you know them. Ask your network administrator if you do not know your default VPC settings.

11. Repeat these steps to create the necessary number of VMs for your cluster.

## Prepare the VMs

Before you can install your ThoughtSpot cluster, an administrator must log into
each VM through SSH as user "admin", and complete the following preparation steps:

1. Open a terminal application on your machine and ssh into one of your VMs.
```
    ssh admin@<VM-IP>
```
1. Run `sudo /usr/local/scaligent/bin/prepare_disks.sh`.
```
    $ sudo /usr/local/scaligent/bin/prepare_disks.sh
```
2. Configure the VM based on the site-survey.
4. Repeat this process for each of your VMs.

## Install cluster
To install your ThoughtSpot cluster, complete the installation process outlined in [Installing ThoughtSpot on GCP]({{ site.baseurl }}/appliance/gcp/installing-gcp.html).

## Related information

[Connecting to Google Cloud Storage buckets](https://cloud.google.com/compute/docs/disks/gcs-buckets){:target="_blank"}  
[Loading data from a GCP GCS bucket]({{site.baseurl }}/admin/loading/use-data-importer.html#loading-data-from-a-gcp-gcs-bucket)
