<table>
  <tr>
    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
    <th>Worksheets</th>
    <th>View</th>
    <th>Materialized View</th>
    <th>Imported table (UI)</th>
    <th>Table uploaded from backend (tsload) or through DataFlow</th>
    <th>Tables from Embrace</th>
    <th>View on top of table from Embrace</th>
  </tr>
  <tr>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td><strong>Necessary permissions:</strong></td>
    <td>None</td>
    <td>None</td>
    <td>None</td>
    <td><strong>Can manage data</strong> permission to load the table</td>
    <td><strong>Admin</strong> privileges to access <code>tsload</code></td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td><strong>Worksheets</strong></td>
    <td><strong>Can edit</strong> permission on the source Worksheet</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&check;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
  </tr>
  <tr>
    <td><strong>View</strong></td>
    <td><strong>Can edit</strong> permission on the source View</td>
    <td>&cross;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&cross;</td>
    <td>&cross;</td>
  </tr>
  <tr>
    <td><strong>Materialized View</strong></td>
    <td><strong>Can edit</strong> permission on the source Materialized View</td>
    <td>&cross;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check; <br><strong>Note:</strong> It is a best practice to create this join through the UI, rather than using <code>TQL</code>.</td>
    <td>&cross;</td>
    <td>&cross;</td>
  </tr>
  <tr>
    <td><strong>Imported table (UI)</strong></td>
    <td><strong>Can edit</strong> permission on the source table</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&check;</td>
    <td>&cross;</td>
    <td>&cross;</td>
  </tr>
  <tr>
    <td><strong>Table uploaded from backend (tsload) or through DataFlow</strong></td>
    <td><strong>Can edit</strong> permission on the source table</td>
    <td>&cross;</td>
    <td>&check;</td>
    <td>&check; <br><strong>Note:</strong> It is a best practice to create this join through the UI, rather than using <code>TQL</code>.</td>
    <td>&check;</td>
    <td>&check; <br><strong>Note:</strong> This join is often used to create Worksheets.</td>
    <td>&cross;</td>
    <td>&cross;</td>
  </tr>
  <tr>
    <td><strong>Table uploaded from Embrace</strong></td>
    <td><strong>Can edit</strong> permission on the source table, and <strong>can manage data</strong> permission</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&check; <br><strong>Note:</strong> The two tables must be from the same connection.</td>
    <td>&check; <br><strong>Note:</strong> The View and the table must be from the same connection.</td>
  </tr>
  <tr>
    <td><strong>View on top of table uploaded from Embrace</strong></td>
    <td><strong>Can edit</strong> permission on the source View</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&cross;</td>
    <td>&check; <br><strong>Note:</strong> The View and the table must be from the same connection.</td>
    <td>&check; <br><strong>Note:</strong> The two Views must be from the same connection.</td>
  </tr>
</table>
