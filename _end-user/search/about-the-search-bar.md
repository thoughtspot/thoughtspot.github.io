---
title: [Search bar features]
last_updated: 4/2/2020
summary: "The search bar is designed to make it easy for you to identify your search terms. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
A lot of work has gone into making ThoughtSpot's search bar intuitive and easy to use. However, it still helps to know some details of how the search bar works.

## Boxed search phrases

The search bar shows boxes around each search phrase, so you can easily see where it begins and ends. Your search phrases still appear as text when you are typing, but whenever you click out of the search bar, they are boxed. [Measures]({{ site.baseurl }}/end-user/search/about-attributes-and-measures.html#measures) are green, [attributes]({{ site.baseurl }}/end-user/search/about-attributes-and-measures.html#attributes) are blue, and [filters]({{ site.baseurl }}/complex-search/about-filters.html#) are gray.

![Measures, attributes, and filters in the search bar]({{ site.baseurl }}/images/search-bar-basics.png "Measures, attributes, and filters in the search bar")

{% include note.html content="If any of your column names or values contain leading or trailing whitespaces, you must add a delimiter for the search bar to accept them. For example, if you have a column named <code> Sales </code>, with a space before and after the word Sales, you must enter it in the search bar as <code>' Sales '</code>, with single quotes surrounding the name. Otherwise, ThoughtSpot automatically removes the extra spaces and does not recognize the column name. Alternatively, you can ask your administrator to remove the spaces before and after column names and values." %}

## Editing a search

You can edit a search without affecting existing search results.  When you click a search phrase, it is highlighted, and ThoughtSpot displays other suggestions from which you can choose to replace the highlighted phrase. When you hover over a boxed phrase, you can see an **x**, which you can click to remove it from the search. You can insert a new phrase in the middle of a search, by clicking between phrases and entering the new phrase. You can even merge phrases without breaking the search. As you edit your search, ThoughtSpot continuously generates new results.

If you find yourself looking at a table or chart, but it doesn't seem to contain all the data you expect, try looking in the search bar for filters in gray boxes. If you remove all the filters, you will again see all the available data for that search.

## Quick select search results
When you type search phrases in the search bar, the first suggestion is automatically highlighted and you can use tab to navigate further. In addition, after you type a phrase or a letter and press **Enter**, the highlighted suggestion is automatically selected. Suggestions can be an attribute, measures, value, keyword, historic query, or exactly what you typed as the search phrase. You can also press **Enter** or **Tab** to select the first suggestion. If there are no suggestions, the suggestion list will not be displayed.
Historic suggestions always display on top with the first suggestion highlighted as default.

## Spell check

The search bar includes spell check. If you spell or type a term incorrectly, your suggestions will include the correct spelling of the term or keyword.

The spell check in the search bar also performs a metaphone check for similar sounding words on text data values.

## Dictionary synonyms

A dictionary of common word synonyms is bundled with ThoughtSpot. The dictionary contains synonyms for common terms that occur in data. For example, if you type in “gross”, and that word is not found, ThoughtSpot will consider it a synonym for “revenue”. We use the [WordNet](https://wordnet.princeton.edu/){: target="_blank"} library of terms, which takes word proximity into account, and weights words by similarity to the target term.

This frees you from having to know the exact term or column name used in a data source. You can still find the answer in many cases, if you type a word with the same meaning as a different word that occurs in the data.

## Search help

If you type an unrecognized search term, ThoughtSpot offers you tips on searching. The search help appears when you type a term that isn’t understood by ThoughtSpot and then press the Enter key.

 ![]({{ site.baseurl }}/images/search_help.png "Search help box")

## Related Answers

If you scroll down the **Search** page, the system provides **Related Answers** that you might find useful. These are quick searches you can load into the search bar by simply clicking the provided link.
