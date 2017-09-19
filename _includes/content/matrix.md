<table class="wide_table">
  <caption>Privilege and access matrix</caption>
   <colgroup>
      <col style="width:36%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
      <col style="width:4%;">
   </colgroup>
   <thead>
      <tr>
         <th>
            <div><span></span></div>
         </th>
         <th class="rotate">
            <div><span>
               Create/Edit WS
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>Create Agg WS</span></div>
         </th>
         <th class="rotate">
            <div><span>
               Modify Col. Props.<sup>1</sup>
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>Upload Data</span></div>
         </th>
         <th class="rotate">
            <div><span>Download Data</span></div>
         </th>
         <th class="rotate">
            <div><span>Share within Group</span></div>
         </th>
         <th class="rotate">
            <div><span>
               Share with All
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>RLS rules</span></div>
         </th>
         <th class="rotate">
            <div><span>CrUD Relationships</span></div>
         </th>
         <th class="rotate">
            <div><span>Read Relationships</span></div>
         </th>
         <th class="rotate">
            <div><span>
               See Hidden Cols
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>
               Join with Upload Data
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>Schema Viewer</span></div>
         </th>
         <th class="rotate">
            <div><span>Use Data Connect
               </span>
            </div>
         </th>
         <th class="rotate">
            <div><span>Use Scheduler</span></div>
         </th>
         <th class="rotate">
            <div><span>Use Auto-Analyze</span></div>
         </th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Admin</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y<sup>2</sup></td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>
            <div>Can Upload Data</div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>3</sup></div>
         </td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
      </tr>
      <tr>
         <td>
            <div>Can Download Data</div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
      </tr>
      <tr>
         <td>
            <div>Data Management</div>
         </td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>Y</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>
            <div>Y<sup>5</sup></div>
         </td>
         <td>Y</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
      </tr>
      <tr>
         <td>
            <div>Can Auto-Analyze</div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>Can Schedule</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
      </tr>
      <tr>
         <td>
            <div>Can Share with All</div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
      </tr>
      <tr>
         <td>None</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>Y</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>
            <div>Y<sup>4</sup></div>
         </td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
         <td>N</td>
      </tr>
      <tr>
      <td colspan="17">
        <h5>Table notes:</h5>
        <ol>
              <li>Applies to non-owners only.</li>
              <li>Any tables.</li>
              <li>Author of at least one table in relationship.</li>
              <li>Only when read permission for columns used in the relationship.</li>
              <li>With edit permission.</li>
        </ol>
      </td>
      </tr>
   </tbody>
</table>
