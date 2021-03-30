---
title: [Keyword reference]
summary: Use keywords to help define a search.
toc: true
last_updated: 11/19/2019
redirect_from:
- /6.3.0/reference/keywords.html
- /6.3.0.CU1/reference/keywords.html
- /7.0.0.mar.sw/reference/keywords.html
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use keywords when asking a question to help define your search. This
reference lists the various keywords.

### Keywords in Other Languages

Currently, we offer the following keyword translations.

<!-- | [日本語]({{ site.baseurl }}/reference/keywords-ja-JP.html) | [Deutsche]({{ site.baseurl }}/reference/keywords-de-DE.html) |

 | **[日本語]({{ site.baseurl }}/reference/keywords-ja-JP.html)** |   | **[中文 (简体)]({{ site.baseurl }}/reference/keywords-translate/keywords-zh-CN.html)** | **[Deutsche]({{ site.baseurl }}/reference/keywords-de-DE.html)** | **[Español (latín)]({{ site.baseurl }}/reference/keywords-es-US.html)** | **[Français (Canada)]({{ site.baseurl }}/reference/keywords-fr-CA.html)** | **[Français (France)]({{ site.baseurl }}/reference/keywords-fr-FR.html)** | **[Português (Brasil)]({{ site.baseurl }}/reference/keywords-pt-BR.html)** | -->

<table style="width: 70%; border-spacing: 2px;">
  <tr>
    <td nowrap><a href="{{ site.baseurl }}/reference/keywords-ja-JP.html">日本語</a></td>
    <td nowrap><a href="{{ site.baseurl }}/reference/keywords-zh-CN.html">中文 (简体)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-de-DE.html">Deutsch</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-es-US.html">Español (Latinoamérica)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-es-ES.html">Español (España)</a></td>
  </tr>
  <tr>
    <td><a href="{{ site.baseurl }}/reference/keywords-fr-CA.html">Français (Canada)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-fr-FR.html">Français (France)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-pt-BR.html">Português (Brasil)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-pt-PT.html">Português (Portugal)</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-it-IT.html">Italiano</a></td>
  </tr>
  <tr>
    <td><a href="{{ site.baseurl }}/reference/keywords-da-DK.html">Dansk</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-fi-FI.html">Suomi</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-sv-SE.html">Svenska</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-nb-NO.html">Norsk</a></td>
    <td><a href="{{ site.baseurl }}/reference/keywords-nl-NL.html">Nederland</a></td>
  </tr>
</table>

Also, see the topic on how to set [locale preferences in your user profile]({{ site.baseurl }}/end-user/introduction/about-user.html) to control language, date, and number formats on the ThoughtSpot UI.


## General

{% include content/keywords-general.md %}

## Date

{% include content/keywords-date.md %}

## Time

{% include content/keywords-time.md %}

## Text

{% include content/keywords-text.md %}

Starting with release 6.3, when you use more than one `begins with` or `ends with` keyword in a search or formula on the same column, ThoughtSpot returns your results using an `OR` condition, instead of an `AND` condition. When you use a combination of `begins with` and `ends with`, ThoughtSpot still returns your results using an `AND` condition. When using multiple `begins with` on different columns, ThoughtSpot returns results using an `AND` condition.

For example, if you search for `state name begins with "V" state name begins with "C"`, your results are Virginia, Vermont, California, and Connecticut. If you search for `state name begins with V state name ends with T`, your only result is Vermont.

## Number

{% include content/keywords-number.md %}

## Comparative

{% include content/keywords-comparative.md %}

## Location

{% include content/keywords-location.md %}

## Period

{% include content/keywords-period.md %}

## In / Not in

{% include content/keywords-in.md %}

Starting with release 6.2, searches with the <code>in</code> keyword do not include {null} values. To include these {null} values, create a formula for the relevant attribute in your search, to convert {null} values to 'unknown,' or some similar word.

<!-- ## Help

{% include content/keywords-help.md %} -->
