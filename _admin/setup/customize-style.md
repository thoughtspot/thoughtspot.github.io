---
title: [Customize look and feel]
last_updated: 11/03/2020
summary: "You can brand the ThoughtSpot application for your company."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can customize the look and feel of the ThoughtSpot application for your company. Configuring these settings sets system-wide defaults for all your users.

Style customization is enabled by default. You can configure your cluster to disable this functionality.
Contact <a href="https://community.thoughtspot.com/customers/s/contactsupport" target="_blank">ThoughtSpot Support</a> about disabling this feature.

## Where to customize styles

A user must have administrative priveleges.

To access style customization,

1. Click **Admin** on main navigation.

2. Under **Settings**, select **Style Customization**.

## General guidelines for customization

Your changes take effect either immediately, or after you refresh the browser. You can revert your changes by using the **Reset** button that appears when you move your cursor moves to the right of the setting.

![]({{ site.baseurl }}/images/custom-style-reset.png)

You can configure these style customizations:

<dl>
  <dlentry>
    <dt>Application Logo (Default) &amp; Favicon</dt>
    <dd>Sets a default application and favicon logo. This should be 140 pixels square.</dd>
  </dlentry>
  <dlentry>
    <dt>Application Logo (Wide)</dt>
    <dd>This logo should be 440 x 100 pixels.</dd>
  </dlentry>
  <dlentry>
    <dt>Chart Visualization Fonts</dt>
    <dd>Set a font for chart labels. You can specify any Web Open Font Format (<code>WOFF</code>) file.</dd>
  </dlentry>
  <dlentry>
    <dt>Table Visualization Fonts</dt>
    <dd>Set a font for table labels. You can specify any Web Open Font Format (<code>WOFF</code>) file.</dd>
  </dlentry>
  <dlentry>
    <dt>Embedded Application Background</dt>
    <dd>Set the background for an embedded ThoughtSpot instance. This is only used if you are embedding ThoughtSpot in another application.</dd>
  </dlentry>
  <dlentry>
    <dt>Chart Color Palettes</dt>
    <dd>Set the default palette for all charts. To set a value, however over a color value and enter a HEX value or select one from the chart. Individual users can still customize their own chart colors. They can use the <strong>Reset colors</strong> option on a chart to clear their changes. </dd>
  </dlentry>
  <dlentry>
    <dt>Footer text</dt>
    <dd>Define a footer to appear with the ThoughtSpot application.</dd>
  </dlentry>
  <dlentry>
    <dt>Page title</dt>
    <dd>Sets the title for the browser tab.</dd>
  </dlentry>
</dl>

## How to specify fonts

You can set your systems default fonts by specifying either or both of the **Chart Visualization Fonts** and **Table Visualization Fonts** values. To set this values, your font must be defined in a Web Open Font Format (`WOFF`) file.

Changes to chart and table defaults apply only to charts and features created _after_ you configure a value. If you change table fonts, older tables retain their previous fonts. Some settings can be overridden on a per-object level. Users cannot configure their own defaults.

To set a new font:

![]({{ site.baseurl }}/images/custom-style-font.png)

1. Make sure you have a WOFF file available for your font.

2. Select the label you want to change.

3. Click the **+** button.

   The system displays the **Custom Font** dialog.

4. Click the **Custom Font** field.

   The system displays the file finder.

5. Add the `WOFF` file you want.

   The file appears in the font dialog

6. Click **Save** to change the font.

## How to specify the behavior or clickable links in data

There is a system-wide setting which determines what happens when a user clicks on a link within the data. When your data includes URLs, they display as clickable links in ThoughtSpot tables. By default, clicking on a link opens the URL in a separate tab. But there is a system-wide setting that can be changed to open the links within the context of where they appear.

Consider how the links open, by type:

<dl>
  <dlentry>
    <dt>Link in search result table in ThoughtSpot</dt>
    <dd>Same browser tab as ThoughtSpot application</dd></dlentry>
  <dlentry>
    <dt>Link in table embedded in an &lt;iframe&gt;</dt>
    <dd>Same &lt;iframe&gt; that contains the table</dd></dlentry>
  <dlentry>
    <dt>Link in full ThoughtSpot application embedded in an &lt;iframe&gt;</dt>
    <dd>Same &lt;iframe&gt; that contains the application</dd></dlentry>
</dl>
