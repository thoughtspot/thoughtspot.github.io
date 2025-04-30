This process enables you to connect through custom queries, rather than a specific table in a database.

1. In the **Add table sync** interface, instead of selecting a table in a **Database**, scroll downwards to **CustomSQL**, and click **Add new**.

2. Supply the following information:

   - **ThoughtSpot database**
   - **ThoughtSpot schema**
   - Either **Create a new table** or **Choose existing table**
   - **SQL name** is the name of your custom SQL operation
   - **SQL condition** is the custom SQL operation.

3. After you supply a valid **SQL name** and **SQL condition**, the system enables the **Retrieve sample values** function.

   Click **Retrieve sample values** to fetch sync attributes.

   Note that as the system fetches attributes with sample values, it disables unsupported data types.

4. After the system fetches the values, you can view the ThoughtSpot table with the editable name of the selected object.

   Examine the results to ensure that it has the right information: the correct data types, and reasonable sample data.

5. Click **Save** or **Save and sync**.

Note that if you use multiple tables, you have to repeat these steps for each table.
 
