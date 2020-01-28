---
title: [Error code reference]
keywords: tbd
summary: "List of error codes and messages."
toc: false
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This section lists error codes that can appear in ThoughtSpot, with summary information and actions to take.
Error codes and messages are shown in ThoughtSpot when something goes wrong. These messages can appear in the application and in logs.

When you see an error code, you will also see a message with a brief summary of what has happened. If there is a remediation action you can take, it will be listed in this references. If there is no action listed, please contact ThoughtSpot Support.


{% include tip.html content="Only the base code number is listed for each error. So keep this in mind when searching through these codes. For example, error code `TS-00125` is simply listed as `125`." %}


## Metadata Errors (100 - 499)|

<table>
<colgroup>
<col width="20%" />
<col width="5%" />
<col width="25%" />
<col width="25%" />
</colgroup>
  <tr>
    <th>Code</th>
    <th>Severity</th>
    <th>Summary</th>
    <th>Details</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>TS-00100</td>
    <td>INFO</td>
    <td>Success. {1} has been added to {2}. \# {1} – name of visualization \# {2} – {name/link to pinboard}</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00101</td>
    <td>ERROR</td>
    <td>Failure adding {1} to {2}</td>
    <td>Visualization could not be added to {2} \# {1} – name of visualization \# {2} – name/link to pinboard</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00102</td>
    <td>ERROR</td>
    <td>Failure adding {1} to {2} due to corruption</td>
    <td>{1} could not be added to {2} as the pinboard has one or more invalid visualizations</td>
    <td>Please try again after removing the invalid visualization(s) from {2} \# {1} – name of visualization \# {2} – name/link to pinboard</td>
  </tr>
  <tr>
    <td>TS-00103</td>
    <td>INFO</td>
    <td>Success. Visualization has been deleted from {1}. 1 – name/link to pinboard</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00104</td>
    <td>ERROR</td>
    <td>Failure deleting visual from {1}</td>
    <td>Visualization could not be deleted from the pinboard. 1 – name/link to pinboard</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00105</td>
    <td>ERROR</td>
    <td>Failure deleting visual from {1} due to corruption</td>
    <td>Visualization could not be deleted from {1} as the pinboard has one or more invalid visualizations. 1 – name/link to pinboard</td>
    <td>Please try again after removing the invalid visualization(s) from the pinboard</td>
  </tr>
  <tr>
    <td>TS-00106</td>
    <td>INFO</td>
    <td>Success. {1} created successfully. 1 – name/link to pinboard</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00107</td>
    <td>ERROR</td>
    <td>Failure creating {1}. 1 – name/link to pinboard</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00108</td>
    <td>INFO</td>
    <td>Sticker created successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00109</td>
    <td>ERROR</td>
    <td>Failure creating the sticker.</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00110</td>
    <td>INFO</td>
    <td>Sticker deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00111</td>
    <td>ERROR</td>
    <td>Failure deleting sticker.</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00112</td>
    <td>INFO</td>
    <td>Pinboards deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00113</td>
    <td>ERROR</td>
    <td>Failure deleting pinboards</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00114</td>
    <td>INFO</td>
    <td>Answers deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00115</td>
    <td>ERROR</td>
    <td>Failure deleting answers</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00116</td>
    <td>INFO</td>
    <td>Tables deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00117</td>
    <td>ERROR</td>
    <td>Failure deleting tables</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00118</td>
    <td>INFO</td>
    <td>Relationship created successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00119</td>
    <td>ERROR</td>
    <td>Failure creating relationship</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00120</td>
    <td>INFO</td>
    <td>Relationship updated successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00121</td>
    <td>ERROR</td>
    <td>Failure updating the relationship</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00122</td>
    <td>INFO</td>
    <td>Relationship deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00123</td>
    <td>ERROR</td>
    <td>Failure deleting the relationship</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00124</td>
    <td>ERROR</td>
    <td>Failure fetching details for table</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00125</td>
    <td>ERROR</td>
    <td>Failure fetching details for the tables</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00126</td>
    <td>ERROR</td>
    <td>Failure fetching details for datasource</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00127</td>
    <td>ERROR</td>
    <td>Failure fetching details for datasources</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00128</td>
    <td>ERROR</td>
    <td>Failure fetching details for metadata items</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00129</td>
    <td>ERROR</td>
    <td>Failure opening the answer</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00130</td>
    <td>ERROR</td>
    <td>Failure opening the pinboard</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00131</td>
    <td>ERROR</td>
    <td>Failure opening the worksheet</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00132</td>
    <td>INFO</td>
    <td>Table saved successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00133</td>
    <td>ERROR</td>
    <td>There was a problem saving the table</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00134</td>
    <td>INFO</td>
    <td>Visualization update successful</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00135</td>
    <td>ERROR</td>
    <td>Visualization failed to update</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00136</td>
    <td>INFO</td>
    <td>{1} saved 1 – name of answer</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00137</td>
    <td>ERROR</td>
    <td>{1} could not be saved 1 – name of answer</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00138</td>
    <td>INFO</td>
    <td>{1} saved 1 - name of pinboard / link</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00139</td>
    <td>ERROR</td>
    <td>{1} could not be saved 1 - name of pinboard / link</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00140</td>
    <td>INFO</td>
    <td>{1} saved 1 – name of worksheet</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00141</td>
    <td>ERROR</td>
    <td>{1} could not be saved 1 – name of worksheet</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00142</td>
    <td>INFO</td>
    <td>{1} saved 1 – name of answer</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00143</td>
    <td>ERROR</td>
    <td>{1} could not be saved</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}. 1 – name of answer</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00144</td>
    <td>INFO</td>
    <td>{1} saved 1 – name/link to pinboard</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00145</td>
    <td>ERROR</td>
    <td>{1} could not be saved</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}. 1 – name of pinboard</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00146</td>
    <td>INFO</td>
    <td>Worksheet saved</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00147</td>
    <td>ERROR</td>
    <td>Worksheet could not be saved</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00148</td>
    <td>INFO</td>
    <td>Sticker updated</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00149</td>
    <td>ERROR</td>
    <td>The sticker could not be updated</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00150</td>
    <td>INFO</td>
    <td>Successfully assigned sticker</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00151</td>
    <td>ERROR</td>
    <td>The sticker could not be assigned</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00152</td>
    <td>INFO</td>
    <td>Successfully unassigned sticker</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00153</td>
    <td>ERROR</td>
    <td>The sticker could not be unassigned</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00154</td>
    <td>ERROR</td>
    <td>Failed to fetch metadata list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00155</td>
    <td>ERROR</td>
    <td>Failed to fetch table list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00156</td>
    <td>ERROR</td>
    <td>Failed to fetch relationship list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00157</td>
    <td>ERROR</td>
    <td>Failed to fetch answer list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00158</td>
    <td>ERROR</td>
    <td>Failed to fetch pinboard list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00159</td>
    <td>ERROR</td>
    <td>Failed to fetch worksheet list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00160</td>
    <td>ERROR</td>
    <td>Failed to fetch aggregated worksheet list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00161</td>
    <td>ERROR</td>
    <td>Failed to fetch imported data list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00162</td>
    <td>ERROR</td>
    <td>Failed to fetch system table list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00163</td>
    <td>ERROR</td>
    <td>Failed to DB view list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00164</td>
    <td>ERROR</td>
    <td>Failed to fetch data source list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00165</td>
    <td>ERROR</td>
    <td>Failed to fetch column list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00166</td>
    <td>ERROR</td>
    <td>Failed to label list</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00167</td>
    <td>ERROR</td>
    <td>Failed to fetch answer</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00168</td>
    <td>ERROR</td>
    <td>Failed to fetch worksheet</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00169</td>
    <td>INFO</td>
    <td>Aggregated worksheet {1} created 1 – name of aggregated worksheet</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00170</td>
    <td>ERROR</td>
    <td>Failure creating Aggregated Worksheet.</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00171</td>
    <td>INFO</td>
    <td>{1} updated 1 – name of aggregated worksheet</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00172</td>
    <td>ERROR</td>
    <td>{1} failed to update 1 – name of aggregated worksheet</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00173</td>
    <td>ERROR</td>
    <td>{1} failed to update 1 – name of the formula</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00174</td>
    <td>ERROR</td>
    <td>Comments cannot be fetched</td>
    <td>Failed to save client state</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00175</td>
    <td>ERROR</td>
    <td>Comment cannot be created</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00176</td>
    <td>ERROR</td>
    <td>Comment cannot be updated</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00177</td>
    <td>ERROR</td>
    <td>Comment cannot be deleted</td>
    <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00178</td>
    <td>INFO</td>
    <td>Rule saved successfully</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00179</td>
    <td>ERROR</td>
    <td>Rule could not be saved</td>
    <td>We're not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00180</td>
    <td>INFO</td>
    <td>Rule deleted successfully</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00181</td>
    <td>ERROR</td>
    <td>Rule could not be deleted</td>
    <td>We're not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00182</td>
    <td>INFO</td>
    <td>Item deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00183</td>
    <td>ERROR</td>
    <td>Item could not be deleted.</td>
    <td>We're not sure what happened. Please email the trace file to {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00184</td>
    <td>INFO</td>
    <td>Related link created successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00185</td>
    <td>ERROR</td>
    <td>Related link could not be created.</td>
    <td>Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00186</td>
    <td>INFO</td>
    <td>Related link updated successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00187</td>
    <td>ERROR</td>
    <td>Related link could not be updated.</td>
    <td>Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00188</td>
    <td>INFO</td>
    <td>Related link deleted successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00189</td>
    <td>ERROR</td>
    <td>Related link could not be deleted.</td>
    <td>Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00190</td>
    <td>INFO</td>
    <td>Related link detail fetched successfully.</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <td>TS-00191</td>
    <td>ERROR</td>
    <td>Related link detail could not be fetched.</td>
    <td>Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.</td>
    <td>None</td>
  </tr>
</table>

##  Data Service Errors (500 - 699)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-00500|ERROR|Failed to fetch leaf level data|Failed to fetch leaf level data.|None|
|TS-00501|ERROR|Failed to fetch excel data|Failed to fetch excel data.|None|
|TS-00502|ERROR|Failed to fetch visualization data|Failed to fetch visuzliation data.|None|
|TS-00503|ERROR|Failed to fetch visualizations data|Failed to fetch data for visualizations.|None|
|TS-00504|ERROR|Failed to fetch chart data|Failed to fetch table data.|None|
|TS-00505|ERROR|Failed to fetch table data|Failed to fetch table data.|None|
|TS-00506|ERROR|Failed to fetch worksheet data|Failed to fetch worksheet data.|None|
|TS-00507|ERROR|Failed to fetch filter data|Failed to fetch filter data.|None|
|TS-00508|ERROR|Failed to fetch headline data|Failed to fetch filter data.|None|
|TS-00509|ERROR|Failed to fetch natural query|Failed to fetch natural query.|None|
|TS-00510|INFO|File upload successful|None|None|
|TS-00511|ERROR|Failed to upload file|Failed to upload|None|
|TS-00512|ERROR|The pinboard data could not be exported to pdf.|Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.|None|

## Dependency Errors (700 - 799)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-00700|ERROR|Failure fetching table dependents|Failed to fetch dependents for the table.|None|
|TS-00701|ERROR|Failure fetching column dependents|Failed to fetch dependents for the column.|None|
|TS-00702|ERROR|Failure fetching incomplete items|Failed to fetch incomplete items.|None|

## Admin Service Errors (800 - 899)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-00800|ERROR|Failure fetching MemCache stats|Failed to fetch MemCache stats.|None|
|TS-00801|ERROR|Failure MemCache Clear|Failed to clear MemCache.|None|
|TS-00802|ERROR|Failure searching from MemCache|Failed to search from MemCache.|None|
|TS-00803|ERROR|Failure fetching Loggers|Failed to fetch Loggers.|None|
|TS-00804|ERROR|Failure setting LogLevel|Failed to set Log Level.|None|
|TS-00805|ERROR|Failure getting debug info|Failed to get debug info.|None|
|TS-00806|INFO|Memcache cleared successfully|None|None|
|TS-00807|INFO|Log level set successfully|None|None|
|TS-00808|ERROR|Failed to report problem|None|None|
|TS-00809|INFO|Problem reported successfully|None|None|

## Permissions Errors (900 - 999)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-00900|ERROR|Failure fetching table permissions|Failed to fetch table permissions.|None|
|TS-00901|ERROR|Failure fetching answer permissions|Failed to fetch answer permissions.|None|
|TS-00902|ERROR|Failure fetching pinboard permissions|Failed to fetch pinboard permissions.|None|
|TS-00903|ERROR|Failure getting metadata permissions|Failed to get metadata permissions.|None|

## Import Data Errors (1000 - 1099)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01000|ERROR|Data caching failed|Data caching failed.|None|
|TS-01001|ERROR|Read Columns failed.|Failed to read columns.|None|
|TS-01002|ERROR|Failed to read keys.|Failed to read keys.|None|
|TS-01003|ERROR|Failed to read relationships.|Failed to read relationships.|None|
|TS-01004|ERROR|Failed to load data.|Failed to load data.|None|
|TS-01005|ERROR|Failed to create table.|Failed to create table.|None|
|TS-01006|ERROR|Failed to fetch data rows.|Failed to fetch data rows.|None|
|TS-01007|ERROR|Failed to delete files.|Failed to fetch data rows.|None|
|TS-01008|ERROR|Failed to abort create table.|Failed to abort create table.|None|
|TS-01009|ERROR|Failed to create schema.|Failed to create schema.|None|
|TS-01010|ERROR|Failed to fetch table models.|Failed to fetch table models.|None|
|TS-01011|ERROR|Failed to fetch sample values.|Failed to fetch sample values.|None|

## Scheduled Jobs Errors (1100 - 1199)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01100|INFO|The list of jobs.|None|Please click 'Report Problem' to email a report to your administrator.|
|TS-01110|INFO|Successfully created job.|None|None|
|TS-01111|ERROR|The job could not be created.|None|Please click 'Report Problem' to email a report to your administrator.|
|TS-01112|INFO|Successfully updated job.|None|None|
|TS-01113|ERROR|The job could not be updated.|None|Please click 'Report Problem' to email a report to your administrator.|
|TS-01114|INFO|Successfully deleted jobs.|None|None|
|TS-01115|ERROR|The job could not be deleted.|None|Please click 'Report Problem' to email a report to your administrator.|
|TS-01116|INFO|The job was paused.|None|None|
|TS-01117|ERROR|The job could not be paused.|None|Please click 'Report Problem' to email a report to your administrator.|
|TS-01118|INFO|The job was resumed|None|None|
|TS-01119|ERROR|The job could not be resumed.|None|Please click 'Report Problem' to email a report to your administrator.|

## User Admin Service Errors (1200 - 1399)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01200|ERROR|Failed to fetch users list|Failed to fetch users list|None|
|TS-01201|ERROR|Failed to fetch groups list|Failed to fetch groups list|None|
|TS-01202|ERROR|Failed to fetch users and groups list|Failed to fetch users and groups list|None|
|TS-01203|ERROR|Successfully created user|Successfully created user|None|
|TS-01204|ERROR|Failed to create user|Failed to create user|None|
|TS-01205|ERROR|Successfully created group|Successfully created group|None|
|TS-01206|ERROR|Failed to create group|Failed to create group|None|
|TS-01207|ERROR|Successfully updated user|Successfully updated user|None|
|TS-01208|ERROR|Failed to update user|Failed to update user|None|
|TS-01209|ERROR|Successfully updated users|Successfully updated users|None|
|TS-01210|ERROR|Failed to update users|Failed to update users|None|
|TS-01211|ERROR|Successfully updated group|Successfully updated group|None|
|TS-01212|ERROR|Failed to update group|Failed to update group|None|
|TS-01213|ERROR|Successfully updated password|Successfully updated password|None|
|TS-01214|ERROR|Failed to update password|Failed to update password|None|
|TS-01215|ERROR|Successfully deleted users|Successfully deleted users|None|
|TS-01216|ERROR|Failed to delete users|Failed to delete users|None|
|TS-01217|ERROR|Successfully deleted groups|Successfully deleted groups|None|
|TS-01218|ERROR|Failed to delete groups|Failed to delete groups|None|
|TS-01219|ERROR|Successfully assigned users to groups|Successfully assigned users to groups|None|
|TS-01220|ERROR|Failed to assign users to groups|Failed to assign users to groups|None|
|TS-01221|ERROR|Failed to fetch profile pic|Failed to fetch profile pic|None|
|TS-01222|INFO|Successfully uploaded profile pic|None|None|
|TS-01223|ERROR|Failed to upload profile pic|Failed to upload profile pic|None|
|TS-01224|ERROR|Successfully assigned groups to group|Failed to assign user to group|None|
|TS-01228|ERROR|Successfully created role|Successfully created role|None|
|TS-01229|ERROR|Failed to create role|Failed to create role|None|
|TS-01230|ERROR|Successfully deleted role|Successfully deleted role|None|
|TS-01231|ERROR|Failed to delete role|Failed to delete role|None|
|TS-01232|ERROR|Successfully updated role|Successfully updated role|None|
|TS-01233|ERROR|Failed to update role|Failed to update role|None|

## Session Service Errors (1400 - 1599)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01400|ERROR|Failed to fetch session info|Failed to fetch session info|None|
|TS-01401|ERROR|Failed to login|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|TS-01402|ERROR|Failed to logout|Failed to logout|None|
|TS-01403|ERROR|Failed to save client state|Failed to save client state|None|
|TS-01404|ERROR|Failed to fetch login config|Failed to fetch login config|None|
|TS-01405|ERROR|Failed to fetch slack config|Failed to fetch slack config|None|
|TS-01406|ERROR|Health check failed|Health check failed|None|
|TS-01407|ERROR|Failed to fetch health portal token|Failed to fetch health portal token|None|
|TS-01408|ERROR|The health portal release name could not be retrieved|Uh oh. We're not sure what happened. Please email the trace file to {adminEmail}.|None|

## Data Management Service Errors (1600 - 1799)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01600|ERROR|Failed to fetch data source types|Failed to fetch data source types|None|
|TS-01601|ERROR|Failed to fetch data source sample values|Failed to fetch data source sample values|None|
|TS-01602|ERROR|Failed to delete data source|Failed to delete data source|None|
|TS-01603|ERROR|Failed to execute DDL|Failed to execute DDL|None|
|TS-01604|ERROR|Failed to update schedule|Failed to update schedule|None|
|TS-01605|ERROR|Failed to reload tasks|Failed to reload tasks|None|
|TS-01606|ERROR|Failed to stop tasks|Failed to stop tasks|None|
|TS-01607|ERROR|Failed to get creation DDL|Failed to get creation DDL|None|
|TS-01608|ERROR|Failed to load from data source|Failed to load from data source|None|
|TS-01609|ERROR|Failed to create connection to data source|Failed to create connection to data source|None|
|TS-01610|ERROR|Failed to create data source|Failed to create data source|None|
|TS-01611|ERROR|Failed to connect to data source|Failed to connect to data source|None|
|TS-01612|ERROR|Failed to get data source connection field info|Failed to get data source connection field info|None|
|TS-01613|ERROR|Failed to get connection list for data source|Failed to get connection list for data source|None|
|TS-01614|ERROR|Failed to get connection attributes for data source|Failed to get connection attributes for data source|None|
|TS-01615|ERROR|Failed to get connections to data source|Failed to get connections to data source|None|
|TS-01616|ERROR|Failed to fetch data source config|Failed to fetch data source config|None|
|TS-01617|ERROR|Failed to parse sql.|Failed to parse sql.|None|
|TS-01618|ERROR|Failed to execute sql.|Failed to execute sql.|None|
|TS-01619|INFO|Successfully created connection to data source|None|None|
|TS-01620|INFO|Successfully updated data upload schedule|None|None|
|TS-01621|ERROR|Failed to execute sql.|Please check the failing command, executed {1} statements successfully.|None|
|TS-01622|ERROR|Lightweight data-cache disabled|Lightweight data-cache disabled|None|
|TS-01623|INFO|Selected tables were queued for loading.|Selected tables were queued for loading.|None|
|TS-01624|ERROR|DataType conversion error.|No mapping found for source datatype to ThoughtSpot datatype.|None|
|TS-01625|INFO|Successfully reload task started.|None|None|
|TS-01626|INFO|Successfully connected to data source.|None|None|
|TS-01627|INFO|Successfully created data source.|None|None|
|TS-01628|INFO|Successfully stopped the tasks.|None|None|
|TS-01629|INFO|Successfully deleted the connection.|None|None|
|TS-01630|ERROR|There was an error deleting this connection.|None|None|
|TS-01631|INFO|Successfully executed the DDL.|None|None|


## Cluster Status Service Errors (1800 - 1899)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-01800|WARNING|Failed to fetch cluster information from search service.|None|None|
|TS-01801|WARNING|Failed to fetch table detail information from search service.|None|None|
|TS-01802|WARNING|Failed to fetch cluster information from database service.|None|None|
|TS-01803|WARNING|Failed to fetch table detail information from databse service.|None|None|
|TS-01804|WARNING|Failed to fetch cluster information from cluster management service.|None|None|
|TS-01805|WARNING|Failed to fetch detail information from cluster management service.|None|None|
|TS-01806|WARNING|Failed to fetch log from cluster management service.|None|None|
|TS-01807|WARNING|Failed to fetch snapshot list from cluster management service.|None|None|
|TS-01808|WARNING|Failed to fetch cluster information from alert management service.|None|None|
|TS-01809|WARNING|Failed to fetch cluster information from event service.|None|None|
|TS-01810|WARNING|Failed to fetch alerts information from alert management service.|None|None|
|TS-01811|WARNING|Failed to fetch events information from alert management service.|None|None|
|TS-01812|INFO|Thanks for your feedback!|None|None|
|TS-01813|WARNING|Sorry! Unable to submit the feedback at this moment!|None|None|
|TS-01814|INFO|Successfully exported objects. File can be found at {1}.|None|None|
|TS-01815|ERROR|Sorry! Unable to export objects at this moment!|What happened? {1}.|None|
|TS-01816|INFO|Successfully imported objects|None|None|
|TS-01817|ERROR|Sorry! Unable to import objects at this moment!|What happened? {1}.|None|
|TS-01818|INFO|Successfully deleted data source object(s).|None|None|

## Callosum API Errors (9000 - 9199)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-09000|ERROR|The data you are trying to delete has some dependencies|Some objects depend on the data you are trying to delete|delete the dependencies before deleting this data.|
|TS-09001|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to {adminEmail}.|None|
|TS-09002|ERROR|Could not authorize user|Try logging in again|None|
|TS-09003|ERROR|Uh oh. We’re not sure what happened.|Please email the trace file to {adminEmail}.|None|
|TS-09004|WARNING|Still loading data, come back soon|None|None|
|TS-09005|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|TS-09006|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|TS-09007|ERROR|Uh oh. We’re having trouble getting data for this request.|Please email the trace file to {adminEmail}.|None|
|TS-09008|ERROR|Something went wrong with your search|Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.|None|
|TS-09009|ERROR|The calculation engine has timed out. Please try again.|Please email the trace file to {adminEmail}.|None|
|TS-09010|ERROR|Cannot open Object|Object cannot be opened due to errors in some of its dependencies|None|
|TS-0Blink Generated Errors (9500 - 9599)|
|TS-09500|WARNING|Cannot connect to the calculation engine. Please try again soon.|None|None|
|TS-09501|WARNING|The calculation engine has timed out. Please try again.|None|None|
|TS-09502|WARNING|Cannot connect to the search engine. Please try again soon.|None|None|
|TS-09503|WARNING|The search engine has timed out. Please try again.|None|None|
|TS-09504|ERROR|Cannot open {1}|{1} cannot be opened due to errors in the following dependencies 1 - Type of the object Table/Answer/Pinboard etc.|None|
|TS-09505|WARNING|We’re still indexing this data, try again soon|None|None|
|TS-09506|ERROR|Object is not present in the system|{1} is not present in the system 1 - Type of the object Table/Answer/Pinboard etc.|None|
|TS-09507|ERROR|ThoughtSpot is unreachable. Please try again soon|None|None|


## Common Errors (10000 - 10099)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-10000|ERROR|A system error has occurred|Uh oh. We're not sure what happened. Please contact your administrator.|None|
|TS-10001|ERROR|Connection failed|The metadata store is not reachable.|Please contact your administrator|
|TS-10002|ERROR|The input is invalid|Input from the client to the server is invalid.|Please contact your administrator|
|TS-10003|ERROR|Unfortunately, you can't do that|You are not authorized to perform {1}. \# {1} – action user is not authorized for|Please request access from your administrator|
|TS-10004|ERROR|The user could not be authorized|User {0} is not authorized to perform {1}. \# {0} – name of the user \# {1} – action user is not authorized for|Please request access from your administrator|
|TS-10005|ERROR|The base object is missing|An underlying object referenced by this object is missing in store.|Please contact your administrator|
|TS-10006|ERROR|The connection to Zookeeper has failed|Zookeeper is not reachable.|Please contact your administrator|
|TS-10007|ERROR|There's invalid parameter(s)|Invalid parameter values: {0}.|Please contact your administrator|
|TS-10008|ERROR|The user cannot be found|User {0} not found in store. \# {0} – name of the user|Please contact your administrator|
|TS-10009|ERROR|Cannot add group|This group already belongs to the group you are trying to add it to.|None|

## Falcon Errors (10600 - 10699)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-10603|ERROR|Falcon query cancelled|None|None|

## Data Errors (11000 - 11099)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-11001|ERROR|Invalid row|None|None|
|TS-11002|ERROR|Invalid table/query resultset|None|None|
|TS-11003|ERROR|Invalid column identifier|None|None|
|TS-11004|ERROR|Invalid visualization identifier|None|None|
|TS-11005|ERROR|No data|Query execution resulted in no data.|None|
|TS-11006|ERROR|Query execution failed|Error in query execution to Falcon.|None|
|TS-11007|ERROR|Answer data generation failed|Error in Answer data generation for Sage input.|None|
|TS-11008|ERROR|Data export failed|None|None|
|TS-11009|ERROR|Data generation failed|Error in data generation in Callosum.|None|

## Report Generation Errors (12000 - 13000)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-12700|ERROR|Error while exporting data file.|None|None|
|TS-12701|ERROR|Invalid input.|The definition of the job is invalid.|None|
|TS-12702|ERROR|No author provided.|None|None|
|TS-12703|ERROR|No pinboard provided.|None|None|
|TS-12704|ERROR|No recipients provided.|None|None|
|TS-12705|ERROR|This format is not supported.|None|None|
|TS-12706|ERROR|No job name provided.|None|None|
|TS-12707|ERROR|No job description provided.|None|None|
|TS-12708|ERROR|Pinboard data export error.|None|None|
|TS-12709|ERROR|Visualization data export error.|None|None|
|TS-12710|ERROR|User data unavailable.|None|None|
|TS-12711|ERROR|Configuration information unavailable.|None|None|
|TS-12712|ERROR|There are too many recipients.|The max number of recipients is 1000.|None|
|TS-12713|ERROR|Attachment size limit exceeded.|None|None|
|TS-12714|ERROR|Recipient domain is not whitelisted.|None|None|

## More Metadata Errors (13000 - 13099)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-13001|ERROR|Schema creation failed|Error creating database schema.|None|
|TS-13002|ERROR|Views creation failed|Error creating view.|None|
|TS-13003|ERROR|The object cannot be found in store|Object with Id: {0} of type: {1} not found. \# {0} – identity of the object \# {1} – type of object|None|
|TS-13004|ERROR|The object is in an invalid state|Oject with Id: {0} of type: {1} in invalid state. \# {0} – identity of the object \# {1} – type of object|None|
|TS-13005|ERROR|Object already exists|Object with Id: {0} of type: {1} already exists. \# {0} – identity of the object \# {1} – type of object|None|
|TS-13006|ERROR|Invalid object type|Invalid type: {0} provided. \# {1} – type of object|None|
|TS-13007|ERROR|Invalid Sage question|Insufficient or invalid input from Sage: {0}. \# {0} – the invalid input|None|
|TS-13008|ERROR|Invalid Sage question|Input from from Sage – missing columns of type: {0}. \# {0} – column type|None|
|TS-13009|ERROR|Invalid Sage question|Invalid input from Sage – invalid expression: {0}. \# {0} – the invalid expression|None|
|TS-13010|ERROR|Sending logical metadata to Sage failed|Sending logical metadata to Sage failed due to: {0}. \# {0} – reason for failure|None|
|TS-13011|ERROR|Answer generation failed|Answer generation failed due to: {0}. \# {0} – reason for failure|None|
|TS-13012|ERROR|Worksheet generation failed|Worksheet generation failed due to: {0}. \# {0} – reason for failure|None|
|TS-13013|ERROR|Service provider unavailable|Service provider unavailable: {0}. \# {0} – provider details|None|
|TS-13015|ERROR|Physical model not loaded|None|None|
|TS-13016|ERROR|Invalid physical schema proto|Inconsistency in physical schema from Falcon: {0}. \# {0} – error details|None|
|TS-13017|ERROR|Invalid duplicate columns|Duplicate columns: {0}. \# {0} – List of duplicate column identities|None|
|TS-13018|ERROR|Cyclic relationship|Detected cycles: {0}. \# {0} – cycle details|None|
|TS-13019|WARNING|Older physical schema version received|Schema update for older version: {0} received and ignored. \# {0} – received version number|None|
|TS-13020|ERROR|Invalid relationship|Attempted to create invalid relationship: {0}. \# {0} – relationship details|None|
|TS-13022|ERROR|Invalid filter values: {values}|None|None|
|TS-13023|ERROR|Creating relationship failed.|None|None|
|TS-13024|ERROR|Deleting schema failed.|None|None|
|TS-13025|ERROR|Expression validation failed.|None|None|
|TS-13026|INFO|Load schedule successfully disabled.|None|None|
|TS-13027|ERROR|Load schedule could not be disabled.|None|None|
|TS-13028|ERROR|Objects fetched from the connection are invalid for editing datasource.|None|To proceed with editing the datasource, please edit the connection below to fetch valid source objects.|
|TS-13029|INFO|Successfully edited data source connection.|None|None|
|TS-13030|ERROR|Connection test failed.|None|Please verify connection attributes.|

## Loading Errors (30000 - 30099)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-30000|ERROR|Table is not ready (data loading in progress).|None|None|


## Timely Errors (60000 - 64999)

|Code|Severity|Summary|Details|Action|
|-----|--------|-------|-------|------|
|TS-60000|ERROR|Failed to initialize.|None|None|
