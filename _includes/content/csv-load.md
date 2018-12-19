Any user who belongs to a group that has the privilege **Has administration privileges** or **Can upload user data** can upload their own data from the browser. To load the CSV or Excel file into ThoughtSpot:

1. Sign in to ThoughtSpot.

2. Click **Data**, on the top navigation bar.

3. Click the three-dot **Actions** button in the upper-right corner, and select **Upload Data**.

   ![]({{ site.baseurl }}/images/new_imported_data.png "Upload data")

4. Upload the CSV or Excel file by either of these options:
    * Click **Browse your files** and select the file.
    * Drag and drop the file into the drop area.

     ![]({{ site.baseurl }}/images/spotiq-upload.png "Auto analyze")    

5. Answer the question: **Are the column names already defined in the file header?**

6. Answer the question: **Are the fields separated by?**, and then click **Next**.

7. (Optional) Click the column header names and change them to more useful names.

8. Click **Next**.

9. Review the automatically generated data types for each column, and make any changes you want.

   There are four data types: Text, Integer, Decimal, and Date.

10. Click **Upload**.

    When an upload is complete, the system reports the results and offers you some further actions.

    * Click **Link to existing data** if you want to link the data you uploaded to the data in another table or worksheet.
    * Click **Ask a question** if you want to begin a new search.
    * Click **SpotIQ Auto analyze** if you want to use the SpotIQ feature to find insights in your new data.
