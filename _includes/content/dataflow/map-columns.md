To map the tables and columns between the external tables and ThoughtSpot's internal database, follow these steps:

1. Open the **Advanced setup** interface by clicking the toggle to open.

    ![Open Advanced setup]({{ site.baseurl }}/images/dataflow-advanced-setup.png "Open Advanced setup")

2. Choose the **Map tables and columns** tab.

3. Notice that the external database and table already appear, under **External data source**.

4. Specify the following information for internal ThoughtSpot storage:

   ![Map tables and columns]({{ site.baseurl }}/images/dataflow-map-tables-columns.png "Map tables and columns")

   <dl id="ts-target">
     <dlentry id="ts-target-database">
    <dt>ThoughtSpot database</dt>
    <dd>Select an existing ThoughtSpot database from the drop-down menu.
      <br/>Mandatory field.</dd></dlentry>
     <dlentry id="ts-target-schema">
       <dt>ThoughtSpot schema</dt>
       <dd>Select an existing ThoughtSpot schema from the drop-down menu.
      <br/>Mandatory fields.</dd></dlentry>
     <dlentry id="ts-target-new-existing">
    <dt>New or Existing table</dt>
    <dd>Mandatory field.<br/>
      <dl>
        <dlentry>
          <dt>Create a new table</dt>
          <dd>Choose this option when you want to load data into a new table.
          <br/>Specify the table name. When you <strong>Save</strong> or <strong>Save and sync</strong>, DataFlow automatically creates a new table inside ThoughtSpot.</dd></dlentry>
        <dlentry><dt>Choose existing table</dt><dd>Choose this option to load data into a table that already exists inside ThoughtSpot. <br/>Select the table name from the drop-down menu.</dd></dlentry></dl>
      </dd></dlentry>
     <dlentry id="ts-target-table-name">
        <dt>ThoughtSpot table</dt>
        <dd>The name of the target table for data sync, inside ThoughtSpot.
        <br/>Mandatory field.</dd></dlentry></dl>
