---
title: [Search bar features]
tags:
keywords: tbd
last_updated: tbd
summary: "The search bar is designed to make it easy for you to identify your search terms. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
A lot of work has gone into making ThoughtSpot's search bar intuitive and easy to use. However, it still helps to know some details of how the search bar works.

## Boxed search phrases

The search bar shows boxes around each search phrase, so you can easily see where it begins and ends. Your search phrases still appear as text when you are typing, but whenever you click out of the search bar, they are boxed. Search phrases have blue boxes, and [filters]({{ site.baseurl }}/complex-searches/about-filters.html#) have white boxes.

 ![]({{ site.baseurl }}/images/search_bar_with_phrases_boxed.png "Search bar with boxed phrases")

## Removing search phrases

When you click on a search phrase, it is highlighted, so you can easily replace it with one of the suggestions. When you hover over on a boxed phrase, you'll see an **x**, which you can click to remove it. When you delete a phrase, your search will automatically update.

If you find yourself looking at a table or chart, but it doesn't seem to contain all the data you expect, try looking in the search bar for white boxes (filters). If you remove all the filters, you will again see all the available data for that search.

## Spell check

The search bar includes spell check. If you spell or type a term incorrectly, your suggestions will include the correct spelling of the term or keyword.

The spell check in the search bar also performs a metaphone check for similar sounding words on text data values.

## Dictionary synonyms

A dictionary of common word synonyms is bundled with ThoughtSpot. The dictionary contains synonyms for common terms that occur in data. For example, if you type in “gross”, and that word is not found, ThoughtSpot will consider it a synonym for “revenue”. We use the WordNet library of terms, which takes word proximity into account, and weights words by similarity to the target term.

This frees you from having to know the exact term or column name used in a data source. You can still find the answer in many cases, if you type a word with the same meaning as a different word that occurs in the data.

## Search help

If you type an unrecognized search term, you will be offered tips on searching. The search help appears when you type a term that isn’t understood by ThoughtSpot and then press the Enter key.

 ![]({{ site.baseurl }}/images/search_help.png "Search help box")
