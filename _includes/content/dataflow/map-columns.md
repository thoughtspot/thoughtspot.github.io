To map the columns of the external tables to columns in ThoughtSpot's internal tables, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

2. Choose the **Map tables and columns** tab.

3. Scroll down, to **Map the columns...** section.

4. Specify the following information for columns:

   1. Select (or deselect) **columns** for syncing into ThoughtSpot.<br/>By default, all columns are selected.
   2. **Search** for columns by name; this is very useful for very wide tables.
   3. **Rename** columns in the ThoughtSpot table, for easier search.<br/>To make this change, click the pencil (edit) icon next to the name of the column.
   4. **Change the data type** of the column inside the ThoughtSpot table.<br/>Click the down chevron icon to open the drop-down menu, and select a new data type.<br/>For example, if you know you have integer data, change the default **DOUBLE** datatype to **INT32**.
   5. Set **Primary keys** of the table by toggling the selector to the 'on' position.<br/>Note that several columns may be primary keys.
   6. Set the **Sharding keys** of the table by toggling the selector to the 'on' position.
   7. Specify the **Number of shards** in the table.
   8. Use **Add new formula** to transform your data before loading it into ThoughtSpot. Add logic to incorporate a frequently-used or complex formula at data ingestion, so ThoughtSpot doesn't re-calculate it in every Answer and Pinboard.

      Formulas support all row-level native database functions; we do not support aggregate functions.

      - Click **Add new formula**.
      - In the **Add new formula** interface, name the formula and then build it by specifying the functions, columns, and parameters. Note that the support for functions depends on the support by the native database.
      - Click **Add** to finalize the formula. Notice this adds it to the list of mapped columns.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
