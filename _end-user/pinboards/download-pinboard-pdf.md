---
title: [Download a Liveboard as PDF]
last_updated: 11/05/2021
summary: "In ThoughtSpot, you can download the entire Liveboard in PDF format, so you can share it with people inside and outside your organization. You have options for adding branding, composing the report of the entire Liveboard or only some of its Visualizations, truncating tables, and many others."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

{% include content/liveboards-announcement.md %}

You can download a Liveboard in PDF format, without downloading each visualization separately. Follow these steps:

1. Click **Liveboards** on the top navigation bar.

     ![]({{ site.baseurl }}/images/click-pinboards.png "Liveboards")

2. Select a Liveboard from the list of Liveboards by clicking on its title.

3. In the open Liveboard, click the More menu ![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline}, and select **Download as PDF**.

     ![Download Liveboard as PDF]({{ site.baseurl }}/images/pinboard-download-pdf.png "Download a Liveboard as PDF")

4. In the **Download** window modal, you have two main _Format_ output options:
  * Select **[Liveboard](#pdf-pinboard)** to generate a PDF that combines several visual answers on the same page, just like they appear on the Liveboard.
  * Select  **[Visualizations](#pdf-visualizations)** to print each visualization on its own page of the PDF file.

   ![Choose PDF format: Liveboard or Visualizations]({{ site.baseurl }}/images/pinboard-formats.png "Choose PDF format: Liveboard or Visualizations")

{% include note.html content="If you do not see the option to download the Liveboard as a PDF, your company may have removed the Liveboard download option. If you would like to download Liveboards, contact your ThoughtSpot administrator." %}

{: id="pdf-pinboard"}
## Download PDF as Liveboard

The Liveboard mode produces a PDF file that looks very similar to the Liveboard inside ThoughtSpot. The highlights and insights appear at the top, and the rest of the Liveboard is on a rectangular grid, with natural page breaks.

Follow these steps to specify additional options:

1. Under **Layout**, select either the _Landscape_ or _Portrait_ page orientation.

2. Click the **More Settings** option.

   Under **Branding**, specify if you want to add a _Footer logo_, _Include page number_, or add _Footer text_.

3. Click **Download**.

![PDF export as Liveboard]({{ site.baseurl }}/images/pinboard-export.png "Export a Liveboard as PDF, either combined, or one visualization to a page")

{: id="pdf-visualizations"}
## Download PDF as Visualizations

When you select **Visualizations**, you now have a choice to print all, or some, of the visualizations in the Liveboard. The highlights and insights appear at the top, and the rest of the visualizations get their own page.

Follow these steps to specify additional options:

1. Under **Layout**, select either the _Landscape_ or _Portrait_ page orientation.

2. Click the **More Settings** option.

    Under **Content**, specify if you want the table visuals to end after filling the whole page by selecting the _Truncate Tables_ option.

3. Add **Branding** details through the _Footer logo_, _Include page number_, or _Footer text_ options.

4. In the list of **Visualizations**, select the visualizations you want in the PDF. Deselect the visualization you don't want.

8. Click **Download**.

![PDF export as Visualizations]({{ site.baseurl }}/images/pinboard-viz-export.png "Export a Liveboard to PDF as Visualizations")

{: id="pdf-examine"}
## Examine the PDF

After the download completes, examine your PDF.

Notice that the PDF produced in **Liveboard** mode combines the visuals on the page in the same manner as the original Liveboard. Contrast this with the PDF produced in **Visualizations** mode: this PDF combines the small adjacent indicator and KPI visuals at the top, and all other visuals and tables appear on their own page.

![Comparing Liveboard PDFs]({{ site.baseurl }}/images/pinboard-pdfs.png "Comparing Liveboard PDFs")

{% include content/date-column-download.md %}
