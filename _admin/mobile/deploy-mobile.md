---
title: [Deploy mobile app]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
Deploying the ThoughSpot mobile app to your users allows them to access their data and make decisions remotely from their Apple iOS device. For more information about features in the mobile app, refer to [ThoughtSpot mobile app]({{ site.baseurl }}/admin/mobile/use-mobile.html#).

## Mobile app requirements
- ThoughtSpot cluster running release 5.1 or later
- Apple iOS version 8.0 and later (iPad and iPhone only)

## Deployment options

There are two options for your users to download the ThoughtSpot mobile app:
- The App Store for iOS
- A mobile device or app management platform

### App Store for iOS
If your company doesn't use a mobile device management (MDM) or mobile app management (MAM) platform, your users can directly download the ThoughtSpot app from the App Store for iOS. If your company uses this method to deploy the app, the latest updates will be available to all users.

### Mobile device or app management platform
There are two ways to provide the app to your users with your MDM or MAM platform:

- **Option 1 [Recommended]: Link to the ThoughtSpot app in the App Store for iOS.**

    Almost all of the platforms allow you to add the App Store link, which makes the ThoughtSpot app available for download to your internal users. Use the link to the ThoughtSpot app in the App Store for iOS. ThoughtSpot recommends this method, because your users automatically get the latest updates.

    To add the ThoughtSpot app to your management platform, refer to the following platform-specific information:

    - [Workspace ONE (AirWatch)](https://docs.vmware.com/en/VMware-Workspace-ONE-UEM/1811/VMware-Workspace-ONE-UEM-Mobile-Application-Management/GUID-AWT-CONFIG-PUBLIC-APPS-WS1.html){:target="_blank"}
    - [MobileIron](http://mi.extendedhelp.mobileiron.com/53/all/en/desktop/App_Catalog.htm){:target="_blank"} (Scroll to “Adding an app from a public store”)
    - [XenMobile](https://docs.citrix.com/en-us/xenmobile/xenmobile-service/apps.html#add-a-public-app-store-app){:target="_blank"}
    - [Intune](https://docs.microsoft.com/en-us/intune/store-apps-ios){:target="_blank"}
    - [Cisco Meraki](https://documentation.meraki.com/SM/Apps_and_Software/Deploying_Store_Apps_for_iOS%2F%2FmacOS_and_Android){:target="_blank"}

- **Option 2: Provide a custom .ipa file of the ThoughtSpot app.**

    Management platforms also provide an option to upload a custom .ipa file. There are a couple of prerequisites for this:
    - Your company must have an Apple developer enterprise account.
    - They must re-sign the .ipa file which can be downloaded from this Egnyte link <Insert Egnyte Link>, and the instructions to re-sign the .ipa can be found here.

  To add the ThoughtSpot .ipa file to your management platform, refer to the following platform-specific information:
  - [Workspace ONE (AirWatch)](https://docs.vmware.com/en/VMware-Workspace-ONE-UEM/1811/VMware-Workspace-ONE-UEM-Mobile-Application-Management/GUID-AWT-CONFIG-INTERNAL-APPS-LOCAL.html#GUID-AWT-CONFIG-INTERNAL-APPS-LOCAL){:target="_blank"}
  - [MobileIron](http://mi.extendedhelp.mobileiron.com/53/all/en/desktop/App_Catalog.htm){:target="_blank"} (Scroll to “Adding an In-house app”)
  - [XenMobile](https://docs.citrix.com/en-us/citrix-endpoint-management/apps.html#add-an-enterprise-app){:target="_blank"}
  - [Intune](https://docs.microsoft.com/en-us/intune/lob-apps-ios){:target="_blank"}
  - [Cisco Meraki](https://documentation.meraki.com/SM/Apps_and_Software/Installing_Custom_Apps_on_iOS_and_Android_Devices){:target="_blank"}

#### AppConfig support

The ThoughtSpot mobile app conforms to the industry standard AppConfig community and version 1 of the app supports the following keys. You can add these keys while deploying through your MDM or MAM platform.

  |Key          |Format     |Description                   |
  |-----------------|------------|-----------------------------------|
  |ServerUrls   |https://thoughtspot.example.com,https://thoughtspot.finance-example.com| Displays a list of servers for users to choose from during sign-in. Separate the servers with commas.|
  |HomePinboardHelpText |Please drop an email to admin@example.com if you are facing difficulties in setting up your home pinboard.| The home pinboard set up help text can be customised using this key.|
