---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
# About Style Customization

Style Customization allows you to change the overall style of your ThoughtSpot interface. This allows you to create a uniform ThoughtSpot experience that matches with your company's look and feel.

This section on Style Customization is the same as appears in the Application Integration Guide, with some notable additions.

-   This Internal and POC Guide shows the command to use to enable the feature.
-   It also includes information on how to customize chart and table visualization fonts.

Font customization is hidden behind an additional flag, to protect customers from using fonts that don't work well. It is better for customers to work with us when changing the font settings.

To re-brand the interface, you can use the style customization option found on the Admin section in the ThoughtSpot web application. It lets you change the logo, application background color, chart and table visualization fonts,chart color palettes, and footer text.

This is especially useful if you're using the ThoughtSpot APIs for embedding visualizations from ThoughtSpot in your own web portal or application. You can make the visualizations match the look and feel of the portal or application in which they are embedded. For more information on using the APIs, see the ThoughtSpot Application Integration Guide.

Style customization is a premium feature, that can be enabled at additional cost. To enable style customization, contact ThoughtSpot Support.

Once style customization has been purchased, your ThoughtSpot contact can issue these commands to enable style customization:

Log in to the terminal and issue:

```
tscli --adv service add-javaopt tomcat.tomcat D orion.customBrandingEnabled true
```

If you also want to enable font customization, issue this command as well:

```
tscli --adv service add-javaopt tomcat.tomcat D orion.customBrandingFontCustomizationEnabled true
```

-   **[Perform Style Customization](../../application_integration/custom_branding/perform_style_customization.html)**  
Make changes to the style of your ThoughtSpot interface in the **Style Customization** page. This option gives you defined, yet impactful capabilities for re-branding the interface, so having some understanding of typography and color schemes would be helpful.
