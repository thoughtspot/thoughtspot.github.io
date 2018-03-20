The language the ThoughtSpot UX displays is based off of the locale in a user's
profile. The locale preferences control the language and data formats (date and
number formats) by geographic locations. In addition to American English (*en-US*),
ThoughtSpot supports:

| Locale |  Language  
|---|---|
| *de-DE*|  German  |
| *en-CA* | Canadian English  |
| *en-GB* | United Kingdom English  |
| *en-US (beta)* | English (United States)  |
| *es-US* | Spanish (United States)  |
| *fr-CA (beta)* | French (Canada)  |
| *fr-FR (beta)* | French (France)  |
| *ja*    | Japanese  |
| *pt-BR (beta)* | Portuguese (Brazil)  |
| *zh-CN (beta)* | Chinese (S)  |

Date and number formats change to reflect your locale. So, if you set Japanese
as your default locale in your profile settings, then the interface will update
to reflect that after you refresh your page.

Keywords, operators, and error messages are included in the translated material.
Formulas, however, are _not translated_. Also, all metadata remains as user
inputted.

![]({{ site.baseurl }}/images/profile-locale.png "Specify Profile locale")

For example, if you are using ThoughtSpot in the US, the number formatting
should look like this: `xxx,xxx.xx`. And in Europe, it should look like this:
`xxx.xxx,xx`.

{% include warning.html content="It is possible that you set your locale but
find strings in the UI still appear in English, this indicates an untranslated
string. Please notify ThoughtSpot support." %}
