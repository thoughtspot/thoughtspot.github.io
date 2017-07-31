# Take a snapshot

A snapshot takes a point-in-time image of your running cluster. You should create a snapshot before making any changes to the environment, loading a large amount of new data, or changing the structure of a table.

Taking a snapshot is fast, and happens invisibly in the background while the cluster is running. Snapshots take about 20 seconds. Snapshot names must be 44 characters or fewer. You can have up to 20 manual snapshots at a time, after which, you have to clear one before you are able to create another.

If you would like to restore from a snapshot, contact ThoughtSpot Support.

To create a snapshot:

1.   [Log in to the Linux shell using SSH](../setup/login_console.html#). 
2.   Initiate a snapshot, providing a name and reason for creating it: 

    ```
    $ tscli snapshot create <snapshot\_name> <reason>
    ```

3.   Check that the snapshot was created: 

    ```
    $ tscli snapshot ls
    ```


