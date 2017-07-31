# Model data in bulk in the modeling file

Properties of your data such as Column Names, Column Visibility, Column and Data Definition, Column Rank, etc. are defined in the modeling file. Use the model file when you want to edit these settings in bulk.

If you just want to make one or two quick changes, it will be faster to [Model data in the ThoughtSpot application](model_data_in_UI.html#) instead.

Data modeling is a three steps process:

1.  [Download the model file](get_model_file.html#).
2.  [Change settings in the model file](change_setting_model_file.html#).
3.  [Upload the edited model file](upload_model_file.html#).

You can edit the data modeling file using Microsoft Excel, vi/vim, or a compatible tool. In each row of the modeling file, all the data properties corresponding to a column from your data are listed. You can modify many of these properties by typing in the new value.

Remember these important guidelines when editing the model file:

-   Do not modify any value in a column which contains **DoNotModify** in the field under the column heading.
-   Make sure to keep the file in the same format as it had when you downloaded it \(CSV text file\).

**Related information**  


[Data modeling settings](data_modeling_settings.html#)

[Model data in the ThoughtSpot application](model_data_in_UI.html)

