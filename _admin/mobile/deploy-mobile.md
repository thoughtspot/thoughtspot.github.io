---
title: [Deploy mobile app]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
## Requirements
- ThoughtSpot cluster running release 5.1 or later
- iOS version 8.0 and later (iPad and iPhone only)

## Download from the App Store for iOS
If your company doesn't use any mobile device management (MDM) or mobile app management (MAM) service, your users can directly download the **ThoughtSpot app for iOS** from the App Store for iOS. If your company uses this method to deploy the app, the latest updates will be available to all users.

## Deploy using MDM platforms
There are two additional ways to deploy the app using an MDM platform:

1. Add the App Store link into your MDM **[Recommended]**: Almost all the MDM platforms support adding the app store link, which will make the ThoughtSpot app readily available to download to the internal users. Use ThoughtSpot for iOS link<Insert Link> for the same. This is the recommended method as the users will automatically get the latest updates.

  To add the ThoughtSpot iOS app to your MDM Platform use the guidance below:

  - Workspace ONE (AirWatch)
  - MobileIron (Scroll to “Adding an app from a public store”)
  - XenMobile
  - Intune
  - Cisco Meraki
2. Custom .ipa file: MDM services also provide an option to upload a custom .ipa file. There are a couple of prerequisites for this:
  - Your company must have an Apple developer enterprise account.
  - They will need to re-sign the .ipa file which can be downloaded from this Egnyte link <Insert Egnyte Link>, and the instructions to re-sign the .ipa can be found here.

  To add the ThoughtSpot .ipa file to your MDM use the guidance below:
  - Workspace ONE (AirWatch)
  - MobileIron (Scroll to “Adding an In-house app”)
  - XenMobile
  - Intune
  - Cisco Meraki

  
