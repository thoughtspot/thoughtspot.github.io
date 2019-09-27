---
title: [Percent (simple number) calculations]


last_updated: tbd
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
You can use simple number functions to perform useful percent calculations.
Simple number functions include addition, subtraction, multiplication, and
division.

<table>
   <colgroup>
      <col style="width:10%"/>
      <col style="width:45%"/>
      <col style="width:45%"/>
   </colgroup>
   <thead class="thead" style="text-align:left;">
      <tr>
         <th>Function</th>
         <th>Description</th>
         <th>Examples</th>
      </tr>
   </thead>
   <tbody class="tbody">
      <tr>
         <td>&#42;</td>
         <td>Returns the result of multiplying both numbers.</td>
         <td>
            <ul>
               <li><code>3 * 2 = 6</code></li>
               <li><code>price * taxrate</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>+</td>
         <td>Returns the result of adding both numbers.</td>
         <td>
            <ul>
               <li><code>1 + 2 = 3</code></li>
               <li><code>price + shipping</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>-</td>
         <td>Returns the result of subtracting the second number from the first.</td>
         <td>
            <ul>
               <li><code>3 - 2 = 1</code></li>
               <li><code>revenue - tax</code></li>
            </ul>
         </td>
      </tr>
      <tr>
         <td class="entry row-nocellborder" headers="d15914e33 ">/</td>
         <td class="entry row-nocellborder" headers="d15914e36 ">Returns the result of dividing the first number by the second.</td>
         <td class="entry cellrowborder" headers="d15914e39 ">
            <ul>
               <li><code>6 / 3 = 2</code></li>
               <li><code>markup / retail price</code></li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

## Calculate percentages

Calculating percentages is useful when you want to see, for example, the
percentage revenue generated from each channel (online, stores, partner, etc.).
For example, you can figure out the percentage revenue generated from each
channel (online, stores, partners, etc.).

Create a formula called `Percent Revenue`  in the **Formula Assistant**:

`( sum ( revenue ) / group sum ( revenue ) ) \* 100`

Now you can search by each channel, using the percent revenue formula that you just created.
