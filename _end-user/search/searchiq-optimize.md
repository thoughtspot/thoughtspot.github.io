---
title: ["Optimize SearchIQ"]
keywords: SearchIQ,answer,introduction,"search bar","natural language",speech,voice
last_updated: tbd
summary: "For SearchIQ to work well, you must optimize and train it."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
***SearchIQ is in Beta.***

SearchIQ is a search experience that understands a more natural, speech-like search language. Contrast it with the [original ThoughtSpot search]({{ site.baseurl }}/end-user/search/about-starting-a-new-search.html). For example, you can search for _`What was my top selling product last month?`_, instead of typing _`top 1 product by sales last month`_. You can also speak your search using the voice-to-text capability of your operating system.

There are a few ways for Administrators to optimize how SearchIQ interprets natural language questions. Taking the time to do this early leads to better results from SearchIQ, and to better adoption of the product by end users.

## Prerequisites

- SearchIQ is turned off by default; ask your administrator to enable it.
- You must be a member of a group that has the **Can use experimental features** permission.

## Guidelines for enabling SearchIQ

Keep the following in mind when you enable columns for SearchIQ:
- Enable no more than fifteen (15) columns for SearchIQ.
- Enable at most one (1) date column.
- Column names should not contain more than 3 words.
- Name the columns well, by optimizing for business users. For example, use _Opportunity Cost_ and avoid `opp_cst`.   
- Avoid indexing descriptive columns, ones that contain more than seven (7) words, or contain values with stop words, such as _is_, _are_, _the_, _what_, and so on). See the [Stop Words]({{ site.baseurl }}/reference/stop-words.html) reference for the full list of stop words.
- For columns that represent formulas with categorical values, set the **Indexing Type** to `PREFIX_AND_SUBSTRING`.


## How to enable columns in SearchIQ

To enable columns in a worksheet for SearchIQ, follow these steps:
1.  Click **Data** on top navigation bar.
2.  Click **Tables**.
3.  Click **Worksheets**.
4.  Select and open the worksheet you want to enable for SearchIQ.
5.  Scroll to the far right until you see the **SearchIQ Enabled** attribute.  
    Set it to _Yes_ for each column enabled for SearchIQ.   

    ![]({{ site.baseurl }}/images/worksheet-column-enable-searchiq.png "Enable SearchIQ on columns")

6.  Change the **Entity Category** for the columns you marked **SearchIQ Enabled**, from _default_ to one that accurately describes the column.  

    See [Set Entity Categories]({{ site.baseurl }}/admin/data-modeling/set-entity-category.html). The category options are <em>default</em>, <em>person</em>, <em>replace</em>, <em>time</em>, <em>money</em>, <em>product</em>, <em>zip_code</em>, <em>lat_long</em>, <em>company_org</em>, and <em>num_types</em>.

    ![]({{ site.baseurl }}/images/worksheet-column-entity-categories-searchiq.png "Specify entity categories for columns")

7.  Add **Synonyms** for all columns you marked **SearchIQ Enabled**, simply by typing them in the appropriate cell.  See [Add common synonyms]({{ site.baseurl }}/admin/data-modeling/change-visibility-synonym.md) for more information.  

    ![]({{ site.baseurl }}/images/worksheet-column-synonyms-searchiq.png "Specify synonyms")

8.  Change the **Index Type** to `DONT_INDEX` for columns when they must be excluded from indexing. We recommend excluding a column when it is descriptive in nature, =contains a large amount of text, has [stop words]({{ site.baseurl }}/reference/stop-words.html), or for a variety of similar reason.  See [Turn off indexing]({{ site.baseurl }}/admin/data-modeling/change-index.html).  

     ![]({{ site.baseurl }}/images/data-modeling-columns-indextype-dont-index.png "Don't index")

     This prevents SearchIQ from scanning through large amounts of text to understand what user asked. Note that searches on text fields that use the `contains` keyword still work.  

     ![]({{ site.baseurl }}/images/worksheet-column-do-not-index-searchiq.png "Change Index Type to DONT_INDEX")

9.  Change the **Index Type** for columns that represent formulas with categorical values to `PREFIX_AND_SUBSTRING`. See [Turn off indexing]({{ site.baseurl }}/admin/data-modeling/change-index.html).

     ![]({{ site.baseurl }}/images/data-modeling-columns-indextype-prefix-substring.png "Index type for formulas with categorical values")

     ![]({{ site.baseurl }}/images/worksheet-column-prefix-and-substring-searchiq.png "Change Index Type to PREFIX_AND_SUBSTRING")

10. Rename the columns to have names that are shorter (maximum three words), and easier for business users to understand.  

      ![]({{ site.baseurl }}/images/worksheet-column-rename.png "Rename a column")

11. Click **Save Changes**.

<!--
There are two main ways to optimize SearchIQ to understand natural language searches:

### Method 1: Data modeling settings



4. [Add experts to the data source]({{ site.baseurl }}/admin/data-modeling/add-expert.html) to enable the [Ask an Expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html) workflow, which gives users another path to getting an answer if they get stuck.

### Method 2: Language modeling

SearchIQ comes bundled with a set of pre-defined templates which help it understand natural language and serve the best result. However, you can also define your own templates for each data source.

There are a few ways to teach new language interpretations to SearchIQ:

1. Teach SearchIQ from the Data Tab:

   From the **Data** tab, click the three dot icon and choose **Teach**. This takes you to a screen where you can map searches to things in the data.
   E.g. You can map the phrase “best movie” to match the search “top movie_title sort by imdb_score”.

2. Teach SearchIQ using a saved SearchIQ answer:

   Click on a saved answer. Next, click on one of the dropdown phrases that shows how the search terms were interpreted, and click **Teach**. Then you can [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html).

3. Use new searches to teach SearchIQ:

   As a best practice, you should do at least 20-30 new natural language searches, and [Teach SearchIQ]({{ site.baseurl }}/end-user/search/teach-searchiq.html) if any of the answers are not what you expect.
-->
## Add Experts

While not completely necessary, we recommend that you add Experts to the datasource. These people in your organization know a great deal about the data, and can help you train SearchIQ. They are also the individuals who can assist business users in validating the answers they receive as a result of both regular Search and SearchIQ. You can learn more about that by reading about our [Ask an expert]({{ site.baseurl }}/end-user/search/ask-an-expert.html) feature.

To specify the experts for the datasource, follow these steps:

1. Click the ellipsis icon at the top right corner, and select **Manage Experts**.

   ![]({{ site.baseurl }}/images/manage-experts-searchiq.png "Manage Experts for SearchIQ")

2. In the **Manage Experts** window modal, you may see existing experts. Add more users and groups, and click **Add**.

   ![]({{ site.baseurl }}/images/add-experts.png "Add experts")

3. After you finish adding experts, click **Done**.

   ![]({{ site.baseurl }}/images/add-experts-done.png "Complete adding experts")

## How to train SearchIQ

You must train SearchIQ by performing at least 50 natural language searches. This teaches SearchIQ how to map common questions to relevant entities.

- For best results, use simple and short queries.
- Ask questions that contain only exact column names or their synonyms.
- Use exact values for filtering.
- Use keywords. See [Keywords]({{ site.baseurl }}/reference/keywords.html).
- Use stopwords. See [Stop Words]({{ site.baseurl }}/reference/stop-words.html).

When SearchIQ returns a satisfactory table or chart, remember to click the **Looks Good** button to provide the necessary feedback.

**Example 1: where are the best sales**

In this example, the query returned a very good answer, by inerpreting _where_ as _Store City_ and _best_ as _sort by Sales_. The chart **Looks Good**, and this is valuable feedback for training SearchIQ.

![]({{ site.baseurl }}/images/worksheet-searchiq-training-example1.png "Click Looks Good on a bar chart")

**Example 2: which state has the lowest volume**

In this example, the query returned a very good answer, by inerpreting _lowest_ as _sort by Quantity_ and _volume_ as _Quantity_. This chart also **Looks Good**, and provides valuable feedback for training SearchIQ.

![]({{ site.baseurl }}/images/worksheet-searchiq-training-example2.png "Click Looks Good on a map")

**Example 3: where should i build a new store**

This example was not as successful as the previous ones; it just returned a simple table with Store City and Store Name columns. The question is too sophisticated for SearchIQ, so we **Ask an expert** how to improve the answer.

![]({{ site.baseurl }}/images/worksheet-searchiq-training-example3.png "Click ask an expert")


## Mark the source as optimized for SearchIQ

After you finish training SearchIQ on your data source, navigate to the **SearchIQ** tab, scroll to the bottom left corner, and turn on the setting for **SearchIQ Optimized**.

![]({{ site.baseurl }}/images/worksheet-searchiq-optimized.png "Confirm datasource is optimized for SearchIQ")

## How does SearchIQ work for end Users

After you finish training SearchIQ on the Dataset, we recommend that you share with the users a list of the questions you used for training SearchIQ, the names of columns and their descriptions, common synonyms, and some guidance on how to ask a question.

Remember that users who experience SearchIQ see only the columns that SearchIQ knows.

## Related information

-   [About SearchIQ]({{ site.baseurl }}/end-user/search/about-searchiq.html)
-   [Use SearchIQ]({{ site.baseurl }}/end-user/search/use-searchiq.html)
-   [Teach SearchIQ your language]({{ site.baseurl }}/end-user/search/teach-searchiq.html)
