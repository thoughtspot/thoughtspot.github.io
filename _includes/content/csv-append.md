You can append data to your existing system tables through the ThoughtSpot application, even if the tables were initially loaded using Data Connect or `tsload`. The CSV file must have the same structure as the table it is being loaded into, including number and type of columns, in the same order as the target table.

To append data into ThoughtSpot:

1.   Sign in to ThoughtSpot.
2.   Click **Data**, on the top navigation bar.

     ![]({{ site.baseurl }}/images/data_icon.png "Data")

3.   Click the the name of the table you would like to append data to.
4.   Click the **Load Data** button.

     ![]({{ site.baseurl }}/images/load_data_icon.png "Load data")

5. Upload the CSV or Excel file by doing one of these options:
    -   Click **Browse your files** and select the file.
    -   Drag and drop the file into the drop area.

     ![]({{ site.baseurl }}/images/spotiq-upload.png "Load data")

6. Answer the question: **Are the column names already defined in the file header?**
7. For the question: **Do you want to append to the existing data or overwrite it?**, select **append**
8. Answer the question: **Are the fields separated by?**, and then click **Next**.
9. (Optional) Click the column header names to change them to more useful names.
10. Click **Next**.
11. (Optional) Review the automatically generated data types for each column, and make any changes you want.
  There are four data types: `Text`, `Integer`, `Decimal`, and `Date`.
12.  Click **Upload**.
When an upload is complete, ThoughtSpot reports the results and offers you some further actions.
-   Click **Link to existing data** if you want to link the data you uploaded to the data in another table or worksheet.
-   Click **Ask a question** if you want to begin a new search.
-   Click SpotIQ Auto analyze if you want to use the SpotIQ feature to find insights in your new data.
