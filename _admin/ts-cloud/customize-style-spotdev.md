---
title: [Customize styles for the embedded content]
last_updated: 3/3/2021
summary: "You can rebrand and customize the look and feel of the embedded ThoughtSpot content."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

If you want to match the look and feel of the embedded ThoughtSpot content with your core application, you can white-label and customize the embedded ThoughtSpot application UI and its styles. Using style customization, you can create a uniform ThoughtSpot experience that complies with your company’s branding guidelines.

You can rebrand the ThoughtSpot application interface components such as the logo, background color, and color scheme of the visualizations.

<div class="note">

When you rebrand the embedded ThoughtSpot content, the UI styles are reset for all users.

</div>

## Style components

You can customize the following ThoughtSpot UI style components:

-   [Application logo & favicon](#logo-change)

-   [Font style for charts and tables](#font-customize)

-   [Background color of the application](#custom-bg)

-   [Background color of the navigation panel](#nav-panel)

-   [Color palette for charts](#chart-palette)

-   [Footer text](#footer-text)

-   [Page title](#page-title)

## Access customization settings

To access style customization settings:

1.  Go to the SpotDev portal.

2.  Sign in with your ThoughtSpot user credentials.

3.  Under **Customization**, click **Styles**.

<div class="tip">

The style customization settings are also available in the ThoughtSpot **Admin** console.
For more information on setting UI styles from the **Admin** console, see [Style Customization]({{ site.baseurl }}/admin/ts-cloud/style-customization.html).

</div>

## Change application logo and favicon

To upload your application logos:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  To upload the default logo:

    1.  Click **Application Logo (Default)**.

    2.  Browse to your local directory and select logo image.

        ![Default Application Logo]({{ site.baseurl }}/images/style-applogo.png)

    Your icon image should be a square, and the recommended size is 140px by 140px.
    The accepted file formats are jpg, jpeg, and png.
    This logo will appear on the top left of the interface.

3.  To upload a wide logo:

    1.  Click the wide icon under **Application Logo (Wide)**.

    2.  Browse to your local directory and select logo image.

        ![Wide application logo]({{ site.baseurl }}/images/style-widelogo.png)

        The recommended size is 330px by 100px.
        The accepted file formats are jpg, jpeg, and png.
        This logo appears on the login screen.
        You may need to test a few versions to make sure it appears correctly.

## Customize fonts for visualizations

You can add and edit fonts to customize the appearance of your charts and tables.
You can set the default fonts of your system by customizing **Chart Visualization Fonts** and **Table Visualization Fonts**.

<div class="note">

Before you begin, make sure you have the WOFF files available for the fonts you want to use.

</div>

### Important points to note

-   To add a custom font, your font must be defined in a Web Open Font Format (`WOFF`) file.

-   Changes to chart and table defaults apply only to charts and features created *after* you configure a value.

-   If you change table fonts, older tables retain their previous fonts.

### Update fonts

To update fonts:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  To update fonts for charts, go to **Chart Visualization Fonts**, and select a chart label.

3.  To update fonts for tables, go to **Table Visualization Fonts**.

    By default, the font changes are applied to all values in the table cells.

4.  To add a custom font, click **+**.

    The system displays the **Custom Font** dialog.

5.  Click the **Custom Font** field.

    The system displays the file finder.

6.  Add the `WOFF` file you want.

    The file appears in the font dialog.

7.  Click **Confirm**.

8.  To update the font style:

    1.  Click the edit icon.

    2.  Modify the font color, weight, and style.

    3.  Click **Confirm**.

## Customize background color

You can customize the application background color to match your company’s color scheme.
The custom background color is applied to the embed visualizations, pinboards, and the ThoughtSpot application backgrounds.

To choose a background color for the ThoughtSpot application:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  Click the background color box under **Embedded Application Background**.

3.  Use the color menu to choose your new background color.

    You can also add a HEX color code.

## Customize navigation panel

If you have embedded the full ThoughtSpot application, you can customize the navigation panel color to match your company’s color scheme.
The custom background color is applied to the navigation panel of the ThoughtSpot application.

To choose a background color for the navigation panel:

1.  Go to **SpotDev** &gt; **Customizations** > **Styles**.

2.  Click the background color box under **Navigation Panel Color**.

3.  Use the color menu to choose your new background color.

    You can also add a HEX color code.

## Customize color palette for charts

You can define a set of primary and secondary colors for chart visualizations. The customized color palette is used for all visualizations, such as search answers and charts in your pinboards.

To change the color palette for charts:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  Click the background color box under **Chart Color Palettes**.

3.  Click the color you would like to change in the **primary** color palette, and use the color menu to choose your new color.

    You can also add a HEX color code.

    All of the colors in the primary color palette are used in a chart before any from the secondary palette are used.
    Therefore, the primary palette usually consists of primary colors.

4.  Click the color you would like to change in the **secondary** color palette, and use the color menu to choose your new color.
    You can also add a HEX color code.

    The colors from the secondary color palette are used after all of the colors have been exhausted from the primary palette.
    Therefore, the secondary palette usually consists of secondary colors.

### Disable color rotation

You can disable color rotation for single-color charts.
If you disable color rotation, ThoughtSpot generates single-color charts in the order of your color palette, left to right.
If you leave color rotation enabled, ThoughtSpot generates the color of single-color charts randomly.

## Customize footer text

The ThoughtSpot footer appears by default in the ThoughtSpot application. You can customize ThoughtSpot’s footer text to add a company-specific message.

To change the footer text:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  Click the text box under **Footer text**.

3.  Enter your new text message.

    Your new text message will automatically be displayed in the footer.

## Customize page title

To customize the page title displayed in the browser bar:

1.  Go to **SpotDev** > **Customizations** > **Styles**.

2.  Click the text box under **Page title**.

3.  Enter your new text message.

## Reset styles

When you customize styles, the changes take effect after you refresh the browser.

To revert your changes, use the **Reset** button that appears when you move your cursor to the right of the style setting option.
