# Data types

ThoughtSpot supports the common data types. Compare these with the data types you want to load, and do any necessary conversion ahead of loading the data.

## Supported data types

The tables you create to receive the data must have the same number of columns and data types as the data you will be loading. Choose a data type for each column from the list of supported data types:

|Kind of data|Supported data types|Details|
|------------|--------------------|-------|
|Character|-   VARCHAR\(*n*\)

|Specify the maximum number of characters, as in VARCHAR\(255\). The size limit is 1GB for VARCHAR values.|
|Floating point|-   DOUBLE
-   FLOAT

|DOUBLE is recommended.|
|Boolean|-   BOOL

|Can be `true` or `false`.|
|Integer|-   INT
-   BIGINT

|INT holds 32 bits.BIGINT holds 64 bits.

|
|Date or time|-   DATE
-   DATETIME
-   TIMESTAMP
-   TIME

|DATETIME, TIMESTAMP, and TIME are stored at the granularity of seconds. TIMESTAMP is identical to DATETIME, but is included for syntax compatibility.

|

**Note:** There is a 1GB limitation on the number of characters for VARCHAR. If you have any VARCHAR data that exceeds this limit, the entire load will fail.

## Geographical data types

For geographical data types, use VARCHAR. For latitude and longitude, you can use either VARCHAR or DOUBLE. After loading the data, designate it as a geographical data type when you [Model data in bulk in the modeling file](../data_modeling/edit_model_file.html#). Wherever abbreviations or codes are used, they are the same as what the USPS \(United States Postal Service\) recognizes.

These types of data can be designated as geographical data, which enables them to be visualized using the Geo chart types:

|GeoType|Description|Type: Example|
|-------|-----------|-------------|
|COUNTRY\_REGION|Countries|-   name: United States
-   long name: United States
-   name\_sort: United States of America
-   abbreviation: U.S.A.
-   adm0\_a3: USA
-   adm0\_a3\_is: USA
-   adm0\_a3\_us: USA
-   admin: United States of America
-   brk\_a3: USA
-   brk\_name: United States
-   formal\_en: United States of America
-   iso\_a2: US
-   iso\_a3: USA
-   iso\_n3: 840

|
|COUNTY|Counties in the United States| -   santa clara county
-   pike county, ohio
-   pike county, OH

 |
|STATE\_PROVINCE|States in the United States|-   name: California
-   US Postal Service abbreviation: CA

|
|LATITUDE|Must be used with LONGITUDE|-   37.421023
-   1.282911

|
|LONGITUDE|Must be used with LATITUDE|-   −122.142103
-   103.848865

|
|ZIP\_CODE|Zip codes and zip codes +4 in the United States|-   po\_name: MT MEADOWS AREA
-   ZIP: "00012"
-   zip2: 12

|
|Other Sub-nation Regions|Administrative regions found in countries other than the United States| -   bremen
-   normandy
-   west midlands

 |

**Note:** You cannot upload your own custom boundaries.

