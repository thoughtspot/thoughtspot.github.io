---
title: [Migrate or restore worksheets]
last_updated: 10/28/2019
summary: "You can export an entire ThoughtSpot worksheet in a flat-file format. After optional modification, you can migrate it to a different cluster, or restore it to the same cluster."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

In ThoughtSpot, you can download Worksheets to a flat file in `yaml` format, modify it, and subsequently upload the same file either to the same cluster, or to a different cluster. This mechanism supports several scenarios that you may encounter:

- <strong>Migrating from a development environment to a production environment</strong> by downloading the file from the development cluster and uploading the same file into the production cluster
- <strong>Implementing metadata changes outside ThoughtSpot UI</strong>, such as replacing the underlying tables for the entire table, or replacing a single column from one table with a column in another table
- <strong>Making bulk changes</strong>, such as mass renaming of objects defined by the worksheets, and managing duplicates

## Prerequisites

You must have **Edit** permissions for the worksheet.

## Export Worksheet

To export a worksheet, follow these steps:

1. Click **Data** on the top navigation bar.

2. Click the name of the worksheet you want to edit.

3. Click the ellipses ![more options menu]({{ site.baseurl }}/images/icon-ellipses.png){: .inline} (more options) menu in the upper-right side of the screen.

4. From the menu, select **Export Worksheet**.

   Here, we are downloading the *Sales* worksheet.

   ![Export Worksheet]({{ site.baseurl }}/images/worksheet-export.png "Export Worksheet")

5. The worksheet downloads into your default directory.

   You can access the downloaded `*.yaml` file, named for your worksheet either through the file system manager, or by clicking on the name of the downloaded file in the left bottom corner of your Internet browser.

    ![Open downloaded worksheet file]({{ site.baseurl }}/images/worksheet-export-complete.png "Open downloaded worksheet file")

## Working with the Worksheet yaml file

You can change the yaml file that represents the Worksheet.

The yaml file has the following syntax:

<pre>
worksheet:
  name: <em>worksheet_name</em>
  description: |-
    <em>This is a multi-line description of the worksheet</em>
    <em>Description line 2</em>
  tables:
  - name: <em>table_name_1</em>
  - name: <em>table_name_2</em>
  - name: <em>table_name_3</em>
  - name: <em>table_name_4</em>
  - name: <em>table_name_5</em>
  - name: <em>table_name_6</em>
  - name: <em>table_name_7</em>
  - name: <em>table_name_8</em>
  joins:
  - name: <em>join_name_1</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]
  - name: <em>join_name_2</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]
  - name: <em>join_name_3</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]
  - name: <em>join_name_4</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]
  - name: <em>join_name_5</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]
  - name: <em>join_name_6</em>
    source: <em>source_table_name</em>
    destination: <em>destination_table_name</em>
    type: [RIGHT_OUTER | LEFT_OUTER | INNER | OUTER]
    is_one_to_one: [ false | true ]  
  table_paths:
  - id: <em>table_path_name_1</em>
    table: <em>table_name_1</em>
    join_path:
    - join:
      - <em>join_name_1</em>
  - id: <em>table_path_name_2</em>
    table: <em>table_name_2</em>
    join_path:
    - {}
  - id: <em>table_path_name_3</em>
    table: <em>table_name_2</em>
    join_path:
    - join:
      - <em>join_name_1</em>
    - join:
      - <em>join_name_2</em>
      - <em>join_name_3</em>
    - join:
      - <em>join_name_4</em>
      - <em>join_name_5</em>
      - <em>join_name_6</em>
  formulas:
  - name: <em>formula_name_1</em>
    expr: '<em>formula_definition_1</em>'
  - name: <em>formula_name_2</em>
    expr: '<em>formula_definition_2</em>'
  - name: <em>formula_name_3</em>
    expr: '<em>formula_definition_3</em>'
  worksheet_columns:
  - name: '<em>column_name_1</em>'
    description: <em>column_description</em>
    formula_id: '<em>formula_name_2</em>'
    properties:
      column_type: [ MEASURE | ATTRIBUTE ]
      aggregation: [ SUM | COUNT | AVERAGE | MAX | MIN ]
      index_type: [ DONT_INDEX | ]
      is_hidden: [ true | false ]
  - name: '<em>column_name_1</em>'
    description: <em>column_description</em>
    formula_id: '<em>formula_name_2</em>'
    properties:
      column_type: [ MEASURE | ATTRIBUTE ]
      aggregation: [ SUM | ]
      index_type: [ DONT_INDEX | ]
      is_hidden: [ true | false ]    
</pre>

##
