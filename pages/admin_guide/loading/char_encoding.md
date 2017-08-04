---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Characters not displaying correctly

Your CSV files are more likely to load smoothly if they are encoded with UTF-8. If you're having problems with some characters rendering incorrectly, you can convert the files to UTF-8 encoding before loading the data.

You might see unexpected characters in your data, especially characters whose ASCII values are at the high and low end of possible values. Some examples of characters that can appear incorrectly are: æ, ñ, ä, í, ö.

If this happens, your data will look like this:

 ![](../../images/bad_chars.png "Incorrectly displaying characters")

Instead of displaying correctly like this:

![](../../images/good_chars.png)

To encode your data as UTF-8:

1.   On Windows, open your CSV file in Notepad. Save the file as CSV with the Unicode option. 
2.   On Linux or MacOS, issue a command like: 

    ```
    $ iconv -f -t UTF-8 <in\_file>.csv > <out\_file>.csv
    ```

3.   Reload the data. 
4.   Attempt to import it again. 

