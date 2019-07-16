---
title: [Mobile FAQ]
keywords: tbd
last_updated: tbd
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
**Q**: What is the minimum version of ThoughtSpot cluster required to deploy the mobile app?  
**A**: 5.1 or later.

**Q**: Which mobile devices are supported?  
**A**: iOS device (iPhone/iPad) running iOS version 8.0 or later is required.

**Q**: Which features are available on the mobile app?  
**A**: Currently, the mobile app supports data viewing only. You can create pinboards using existing answers and use pinboard filters. Search is not available yet.

**Q**: Are mobile device or app management platforms supported for deployment?  
**A**: Yes. For details, please refer to [mobile device or app management platforms]({{ site.baseurl }}/admin/mobile/deploy-mobile.html#).

**Q**: Where are the cached data and login credentials stored on the mobile device?  
**A**: ThoughtSpot iOS app stores two kinds of data:
   - Authentication data: stored in an encrypted database called a keychain. For more information, refer to Apple's documentation on [Keychain Services](https://developer.apple.com/documentation/security/keychain_services){:target="_blank"}]
   - Cached data for the home pinboard: saved as encrypted files on iOS. iOS handles the encryption and decryption of these files behind the scenes. We use the ‘default' protection level which means the files are inaccessible until the first time the user unlocks the device. For more information, refer to Apple's documentation on [Encrypting your App's Files](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/encrypting_your_app_s_files){:target="_blank"}]

   {% include note.html content="Data saved by the ThoughtSpot mobile app cannot be accessed from any other app." %}

   From Apple's documentation on [iOS Security](https://www.apple.com/business/site/docs/iOS_Security_Guide.pdf){:target="_blank"}]:
   "All third-party apps are “sandboxed,” so they are restricted from accessing files stored by other apps or from making changes to the device. This prevents apps from gathering or modifying information stored by other apps."

**Q**: Can I delete the mobile device's data and stop functionality like copy/paste or screenshots?  
**A**: Yes. You get these features if you deploy the app using management platforms like Airwatch, Mobile Iron, Microsoft Intune, etc.

**Q**: Can I preconfigure the server URL in the app so that I don't have to enter the complex URLs manually?  
**A**: Yes, the ThoughtSpot mobile app conforms to the industry standard AppConfig using which you can use to preconfigure the ThoughtSpot iOS app with multiple server URLs. Refer to our docs[Add links] for more.

**Q**: Can I use VPN with the ThoughtSpot mobile app on my mobile device?  
**A**: If you can access your company's ThoughtSpot cluster on the browser on your mobile device you shouldn't have any problem connecting to the server in the mobile app.

**Q**: Can I restrict the apps showing up on the share sheet?  
**A**: Yes. Currently Facebook, Twitter and Weibo are removed from the share sheet.

**Q**: Which types of app data are being cached on the device?  
**A**: The app only caches the Home page data.

**Q**: When is the Search coming to the app?  
**A**: We plan to introduce search in the app by Q1 2020.

**Q**: I can't get my device on my company VPN. Can I still see what the ThoughtSpot app looks like and test it?  
**A**: Absolutely! You can use the following credentials to use our testing environment to try out the ThoughtSpot mobile app:  
       ServerURL: https://try.thoughtspot.com  
       Login: mobile_beta@thoughtspot.com  
       Password: mobile
