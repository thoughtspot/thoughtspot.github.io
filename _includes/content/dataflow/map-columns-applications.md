To map the columns of the external file columns to columns in ThoughtSpot's internal tables, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.
   <!--<details>
     <summary>See how to  open <strong>Advanced setup</strong></summary>
     <p>
      <img src="../../images/dataflow-advanced-setup.png" alt="Open Advanced setup" /></p>
    </details>-->

2. Choose the **Map tables and columns** tab.

3. Scroll down, to **Map the columns...** section.

4. Specify the following information for columns:

   <!--<details>
     <summary>See the elements of the column-naming screen</summary>
      <p>
      <img src="../../images/dataflow-map-columns-applications.png" alt="Map columns" /></p>
   </details>
-->
   1. Select (or deselect) **columns** for syncing into ThoughtSpot.<br/>By default, all columns are selected.
   2. **Search** for columns by name; this is very useful for very wide tables.
   3. **Rename** columns in the ThoughtSpot table, for easier search.<br/>To make this change, click the pencil (edit) icon next to the name of the column.
   4. **Change the data type** of the column inside the ThoughtSpot table.<br/>Click the down chevron icon to open the drop-down menu, and select a new data type.<br/>For example, if you know you may very large numbers that require extra storage, change the default **FLOAT** datatype to **DOUBLE**.
   5. Set **Primary keys** of the table by toggling the selector to the 'on' position.<br/>Note that several columns may be primary keys.
   6. Set the **Sharding keys** of the table by toggling the selector to the 'on' position.<br/>Note that sharding key columns must be primary key columns.
   7. Specify the **Number of shards** in the table.

5. Save your work by clicking **Save**.<br/>Alternatively, click **Save and sync now** to save your work and sync data at the same time.
