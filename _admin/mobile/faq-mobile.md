---
title: [Mobile FAQ]
summary: These are a few frequently asked questions about ThoughtSpot mobile.
last_updated: 11/15/2019
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
**Q**: Where are the cached data and login credentials stored on the mobile device?  
**A**: ThoughtSpot iOS app stores two kinds of data:
   - Authentication data: stored in an encrypted database called a keychain. For more information, refer to Apple's documentation on [Keychain Services](https://developer.apple.com/documentation/security/keychain_services){:target="_blank"}
   - Cached data for the home pinboard: saved as encrypted files on iOS. iOS handles the encryption and decryption of these files behind the scenes. We use the ‘default' protection level which means the files are inaccessible until the first time the user unlocks the device. For more information, refer to Apple's documentation on [Encrypting your App's Files](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/encrypting_your_app_s_files){:target="_blank"}

   {% include note.html content="Data saved by the ThoughtSpot mobile app cannot be accessed from any other app." %}

   From Apple's documentation on [iOS Security](https://www.apple.com/business/site/docs/iOS_Security_Guide.pdf){:target="_blank"}:
   "All third-party apps are “sandboxed,” so they are restricted from accessing files stored by other apps or from making changes to the device. This prevents apps from gathering or modifying information stored by other apps."

**Q**: Can I delete the mobile device's data and stop functionality like copy/paste or screenshots?  
**A**: Yes. You get these features if you deploy the app using management platforms like Airwatch, Mobile Iron, Microsoft Intune, etc.

**Q**: Can I restrict the apps showing up on the share sheet?  
**A**: Yes. Currently Facebook, Twitter and Weibo are removed from the share sheet.

**Q**: Which types of app data are being cached on the device?  
**A**: The app only caches the Home page data.
