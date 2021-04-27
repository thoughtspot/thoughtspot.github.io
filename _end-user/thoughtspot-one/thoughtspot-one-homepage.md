---
title: [ThoughtSpot One home page]
summary: "Learn about the ThoughtSpot One home page, where you can search across your company's existing Answers and Pinboards and access trending objects, your recently viewed objects, and your favorites."
last_updated: 3/12/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
{% include content/ts-one-homepage.md %}

{: id="search-existing"}
## Search across existing Answers and Pinboards
{% include content/search-answers-description.md %}

To search across existing objects, toggle the **Search type** to **Search answers** by selecting the **Search answers** icon ![]({{ site.baseurl }}/images/icon-eureka-8px.png){: .inline} at the top right, next to the search bar. The home page displays the **Search answers** experience by default. You can select a specific Worksheet from the **Sources** dropdown to the left of the search bar, or search across all Worksheets that you have access to. Type your query into the search bar at the top of the screen. Select **Go** or click Enter on your keyboard. For example, search `sales in the last year bob` if you are looking for a particular Pinboard about sales that your coworker Bob made. This type of search does not require you to be extensively familiar with your company's data and how it is organized.

See [Search Answers]({{ site.baseurl }}/end-user/search/search-answers.html) for more information on searching across existing objects.

{: id="search-data"}
## Search your data
You can search directly on your data. Use this functionality if you would like to create your own Answers and Pinboards to answer questions about your data.

To search your data, either click on the **Search** tab from the top navigation bar, or toggle the **Search type** to **Search data to create an answer** by selecting the **Search data** icon ![]({{ site.baseurl }}/images/icon-sage-8px.png){: .inline} at the top right, next to the search bar. Select a data source to search on, and type your query into the search bar at the top of the screen. Click Enter on your keyboard. For example, search `sales last year store #103 bakery` to see last year's sales in the bakery department for store 103. This type of search requires you to be familiar with your company's data, to know which Worksheets contain data that interests you, and the names of the columns and values within that Worksheet.

See [Searching data]({{ site.baseurl }}/end-user/search/search-data.html) for more information on searching your data.

{: id="monitor"}
## Monitor important metrics
When you first view the ThoughtSpot home page, you can see a row of empty cards for your watchlist just below the Search bar. Use this watchlist to monitor metrics you reference often. For example, a VP of Sales might monitor *Number of new deals this month*, while a product manager might monitor *NPS score*.

To add metrics to your watchlist, follow these steps:

1. Click **Add metrics to your watchlist** from the end of the row of existing metrics you are monitoring.<br>
    You may need to use the right arrow button to get to the **Add metrics to your watchlist** option, if you already monitor several metrics.

2. The **Add metrics** window modal appears, showing the headlines on the Pinboard you most recently viewed. To find headlines from another Pinboard you would like to add, search for that Pinboard using the search bar near the top left of the **Add metrics** window.

4. Select a metric or multiple metrics, and click **Add metrics**.

Note that you can have up to 20 metrics on your watchlist at a time.

![Metrics watchlist gif]({{ site.baseurl }}/images/thoughtspot-one-carousel-metrics.gif "Metrics watchlist gif")

You can arrange the metric cards using each card's three-dot **more** ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} icon. You can replace or delete a metric, move it one spot to the left or right, make a card the first one in the row, or insert another card to the right or left of a specific card.

{: id="recently-viewed"}
## Recently viewed
By default, the ThoughtSpot home page shows you a list of the Answers and Pinboards you most recently viewed. To view Answers and Pinboards in the opposite order, click on **Last viewed**. Click on it again to return to the original view.

To see more objects, scroll down to the bottom of the page and select **Next**. ThoughtSpot displays 20 objects on each page.

This change does not persist across sessions. If you log out and log back in, the view returns to the default.

{: id="trending"}
## Trending Pinboards and Answers
The home page shows you the top 5 trending Pinboards and Answers among all users in your environment on the right panel of the screen. Easily view and interact with these trending objects by clicking on their name from the **Trending** panel.

{: id="filter"}
## Filter existing objects
You can filter the objects that display on the home page in the following ways:
- **By object type**: To see only one type of object, select **Answers** or **Pinboards** from the filter bar underneath the search bar. To see both Answers and Pinboards, select **All**.
- **By tag**: Users can tag their objects with meaningful labels, such as **Sales** or **C-suite**. Choose an existing tag from the tag dropdown in the filter bar. To see objects with any tag or no tag, select **All tags**.
- **By author**: To see objects created by a specific user, select an author from the authors dropdown in the filter bar. To see objects you created, select your username from the dropdown, right below **All authors**. To see objects any user created, select **All authors**.
- **By favorites**: To see only objects you favorited, click on the **My favorites** toggle on the filter bar. To see all objects, click on the **My favorites** toggle again.

To see more objects, scroll down to the bottom of the page and select **Next**. ThoughtSpot displays 20 objects on each page.

These changes do not persist across sessions. If you log out and log back in, the view returns to the default, where you see all object types, all tags, and all authors.

{: id="sort"}
## Sort existing objects
You can sort the objects that display on the home page in the following ways:
- **Alphabetically by author**: You can sort by author alphabetically, either ascending or descending. Click on **Author**, above the list of recently viewed objects. To see ascending order, select **Author** again.
- **By number of views**: You can sort by the number of views an object has, either ascending or descending. Click on **Views**, above the list of recently viewed objects. To see ascending order, select **Views** again.
- **By how recently you viewed an object**: You can sort by how recently you viewed an object, either ascending or descending. Click on **Last viewed**, above the list of recently viewed objects. To see ascending order, select **Last viewed** again.

To see more objects, scroll down to the bottom of the page and select **Next**. ThoughtSpot displays 20 objects on each page.

These changes do not persist across sessions. If you log out and log back in, the view returns to the default.

{: id="bulk-favorite"}
## Bulk mark objects as favorites
To bulk mark objects as favorites, select the empty boxes next to the object names, and select **Mark as favorite** near the top of the page, under the metric watchlist. You can also favorite each object on the page, by selecting the empty box next to the word **Name** at the top left of the screen, under the filter bar. Select **Mark as favorite**.

{: id="bulk-share"}
## Bulk share objects with other users and groups
To bulk share the objects that appear on your home page with other users and groups, follow these steps:

1. Select the empty boxes next to the names of the objects you would like to share.
    Alternatively, you can select each object on the page, by selecting the empty box next to the word **Name** at the top left of the screen, under the filter bar.

2. Select **Share** ![sharing icon]({{ site.baseurl }}/images/icon-share-10px.png "sharing-icon"){: .inline}, above the list of objects.

{% include content/share-answersandpinboards-specify-permissions.md %}
