---
title: [Install mobile app]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Before you can use the mobile app, ask your IT group where you should download it, and which method of VPN (if any) you should use to access your ThoughtSpot cluster.

## Use VPN to access to your ThoughtSpot cluster (if necessary)

Use one of the following methods to securely access your cluster:

### Per-app VPN [Recommended]

If you are deploying the app through mobile device management (MDM) platform, you can utilise the powerful and very secure Per-APP VPN feature provided by these platforms out of the box. The following resources from MDM vendors help you configure their global and per-app VPN options:

- [Workspace ONE (AirWatch)](https://docs.vmware.com/en/VMware-Workspace-ONE-UEM/1811/VMware-Workspace-ONE-UEM-iOS-Device-Management/GUID-AWT-IOS-PROFILEVPN.html){:target="_blank"}
- [MobileIron](http://mi.extendedhelp.mobileiron.com/53/all/en/desktop/Per-App_VPN_Configuration.htm){:target="_blank"}
- [XenMobile (Citrix)](https://docs.citrix.com/en-us/citrix-endpoint-management/policies/vpn-policy.html){:target="_blank"}
- [Intune](https://docs.microsoft.com/en-us/intune/vpn-setting-configure-per-app){:target="_blank"}

### Standard VPN

If your company doesn't use an MDM or MAM platform to deploy the app, you can use standard VPN to securely sign into the ThoughtSpot mobile app.

- Launch and authenticate using the VPN app on the iOS device on which you want to use the ThoughtSpot app.

## Install and set up the app

To set up the ThoughtSpot mobile app, follow these steps on your iOS device:
1. Download the app from your company's approved app store.
2. Open the app.
3. Tap **Get started**.
4. In the Server URL field, enter the URL for your ThoughtSpot cluster and tap **Continue**.
5. Enter your User ID and Password for the cluster and tap **Log In**.

   The Home screen appears, showing three options for setting up your home pinboard:
   - Choose an existing Pinboard
   - Create a new Pinboard
   - Help me set my Home Pinboard
6. Tap the option you want to use, and follow the on-screen instructions to set up your Home Pinboard.

Have questions? Feel free to drop us a mail at mobile@thoughtspot.com
