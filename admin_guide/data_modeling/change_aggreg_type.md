# Change the aggregation setting for a column

All types of aggregations can be performed on **MEASURE** columns, and some aggregations can be done on **ATTRIBUTE** columns. You can change the default aggregation type to make combining data more intuitive and faster.

To aggregate a column without having to enter the aggregation type explicitly in your searches every time, you can set a default **Aggregation** for that column. Note that any non-numeric columns \(columns of type **ATTRIBUTE**\) will have a default aggregate type of **NONE**, which you can change to one of the supported aggregation types.

|Aggregate type|Description|
|--------------|-----------|
|**NONE**|Does no aggregation. This is the default for **ATTRIBUTE** type columns.|
|**SUM**|Adds the values together and returns the total. This is the default for **MEASURE** type columns.|
|**AVERAGE**|Calculates the average of all the values.|
|**MIN** |Calculates the minimum value.|
|**MAX**|Calculates the maximum value.|
|**STD\_DEVIATION**|Calculates the standard deviation of all the values.|
|**VARIANCE**|Calculates the variance of all the values.|
|**COUNT**|Calculates the total number of values.|
|**COUNT\_DISTINCT**|Calculates the total number of distinct values.|

1.   Find the column whose default aggregation type you want to change, and select its **Aggregation**. If using the modeling file, use the **AggregationType** setting.
2.   Select the new default aggregation type. 
3.   Save your changes. 

Supposed there is a table containing data about athletes on a sports team. The data contains some numerical values, including points scored, salaries, and jersey numbers for each of the players. Because jersey number is an INTEGER, it would become a column of type **MEASURE** \(not **ATTRIBUTE**\). So it will aggregate, by default. But you may want to make its aggregation type **NONE** instead. This ensures that search results that include jersey number will not attempt to compare or aggregate those values in a way that is not meaningful.

**Related information**  


[Model the data for searching](semantic_modeling.html#)

