---
title: [ThoughtSpot One home page]
summary: "Learn about the ThoughtSpot One home page, where you can search across your company's existing Answers and Pinboards and access trending objects, your recently viewed objects, and your favorites."
last_updated: 3/12/2021
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

When you log into ThoughtSpot, you see the ThoughtSpot home page. It is accessible when you select **Home** or the ThoughtSpot logo from the top navigation bar.

The ThoughtSpot home page allows you to access all your essential actions as a business user. From the home page, you can:

- [Search across existing Answers and Pinboards](#search-existing)
- [Search your data to create new Answers and Pinboards](#search-data)
- [Access and create shortcuts for your most-used Answers and Pinboards](#quick-links)
- [View objects you viewed recently](#recently-viewed)
- [View trending Pinboards and Answers](#trending)
- [Filter existing objects by favorite, author, tag, or type of object](#filter)
- [Sort existing objects by author, views, or most recently viewed](#sort)
- [Bulk mark objects as favorites](#bulk-favorite)
- [Bulk share objects with other users and groups](#bulk-share)

![ThoughtSpot One home page]({{ site.baseurl }}/images/thoughtspot-one-homepage.png "ThoughtSpot One home page")

{% include note.html content="ThoughtSpot One may be off in your environment. If ThoughtSpot One is off, you do not have the option to search across existing Answers and Pinboards, and  you do not have the home page described in this article. To enable ThoughtSpot One, contact ThoughtSpot Support." %}

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

{: id="quick-links"}
## Access and create quick links to your most-used Answers and Pinboards
When you first view the ThoughtSpot home page, you can see a row of empty cards for quick links just below the Search bar. Use these cards to create shortcuts for Answers or Pinboards you reference often.

To create shortcut cards, follow these steps:

1. Click **Add New Card** from the end of the row of existing shortcuts.<br>
    You may need to use the right arrow button to get to the **Add New Card** option, if you already have several shortcuts.

2. The **Add a new card** window modal appears, filtered to show your favorites.

3. To choose from all Answers and Pinboards you have access to, select **All** next to **My Favorites**.

4. Select an object, and click **Add**. The modal only shows 9 objects per page. To find an object not on the first page, scroll down and select **Next** at the bottom right of the modal.

Note that you can only add one object shortcut at a time. You can have up to 20 Answer and Pinboard shortcuts on the ThoughtSpot home page.

![Shortcuts gif]({{ site.baseurl }}/images/thoughtspot-one-home-page-shortcuts.gif "Shortcuts gif")

You can arrange the shortcut cards using each card's three-dot **more** ![]({{ site.baseurl }}/images/icon-more-10px.png){: .inline} icon. You can replace or delete a shortcut, move it one spot to the left or right, make a card the first one in the row, or insert another card to the right or left of a specific card.

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
To bulk mark objects as favorites, select the empty boxes next to the object names, and select **Mark as favorite** near the top of the page, under the row of shortcuts. You can also favorite each object on the page, by selecting the empty box next to the word **Name** at the top left of the screen, under the filter bar. Select **Mark as favorite**.

{: id="bulk-share"}
## Bulk share objects with other users and groups
To bulk share the objects that appear on your home page with other users and groups, follow these steps:

1. Select the empty boxes next to the names of the objects you would like to share.
    Alternatively, you can select each object on the page, by selecting the empty box next to the word **Name** at the top left of the screen, under the filter bar.

2. Select **Share** ![sharing icon]({{ site.baseurl }}/images/icon-share copy-20px.png "sharing-icon"){: .inline}, above the list of objects.

{% include content/share-answersandpinboards-specify-permissions.md %}
