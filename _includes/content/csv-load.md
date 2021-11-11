Any user who belongs to a group that has the privilege **Has administration privileges** or **Can upload user data** can upload their own data from the browser. To load the CSV or Excel file into ThoughtSpot:

1. Log in to ThoughtSpot from a browser.

2. Click **Data**, on the top navigation bar.

3. Click the ellipses icon
![more options menu icon]({{ site.baseurl }}/images/icon-ellipses.png){: .inline},
in the upper right corner, and select **Upload Data**.

4. In **Step 1: Upload your file**, complete these selections:
    1. Upload the CSV or Excel file by these methods:<br/>
    <dl>
    <dlentry>
    <dt>Browse</dt>
    <dd>Click **Browse your files** and select the file.</dd>
    </dlentry>
    <dlentry>
    <dt>Drag and drop</dt>
    <dd>Move the file from the file manager on your computer into the drop area.</dd>
    </dlentry>
    </dl>
    2. Answer the question **Are the column names already defined in the file header?**<br/>
    The options are **Yes** or **No**.
    3. Answer the question **Are the fields separated by?** by specifying one of:<br/>
    <dl>
    <dt>Comma</dt>
    <dd>(,), example: `Jacket,Winter 2021,yellow,600`</dd>
    <dt>Semicolon</dt>
    <dd>(;), example: `Jacket;Winter 2021;yellow;600`</dd>
    <dt>Pipe</dt>
    <dd>(|), example: `Jacket|Winter 2021|yellow|600`</dd>
    <dt>Space</dt>
    <dd>( ), example: `Jacket "Winter 2021" yellow 600`</dd>
    <dt>Tab</dt>
    <dd>( ), example: `Jacket Winter 2021 yellow 600`</dd>
    </dl><br/>

      Click **Next**.

5. In **Step 2: Set column names**, review your data.

    When necessary, click the column header names to change them to more descriptive and easier names.

    Click **Next**.

6. In **Step 3: Set column types**, review the automatically generated data types for each column, and make necessary changes.

   These are the possible data types: <br/>
   <dl>
   <dlentry>
   </
   </dl>

9. Click **Import**.

    When an upload is complete, the system reports the results and offers you some further actions.

     ![]({{ site.baseurl }}/images/spotiq-upload.png "Auto analyze")

    * Click **Link to Existing Data** if you want to link the data you uploaded to the data in another table or worksheet.
    * Click **Search** if you want to begin a new search.
    * Click **SpotIQ Analyze** if you want to use the SpotIQ feature to find insights in your new data.
