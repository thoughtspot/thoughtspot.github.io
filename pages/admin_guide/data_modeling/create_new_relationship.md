---
title: [elephant]
tags: [formatting]
keywords: notes, tips, cautions, warnings, admonitions
last_updated: July 3, 2016
summary: "blerg"
sidebar: mydoc_sidebar
---
# Create a relationship

You can quickly create a relationship \(or link\) between tables that allows you to combine them in a single search. Choose a column to join on that both tables contain \(e.g. employee ID or product key\).

You must have either administration privilege or modify access permission to the columns to create a relationship.

When creating a link between the columns in two data sources, the columns being linked must have the same data type, with the same meaning. That is, they must represent the same data. Normally, you'll make this kind of link from a fact table column to a column in a dimension table that uniquely identifies a logical entity in your data such as Employee ID for a person, Product ID for a product, or Date Key for a specific date in a date lookup table.

To create a relationship through the Web interface:

1.   Click on **Data**, on the top navigation bar. 

     ![](../../shared/conrefs/../../images/data_icon.png "Data") 

2.   Click on the name of the data source you want to link from. 
3.  Select **Relationships**.

     ![](../../shared/conrefs/../../images/select_relationships.png "Select Relationships") 

4.   If there are already some existing relationships, scroll down and click **Add Relationship**. Otherwise, continue to the next step. 
5.   Click on **Source Column** and select the column you want to link in the source table. 

     ![](../../images/create_relationship_2.png "Select a Source Column") 

6.   Under **Destination Table** find and select the table that you want to link to. 

     ![](../../images/create_relationship_3.png "Find and select a Destination Table") 

7.   Click on **Destination Column** and select the column you want to link to in the destination table. 

     ![](../../images/create_relationship_4.png "Select the Destination Column") 

8.   Click **Add Key** to add the link. 
9.   Name your relationship and optionally give it a description. 

     ![](../../images/create_relationship_5.png "Name the Relationship") 

10.  Click **Add Relationship**. 
11.  Repeat these steps for creating a link until all the links you want to make for your table have been created. 

