Using style customization, you can create a uniform ThoughtSpot experience that
matches with your company's look and feel. To re-brand the interface, you can
use the style customization option found in the Admin Console in the ThoughtSpot
web application. It lets you change the logo, application background color,
chart color palettes, and footer text. For help with chart and table
visualization fonts, [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html).

This is especially useful if you're using the ThoughtSpot APIs for embedding
visualizations from ThoughtSpot in your own web portal or application. You can
make the visualizations match the look and feel of the portal or application in
which they are embedded. For more information on using the APIs, see the
ThoughtSpot Application Integration Guide.

## Change style customization

Make changes to the style of your ThoughtSpot interface in the **Style Customization** page. This option gives you defined, yet impactful capabilities for re-branding the interface, so having some understanding of typography and color schemes would be helpful.

To re-brand the interface:

1. Log in to ThoughtSpot from a browser.

2. Navigate to the Admin Console by clicking on the **Admin** tab from the top navigation bar. Select **Style Customization** from the side navigation bar that appears. To enable style customization, you must add `?customBrandingEnabled=true` to the end of your URL.

    ![Admin Console - Style Customization]({{ site.baseurl }}/images/style-customization-menu-cloud.png "Admin Console - Style Customization")

    In the **Style Customization** page, you can perform the following actions:

    -   [Upload application logos](#application-logos)
    -   [Set chart and table visualization fonts](#fonts)
    -   [Choose a background color]({#background-color)
    -   [Select chart color palettes](#chart-color)
    -   [Change the footer text](#footer-text)

{: id="application-logos"}
## Upload application logos
You can replace the ThoughtSpot logo, wherever it appears in the ThoughtSpot web application, with your own company logo. To upload a new logo, follow these steps:

1. Add `?customBrandingEnabled=true` to the end of your URL.

1. Click the default icon under **Application Logo (Default)** to browse for and select your own default logo.

     ![Default application logo]({{ site.baseurl }}/images/style-applogo.png "Application Logo (Default)")

    Your icon image should be a square, and the recommended size is 140px by 140px. The accepted file formats are jpg, jpeg, and png. This logo will appear on the top left of the interface.

2. Click the wide icon under **Application Logo (Wide)** to browse for and select your own wide logo.

     ![Wide application logo]({{ site.baseurl }}/images/style-widelogo.png "Application Logo (Wide)")

    The recommended size is 330px by 100px. The accepted file formats are jpg, jpeg, and png. This logo appears on the login screen. You may need to test a few versions to make sure it appears correctly.

3. To bring back the default logos, click the **Reset** button on the upper right hand side of the sections.

{: id="fonts"}
## Set chart and table visualization fonts

You can add and edit fonts to customize the appearance of your charts and tables. To customize fonts, follow these steps:

1. Add `?customBrandingEnabled=true` to the end of your URL.

1. Click the **Add New** button under **Chart Visualization Fonts**.

     ![Add new chart visualization font]({{ site.baseurl }}/images/style-chartfont.png "Add New Chart Visualization Font")

2. In the add new font menu, select the details for the font:
    1. Upload your custom font.

         ![]({{ site.baseurl }}/images/upload_custom_font.png "Upload custom font")

        Only WOFF font types are supported.

    2. Use the color menu to choose the font color.

         ![]({{ site.baseurl }}/images/custom_font_color.png "Choose font color")

    3. Choose the font weight and style from the drop down menus.

         ![]({{ site.baseurl }}/images/font_weight_and_style.png "Choose font weight and style")

        The font weight choices are normal, bold, and light. The style choices are normal, italic, and oblique.

    4. Click **Save**.
3. Click the **Edit Font** icon ![]({{ site.baseurl }}/images/edit_icon.png) to make changes to the font you just uploaded or to a pre-existing font.

     ![]({{ site.baseurl }}/images/edit_font.png "Edit Chart Visualization Font")

4. Make any changes to the details of the font in the edit menu and click **Save**.
5. Click the custom font drop down to choose your custom font.

     ![]({{ site.baseurl }}/images/choose_chart_custom_font.png "Choose custom chart font")

6. Click the chart label drop down to choose where you would like to apply your custom font.

     ![]({{ site.baseurl }}/images/choose_chart_font_label.png "Choose chart label")

7. The same steps can be followed to set your **Table Visualization Fonts**.

     ![]({{ site.baseurl }}/images/table_visualization_fonts.png "Set Table Visualization Fonts")

8. To bring back the default fonts, click the **Reset** button on the upper right hand side of the sections.

{: id="background-color"}
## Choose a background color
You can customize ThoughtSpot's background color to match your company's theme. The custom background color is in effect when using the API to embed visualizations and pinboards.

This feature is **only applicable** when embedding ThoughtSpot in an external web portal or application. To customize the background color, follow these steps:

1. Add `?customBrandingEnabled=true` to the end of your URL.

1. Click the background color box under **Application Background**.

     ![]({{ site.baseurl }}/images/application_background_color.png "Application Background menu")

2. Use the color menu to choose your new background color.

     ![]({{ site.baseurl }}/images/choose_application_background_color.png "Application Background Color")

3. To bring back the default color, click the **Reset** button on the upper right hand side of the section.

{: id="chart-color"}
## Select chart color palettes
You can change the color palettes that are used to create your charts. To customize the color palettes, follow these steps:

1. Add `?customBrandingEnabled=true` to the end of your URL.

2. Click the color you would like to change in the **primary** color palette, and use the color menu to choose your new color. You can also add a HEX color number directly.

     ![Change the primary color palette]({{ site.baseurl }}/images/stylecustomization-primary-color.png "Change the primary color palette")

    All of the colors in the primary color palette are used in a chart before any from the secondary palette are used. Therefore, the primary palette usually consists of primary colors.

3. Click the color you would like to change in the **secondary** color palette, and use the color menu to choose your new color. You can also add a HEX color number directly.

     ![Change the secondary color palette]({{ site.baseurl }}/images/stylecustomization-secondary-color.png "Change the secondary color palette")

    The colors from the secondary color palette are used after all of the colors have been exhausted from the primary palette. Therefore, the secondary palette usually consists of secondary colors.

4. To bring back the default color palettes, click the **Reset** button on the upper right hand side of the section.

### Disable color rotation
You can disable color rotation for single-color charts. If you disable color rotation, ThoughtSpot generates single-color charts in the order of your color palette, left to right. If you leave color rotation enabled, ThoughtSpot generates the color of single-color charts randomly.

{: id="footer-text"}
## Change the footer text
You can customize ThoughtSpot's footer text to add a company-specific message. To add new footer text, follow these steps:

1. Add `?customBrandingEnabled=true` to the end of your URL.

1. Click the text box under **Footer text**.
2. Enter your new text message.

     ![Edit the footer text]({{ site.baseurl }}/images/style-newfootertext.png "Edit the footer text")

    Your new text message will automatically be displayed in the footer.

     ![Footer text display]({{ site.baseurl }}/images/style-footertext.png "Footer text display")

3. To bring back the default footer text, click the **Reset** button on the upper right hand side of the section.
