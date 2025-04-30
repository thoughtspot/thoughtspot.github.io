The language the ThoughtSpot UI displays is based off of the locale in a user's
profile. The Preferred Locale preferences controls the language and data formats (date and
number formats) by geographic locations. In addition to American English (*en-US*),
ThoughtSpot supports:

| Locale |  Language  
|---|---|
| *da-DK* | Dansk  |
| *de-DE* | Deutsche  |
| *en-AU* | English (Australia)  |
| *en-CA* | English (Canada)  |
| *en-GB* | English (United Kingdom)  |
| *en-US* | English (United States)  |
| *es-US* | Español (latín)  |
| *es-ES* | Español (España)  |
| *fr-CA* | Français (Canada)  |
| *fr-FR* | Français (France)  |
| *it-IT* | Italiano  |
| *nl-NL* | Nederland (beta)  |
| *nb-NO* | Norsk  |
| *pt-BR* | Português (Brazil)  |
| *pt-PT* | Português (Portugal)  |
| *fi-FI* | Suomi  |
| *sv-SE* | Svenska  |
| *zh-CN* | 中文(简体)  |
| *ja-JP* | 日本語  |

Date and number formats change to reflect your locale. So, if you set Japanese
as your default locale in your profile settings, then the interface will update
to reflect that after you refresh your page.

Keywords, operators, and error messages are included in the translated material.
(A [keyword reference for all supported languages]({{ site.baseurl }}/reference/keywords.html)
is included in this documentation under "Keywords in Other Languages".)  

Formulas, however, are _not translated_. Also, all metadata remains as user
inputted.

![]({{ site.baseurl }}/images/profile-locale.png "Specify Profile locale")

For example, if you are using ThoughtSpot in the US, the number formatting
should look like this: `xxx,xxx.xx`. And in Europe, it should look like this:
`xxx.xxx,xx`.
