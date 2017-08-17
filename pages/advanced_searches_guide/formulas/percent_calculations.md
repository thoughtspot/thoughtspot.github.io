---
title: [elephant]
tags: [formatting]
keywords: tbd
last_updated: tbd
summary: "blerg"
sidebar: mydoc_sidebar
---
## About percent (simple number) calculations

You can use simple number functions to perform useful percent calculations.

Simple number functions include addition, subtraction, multiplication, and division.

|Function|Description|Examples|
|--------|-----------|--------|
|\*|Returns the result of multiplying both numbers.| -   `3 * 2 = 6`
-   `price * taxrate`

 |
|+|Returns the result of adding both numbers.| -   `1 + 2 = 3`
-   `price + shipping`

 |
|-|Returns the result of subtracting the second number from the first.| -   `3 - 2 = 1`
-   `revenue - tax`

 |
|/|Returns the result of dividing the first number by the second.| -   `6 / 3 = 2`
-   `markup / retail price`

 |

 ## Calculate percentages

 Calculating percentages is useful when you want to see, for example, the percentage revenue generated from each channel (online, stores, partner, etc.).

 Here is a common percentage example:

 ### Example

 The following example shows you how to figure out the percentage revenue generated from each channel (online, stores, partners, etc.).

 1.  Create the following formula in the Formula Builder, percent revenue = ( sum ( revenue ) / group sum ( revenue ) ) \* 100.
 2.  Now you can search by each channel, using the percent revenue formula that you just created.
