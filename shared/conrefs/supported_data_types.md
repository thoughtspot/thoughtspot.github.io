# 

ThoughtSpot supports a simplified list of data types:

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

