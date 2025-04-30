You can append data to your existing system tables through the ThoughtSpot application, even if the tables were initially loaded using Data Connect or `tsload`. The CSV file must have the same structure as the table it is being loaded into, including number and type of columns, in the same order as the target table.

To append data into ThoughtSpot:

1.   Log in to ThoughtSpot from a browser.
2.   Click on **Data**, on the top navigation bar.

     ![]({{ site.baseurl }}/images/data_icon.png "Data")

3.   Click the on the table you would like to append data to.
4.   Click the **Load data** button.

     ![]({{ site.baseurl }}/images/load_data_icon.png "Load data")

5. Upload the CSV or Excel file by doing one of these options:
    -   Click on **Browse your files** and select the file.
    -   Drag and drop the file into the drop area.
6. Answer the question **Are the column names already defined in the file header?**
7. Answer the question **Do you want to append to the existing data or overwrite it?**
8. Answer the question **Are the fields separated by?** Click **Next**.
9. Click on the column header names to change them to more useful names, if you'd like. Click **Next**.
10.  Review the automatically generated data types for each column, and make any changes you want.
  There are four data types: `Text`, `Integer`, `Decimal`, and `Date`.
11.  Click **Import**.
12.  Click **Link to Existing Data** if you want to link the data you uploaded to the data in another table or worksheet. Or click **Search** if you want to begin a new search.
