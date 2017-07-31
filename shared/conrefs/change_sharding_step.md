# 

1.  Issue the command to change the sharding using this syntax:

    ```
    TQL> ALTER TABLE <table>
         [SET DIMENSION | SET FACT 
         [PARTITION BY HASH 
         [(<shards>)]
         [KEY(<column>)]]]
    ```

    For example:

    -   To make a sharded table into a dimension table \(replicated on every node\), use:

        ```
        ALTER TABLE "products"
           SET DIMENSION;
        ```

    -   To make a dimension table into a sharded \(fact\) table or change the number of shards, use:

```
ALTER TABLE "sales"
   SET FACT PARTITION BY HASH (96)
   KEY ("productID");
```




