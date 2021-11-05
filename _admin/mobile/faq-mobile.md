---
title: [Mobile FAQ]
summary: These are a few frequently asked questions about ThoughtSpot mobile.
last_updated: 11/04/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Caching data

You may wonder where does the mobile device store the cached data and login credentials.

The ThoughtSpot app stores two kinds of data:

- **Authentication data**  

  **Android**: Authentication data for Android is stored in an encrypted format in SharedPreferences that is only accessible to the ThoughtSpot App. The key used to encrypt this data is stored in the Android default keystore system. For more information, refer to Google's Android documentation on [SharedPreferences](https://developer.android.com/training/data-storage/shared-preferences){:target="_blank"}.

  **iOS**: Authentication data for iOS is stored in an encrypted database, called a keychain.
  For more information, refer to Apple's documentation on [Keychain Services](https://developer.apple.com/documentation/security/keychain_services){:target="_blank"}.

- **Cached data for the Home pinboard**

  **Android**: Home pinboard data is stored in an encrypted format in the app private storage on the Android device. Encryption is done using APIs provided by the Android Security Library. For more information, refer to Google's Android documentation on the [Android Security Library](https://developer.android.com/topic/security/data){:target="_blank"}.

  **iOS**: Home pinboard data is stored in the encrypted files storage on the iOS device. iOS encrypts and decrypts these files as needed. For more information, refer to Apple's documentation on [Encrypting your App's Files](https://developer.apple.com/documentation/uikit/protecting_the_user_s_privacy/encrypting_your_app_s_files){:target="_blank"}

  The ThoughtSpot app caches only the Home page data. By default, these files are inaccessible, until the user unlocks the device for the first time.

{% include note.html content="You cannot access the data saved by the ThoughtSpot mobile app from any other app." %}

## Deleting data saved on the mobile device, and restricting sharing

You may choose to deploy the ThoughtSpot app using management platforms like Airwatch, Mobile Iron, Microsoft Intune, and others. They give you the flexibility to delete the mobile device's data and stop functionality like copy and paste, and screenshots.

## Debugging SSL certificate issues

The mobile app may show a message that SSL certificates to the requested URL is invalid or expired. There are three possible solutions to this problem:

- Add a valid SSL certificate on the cluster.

- The customer may be using an internally-generated SSL certificate, which Android/iOS doesn’t recognize. Use an external certificate-issuing agency, like <a href="https://www.digicert.com/" target="_blank">digicert.com/</a>, to generate a valid SSL certificate.

- Convert from HTTPS to HTTP connections by running the following `tscli` command for the entire cluster:

  ```
  tscli ssl off
  ```
