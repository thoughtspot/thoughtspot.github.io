---
title: [Error code reference]
keywords: error code, error message
last_updated: 07-02-2019 by Roza.Leyderman
toc: true
summary: "This is the list of ThoughtSpot error codes and messages."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---
This topic lists error codes that can appear in ThoughtSpot, with summary information and what actions you can take.
Error codes and messages appear in ThoughtSpot when something goes wrong, either in the application or in logs.

When you see an error code, you will also see a message with a brief summary of what has happened. If there is a remediation action you can take, it will be listed in this references. If there is no action listed, please contact ThoughtSpot Support.

## Metadata Errors {#metadata-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the metadata domain, by code number. The range of errors is <strong>TS-00100</strong> through <strong>TS-00499</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
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
</details>

##  Data Service Errors {#data-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the data service domain, by code number. The range of errors is <strong>TS-00500</strong> through <strong>TS-00699</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
  <tr>
    <th>Code</th>
    <th>Severity</th>
    <th>Summary</th>
    <th>Details</th>
    <th>Action</th>
  </tr>
<tr>
  <td>TS-00500</td>
  <td>ERROR</td>
  <td>Failed to fetch leaf level data</td>
  <td>Failed to fetch leaf level data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00501</td>
  <td>ERROR</td>
  <td>Failed to fetch excel data</td>
  <td>Failed to fetch excel data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00502</td>
  <td>ERROR</td>
  <td>Failed to fetch visualization data</td>
  <td>Failed to fetch visuzliation data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00503</td>
  <td>ERROR</td>
  <td>Failed to fetch visualizations data</td>
  <td>Failed to fetch data for visualizations.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00504</td>
  <td>ERROR</td>
  <td>Failed to fetch chart data</td>
  <td>Failed to fetch table data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00505</td>
  <td>ERROR</td>
  <td>Failed to fetch table data</td>
  <td>Failed to fetch table data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00506</td>
  <td>ERROR</td>
  <td>Failed to fetch worksheet data</td>
  <td>Failed to fetch worksheet data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00507</td>
  <td>ERROR</td>
  <td>Failed to fetch filter data</td>
  <td>Failed to fetch filter data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00508</td>
  <td>ERROR</td>
  <td>Failed to fetch headline data</td>
  <td>Failed to fetch filter data.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00509</td>
  <td>ERROR</td>
  <td>Failed to fetch natural query</td>
  <td>Failed to fetch natural query.</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00510</td>
  <td>INFO</td>
  <td>File upload successful</td>
  <td>None</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00511</td>
  <td>ERROR</td>
  <td>Failed to upload file</td>
  <td>Failed to upload</td>
  <td>None</td>
</tr>
<tr>
  <td>TS-00512</td>
  <td>ERROR</td>
  <td>The pinboard data could not be exported to pdf.</td>
  <td>Uh oh. We're not sure what happened. Please click 'Report Problem' to email a report to your administrator, {adminEmail}.</td>
  <td>None</td>
 </tr>
 </table>
</details>

## Dependency Errors {#dependency-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the dependency domain, by code number. The range of errors is <strong>TS-07800</strong> through <strong>TS-00799</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
  <tr>
    <th>Code</th>
    <th>Severity</th>
    <th>Summary</th>
    <th>Details</th>
    <th>Action</th>
  </tr>
<tr>
    <td>TS-00700</td>
    <td>ERROR</td>
    <td>Failure fetching table dependents</td>
    <td>Failed to fetch dependents for the table.</td>
    <td>None</td>
</tr>
<tr>
    <td>TS-00701</td>
    <td>ERROR</td>
    <td>Failure fetching column dependents</td>
    <td>Failed to fetch dependents for the column.</td>
    <td>None</td>
</tr>
<tr>
    <td>TS-00702</td>
    <td>ERROR</td>
    <td>Failure fetching incomplete items</td>
    <td>Failed to fetch incomplete items.</td>
    <td>None</td>
</tr>
</table>
</details>

## Admin Service Errors {#admin-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the admin service domain, by code number. The range of errors is <strong>TS-00800</strong> through <strong>TS-00899</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
  <tr>
    <th>Code</th>
    <th>Severity</th>
    <th>Summary</th>
    <th>Details</th>
    <th>Action</th>
  </tr>
<tr>
   <td>TS-00800</td>
   <td>ERROR</td>
   <td>Failure fetching MemCache stats</td>
   <td>Failed to fetch MemCache stats.</td>
   <td>None</td>
 </tr>
 <tr>
   <td>TS-00801</td>
   <td>ERROR</td>
   <td>Failure MemCache Clear</td>
   <td>Failed to clear MemCache.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00802</td>
   <td>ERROR</td>
   <td>Failure searching from MemCache</td>
   <td>Failed to search from MemCache.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00803</td>
   <td>ERROR</td>
   <td>Failure fetching Loggers</td>
   <td>Failed to fetch Loggers.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00804</td>
   <td>ERROR</td>
   <td>Failure setting LogLevel</td>
   <td>Failed to set Log Level.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00805</td>
   <td>ERROR</td>
   <td>Failure getting debug info</td>
   <td>Failed to get debug info.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00806</td>
   <td>INFO</td>
   <td>Memcache cleared successfully</td>
   <td>None</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00807</td>
   <td>INFO</td>
   <td>Log level set successfully</td>
   <td>None</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00808</td>
   <td>ERROR</td>
   <td>Failed to report problem</td>
   <td>None</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00809</td>
   <td>INFO</td>
   <td>Problem reported successfully</td>
   <td>None</td>
   <td>None</td>
</tr>
</table>
</details>

## Permissions Errors {#permission-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the permissions domain, by code number. The range of errors is <strong>TS-00900</strong> through <strong>TS-00999</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
  <tr>
    <th>Code</th>
    <th>Severity</th>
    <th>Summary</th>
    <th>Details</th>
    <th>Action</th>
  </tr>
<tr>
   <td>TS-00900</td>
   <td>ERROR</td>
   <td>Failure fetching table permissions</td>
   <td>Failed to fetch table permissions.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00901</td>
   <td>ERROR</td>
   <td>Failure fetching answer permissions</td>
   <td>Failed to fetch answer permissions.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00902</td>
   <td>ERROR</td>
   <td>Failure fetching pinboard permissions</td>
   <td>Failed to fetch pinboard permissions.</td>
   <td>None</td>
</tr>
<tr>
   <td>TS-00903</td>
   <td>ERROR</td>
   <td>Failure getting metadata permissions</td>
   <td>Failed to get metadata permissions.</td>
   <td>None</td>
</tr>
</table>
</details>

## Import Data Errors {#import-data-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the import data domain, by code number. The range of errors is <strong>TS-01000</strong> through <strong>TS-01099</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
<tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
</tr>
 <tr>
  <td>TS-01000</td>
  <td>ERROR</td>
  <td>Data caching failed</td>
  <td>Data caching failed.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01001</td>
  <td>ERROR</td>
  <td>Read Columns failed.</td>
  <td>Failed to read columns.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01002</td>
  <td>ERROR</td>
  <td>Failed to read keys.</td>
  <td>Failed to read keys.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01003</td>
  <td>ERROR</td>
  <td>Failed to read relationships.</td>
  <td>Failed to read relationships.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01004</td>
  <td>ERROR</td>
  <td>Failed to load data.</td>
  <td>Failed to load data.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01005</td>
  <td>ERROR</td>
  <td>Failed to create table.</td>
  <td>Failed to create table.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01006</td>
  <td>ERROR</td>
  <td>Failed to fetch data rows.</td>
  <td>Failed to fetch data rows.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01007</td>
  <td>ERROR</td>
  <td>Failed to delete files.</td>
  <td>Failed to fetch data rows.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01008</td>
  <td>ERROR</td>
  <td>Failed to abort create table.</td>
  <td>Failed to abort create table.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01009</td>
  <td>ERROR</td>
  <td>Failed to create schema.</td>
  <td>Failed to create schema.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01010</td>
  <td>ERROR</td>
  <td>Failed to fetch table models.</td>
  <td>Failed to fetch table models.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01011</td>
  <td>ERROR</td>
  <td>Failed to fetch sample values.</td>
  <td>Failed to fetch sample values.</td>
  <td>None</td>
 </tr>
</table>
</details>

## Scheduled Jobs Errors {#scheduled-jobs-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the scheduled jobs domain, by code number. The range of errors is <strong>TS-01100</strong> through <strong>TS-01199</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="10%" />
<col width="35%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-01100</td>
  <td>INFO</td>
  <td>The list of jobs.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
 </tr>
 <tr>
  <td>TS-01110</td>
  <td>INFO</td>
  <td>Successfully created job.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01111</td>
  <td>ERROR</td>
  <td>The job could not be created.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
 </tr>
 <tr>
  <td>TS-01112</td>
  <td>INFO</td>
  <td>Successfully updated job.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01113</td>
  <td>ERROR</td>
  <td>The job could not be updated.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
 </tr>
 <tr>
  <td>TS-01114</td>
  <td>INFO</td>
  <td>Successfully deleted jobs.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01115</td>
  <td>ERROR</td>
  <td>The job could not be deleted.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
 </tr>
 <tr>
  <td>TS-01116</td>
  <td>INFO</td>
  <td>The job was paused.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01117</td>
  <td>ERROR</td>
  <td>The job could not be paused.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
 </tr>
 <tr>
  <td>TS-01118</td>
  <td>INFO</td>
  <td>The job was resumed</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01119</td>
  <td>ERROR</td>
  <td>The job could not be resumed.</td>
  <td>None</td>
  <td>Please click 'Report Problem' to email a report to your administrator.</td>
  <td></td>
 </tr>
</table>
</details>

## User Admin Service Errors {#user-admin-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the user admin service domain, by code number. The range of errors is <strong>TS-01200</strong> through <strong>TS-01399</strong>.</summary>

<table>
 <colgroup>
 <col width="10%" />
 <col width="10%" />
 <col width="40%" />
 <col width="40%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-01200</td>
  <td>ERROR</td>
  <td>Failed to fetch users list</td>
  <td>Failed to fetch users list</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01201</td>
  <td>ERROR</td>
  <td>Failed to fetch groups list</td>
  <td>Failed to fetch groups list</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01202</td>
  <td>ERROR</td>
  <td>Failed to fetch users and groups list</td>
  <td>Failed to fetch users and groups list</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01203</td>
  <td>ERROR</td>
  <td>Successfully created user</td>
  <td>Successfully created user</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01204</td>
  <td>ERROR</td>
  <td>Failed to create user</td>
  <td>Failed to create user</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01205</td>
  <td>ERROR</td>
  <td>Successfully created group</td>
  <td>Successfully created group</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01206</td>
  <td>ERROR</td>
  <td>Failed to create group</td>
  <td>Failed to create group</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01207</td>
  <td>ERROR</td>
  <td>Successfully updated user</td>
  <td>Successfully updated user</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01208</td>
  <td>ERROR</td>
  <td>Failed to update user</td>
  <td>Failed to update user</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01209</td>
  <td>ERROR</td>
  <td>Successfully updated users</td>
  <td>Successfully updated users</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01210</td>
  <td>ERROR</td>
  <td>Failed to update users</td>
  <td>Failed to update users</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01211</td>
  <td>ERROR</td>
  <td>Successfully updated group</td>
  <td>Successfully updated group</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01212</td>
  <td>ERROR</td>
  <td>Failed to update group</td>
  <td>Failed to update group</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01213</td>
  <td>ERROR</td>
  <td>Successfully updated password</td>
  <td>Successfully updated password</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01214</td>
  <td>ERROR</td>
  <td>Failed to update password</td>
  <td>Failed to update password</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01215</td>
  <td>ERROR</td>
  <td>Successfully deleted users</td>
  <td>Successfully deleted users</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01216</td>
  <td>ERROR</td>
  <td>Failed to delete users</td>
  <td>Failed to delete users</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01217</td>
  <td>ERROR</td>
  <td>Successfully deleted groups</td>
  <td>Successfully deleted groups</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01218</td>
  <td>ERROR</td>
  <td>Failed to delete groups</td>
  <td>Failed to delete groups</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01219</td>
  <td>ERROR</td>
  <td>Successfully assigned users to groups</td>
  <td>Successfully assigned users to groups</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01220</td>
  <td>ERROR</td>
  <td>Failed to assign users to groups</td>
  <td>Failed to assign users to groups</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01221</td>
  <td>ERROR</td>
  <td>Failed to fetch profile pic</td>
  <td>Failed to fetch profile pic</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01222</td>
  <td>INFO</td>
  <td>Successfully uploaded profile pic</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01223</td>
  <td>ERROR</td>
  <td>Failed to upload profile pic</td>
  <td>Failed to upload profile pic</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01224</td>
  <td>ERROR</td>
  <td>Successfully assigned groups to group</td>
  <td>Failed to assign user to group</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01228</td>
  <td>ERROR</td>
  <td>Successfully created role</td>
  <td>Successfully created role</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01229</td>
  <td>ERROR</td>
  <td>Failed to create role</td>
  <td>Failed to create role</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01230</td>
  <td>ERROR</td>
  <td>Successfully deleted role</td>
  <td>Successfully deleted role</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01231</td>
  <td>ERROR</td>
  <td>Failed to delete role</td>
  <td>Failed to delete role</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01232</td>
  <td>ERROR</td>
  <td>Successfully updated role</td>
  <td>Successfully updated role</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01233</td>
  <td>ERROR</td>
  <td>Failed to update role</td>
  <td>Failed to update role</td>
  <td>None</td>
 </tr>
</table>
</details>

## Session Service Errors {#session-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the session service domain, by code number. The range of errors is <strong>TS-01400</strong> through <strong>TS-01599</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-01400</td>
  <td>ERROR</td>
  <td>Failed to fetch session info</td>
  <td>Failed to fetch session info</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01401</td>
  <td>ERROR</td>
  <td>Failed to login</td>
  <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01402</td>
  <td>ERROR</td>
  <td>Failed to logout</td>
  <td>Failed to logout</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01403</td>
  <td>ERROR</td>
  <td>Failed to save client state</td>
  <td>Failed to save client state</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01404</td>
  <td>ERROR</td>
  <td>Failed to fetch login config</td>
  <td>Failed to fetch login config</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01405</td>
  <td>ERROR</td>
  <td>Failed to fetch slack config</td>
  <td>Failed to fetch slack config</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01406</td>
  <td>ERROR</td>
  <td>Health check failed</td>
  <td>Health check failed</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01407</td>
  <td>ERROR</td>
  <td>Failed to fetch health portal token</td>
  <td>Failed to fetch health portal token</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01408</td>
  <td>ERROR</td>
  <td>The health portal release name could not be retrieved</td>
  <td>Uh oh. We're not sure what happened. Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
</table>
</details>

## Data Management Service Errors {#data-management-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the data management service domain, by code number. The range of errors is <strong>TS-01600</strong> through <strong>TS-01799</strong>.</summary>
<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-01600</td>
  <td>ERROR</td>
  <td>Failed to fetch data source types</td>
  <td>Failed to fetch data source types</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01601</td>
  <td>ERROR</td>
  <td>Failed to fetch data source sample values</td>
  <td>Failed to fetch data source sample values</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01602</td>
  <td>ERROR</td>
  <td>Failed to delete data source</td>
  <td>Failed to delete data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01603</td>
  <td>ERROR</td>
  <td>Failed to execute DDL</td>
  <td>Failed to execute DDL</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01604</td>
  <td>ERROR</td>
  <td>Failed to update schedule</td>
  <td>Failed to update schedule</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01605</td>
  <td>ERROR</td>
  <td>Failed to reload tasks</td>
  <td>Failed to reload tasks</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01606</td>
  <td>ERROR</td>
  <td>Failed to stop tasks</td>
  <td>Failed to stop tasks</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01607</td>
  <td>ERROR</td>
  <td>Failed to get creation DDL</td>
  <td>Failed to get creation DDL</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01608</td>
  <td>ERROR</td>
  <td>Failed to load from data source</td>
  <td>Failed to load from data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01609</td>
  <td>ERROR</td>
  <td>Failed to create connection to data source</td>
  <td>Failed to create connection to data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01610</td>
  <td>ERROR</td>
  <td>Failed to create data source</td>
  <td>Failed to create data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01611</td>
  <td>ERROR</td>
  <td>Failed to connect to data source</td>
  <td>Failed to connect to data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01612</td>
  <td>ERROR</td>
  <td>Failed to get data source connection field info</td>
  <td>Failed to get data source connection field info</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01613</td>
  <td>ERROR</td>
  <td>Failed to get connection list for data source</td>
  <td>Failed to get connection list for data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01614</td>
  <td>ERROR</td>
  <td>Failed to get connection attributes for data source</td>
  <td>Failed to get connection attributes for data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01615</td>
  <td>ERROR</td>
  <td>Failed to get connections to data source</td>
  <td>Failed to get connections to data source</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01616</td>
  <td>ERROR</td>
  <td>Failed to fetch data source config</td>
  <td>Failed to fetch data source config</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01617</td>
  <td>ERROR</td>
  <td>Failed to parse sql.</td>
  <td>Failed to parse sql.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01618</td>
  <td>ERROR</td>
  <td>Failed to execute sql.</td>
  <td>Failed to execute sql.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01619</td>
  <td>INFO</td>
  <td>Successfully created connection to data source</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01620</td>
  <td>INFO</td>
  <td>Successfully updated data upload schedule</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01621</td>
  <td>ERROR</td>
  <td>Failed to execute sql.</td>
  <td>Please check the failing command, executed {1} statements successfully.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01622</td>
  <td>ERROR</td>
  <td>Lightweight data-cache disabled</td>
  <td>Lightweight data-cache disabled</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01623</td>
  <td>INFO</td>
  <td>Selected tables were queued for loading.</td>
  <td>Selected tables were queued for loading.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01624</td>
  <td>ERROR</td>
  <td>DataType conversion error.</td>
  <td>No mapping found for source datatype to ThoughtSpot datatype.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01625</td>
  <td>INFO</td>
  <td>Successfully reload task started.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01626</td>
  <td>INFO</td>
  <td>Successfully connected to data source.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01627</td>
  <td>INFO</td>
  <td>Successfully created data source.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01628</td>
  <td>INFO</td>
  <td>Successfully stopped the tasks.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01629</td>
  <td>INFO</td>
  <td>Successfully deleted the connection.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01630</td>
  <td>ERROR</td>
  <td>There was an error deleting this connection.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01631</td>
  <td>INFO</td>
  <td>Successfully executed the DDL.</td>
  <td>None</td>
  <td>None</td>
 </tr>
</table>
</details>

## Cluster Status Service Errors {#cluster-status-service-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the cluster status service domain, by code number. The range of errors is <strong>TS-01800</strong> through <strong>TS-01899</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-01800</td>
  <td>WARNING</td>
  <td>Failed to fetch cluster information from search service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01801</td>
  <td>WARNING</td>
  <td>Failed to fetch table detail information from search service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01802</td>
  <td>WARNING</td>
  <td>Failed to fetch cluster information from database service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01803</td>
  <td>WARNING</td>
  <td>Failed to fetch table detail information from databse service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01804</td>
  <td>WARNING</td>
  <td>Failed to fetch cluster information from cluster management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01805</td>
  <td>WARNING</td>
  <td>Failed to fetch detail information from cluster management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01806</td>
  <td>WARNING</td>
  <td>Failed to fetch log from cluster management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01807</td>
  <td>WARNING</td>
  <td>Failed to fetch snapshot list from cluster management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01808</td>
  <td>WARNING</td>
  <td>Failed to fetch cluster information from alert management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01809</td>
  <td>WARNING</td>
  <td>Failed to fetch cluster information from event service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01810</td>
  <td>WARNING</td>
  <td>Failed to fetch alerts information from alert management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01811</td>
  <td>WARNING</td>
  <td>Failed to fetch events information from alert management service.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01812</td>
  <td>INFO</td>
  <td>Thanks for your feedback!</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01813</td>
  <td>WARNING</td>
  <td>Sorry! Unable to submit the feedback at this moment!</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01814</td>
  <td>INFO</td>
  <td>Successfully exported objects. File can be found at {1}.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01815</td>
  <td>ERROR</td>
  <td>Sorry! Unable to export objects at this moment!</td>
  <td>What happened? {1}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01816</td>
  <td>INFO</td>
  <td>Successfully imported objects</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01817</td>
  <td>ERROR</td>
  <td>Sorry! Unable to import objects at this moment!</td>
  <td>What happened? {1}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-01818</td>
  <td>INFO</td>
  <td>Successfully deleted data source object(s).</td>
  <td>None</td>
  <td>None</td>
 </tr>
</table>
</details>

## API Errors {#api-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the API domain, by code number. The range of errors is <strong>TS-09000</strong> through <strong>TS-09199</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-09000</td>
  <td>ERROR</td>
  <td>The data you are trying to delete has some dependencies</td>
  <td>Some objects depend on the data you are trying to delete</td>
  <td>delete the dependencies before deleting this data.</td>
 </tr>
 <tr>
  <td>TS-09001</td>
  <td>ERROR</td>
  <td>Uh oh. We’re not sure what happened.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09002</td>
  <td>ERROR</td>
  <td>Could not authorize user</td>
  <td>Try logging in again</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09003</td>
  <td>ERROR</td>
  <td>Uh oh. We’re not sure what happened.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09004</td>
  <td>WARNING</td>
  <td>Still loading data, come back soon</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09005</td>
  <td>ERROR</td>
  <td>Uh oh. We’re having trouble getting data for this request.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09006</td>
  <td>ERROR</td>
  <td>Uh oh. We’re having trouble getting data for this request.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09007</td>
  <td>ERROR</td>
  <td>Uh oh. We’re having trouble getting data for this request.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09008</td>
  <td>ERROR</td>
  <td>Something went wrong with your search</td>
  <td>Uh oh. We’re not sure what happened. Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09009</td>
  <td>ERROR</td>
  <td>The calculation engine has timed out. Please try again.</td>
  <td>Please email the trace file to {adminEmail}.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09010</td>
  <td>ERROR</td>
  <td>Cannot open Object</td>
  <td>Object cannot be opened due to errors in some of its dependencies</td>
  <td>None</td>
 </tr>
</table>
</details>

## User Interface Errors {#user-interface-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the user interface domain, by code number. The range of errors is <strong>TS-09500</strong> through <strong>TS-09599</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-09500</td>
  <td>WARNING</td>
  <td>Cannot connect to the calculation engine. Please try again soon.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09501</td>
  <td>WARNING</td>
  <td>The calculation engine has timed out. Please try again.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09502</td>
  <td>WARNING</td>
  <td>Cannot connect to the search engine. Please try again soon.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09503</td>
  <td>WARNING</td>
  <td>The search engine has timed out. Please try again.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09504</td>
  <td>ERROR</td>
  <td>Cannot open {1}</td>
  <td>{1} cannot be opened due to errors in the following dependencies 1 - Type of the object Table/Answer/Pinboard etc.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09505</td>
  <td>WARNING</td>
  <td>We’re still indexing this data, try again soon</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09506</td>
  <td>ERROR</td>
  <td>Object is not present in the system</td>
  <td>{1} is not present in the system 1 - Type of the object Table/Answer/Pinboard etc.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-09507</td>
  <td>ERROR</td>
  <td>ThoughtSpot is unreachable. Please try again soon</td>
  <td>None</td>
  <td>None</td>
 </tr>
</table>
</details>

## Common Errors {#common-errors}
<details>
<summary>The following table lists some common TS (ThoughtSpot) errors, by code number. The range of errors is <strong>TS-10000</strong> through <strong>TS-10099</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="25%" />
<col width="30%" />
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
  <td>TS-10000</td>
  <td>ERROR</td>
  <td>A system error has occurred</td>
  <td>Uh oh. We're not sure what happened. Please contact your administrator.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-10001</td>
  <td>ERROR</td>
  <td>Connection failed</td>
  <td>The metadata store is not reachable.</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10002</td>
  <td>ERROR</td>
  <td>The input is invalid</td>
  <td>Input from the client to the server is invalid.</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10003</td>
  <td>ERROR</td>
  <td>Unfortunately, you can't do that</td>
  <td>You are not authorized to perform {1}. \# {1} – action user is not authorized for</td>
  <td>Please request access from your administrator</td>
 </tr>
 <tr>
  <td>TS-10004</td>
  <td>ERROR</td>
  <td>The user could not be authorized</td>
  <td>User {0} is not authorized to perform {1}. \# {0} – name of the user \# {1} – action user is not authorized for</td>
  <td>Please request access from your administrator</td>
 </tr>
 <tr>
  <td>TS-10005</td>
  <td>ERROR</td>
  <td>The base object is missing</td>
  <td>An underlying object referenced by this object is missing in store.</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10006</td>
  <td>ERROR</td>
  <td>The connection to Zookeeper has failed</td>
  <td>Zookeeper is not reachable.</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10007</td>
  <td>ERROR</td>
  <td>There's invalid parameter(s)</td>
  <td>Invalid parameter values: {0}.</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10008</td>
  <td>ERROR</td>
  <td>The user cannot be found</td>
  <td>User {0} not found in store. \# {0} – name of the user</td>
  <td>Please contact your administrator</td>
 </tr>
 <tr>
  <td>TS-10009</td>
  <td>ERROR</td>
  <td>Cannot add group</td>
  <td>This group already belongs to the group you are trying to add it to.</td>
  <td>None</td>
 </tr>
</table>
</details>

## Internal Database Errors {#internal-database-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the internal database domain, by code number. The range of errors is <strong>TS-10600</strong> through <strong>TS-10699</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-10603</td>
  <td>ERROR</td>
  <td>Falcon query cancelled</td>
  <td>None</td>
  <td>None</td>
</tr>
</table>
</details>

## Data Errors {#data-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the data domain, by code number. The range of errors is <strong>TS-11000</strong> through <strong>TS-11099</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-11001</td>
  <td>ERROR</td>
  <td>Invalid row</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11002</td>
  <td>ERROR</td>
  <td>Invalid table/query resultset</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11003</td>
  <td>ERROR</td>
  <td>Invalid column identifier</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11004</td>
  <td>ERROR</td>
  <td>Invalid visualization identifier</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11005</td>
  <td>ERROR</td>
  <td>No data</td>
  <td>Query execution resulted in no data.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11006</td>
  <td>ERROR</td>
  <td>Query execution failed</td>
  <td>Error in query execution to Falcon.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11007</td>
  <td>ERROR</td>
  <td>Answer data generation failed</td>
  <td>Error in Answer data generation for Sage input.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11008</td>
  <td>ERROR</td>
  <td>Data export failed</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-11009</td>
  <td>ERROR</td>
  <td>Data generation failed</td>
  <td>Error in data generation in Callosum.</td>
  <td>None</td>
 </tr>
</table>
</details>

## Report Generation Errors {#report-generation-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the report generation domain, by code number. The range of errors is <strong>TS-12000</strong> through <strong>TS-12999</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-12700</td>
  <td>ERROR</td>
  <td>Error while exporting data file.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12701</td>
  <td>ERROR</td>
  <td>Invalid input.</td>
  <td>The definition of the job is invalid.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12702</td>
  <td>ERROR</td>
  <td>No author provided.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12703</td>
  <td>ERROR</td>
  <td>No pinboard provided.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12704</td>
  <td>ERROR</td>
  <td>No recipients provided.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12705</td>
  <td>ERROR</td>
  <td>This format is not supported.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12706</td>
  <td>ERROR</td>
  <td>No job name provided.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12707</td>
  <td>ERROR</td>
  <td>No job description provided.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12708</td>
  <td>ERROR</td>
  <td>Pinboard data export error.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12709</td>
  <td>ERROR</td>
  <td>Visualization data export error.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12710</td>
  <td>ERROR</td>
  <td>User data unavailable.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12711</td>
  <td>ERROR</td>
  <td>Configuration information unavailable.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12712</td>
  <td>ERROR</td>
  <td>There are too many recipients.</td>
  <td>The max number of recipients is 1000.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12713</td>
  <td>ERROR</td>
  <td>Attachment size limit exceeded.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-12714</td>
  <td>ERROR</td>
  <td>Recipient domain is not whitelisted.</td>
  <td>None</td>
  <td>None</td>
 </tr>
</table>
</details>

## Additional Metadata Errors {#additional-metadata-errors}
<details>
<summary>The following table lists additional TS (ThoughtSpot) errors in the metadata domain, by code number. The range of errors is <strong>TS-13000</strong> through <strong>TS-13099</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-13001</td>
  <td>ERROR</td>
  <td>Schema creation failed</td>
  <td>Error creating database schema.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13002</td>
  <td>ERROR</td>
  <td>Views creation failed</td>
  <td>Error creating view.</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13003</td>
  <td>ERROR</td>
  <td>The object cannot be found in store</td>
  <td>Object with Id: {0} of type: {1} not found. \# {0} – identity of the object \# {1} – type of object</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13004</td>
  <td>ERROR</td>
  <td>The object is in an invalid state</td>
  <td>Oject with Id: {0} of type: {1} in invalid state. \# {0} – identity of the object \# {1} – type of object</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13005</td>
  <td>ERROR</td>
  <td>Object already exists</td>
  <td>Object with Id: {0} of type: {1} already exists. \# {0} – identity of the object \# {1} – type of object</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13006</td>
  <td>ERROR</td>
  <td>Invalid object type</td>
  <td>Invalid type: {0} provided. \# {1} – type of object</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13007</td>
  <td>ERROR</td>
  <td>Invalid Sage question</td>
  <td>Insufficient or invalid input from Sage: {0}. \# {0} – the invalid input</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13008</td>
  <td>ERROR</td>
  <td>Invalid Sage question</td>
  <td>Input from from Sage – missing columns of type: {0}. \# {0} – column type</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13009</td>
  <td>ERROR</td>
  <td>Invalid Sage question</td>
  <td>Invalid input from Sage – invalid expression: {0}. \# {0} – the invalid expression</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13010</td>
  <td>ERROR</td>
  <td>Sending logical metadata to Sage failed</td>
  <td>Sending logical metadata to Sage failed due to: {0}. \# {0} – reason for failure</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13011</td>
  <td>ERROR</td>
  <td>Answer generation failed</td>
  <td>Answer generation failed due to: {0}. \# {0} – reason for failure</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13012</td>
  <td>ERROR</td>
  <td>Worksheet generation failed</td>
  <td>Worksheet generation failed due to: {0}. \# {0} – reason for failure</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13013</td>
  <td>ERROR</td>
  <td>Service provider unavailable</td>
  <td>Service provider unavailable: {0}. \# {0} – provider details</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13015</td>
  <td>ERROR</td>
  <td>Physical model not loaded</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13016</td>
  <td>ERROR</td>
  <td>Invalid physical schema proto</td>
  <td>Inconsistency in physical schema from Falcon: {0}. \# {0} – error details</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13017</td>
  <td>ERROR</td>
  <td>Invalid duplicate columns</td>
  <td>Duplicate columns: {0}. \# {0} – List of duplicate column identities</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13018</td>
  <td>ERROR</td>
  <td>Cyclic relationship</td>
  <td>Detected cycles: {0}. \# {0} – cycle details</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13019</td>
  <td>WARNING</td>
  <td>Older physical schema version received</td>
  <td>Schema update for older version: {0} received and ignored. \# {0} – received version number</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13020</td>
  <td>ERROR</td>
  <td>Invalid relationship</td>
  <td>Attempted to create invalid relationship: {0}. \# {0} – relationship details</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13022</td>
  <td>ERROR</td>
  <td>Invalid filter values: {values}</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13023</td>
  <td>ERROR</td>
  <td>Creating relationship failed.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13024</td>
  <td>ERROR</td>
  <td>Deleting schema failed.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13025</td>
  <td>ERROR</td>
  <td>Expression validation failed.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13026</td>
  <td>INFO</td>
  <td>Load schedule successfully disabled.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13027</td>
  <td>ERROR</td>
  <td>Load schedule could not be disabled.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13028</td>
  <td>ERROR</td>
  <td>Objects fetched from the connection are invalid for editing datasource.</td>
  <td>None</td>
  <td>To proceed with editing the datasource, please edit the connection below to fetch valid source objects.</td>
 </tr>
 <tr>
  <td>TS-13029</td>
  <td>INFO</td>
  <td>Successfully edited data source connection.</td>
  <td>None</td>
  <td>None</td>
 </tr>
 <tr>
  <td>TS-13030</td>
  <td>ERROR</td>
  <td>Connection test failed.</td>
  <td>None</td>
  <td>Please verify connection attributes.</td>
 </tr>
</table>

</details>

## Loading Errors {#loading-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors in the loading domain, by code number. The range of errors is <strong>TS-30000</strong> through <strong>TS-30099</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-30000</td>
  <td>ERROR</td>
  <td>Table is not ready (data loading in progress).</td>
  <td>None</td>
  <td>None</td>
 </tr>
</table>

</details>

## Timeout Errors {#timeout-errors}
<details>
<summary>The following table lists TS (ThoughtSpot) errors due to timeouts, by code number. The range of errors is <strong>TS-60000</strong> through <strong>TS-64999</strong>.</summary>

<table>
<colgroup>
<col width="10%" />
<col width="10%" />
<col width="35%" />
<col width="35%" />
<col width="10%" />
</colgroup>
 <tr>
  <th>Code</th>
  <th>Severity</th>
  <th>Summary</th>
  <th>Details</th>
  <th>Action</th>
 </tr>
 <tr>
  <td>TS-60000</td>
  <td>ERROR</td>
  <td>Failed to initialize.</td>
  <td>None</td>
  <td>None</td>
</tr>
</table>
</details>
