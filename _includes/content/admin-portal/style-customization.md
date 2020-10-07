Using style customization, you can create a uniform ThoughtSpot experience that
matches with your company's look and feel. To re-brand the interface, you can
use the style customization option found in the Administration Portal in the ThoughtSpot
web application. It lets you change the logo, application background color,
chart color palettes, and footer text. For help with chart and table
visualization fonts, contact ThoughtSpot support.

This is especially useful if you're using the ThoughtSpot APIs for embedding
visualizations from ThoughtSpot in your own web portal or application. You can
make the visualizations match the look and feel of the portal or application in
which they are embedded. For more information on using the APIs, see the
ThoughtSpot Application Integration Guide.

Style customization is not enabled by default. To enable style customization, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html). The ThoughtSpot logo in the middle of the page is automatically removed when Style Customization is enabled.

## Change style customization

Make changes to the style of your ThoughtSpot interface in the **Style Customization** page. This option gives you defined, yet impactful capabilities for re-branding the interface, so having some understanding of typography and color schemes would be helpful.

To re-brand the interface:

1. Log in to ThoughtSpot from a browser.

2. If you are on release 6.2.1 and later, navigate to the Admin Portal by clicking on the **Admin** tab from the top navigation bar. Select **Style Customization** from the side navigation bar that appears. To enable style customization on release 6.2.1 or later, you must add `?customBrandingEnabled=true` to the end of your URL.

    ![Admin Portal - Style Customization]({{ site.baseurl }}/images/style-customization-menu.png "Admin Portal - Style Customization")

    If you are on release 6.2, navigate to the Style Customization page using this URL, replacing `<cluster_IP>` with your cluster information: `https://<cluster_IP>/#/admin/settings/style-customization`.

    If you are on release 6.1.1 or earlier, navigate to the Style Customization page by selecting **Admin** from the top navigation bar, then clicking **Style Customization**.

    If this page is not available, [contact ThoughtSpot Support]({{ site.baseurl }}/appliance/contact.html) to enable style customization.


    In the **Style Customization** page, you can perform the following actions:

    -   [Upload application logos]({{ site.baseurl }}/app-integrate/custom-branding/upload-application-logos.html#)
    -   [Set chart and table visualization fonts]({{ site.baseurl }}/app-integrate/custom-branding/set-chart-and-table-visualization-fonts.html#)
    -   [Choose a background color]({{ site.baseurl }}/app-integrate/custom-branding/choose-background-color.html#)
    -   [Select chart color palettes]({{ site.baseurl }}/app-integrate/custom-branding/select-chart-color-palettes.html#)
    -   [Change the footer text]({{ site.baseurl }}/app-integrate/custom-branding/change-the-footer-text.html#)
