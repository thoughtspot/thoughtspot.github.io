---
title: [Create Worksheet synonyms for search on Answers]
summary: "Create synonyms for column names in your Worksheets to support search on existing Answers and Pinboards."
last_updated: 4/5/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
As an analyst, you want to create the best search experience possible for your users. You can enhance the search experience of the content built on Worksheets you own or maintain by adding common search terms to your Worksheet glossary. For example, your users may be searching for information about `products`, but the column name may be `product full name`. You can make `products` a synonym of `product full name`, so users can easily find this information. The **Search terms** section on each Worksheet lists the most common search terms for the Worksheet that result in no or few matches in the system, so you can map them to the correct column name. This feature is in <span class="label label-beta">Beta</span> and off by default; [contact ThoughtSpot Support]({{ site.baseurl }}/admin/misc/contact.html) to enable it. This feature depends on Mixpanel tracking.

To add common search terms with no matches to your Worksheet glossary, follow these steps:

1. Navigate to the Worksheet you would like to edit. You must have **edit** access for the Worksheet to add synonyms.

2. Select **Search Terms** from the navigation bar under the Worksheet name.

3. If users have not had any problems searching for or creating their own Answers and Pinboards built on this Worksheet, the system displays the message "No vocabulary issues found." If users are having trouble, the system displays a list of search terms and encourages you to build the Worksheet's glossary.

4. On the **Select a search term** pane on the left side of the screen, you see a list of common search terms with no or few matches. Users often search for these terms, but do not click on anything, or the search does not generate any results.

5. Select a search term to add to your glossary. In this example, we add search terms to the *Campaigns* Worksheet glossary. We notice that several users are searching the word `sales`, and not finding any results. We select `sales`.

6. After you select a search term, you can see the queries involving this term on the panel on the right edge of the screen.

6. Select the matching column in the Worksheet's data. In this case, the matching column is `Booked Amount ACV`.

    ![]({{ site.baseurl }}/images/eureka-synonym-workflow.png "Select the matching column")

7. Optionally add any additional synonyms for that column in the **Synonym or phrase** text box.

8. In the **add or edit the column description** text box, optionally enter a column description, to help users understand the data better.

9. Select **Resolve & Proceed**.

10. You can delete any search term suggestions that you do not want to create synonyms for. Select the **x** that appears when you hover over the search them.
