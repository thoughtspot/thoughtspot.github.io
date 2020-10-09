---
title: [Upload application logos]

last_updated: 2/4/2020
summary: "You can replace the ThoughtSpot logo, wherever it appears in the ThoughtSpot web application, with your own company logo."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
To upload your own default and wide application logos:

1. If you are on release 6.2.1 and later, navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Style Customization** from the side navigation bar that appears. To enable style customization on release 6.2.1 or later, you must add `?customBrandingEnabled=true` to the end of your URL.

    If you are on release 6.2, navigate to the Style Customization page using this URL, replacing `<cluster_IP>` with your cluster information: `https://<cluster_IP>/#/admin/settings/style-customization`.

    If you are on release 6.1.1 or earlier, navigate to the Style Customization page by selecting **Admin** from the top navigation bar, then clicking **Style Customization**.

    If this page is not available, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to enable style customization.
    

1. Click the default icon under **Application Logo (Default)** to browse for and select your own default logo.

     ![Default application logo]({{ site.baseurl }}/images/style-applogo.png "Application Logo (Default)")

    Your icon image should be a square, and the recommended size is 140px by 140px. The accepted file formats are jpg, jpeg, and png. This logo will appear on the top left of the interface.

2. Click the wide icon under **Application Logo (Wide)** to browse for and select your own wide logo.

     ![Wide application logo]({{ site.baseurl }}/images/style-widelogo.png "Application Logo (Wide)")

    The recommended size is 330px by 100px. The accepted file formats are jpg, jpeg, and png. This logo appears on the login screen. You may need to test a few versions to make sure it appears correctly.

3. Click the **Reset** button on the upper right hand side of the sections if you would like to bring back the default logos.
